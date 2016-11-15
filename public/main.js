
//Funcion anonima que se ejecuta asimisma
//MODELO
(function() {
     self.Board = function(width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }
    //Prototipo del objeto parecido a los metodos en una clase;
    self.Board.prototype = {
        get elements(){
            var element = this.bars;
            element.push(this.ball);
            return element;
        }
    }
})();

(function(){
    self.Bar = function(x, y, width, height, board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;

        this.board.bars.push(this);
        this.kind = "rectangle";
    }

    self.Bar.prototype = {
        down: function(){},
        up: function(){}
    }
})();

//VISTA!!!
(function(){
    self.BoardView = function(canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    } 

    self.BoardView.prototype = {
        draw: function(){
            for (var i = this.board.elements.length - 1; i>=0; i--){
                var el = this.board.elements[i];

                draw(this.ctx, el);
            };
        }

    }


    function draw(ctx, element) {
        if(element!==null && element.hasOwnProperty("kind")){
            switch(element.kind){
            case "rectangle":
                ctx.fillRect(element.x, element.y, element.width, element.height)
                break;
            }
        }
    }
})();

self.addEventListener("load", main);

//CONTROLADOR
function main() {
    var board = new Board(800,400);
    var bar = new Bar(20, 100, 40, 100, board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas, board);
    board_view.draw();
}