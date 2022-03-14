import{e as n}from"./app.d846698d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_905-sort-array-by-parity" tabindex="-1"><a class="header-anchor" href="#_905-sort-array-by-parity" aria-hidden="true">#</a> 905. Sort Array By Parity</h1><br><p>Tags: <code>Array</code>, <code>Two Pointers</code>, <code>Sorting</code></p><p>Given an integer array <code>nums</code>, move all the even integers at the beginning of the array followed by all the odd integers.</p><p>Return <em><strong>any array</strong> that satisfies this condition</em>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums = [0]
Output: [0]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>0 &lt;= nums[i] &lt;= 5000</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 905. Sort Array By Parity (1/22/2022)</span>
<span class="token comment">// Runtime: 41 ms (43.48%) Memory: 8.89 MB (85.71%) </span>

<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">sortArrayByParity</span><span class="token punctuation">(</span><span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> numsSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tail <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tail <span class="token operator">&lt;</span> numsSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>tail<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span>head<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>tail<span class="token punctuation">]</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            head<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        tail<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> numsSize<span class="token punctuation">;</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,14);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};