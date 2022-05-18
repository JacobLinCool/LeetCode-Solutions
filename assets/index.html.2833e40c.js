import{_ as n,e as s}from"./app.54b71ebc.js";const a={},e=s(`<h1 id="_98-validate-binary-search-tree" tabindex="-1"><a class="header-anchor" href="#_98-validate-binary-search-tree" aria-hidden="true">#</a> 98. Validate Binary Search Tree</h1><br><p>Tags: <code>Tree</code>, <code>Depth-First Search</code>, <code>Binary Search Tree</code>, <code>Binary Tree</code></p><p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p><p>A <strong>valid BST</strong> is defined as follows:</p><ul><li>The left subtree of a node contains only nodes with keys <strong>less than</strong> the node&#39;s key.</li><li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node&#39;s key.</li><li>Both the left and right subtrees must also be binary search trees.</li></ul><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [2,1,3]
Output: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node&#39;s value is 5 but its right child&#39;s value is 4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^4]</code>.</li><li><code>-2^31 &lt;= Node.val &lt;= 2^31 - 1</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 98. Validate Binary Search Tree (10/12/2021)</span>
<span class="token comment">// Runtime: 115 ms (17.95%) Memory: 43.55 MB (94.85%) </span>

<span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> max<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> min<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> min<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> max<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function t(o,i){return e}var l=n(a,[["render",t],["__file","index.html.vue"]]);export{l as default};
