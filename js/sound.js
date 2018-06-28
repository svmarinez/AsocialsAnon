createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.on("fileload", this.loadHandler, this);
createjs.Sound.registerSound("/sound/Sandstorm.mp3", "sound");
function loadHandler(event) {
    var instance = createjs.Sound.play("sound");
    instance.on("complete", this.handleComplete, this);
    instance.volume = 5;
}