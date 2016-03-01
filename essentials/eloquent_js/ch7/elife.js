var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

/* Representing Space */

function Vector(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other){
  return new Vector(this.x+other.x, this.y + other.y);
};

function Grid(width, height){
  this.space = new Array(width*height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector){
  return vector.x >= 0 && vector.x <this.width && vector.y >=0 && 
      vector.y <this.height;
};

Grid.prototype.get= function(vector){
  return this.space[vector.x+this.width*vector.y];
};
Grid.prototype.set = function(vector, value){
  this.space[vector.x+this.width*vector.y] = value;
};

// A small test
var grid = new Grid(5,5);
grid.set(new Vector(1,1), "X");
console.log(grid.get(new Vector(1,1)));

/* A Critter's programming interface */
var directions = {
  "n": new Vector(0,-1),
  "ne": new Vector(1, -1),
  "e": new Vector(1, 0),
  "se": new Vector(1, 1),
  "s": new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
};

function randomElement(array){
  return array[Math.floor(Math.random()* array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

function BouncingCritter(){
  this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function(view){
  if (view.look(this.direction) != " "){
    // prevent getting null value if critter trapped in empty space
    this.direction = view.find(" ") || "s";
  }

  return {type: "move", direction: this.direction};
};

/* The world object */

// legend is an object which describes what each character in map means
function elementFromChar(legend, ch){
  if (ch === ' '){
    return null;
  }
  // ?
  var element = new legend[ch]();
  // makes it easier to find out what char the element was originally
  // created from. Used in toString()
  element.originChar = ch;
  return element;
}

function charFromElement(element){
  if (element === null)
    return " ";
  else
    return element.originChar;
}

function World(map, legend){
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y){
    for (var x = 0; x < line.length; x++){
      grid.set(new Vector(x,y), elementFromChar(legend, line[x]));
    }
  });
}

World.prototype.toString = function(){
  var output = "";
  for (var y = 0; y< this.grid.height; y++){
    for (var x=0; x<this.grid.width; x++){
      var element = this.grid.get(new Vector(x,y));
      output += charFromElement(element);
    }
    output += '\n';
  }
  return output;
};

function Wall() {}

// Test out World object
var world = new World(plan, {'#': Wall, 'o': BouncingCritter});
console.log(world.toString());

/* This and its scope */
