#!/usr/bin/env bash
set -e

echo "Running server tests..."

cd server
npm run test

echo "Tests finished ✅"