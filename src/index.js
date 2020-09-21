const yargs = require('yargs')

const options = yargs.options('t', {
  alias: 'test',
  demandOption: true,
  describe: 'test describe',
  type: 'string'
}).help().argv

console.log(options)
