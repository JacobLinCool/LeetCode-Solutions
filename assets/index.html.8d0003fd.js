import{e as n}from"./app.9616a6f1.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_21-merge-two-sorted-lists" tabindex="-1"><a class="header-anchor" href="#_21-merge-two-sorted-lists" aria-hidden="true">#</a> 21. Merge Two Sorted Lists</h1><br><p>Tags: <code>Linked List</code>, <code>Recursion</code></p><p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p><p>Merge the two lists in a one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p><p>Return <em>the head of the merged linked list</em>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: list1 = [], list2 = []
Output: []
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: list1 = [], list2 = [0]
Output: [0]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 21. Merge Two Sorted Lists (3/7/2022)</span>
<span class="token comment">// Runtime: 9 ms (14.04%) Memory: 6.11 MB (44.98%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>

<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">mergeTwoLists</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> list1<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> tail <span class="token operator">=</span> head<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">||</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail<span class="token operator">-&gt;</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
            list1 <span class="token operator">=</span> list1<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail<span class="token operator">-&gt;</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
            list2 <span class="token operator">=</span> list2<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token operator">-&gt;</span>val <span class="token operator">&lt;</span> list2<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail<span class="token operator">-&gt;</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
            list1 <span class="token operator">=</span> list1<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            tail<span class="token operator">-&gt;</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
            list2 <span class="token operator">=</span> list2<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        tail <span class="token operator">=</span> tail<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 21. Merge Two Sorted Lists (10/8/2021)</span>
<span class="token comment">// Runtime: 84 ms (63.95%) Memory: 40.37 MB (89.82%) </span>

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
<span class="token keyword">function</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l1<span class="token punctuation">)</span> <span class="token keyword">return</span> l2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l2<span class="token punctuation">)</span> <span class="token keyword">return</span> l1<span class="token punctuation">;</span>
    <span class="token keyword">let</span> hair <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tail <span class="token operator">=</span> hair<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
            l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            tail<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
            l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    tail<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">||</span> l2<span class="token punctuation">;</span>
    <span class="token keyword">return</span> hair<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,20);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
