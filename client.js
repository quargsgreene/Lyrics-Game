
//This library lends itself to a lot of global variable creation.
let sound;
let image;

function preload(){
  sound = loadSound('/sound/sex-appeal.mp3');
  image = loadImage('/images/background-image.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // game buttons, instructions, inputs, audio hint

  let introMsg = createP("Try and guess one word that I say.\n It’s great to sing karaoke alone in my living room, except for when I can hear my neighbor’s rock music. He also won’t clean up all the dove shit.");
  introMsg.position(width/4,height/2);

  let guess = createInput('');
  guess.position(width/12,height/12);

  let guess_button = createButton('checK');
  guess_button.position(guess.x+width/2,guess.y);
  guess_button.mousePressed(checkMessage);
  
  let hint_button = createButton('Play hint...');
  hint_button.position(3*width/4,3*height/4);
  hint_button.mousePressed(playSound);
  
 let check_message = createP('');
  function checkMessage (){
  check_message.position(guess.x,guess.y+height/10);
   if(/colossal/i.test(guess.value())==true){
    check_message.html('Yes!');
    }else{
      check_message.html('No! I also bet that you\'ve never had neon purple belly button lint.');
    }  
  }
  
  function playSound (){
  if(!sound.isPlaying()){
    sound.play();
    sound.jump(32);
    sound.rate(-1);
    hint_button.html('Discontinue hint!');
  }else{
    sound.stop();
    hint_button.html('Play hint...');
  }

}

// text hint 1
let scrambledIntroMsg = createP("acsosoll");
scrambledIntroMsg.style('class', "invisible");
scrambledIntroMsg.position(width/24, height/24);

}

function draw() {
  background(image);

  //text hint 2
 
  let colorTextTo = color(255, 247, 0);
  let colorTextFrom = color(97, 255, 139);
  let colorBetweenText= lerpColor(colorTextTo,colorTextFrom,sin(millis()/2000));
  let colorBall = color(28, 126, 255);
  
  let letters = ['c','o','l','o','s','s','a','l'];
  
  push();
  let lettersLength = letters.length;
  for(let i=0;i<lettersLength;i++){ 
    fill(colorBetweenText);
    textFont('Helvetica');
    textSize(random(12,14));
    text(letters[i],random(width),random(height));
      }
  pop();

  push();
  
  fill(colorBall);
  ellipse(random(width/2),random(height/2),10,10); 
  pop();
  
    } 

function windowResized (){  
  resizeCanvas(windowWidth,windowHeight);
}

