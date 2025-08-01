#!/bin/bash

# Retirement Revolution - GitHub Setup Script
# This script helps set up the GitHub repository and deploy the website

echo "🚀 Retirement Revolution - GitHub Setup"
echo "======================================="
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d "website" ]; then
    echo "❌ Error: Please run this script from the retirement-revolution root directory"
    exit 1
fi

echo "📁 Current directory structure:"
ls -la
echo ""

echo "🔧 Next steps to deploy to GitHub Pages:"
echo ""
echo "1. Create a new GitHub repository:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: retirement-revolution"
echo "   - Make it public (required for GitHub Pages)"
echo "   - Don't initialize with README (we already have one)"
echo ""

echo "2. Add the remote and push:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/retirement-revolution.git"
echo "   git push -u origin main"
echo ""

echo "3. Enable GitHub Pages:"
echo "   - Go to repository Settings > Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages (will be created automatically)"
echo "   - Folder: / (root)"
echo ""

echo "4. The GitHub Actions workflow will automatically:"
echo "   - Build the React application"
echo "   - Deploy to GitHub Pages"
echo "   - Your site will be available at: https://YOUR_USERNAME.github.io/retirement-revolution"
echo ""

echo "🛠️  Local development commands:"
echo "   cd website"
echo "   npm run dev     # Start development server"
echo "   npm run build   # Build for production"
echo "   npm run preview # Preview production build"
echo ""

echo "✅ Project is ready for GitHub deployment!"
echo "🌟 Don't forget to update the README.md with your actual GitHub username"
