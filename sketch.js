const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,partic1;
var divisionHeight=300;

var divisions=[];
var plinkos=[];
var particles=[];
function setup() {
  createCanvas(480,800);
  
  engine=Engine.create();
  world=engine.world;
  ground2=new Ground(240,790,480,20);

  // creating divisions
  for(var i=0;i<=width;i=i+80){
    divisions.push(new Ground(i,height-divisionHeight/2,10,divisionHeight));
  }

  // creating plinkos
  for(var i=15;i<=width;i=i+50){
    plinkos.push(new Plinko(i,75,10));
  }
  
  for(var i=40;i<=width;i=i+50){
    plinkos.push(new Plinko(i,175,10));
  }

  for(var i=15;i<=width;i=i+50){
    plinkos.push(new Plinko(i,275,10))
  }
  
  for(var i=40;i<=width;i=i+50){
    plinkos.push(new Plinko(i,375,10))
  }

  partic1=new Particle(200,10,9);
}

function draw() {
  background(0);  
  Engine.update(engine);
  //drawSprites();
   ground2.display();

   for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display();
  }

  var rand=Math.round(random(20,400));
   if(frameCount%60===0){
     particles.push(new Particle(rand, 10,10));
   }

  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

}

