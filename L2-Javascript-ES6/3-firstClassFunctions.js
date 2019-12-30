/* Functions are treated the same way as any other value
 * - can be assigned to variables, array values, object values
 * - can be passed as arguments to other functions
 * - can be returned from functions
 * Allows creation of higher-order functions
 * - either takes on or more functions as arguments or returns a function
 * - map(), filter(), reduce()
 */


 // MAP ***************************

 const x = [0,1,2,3]

 function addOne(number) {return number + 1}

 // returns 2
 addOne(1)

 // returns [1, 2, 3, 4]
x.map(addOne)

 // FILTER ***************************

 function isGreaterThanOne(num) { return num > 1 }

 // returns true
 isGreaterThanOne(100)

 // returns false
 isGreaterThanOne(1)

 // returns [2, 3]
x.filter(isGreaterThanOne)

// REDUCE ***************************

function add(x, y ) { return x + y}

// returns 3
add(1,2)

// returns 6 (0 + 1 + 2 + 3)
x.reduce(add)