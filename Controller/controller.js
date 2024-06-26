const express = require('express');
const router = express.Router();
const ContactUs = require('../model/form');
//post
router.post('/', async (req, res) => {
    const { name, email, tel, message } = req.body;

    try {
        await ContactUs.create({
            name: name,
            email: email,
            message:message
        });
        res.send({ status: "Ok" });
    } catch (error) {
        res.send({ status: "Error" });
    }
});

module.exports = router;
