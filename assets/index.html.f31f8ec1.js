import{e as n}from"./app.eab8e0d2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_83-remove-duplicates-from-sorted-list" tabindex="-1"><a class="header-anchor" href="#_83-remove-duplicates-from-sorted-list" aria-hidden="true">#</a> 83. Remove Duplicates from Sorted List</h1><br><p>Tags: <code>Linked List</code></p><p>Given the <code>head</code> of a sorted linked list, <em>delete all duplicates such that each element appears only once</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/04/list1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,1,2]
Output: [1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/04/list2.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,1,2,3,3]
Output: [1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 83. Remove Duplicates from Sorted List (10/6/2021)</span>
<span class="token comment">// Runtime: 88 ms (60.81%) Memory: 40.75 MB (92.01%) </span>

<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tail <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>tail<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> tail<span class="token punctuation">.</span>val <span class="token operator">===</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> tail<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,15);function t(p,l){return e}var i=s(a,[["render",t]]);export{i as default};
