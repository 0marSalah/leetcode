/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let sortedNums = nums.sort()
    // let slow = 0, fast = 1;
    // while (fast < nums.length) {
    //     if (sortedNums[slow] == sortedNums[fast]) return true
    //     slow++
    //     fast++
    // }

    // return false
    const s = new Set(nums); return s.size !== nums.length 
};