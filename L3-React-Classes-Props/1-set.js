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
  *  
 */

class Set {
    constructor(arr) {
      this.arr = arr
    }

    add(val) {
        if (!this.has(val)) this.arr.push(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }

}


 const s = new Set([1,2,3,4,5])

 // Trying to add the same value shouldn't work
 s.add(1)
 s.add(1)
 s.add(1)
 console.log('s should have 5 members and actually has ', s.size)

console.log('s should contain 5:', s.has(5))

s.add(6)
console.log('s should contain 6:', !s.has(6))
console.log('s should have 6 members and actually has:', s.size)

s.delete(6)
console.log('s should no longer contain 6:', s.has(6))
console.log('s should have 5 members and actually has:', s.size)