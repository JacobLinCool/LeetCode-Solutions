import{e as n}from"./app.c3942609.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="_326-power-of-three" tabindex="-1"><a class="header-anchor" href="#_326-power-of-three" aria-hidden="true">#</a> 326. Power of Three</h1><br><p>Tags: <code>Math</code>, <code>Recursion</code></p><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of three. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of three, if there exists an integer <code>x</code> such that <code>n == 3^x</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 27
Output: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 0
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 9
Output: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you solve it without loops/recursion?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 326. Power of Three (1/11/2022)</span>
<span class="token comment">// Runtime: 8 ms (92.58%) Memory: 6.42 MB (0.00%) </span>

bool <span class="token function">isPowerOfThree</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">int64_t</span> m <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span><span class="token punctuation">(</span>m <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        m <span class="token operator">*=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> m <span class="token operator">==</span> n <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,17);function t(r,p){return a}var l=s(e,[["render",t]]);export{l as default};
