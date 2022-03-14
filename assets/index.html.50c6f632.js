import{e as n}from"./app.d846698d.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="_700-search-in-a-binary-search-tree" tabindex="-1"><a class="header-anchor" href="#_700-search-in-a-binary-search-tree" aria-hidden="true">#</a> 700. Search in a Binary Search Tree</h1><br><p>Tags: <code>Tree</code>, <code>Binary Search Tree</code>, <code>Binary Tree</code></p><p>You are given the <code>root</code> of a binary search tree (BST) and an integer <code>val</code>.</p><p>Find the node in the BST that the node&#39;s value equals <code>val</code> and return the subtree rooted with that node. If such a node does not exist, return <code>null</code>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [4,2,7,1,3], val = 5
Output: []
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 5000]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^7</code></li><li><code>root</code> is a binary search tree.</li><li><code>1 &lt;= val &lt;= 10^7</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 700. Search in a Binary Search Tree (10/10/2021)</span>
<span class="token comment">// Runtime: 92 ms (73.65%) Memory: 45.66 MB (73.23%) </span>

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
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">searchBST</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,16);function t(p,o){return e}var l=a(s,[["render",t]]);export{l as default};