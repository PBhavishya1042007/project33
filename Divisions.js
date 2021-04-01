class Divisions 
{
    constructor(x,y,width,height) 
    {
      var options = 
      {
        'isStatic' : true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display()
    {
      var d =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(d.x, d.y, this.width, this.height);
      pop() ;
    }
  };