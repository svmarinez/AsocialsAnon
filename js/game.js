function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  
  this.reset();
}

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) {
    obstacle.draw();
  });
  this.door.forEach(function(door) {
    door.draw();
  });
};

Game.prototype.startGame = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
      if (this.framesCounter % 75 === 0) {
        this.generateObstacle();
      }
      if (this.framesCounter % 500 === 0) {
        this.generateDoor();
      }
      this.score += 0.1;
      this.draw();
      this.moveAll();
      this.clearObstacles();

      if (this.isCollision(this.obstacles)) {
        this.gameOver();
      } else if (this.isCollision(this.door)) {
        this.win();
      }
    }.bind(this),
    1000 / this.fps
  );
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
  if (confirm("Oh no! You're trapped! Try again?")) {
    this.reset();
    this.startGame();
  }
};

Game.prototype.win = function() {
  this.stop();
  
  if (confirm("Go Netflix and Chill in peace: YOU WON! Play again?")) {
    this.reset();
    this.startGame();
  }
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.y <= this.canvas.height;
  });
};

Game.prototype.clearDoors = function() {
  this.door = this.door.filter(function(door) {
    return door.y <= this.canvas.height;
  });
};

Game.prototype.generateObstacle = function() {
  var num = Math.floor(Math.random() * 5);
  if (num === 0) {
    this.img = this.images.partypeople;
  } else if (num === 1) {
    this.img = this.images.armchair;
  } else if (num === 2) {
    this.img = this.images.sofa;
  } else if (num === 3) {
    this.img = this.images.dude;
  } else if (num === 4) {
    this.img = this.images.partypeople;
  }
  this.obstacles.push(new Obstacle(this, this.img, num));
};

Game.prototype.generateDoor = function() {
  this.img = this.images.door;
  this.door.push(new Door(this, this.img));
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.images = new Images();
  this.music = new Music();
  this.door = [];
  this.obstacles = [];
  this.framesCounter = 0;
  this.score = 0;
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obstacle) {
    obstacle.move();
  });
  this.door.forEach(function(door) {
    door.move();
  });
};

Game.prototype.isCollision = function(obs) {
  return obs.some(
    function(obstacle) {
      return (
        this.player.y <= obstacle.y + obstacle.h &&
        this.player.y + this.player.h >= obstacle.y + obstacle.h &&
        this.player.x + this.player.w >= obstacle.x &&
        this.player.x <= obstacle.x + obstacle.w
      );
    }.bind(this)
  );
};
