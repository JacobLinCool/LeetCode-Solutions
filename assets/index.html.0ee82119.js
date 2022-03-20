import{r as t,o,c as p,a as s,b as c,F as l,e as a,d as n}from"./app.2cc02f10.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a('<h1 id="_235-lowest-common-ancestor-of-a-binary-search-tree" tabindex="-1"><a class="header-anchor" href="#_235-lowest-common-ancestor-of-a-binary-search-tree" aria-hidden="true">#</a> 235. Lowest Common Ancestor of a Binary Search Tree</h1><br><p>Tags: <code>Tree</code>, <code>Depth-First Search</code>, <code>Binary Search Tree</code>, <code>Binary Tree</code></p><p>Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.</p>',4),d=n("According to the "),m={href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor",target:"_blank",rel:"noopener noreferrer"},k=n("definition of LCA on Wikipedia"),b=n(": \u201CThe lowest common ancestor is defined between two nodes "),h=s("code",null,"p",-1),_=n(" and "),g=s("code",null,"q",-1),f=n(" as the lowest node in "),v=s("code",null,"T",-1),w=n(" that has both "),x=s("code",null,"p",-1),y=n(" and "),T=s("code",null,"q",-1),q=n(" as descendants (where we allow "),C=s("strong",null,"a node to be a descendant of itself",-1),A=n(").\u201D"),B=a(`<p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: root = [2,1], p = 2, q = 1
Output: 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 10^5]</code>.</li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li>All <code>Node.val</code> are <strong>unique</strong>.</li><li><code>p != q</code></li><li><code>p</code> and <code>q</code> will exist in the BST.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 235. Lowest Common Ancestor of a Binary Search Tree (10/12/2021)</span>
<span class="token comment">// Runtime: 136 ms (24.75%) Memory: 48.54 MB (90.14%) </span>

<span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.left = this.right = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> p<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,13);function N(L,S){const e=t("ExternalLinkIcon");return o(),p(l,null,[u,s("p",null,[d,s("a",m,[k,c(e)]),b,h,_,g,f,v,w,x,y,T,q,C,A]),B],64)}var I=r(i,[["render",N]]);export{I as default};
