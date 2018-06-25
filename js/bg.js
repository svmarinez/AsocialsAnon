function Background(game) {
    this.game = game;
  
    this.img = new Image();
    this.img.src = '/images/flooring.png';
  
    this.x = 0;
    this.y = 0;
  
    this.dy= 5;
  }