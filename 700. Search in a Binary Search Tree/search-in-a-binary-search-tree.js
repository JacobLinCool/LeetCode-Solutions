// 700. Search in a Binary Search Tree (2/21/53745)
// Runtime: 92 ms (36.63%) Memory: 45.66 MB (93.98%) 

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
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val > val) return searchBST(root.left, val);
    else return searchBST(root.right, val);
}