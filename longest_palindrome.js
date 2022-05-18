//最长回文字符串
//什么是回文字符串,例如:aba,abba

/**思路:
 * 1.排除给定字符串长度为1的情况,则直接返回这个字符串
 * 2.便利字符串,以当前序列元素为中心,判断元素左右字符串是否相同(奇数位,例如aba),或当前元素与后一个元素是否相同(偶数位,例如abba),不断向外扩散,直到不同为止
*/
const longestPalindrome = (s) => {
    if(s.length < 2){
        return s
    }
    let start = 0,maxlength = 1
    const expandAroundCenter = (left,right) => {
        while(left>=0 && right < s.length && s[left] === s[right]){
            if(right-left+1 > maxlength){
                maxlength = right-left+1
                start = left
            }
            left --
            right ++
        }
    }

    for(let i = 0;i<s.length;i++){
        expandAroundCenter(i-1,i+1)
        expandAroundCenter(i,i+1)
    }

    return s.substring(start,start+maxlength)

}

const str = 'aaaaaabbaccccccccccccca'
console.log(longestPalindrome(str))
