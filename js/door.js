function Door (game, image, name) {
    this.game = game;
    this.img = image;
    this.x= (Math.random()*(this.game.canvas.width-50));;
    this.y = 0;
    this.dy = 1

    this.door = this.door(); 
}

Door.prototype.draw = function(){
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Door.prototype.move = function() {
    this.y += this.dy;
}

Door.prototype.door = function(){
    this.w = 51;
    this.h = 130;
}