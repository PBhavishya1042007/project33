class Box
{
    constructor(x,y,width,height)
    {
        var options=
        {
            'restituttion' : 0,
            'friction' : 0.2,
            'density' : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display()
    {
        var b = this.body.position;
        push();
        rectMode(CENTER);
        fill(255);
        rect(b.x,b.y,this.width,this.height);
        pop();
    }
}