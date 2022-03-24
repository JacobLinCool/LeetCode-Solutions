// 116. Populating Next Right Pointers in Each Node (10/6/2021)
// Runtime: 100 ms (59.63%) Memory: 45.44 MB (90.97%) 

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
        const lvl_size = queue.length;
        for (let i = 0; i < lvl_size; i++) {
            const node = queue.shift();
            if (i < lvl_size - 1) node.next = queue[0];
            if (node.left) queue.push(node.left, node.right);
        }
    }
    return root;
}