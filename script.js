let bPawn, bPawnImg, wPawn, wPawnImg;
let bRook, bRookImg, wRook, wRookImg;
let bBishop, bBishopImg, wBishop, wBishopImg;
let bKinght, bKnightImg, wKnight, wKnightImg;
let bKing, bKingImg, wKing, wKingImg;
let bQuen, bQueenImg, wQueen, wQueenImg;


function setup() {
  createCanvas(800,800);
  background(175,238,238)
  
  //later will instantiate piece classes as each piece variable
  

}

function draw() {

    rect(0,750,50,50)
    
  
  
  
}

function mousePressed() {
  if(mouseX > 0 && mouseX < 50 && mouseY > 750 && mouseY < 800){
      window.location.href = "title.html"
    }
  }