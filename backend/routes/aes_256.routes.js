const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const aesCtrl = require('../controllers/aes256.controller');

router.post('/post', aesCtrl.createEncryption);

module.exports = router;