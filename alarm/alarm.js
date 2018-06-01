'use strict'

// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This ambient module example console.logs
ambient light and sound levels and whenever a
specified light or sound level trigger is met.
*********************************************/

var tessel = require('tessel')
var alarm = require('ambient-attx4')

var ambient = alarm.use(tessel.port['A'])

ambient.on('ready', function () {
  // Get points of light and sound data.
  setInterval(function () {
    ambient.getLightLevel(function (err, lightdata) {
      if (err) throw err
      ambient.getSoundLevel(function (err, sounddata) {
        if (err) throw err
        console.log('Light level:', lightdata.toFixed(8), ' ', 'Sound Level:', sounddata.toFixed(8))
      })
    })
  }, 1000) // The readings will happen every 1 second
})

ambient.on('error', function (err) {
  console.log(err)
})
