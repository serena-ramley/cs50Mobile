const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}

function deepCopy(obj) {
    // check if vals are objects
    // if so, copy that object (deep copy)
    // else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if(typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o4 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o.obj.key)
