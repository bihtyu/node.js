var http = require('http')
var fs = require('fs')

// v1
// http.createServer(function(req, res) {
//   if (req.url == '/') {
//     fs.readFile('./titles.json', function(err, data) {
//       if (err) {
//         console.error(err)
//         res.end('Server Error')
//       } else {
//         var titles = JSON.parse(data.toString())
//         fs.readFile('./template.html', function(err, data) {
//           if (err) {
//             console.error(err)
//             res.end('Server Error')
//           } else {
//             var tmpl = data.toString()
//             var html = tmpl.replace('%', titles.join('</li><li>'))
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.end(html)
//           }
//         })
//       }
//     })
//   }
// }).listen(3000)

// v2 创建中间函数以减少嵌套
// var server = http.createServer(function(req, res) {
//   getTitles(res)
// }).listen(3000)

// function getTitles(res) {
//   fs.readFile('./titles.json', function(err, data) {
//     if (err) {
//       hadError(err, res)
//     } else {
//       getTemplate(JSON.parse(data.toString()), res)
//     }
//   })
// }

// function getTemplate(titles, res) {
//   fs.readFile('./template.html', function(err, data) {
//     if (err) {
//       hadError(err, res)
//     } else {
//       formatHtml(titles, data.toString(), res)
//     }
//   })
// }

// function formatHtml(titles, tmpl, res) {
//   var html = tmpl.replace('%', titles.join('</li><li>'))
//   res.writeHead(200, { 'Content-Type': 'text/html'})
//   res.end(html)
// }

// function hadError(err, res) {
//   console.error(err)
//   res.end('Server Error.')
// }

// v3 通过尽早返回减少嵌套
var server = http.createServer(function(req, res) {
  getTitles(res)
}).listen(3000)

function getTitles(res) {
  fs.readFile('./titles.json', function(err, data) {
    if (err) return hadError(err, res)
    getTemplate(JSON.parse(data.toString()), res)
  })
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', function(err, data) {
    if (err) return hadError(err, res)
    formatHtml(titles, data.toString(), res)
  })
}

function formatHtml(titles, tmpl, res) {
  var html = tmpl.replace('%', titles.join('</li><li>'))
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html)
}

function hadError(err, res) {
  console.error(err)
  res.end('Serve Error.')
}