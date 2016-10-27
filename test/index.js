/**
 * Imports
 */

var throttle = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var n = 0
  function fn () { n++ }
  var throttled = throttle(fn)

  throttled()
  throttled()
  throttled()

  setTimeout(function () {
    t.equal(n, 1)
    t.end()
  })
})

test('should throttle properly', function (t) {
  var n = 0

  function fn () { n++ }

  var throttled = throttle(fn, 1000)

  throttled()
  setTimeout(throttled, 100)
  setTimeout(throttled, 200)
  setTimeout(throttled, 300)
  setTimeout(function () {
    t.equal(n, 1)
    throttled()
    setTimeout(function () {
      t.equal(n, 2)
      t.end()
    }, 1000)
  }, 1500)
})

test('cancel should work', function (t) {
  var n = 0

  function fn () { n++ }

  var throttled = throttle(fn, 1000)

  var cancel = throttled()
  cancel()

  setTimeout(function () {
    t.equal(n, 0)
    t.end()
  }, 1000)
})
