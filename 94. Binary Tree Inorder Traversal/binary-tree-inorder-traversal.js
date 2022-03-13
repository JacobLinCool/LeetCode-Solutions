// 94. Binary Tree Inorder Traversal (10/8/2021)
// Runtime: 68 ms (73.33%) Memory: 38.96 MB (74.35%) 

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
function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
    }
    return result;
}