var bg_Img;
var sleep_Img ,bath_Img ,drink_Img ,eat_Img ,gym_Img ,move_Img ,brush_Img;
var astronaut;
var line1 ,line2 ,line3 ,line4;


function preload(){
bg_Img = loadImage("images/iss.png");
sleep_Img = loadAnimation("images/sleep.png");
bath_Img = loadAnimation("images/bath1.png","images/bath2.png");
drink_Img = loadAnimation("images/drink1.png","images/drink2.png");
eat_Img = loadAnimation("images/eat1.png","images/eat2.png");
gym_Img = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
move_Img = loadAnimation("images/move.png","images/move1.png");
brush_Img = loadAnimation("images/brush.png");
}

function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300,230,10,10);
  astronaut.addAnimation("sleeping",sleep_Img);
  astronaut.scale =0.1;

  line1 =createSprite(200,1,400,2);
  line2 =createSprite(200,400,400,2);
  line3 =createSprite(1,200,2,400);
  line4 =createSprite(400,200,2,400);
}

function draw() {

  background(bg_Img)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush_Img);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
  }
   
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym_Img);
    astronaut.changeAnimation("gyming");
    astronaut.y=300;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath_Img);
    astronaut.changeAnimation("bathing");
    astronaut.y=230;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat_Img);
    astronaut.changeAnimation("eating");
    astronaut.y=250;
    astronaut.x=150;
    astronaut.velocityx=1;
    astronaut.velocityy=1;
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("eating",eat_Img);
    astronaut.changeAnimation("eating");
    astronaut.y=200;
    astronaut.x=200;
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  } 

  if(keyDown("d")){
    astronaut.addAnimation("drinking",drink_Img);
    astronaut.changeAnimation("drinking");
    astronaut.y=200;
    astronaut.x=200;
  } 

  createEdgeSprites();
  astronaut.bounceOff(line1);
  astronaut.bounceOff(line2);
  astronaut.bounceOff(line3);
  astronaut.bounceOff(line4);

  drawSprites();
}