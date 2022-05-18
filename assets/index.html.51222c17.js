import{_ as n,e as s}from"./app.54b71ebc.js";const a={},e=s(`<h1 id="_2-add-two-numbers" tabindex="-1"><a class="header-anchor" href="#_2-add-two-numbers" aria-hidden="true">#</a> 2. Add Two Numbers</h1><br><p>Tags: <code>Linked List</code>, <code>Math</code>, <code>Recursion</code></p><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum\xA0as a linked list.</p><p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: l1 = [0], l2 = [0]
Output: [0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>It is guaranteed that the list represents a number that does not have leading zeros.</li></ul><p>This is a linked problem.</p><p>We have a O(n) solution.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 2. Add Two Numbers (5/27/2021)</span>
<span class="token comment">// Runtime: 12 ms (55.67%) Memory: 4.75 MB (8.01%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span>l1 <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> l2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    zero_node <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span> Val<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    
    list <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span> Val<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    
    pos <span class="token operator">:=</span> list
    
    first<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> carry <span class="token operator">:=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>Val <span class="token operator">+</span> l2<span class="token punctuation">.</span>Val<span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> sum <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> l1<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> l2<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> first <span class="token punctuation">{</span>
        first <span class="token operator">=</span> <span class="token boolean">false</span>
        carry <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token number">10</span>
        sum <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span>
        
        pos<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span> Val<span class="token punctuation">:</span> sum <span class="token punctuation">}</span>
        pos <span class="token operator">=</span> pos<span class="token punctuation">.</span>Next
        
        <span class="token keyword">if</span> l1<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l1 <span class="token operator">=</span> zero_node
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> l2<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l2 <span class="token operator">=</span> zero_node
        <span class="token punctuation">}</span>
        
        sum <span class="token operator">=</span> l1<span class="token punctuation">.</span>Val <span class="token operator">+</span> l2<span class="token punctuation">.</span>Val <span class="token operator">+</span> carry
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> list<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 2. Add Two Numbers (5/27/2021)</span>
<span class="token comment">// Runtime: 124 ms (62.12%) Memory: 44.15 MB (94.93%) </span>

<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zero_node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> pos <span class="token operator">=</span> list<span class="token punctuation">;</span>

    <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        sum <span class="token operator">=</span> l1<span class="token punctuation">.</span>val <span class="token operator">+</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">,</span>
        carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">||</span> l1<span class="token punctuation">.</span>next <span class="token operator">||</span> l2<span class="token punctuation">.</span>next <span class="token operator">||</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        first <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        carry <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>

        pos<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pos <span class="token operator">=</span> pos<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next <span class="token operator">||</span> zero_node<span class="token punctuation">;</span>
        l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next <span class="token operator">||</span> zero_node<span class="token punctuation">;</span>
        
        sum <span class="token operator">=</span> l1<span class="token punctuation">.</span>val <span class="token operator">+</span> l2<span class="token punctuation">.</span>val <span class="token operator">+</span> carry<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> list<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 2. Add Two Numbers (3/10/2022)</span>
<span class="token comment">// Runtime: 112 ms (81.50%) Memory: 49.05 MB (12.86%) </span>

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

<span class="token keyword">function</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span>l1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> l2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> curr <span class="token operator">=</span> ans<span class="token punctuation">,</span>
        carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">||</span> l2 <span class="token operator">||</span> carry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sum <span class="token operator">=</span> carry <span class="token operator">+</span> <span class="token punctuation">(</span>l1<span class="token operator">?.</span>val <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>l2<span class="token operator">?.</span>val <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        
        l1 <span class="token operator">=</span> l1<span class="token operator">?.</span>next<span class="token punctuation">;</span>
        l2 <span class="token operator">=</span> l2<span class="token operator">?.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ans<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function t(p,o){return e}var i=n(a,[["render",t],["__file","index.html.vue"]]);export{i as default};
