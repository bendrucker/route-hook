'use strict'

var Ear = require('async-ear/series')

module.exports = Hooks

function Hooks () {
  return {
    enter: {
      before: Ear(),
      after: Ear()
    },
    leave: {
      before: Ear(),
      after: Ear()
    }
  }
}
