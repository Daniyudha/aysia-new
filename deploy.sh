#!/bin/bash

# Quick Deploy Script for NuxtJS
# Simple script to build and create deployment bundle

set -e

echo "🚀 Starting NuxtJS deployment..."

# Check if we're in a Nuxt project
if [ ! -f "nuxt.config.ts" ] && [ ! -f "nuxt.config.js" ]; then
    echo "❌ Error: Not a Nuxt project directory"
    exit 1
fi

# Detect package manager
if command -v pnpm >/dev/null 2>&1 && [ -f "pnpm-lock.yaml" ]; then
    PM="pnpm"
elif command -v yarn >/dev/null 2>&1 && [ -f "yarn.lock" ]; then
    PM="yarn"
else
    PM="npm"
fi

echo "📦 Using package manager: $PM"

# Install dependencies
echo "📥 Installing dependencies..."
$PM install

# Build the application
echo "🔨 Building application..."
$PM run build

# Create deployment bundle
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ZIP_NAME="deployment_${TIMESTAMP}.zip"

echo "📦 Creating deployment bundle: $ZIP_NAME"

if command -v zip >/dev/null 2>&1; then
    zip -r "$ZIP_NAME" output/ -x "*.git*" "*.DS_Store" "node_modules/*"
    echo "✅ Deployment bundle created: $ZIP_NAME"
    echo "📊 File size: $(du -h "$ZIP_NAME" | cut -f1)"
else
    echo "❌ zip command not found. Please install zip utility."
    exit 1
fi

echo "🎉 Deployment bundle ready!"
echo "📍 File: $ZIP_NAME"