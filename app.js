var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10;
var c = canvas.getContext("2d");
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(500,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(300,300,100,100);
// //Line******************
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa3456";
// c.stroke();

//Arc / Circle********
// c.beginPath();
// c.strokeStyle = "Magenta";
// c.arc(300,300,30,0,Math.PI*2,false);
// c.fill();
// c.stroke();
var innerWidth = canvas.width;
var innerHeight = canvas.height;
function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2);
    c.strokeStyle = "rgba(255,0,30,0.5)";
    c.fillStyle = "rgba(255,0,30,0.5)";
    c.fill();
    c.stroke();
  }
  this.update = function(){

    this.x += this.dx;
    this.y += this.dy;
    if((this.x>innerWidth-this.radius) || (this.x-this.radius<0)){
      this.dx = -this.dx;
    }
    if((this.y>innerHeight-this.radius) || (this.y-this.radius<0)){
      this.dy = -this.dy;
    }
  }
}

var circleArray = [];
for(let i =0;i<100;i++)
{

  var dx = (0.5- Math.random());
  var dy = (0.5-Math.random());
  var radius = Math.random()*30+10;
  var x = Math.random()*(innerWidth - radius*2.2)+radius;
  var y = Math.random()*(innerHeight - radius*2.2)+radius;
  circleArray.push(new Circle(x,y,dx,dy,radius));
}



function animate(){
  c.clearRect(0,0,innerWidth,innerHeight);
  requestAnimationFrame(animate);
  for(let i = 0; i<circleArray.length;i++){
    circleArray[i].draw();
    circleArray[i].update();
  }
}
animate();
