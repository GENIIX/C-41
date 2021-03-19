const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig3;
var backgroundImg, platform;
var bird, slingshot;
var diogenes, mallet, handle;
var boxes = [];
var hold

var gameState = "mallet";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {


}

function setup() {
  var canvas = createCanvas(displayWidth - 20, displayHeight - 100);
  engine = Engine.create();
  world = engine.world;




  ground = new Box(width / 2, height - 17, width, 20);
  // platform = new Ground(150, 305, 300, 170);
  diogenes = new Player(300, height - 29.5, 140, 140);
  mallet = new Mallet(300, height - 29.5, 10, 300);
  handle = new Chain(diogenes.body, mallet.body, { x: 0, y: 50 }, { x: 0, y: -25 });


  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI / 2);

  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig3 = new Pig(810, 220);

  log3 = new Log(810, 180, 300, PI / 2);

  box5 = new Box(810, 160, 70, 70);
  log4 = new Log(760, 120, 150, PI / 7);
  log5 = new Log(870, 120, 150, -PI / 7);

  boxes = [box1, box2, box3, box4, box5,ground];

  //    bird = new Bird(200,220);

  //log6 = new Log(230,180,80, PI/2);
  // slingshot = new SlingShot(bird.body,{x:200, y:50+170});
}

function draw() {



  background("crimson");


  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width - 300, 50)


  Engine.update(engine);
  //strokeWeight(4);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  pig1.score();
  log1.display();

  box3.display();
  box4.display();
  pig3.display();
  pig3.score();
  log3.display();

  box5.display();
  log4.display();
  log5.display();

  if (gameState === "mallet") {
    for (var i = 0; i < boxes.length; i++) {
      console.log("for")
      if (mallet.isTouching(boxes[i])) {
       // hold = new Chain(mallet.body, boxes[i].body, { x: 0, y: -50 }, { x: 0, y: 0 })
    //    console.log("hold");
        Matter.Body.setStatic(diogenes.body,false);
        //Matter.Body.setStatic(mallet.body,true);
        diogenes.body.position.x = mouseX
        diogenes.body.position.y = mouseY
      }

    }
  }





  if (gameState === "player") {
   // mallet.body.position.x = mouseX;
  //  mallet.body.position.y = mouseY;
    for (var i = 0; i < boxes.length; i++) {
      console.log("for")
      if (diogenes.isTouching(boxes[i])) {
        Matter.Body.setStatic(diogenes.body,true);
       // Matter.Body.setStatic(mallet.body,false);
     //   hold = new Chain(diogenes.body, boxes[i].body, { x: 0, y: -50 }, { x: 0, y: 0 })
       // console.log("hold");
      mallet.body.position.x = mouseX
      mallet.body.position.y = mouseY
      
      }

    }
  }



  if (hold) {
    hold.display();

  }


  //  bird.display();
  //platform.display();
  //log6.display();
  //  slingshot.display();    
  handle.display();

  diogenes.display();
  mallet.display();
}

function mouseDragged() {
  //if (gameState!=="launched"){
  // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  // }
}


function mouseReleased() {
  // slingshot.fly();
  //gameState = "launched";
}

function keyPressed() {

}

