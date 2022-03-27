// 101. Symmetric Tree (10/9/2021)
// Runtime: 88 ms (58.80%) Memory: 41.27 MB (93.52%) 

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
function isSymmetric(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;
    let queue = [root.left, root.right];
    while (queue.length) {
        if (queue.length % 2) return false;
        const lvl_size = queue.length;
        let next = [];
        for (let i = 0; i < lvl_size / 2; i++) {
            const node1 = queue.shift();
            const node2 = queue.pop();
            if (!node1 && !node2) continue;
            if (!node1 || !node2) return false;
            if (node1.val !== node2.val) return false;
            next.unshift(node1.left);
            next.unshift(node1.right);
            next.push(node2.right);
            next.push(node2.left);
        }
        queue = next;
    }

    return true;
}