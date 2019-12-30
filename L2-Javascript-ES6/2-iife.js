// Runs immediately
const sayHelloNow = (function () {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()

const counter = (function() {
    let count = 0

    return {
        inc: function() { count = count + 1},
        get: function() { console.log(count) },
    }
})()

// Count variable is not accessible directly
counter.get()
counter.inc()
counter.get()

// iife's don't affect global scope
// many libraries might declare variables using iife
function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        // Closure around value x is accessible later on
        arr.push((function (x) {
            return function () { console.log(x) }
        })(i))
    }
    return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()