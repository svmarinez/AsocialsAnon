function Music(){
	this.music = new Audio("js/music/Sandstorm.mp3");
	this.music.play().catch(err => this.music.play());
	this.music.loop = true;
}