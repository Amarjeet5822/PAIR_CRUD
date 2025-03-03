const User = require("../models/user.model");

const register = async (req, res, next ) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password })

        const newUserDetails = { token: await newUser.getToken() };

        return res.status(201).json({
            success: true,
            message: "Successfully Created",
            newUserDetails,
        });


    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email })

        if (!isUserExist) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Credentials" });
        }

        const isPasswordValid = await isUserExist.comparingPassword(password);

        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        const userDetails = { token: await isUserExist.getToken() };

        return res.status(200).json({
            success: true,
            message: "Login Successful backend",
            data: userDetails,
        });
    } catch (error) {
        next(error);
    }
};



module.exports = { register, login }