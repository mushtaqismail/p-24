class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':30
    }
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height,options)
		World.add(world, this.body);

	}
	display()
	{
			var stonePos=this.body.position;
            var angle=this.body.angle;		
			push()
			translate(stonePos.x, stonePos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
rect(0,0,this.width,this.height)
			pop()
	}

}