const ContactUS = require("./contactus.model")
const contactValidation = require("./contactus.validation")
const errors = require("../common/errors/errors");
const sendEmail = require("./sendEmail");


async function getContacts(_, res, next) {
    try {
        const contacts = await ContactUS.find();

        res.send(contacts);
    } catch (e) {
        next(e);
    }
}

async function sendContactUs(req, res, next) {
    try {
        const { fullname, email, message, rating} = req.body;

        const newContact = new ContactUS({ fullname, email, message, rating })
        await newContact.save();

        try {
            const send_to = email;
            const sent_from = process.env.EMAIL_USER;
            const reply_to = email;
            const subject = "Contact US Mail";
            const message_to = message;
        
            await sendEmail(subject, message_to, send_to, sent_from, reply_to);
            res.status(200).json({ success: true, message: "Email Sent" });
          } catch (error) {
            res.status(500).json(error.message);
          }
        

    } catch (e) {
        next(e);
    }
}

module.exports = {
    getContacts,
    sendContactUs,
}