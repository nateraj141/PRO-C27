class Bob {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:1.2,
          friction:0.5,
          density:1.2
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      World.add(world, this.body);
    }
    display(){

      
      var posit = this.body.position;
      push();
      translate(posit.x, posit.y);
      ellipseMode(CENTER);
      fill("green");
      ellipse(2, 2, this.radius);
      pop();

    }
}