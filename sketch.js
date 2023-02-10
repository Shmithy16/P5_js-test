let bubbles = [];
// let unicorn;

function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 1000; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10,50);
  bubbles[i] = new Bubble(x,y,r);
  }
//   unicorn = new Bubble(400,200,10);
}

function draw() {
  background(0);
 
  
  
  

  
  
//   unicorn.x = mouseX;
//   unicorn.y = mouseY;
//   unicorn.show();
//   unicorn.move();
  
  for (b of bubbles ){
    b.show();
    b.move();
  //   let overlapping = false;
  //   for(other of bubbles){
  //     if (b !== other && b.intersects(other)){
  //       overlapping = true;
  //   }
  // }
  //   if (overlapping) {
  //     b.changeColour(255);
  //   }else{
  //     b.changeColour(0);
  //   }
}
}
class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  
  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r +other.r);
  }

  
  
  
  
  
  changeColour(bright){
    this.brightness = bright;
  }

  
  contains(px,py){
    let d = dist(px, py, this.x, this.y);
    if(d < this.r) {
      return true;
    }else{
      return false
  }
}
    
  
move(){
  this.x = this.x + random(-2,2);
  this.y = this.y + random(-2,2);
  }
show(){
  stroke(255);
  strokeWeight(5); 
  fill(this.brightness,100);
  ellipse(this.x,this.y,this.r*2); 
  }
}
