// 105. Construct Binary Tree from Preorder and Inorder Traversal (6/8/2021)
// Runtime: 100 ms (74.97%) Memory: 41.86 MB (94.72%) 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 以便從節點 value 來反查在 inorder 中的位置
    let inorder_location = new Map();
    for (let i = 0; i < inorder.length; i++) inorder_location.set(inorder[i], i);
    
    function tree_build(preorder_root_location, inorder_left_bound, inorder_right_bound) {
        // 建構 root 節點，獲取 root 在 inorder 的位置
        let root_value = preorder[preorder_root_location],
            root = new TreeNode(root_value),
            inorder_root_location = inorder_location.get(root_value);
        
        // 以左子節點為 root 建構子樹
        if (inorder_root_location > inorder_left_bound) 
            root.left = tree_build(preorder_root_location + 1, inorder_left_bound, inorder_root_location - 1)
        // 以右子節點為 root 建構子樹
        if (inorder_root_location < inorder_right_bound) 
            root.right = tree_build(preorder_root_location + inorder_root_location - inorder_left_bound + 1, inorder_root_location + 1, inorder_right_bound)
        
        // 回傳 root，包含其子樹
        return root;
    }
    
    // 開始建構這棵樹，從 root (preorder[0]) 開始做，inorder 的範圍為整個的 inorder
    return tree_build(0, 0, inorder.length - 1);
};