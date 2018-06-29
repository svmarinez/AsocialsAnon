function Obstacle(game, image, name) {
        this.game = game;
        this.img = image;
        this.x= (Math.random()*(this.game.canvas.width-50));;
        this.y = 0 - image.height;
        this.dy = 1;
        
        if (name === 2){
            this.sofa();
        } else if (name === 3){
            this.dude();
        } else if (name === 1){
            this.armchair();
        } else if (name === 0){
            this.partypeople();
        } else if (name === 4){
            this.partypeople();
        } 
}


Obstacle.prototype.draw = function(){
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Obstacle.prototype.move = function() {
    this.y += this.dy;
  };

Obstacle.prototype.armchair = function(){
    this.w = 57;
    this.h = 50;
}

Obstacle.prototype.dude = function(){
    this.w = 49;
    this.h = 100;
}
Obstacle.prototype.sofa = function(){
    this.w = 115;
    this.h = 50;
}

Obstacle.prototype.partypeople = function(){
    this.w = 186;
    this.h = 100;
}

