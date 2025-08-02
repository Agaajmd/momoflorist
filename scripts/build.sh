#!/bin/bash

# Production Build Script for Momo Florist
echo "🌸 Building Momo Florist for production..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production=false

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the application
echo "🏗️  Building application..."
npm run build

# Generate static export (if needed)
# npm run export

echo "✅ Build completed successfully!"
echo "🚀 Ready for deployment!"
