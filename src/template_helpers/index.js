const br = require('./br')
const eq = require('./eq')
const times = require('./times')

// Export helpers
module.exports.register = function (Handlebars) {
  br.register(Handlebars)
  eq.register(Handlebars)
  times.register(Handlebars)
}
