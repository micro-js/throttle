/**
 * Expose throttle
 */

module.exports = throttle

/**
 * throttle
 */

function throttle (fn, time) {
  var pending = null

  return function () {
    if (pending) return
    pending = setTimeout(run, time)

    return function () {
      clearTimeout(pending)
      pending = null
    }
  }

  function run () {
    pending = null
    fn()
  }
}
