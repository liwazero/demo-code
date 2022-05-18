//找出array中三个数和为0的所有的组合,且不能重复

const threeSum = (nums) => {
    const result = []
    nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length-2;i++){
        if(i===0 || nums[i]!==nums[i-1]){
            let start = i+1
            let end = nums.length-1
            while(start<end){
                if(nums[i]+nums[start]+nums[end] === 0){
                    result.push([nums[i],nums[start],nums[end]])
                    start++
                    end--
                    //去除其中的重复组合
                    while(start < end && nums[start]===nums[start-1]){
                        start++
                    }
                    while(start < end && nums[end]===nums[end+1]){
                        end--
                    }
                }else if(nums[i]+nums[start]+nums[end] < 0){
                    start++
                }else{
                    end --
                }   
            }

        }
    }    

    return result
}

const arr = [-4,-1,0,2,1,0,-2,-1,-1,-1,1]
console.log(threeSum(arr))