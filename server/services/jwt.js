/**
 * Created by Mohanachandran on 8/22/2015.
 */

var crypto = require('crypto');


exports.encode = function(payload, secret){
    var algorithm = 'HS26';
    var header ={
        typ: 'JWT',
        alg : algorithm
    }

    var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));

    return jwt + '.' + sign(jwt, secret);




};

function sign(str, key){
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encode(str){
    return new Buffer(str).toString('base64')
}