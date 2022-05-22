import{_ as n,e as s}from"./app.42f5c579.js";const a={},e=s(`<h1 id="_58-length-of-last-word" tabindex="-1"><a class="header-anchor" href="#_58-length-of-last-word" aria-hidden="true">#</a> 58. Length of Last Word</h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><br><p>Tags: <code>String</code></p><p>Given a string <code>s</code> consisting\xA0of some words separated by some number of spaces, return <em>the length of the <strong>last</strong> word in the string.</em></p><p>A <strong>word</strong> is a maximal substring consisting of non-space characters only.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;Hello World&quot;
Output: 5
Explanation: The last word is &quot;World&quot; with length 5.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;   fly me   to   the moon  &quot;
Output: 4
Explanation: The last word is &quot;moon&quot; with length 4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;luffy is still joyboy&quot;
Output: 6
Explanation: The last word is &quot;joyboy&quot; with length 6.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of only English letters and spaces <code>&#39; &#39;</code>.</li><li>There will be at least one word in <code>s</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 58. Length of Last Word (2/14/54140)</span>
<span class="token comment">// Runtime: 0 ms (94.28%) Memory: 5.61 MB (51.08%) </span>

<span class="token keyword">int</span> <span class="token function">lengthOfLastWord</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> curr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curr<span class="token operator">++</span><span class="token punctuation">;</span>
            last <span class="token operator">=</span> curr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            curr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function t(o,i){return e}var p=n(a,[["render",t],["__file","index.html.vue"]]);export{p as default};
