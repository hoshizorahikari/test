'use strict';
const crypto = require('crypto');


let a = crypto.createDiffieHellman(512);

let a_keys = a.generateKeys(); // 密钥a, 用作指数

let prime = a.getPrime(); // 随机生成一个素数?用于求余
let generator = a.getGenerator(); // 底数


console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));


let b = crypto.createDiffieHellman(prime, generator);

let b_keys = b.generateKeys(); // 密钥b

// 交换并生成最终密钥

let a_secret = a.computeSecret(b_keys);
let b_secret = b.computeSecret(a_keys);


console.log('Secret A: ' + a_secret.toString('hex'));
console.log('Secret B: ' + b_secret.toString('hex'));