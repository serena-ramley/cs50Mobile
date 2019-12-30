/* CALL STACK ***
 * Functions invoked by other functions get added to the call stack
 * When functions complete, they are removed from the stack and the frame below continues executing
 * When you add something to a stack, it appears on the top.
 * When you peek at a stack, it shows the item on the top
 */

 function addOne(num) {
    return num + 1
 }

 function getNum() {
     return addOne(10)
 }

 function c() {
     console.log(getNum() + getNum())
 }


 // Returns 22 ( (10+1) + (10+1))
 c()

// ERROR EXAMPLE ****

 function addError(num) {
    throw new Error('oh no, an error')
 }

 function getError() {
     return addError(10)
 }

 function runError() {
     console.log(getError() + getError())
 }


 // Returns error and prints call stack
 runError()

 // APIs are not directly built into Javascript,
// e.g. setTimeout or fetch

// For a queue, the first item added is the first item out

// event loop checks if there's anything on the stack.
// If not, it checks the function queue
// If there's something in the function queue, it gets added to the stack (e.g. setTimeout API calls)
// APIs are handled by browser and function queue will add it to stack when stack is ready