let items = Array.of(1)
console.log("items==========1",items)
items = Array.of("1",2,4)
console.log("items==========2",items)
items = Array.of(2,4,5,"23")
console.log("items==========3",items)

const createArray = (creater,value) => {
    return creater(value)
}
items = createArray(Array.of,1)
console.log("items==========4",items)
//slice对象只要有length和索引就能正常运行
const makeArray = (likeArray) => {
    return Array.prototype.slice.call(likeArray)
}
const str = "23342423"
console.log("makeArray===========",makeArray(str))

// const makeArrayV2 = () => {
//     const result = Array.from(arguments)
// }
// console.log("==========makeArray2",makeArrayV2([1,2,3,4,5]))
console.log("=========Array.from",Array.from("1,2,3,4,5,6"))

const translate = (items) => {
    return Array.from(items,item=>item+3)
}
console.log("=============translate",translate('test'))
console.log("=============translate2",translate([2,3,4,5,6]))
