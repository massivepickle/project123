var lvl = 1;
var difficulty = 1;
var lives = 20;
var create = true;
var gem1,gem2,gem3;
var g1 = 255, g2 = 255, g3 = 255;
var gi;
var gg;
var player;
var robot = [];
var rbt = [];
var edge;
var level;
var c1;
var ximg;
var gamestate = "play";
var gem;
var start = 0;
var plr;
var flag = 0;
var rbt_img;
var red, neon, gold;
var playbutton;
var realtime;
var gametime;
var wallbreaks = 0;
var lasthit = 0;

//level 1
var l1_l1 = [];                                   //layer 1
var level1_layer1;

//level2
var l2_l1 = [];                                   //layer 1
var level2_layer1;
var l2_c1 = [];                                   //layer 1 corners
var level2_corner1;
var l2_l2 = [];                                   //layer 2
var level2_layer2;
var l2_c2 = [];                                   //layer 2 corners
var level2_corner2;

//level 3
var l3_l1 = [];                                   //layer 1
var level3_layer1;
var l3_c1 = [];                                   //layer 1 corners
var level3_corner1;
var l3_l2 = [];                                   //layer 2
var level3_layer2;
var l3_c2 = [];                                   //layer 2 corners
var level3_corner2;
var l3_l3 = [];                                   //layer 3
var level3_layer3;
var l3_c3 = [];                                   //layer 3 corners
var level3_corner3;

//level 4
var l4_l1 = [];                                   //layer 1
var level4_layer1;
var l4_c1 = [];                                   //layer 1 corners
var level4_corner1;
var l4_l2 = [];                                   //layer 2
var level4_layer2;
var l4_c2 = [];                                   //layer 2 corners
var level4_corner2;
var l4_l3 = [];                                   //layer 3
var level4_layer3;
var l4_c3 = [];                                   //layer 3 corners
var level4_corner3;
var l4_l4 = [];                                   //layer 4
var level4_layer4;
var l4_c4 = [];                                   //layer 4 corners
var level4_corner4;

function preload(){
  ximg = loadImage("x.png");
  gi = loadImage("gem.png");
  gg = loadImage("powered.png");
  rbt_img = loadImage("robot.png");
  red = loadImage("red.png");
  neon = loadImage("neon.png");
  gold = loadImage("gold.png");
}

function setup() {
  createCanvas(1920,1080);
  player = createSprite(160,90,10,10);
  player.speed = 5;
  level = new Level;
  edge = createEdgeSprites();
  gem = new Gems;
  plr = new Player();
}

function draw() {
  background(0);  
  
  drawSprites();
  level.play(); 
  
}

function touchStarted() {
  flag = 1;
}

function mousePressed() {
  flag = 1;
}