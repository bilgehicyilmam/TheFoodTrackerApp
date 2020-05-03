#mvn clean package



scp -i "food_tracker_api.pem"  ./target/food_tracker_api-0.0.1.jar ec2-user@ec2-3-17-11-80.us-east-2.compute.amazonaws.com:deploy/food_tracker_api-0.0.1.jar

echo "Uploading to server..."
ssh ec2-user@ec2-3-17-11-80.us-east-2.compute.amazonaws.com -i "food_tracker_api.pem" 'bash -s' < ./scripts/_updateAndRestart.sh
