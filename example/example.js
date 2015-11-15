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
