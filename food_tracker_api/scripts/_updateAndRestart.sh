#!/bin/bash

# any future command that fails will exit the script
set -e

echo "Stopping server"
kill -9 $(lsof -t -i:8080)

echo "Copying new version"
cp deploy/food_tracker_api-0.0.1.jar food_tracker_api-0.0.1.jar

echo "Starting server"
nohup java -jar food_tracker_api-0.0.1.jar &