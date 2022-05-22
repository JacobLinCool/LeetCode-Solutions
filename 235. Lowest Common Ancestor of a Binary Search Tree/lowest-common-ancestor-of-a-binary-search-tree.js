// 235. Lowest Common Ancestor of a Binary Search Tree (6/12/53748)
// Runtime: 136 ms (15.89%) Memory: 48.54 MB (93.21%) 

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
function lowestCommonAncestor(root, p, q) {
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
    else if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
    else return root;
}