// 226. Invert Binary Tree (12/24/53742)
// Runtime: 92 ms (21.66%) Memory: 39.72 MB (92.58%) 

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