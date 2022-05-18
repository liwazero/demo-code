

const isValid = (str) => {
    const n = str.length
    const stack = []
    if(n%2 !== 0){
        return false
    }
    const pairs = new Map([
        [')','('],
        [']','['],
        ['}','{']
    ])
    for(let item of str){
        if(pairs.has(item)){
            if(!stack.length || stack[stack.length-1] !== pairs.get(item)){
                return false
            }
            stack.pop()
        }else{
            stack.push(item)
        }
    }
    return !stack.length
}

let values = '[{()}]'
console.log(isValid(values))