scp  -i "foodtrackernew.pem" -r ./dist/food-tracker-app ec2-user@ec2-3-134-80-99.us-east-2.compute.amazonaws.com:deploy/food_tracker_app

c44df0aa

arn:aws:s3:::c44df0aa

aws s3 cp dist/food-tracker-app s3://c44df0aa --recursive

http://c44df0aa.s3-website.us-east-2.amazonaws.com

s3://c44df0aa.s3.us-east-2.amazonaws.com
