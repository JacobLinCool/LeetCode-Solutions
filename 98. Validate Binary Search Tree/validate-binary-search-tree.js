// 98. Validate Binary Search Tree (10/12/2021)
// Runtime: 115 ms (25.14%) Memory: 43.55 MB (91.36%) 

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
 * @return {boolean}
 */
function isValidBST(root, max = Infinity, min = -Infinity) {
    if (!root) return true;
    if (root.val >= max) return false;
    if (root.val <= min) return false;
    return isValidBST(root.left, root.val, min) && isValidBST(root.right, max, root.val);
}