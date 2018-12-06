window.SetGame = {}

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

SetGame.isMatch = function(category1,category2,category3){
    if(category1 === category2 && category2 === category3 && category1 === category3 ||
        category1 !== category2 && category1 !== category3 && category2 !== category3){
            return true;
        } else {
            return false;
        }
}
SetGame.isSet = function (card1, card2, card3){
    var isShape = SetGame.isMatch(card1.shape, card2.shape, card3.shape);
    var isColor = SetGame.isMatch(card1.color, card2.color, card3.color);
    var isNumber = SetGame.isMatch(card1.number, card2.number, card3.number);
    var isFilling = SetGame.isMatch(card1.filling, card2.filling, card3.filling);
    if (isShape && isColor && isNumber && isFilling){
        return true;
    } else {
        return false;
    }
}