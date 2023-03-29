const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ContactUSSchema = new Schema({

    fullname: { type: String, require: true},
    email: { type: String, require: true },
    message: { type: String, require: true},
    rating: { type: Number, require: true}
});

const ContactUS = model('contactus', ContactUSSchema);
module.exports = ContactUS;