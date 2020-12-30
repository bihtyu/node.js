let fs = require('fs')
let events = require('events')
let EventEmitter = new events.EventEmitter()

getExt = () => {
  fs.readFile('08_ext.json', (err, data) => {
    EventEmitter.emit('data', data.toString())
  })
}

getExt()

EventEmitter.on('data', ext => {
  console.log(ext)
})
