var crypto = require('crypto'),
         _ = require('underscore');

function LoCrypt(options) {
    this.options = {
        cryptKey           : Math.random().toString(),
        cryptAlgorithm     : 'aes256',
        cryptInputEncoding : 'utf8',
        cryptOutputEncoding: 'hex',
        hashAlgorithm      : 'sha256',
        hashEncoding       : 'hex'
    };

    _.extend(this.options, options);
}

/**
 * Encrypts the provided string
 *
 * @param String str Data to be encrypted
 * @returns String processed data
 */
LoCrypt.prototype.encrypt = function(str) {
    var options = this.options;

    var encrypt = crypto.createCipher(options.cryptAlgorithm, options.cryptKey);
    var buffer  = new Buffer(str, options.cryptInputEncoding);
    var output  = [];

    output.push(encrypt.update(buffer, options.cryptInputEncoding, options.cryptOutputEncoding));
    output.push(encrypt.final(options.cryptOutputEncoding));

    return output.join('');
};

/**
 * Decrypt the provided string
 *
 * @param String str Data to be decrypted
 * @returns String processed data
 */
LoCrypt.prototype.decrypt = function(str) {
    var options = this.options;
    var decrypt = crypto.createDecipher(options.cryptAlgorithm, options.cryptKey);
    var output  = [];

    output.push(decrypt.update(str, options.cryptOutputEncoding, options.cryptInputEncoding));
    output.push(decrypt.final(options.cryptInputEncoding));

    return output.join('');
};

/**
 * Generate a hash from the provided string
 *
 * @param String str Date used to be hashed
 * @param String algorithm Algoritm used to generate hash
 * @param String encoding Encoding of output
 * @returns String hashed data
 */
LoCrypt.prototype.hash = function(str, algorithm, encoding) {
    var options = this.options;
    var hash    = crypto.createHash(algorithm || options.hashAlgorithm);
    var output  = '';

    hash.update(str);

    output = hash.digest(encoding || options.hashEncoding);

    return output;
};

module.exports = LoCrypt;
