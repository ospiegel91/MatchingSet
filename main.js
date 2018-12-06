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
    constructor(props){
        super(props)
        this.state = {
            //
        }
    }
    render() {
        return (
            <div className="board">
                <div className="row">
                    <Card cardType={SetGame.card1}/>
                    <Card cardType={SetGame.card2}/>
                    <Card cardType={SetGame.card3}/>
                    <Card cardType={SetGame.card4}/>
                </div>
                <div className="row">
                    <Card cardType={SetGame.card5}/>
                    <Card cardType={SetGame.card6}/>
                    <Card cardType={SetGame.card7}/>
                    <Card cardType={SetGame.card8}/>
                </div>
                <div className="row">
                    <Card cardType={SetGame.card9}/>
                    <Card cardType={SetGame.card10}/>
                    <Card cardType={SetGame.card11}/>
                    <Card cardType={SetGame.card12}/>
                </div>

            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        var element = []
        for (let i = 1; i <= this.props.cardType.number; i++) {
            element.push(<div className={`shape ${this.props.cardType.shape} ${this.props.cardType.color} ${this.props.cardType.filing}` }></div>)
        }
        return (
            <div className="card">
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
