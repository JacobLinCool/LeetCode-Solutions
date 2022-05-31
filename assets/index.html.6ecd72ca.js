import{_ as n,e as s}from"./app.2e5915ff.js";const a={},e=s(`<h1 id="_876-middle-of-the-linked-list" tabindex="-1"><a class="header-anchor" href="#_876-middle-of-the-linked-list" aria-hidden="true">#</a> 876. Middle of the Linked List</h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><br><p>Tags: <code>Linked List</code>, <code>Two Pointers</code></p><p>Given the <code>head</code> of a singly linked list, return <em>the middle node of the linked list</em>.</p><p>If there are two middle nodes, return <strong>the second middle</strong> node.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 100]</code>.</li><li><code>1 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 876. Middle of the Linked List (11/25/54210)</span>
<span class="token comment">// Runtime: 0 ms (94.37%) Memory: 5.75 MB (75.42%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>


<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">middleNode</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> middle <span class="token operator">=</span> head<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            middle <span class="token operator">=</span> middle<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 876. Middle of the Linked List (4/18/53723)</span>
<span class="token comment">// Runtime: 76 ms (46.99%) Memory: 38.98 MB (92.21%) </span>

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
<span class="token keyword">function</span> <span class="token function">middleNode</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> middle <span class="token operator">=</span> head<span class="token punctuation">,</span> tail <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tail<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> middle <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,19);function p(t,l){return e}var c=n(a,[["render",p],["__file","index.html.vue"]]);export{c as default};
