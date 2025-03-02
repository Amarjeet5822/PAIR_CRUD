const register = (req, res) => {
    try {
        const {name, email, password} = req.body;
        
    } catch (error) {
        next(error)
    }
}

const login = (req, res) => {
    try {

    } catch (error) {
        next(error)
    }
}



module.exports = { register, login }