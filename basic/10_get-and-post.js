var http = require('http')
var items = []
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')
  console.log(req.method)
  switch (req.method) {
    // POST 请求时，浏览器会先发一次 options 请求，如果请求通过，则继续发送正式的 POST 请求
    case 'OPTIONS':
      res.statusCode = 200
      res.end()
      break
    // 如果是 GET 请求，则直接返回 items 数组
    case 'GET':
      let data = JSON.stringify(items)
      res.write(data)
      res.end()
      break
    // POST 请求
    case 'POST':
      let item = ''
      req.on('data', chunk => {
        item += chunk
      })
      req.on('end', _ => {
        item = JSON.parse(item)
        items.push(item.item)
        let data = JSON.stringify(items)
        res.write(data)
        res.end()
      })
      break
  }
}).listen(3000)

console.log('http server is start...')
