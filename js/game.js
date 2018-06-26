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
  })
}  
  
Game.prototype.startGame = function() {
  this.interval = setInterval(function() {
  this.clear();
  this.framesCounter++;
    
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    if (this.framesCounter % 150 === 0) {
      this.generateObstacle();
    }
      this.score += 0.1;
      this.draw();
      this.moveAll();
      this.clearObstacles();

    
      if (this.isCollision(true)) {
          this.gameOver();
        }
    }
    .bind(this), 1000 / this.fps);
} 

Game.prototype.stop = function() {
  clearInterval(this.interval);
  this.ctx.globalAlpha = (0.2);
  this.ctx.fillStyle = "#9E82F2";
  this.ctx.fillRect = (0,0,this.canvas.width,this.canvas.height)
  
};

Game.prototype.gameOver = function() {
  this.stop();
  
  if(confirm("Oh no! You're trapped! Try again?")) {
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

Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};

Game.prototype.reset = function() {
  this.background =new Background(this);
  this.player = new Player(this);
  this.obstacles = [];
  this.framesCounter = 0;
  this.score = 0;
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obstacle) { obstacle.move(); });
};

Game.prototype.isCollision = function() {
  return this.obstacles.some(function(obstacle){
  (this.player.x + this.player.w >= obstacle.x) &&
  (this.player.x <= obstacle.x + obstacle.w)}
  .bind(this));
}