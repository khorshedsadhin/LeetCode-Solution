"use strict";

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let l = 0, sum = 0;
  let res = Number.MAX_SAFE_INTEGER;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    while (sum >= target) {
      res = Math.min(res, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }

  if (res === Number.MAX_SAFE_INTEGER)
    return 0;

  return res;
};
