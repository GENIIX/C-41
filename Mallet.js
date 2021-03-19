class Mallet extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
display(){
this.body.position.x=mouseX
this.body.position.y=this.height/2+mouseY
super.display();

}

isTouching(obj){
  var bodyPOS=obj.body.position;
  var malletPOS=this.body.position;
  if(bodyPOS.y-malletPOS.y<=obj.height/2+this.height/2 &&
    malletPOS.y-bodyPOS.y<=obj.height/2+this.height/2 &&
    bodyPOS.x-malletPOS.x<=obj.width/2+this.width/2 &&
   malletPOS.x-bodyPOS.x<=obj.width/2+this.width/2   ){
  console.log("true")
return true

  }
 else{
   console.log("false")
   return false
   
      }
    }
    };
