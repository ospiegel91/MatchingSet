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
            <div>
                
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
