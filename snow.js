class snow {
    constructor(x, y) {
        var options = {
            restitution:0.7,
        }
    
        this.x =x
        this.y =y   
        this.body=Bodies.circle(this.x,this.y,20, options);
        this.image=loadImage("snow4.webp")
        World.add(world, this.body); 
    }
    display() {

        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        
    }
}