var R_Bucks = 1000
var  mansion, mansion2, mansion3, mansion4, mansion5, door



function setup() {
  createCanvas(displayWidth, displayHeight);
  mansion = createSprite(400, 200, 50, 50);
  mansion2 = createSprite(500,200,50,50);
  mansion3 = createSprite(600,200,50,50);
  mansion4 = createSprite(700,200,50,50);
  mansion5 = createSprite(800,200,50,50);
  door = createSprite(733,518,200,300);
  mansionButton = createButton("500R$")
  mansionButton.position(403, 233)
  mansion2Button = createButton("1000R$")
  mansion2Button.position(503, 237)
  mansion3Button = createButton("1500R$")
  mansion3Button.position(603, 244)
  mansion4Button = createButton("2000R$")
  mansion4Button.position(703, 244)
  mansion5Button = createButton("2500R$")
  mansion5Button.position(803, 244)
  doorButton = createButton("Enter or Exit")
  doorButton.position(726, 488)
}

function draw() {
  background("cyan");  
  drawSprites();
  textSize(30)
  text("Estate Shop", displayWidth/2,50)
  text(R_Bucks+"R$", 1000,100)
  text(mouseX+","+mouseY,200,20)
  //if(mousePressedOver (mansion)&& R_Bucks >= 500){
//mansion.visible = false
  //}
  mansionButton.mousePressed(()=>{
    R_Bucks = R_Bucks - 500
    text("You bought a mansion of 500R$", 400,200)
  })
  mansion2Button.mousePressed(()=>{
    R_Bucks = R_Bucks - 1000
    text("You bought a mansion of 1000R$", 400,200)
  })
  mansion3Button.mousePressed(()=>{
    R_Bucks = R_Bucks - 1500
    text("You bought a mansion of 1500R$", 400,200)
  })
  mansion4Button.mousePressed(()=>{
    R_Bucks = R_Bucks - 1000
    text("You bought a mansion of 2000R$", 400,200)
  })
  mansion5Button.mousePressed(()=>{
    R_Bucks = R_Bucks - 1000
    text("You bought a mansion of 2500R$", 400,200)
  })
  doorButton.mousePressed(()=>{
  background.visible = false
  background(pink)
  text("Which shop would you like visiting?", 200,200)
  })
  
}