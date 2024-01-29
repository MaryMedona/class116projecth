noseX=0;
noseY=0;

function preload()
{
mustache=loadImage('https://i.postimg.cc/wxQPmsbk/mustache.jpg');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is inizialised');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
}
}

function draw()
{
image(video,0,0,300,300);
Fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);
image(mustache,noseX,noseY,30,30);
}

function take_snapshot()
{
    save('Mary.png');
}
