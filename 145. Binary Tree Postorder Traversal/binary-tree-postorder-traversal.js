// 145. Binary Tree Postorder Traversal (7/8/53737)
// Runtime: 76 ms (44.47%) Memory: 39.07 MB (94.67%) 

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
function postorderTraversal(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result;
}