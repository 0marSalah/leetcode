class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        count = 1
        slow = 0
        fast = 1
        while fast < len(nums):
            if count > (len(nums) // 2):
                return nums[slow]
            if nums[slow] == nums[fast]:
                count += 1
            else:
                count = 1
                slow = fast
            fast += 1
        return nums[slow]