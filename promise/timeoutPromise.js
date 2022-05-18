
//回调未调用
const timeoutPromise = (delay) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('Timeout!')
        },delay)
    })
}

const foo = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('resolve from foo')
        },5000)
    })
}

Promise.race([
    foo(),
    timeoutPromise(3000)
]).then(
    (res)=>{
        console.log('then forfilled===',res)        
    },
    err=>{
        console.log('then reject====',err)
    }
)

//未传递参数
const p6 = new Promise((resolve,reject)=>{
    resolve()
})

p6.then(v=>{
    console.log(`this is p6 value=======${v}`) 
})

//吞掉错误或异常
const p7 = new Promise((resolve,reject)=>{
    bar().top()
    resolve('42')
})

//promise把javascript的异常也变成了异步行为
p7.then((fullfilled)=>{
    console.log(`this is fullfilled====${fullfilled}`)
},(reject)=>{
    console.log(`this is reject=======${reject}`) //this is reject=======ReferenceError: bar is not defined
})

const p8 = new Promise((resolve,reject)=>{
    resolve(42)
})
/*这里只有一个then时,会抛错bar函数为定义,
错误并不会被reject捕获,因为promise状态一经改变就不可再更改.
但第一个then会返回一个新的promise,同时将错误传递给下一个promise,
命中第二个then中的reject回调
*/
p8.then((fullfilledMsg)=>{
    bar().top()
    console.log(fullfilledMsg)
},(reject)=>{
    console.log(`this is reject=====${reject}`)
}).then((fullfilled)=>{
    console.log(`this is fullfilled value in p8 2nd then====${fullfilled}`) //这里将会捕捉到错误this is reject value in p8 2nd then =======ReferenceError: bar is not defined
},(reject)=>{
    console.log(`this is reject value in p8 2nd then =======${reject}`)
})

//Promise.resolve 和 promise.reject
/**
 * Promise.reslove如果接受一个非Promise,非thenable的立即值,就会得到一个用
 * 这个值填充的promise
 */
//以下两个makePromise函数的行为是完全一样的
const makePromise = Promise.resolve(42)
const makePromise2 = () => {
    return new Promise((resolve,reject)=>{
        resolve(42)
    })
}

makePromise.then(v=>{
    console.log('this value from un thenable function========',v)
},reject=>{
    console.log('makePromise reject!')
})

/**
 * 如果向Promise.resolve传入一个promise,就只会返回一个promise
 *
 */
const insertPromise = Promise.resolve(42)
const insertPromise2 = Promise.resolve(insertPromise)
console.log(`两个promise是一样的promise么======${insertPromise === insertPromise2}`)

/**
 * 如果向Promise.resolve传入一个非promise的thenable函数.
 * 它将会试图展开这个值,直到提取到一个具体的非类Promise的值为止
 */

 const lookLikePromise = {
     then:(cb)=>{
        cb(42)
     }
 }

 lookLikePromise.then(fullfilled=>{
    console.log(`this is looklikePromise fullfilled value====${fullfilled}`)
 },reject=>{
    console.log(`this is looklikepromise reject value====${reject}`) //永远也不会走到这里
 }) 

 const looklikepromise2 = {
     then:(cb,errcb)=>{
         cb(42)
         errcb('evil laugh')
     }
 }

 //以下函数会得到不可预测的结果,错误回调也会执行,是不可信任的thenable函数
 looklikepromise2.then(fullfilled=>{
     console.log(`looklikepromise2======${fullfilled}`)//执行了
 },reject=>{
     console.log(`looklikepromise2======${reject}`)//执行了
 })
 //使用promise使之规范化

 Promise.resolve(looklikepromise2)
 .then(fullfilled=>{
    console.log(`new looklikepromise fullfilled========${fullfilled}`)
 },reject=>{
    console.log(`new looklikepromise reject======${reject}`) //这里将不会执行
 })

 //promise.resolve可以接受任何thenable,并将其解封为它的非thenable值
 //从Promise.resolve得到的是一个真正的promise,一个可以信任的值

 

 //promise链式调用
 const linkPromise = Promise.resolve(42)
 linkPromise.then(v=>{
     return v*2
 }).then(v=>{
     console.log('linkPromise===========',v)
 })
//promise链中如果其中一步是异步,promise,或thenable,promise会将函数展开,直到提取到一个非类promise的值为止
 linkPromise.then(v=>{
     return new Promise((resolve,reject)=>{
         resolve(v*2)
     })
 }).then(v=>{
     console.log('linkPromise==================',v)
 })

//promise链中的异步
linkPromise.then(v=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(v*2)
        },2000)
    })
}).then(v=>{
    console.log('linkPromise has async============',v)
})