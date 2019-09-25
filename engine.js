const Canva =( function(){
    this.canvas = document.getElementById("myCanvas");
    
    this.ctx = this.canvas.getContext("2d");
    console.log(this.ctx)
    return this     
})();

const Player= function(x, y, vector) {
    this.rayon = 20;
    this.x = x;
    this.y = y;
    this.vector = vector;

    this.print = function(){
        console.log(canva.ctx)
        canva.ctx.beginPath();
        canva.ctx.arc(this.x, this.y, this.rayon, 0, Math.PI*2);
        canva.ctx.fillStyle = "#0095DD";
        canva.ctx.fill();
        canva.ctx.closePath();
    }

    this.collide = function(Player) {
        return player.vecto.collide(this.vector);
    }
}