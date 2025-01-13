/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    return solve(nums);
};

const solve = (nums) => {
    let n = nums.length;

    let prev2 = 0;
    let prev1 = nums[0];

    for(let i = 1; i < n; i++) {
        let include = nums[i] + prev2;
        let exclude = 0 + prev1;

        let res = Math.max(include, exclude);

        prev2 = prev1;
        prev1 = res;
    }

    return prev1;
}
