const delay = time =>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,delay)
    })
}

delay(1000)
.then(()=>{
    console.log(`step 2 after 1000ms`)
    return delay(1000)
})
.then(()=>{
    console.log(`step 3 after another 1000ms`)
})
.then(()=>{
    console.log(`step 4 next job`)
    return delay(200)
})
.then(()=>{
    console.log(`step 5 after another 200ms`)
})

const defaultReject = () =>{
    return new Promise((resolve,reject)=>{
        reject(`Oops there has a error`)
    })
}
//只传了一个完成处理函数,reject处理函数将会有一个默认的顶替上来
/**
 * function(err)=>{
 * throw err
 * } 
 * 默认reject处理函数会将错误重新抛出,使得下一步用同样的错误理由拒绝
 * 从本质上说,这使得错误可以继续沿着Promise链传播下去,直到遇到显示定义的拒绝函数
 */
const result = defaultReject().then(fullfilled=>{
    console.log('fullfilled in defaultReject',fullfilled)
})

//默认的完成处理函数
/**
 * function fullfilled(v){
 *  return v
 * }
 */
const aPromise = Promise.resolve(21)
aPromise.then(
    null,
    reject=>{
        console.log('reject reson=====',reject)
    }).then(fullfilled=>{
        //默认完成处理函数只是把接收到的任何值传递给下一个步骤
        console.log('fullfilled=======',fullfilled) //这里将会打印21
    })

//只处理拒绝(如果有的话)
//then(null,function(err){...}) 其实就是 catch(function(err){...})

/**
 * 总结:使链式流程控制可行的Promise固有特性
 * 1.调用Promise的then(...)会自动创建一个新的Promise从调用返回
 * 2.在完成或拒绝处理函数内部,如果返回一个值或抛出一个异常,新返回的(可链接的)Promise就相应地决议
 * 3.如果完成或拒绝处理函数返回一个Promise,它将会被展开,这样一来,不管它的决议值是什么,都会成为当前then(...)返回的链接Promise的决议值
 * 
 */

//Promise.resolve(...)会将传入的真正的Promise返回,对传入的thenable函数则会展开
//如果这个thenable展开得到一个拒绝状态,那么从Promise.resolve(...)返回的Promise实际上就是这同一个拒绝状态
const rejectTh = {
    then:(resolve,reject)=>{
        reject('Oops')
    }
}

const rejectPr = Promise.resolve(rejectTh)
rejectPr.then(fullFilled=>{
    console.log(`fullFilled============${fullFilled}`)
},reject=>{
    console.log(`rejectPr===========${reject}`)
})

const rejectedPr = new Promise((resolve,reject)=>{
    resolve(Promise.reject('Oops======'))
})

rejectedPr.then(fullfilled=>{
    console.log(`fullFilled==========${fullfilled}`)
},reject=>{
    console.log(`rejectedPr=========${reject}`)
})

//向reject传入一个thenable
const rejectThen = {
    then:()=>{
        reject('Oops')
        return 42
    }
}

const rejectPromise = Promise.reject(rejectThen)
rejectPromise.then(fullFilled=>{
    console.log(`============rejectPromise fullFilled ${fullfilled}`)
},reject=>{
    console.log(`============rejectPromise reject ${JSON.stringify(reject)}`) //${reject}
}) 

//关于promise的错误处理
//1.try...catch...只能处理同步错误,不能处理异步的错误
const asyncErr = () => {
    setTimeout(()=>{
        bar().baz()
    },100)
}

try{
    asyncErr()
}catch(err){
    console.log('error in try catch=====',err) 
}

const catchErrorPromise = new Promise(resolve,reject=>{
    resolve(Promise.resolve(asyncErr))
})

catchErrorPromise.then(fullFilled=>{
    console.log('fullFilled===========',fullFilled)
},reject=>{
    console.log('reject===========',reject)
})