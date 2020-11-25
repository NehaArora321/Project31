class Particle{
    constructor(x,y,r){
        var options={
            //restitution:0.4,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}