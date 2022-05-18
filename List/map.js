//数组映射
//什么是映射,即基于原来的对象,创建一个新的对象,并将原来对象需要的属性,复制到新对象上
const originArr = [
    {
        title:"这是题目",
        content:"这是内容",
        id:"1"
    },
    {
        title:"这是题目",
        content:"这是内容",
        id:"2"
    },
    {
        title:"这是题目",
        content:"这是内容",
        id:"3"
    },    {
        title:"这是题目",
        content:"这是内容",
        id:"4"
    }
]

const newArr = originArr.map((item)=>{
    return item.title
})

const newArr2 = originArr.map(item=>{
    return item.content
})

console.log("=========newArr",newArr,newArr2)