# cs50Mobile
Following the CS50 Mobile Development with React Native Curriculum

This course is free to audit at https://courses.edx.org/courses/course-v1:HarvardX+CS50M+Mobile/course/

Version Control in VS Code: https://code.visualstudio.com/docs/editor/versioncontrol

Frequently used terminal commands:

git add filename.js

git pull

git commit filename.js -m "Message"

git push

node

.exit


## Lecture 1

### 1-typecasting.js
Explicit typecasting can be achieved through methods such as:

String(x)

x.toString()

Implicit typecasting can be achieved through modifier operations such as:
x + ""
https://www.w3schools.com/js/js_type_conversion.asp

### 2-objects.js
3 ways to edit values in objects include:

n o.key = value

o[key] = value

key:value

https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript

### 3a-objectMutation.js

Copy an object by reference:

const o2 = o

Copy an object by value:

const o3 = Object.assign({}, o)

When printing an object combined with another message, use commas and not +
console.log("My object: ", o)

### 3b-deepCopy.js

Create a new, empty object. For every key in an inputted object, if the val is also an object, recursively try to deep copy this nested object until a non-object value is reached. Else, if a val is not an object, copy it into the keys of the new object. Once all of the keys have been iterated through, return the new object

## Lecture 2

ES6 is the standard governing JavaScript, whereas JavaScript is the language itself

### 1-closures.js
A closure is an inner function that has access to the outer (enclosing) function’s variables
https://www.w3schools.com/js/js_function_closures.asp
https://dmitripavlutin.com/simple-explanation-of-javascript-closures/

### 2-iife.js
Immediately invoked function expressions (IIFEs) run immediately upon declaration, and don't become part of the global object.

(function () {

    statements
    
})();

https://flaviocopes.com/javascript-iife/

### 3-firstClassFunctions.js
First class functions can be assigned to variables, passed as arguments to functions, or returned from a function. Map, filter and reduce are examples of first class functions.

Map will take a list of type A and return a list of type B

Filter will take a list of type A and return a list of type A (possibly of smaller size)

Reduce will take a list of type A and return a single value.

https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

### 4-hof.js

An example with map as a unique function instead of using the built-in map function

### 5-async.js
JavaScript is a single-threaded, synchronous language. A function that takes a really long time to run can cause a page to become unresponsive. JavaScript has functions that act asynchronously, e.g. setTimeout

### 6-stack.js
An event loop checks if there's anything on the stack. If not, it checks the function queue. If there's something in the function queue, it gets added to the stack (e.g. setTimeout API calls). APIs are handled by browser and function queue will add it to stack when stack is ready

### 7-overflow.js
Infinitely calling a recursive function can lead to a stack overflow error

### 8-callbacks.js
A callback is a function that is to be executed after another function has finished running, e.g.

https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

### 9-promises.js
Promises (then/catch statements) are more readable than nested callbacks.

https://javascript.info/promise-basics

### 10-authPromises.js
An example of promises using user login authentication as a case example.

### 11-authAsyncAwait.js
An example of await using user login authentication as a case example.
Await allows asynchronous functions to be written as if they were synchronous, but they are still running asynchronously.
Await is NOT compatible with Internet Explorer

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await 

### 12-this.js
'this' refers to an object that's set at the creation of a new execution context (function invocation)
Bind specifies what 'this' is, and returns a function which can be invoked later
Apply & Call invoke the function immediately. When using apply, the parameter must be placed in an array. Call can either use a parameter or an array of parameters

https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript

## Project 0

A basic TODO app.

https://www.w3schools.com/jsref/met_document_getelementbyid.asp

## Lecture 3

### 1-set.js
    /* Classes vs instances
     * - classes syntax introduced in ES6
     *    - simplifies defining complex objects with their own prototypes
     * Date is a class
     * const d = new Date () is an instance of the Date class
     */

    /* Methods vs static methods vs properties
     * A method is a function that can be invoked on any of the instances
     * A static method is not dependent on a particular instance of the class
     * Date.now() is a static method attached to class
     * d.toString() is a method
     * properties are values attached to particular instances of a class
     */

    /* new, constructor, extends, super
     * new is used to create an instance of a class
      * constructor is a method to be invoked to create a new instance of a class
      * extends allows you to create a class that inherits methods from a base class
      * super() is used to call the parent class constructor
      * super.someMethod is used to call the parent class' method.
      * The child class may have its own version of the same method, with the same types of inputs & outputs (overriding)
     */
https://css-tricks.com/what-is-super-in-javascript/

### 7-declarativeSlide.js
Imperative code declares step-by-step how to complete a task
Declarative code simply states what you want done
Declarative code is more readable and therefore more maintainable.
However, if large data sets will be processed, imperative code may be preferable to control for faster performance.
For-loops are faster than the native JavaScript map/filter/reduce methods
https://codeburst.io/imperative-vs-declarative-javascript-8b5e45a602dd
https://github.com/dg92/Performance-Analysis-JS

### 11-reactStateful.js
React uses states, for example:

    class App extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        // methods here

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

    // initialize variable(s)

    render(<App count={count++}/>, document.getElementById('root'))
