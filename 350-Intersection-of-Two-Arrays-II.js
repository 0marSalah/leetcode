/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    // Create a copy of nums2 to manipulate
    let nums2Copy = nums2.slice();

    for (let i of nums1) {
        let index = nums2Copy.indexOf(i);
        if (index !== -1) {
            res.push(i);
            // Remove the matched element from nums2Copy to avoid using it again
            nums2Copy.splice(index, 1);
        }
    }
    return res;
};
