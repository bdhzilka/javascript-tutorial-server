'use strict';

const path = require('path');
const fs = require('fs');

let handlers = [
  'static',
  'requestId',
  'requestLog',
  'nocache',

  // this middleware adds this.render method
  // it is *before error*, because errors need this.render
  'render',

  // errors wrap everything
  'error',

  // this logger only logs HTTP status and URL
  // before everything to make sure it log all
  'accessLogger',

  // pure node.js examples from tutorial
  // before session
  // before form parsing, csrf checking or whatever, bare node
  'nodeExample',

  // before anything that may deal with body
  // it parses JSON & URLENCODED FORMS,
  // it does not parse form/multipart
  'bodyParser',

  // parse FORM/MULTIPART
  // (many tweaks possible, lets the middleware decide how to parse it)
  'multipartParser',

  // right after parsing body, make sure we logged for development
  'verboseLogger',

  'conditional',

  process.env.NODE_ENV=='development' && 'dev',
  'tutorial'
].filter(Boolean);

module.exports = handlers;
