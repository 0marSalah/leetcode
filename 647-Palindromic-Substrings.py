class Solution:
    def countPalindromes(self, l, r, s):
        res = 0
        while l >= 0 and r < len(s) and s[l] == s[r]: # odd casees
                res  += 1
                l -= 1
                r += 1
        return res

    def countSubstrings(self, s: str) -> int:
        count = 0

        for i in range(len(s)):
            l = r = i
            count += self.countPalindromes(l, r, s)

            l = i
            r = i + 1
            count += self.countPalindromes(l, r, s)
        
        return count