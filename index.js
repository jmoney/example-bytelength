const { Buffer } = require('buffer')

const myArgs = process.argv.slice(2)
const utf8Length = Buffer.byteLength(myArgs[0], 'utf-8')
const utf16Length = Buffer.byteLength(myArgs[0], 'utf-16')
console.log('utf-8 length: ' + utf8Length)
console.log('utf-16 length: ' + utf16Length)