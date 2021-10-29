status=""
object=[]

function preload()
{
   img= loadImage("bedroom.jpg");
}

function setup()
{
   canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Bedroom";
}

status =""
function preload()
{
    img=loadImage("bedroom.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"
}

function modelLoaded()
{
    console.log("Model is loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.log(error);
    }

    else
    {
        console.log(results);
        object=results;
    }

}
function draw()
{
    image(img,0,0,640,420);
    fill("#b50000");
    text("Bedroom",70,100);
    noFill();
    stroke("#ff0000");
    rect(45,70,300,330);

}

function back()
{
    window.location="index.html";
}