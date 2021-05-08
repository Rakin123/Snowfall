class Snow{
    constructor(x,y,r){
        var options = {
            density: 0.5,
            restituion: 0,
            friction: 2,
            isStatic: false
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("snow4.webp")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}