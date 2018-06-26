function Player(game) {
    this.game = game;
    this.x = this.game.canvas.width * 0.08;
    this.y = this.game.canvas.height * 0.8;
    this.w = 100*302/602;
    this.h = 100;
    this.img = new Image();
    this.img.src = 'images/girl.png';
    this.speedx = 1;
    this.speedy = 1;
}
   
Player.prototype.draw = function() {
    imageScale = 302/602;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};


Player.prototype.move = function() {
    document.onkeydown = function(event){{
            switch (event.keyCode) {
            case SPACE:
            if (this.y >= 0){
            this.y -= 10;
            };
            break
            case LEFT:
            if (this.x >= 0){
            this.x -= 5;
            };
            break
            case UP:
            if (this.y >=0){
            this.y -= 5;
            };
            break
            case DOWN:
            if (this.y + this.h <= this.game.canvas.height){
            this.y += 5;
            };
            break
            case RIGHT:
            if (this.x + this.w <= this.game.canvas.width){
            this.x += 5;
            };
            break
        }}
    //document.onkeyup = function(event){
    //    this.dx = this.x;
    //    this.dy = this.y++;
    //    }.bind(this);
    }.bind(this);
}

var LEFT = 37;
var RIGHT = 39;
var UP = 38;
var DOWN = 40;
var SPACE = 32;


