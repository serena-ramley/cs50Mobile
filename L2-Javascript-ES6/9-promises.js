// Will learn fetch in-depth in an upcoming lecture

const url = ''

fetch(url)
    .then(function(res) {
        // Extract json out of result
        return res.json()
    })
    .then(function(json) {
        return ({
            importantData: json.importantData
        })
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        // handle error
    })