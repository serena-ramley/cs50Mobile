/* JavaScript is a single-threaded, synchronous language
 * A function that takes a really long time to run can cause a page to become unresponsive
*/

function hang(secs) {
    const doneAt = Date.now() + (secs * 1000)
    while (Date.now() < doneAt) {}
}

// JavaScript has functions that act asynchronously

function printOne() {
    console.log('one')
}

function printTwo() {
    console.log('two')
}

function printThree() {
    console.log('three')
}

printOne()
printTwo()
printThree()

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()