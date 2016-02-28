// Define functions

var create;
var preload;
var update;
var collectStar; 

// Phaser.AUTO will try to run webgl if possible or canvas otherwiae
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv',
                           {preload:preload, create:create, update: update});

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

    // Add stars
    var stars = game.add.group();
    stars.enableBody = true;
    for (var i=0; i<12; i++){
        // x coordinate of i*70 therefore spaced 70px apart
        var star = stars.create(i*70, 0, 'star');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random()*0.2;
    }
    APP.stars = stars;

    // detect keyboard strokes
    var cursors = game.input.keyboard.createCursorKeys();
    APP.cursors = cursors;

    // score variables
    var score = 0;
    var scoreText;
    var TEXT_X_COORD = 18;
    var TEXT_Y_COORD = 18;
    var TEXT_DEF = 'score: 0';
    var FONT_OBJ = {fontSize: '32px', fill: "#000"};
    scoreText = game.add.text(TEXT_X_COORD, TEXT_Y_COORD, TEXT_DEF, FONT_OBJ);
    APP.scoreText = scoreText;
    APP.score = score;
}

// update() called in the game loop for every frame
function update() {
    // Colide player and stars with the platforms
    // collision will be checked against all members of platform group
    game.physics.arcade.collide(APP.player, APP.platforms);

    // prevent stars from falling off map
    game.physics.arcade.collide(APP.stars, APP.platforms);

    // check if player overlaps with star. Yes => collect
    game.physics.arcade.overlap(APP.player, APP.stars, collectStar, null, this);

    // Reset player velocity (movement)

    if (APP.cursors.left.isDown){
        APP.player.body.velocity.x = -150;

        APP.player.animations.play('left');
    }
    else if (APP.cursors.right.isDown){
        APP.player.body.velocity.x = 150;
        APP.player.animations.play('right');
    }
    else {
        APP.player.animations.stop();
        APP.player.frame = 4;
    }

    // Allow jump if player is touching ground
    if (APP.cursors.up.isDown && APP.player.body.touching.down){
        APP.player.body.velocity.y = -500;
    }
}

function collectStar(player, star){
    // Remove star from screen
    star.kill();
    // Update score
    APP.score += 10;
    APP.scoreText.text = 'Score: '+APP.score;

}

