# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        ret = []
        def f(root):
            if root:
                f(root.left)
                ret.append(root.val)
                f(root.right)
        
        f(root)
        return ret
        