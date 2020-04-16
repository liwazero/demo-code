//version1
/*
 * 执行用时：196 ms,内存消耗：33.7 MB
 */
var twoSum = function(nums,target){
    if(nums.length === 0 || target === '') return false;
    var result;
    for(var i = 0; i < nums.length;i++){
        var restIndex = nums.indexOf(target-nums[i])
        if(restIndex!==-1 && i!== restIndex){
            result = [i,restIndex]
            break;
        }
    }
    return result;
}
//version2
/*
 *执行用时：280 ms,内存消耗：42.7 MB
 */
var twoSum = function(nums,target){
    if(nums.length === 0 || target === '') return false;
    for(var i = 0; i < nums.length;i++){
        var restIndex = nums.indexOf(target-nums[i])
        if(restIndex!==-1 && i!== restIndex){
            return [i,restIndex]
        }
    }
}

nums = [3,2,4], target = 6;

//优质答案
var twoSum = function(nums, target) {
    let mySet = new Set()
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i]
        if(mySet.has(complement)) {
            return[ nums.indexOf(complement), i]
        }
        mySet.add(nums[i])
    }
 };

 var twoSum = function(nums, target) {
    let temp = []
    let diff
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if(temp[diff] !== undefined) {
            return [temp[diff], i]
        }
        temp[nums[i]] = i
    }
};
/**
 * question1:少了判断自身不能自身相加得到target
 * question2：起初使用forEach发现不能通过return，break跳出循环，改成使用for循环
 * 
*/




