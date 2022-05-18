const p1 = new Promise((resolve,reject)=>{
    resolve('B')
})

const p3 = new Promise((resolve,reject)=>{
    resolve('A')
})


const p2 = new Promise((resolve,reject)=>{
    resolve(p3)
})

p1.then(v=>{
    console.log(`===========p1 ${v}`)
})

p2.then(v=>{
    console.log(`========p2 ${v}`)
})

const p4 = Promise.resolve(p3)
p4.then(v=>{
    console.log(`==================p4 ${v}`)
})

const p5 = Promise.reject(p3)
p5.then(v=>{
    console.log(`===============p5 ${v}`)
}).catch(v=>{
    v.then(v=>{
        console.log(`==============p5 catch ${v}`)
    })
})