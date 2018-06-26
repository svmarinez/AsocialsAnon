function Obstacle(game) {
    this.game = game;
    this.w = 100*800/700;
    this.h = 100;
    this.img = new Image();
    this.img.src = 'images/armchair.png';
    this.x = this.game.canvas.width;
    this.y = this.game.canvas.height;
}

Obstacle.prototype.draw = function(){
    imageScale = 800/700;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Obstacle.prototype.move = function() {
    this.y += this.dy;
  };
