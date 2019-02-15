/**
 * @license
 * https://github.com/RPGCoin/rpgaddr
 * Copyright (c) 2019 The RPGCoin Developers - Silence
* Copyright (c) 2018 MSFTserver
 * Copyright (c) 2018 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */

var shell = require('shelljs')
shell.config.fatal = true
var version = require('../package.json').version

shell.rm('-rf', 'dist')
shell.mkdir('-p', 'dist')

shell.exec('npx browserify src/rpgaddr.js --s rpgaddr', { silent: true })
  .to('dist/rpgaddrjs-' + version + '.js')
shell.echo('Generated file: dist/rpgaddrjs-' + version + '.js.')

shell.cp('LICENSE.js', 'dist/rpgaddrjs-' + version + '.min.js')
shell.exec('cat dist/rpgaddrjs-' + version + '.js | npx uglifyjs -c', { silent: true })
  .toEnd('dist/rpgaddrjs-' + version + '.min.js')
shell.echo('Generated file: dist/rpgaddrjs-' + version + '.min.js.')
