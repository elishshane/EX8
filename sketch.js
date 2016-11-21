var dracula;
var joined;
var story;
var y = 0;
var ex;

function preload(){
  dracula = loadStrings( "data/dracula.txt");
}

function setup() {
  createCanvas(800, 800);
  background(255);
  joined = join(dracula, "\n");
  var firstWord = joined.indexOf( "CONTENTS" );
  var end = "THE END"
  var lastWord = joined.indexOf( end );
  story = joined.substring(firstWord, lastWord + end.length);
  ex = story; 
}

function draw() {
  background(255);
  if( mouseIsPressed){
    ex = story.replace(/[qwertyuiopasdfghjklzxcvbnm]/gi, "!");
  }
  text( ex, 100, y);
  y -= 15
  if(keyIsDown(RIGHT_ARROW)){
    ex = story.replace(/[\*]/gi,"GG")
  }
}

function keyTyped(){
  var re = new RegExp( key, "gi"); 
  ex = ex.replace(re, "!");
  
  console.log(key);
}

