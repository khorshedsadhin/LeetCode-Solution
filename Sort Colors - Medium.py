from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        
        sort them in place 0,1,2's
        low, mid, high

        """
        low , mid = 0, 0
        high = len(nums) - 1

        while(mid <= high):
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                mid = mid + 1
                low = low + 1

            elif nums[mid] == 1:
                mid = mid + 1

            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high = high - 1
