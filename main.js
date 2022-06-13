function setup(){
   Canvas=createCanvas(300,300);
   Canvas.center();
   Video=createCapture(VIDEO);
   Video.size(300,300);
   Video.hide();

   PoseNet=ml5.poseNet(Video,modelloaded);
   PoseNet.on('pose',gotposes);
}

function takesnapshot(){
    save('myfilterpic.png');
}

function modelloaded(){
    console.log('posenet is inicialized')
}

function draw(){
    image(Video,0,0,300,300);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
}