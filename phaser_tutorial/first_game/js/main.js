// Phaser.AUTO will try to run webgl if possible or canvas otherwiae
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// Phaser seems to prefer global varibles which isn't best practice
// Let's set a global object specific to this app
var APP = {}; 
function preload() {
    // load assets
    // first param is key and will be used elsewhere in code
    game.load.image('sky','assets/sky.png');
    game.load.image('ground','assets/platform.png');
    game.load.image('star','assets/star.png');
    game.load.spritesheet('dude','assets/dude.png',32,48);
}

function create() {
  // Add physics
  game.physics.startSystem(Phaser.Physics.ARCADE);
  /* BACKGROUND */
  game.add.sprite(0,0,'sky');
  // Platform contains gound and 2 ledges
  var platforms = game.add.group();
  // enable physics for any body created in group
  platforms.enableBody = true;
  APP.platforms = platforms;
  
  // Groups place similar objects together
  var ground = platforms.create(0, game.world.height - 64, 'ground');
  // fit width of game
  ground.scale.setTo(2,2);
  // set immovable property from being affected by physics
  ground.body.immovable = true;
  APP.ground = ground;

  var ledge = platforms.create(400,400, 'ground');
  ledge.body.immovable = true;
  ledge = platforms.create(-150,250,'ground');
  ledge.body.immovable = true;
  APP.ledge = ledge;

  /* PLAYER */
  var player = game.add.sprite(32,game.world.height - 150, 'dude');
  // enable physics on player
  game.physics.arcade.enable(player);
  // enable gravity -> greater value means faster it'll fall
  player.body.gravity.y = 300;

  // give player some bounce 
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;
  
  var LEFT_ANIMATIONS = [0,1,2,3];
  var RIGHT_ANIMATIONS = [5,6,7,8];
  var FRAME_PER_SECOND = 10;
  var LOOP = true;
  // animations
  player.animations.add('left', LEFT_ANIMATIONS, FRAME_PER_SECOND, LOOP);
  player.animations.add('right', RIGHT_ANIMATIONS, FRAME_PER_SECOND, LOOP);
  APP.player = player;
}

// update() called in the game loop for every frame
function update() {
  // Colide player and stars with the platforms
  // collision will be checked against all members of platform group
  game.physics.arcade.collide(APP.player, APP.platforms);
}
