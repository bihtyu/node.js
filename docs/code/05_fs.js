let fs = require('fs')

/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建并写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readdir 读取目录
 * 6. fs.readFile 读取目录
 * 7. fs.rename 重命名（可剪切）
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

// fs.stat('01_http.js', (error, stats) => {
//   if (error) {
//     console.log(error)
//     return false
//   } else {
//     console.log(stats)
//     console.log(`文件：${stats.isFile()}`)
//     console.log(`目录：${stats.isDirectory()}`)
//   }
// })

// for (let i = 0; i < 10000; i++) {
//   fs.rmdir(`testMkdir/${i}`, err => {
//     if (err) {
//       console.log(err)
//       return false
//     } else {
//       console.log(`${i} success`)
//     }
//   })
// }

// let a = { name: 'bihtyu', good: true }
// for (let i = 0; i < 10; i++) {
//   a = { a1: a, a2: a }
// }

// let str = JSON.stringify(a)
// console.log(str.length)

// fs.writeFile('fs_write_test.txt', str, err => {
//   if (err) {
//     console.log(err)
//     return false
//   } else {
//     console.log('success')
//   }
// })

// fs.readdir('node_modules', (err, data) => {
//   if (err) {
//     console.log(err)
//     return false
//   } else {
//     console.log('success')
//     console.log(data)
//   }
// })

// fs.rename('fs_write_test.txt', 'node_modules/fs_write_test.txt', err => {
//   if (err) {
//     console.log(err)
//     return false
//   } else {
//     console.log('remove success!')
//   }
// })

const fileArr = [];
(function eachFile(path = 'node_modules') {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err)
      return false
    } else {
      (function getFile(i) {
        if (i === files.length) {
          return false
        }
        const currentPath = `${path}/${files[i]}`
        fs.stat(currentPath, (err, stats) => {
          if (err) {
            console.log(err)
            return false
          } else {
            if (stats.isDirectory()) {
              eachFile(currentPath)
            } else {
              fileArr.push(currentPath)
              console.log('----------')
              console.log(fileArr)
              getFile(i + 1)
            }
          }
        })
      })(0)
    }
  })
})()