let x,y,radius,r,g,b,xDir,yDir,speed,colorAdjust,diameter,nParticles;
let offSet = 0;
let numberOfSquare = 10;
let spacing;
let LineSize;
let offSetAmount;
let randomWalker = [];
let maxWalkers;
let colorPalette = ['#9C27B0','#673AB7','blue','rgb(252,104,255)','rgb(255,0,0)'];
let xCoordinates = [25, 50, 75];
let particles = [];
function setup() {
  createCanvas(1920, 1080);
  
 maxWalkers = 5;
  
  for ( i = 0; i < maxWalkers; i++)
    {
      randomWalker.push(new walker(random(0,width),random(0,height),5,colorPalette[i]))
    }
  
  x = random(1,width);
  y = random(1,height);
  
  nParticles = 500;
  
  for(i = 0; i < nParticles; i++)
    {
        particles.push(new BALL(random(0,width),random(0,height)));
    }
  
  diameter = width;
  spacing = diameter/numberOfSquare;

  radius = random(30,100);

  xDir = random(-100,100);
  yDir = random(-100,100);

  speed = 100;
  
}

function draw() {
  
  for ( i = 0; i < maxWalkers; i++)
    {
      randomWalker[i].display();
      randomWalker[i].walkingDirection();
      randomWalker[i].keepInCanvas();
    }
  
   for (var x = 0; x <= mouseX; x+=25)
    {
      for (var y = 0; y <= mouseY; y+=25)
        {
          fill(x,y,255);
          square(x,y,200,200);
        }
  
  circle(xCoordinates[0], 50, 20);
  
  circle(xCoordinates[0], 75, 20);

  circle(xCoordinates[1], 50, 20);
  
  circle(xCoordinates[1], 75, 20);

  circle(xCoordinates[2], 50, 20);
  
  circle(xCoordinates[2], 75, 20);
  
  circle(xCoordinates[0], 100, 20);
  
  circle(xCoordinates[0], 125, 20);

  circle(xCoordinates[1], 100, 20);
  
  circle(xCoordinates[1], 125, 20);

  circle(xCoordinates[2], 100, 20);
  
  circle(xCoordinates[2], 125, 20);
  
  

  colorAdjust = random(24);
  fill(random(0,255),random(0,0),random(50));
  stroke(20);
  square(x,y,radius);

  
  squareSize = width-20;
  space = width/10;
  lineSize = 10;
  offset = 10;
  
  if((x>height)||(x<5))
    {
      xDir = -xDir;
    }
  if((y>width)||(y<5))
    {
      yDir = -yDir;
    }

      
  x += xDir/speed;
  y += yDir/speed;
  
  for(i = 0; i < nParticles; i++)
    {
      particles[i].circleDraw(10);
      particles[i].update(2);
      particles[i].keepInCanvas();
    }
  
  
   stroke(10);
  strokeWeight(3);
  textSize(90);
 text('MY GOAL IS TO CRASH YOUR COMPUTER', 100, 560);


  text('HOLY SHIT IT REACTS WITH THE MOUSE', 50, 150);
  
    }
  
}

