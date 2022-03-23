// 235. Lowest Common Ancestor of a Binary Search Tree (10/12/2021)
// Runtime: 136 ms (22.58%) Memory: 48.54 MB (91.19%) 

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