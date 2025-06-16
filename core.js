
function GameBoyAdvance() {
    this.setCanvas = function(canvas) {
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "lime";
        ctx.fillText("GBA Emulator Initialized", 20, 80);
    };
    this.loadROMFromFile = function(file) {
        console.log("ROM loaded");
    };
    this.runStable = function() {
        console.log("Running emulator...");
    };
}
