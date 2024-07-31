/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    console.log(str)    
    let l = 0, r = str.length - 1;

    while (l < r) {
        if (str[l] != str[r]) return false
        l++
        r--
    }
    return true
};