'use strict'

// let str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';
// let statisticsArr = str.split('').reduce((prev, cur) => { prev[cur] ? prev[cur]++ : prev[cur] = 1; return prev }, {})
// console.log(statisticsArr)

// var arr1 = [2, 4, 5, 99]
// var newArr1 = arr1.reduce((prev, cur, index) => { prev.push(cur * cur); return prev}, [])
// console.log(newArr1)

// var arr2 = [[1, 2, 8], 1, 3, [3, 4, 9], [5, 6, 10]];
// var newArr2 = arr2.reduce((prev, cur) => prev.concat(cur), [])
// console.log(newArr2)

// 各科成绩占比重不一样， 求结果
var result = [
  { subject: 'math', score: 88 },
  { subject: 'chinese', score: 95 },
  { subject: 'english', score: 80 }
];
var dis = {
    math: 0.5,
    chinese: 0.3,
    english: 0.2
};
var res = result.reduce((accumulator, cur) => {
  return accumulator + cur.score * dis[cur.subject]
} , 0)
console.log(res)