// Async/await introduced in ES2017
// Allows people to write async code as if it were synchronous

// Using only callbacks would result in many nested functions
// Promises use then/catch statements to all be alignged

async function login(req, res, callback) {
    try {
        const user = await User.findOne({email: req.body.email})
        const isMatch = await user.comparePassword(req.body.password)
        if (!isMatch) res.status(401).send('Incorrect password')
        const payload = {id: user._id, email: user.email}
        const token = await jwt.sign(payload, config.secret, {})
        
        user.token = token
        const success = await user.save()
    
        res.json({token})
    } catch(err) {
            callback(err)
    }
}