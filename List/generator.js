//生成器:生成一个迭代器
const createIterator = function *(){
    yield 1;
    yield 2;
    yield 3;
}

const iterator = createIterator()

console.log(iterator.next())
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

//检测传入对象是否可迭代
const isIterator = (item) => {
    return typeof item[Symbol.iterator] === "function"
}
const arr = [1,2,3,45,6]
const obj = {
    title:"this is title"
}
console.log("test arr isIterator",isIterator(arr))
console.log("test obj isIterator",isIterator(obj))

const createIteratorV2 = function * (){
    let first = yield 1
    let second = yield first + 2
    let third = yield second + 3
    yield third+4
}

const iteratorV2 = createIteratorV2()
console.log("test generator v2",iteratorV2.next(7))
console.log("test generator v2",iteratorV2.next(8).value)
console.log("test generator v2",iteratorV2.next(9).value)
console.log("test generator v2",iteratorV2.next(10).value)
// console.log("test generator v2",iteratorV2.throw(new Error("Boom")))

const createIteratorV3 = function * (){
    let first = yield 1
    let second
    try{
        second = yield first + 4
    }catch(ex){
        second = 6
    }
    yield second + 3
}

const iteratorV3 = createIteratorV3()
console.log("test generator v3",iteratorV3.next())
console.log("test generator v3",iteratorV3.next(4))
console.log("test generator v3",iteratorV3.throw(new Error("Boom")))
console.log("test generator v3",iteratorV3.next(3))

const createIteratorV4 = function * (){
    yield 1
    return 4
    yield 2
    yield 3
}
const iteratorV4 = createIteratorV4()
console.log("test generator v4",iteratorV4.next().value)
console.log("test generator v4",iteratorV4.next())
console.log("test generator v4",iteratorV4.next())

const createIteratorNumber = function*(){
    yield 2;
    yield 3;
    return 4
}
const createIteratorColor = function*(){
    yield "green";
    yield "red";
    yield "blue";
}

const createCombineIterator = function*(){
    yield *createIteratorNumber();
    yield *createIteratorColor();
    yield true;
}
const combineIterator = createCombineIterator()
console.log("test combineInterator",combineIterator.next())
console.log("test combineInterator",combineIterator.next())
console.log("test combineInterator",combineIterator.next())
console.log("test combineInterator",combineIterator.next())
console.log("test combineInterator",combineIterator.next())
console.log("test combineInterator",combineIterator.next())
console.log("test combineInterator",combineIterator.next())



const createRepeatIterator = function*(count){
    let i = 0
    do{
        yield "repeat"
        i++
    }while(i<=count)
}

const createCombineIteratorV2 = function *(){
    let count = yield *createIteratorNumber()
    yield *createRepeatIterator(count)
}

const combineInteratorV2 = createCombineIteratorV2()

console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())
console.log("test combineInterator v2",combineInteratorV2.next())


const runTask = (taskDef) => {
    //迭代器
    let task = taskDef()
    let result = task.next()

    const step = () => {
        if(!result.done){
            //任务未执行完毕
            console.log("=========test runTask",result.value)
            result = task.next()
            step()
        }
    }
    step()
}

runTask(function*(){
    yield 1
    yield 2
    yield 3
})


const runTask2 = (taskDef) => {
    //迭代器
    const task = taskDef()
    let result = task.next()

    const step = () => {
        if(!result.done){
            console.log("===============test runTask2",result.value)
            result = task.next(result.value)
            step()
        }
    }
    step()
}

runTask2(function*(){
    let value = yield 1
    console.log(value)
    value = yield value+3
    console.log(value)
})

const mockFetchData = () => {
    return (callback)=>{
        setTimeout(()=>{
            callback(null,'hi')
        },2000)
    }
}

const runTask3 = (taskDef) => {
    //迭代器
    const taskRunner = taskDef()
    let result = taskRunner.next()

    const step = () => {
        if(!result.done){
            if(typeof result.value === "function"){
                // const callback = (err,data)=>{
                //     if(err){
                //         result = taskRunner.throw(new Error(err))
                //         return result
                //     }
                //     result = taskRunner.next(data)
                //     step()
                // }
                // result.value(callback)
                result.value((err,data)=>{
                    if(err){
                        result = taskRunner.throw(new Error(err))
                        return result
                    }
                    result = taskRunner.next(data)
                    step()
                })
            }else{
                result = taskRunner.next(result.value)
                step()
            }
        }
    }
    step()
}



runTask3(function*(){
    const result = yield mockFetchData()
    console.log("=========Done",result)
})

