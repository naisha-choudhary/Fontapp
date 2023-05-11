rightWrist = 0;
leftWrist = 0;
difference = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(700, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet has started working!!");
}


function draw() {
    background('#ff0561');
    textSize(difference);
    text('Naisha', 50, 200)
    fill('white');
    stroke('#eb2828');
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        difference = floor(leftWrist-rightWrist);
    }
}


