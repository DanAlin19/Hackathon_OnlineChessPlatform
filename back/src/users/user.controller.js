const User = require("./user.model")
const userValidation = require("../auth/register.validation")
const errors = require("../common/errors/errors")

async function getUsers(_, res, next) {
    try {
        const users = await User.find();
        console.log(users)
        res.send(users);
    } catch (e) {
        next(e);
    }
}

async function getUserById(req, res, next) {
    try {
        const { id } = req.params;
        const foundUser = await User.findById(id);
        res.send(foundUser);
    } catch (e) {
        next(e);
    }
}

async function updateUser(req, res, next) {
    try {
        const { id } = req.params;
        const { email } = await userValidation.validateAsync(req.body, { abortEarly: false });


        const updatedUser = await User.findByIdAndUpdate(id, { email });

        if (!updatedUser) {
            throw new errors.ResourceNotFoundError("User couldn't be found!");
        }

        res.send("User was successfully updated!");
    } catch (e) {
        next(e);
    }
}

async function deleteUser(req, res, next) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            throw new errors.ResourceNotFoundError("User couldn't be found!");
        }

        res.send("User was successfully deleted!");
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}