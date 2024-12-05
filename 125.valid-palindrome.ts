/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let l = 0,
    r = str.length - 1;
  console.log(str);
  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
    } else return false;
  }
  return true;
}
// @lc code=end
