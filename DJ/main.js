song = "";
fong = "";
pong = "";
tall = "";

scoreRightWrist=0;
scoreLeftWrist=0;

RightWristX=0;
RightWristY=0;


LeftWristX=0;
LeftWristY=0;

function preload() {
    song =loadSound("Murder in my mind.mp3");
    fong =loadSound("mystery-skulls-losing-my-mind-official-audio.mp3");   
    pong =loadSound("mark-ambor-its-us-again-lyrics.mp3");
    tall =loadSound("elton-john-im-still-standing-lyrics.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet esta inicializado');
}
function draw() {
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");

    if (scoreLeftWrist > 0.2) {
      circle(LeftWristX,LeftWristY,20);
      InNumberLeftWristY= Number(LeftWristY);
      new_LeftWristY = floor(InNumberLeftWristY *2);
      LeftWristY_divide_1000 = new_LeftWristY/1000;
      document.getElementById("volume").innerHTML = "Volume = "+LeftWristY_divide_1000;
      song.setVolume(LeftWristY_divide_1000); 
      fong.setVolume(LeftWristY_divide_1000); 
      pong.setVolume(LeftWristY_divide_1000); 
      tall.setVolume(LeftWristY_divide_1000); 
    }
    if (scoreRightWrist > 0.2) {
        circle(RightWristX,RightWristY,20);
        
        if (RightWristY > 0 && RightWristY <=100 ) {
            document.getElementById("speed").innerHTML="Speed =0.5x";
            song.rate(0.5);
            fong.rate(0.5);
            pong.rate(0.5);
            tall.rate(0.5);
        } else if (RightWristY > 100 && RightWristY <=200 ) {
            document.getElementById("speed").innerHTML="Speed =1x";
            song.rate(1);
            fong.rate(1);
            pong.rate(1);
            tall.rate(1);
        } else  if (RightWristY > 200 && RightWristY <=300 ) {
            document.getElementById("speed").innerHTML="Speed =1.5x";
            song.rate(1.5);
            fong.rate(1.5);
            pong.rate(1.5);
            tall.rate(1.5);
        } else if (RightWristY > 300 && RightWristY <=400 ) {
            document.getElementById("speed").innerHTML="Speed =2x";
            song.rate(2);
            fong.rate(2);
            pong.rate(2);
            tall.rate(2);
        } else if (RightWristY > 400 && RightWristY <=500 ) {
            document.getElementById("speed").innerHTML="Speed =2.5x";
            song.rate(2.5);
            fong.rate(2.5);
            pong.rate(2.5);
            tall.rate(2.5);
        } 
            
        
        
      }
}
function gotPoses(results) {
if (results.length) {
    scoreRightWrist= results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
   // console.log("scoreRightWrist ="+scoreRightWrist+"scoreLeftWrist ="+scoreLeftWrist);

    RightWristX= results[0].pose.rightWrist.x;
    RightWristY= results[0].pose.rightWrist.y;
    //console.log("rightWristX ="+rightWristX+"rightWristY ="+rightWristY);

    LeftWristX= results[0].pose.leftWrist.x;
    LeftWristY= results[0].pose.leftWrist.y;
    //console.log("leftWristX ="+leftWristX+"leftWristY ="+leftWristY);

}
    
}
function play() 
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function pla() 
{
    fong.play();
    fong.setVolume(1);
    fong.rate(1);
}
function pay() 
{
    pong.play();
    pong.setVolume(1);
    pong.rate(1);
}
function pool() 
{
    tall.play();
    tall.setVolume(1);
    tall.rate(1);
}

