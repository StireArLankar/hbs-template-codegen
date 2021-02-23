module.exports.register = function (Handlebars) {
  Handlebars.registerHelper('eq', (a, b) => a == b)
}
