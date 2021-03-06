// 102. Binary Tree Level Order Traversal (3/4/53740)
// Runtime: 76 ms (62.55%) Memory: 40.78 MB (94.52%) 

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
 * @return {number[][]}
 */
function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        let level = [];
        const level_size = queue.length;
        for (let i = 0; i < level_size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}