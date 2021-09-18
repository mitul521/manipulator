noseX="";
noseY="";
difference="";
left="";
right="";
function setup(){
canvas = createCanvas(300,300);
canvas.center();
viedo = createCapture(VIDEO);
viedo.size(300,300);
poseNet = ml5.poseNet(viedo,modelloded);
poseNet.on('pose',gotpose);
}
function draw(){
    background('#999999');
    document.getElementById("width").innerHTML="width and height of a text will be "+difference+" px";
    fill("pink");
    stroke("#999999");
    text(noseX,noseY,difference);
}
function modelloded(){
    console.log('posenet is on');
}
function gotpose(result){
    if(result.length > 0){
        console.log(result);
        noseY= result[0].pose.nose.y;
        noseX= result[0].pose.nose.x;
        console.log("noseX="+noseX+"noseY= "+noseY);
        left=result[0].pose.leftWrist.x;
        right=result[0].pose.rightWrist.x;
        difference= floor( left-right);
    }

}