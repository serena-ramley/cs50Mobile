const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}

// Store by reference
const o2 = o

const o3 = Object.assign({}, o)

o.a = 'new Value'

o.obj.key = 'another new value'

console.log(o.obj.key)

console.log(o2)

console.log(o3)
