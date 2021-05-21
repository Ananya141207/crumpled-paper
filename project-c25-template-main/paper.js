class paper{

constructor(x,y,r){
    var options={
  isStatic:false,
  'restitution':0.3,
  'density':1.2
 }
    this.image=loadImage("paper.png");
   this.body = Bodies.circle(x,y,r,options);
   World.add(world,this.body);
}

display(){
ellipseMode(RADIUS);
fill("yellow")
circle(this.body.position.x,this.body.position.y,this.radius);


}
}