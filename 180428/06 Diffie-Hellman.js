'use strict';
const crypto = require('crypto');


let a = crypto.createDiffieHellman(512);
let a_keys = a.generateKeys();

let prime = a.getPrime(); // 随机生成一个素数?
let generator = a.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));


let b = crypto.createDiffieHellman(prime, generator);
let b_keys = b.generateKeys();


let a_secret = a.computeSecret(b_keys);
let b_secret = b.computeSecret(a_keys);


console.log('Secret A: ' + a_secret.toString('hex'));
console.log('Secret B: ' + b_secret.toString('hex'));