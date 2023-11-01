/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int maxDepth(struct TreeNode* root){
    if (root == NULL)
        return 0;
    else
    {
        int lh = maxDepth(root->left);
        int rh = maxDepth(root->right);
        // when reach leaf node we return 1 and so on until we reach the maximum of ( lh and rh )
        if(lh > rh)
            return lh + 1;
        else
            return rh + 1;
    }
}