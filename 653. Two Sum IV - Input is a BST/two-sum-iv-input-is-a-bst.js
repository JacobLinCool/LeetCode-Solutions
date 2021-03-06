// 653. Two Sum IV - Input is a BST (6/10/53748)
// Runtime: 187 ms (10.98%) Memory: 48.11 MB (94.88%) 

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
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root, k) {
    const set = new Set();
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (set.has(node.val)) return true;
        set.add(k - node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return false;
}