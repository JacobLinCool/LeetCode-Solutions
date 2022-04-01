// 226. Invert Binary Tree (10/10/2021)
// Runtime: 92 ms (27.04%) Memory: 39.72 MB (91.01%) 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (!root) return root;
    if (!root.left && !root.right) return root;

    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.right = left;
    root.left = right;

    return root;
}