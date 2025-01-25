"use strict";
const INT_MAX = Number.MAX_SAFE_INTEGER;

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length;
    let jumps = 0,
    left = 0,
    right = 0;

    while(right < n-1) {
        let highestRange = 0;
        for(let i = left; i <= right; i++) {
            highestRange = Math.max(i+nums[i], highestRange);
        }

        left = right + 1;
        right = highestRange;
        jumps++;
    }

    return jumps;
};

// recursion + memoization
// TC : O(n*n) SC : O(n*n)
function solve(nums, pos, jump, n, dp) {
    if(pos >= n-1)
        return jump;

    if(dp[pos][jump] !== -1)
        return dp[pos][jump];

    let minJump = INT_MAX;
    for(let i = 1; i <= nums[pos]; i++) {
        let oneJump = solve(nums, pos + i, jump + 1, n, dp);
        minJump = Math.min(oneJump, minJump);
    }

    dp[pos][jump] = minJump;
    return dp[pos][jump];
}
