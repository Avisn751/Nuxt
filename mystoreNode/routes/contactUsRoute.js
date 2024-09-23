const express = require('express');
const { contactUsComplaint } = require('../controllers/contactUs');
const router = express.Router();

router.post('/contactUS', contactUsComplaint)


module.exports = router;