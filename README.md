# LoCrypt

Description
--
LoCrypt is a wrapper for the `crypto` module, aimed at simplifying the use of basic encryption, decryption, and hashing methods.


Dependencies
--
 * `underscore`


Installation
--

``` sh
npm install locrypt
```

Usage
--

``` javascript
var LoCrypt = require('locrypt');

var crypt = new LoCrypt({
    cryptKey           : 'key',      // defaults to ''
    cryptAlgorithm     : 'aes256',   // defaults to 'aes256'
    cryptInputEncoding : 'utf8',     // defaults to 'utf8'
    cryptOutputEncoding: 'hex',      // defaults to 'hex'
    hashAlgorithm      : 'md5',      // defaults to 'sha256'
    hashEncoding       : 'base64'    // defaults to 'hex'
});

// Example of hash helper
var hash = crypt.hash('your string here', 'sha256', 'hex');
console.log(hash);

// String to be encrypted
var str = 'Hello World';

var encrypted = crypt.encrypt(str);
console.log('Encrypted: ' + encrypted);

var decrypted = crypt.decrypt(encrypted);
console.log('Decrypted: ' + decrypted);
```

Available Encodings
 * base65
 * binary
 * hex

Available Cipher Algoritms
---
* CAST-cbc
* aes-128-cbc
* aes-128-cbc-hmac-sha1
* aes-128-cfb
* aes-128-cfb1
* aes-128-cfb8
* aes-128-ctr
* aes-128-ecb
* aes-128-gcm
* aes-128-ofb
* aes-128-xts
* aes-192-cbc
* aes-192-cfb
* aes-192-cfb1
* aes-192-cfb8
* aes-192-ctr
* aes-192-ecb
* aes-192-gcm
* aes-192-ofb
* aes-256-cbc
* aes-256-cbc-hmac-sha1
* aes-256-cfb
* aes-256-cfb1
* aes-256-cfb8
* aes-256-ctr
* aes-256-ecb
* aes-256-gcm
* aes-256-ofb
* aes-256-xts
* aes128
* aes192
* aes256
* bf
* bf-cbc
* bf-cfb
* bf-ecb
* bf-ofb
* blowfish
* camellia-128-cbc
* camellia-128-cfb
* camellia-128-cfb1
* camellia-128-cfb8
* camellia-128-ecb
* camellia-128-ofb
* camellia-192-cbc
* camellia-192-cfb
* camellia-192-cfb1
* camellia-192-cfb8
* camellia-192-ecb
* camellia-192-ofb
* camellia-256-cbc
* camellia-256-cfb
* camellia-256-cfb1
* camellia-256-cfb8
* camellia-256-ecb
* camellia-256-ofb
* camellia128
* camellia192
* camellia256
* cast
* cast-cbc
* cast5-cbc
* cast5-cfb
* cast5-ecb
* cast5-ofb
* des
* des-cbc
* des-cfb
* des-cfb1
* des-cfb8
* des-ecb
* des-ede
* des-ede-cbc
* des-ede-cfb
* des-ede-ofb
* des-ede3
* des-ede3-cbc
* des-ede3-cfb
* des-ede3-cfb1
* des-ede3-cfb8
* des-ede3-ofb
* des-ofb
* des3
* desx
* desx-cbc
* id-aes128-GCM
* id-aes192-GCM
* id-aes256-GCM
* idea
* idea-cbc
* idea-cfb
* idea-ecb
* idea-ofb
* rc2
* rc2-40-cbc
* rc2-64-cbc
* rc2-cbc
* rc2-cfb
* rc2-ecb
* rc2-ofb
* rc4
* rc4-40
* rc4-hmac-md5
* seed
* seed-cbc
* seed-cfb
* seed-ecb
* seed-ofb

Available Hash Algorithms
---
* DSA
* DSA-SHA
* DSA-SHA1
* DSA-SHA1-old
* RSA-MD4
* RSA-MD5
* RSA-MDC2
* RSA-RIPEMD160
* RSA-SHA
* RSA-SHA1
* RSA-SHA1-2
* RSA-SHA224
* RSA-SHA256
* RSA-SHA384
* RSA-SHA512
* dsaEncryption
* dsaWithSHA
* dsaWithSHA1
* dss1
* ecdsa-with-SHA1
* md4
* md4WithRSAEncryption
* md5
* md5WithRSAEncryption
* mdc2
* mdc2WithRSA
* ripemd
* ripemd160
* ripemd160WithRSA
* rmd160
* sha
* sha1
* sha1WithRSAEncryption
* sha224
* sha224WithRSAEncryption
* sha256
* sha256WithRSAEncryption
* sha384
* sha384WithRSAEncryption
* sha512
* sha512WithRSAEncryption
* shaWithRSAEncryption
* ssl2-md5
* ssl3-md5
* ssl3-sha1
* whirlpool

License
----
MIT
