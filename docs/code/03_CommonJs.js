const http = require('http')
const tools1 = require('./03_tool-add')
const tools2 = require('03_tool-multiply')
const tools3 = require('jsliang-module')

console.log(tools2.multiply(1, 2, 3, 4))

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8'
  })
  const a = 123
  res.write(`<h1>${req.url}</h1>`);

  res.end()
}).listen(3000)