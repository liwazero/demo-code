//输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
//使用Set+for-of迭代返回元素本身
const twoSum = (arr,target) => {
    let set = new Set()
    for(let item of arr){
        console.log(item)
        if(!set.has(target-item)){
            set.add(item)
        }else{
            return [item,target-item]
        }
    }
    return []
}

//使用Map+for循环返回元素index
const twoSumWithMap = (arr,target) => {
    let map = new Map()
    for(let i = 0;i<arr.length;i++){
        const complete = target - arr[i]
        if(map.has(complete)){
            return [map.get(complete),i]
        }else{
            map.set(arr[i],i)
        }
    }
    return []
}
const arr = [1,  2,  2,  2, 3,  4,
    4,  5,  6,  7, 9, 23,
   32, 43, 45, 56]
const target = 3
console.log(twoSumWithMap(arr,target))



//双指针最优解
//优化,考虑给定数组为递增数组,可以使用双指针
const twoSum2 = (arr,target) => {
    let i = 0
    let j = arr.length -1
    let sum = arr[i] + arr[j]
    while(i<j){
        if(sum > target){
            j--
        }else if(sum < target){
            i++
        }else{
            return [arr[i],arr[j]]
        }
    }
    return []
}





//检验for-of迭代是否可以跳出循环
const testArrOf = (arr) => {
    let times = 0
    for(let item of arr){
        times ++
        console.log(`total run times ${times}`)
        if(item === 4){
            console.log(`run code times ${times}`)
            return item
        }else{
            console.log(`this is ====${item}`)
        }
    }
}
// console.log(testArrOf(arr))

//检验map是否可以根据完成条件跳出循环
const testMap = (arr) => {
    let times = 0
    arr.map(item => {
        times ++ 
        console.log(`map run times ${times}`)
        if(item === 4){
            return item
        }else{
            console.log(`this is =======${item}`)
        }
    })
}

// console.log(testMap(arr))