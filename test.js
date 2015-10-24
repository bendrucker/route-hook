'use strict'

var test = require('tape')
var Hooks = require('./')

test(function (t) {
  t.plan(2)

  var hooks = Hooks()

  var i = 0

  hooks.enter.before.add(function (a, callback) {
    process.nextTick(function () {
      t.equal(++i, 1)
      callback()
    })
  })

  hooks.enter.before.add(function (a, callback) {
    t.equal(++i, 2)
    callback()
  })

  hooks.enter.before(1, function (err) {
    if (err) return t.end(err)
  })
})
