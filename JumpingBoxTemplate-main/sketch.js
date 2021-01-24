var canvas;
var music;
var ob1,ob2,ob3,ob4 ; 
var lol;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
        ob1 = createSprite(200,100,5,10)
        ob1.shapeColor = "red";
        ob2 = createSprite(400,200,5,10)
        ob2.shapeColor = "green";
        ob3 = createSprite(600,300,5,10)
        ob3.shapeColor = "blue";
    

    //create box sprite and give velocity

}

function draw() {
    background ("white")+;
    //create edgeSprite
    


    //add condition to check if box touching surface and make it box
    drawSprites;
}
