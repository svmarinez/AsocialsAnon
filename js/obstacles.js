function Obstacle(game) {
    this.game = game;
    this.w = 50*800/700;
    this.h = 50;
    this.img = new Image();
    this.img.src = 'images/armchair.png';
    //this.img.src = 'images/sofa.png';
    //this.img.src = 'images/dude.png';
    //this.img.src = 'images/partypeople.png';
    this.x = Math.random()*(this.game.canvas.width-10);
    this.y = 0;
    this.dy = 2;
}

Obstacle.prototype.draw = function(){
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Obstacle.prototype.move = function() {
    this.y += this.dy;
  };
