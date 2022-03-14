import{e as n}from"./app.d846698d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_92-reverse-linked-list-ii" tabindex="-1"><a class="header-anchor" href="#_92-reverse-linked-list-ii" aria-hidden="true">#</a> 92. Reverse Linked List II</h1><br><p>Tags: <code>Linked List</code></p><p>Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where <code>left &lt;= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return <em>the reversed list</em>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [5], left = 1, right = 1
Output: [5]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is <code>n</code>.</li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>-500 &lt;= Node.val &lt;= 500</code></li><li><code>1 &lt;= left &lt;= right &lt;= n</code></li></ul><p><strong>Follow up:</strong> Could you do it in one pass?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp" aria-hidden="true">#</a> CPP</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 92. Reverse Linked List II (6/24/2021)</span>
<span class="token comment">// Runtime: 4 ms (46.40%) Memory: 7.43 MB (45.68%) </span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  ListNode<span class="token operator">*</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> m <span class="token operator">==</span> n<span class="token punctuation">)</span>
      <span class="token keyword">return</span> head<span class="token punctuation">;</span>

    ListNode <span class="token function">dummy</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ListNode<span class="token operator">*</span> prev <span class="token operator">=</span> <span class="token operator">&amp;</span>dummy<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
      prev <span class="token operator">=</span> prev<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>  <span class="token comment">// point to the node before the sublist [m, n]</span>

    ListNode<span class="token operator">*</span> tail <span class="token operator">=</span> prev<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>  <span class="token comment">// will be the tail of the sublist [m, n]</span>

    <span class="token comment">// reverse the sublist [m, n] one by one</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> m<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ListNode<span class="token operator">*</span> cache <span class="token operator">=</span> tail<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
      tail<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cache<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
      cache<span class="token operator">-&gt;</span>next <span class="token operator">=</span> prev<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
      prev<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cache<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,15);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};