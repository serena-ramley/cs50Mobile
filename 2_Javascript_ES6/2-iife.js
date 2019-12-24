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