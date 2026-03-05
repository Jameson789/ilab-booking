#!/usr/bin/env bash
set -euo pipefail

# nice error message if anything fails
trap 'echo "❌ Test script failed (exit code $?)."' ERR

# 1) ensure npm exists
if ! command -v npm >/dev/null 2>&1; then
  echo "❌ npm is not installed or not on PATH. Install Node.js (includes npm) and try again."
  exit 127
fi

# 2) ensure server directory exists
if [[ ! -d "server" ]]; then
  echo "❌ Expected ./server directory, but it was not found. Run this from the repo root."
  exit 2
fi

# 3) ensure server/package.json exists
if [[ ! -f "server/package.json" ]]; then
  echo "❌ server/package.json not found."
  exit 2
fi

echo "==> Running server tests..."
cd server
npm run test

echo "✅ Server tests passed"