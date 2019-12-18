const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}

// Store by reference
const o2 = o

// Store by value
const o3 = Object.assign({}, o)

o.a = 'new Value'

o.obj.key = 'another new value'

// o1:  { a: 'new Value', b: 'b', obj: { key: 'another new value' } }
console.log("o1: ", o)

// o2:  { a: 'new Value', b: 'b', obj: { key: 'another new value' } }
console.log("o2: ", o2)

// o3:  { a: 'a', b: 'b', obj: { key: 'another new value' } }
console.log("o3: ", o3)
