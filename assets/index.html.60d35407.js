import{_ as n,e as s}from"./app.b0b0c067.js";const a={},e=s(`<h1 id="_69-sqrt-x" tabindex="-1"><a class="header-anchor" href="#_69-sqrt-x" aria-hidden="true">#</a> 69. Sqrt(x)</h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><br><p>Tags: <code>Math</code>, <code>Binary Search</code></p><p>Given a non-negative integer <code>x</code>,\xA0compute and return <em>the square root of</em> <code>x</code>.</p><p>Since the return type\xA0is an integer, the decimal digits are <strong>truncated</strong>, and only <strong>the integer part</strong> of the result\xA0is returned.</p><p><strong>Note:</strong>\xA0You are not allowed to use any built-in exponent function or operator, such as <code>pow(x, 0.5)</code> or\xA0<code>x ** 0.5</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: x = 4
Output: 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= x &lt;= 2^31 - 1</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 69. Sqrt(x) (3/11/53959)</span>
<span class="token comment">// Runtime: 4 ms (58.05%) Memory: 5.47 MB (80.99%) </span>

<span class="token keyword">int</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span><span class="token class-name">int64_t</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5DE6\u754C\u70BA l\uFF0C\u53F3\u754C\u70BA r</span>
    <span class="token class-name">int64_t</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> x<span class="token punctuation">;</span>
    
    <span class="token comment">// \u4E8C\u5206\u641C\u5C0B\uFF0C\u76F4\u5230 l \u8D85\u904E r</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D6\u4E2D\u9593\u503C</span>
        <span class="token class-name">int64_t</span> m <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        
        <span class="token comment">// \u5982\u679C\u6E2C\u8A66\u503C\u6BD4 x \u5C0F\u5247\u5F80\u4E0A\u627E\uFF0C\u53CD\u4E4B\u5F80\u4E0B\u627E</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> m <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            r <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> r<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,16);function p(t,r){return e}var c=n(a,[["render",p],["__file","index.html.vue"]]);export{c as default};
