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
    render() {
        return (
            <div className="board">
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        );
    }
}
class Card extends React.Component {
    render() {
        return (
            <div className="card">
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
