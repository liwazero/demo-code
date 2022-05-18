const arr = [1,2,4,5,6,6,6,6,6,6,67,78,8]
const dontRepeat = (arr) => {
    return [...new Set(arr)]
}

console.log(dontRepeat(arr))

//添加元素
const newSet = new Set(arr).add(20)
newSet.add('111')
console.log(newSet)

//检测是否含有某元素
console.log(new Set(arr).has(6))

//删除元素
newSet.delete(5)
console.log(newSet)

//set的长度
console.log(newSet.size)
//删除所有元素
newSet.clear()
console.log(newSet)


//Map
let map = new Map()
map.set("title","this is title")
map.set("job","this is job")
map.set('5','this is string 5')
map.set(5,'this is number 5')
console.log(map.get('title'))
console.log(map.get(5),map.get('5'))

const key1 = {}
const key2 = {}
map.set(key1,'this is key1')
map.set(key2,'this is key2')
console.log(map.get(key1))
console.log(map.get(key2))
console.log(map.get({})) //undefined

//Map支持的方法
console.log(map.has(5))
console.log(map.has({}))
console.log(map.delete({}))
map.delete('title')
console.log(map)
map.clear()
console.log(map)

//Map的初始化方法
let newMap = new Map([["title","this is title"],['5','this is number 5'],[5,{'name':'this is string 5'}]])
console.log(newMap.get(5))
console.log(newMap.get(5).name)

//关于Set和Map的Q&A
//1.为什么要新增Set和Map?Set和Map相比数组有什么优势?
//2.Set和Map的定义是什么?
//3.Set和Map有哪些方法?
//4.Set和Map的区别?Set和Map的使用场景?
//5.比如5和‘5’可以作为两个值存在,Set和Map内部使用什么方法来区分的?