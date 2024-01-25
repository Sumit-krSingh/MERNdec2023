// define schemA for contact and model also for contact

const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
    username:{type:String, required: true},
    email:{type: String, required: true},
    message:{type: String, required: true},

});

// create the collection in database with contact model name

const Contact = new model("Contact",contactSchema);

module.exports = Contact;

