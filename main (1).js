function preload(){
}

function setup(){
canvas = createCanvas(640,480);
canvas.position(110,250);
video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

}

function draw(){
    image(video, 230, 150, 220, 200);
    

    fill("255, 0, 0");
    stroke("255, 0, 0");
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 4300, 80);

    fill("0, 128, 0");
    stroke("0, 128, 0");
    rect(90, 460, 20);
    rect(90, 460, 20);
    rect(40, 20, 300);
    rect(500, 20, 300);

}

function take_snapshot(){
    save('student_name.png')
}