const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

http.createServer((req, res) => {
  let pathName = url.parse(req.url).pathname

  if (pathName == '/') {
    pathName = 'index.html'
  }

  let extName = path.extname(pathName)

  if (pathName != 'favicon.icon') {
    fs.readFile('./08_WebService/' + pathName, (err, data) => {
      if (err) {
        fs.readFile('./08_WebService/404.html', (errorNotFound, dataNotFound) => {
          if (errorNotFound) {
            console.log(errorNotFound)
          } else {
            res.writeHead(200, {
              "Content-Type": "text/html; charset=UTF-8"
            })
            res.write(dataNotFound)
            res.end()
          }
        })
        return
      } else {
        let ext = getExt(extName)
        res.writeHead(200, {
          "Content-Type": ext + "; charset=UTF-8"
        })
        res.write(data)
        res.end()
      }
    })
  }
}).listen(3000)

getExt = (extName) => {
  const data = fs.readFileSync('./08_ext.json')
  let ext = JSON.parse(data.toString())
  return ext[extName]
}