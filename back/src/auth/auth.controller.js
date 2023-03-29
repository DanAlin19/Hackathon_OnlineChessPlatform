
const User = require("../users/user.model");
const jwt = require("jsonwebtoken")
const registerValidation = require("./register.validation")
const loginValidation = require("./login.validation")
const errors = require("../common/errors/errors");

async function registerUser(req, res, next) {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new errors.ResourceConflictError("The user already exists!");
        }

        const newUser = new User({ firstName, lastName, email, password })
        await newUser.save();

        res.send({ message: "User was successfully created!" });
    } catch (e) {
        next(e);
    }
}

async function loginUser(req, res, next) {
    try {
        const { email, password } = await loginValidation.validateAsync(req.body, { abortEarly: false });
        const user = await User.findOne({ email });

        if (!user || !user.comparePassword(password)) {
            throw new errors.ResourceInvalidError("Incorrect email or password!")
        }

        const payload = { id: user._id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        res.send({ token })
    } catch (e) {
        next(e);
    }
}

module.exports = {
    registerUser,
    loginUser
}