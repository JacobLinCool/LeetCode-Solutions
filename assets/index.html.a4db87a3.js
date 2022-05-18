import{_ as n,e as a}from"./app.54b71ebc.js";const e={},s=a(`<h1 id="_991-broken-calculator" tabindex="-1"><a class="header-anchor" href="#_991-broken-calculator" aria-hidden="true">#</a> 991. Broken Calculator</h1><br><p>Tags: <code>Math</code>, <code>Greedy</code></p><p>There is a broken calculator that has the integer <code>startValue</code> on its display initially. In one operation, you can:</p><ul><li>multiply the number on display by <code>2</code>, or</li><li>subtract <code>1</code> from the number on display.</li></ul><p>Given two integers <code>startValue</code> and <code>target</code>, return <em>the minimum number of operations needed to display</em> <code>target</code> <em>on the calculator</em>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -&gt; 4 -&gt; 3}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: startValue = 5, target = 8
Output: 2
Explanation: Use decrement and then double {5 -&gt; 4 -&gt; 8}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: startValue = 3, target = 10
Output: 3
Explanation: Use double, decrement and double {3 -&gt; 6 -&gt; 5 -&gt; 10}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= startValue, target &lt;= 10^9</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 991. Broken Calculator (3/24/2022)</span>
<span class="token comment">// Runtime: 0 ms (94.91%) Memory: 5.38 MB (83.27%) </span>

<span class="token keyword">int</span> <span class="token function">brokenCalc</span> <span class="token punctuation">(</span><span class="token keyword">int</span> startValue<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> operations <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>startValue <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            target<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        operations<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> operations <span class="token operator">+</span> <span class="token punctuation">(</span>startValue <span class="token operator">-</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function t(i,o){return s}var c=n(e,[["render",t],["__file","index.html.vue"]]);export{c as default};
