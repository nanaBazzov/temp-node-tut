// Modules
// commonJS,every file is module (by default)
// modules - encapsulated code (Only share minimum)


const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternatice-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

