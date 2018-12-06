SetGame.selectTwelveCards()
class App extends React.Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.pushCardsArray = this.pushCardsArray.bind(this)
        this.arrSelected = []
        this.state = {
            
        }
    }
    pushCardsArray(obj, event) {
        event.stopPropagation();
        if (this.arrSelected.length < 3) {            
            this.arrSelected.push(obj)
        }
        if(this.arrSelected.length === 3){
            console.log(SetGame.isSet(this.arrSelected[0], this.arrSelected[1], this.arrSelected[2]))
        }
    }
    render() {
        console.log(this.arrSelected)
        return (
            <div className="board" onClick={this.pushCardsArray}>
                <div className="row">
                    <Card cardType={SetGame.selectedCards[0]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[1]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[2]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[3]} getObj={this.pushCardsArray} />
                </div>
                <div className="row">
                    <Card cardType={SetGame.selectedCards[4]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[5]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[6]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[7]} getObj={this.pushCardsArray} />
                </div>
                <div className="row">
                    <Card cardType={SetGame.selectedCards[8]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[9]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[10]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[11]} getObj={this.pushCardsArray} />
                </div>

            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.getObject = this.getObject.bind(this)
        this.state = {
            card: this.props.cardType
        }
    }
    getObject(event) {
        console.log('getObject')
        var obj = this.props.cardType
        this.props.getObj(obj, event)
    }
    render() {
        var element = []
        for (let i = 1; i <= this.props.cardType.number; i++) {
            element.push(<div className={`shape ${this.props.cardType.shape} ${this.props.cardType.color} ${this.props.cardType.filing}`}></div>)
        }
        return (
            <div className="card" data-foobar={this.props.cardType} onClick={this.getObject}>
                {element}
            </div>
        );
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
