mvn clean package

scp -i "foackernew.pem" ./target/food_tracker_api-0.0.1.jar ec2-user@ec2-3-134-80-99.us-east-2.compute.amazonaws.com:deploy/food_tracker_api-0.0.1.jar

echo "Uploading to server..."
ssh ec2-user@ec2-3-134-80-99.us-east-2.compute.amazonaws.com -i "foodtrackernew.pem" 'bash -s' < ./scripts/_updateAndRestart.sh



docker run --name food-mongo -p 27017:27017 mongo & sleep 5