from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # ans[i] will be the product of prefix and postfix of ans[i]
        # store the value of prefix and postfix in ans array. thats how 0(1) space complexity occurs
        # prefix = product of all prefix elements, postfix = u know the ans

        res = [1] * (len(nums))

        # prefix approach
        for i in range(1,len(nums)):
            res[i] = res[i-1] * nums[i-1]

        # postfix approach
        post = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= post
            post *= nums[i]

        return res
