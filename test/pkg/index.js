// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST - PKG
// ------------------------------------

'use strict'

var test = require('ava')

var path = require('path')
var read = require('fs').readFileSync

var fixture = function (file) {
  return read(path.join(__dirname, 'fixtures', file))
}

var expect = function (file) {
  return read(path.join(__dirname, 'expect', file))
}

var postcss = require('postcss')
var optionsrc = require('../..')

test('package.json - {Object} - Load Options', function (t) {
  optionsrc({}, 'test/pkg').then(function (options) {
    t.is(options.parser, require('sugarss'))
    t.is(options.syntax, require('postcss-scss'))
    t.is(options.map, false)
    t.is(options.from, './test/pkg/fixtures/index.css')
    t.is(options.to, './test/pkg/expect/index.css')

    t.is(options.file, path.resolve('test/pkg/package.json'))
  })
})

test('package.json - {Object} - Process SSS', function (t) {
  optionsrc({}, 'test/pkg').then(function (options) {
    postcss([])
      .process(fixture('index.sss'), options)
      .then(function (result) {
        t.is(expect('index.css'), result.css)
      })
  })
})

test('package.json - {Object} - Process CSS', function (t) {
  var ctx = { parser: false }

  optionsrc(ctx, 'test/pkg').then(function (options) {
    postcss([])
      .process(fixture('index.css'), options)
      .then(function (result) {
        t.is(expect('index.css'), result.css)
      })
  })
})
