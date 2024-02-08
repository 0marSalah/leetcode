/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let all = [];
    for (let row of matrix) {
        all.push(...row);
    }
    all.sort((a, b) => a - b);
    return all[k-1];
};
