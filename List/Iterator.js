const arr = [1,2,3,45,6,"12"]
const str = "thisissteststring"
const obj = {
    title:"this is title",
    content:"this is content",
    subTitle:"this is subTitle"
}

const objMap = new Map()
objMap.set("title","this is title")
objMap.set("content","this is content")
objMap.set("subTitle","this is subTitle")
// for(let item of arr){
//     console.log("arr=====item",item)
// }
// for(let item of str){
//     console.log("string======item",item)
// }
//obj is not iterable
// for(let item of obj){
//     console.log("obj======item",item)
// }

for(let [key,value] of objMap){
    console.log("obgMap=========item",key,value)
}
for(let item of objMap.keys()){
    console.log("objMap=========key",item)
}
for(let item of objMap.entries()){
    console.log("objMap========entries",item)
}
for(let item of objMap.values()){
    console.log("objMap=======value",item)
}