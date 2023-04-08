const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    chessPoints: { type: Number, default: 800 }
});


UserSchema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = model('users', UserSchema);
module.exports = User;