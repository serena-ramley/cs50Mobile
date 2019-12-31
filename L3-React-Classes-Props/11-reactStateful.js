/* State adds internally-managed configuration for a component
 * 'this.state' is a class property on the component instance
 * can only be updated by invoking 'this.setState()'
 * - implemented in React.Component
 * - setState() calls are batched and run asynchronously
 * - pass an object to be merged, or a function of previous state
 * changes in state also causes re-render
 */

 // Can run this in sandbox.io

 import React from "react";
 import ReactDOM from "react-dom";
 import { render } from "react-dom";
 
 const styles = {
   fontFamily: 'sans-serif',
   textAlign: 'center'
 }
 
 // React automatically takes the props
 // and attaches it to instances of that class
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount() {
        // setState is called and batched asynchronously
        // so any line that uses this.state will see the original state
        this.setState({count: this.state.count + 1})
    }
   
    render() {
       return (
        <div style={styles}>
            <div>
                <button onClick={() => this.increaseCount()}>Increase</button>
            </div>
        <h2>{this.state.count}{'\u2728'}</h2>
      </div>
       )
   }
}
 
 let count = 0
 
 render(<App count={count++}/>, document.getElementById('root'))