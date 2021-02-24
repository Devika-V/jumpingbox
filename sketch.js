var canvas;
var music;
var fxrect1,fxrect2,fxrect3,fxrect4;
var mvrect;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces

fxrect1=createSprite(100,500,80,20);
fxrect1.shapeColor=("red");

fxrect2=createSprite(300,500,80,20);
fxrect2.shapeColor=("red");

fxrect3=createSprite(500,500,80,20);
fxrect3.shapeColor=("red");

fxrect4=createSprite(700,500,80,20);
fxrect4.shapeColor=("red");

mvrect=createSprite(400,200,30,30);
mvrect.shapeColor=("yellow");


    //create box sprite and give velocity

}

function draw() {
    background(rgb(160,129,169));
    //create edgeSprite

    mvrect.x=World.mouseX;
    mvrect.y=World.mouseY;
    if(isTouching(mvrect,fxrect1,)){
        mvrect.shapecolor="blue";
        fxrect1.shapeColor="blue";
    }
    else{
        mvrect.shapecolor="yellow";
        fxrect1.shapecolor="red";
    }
    if(isTouching(mvrect,fxrect2)){
        mvrect.shapecolor="blue";
        fxrect2.shapeColor="blue";
    }
    else{
        mvrect.shapecolor="yellow";
        fxrect2.shapecolor="red";
    }
    if(isTouching(mvrect,fxrect3)){
        mvrect.shapecolor="blue";
        fxrect3.shapeColor="blue";
    }
    else{
        mvrect.shapecolor="yellow";
        fxrect3.shapecolor="red";
    } 
    if(isTouching(mvrect,fxrect4)){
        mvrect.shapecolor="blue";
        fxrect4.shapeColor="blue";
    }
    else{
        mvrect.shapecolor="yellow";
        fxrect4.shapecolor="red";
    } 
drawSprites();
    //add condition to check if box touching surface and make it box
}
function isTouching(fxrect1,fxrect2,fxrect3,fxrect4){
    if(fxrect1.x - fxrect2.x < fxrect2.width/2 + fxrect1.width/2
    && fxrect2.x - fxrect1.x < fxrect2.width/2 +fxrect1.width/2 
    &&  fxrect1.y - fxrect2.y < fxrect2.height/2 + fxrect1.height/2
    && fxrect2.y - fxrect1.y < fxrect2.height/2 +fxrect1.height/2 
  //&&fxrect2.x - fxrect3.x < fxrect3.width/2 + fxrect2.width/2
   // && fxrect3.x - fxrect2.x < fxrect3.width/2 +fxrect2.width/2 
   // &&  fxrect2.y - fxrect3.y < fxrect3.height/2 + fxrect2.height/2
 //  && fxrect3.y - fxrect2.y < fxrect3.height/2 +fxrect2.height/2 
    ){
     return true;
    }
    else {
        return false;
    }
}