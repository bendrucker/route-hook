# route-hook [![Build Status](https://travis-ci.org/bendrucker/route-hook.svg?branch=master)](https://travis-ci.org/bendrucker/route-hook)

> Lifecycle hook management for routers


## Install

```
$ npm install --save route-hook
```


## Usage

```js
var Hooks = require('route-hook')
var hooks = Hooks()

hooks.enter.before.add(function (a, callback) {
  //=> a === 1
  callback()  
})

hooks.enter.before(1, function (err) {
  //=> err === null
})
```

All hooks on a given point are called *in series*. 

## API

The following hook points are available:

* `enter.before`
* `enter.after`
* `leave.before`
* `leave.after`

#### `Hook()` -> `object`

Creates a new hook interface.

#### `hook.add(fn)` -> `function`

Adds a new hook. Returns a function that will remove the hook.

##### fn

*Required*  
Type: `function`

A function to be call when the hook point is triggered.

#### `hook([args...], callback)` -> `undefined`

Calls the hook functions at the specified point. When all hooks have run or immediately when one errors, the callback will be called.

##### args...

Type: `any...`  

A variadic set of arguments.

##### callback

*Required*  
Type: `function`  
Arguments: `err`

A callback to call with an error if applicable when the hooks all complete.


## License

MIT © [Ben Drucker](http://bendrucker.me)
