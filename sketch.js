var hypnoticBall, database;
var gameState = 0;
var playerCount;
var database;
var form, game, player;

function setup(){

  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

}
function draw(){
  background("white");
    drawSprites();
  
}
