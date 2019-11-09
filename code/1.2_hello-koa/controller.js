const fs = require('fs');

function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith("GET")) {
      // 如果 url 类似 "GET xxx":
      var path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: get ${path}`);
    } else if (url.startsWith("POST")) {
      var path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers(router, dir) {
  console.log(dir)
  console.log(__dirname + '/' + dir)

  var files = fs.readdirSync(dir);
  // 过滤 .js 文件
  var js_files = files.filter(f => f.endsWith(".js"));
  for (var f of js_files) {
    console.log(`process controller: ${f}...`);
    let mapping = require('./' + dir + '/' + f);
    console.log(mapping)
    addMapping(router, mapping);
  }
}

// function addControllers(router, dir) {
//   var files = fs.readdirSync(__dirname + '/' + dir);
//   // 过滤 .js 文件
//   var js_files = files.filter(f => f.endsWith(".js"));
//   for (var f of js_files) {
//     console.log(`process controller: ${f}...`);
//     let mapping = require(__dirname + '/' + dir + '/' + f);
//     console.log(mapping)
//     addMapping(router, mapping);
//   }
// }

module.exports = function (dir) {
  let 
      controllers_dir = dir || 'controllers',
      router = require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes();
}