import{e as n}from"./app.240df17f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_1299-replace-elements-with-greatest-element-on-right-side" tabindex="-1"><a class="header-anchor" href="#_1299-replace-elements-with-greatest-element-on-right-side" aria-hidden="true">#</a> 1299. Replace Elements with Greatest Element on Right Side</h1><br><p>Tags: <code>Array</code></p><p>Given an array <code>arr</code>,\xA0replace every element in that array with the greatest element among the elements to its\xA0right, and replace the last element with <code>-1</code>.</p><p>After doing so, return the array.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --&gt; the greatest element to the right of index 0 is index 1 (18).
- index 1 --&gt; the greatest element to the right of index 1 is index 4 (6).
- index 2 --&gt; the greatest element to the right of index 2 is index 4 (6).
- index 3 --&gt; the greatest element to the right of index 3 is index 4 (6).
- index 4 --&gt; the greatest element to the right of index 4 is index 5 (1).
- index 5 --&gt; there are no elements to the right of index 5, so we put -1.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>1 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 1299. Replace Elements with Greatest Element on Right Side (1/22/2022)</span>
<span class="token comment">// Runtime: 98 ms (55.50%) Memory: 12.35 MB (76.61%) </span>

<span class="token comment">/**
 * Note: The returned array must be malloced, assume caller calls free().
 */</span>
<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">replaceElements</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> arrSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span>arrSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>arrSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> arrSize <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> max<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> max<span class="token punctuation">;</span>
            max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> arrSize<span class="token punctuation">;</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,14);function t(p,r){return e}var c=s(a,[["render",t]]);export{c as default};
