 var wall,bullet
 var speed,weight
 var damage,thickness

 function setup() {
  createCanvas(800,400);
 wall= createSprite(700, 200, 30, 80);
 bullet= createSprite(100, 200, 30, 30);
speed=random(223,321)
weight=random(30,52)
bullet.velocityX=speed
thickness=random(22,83)
}

function draw() {
 background(255,255,255);  
 if(collide(bullet,wall)){
   bullet.velocityX=0
   damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)

   if(damage>10){
     wall.shapeColor="red"
   }
   else{wall.shapeColor="green"}
 }

 drawSprites()
}

function collide(b,w){
var bre=b.x+b.width
var wle=w.x
if(bre>=wle){
  return true
}
return false
}