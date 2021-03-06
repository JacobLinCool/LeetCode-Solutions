// 116. Populating Next Right Pointers in Each Node (1/16/53732)
// Runtime: 100 ms (48.69%) Memory: 45.44 MB (94.80%) 

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