/** 
    Example of Asymmetric encryption
    Encrypting using public key and decrypting using private key
    File Name : enc-pub-dec-priv.js
    Author : @nodejsera
 **/
//Including the required modules
var crypto = require('crypto');
const path = require('path')
var fs = require('fs');

//Reading the Public Key
const absolutePathPub = path.resolve('./encrypted-secret/pub.key')
const absolutePathPri = path.resolve('./encrypted-secret/priv.key')
pubK = privK = fs.readFileSync(absolutePathPub).toString();

//Passing the text to be encrypted using private key
var buf = Buffer.from('This is secret code', 'utf8');

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Private key
privK = {
    key: fs.readFileSync(absolutePathPri).toString(),
    passphrase: 'nodejsera'
}
//decrypting the text using public key
origData = crypto.privateDecrypt(privK, secretData)
//Printing the original content
console.log(origData.toString());