/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    return solveTab(nums, target);
};

function solve(nums, target, dp) {
    if(target === 0) return 1;
    if(target < 0) return 0;

    if(dp[target] != -1) return dp[target];

    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        res += solve(nums, target - nums[i], dp);
    }
    dp[target] = res;

    return dp[target];
}

function solveTab(nums, target) {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= target; i++) {

        for(let j = 0; j < nums.length; j++) {

            if(i-nums[j] >= 0)
                dp[i] += dp[i - nums[j]];

        }

    }

    return dp[target];
}
