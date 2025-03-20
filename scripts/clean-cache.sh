#!/bin/bash
echo "Cleaning cache..."
pnpm store prune
rm -rf node_modules
rm -rf dist
rm -rf .turbo
pnpm install
