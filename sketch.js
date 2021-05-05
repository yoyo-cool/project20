var car,wall;
var speed,weight;
var deformity;


function setup() {
  createCanvas(1600,400)
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
if(car.x-wall.x<=wall.width/2+car.width/2 &&
  wall.x-car.x<=wall.width/2+car.width/2 &&
  car.y-wall.y<=wall.height/2+car.height/2 &&
  wall.y-car.y<=wall.height/2+car.height/2 ){
    car.x=50
    car.y=200
    car.velocityX=0
    deformity=((0.5*weight*speed*speed)/22500);
    if(deformity<100){
      car.shapeColor=color("green")
    }else if(deformity>100 && deformity<180){
      car.shapeColor=color("yellow")
    }else {
      car.shapeColor=color("red")
    }
  }
drawSprites();
}