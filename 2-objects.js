const o = new Object()
o.firstName = "Jane"
o.lastName = "Doe"
o.isLearning = true
o.greet = function() {
    console.log("Hi")
}

const o2 = {
}
o.firstName = "Jane"
o['lastName'] = "Doe"
const key = "isLearning"
o[key] = true
o["greet"] = function() {
    console.log('hi')
}

const o3 = {
    firstName: 'Jane',
    lastName: 'Doe',
    isLearning: true,
    greet: function() {
        console.log('Hi!')
    },
    address: {
        street: 'Main St.',
        number: 123
    }
}

// { street: 'Main St.', number: 123 }
console.log(o3.address)

// 123
console.log(o3.address.number)
