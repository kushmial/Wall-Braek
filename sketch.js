var bullet , wall ;
var speed , thickness;
var damage;
var weight;

function setup() {
  createCanvas(1200,800);
  bullet = createSprite(40,400,30 , 5);
  
  wall = createSprite(1100,400,random(22,83), 400 );

  speed  = random(223,321);
  speed  = Math.round(speed);
  thickness = wall.width;
  thickness = Math.round(thickness);
  weight = random(30,32);
  damage = 0.00012 * weight * speed  / thickness * thickness *thickness;
  damage = Math.round(damage);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  text("Thickness : " + thickness , 650 , 100);
  text("Speed :" + speed +"km/ph" , 550,100);
  text("Damage : " + damage , 450,100);
  if(damage < 40 && wall.x - bullet.x < bullet.width/2 + wall.width/2){
    wall.shapeColor = color(255,0,0);
    bullet.velocityX = 0;
  }
  if(damage > 40 && damage < 70 && wall.x - bullet.x < bullet.width/2 + wall.width/2){
    wall.shapeColor = color(230,230,0);
    bullet.velocityX = 0;
  }
  if(damage >= 70 && wall.x - bullet.x < bullet.width/2 + wall.width/2){
    wall.shapeColor = color(0,255,0);
    bullet.velocityX = 0;
  }
  drawSprites();
}