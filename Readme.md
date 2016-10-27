
# throttle

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Throttle function

## Installation

    $ npm install @f/throttle

## Usage

Throttling a function causes that function to only execute, at most, once every `ms` milliseconds. Each time it's called, one of two things happens:

  * If there is no pending run, one is queued to run in `ms` milliseconds.
  * If one is pending, nothing happens. It just continues to wait for the pending one to run.

## Example

```js
var throttle = require('@f/throttle')

// Runs at most every 100 milliseconds, regardless of how many scroll events happen
window.addEventListener('scroll', throttle(updateScrollSpy, 100))
```

## API

### throttle(fn, ms)

- `fn` - The function to throttle
- `ms` - The time in milliseconds to throttle it for.

**Returns:** A throttled version of `fn`. When called, this function returns a `cancel` function that can be used to stop a pending execution.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/throttle.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/throttle
[git-image]: https://img.shields.io/github/tag/micro-js/throttle.svg?style=flat-square
[git-url]: https://github.com/micro-js/throttle
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/throttle.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/throttle
