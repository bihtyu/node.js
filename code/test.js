'use strict'

const crypto = require('crypto')
const hash = crypto.createHash('sha512')

hash.update('yuzhenhua')
// hash.update('3123123123')
console.log(hash.digest('hex'))