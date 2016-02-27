// Initialize Phaser and create a 400x490px game
var game = new Phaser.Game(400,490,Phaser.AUTO,'gameDiv');

// Create our 'main' state which will contain the game
var mainState = {
  preload: function() {
    // Executed at the beginning
    // Load game's assets
    // Background color
    game.stage.backgroundColor = '#71c5cf';
    // Load sprite
    game.load.image('bird','assets/bird.png');
    game.load.image('pipe', 'assets/pipe.png');
    

  }, 

  create: function() {
    // Called after preload function
    // Set up game, display sprites, etc
    // Set physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Display sprite on screen
    this.bird = this.game.add.sprite(100,245,'bird');

    // Add gravity 
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 1000;
    
    // pipes
    this.pipes = game.add.group();  // Create group
    this.pipes.enableBody = true;   // Add physics to group
    this.pipes.createMultiple(20,'pipe');   // Create 20 pipes, (hidden)
    // Create row of pipes every 1.5 seconds
    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);

    // Call 'jump' function when space is hit
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
    
  }, 

  update: function() {
    // called 60 times per second
    // contains game's logic
    
    // If sprite out of world then call 'restartGame' function
    if (this.bird.inWorld === false){
        this.restartGame();
    }
  },

  jump: function() {
    // Add vertical velocity
    this.bird.body.velocity.y = -350;
  },

  restartGame: function() {
    // Start 'main' state which restarts game
    game.state.start('main');
  },

  addOnePipe: function(x,y) {
    // Get first dead pipe of group
    var pipe = this.pipes.getFirstDead();
    // Set new position of pipe
    pipe.reset(x,y);
    // Add velocity to pipe to make it move left
    pipe.body.velocity.x = -200;
    // Kill pipe when no longer visible
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
  },

  addRowOfPipes: function() {
    // Pick where hole will be
    var hole = Math.floor(Math.random() * 5) + 1;
    // Add 6 pipes
    for (var i=0; i<8; i++){
      if (i !== hole && i !== hole + 1){
          this.addOnePipe(400, i*60+10);
      }
    }
  },
};
// Add and start the 'main' state to start the game
game.state.add('main', mainState);
game.state.start('main');
