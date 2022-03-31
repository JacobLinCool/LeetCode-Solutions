// 236. Lowest Common Ancestor of a Binary Tree (7/1/2021)
// Runtime: 80 ms (85.58%) Memory: 48.28 MB (94.61%) 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root == p || root == q) return root;
    
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
    if (left != null && right != null) return root;
    else return left == null ? right : left;
};