import{e as n}from"./app.c3942609.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_617-merge-two-binary-trees" tabindex="-1"><a class="header-anchor" href="#_617-merge-two-binary-trees" aria-hidden="true">#</a> 617. Merge Two Binary Trees</h1><br><p>Tags: <code>Tree</code>, <code>Depth-First Search</code>, <code>Breadth-First Search</code>, <code>Binary Tree</code></p><p>You are given two binary trees <code>root1</code> and <code>root2</code>.</p><p>Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.</p><p>Return <em>the merged tree</em>.</p><p><strong>Note:</strong> The merging process must start from the root nodes of both trees.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root1 = [1], root2 = [1,2]
Output: [2,2]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both trees is in the range <code>[0, 2000]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 617. Merge Two Binary Trees (10/6/2021)</span>
<span class="token comment">// Runtime: 112 ms (76.91%) Memory: 46.87 MB (72.66%) </span>

<span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>

    root1<span class="token punctuation">.</span>val <span class="token operator">+=</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    root1<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    root1<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,17);function t(o,p){return e}var l=s(a,[["render",t]]);export{l as default};
