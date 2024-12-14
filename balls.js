class BALL {
  
    constructor(posX,posY)
    {
      this.x = posX;
      this.y = posY;
      this.angle = random(0,360);
      
      this.xDir = random(-2,2);
      this.yDir = random(-2,2);
      
      
    }
    
    circleDraw(radius)
    {
      fill(random(255),random(0),random(0,255));
      noStroke();
      circle(this.x,this.y,radius);
    }
    update(speed)
    {
      this.x += this.xDir*speed;
      this.y += this.yDir*speed;
    }
    keepInCanvas()
    {
      if((this.x < 0)||(this.x > width))
      {
        this.xDir = -this.xDir;
      }
      if((this.y < 0)||(this.y > height))
      {
        this.yDir = -this.yDir;
      }
    }
  }