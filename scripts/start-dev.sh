#!/usr/bin/env bash
set -e

echo "Starting server..."
cd server
npm run dev &
SERVER_PID=$!

echo "Starting Next.js frontend..."
cd ../next-frontend
npm run dev &
FRONTEND_PID=$!

echo "Both services started."
echo "Server PID: $SERVER_PID"
echo "Frontend PID: $FRONTEND_PID"

# Wait for both processes so script doesn't exit immediately
wait