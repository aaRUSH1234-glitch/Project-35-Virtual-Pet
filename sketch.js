var database ,dog,happydog1,saddog2
var position
var database
var foodS, foodStock

function preload() {

happydog1 = loadImage("dogImg1.png")
saddog2 = loadImage("dogImg.png")


}

function setup()  {
createCanvas(500,500)
dog = createSprite(250,250,50,50)
dog.scale = 0.2
dog.addImage(saddog2)
database = firebase.database()
foodStock = database.ref('Food')
foodStock.on("value",readStock)




}

function draw() {

  background(46,139,87)
  if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happydog1);
  }
  else{
  if(keyWentUp(UP_ARROW)) {

    dog.addImage(saddog2)
    
  }
  }
  drawSprites()
  textSize(18)
  fill("white")
text("Press UP_ARROW Key to feed Drago Milk",50,50)
text("Food left :"+ foodS,50,100 )




}


function readStock(data) {
  foodS=data.val();

}
function writeStock(x) {
if(x<0){
x=0
}
else{
x= x-1
}

database.ref('/').update({
    Food:x
})

} 

