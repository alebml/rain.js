window.resizeTo(100,100);

var canvas = document.createElement("canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
canvas.setAttribute("style", "position: absolute; x:0; y:0;");
document.body.appendChild(canvas);

//Then you can draw a point at (10,10) like this:

var ctx = canvas.getContext("2d");
var x_size = 10;
var y_size = 10;

class Particle {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  fall(){
  	this.y  = this.y + 1;
  }
  drawParticle(){
    ctx.fillRect(this.x,this.y,x_size,y_size);
  }
}

let p1 = new Particle(10,10);
p1.drawParticle();


/*
while(){
	var particle_array = []

	//every second,
	//generate particle at random x value
	//add particle to array
	//check that each particle has a value above minimum threshold
	//remove the ones that are below from the array

}
*/