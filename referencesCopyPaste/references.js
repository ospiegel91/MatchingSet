

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             arr: [],
//             max: 31
//         }

//         this.addToArray = this.addToArray.bind(this);
//         this.changeDayMax = this.changeDayMax.bind(this);
//         this.renderOptions = this.renderOptions.bind(this);
//     }
//     addToArray() {
//         const item = this.state.arr;
//         const name = this.name.value;
//         const day = this.day.value;
//         const month = this.month.value;
//         const year = this.year.value;
//         item.push({ name, day, month, year })
//         console.log(item)
//         this.setState({
//             arr: item
//         })
//     }
//     renderOptions(arr){
//         return arr.map(x => <option key={x} value={x}>{x}</option>);
//     }
//     changeDayMax(e) {
//         if (e.target.value === "February") {
//             this.setState({
//                 max: 28
//             })
//         } else if (e.target.value === "June" || e.target.value === "November" || e.target.value === "September") {
//             this.setState({
//                 max: 30
//             })
//         }else{
//             this.setState({
//                 max: 31
//             })
//         }

//     }

//     render() {
//         var listItems = this.state.arr.map(
//             x => <ListItem object={x} />
//         );


//         return (
//             <div>
//                 <input ref={(input) => { this.name = input; }} type="text" placeholder="enter item"></input>
//                 Day
//                 <input ref={(input) => { this.day = input; }} type="number" min='1' max={this.state.max}></input>
//                 Month
//                 <select onChange={this.changeDayMax} ref={(input) => { this.month = input; }} >
//                     {this.renderOptions(parameters.months)}
                    
//                 </select>
//                 Year
//                 <input ref={(input) => { this.year = input; }} type="number" min='1950' max="2018"></input>
//                 <button onClick={this.addToArray}>Add</button>
//                 <ul>
//                     {listItems}
//                 </ul>
//             </div>
//         );
//     }
// }

// class ListItem extends React.Component {
//     constructor(props) {
//         super(props);

//     }


//     render() {
//         return (
//             <li>
//                 {this.props.object.name} was born on {this.props.object.month}, {this.props.object.day}, {this.props.object.year}
//             </li>
//         );
//     }
// }

// var parameters = {
//     months:
//         ["January",
//             "February",
//             "March",
//             "April",
//             "May",
//             "June",
//             "July",
//             "August",
//             "September",
//             "October",
//             "November",
//             "December"]
// }

// function render() {
//     ReactDOM.render(
//         <App />,
//         document.getElementById("root")
//     );
// }

// render();