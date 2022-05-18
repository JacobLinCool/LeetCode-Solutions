import{_ as n,e as s}from"./app.54b71ebc.js";const a={},e=s(`<h1 id="_338-counting-bits" tabindex="-1"><a class="header-anchor" href="#_338-counting-bits" aria-hidden="true">#</a> 338. Counting Bits</h1><br><p>Tags: <code>Dynamic Programming</code>, <code>Bit Manipulation</code></p><p>Given an integer <code>n</code>, return <em>an array</em> <code>ans</code> <em>of length</em> <code>n + 1</code> <em>such that for each</em> <code>i</code> (<code>0 &lt;= i &lt;= n</code>)<em>,</em> <code>ans[i]</code> <em>is the <strong>number of</strong></em> <code>1</code><em><strong>&#39;s</strong> in the binary representation of</em> <code>i</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 2
Output: [0,1,1]
Explanation:
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
3 --&gt; 11
4 --&gt; 100
5 --&gt; 101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong></p><ul><li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li><li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 338. Counting Bits (3/1/2022)</span>
<span class="token comment">// Runtime: 44 ms (86.33%) Memory: 10.69 MB (0.00%) </span>

<span class="token comment">/**
 * Note: The returned array must be malloced, assume caller calls free().
 */</span>
<span class="token keyword">typedef</span> <span class="token class-name">int32_t</span> i32<span class="token punctuation">;</span>

i32<span class="token operator">*</span> <span class="token function">countBits</span> <span class="token punctuation">(</span>i32 n<span class="token punctuation">,</span> i32<span class="token operator">*</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>size <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    i32<span class="token operator">*</span> results <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token operator">*</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>i32<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i32 i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        results<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">__builtin_popcount</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function i(t,o){return e}var l=n(a,[["render",i],["__file","index.html.vue"]]);export{l as default};
