#!/bin/sh

cd /usr/src/app

echo -n "Running migrations..."
node src/migrations.js
echo 'done'

echo "Starting server..."
node src/index.js