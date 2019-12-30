// this refers to an object that's set at the creation of a new execution context (function invocation)
// In the global execution context, refers to global object
// If the function is called as a method of an object, 'this is bound to the object the method is called on

const person = {
    name: 'Jordan',
    greet: function() { console.log('hello, ' + this.name) }
}

// hello, Jordan
person.greet()

// greet is a function that calls person.great()
const greet = person.greet

// hello, undefined
greet()

const friend = {
    name: 'David'
}

friend.greet = person.greet

// hello, David
friend.greet()

this.name = 'yowon'
// hello, yowon only works in node but not when running in terminal
greet()

// bind, call, apply

// bind returns a new function which we store in greet2
const greet2 = person.greet.bind({name: "This is a bound object"})

greet2()

// call and apply immediately invoke the function
person.greet.call({name: 'this is a bound object'})
person.greet.apply({name: 'this is a bound object'})

// ES6 arrow notation

// in node, this is undefined. but ES6 binds it.
const newPerson = {
    name: 'newPerson',
    greet: () => { console.log('hi, ' + this.name) }
}

newPerson.greet()