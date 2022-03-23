import{e as n}from"./app.7b568ea2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_9-palindrome-number" tabindex="-1"><a class="header-anchor" href="#_9-palindrome-number" aria-hidden="true">#</a> 9. Palindrome Number</h1><br><p>Tags: <code>Math</code></p><p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p><p>An integer is a <strong>palindrome</strong> when it reads the same backward as forward.</p><ul><li>For example, <code>121</code> is a palindrome while <code>123</code> is not.</li></ul><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>-2^31\xA0&lt;= x &lt;= 2^31\xA0- 1</code></li></ul><p><strong>Follow up:</strong> Could you solve it without converting the integer to a string?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 9. Palindrome Number (12/27/2021)</span>
<span class="token comment">// Runtime: 8 ms (83.91%) Memory: 6.07 MB (20.93%) </span>

bool <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// x \u662F\u8CA0\u6578\uFF0C\u76F4\u63A5 false</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    
    <span class="token comment">// y \u7528\u4F86\u5B58 x \u7684\u53CD\u8F49\u6578</span>
    <span class="token class-name">int64_t</span> reversed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">// \u5F9E\u6700\u5F8C\u4E00\u4F4D\u958B\u59CB\uFF0C\u6BCF\u6B21\u5C07 reversed \u5DE6\u63A8\u5F8C\u52A0\u4E0A\u8A72\u4F4D\u4E4B\u503C</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">int64_t</span> num <span class="token operator">=</span> x<span class="token punctuation">;</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> num <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        reversed <span class="token operator">=</span> reversed <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> num <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u6BD4\u8F03\u5169\u8005\u662F\u5426\u76F8\u7B49</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">int64_t</span><span class="token punctuation">)</span>x <span class="token operator">==</span> reversed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,18);function p(t,r){return e}var c=s(a,[["render",p]]);export{c as default};
