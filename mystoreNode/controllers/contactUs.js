const Contact = require("../models/contactUs");

const contactUsComplaint = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const existingContact = await Contact.findOne({ where: { email } });
        if (existingContact) {
            await existingContact.update({ message });
            res.status(200).json({ message: "Suggestion updated successfully" });
        } else {
            const newContact = await Contact.create({ name, email, message });
            res.status(201).json({ message: "Suggestion received" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in contact us" });
    }
};

module.exports = {
    contactUsComplaint
};
