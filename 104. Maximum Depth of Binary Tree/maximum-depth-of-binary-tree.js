// 104. Maximum Depth of Binary Tree (10/9/2021)
// Runtime: 84 ms (56.11%) Memory: 41.80 MB (94.80%) 

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
 * @return {number}
 */
function maxDepth(root) {
    if (!root) return 0;
    let level = 0;
    const queue = [root];
    while (queue.length) {
        level++;
        const level_size = queue.length;
        for (let i = 0; i < level_size; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return level;
}