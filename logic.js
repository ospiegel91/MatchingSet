// All specifics for cards creation
window.SetGame = {};    // maybe go back to var 
SetGame.colors = ["purple", "green", "red"];
SetGame.shapes = ["circle", "heart", "diamond"];
SetGame.fillings = ["solid", "striped", "outlined"];
SetGame.numbers = [1, 2, 3];
SetGame.cardsCollection = [];




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


class Card {
    constructor(shape, color, number, filing) {
        this.shape = shape;
        this.color = color;
        this.number = number;
        this.filing = filing;
    }
}
 SetGame.card1 = new Card("circle","red",1,"solid");
 SetGame.card2 = new Card("circle","red",1,"solid");
 SetGame.card3 = new Card("circle","red",1,"solid");
 SetGame.card4 = new Card("circle","red",2,"striped");
 SetGame.card5 = new Card("heart","purple",2,"striped");
 SetGame.card6 = new Card("heart","purple",3,"striped");
 SetGame.card7 = new Card("heart","purple",3,"striped");
 SetGame.card8 = new Card("heart","purple",2,"outlined");
 SetGame.card9 = new Card("diamond","purple",1,"outlined");
 SetGame.card10 = new Card("diamond","purple",2,"outlined");
 SetGame.card11 = new Card("diamond","purple",3,"solid");
 SetGame.card12 = new Card("diamond","purple",3,"solid");

SetGame.shape = ["circle", "heart", "diamond"];
SetGame.color = ["purple", "red", "green"];
SetGame.number = [1, 2, 3];
SetGame.filing = ["solid", "striped", "outlined"];

