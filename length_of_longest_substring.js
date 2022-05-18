//计算字符串中没有重复的字符串的最大长度
//Longest Substring Without Repeating Charactors
//利用滑动窗口的理念在解题
const longthOfLongestSubstring = (str) => {
    const set = new Set()
    let i = 0,j = 0,maxlength = 0
    for(i;i<str.length;i++){
        if(str.length === 0){
            return 0
        }
        if(!set.has(str[i])){
            set.add(str[i])
            maxlength = Math.max(maxlength,set.size)
        }else{
            while(set.has(str[i])){
                set.delete(str[j])
                j++
            }
            set.add(str[i])
        }
    }
    return maxlength
}

const str = 'abbbabbbab'
console.log(longthOfLongestSubstring(str))

//sliding window滑动窗口
const maxSubArraySum = (nums,size) => {
    if(size < 0 || size > nums.length){
        return null
    }
    
    let currSum = 0
    let maxSumSeen = -Infinity
    for(let i = 0; i<nums.length;i++){
        console.log(`this is loop${i}`)
        currSum += nums[i]
        console.log(`this is loop sum ${currSum}`)
        if(i >= size - 1){
            maxSumSeen = Math.max(currSum,maxSumSeen)
            currSum -= nums[i-(size-1)]
        }
    }
    return maxSumSeen
}

const arr = [1,2,3,5,6,7,8,9,12,24]
// console.log(maxSubArraySum(arr,3))