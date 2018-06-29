window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        window.location.href = "game.html";
        window.onload = function() {
            var game = new Game("canvas");
            game.startGame();
}}}
