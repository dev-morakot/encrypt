const crypto = require('crypto');
const path = require('path')
const fs = require('fs')
const AesCtrl = {};

AesCtrl.createEncryption = async (req, res) => {
    const key = "your secret key here";
   const plaintext = req.body.name;

   const cipher = await crypto.createCipher('aes-256-cbc', key);
   const decipher = await crypto.createDecipher('aes-256-cbc', key);

   let encryptedPassword = cipher.update(plaintext, 'utf8', 'base64');
    encryptedPassword += cipher.final('base64');

   let decryptedPassword = decipher.update(encryptedPassword, 'base64', 'utf8');
   decryptedPassword += decipher.final('utf8');

    console.log('original  :', plaintext); 
    console.log('encrypted :', encryptedPassword);
    console.log('decrypted :', decryptedPassword);

    res.json({result: encryptedPassword});
}

module.exports = AesCtrl;