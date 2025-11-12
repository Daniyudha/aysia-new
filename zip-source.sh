#!/bin/bash

# Simple script to zip NuxtJS source code for sharing with developers

echo "📦 Creating source code zip for sharing..."

# Create timestamp for unique filename
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ZIP_NAME="nuxt-source-code_${TIMESTAMP}.zip"

echo "Creating zip file: $ZIP_NAME"

# Create zip file excluding common files that shouldn't be shared
zip -r "$ZIP_NAME" . \
    -x "*.git*" \
    -x "*.DS_Store" \
    -x "node_modules/*" \
    -x "output/*" \
    -x ".output/*" \
    -x ".zed/*" \
    -x ".vscode/*" \
    -x "*.zip" \
    -x "*.log"

# Check if zip was created successfully
if [ $? -eq 0 ]; then
    echo "✅ Source code zip created successfully!"
    echo "📁 File: $ZIP_NAME"
    echo "📊 Size: $(du -h "$ZIP_NAME" | cut -f1)"
else
    echo "❌ Failed to create zip file"
    exit 1
fi