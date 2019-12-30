// assume createElement() exits, similar in abstraction to document

const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
    // create head and add pegs
    const head = createElement('head')
    for (let i = 0; i < 6; i++) {
        const peg = createElement('peg')
        head.append(peg)
    }
    // create neck and add frets
    const neck = createElement('neck')
    for (let i = 0; i < 19; i++) {
        const peg = createElement('fret')
        head.append(peg)
    }

    // create body and add strings
    strings.forEach(tone => {
        const string = createElement('string')
        string.tune(tone)
        body.append(string)
    })

    return body
}