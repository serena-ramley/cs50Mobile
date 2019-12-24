// closures
/* Functions that refer to variables declared by parent function
 * still have access to those variables, possibe because of JS scoping
*/

function makeFunctionArray() {
    const arr = []

    // Scope of var is the function in which its called
    // Scope of let is the code block in which its called
    // (in this case, scope of let is the for-loop)
    for (var i = 0; i < 5; i++) {
        arr.push(function () { console.log(i) })
    }
    return arr
}

const functionArr = makeFunctionArray();

functionArr[0];

function makeHelloFunction() {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
}

// makeHelloFunction runs once invoked
const sayHello = makeHelloFunction()
//console.log(message)
//console.log('typeof message: 0', typeof message)
console.log(sayHello.toString())
sayHello
