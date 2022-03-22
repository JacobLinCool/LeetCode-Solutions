import{e as n}from"./app.f6216073.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_24-swap-nodes-in-pairs" tabindex="-1"><a class="header-anchor" href="#_24-swap-nodes-in-pairs" aria-hidden="true">#</a> 24. Swap Nodes in Pairs</h1><br><p>Tags: <code>Linked List</code>, <code>Recursion</code></p><p>Given a\xA0linked list, swap every two adjacent nodes and return its head. You must solve the problem without\xA0modifying the values in the list&#39;s nodes (i.e., only nodes themselves may be changed.)</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,2,3,4]
Output: [2,1,4,3]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = []
Output: []
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1]
Output: [1]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the\xA0list\xA0is in the range <code>[0, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 24. Swap Nodes in Pairs (2/16/2022)</span>
<span class="token comment">// Runtime: 0 ms (94.99%) Memory: 5.79 MB (75.97%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>

<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> second <span class="token operator">=</span> head <span class="token operator">?</span> head<span class="token operator">-&gt;</span>next <span class="token operator">:</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> next_head <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>second<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> next_head<span class="token punctuation">;</span>
    second<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> second<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,16);function p(t,o){return e}var c=s(a,[["render",p]]);export{c as default};
