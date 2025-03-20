#!/bin/bash
echo "Bumping version ($1)..."
pnpm version $1 --recursive
git add .
git commit -m "chore(release): bump versions"
git push