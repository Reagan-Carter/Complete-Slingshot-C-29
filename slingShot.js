class slingShot{

constructor(BodyA,PointB){
    var options={
        bodyA:BodyA,
        pointB:PointB,
        length:15,
        stiffness:0.04
        }

this.sling1=loadImage("sprites/sling1.png")
this.sling2=loadImage("sprites/sling2.png")
this.sling3=loadImage("sprites/sling3.png")

    this.sling=Constraint.create(options)
World.add(MyWorld,this.sling);
}

fly(){

this.sling.bodyA=null;
}

display(){

image(this.sling1,150,80,30,120)
image(this.sling2,130,80,30,80)

    if(this.sling.bodyA!=null){
    strokeWeight(10)
    stroke(48,22,8)

if(this.sling.bodyA.position.x<150){



   // line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.sling.pointB.x,this.sling.pointB.y); 
    line(this.sling.bodyA.position.x-15,this.sling.bodyA.position.y, this.sling.pointB.x-15,this.sling.pointB.y+10); 
    line(this.sling.bodyA.position.x-15,this.sling.bodyA.position.y, this.sling.pointB.x+20,this.sling.pointB.y+10);
    image(this.sling3,this.sling.bodyA.position.x-25, this.sling.bodyA.position.y-10, 10,20)
    }
    else{ 
        line(this.sling.bodyA.position.x+15,this.sling.bodyA.position.y, this.sling.pointB.x-15,this.sling.pointB.y+10); 
        line(this.sling.bodyA.position.x+15,this.sling.bodyA.position.y, this.sling.pointB.x+20,this.sling.pointB.y+10);
        image(this.sling3,this.sling.bodyA.position.x+20, this.sling.bodyA.position.y-5, 10,20)
    }
}
}

}