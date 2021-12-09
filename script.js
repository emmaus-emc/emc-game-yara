/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 420; // x-positie van speler
var vijandY = 220; // y-positie van speler

var vijandX1 = 270; // x-positie van speler
var vijandY1 = 220; // y-positie van speler

var vijandX2 = 570; // x-positie van speler
var vijandY2 = 220; // y-positie van speler

var Health = 100;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand

  vijandY = vijandY + 10;
  if (vijandY > 720)
    vijandY = 0;

  vijandY1 = vijandY1 + 10;
  if (vijandY1 > 720)
    vijandY1 = 0;

  vijandY2 = vijandY2 + 10;
  if (vijandY2 > 720)
    vijandY2 = 0;




  // kogel

  // speler
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 10;
  }

  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 10;
  }

  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 10;
  }

  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 10;
  }

  if ((vijandX - spelerX) < 50 &&
    (vijandX - spelerX) > -50 &&
    (vijandY - spelerY) < 50 &&
    (vijandY - spelerY) > -50) {
    console.log("botsing");
    Health = Health - 1;
  }
  if ((vijandX1 - spelerX) < 50 &&
    (vijandX1 - spelerX) > -50 &&
    (vijandY1 - spelerY) < 50 &&
    (vijandY1 - spelerY) > -50) {
    console.log("botsing");
    Health = Health - 1;
  }
  if ((vijandX2 - spelerX) < 50 &&
    (vijandX2 - spelerX) > -50 &&
    (vijandY2 - spelerY) < 50 &&
    (vijandY2 - spelerY) > -50) {
    console.log("botsing");
    Health = Health - 1;
  }
};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("green");
  rect(0, 0, 1280, 720);
  // vijand
  fill("blue");
  rect(vijandX, vijandY, 30, 30);
  rect(vijandX1, vijandY1, 30, 30);
  rect(vijandX2, vijandY2, 30, 30);
  // kogel

  // speler



  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY - 15, 10, 10);
  ellipse(spelerX, spelerY, 20, 20); // romp
  rect(spelerX - 10, spelerY + 10, 10, 10); // rechts
  rect(spelerX, spelerY + 10, 10, 10); // links
  fill("black");

  // punten en health
  textSize(32);
  fill("black");
  text('health ' + Health, 10, 30);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
