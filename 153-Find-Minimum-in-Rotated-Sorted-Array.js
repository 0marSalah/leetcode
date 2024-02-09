/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let m = nums[0]
    for (i of nums) {
        if (i < m) {
            m = i
        }
    }
    return m
};