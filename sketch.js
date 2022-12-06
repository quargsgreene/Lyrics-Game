let sound;
let image;

function preload() {
  sound = loadSound('sex-appeal.mp3');
  image = loadImage('backgroundImage.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // game buttons, instructions, inputs, audio hint
  const introMsg = createP('Try and guess one word that I say.\n It’s great to sing karaoke alone in my living room, except for when I can hear my neighbor’s rock music. He also won’t clean up all the dove shit.');
  introMsg.position(width / 4, height / 2);
  introMsg.id('sentence');

  const guess = createInput('');
  guess.position(width / 12, height / 12);
  guess.id('input');

  const guessButton = createButton('checK');
  guessButton.position(guess.x + width / 2, guess.y);
  guessButton.mousePressed(checkMessage);
  guessButton.id('guess');

  const hintButton = createButton('Play hint...');
  hintButton.position((3 * width) / 4, (3 * height) / 4);
  hintButton.mousePressed(playSound);
  hintButton.id('hint');

  const checkMessageFeedback = createP('');
  checkMessageFeedback.id('feedback');
  function checkMessage() {
    checkMessageFeedback.position(guess.x, guess.y + height / 10);
    if (/colossal/i.test(guess.value()) === true) {
      checkMessageFeedback.html('Yes!');
    } else {
      checkMessageFeedback.html('No! I also bet that you\'ve never had neon purple belly button lint.');
    }
  }

  function playSound() {
    if (!sound.isPlaying()) {
      sound.play();
      sound.jump(32);
      sound.rate(-1);
      hintButton.html('Discontinue hint!');
    } else {
      sound.stop();
      hintButton.html('Play hint...');
    }
  }

  // text hint 1
  const scrambledIntroMsg = createP('acsosoll');
  scrambledIntroMsg.style('class', 'invisible');
  scrambledIntroMsg.position(width / 24, height / 24);
}

function draw() {
  background(image);

  // text hint 2

  const colorTextTo = color(255, 247, 0);
  const colorTextFrom = color(97, 255, 139);
  const colorBetweenText = lerpColor(colorTextTo, colorTextFrom, sin(millis() / 2000));
  const colorBall = color(28, 126, 255);

  const letters = ['c', 'o', 'l', 'o', 's', 's', 'a', 'l'];

  push();
  const lettersLength = letters.length;
  for (let i = 0; i < lettersLength; i++) {
    fill(colorBetweenText);
    textFont('Helvetica');
    textSize(random(12, 14));
    text(letters[i], random(width), random(height));
  }
  pop();

  push();
  fill(colorBall);
  ellipse(random(width / 2), random(height / 2), 10, 10);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
