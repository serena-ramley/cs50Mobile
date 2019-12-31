/* React is performant
 * Reconciliation is he process by which React syncs changes in app state to the DOM
 * - reconstructs the virtual DOM
 * - diffs the virtual DOM against the DOM
 * - only makes the changes needed
 * JSX is XML-like syntax extension of JavaScript
 * - transpiles to JavaScript
 * - lowercase tags are treated as HTML/SVG tags
 * - uppercase tags are treated as custom components
 * Components are just functions
 * - returns a node (something React can render, e.g. a <div />
 * - receives an object of the properties that are passed to the element
 * Props
 * - passed as an object to a component and used to compute the returned node
 * - changes in these props will cause a recomputation of the returned node ("render")
 * - unlike in HTML, these can be any JS value
 * - in HTML, can't pass objects, classes, etc, just a string or value
 */

 // Can run this in sandbox.io

import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

const App = (props) => (
  <div style={styles}>
      <h2>{props.count}{'\u2728'}</h2>
    </div>
);

let count = 0
//render(<App count={1}/>, document.getElementById('root'))

setInterval(() => render(<App count={count++}/>, document.getElementById('root')), 1000)