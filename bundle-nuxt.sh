#!/bin/bash

# NuxtJS Bundle Script
# This script builds and creates a zip bundle of the NuxtJS application

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to detect package manager
detect_package_manager() {
    if command_exists pnpm && [ -f "pnpm-lock.yaml" ]; then
        echo "pnpm"
    elif command_exists yarn && [ -f "yarn.lock" ]; then
        echo "yarn"
    elif command_exists npm && [ -f "package-lock.json" ]; then
        echo "npm"
    else
        # Default to npm if no lock file found
        if command_exists npm; then
            echo "npm"
        else
            print_error "No package manager found. Please install npm, yarn, or pnpm."
            exit 1
        fi
    fi
}

# Function to install dependencies
install_dependencies() {
    local pm="$1"
    print_status "Installing dependencies using $pm..."
    
    case "$pm" in
        "pnpm")
            pnpm install
            ;;
        "yarn")
            yarn install
            ;;
        "npm")
            npm install
            ;;
    esac
    
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Function to build the application
build_application() {
    local pm="$1"
    print_status "Building NuxtJS application..."
    
    case "$pm" in
        "pnpm")
            pnpm run build
            ;;
        "yarn")
            yarn build
            ;;
        "npm")
            npm run build
            ;;
    esac
    
    if [ $? -eq 0 ]; then
        print_success "Application built successfully"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Function to generate static site (if needed)
generate_static() {
    local pm="$1"
    print_status "Generating static site..."
    
    case "$pm" in
        "pnpm")
            pnpm run generate
            ;;
        "yarn")
            yarn generate
            ;;
        "npm")
            npm run generate
            ;;
    esac
    
    if [ $? -eq 0 ]; then
        print_success "Static site generated successfully"
    else
        print_warning "Static site generation failed or not configured"
    fi
}

# Function to create zip bundle
create_zip_bundle() {
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    local zip_name="nuxt-bundle_${timestamp}.zip"
    
    print_status "Creating zip bundle: $zip_name"
    
    # Check if output directory exists
    if [ ! -d "output" ]; then
        print_error "Output directory not found. Please build the application first."
        exit 1
    fi
    
    # Create zip file
    if command_exists zip; then
        zip -r "$zip_name" output/ -x "*.git*" "*.DS_Store" "node_modules/*"
    else
        print_error "zip command not found. Please install zip utility."
        exit 1
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Zip bundle created: $zip_name"
        echo "File size: $(du -h "$zip_name" | cut -f1)"
    else
        print_error "Failed to create zip bundle"
        exit 1
    fi
}

# Function to create full project bundle
create_full_bundle() {
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    local zip_name="nuxt-full-project_${timestamp}.zip"
    
    print_status "Creating full project bundle: $zip_name"
    
    # Files to include in the bundle
    if command_exists zip; then
        zip -r "$zip_name" \
            . \
            -x "*.git*" \
            -x "*.DS_Store" \
            -x "node_modules/*" \
            -x "output/*" \
            -x "*.zip" \
            -x ".zed/*" \
            -x ".vscode/*"
    else
        print_error "zip command not found. Please install zip utility."
        exit 1
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Full project bundle created: $zip_name"
        echo "File size: $(du -h "$zip_name" | cut -f1)"
    else
        print_error "Failed to create full project bundle"
        exit 1
    fi
}

# Function to clean previous builds
clean_previous_builds() {
    print_status "Cleaning previous builds..."
    
    # Remove output directory if exists
    if [ -d "output" ]; then
        rm -rf output
        print_success "Removed previous output directory"
    fi
    
    # Remove .output directory if exists (default Nuxt output)
    if [ -d ".output" ]; then
        rm -rf .output
        print_success "Removed previous .output directory"
    fi
}

# Main function
main() {
    echo "=========================================="
    echo "    NuxtJS Bundle Script"
    echo "=========================================="
    
    # Check if we're in a Nuxt project
    if [ ! -f "nuxt.config.ts" ] && [ ! -f "nuxt.config.js" ]; then
        print_error "Not a Nuxt project. Please run this script in a Nuxt project directory."
        exit 1
    fi
    
    # Detect package manager
    PACKAGE_MANAGER=$(detect_package_manager)
    print_status "Detected package manager: $PACKAGE_MANAGER"
    
    # Parse command line arguments
    MODE="build"  # Default mode
    CLEAN=false
    
    while [[ $# -gt 0 ]]; do
        case $1 in
            --clean|-c)
                CLEAN=true
                shift
                ;;
            --full|-f)
                MODE="full"
                shift
                ;;
            --static|-s)
                MODE="static"
                shift
                ;;
            --help|-h)
                show_help
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    # Clean if requested
    if [ "$CLEAN" = true ]; then
        clean_previous_builds
    fi
    
    case "$MODE" in
        "build")
            install_dependencies "$PACKAGE_MANAGER"
            build_application "$PACKAGE_MANAGER"
            create_zip_bundle
            ;;
        "static")
            install_dependencies "$PACKAGE_MANAGER"
            build_application "$PACKAGE_MANAGER"
            generate_static "$PACKAGE_MANAGER"
            create_zip_bundle
            ;;
        "full")
            create_full_bundle
            ;;
    esac
    
    echo ""
    print_success "Bundle process completed successfully!"
}

# Function to show help
show_help() {
    echo "Usage: ./bundle-nuxt.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --clean, -c     Clean previous builds before bundling"
    echo "  --full, -f      Create a full project bundle (source code)"
    echo "  --static, -s    Generate static site and bundle"
    echo "  --help, -h      Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./bundle-nuxt.sh                    # Build and create deployment bundle"
    echo "  ./bundle-nuxt.sh --clean            # Clean build and create bundle"
    echo "  ./bundle-nuxt.sh --full             # Create full project source bundle"
    echo "  ./bundle-nuxt.sh --static           # Generate static site and bundle"
}

# Run main function
main "$@"