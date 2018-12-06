// All specifics for cards creation
window.SetGame = {};    // maybe go back to var 
SetGame.colors = ["purple", "green", "red"];
SetGame.shapes = ["circle", "heart", "diamond"];
SetGame.fillings = ["solid", "striped", "outlined"];
SetGame.numbers = [1, 2, 3];
SetGame.cardsCollection = [];

class Card {
    constructor(name, color, shape, filling, number) {
        this.name = name;
        this.color = color;
        this.shape = shape;
        this.filling = filling;
        this.number = number;
    }
};


SetGame.generateAllCards = function () {
    var counter = 0;
    var name = "";
    for (var i = 0; i < SetGame.colors.length; i++) {
        for (var j = 0; j < SetGame.shapes.length; j++) {
            for (var k = 0; k < SetGame.fillings.length; k++) {
                for (var l = 0; l < SetGame.numbers.length; l++) {
                    name = `card${counter}`;
                    counter++;
                    SetGame[name] = new Card (name, SetGame.colors[i], SetGame.shapes[j], SetGame.fillings[k], SetGame.numbers[l]);
                    SetGame.cardsCollection.push(SetGame[name]);
                }
            }
        }
    }
}
