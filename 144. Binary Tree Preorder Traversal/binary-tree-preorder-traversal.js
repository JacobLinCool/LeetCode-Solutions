// 144. Binary Tree Preorder Traversal (10/8/2021)
// Runtime: 76 ms (57.04%) Memory: 39.00 MB (78.57%) 

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
 * @return {number[]}
 */
function preorderTraversal(root) {
    const result = [];
    const stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            result.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return result;
}