//in字符用于检测属性是否在指定对象和原型链上存在
//Object.setPrototypeOf用于指定对象原型 
const yoshi = {skulk:true}
const hattori = {sneak:true}
const kuma = {creep:true}

Object.setPrototypeOf(yoshi,kuma)

console.log('skulk' in yoshi)  
console.log('creep' in yoshi)