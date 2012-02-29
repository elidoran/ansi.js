
/**
 * Invokes the terminal "beep" sound once per second on every exact second.
 */

var cursor = require('../')(process.stdout)

function beep () {
  cursor.beep()
  setTimeout(beep, 1000 - (new Date()).getMilliseconds())
}

setTimeout(beep, 1000 - (new Date()).getMilliseconds())
