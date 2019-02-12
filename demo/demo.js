const puke = require('../')
const scaffold = require('../demo/scaffold-example')

const [ name ] =  process.argv.slice(2), path = name

var counter = 10

while (counter--) puke(`${path}-${counter}`, scaffold(`module-${counter}`))
