const configDirA = './configA/'
const configDirB = './configB/'
process.env['NODE_CONFIG_DIR'] =  [configDirA, configDirB].join(':')

const config = require('config')

console.log("process.env['NODE_CONFIG_DIR']:", process.env['NODE_CONFIG_DIR'])
console.log('config.get("foo"): ', config.get('foo'))
console.log('config.get("bar"): ', config.get('bar'))
console.log('config.get("baz"): ', config.get('baz'))
console.log('config.get("qux"): ', config.get('qux'))
