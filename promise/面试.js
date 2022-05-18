// 1. Sleep 函数

/**
 * await sleep(1000) 可以让代码休眠1秒
 * @param {*} time
 */

 const sleep = (time) => {
	return new Promise((resolve)=>{
  	setTimeout(()=>{
    	resolve()	
    },time)
  })
}



// 2.请设计一个函数，接收一个promise，使得能够在多次执行后只保留最后一次执行结果

// 要求：
// 1. 只有一次输出
// 2. 输出结果为：3

var count = 1;

const promise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(count++);
    }, 1000);
  });

function lastPromise(fn) {
  return new Promise(resolve=>{
  
  
  })
  // your code here
}

lastPromiseFn = lastPromise(promise);

lastPromiseFn().then((data) => {
  console.log(data);
});
lastPromiseFn().then((data) => {
  console.log(data);
});
lastPromiseFn().then((data) => {
  console.log(data);
});


// 3.请设计一个函数，接收一个任务队列，可以同时执行5个任务，任意一个任务结束后，从队列中获取一个新的任务继续执行，直到所有任务都执行完毕
const queueRace = (arr) =>{
  let count = 0
	for(let promise of arr){
    if(count === arr.length)return
  	promise().then((resolve)=>{
    		resolve(
        	count++
        )
    })
  }
}