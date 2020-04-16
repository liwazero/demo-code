/**
 * 执行用时：112 ms，内存消耗：37.9 MB
 */
var merge = function(intervals) {
    var result = [];
    intervals.sort(function(a,b){
        return a[0]-b[0]
    })
    var final = intervals.reduce(function(prev,cur){
        console.log(prev,cur)
        if(cur[0] <= prev[1]){
            return [Math.min(prev[0],cur[0]),Math.max(prev[1],cur[1])];
        }else{
            result.push(prev)
            return cur;
        }
    })
    result.push(final);
    return result;
};


//优质代码
var merge = function(intervals) {
    var newList = intervals.sort((a, b)=> a[0]-b[0])
    for(let i=1; i<newList.length; i++){
        if(newList[i][0] <= newList[i-1][1]){
            newList[i] = [newList[i-1][0], Math.max(newList[i-1][1], newList[i][1])]
            newList[i-1] = undefined
        }
    }
    return newList.filter(item=>item!==undefined)
};
/*
 * 起初思路不对浪费了许多时间，首先需要对intervals排序，之后判断是否能合并
 * 
 * 
 * 
 */

