const testRejectOrder = new Promise((resolve,reject)=>{
        reject('reject value')
        throw Error('Error')
    })

testRejectOrder.then(val=>{
    console.log(val)
}).catch(err=>{
    console.log(err)
})

