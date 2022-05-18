import{_ as n,e as s}from"./app.3029a842.js";const a={},e=s(`<h1 id="_82-remove-duplicates-from-sorted-list-ii" tabindex="-1"><a class="header-anchor" href="#_82-remove-duplicates-from-sorted-list-ii" aria-hidden="true">#</a> 82. Remove Duplicates from Sorted List II</h1><br><p>Tags: <code>Linked List</code>, <code>Two Pointers</code></p><p>Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,1,1,2,3]
Output: [2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 82. Remove Duplicates from Sorted List II (3/9/2022)</span>
<span class="token comment">// Runtime: 7 ms (45.96%) Memory: 6.36 MB (61.28%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">deleteDuplicates</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token operator">-&gt;</span>next <span class="token operator">&amp;&amp;</span> head<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>val <span class="token operator">==</span> head<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token operator">-&gt;</span>next <span class="token operator">&amp;&amp;</span> head<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>val <span class="token operator">==</span> head<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 82. Remove Duplicates from Sorted List II (3/9/2022)</span>
<span class="token comment">// Runtime: 3 ms (75.95%) Memory: 3.05 MB (47.09%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> head<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> head<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
        <span class="token keyword">for</span> head<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> head<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>Next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        head<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>Next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 82. Remove Duplicates from Sorted List II (3/9/2022)</span>
<span class="token comment">// Runtime: 95 ms (36.55%) Memory: 43.78 MB (92.53%) </span>

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
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 82. Remove Duplicates from Sorted List II (3/9/2022)</span>
<span class="token comment">// Runtime: 64 ms (92.63%) Memory: 45.42 MB (13.68%) </span>

<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function t(p,o){return e}var l=n(a,[["render",t],["__file","index.html.vue"]]);export{l as default};
