module.exports.register = (Handlebars) => {
  Handlebars.registerHelper('times', (n, block) => {
    let accum = ''

    for (let i = 0; i < n; ++i) {
      accum += block.fn(i)
    }

    return accum
  })

  Handlebars.registerHelper('concat', () => {
    let result = ''

    for (let arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        result += arguments[arg]
      }
    }

    return result
  })
}
