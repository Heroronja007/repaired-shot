var thickness, wall;
var bullet, speed, weight;



function setup() {
  createCanvas(1600,400);
  weight=random(30, 52)
  speed=random(223, 321)
  thickness = random(22, 83) 
  bullet=createSprite(50, 200, 100, 50)
  bullet.velocityX = speed;
  bullet.shapeColor = color(255)
  wall=createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(230, 230, 230)
  
}

function draw() {
  background(0, 0, 0);
  
  //if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  //{
  //  bullet.velocityX = 0
  //  var deformation=0.5 * weight * speed * speed/22500;
    //if(deformation<180 && deformation>100)
    //{
      //bullet.shapeColor=color(230, 230, 0)
    //}
    //if(deformation<100)
    //{
      //bullet.shapeColor=color(0, 255, 0)
    //}
    //if(deformation>180)
    //{
      //bullet.shapeColor=color(255, 0, 0)
    //}
  //} 

  if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255, 0, 0)
    }

    if (damage<10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + bullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}