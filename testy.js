//  // recursion
  const arr = [[[[11]]], [12,[[453]]], [[[[[[[[123]]]]]]]], [2,[[451]]]]
  const flatter = function(...data){
     return  data.reduce((acc, item) => (
        Array.isArray(item) ? acc.concat(flatter(...item)) : acc.concat(item)
       ), []);
  }
  console.log(flatter(arr));

//  //closure
  const sum1 = function(numa){
      return function(numb){
        return numa + numb
      }
  }
 const res = sum1(12)
  console.log(res(10));

// carry
 function sum(a, b, c) {
    return a + b + c;
 }
 console.log(sum(1, 2, 3));

 function currySum(func) {
    return function (a) {
       return function (b) {
          return function (c) {
             return func(a, b, c)
          }
       }
    }
 }
 const curiedSum = currySum(sum)
 console.log(curiedSum(1)(2)(3)) // 6
 console.log(curiedSum(3)(3)(3)) // 9
