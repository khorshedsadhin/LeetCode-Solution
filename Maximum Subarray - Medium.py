import sys
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = -sys.maxsize - 1
        sum = 0

        for i in range(len(nums)):
            sum += nums[i]

            if sum > maxSum:
                maxSum = sum
            if sum < 0:
                sum = 0
        return maxSum
