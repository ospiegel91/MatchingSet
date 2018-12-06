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
        this.checkMatch = this.checkMatch.bind(this)
        this.state = {
            arrSelected : []
        }
    }
    checkMatch(obj, event) {
        console.log('checkMatch')
        event.stopPropagation();
        var newArr = this.state.arrSelected
        newArr.push(obj)
        this.setState({
            arrSelected : newArr
        })
        

    }
    render() {
        return (
            <div className="board" onClick={this.checkMatch}>
                <div className="row">
                    <Card cardType={SetGame.card1} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card2} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card3} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card4} getObj={this.checkMatch}/>
                </div>
                <div className="row">
                    <Card cardType={SetGame.card5} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card6} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card7} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card8} getObj={this.checkMatch}/>
                </div>
                <div className="row">
                    <Card cardType={SetGame.card9} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card10} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card11} getObj={this.checkMatch}/>
                    <Card cardType={SetGame.card12} getObj={this.checkMatch}/>
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
            card : this.props.cardType
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
