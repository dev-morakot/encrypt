//https://medium.com/@thanahongsuwan/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B9%81%E0%B8%9A%E0%B8%9A-public-key-e087bb1efa21
//https://srakrn.me/blog/public-private-key-for-dummies/
//https://blog.nextzy.me/blockchain-ep-3-digital-wallet-927aaacc02e8
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

function encrypt(toEncrypt, relativeOrAbsolutePathToPublicKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey)
  const publicKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toEncrypt, 'utf8')
  const encrypted = crypto.publicEncrypt(publicKey, buffer)
  return encrypted.toString('base64')
}

function decrypt(toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey)
  const privateKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toDecrypt, 'base64')
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      format: 'pem',
      cipher: 'aes-256-cbc',
     // passphrase,
    },
    buffer,
  )
  return decrypted.toString('utf8')
}

const enc = encrypt('morakot maneelart', 'encrypted-secret/public.pem')
console.log('enc', enc)

const dec = decrypt(enc, 'encrypted-secret/private.pem')
console.log('dec', dec)
