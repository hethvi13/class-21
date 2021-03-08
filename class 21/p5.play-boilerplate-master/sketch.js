var mr//moving rectangle 
var fr//fixed rectangle
var o1
var o2
var o3
var o4
//objects 

function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "red";
  fr = createSprite(400, 300, 50, 50);
  fr.shapeColor = "blue";
  mr.debug = true;
  fr.debug = true;
  o1 = createSprite(600, 200, 50, 50);
  o1.shapeColor = "grey";
  o2 = createSprite(600, 300, 50, 50);
  o2.shapeColor = "pink";
  o3 = createSprite(800, 200, 50, 50);
  o3.shapeColor = "purple";
  o4 = createSprite(1000, 300, 50, 50);
  o4.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX
  mr.y = mouseY
  if (cd(mr, o1)){
    mr.shapeColor = "green";
  o1.shapeColor = "green";
  }
  else if (cd(mr, fr)){
    mr.shapeColor = "green";
  fr.shapeColor = "green";
  }
else if (cd(mr, o2)){
  mr.shapeColor = "green";
o2.shapeColor = "green";
}
else if (cd(mr, o3)){
  mr.shapeColor = "green";
o3.shapeColor = "green";
}
else if (cd(mr, o4)){
  mr.shapeColor = "green";
o4.shapeColor = "green";
}
else {
  mr.shapeColor = "red";
  o1.shapeColor = "grey";
  fr.shapeColor = "blue";
  o2.shapeColor = "pink";
  o3.shapeColor = "purple";
  o4.shapeColor = "yellow";
  }
  drawSprites();
}
function cd(mr, fr){
  if (mr.x - fr.x < fr.width/2 + mr.width/2
    && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2) {
 return true
}
else {
  return false
}
}