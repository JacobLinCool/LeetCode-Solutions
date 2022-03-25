import{e as n}from"./app.1efbfea6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_1689-partitioning-into-minimum-number-of-deci-binary-numbers" tabindex="-1"><a class="header-anchor" href="#_1689-partitioning-into-minimum-number-of-deci-binary-numbers" aria-hidden="true">#</a> 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers</h1><br><p>Tags: <code>String</code>, <code>Greedy</code></p><p>A decimal number is called <strong>deci-binary</strong> if each of its digits is either <code>0</code> or <code>1</code> without any leading zeros. For example, <code>101</code> and <code>1100</code> are <strong>deci-binary</strong>, while <code>112</code> and <code>3001</code> are not.</p><p>Given a string <code>n</code> that represents a positive decimal integer, return <em>the <strong>minimum</strong> number of positive <strong>deci-binary</strong> numbers needed so that they sum up to</em> <code>n</code><em>.</em></p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = &quot;32&quot;
Output: 3
Explanation: 10 + 11 + 11 = 32
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = &quot;82734&quot;
Output: 8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = &quot;27346209830709182346&quot;
Output: 9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n.length &lt;= 10^5</code></li><li><code>n</code> consists of only digits.</li><li><code>n</code> does not contain any leading zeros and represents a positive integer.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers (5/27/2021)</span>
<span class="token comment">// Runtime: 0 ms (94.32%) Memory: 6.49 MB (73.86%) </span>

<span class="token keyword">func</span> <span class="token function">minPartitions</span><span class="token punctuation">(</span>n <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    result <span class="token operator">:=</span> <span class="token char">&#39;0&#39;</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        <span class="token keyword">if</span> c <span class="token operator">&gt;</span> result <span class="token punctuation">{</span>
            result <span class="token operator">=</span> c
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">int</span><span class="token punctuation">(</span>result <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers (5/27/2021)</span>
<span class="token comment">// Runtime: 84 ms (87.99%) Memory: 43.05 MB (94.16%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>


<span class="token keyword">var</span> <span class="token function-variable function">minPartitions</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9019\u984C\u5C31\u662F\u627E\u5B57\u4E32\u4E2D\u6700\u5927\u7684\u6578\u5C31\u597D\uFF0C\u4EE3\u8868\u540C\u4F4D\u7F6E\u6700\u591A\u9700\u5E7E\u500B 1</span>
    
    <span class="token comment">// 1. \u6700\u7C21\u55AE\u7684\u65B9\u6CD5</span>
    <span class="token comment">// return Math.max(...n.split(&quot;&quot;));</span>
    
    <span class="token comment">// 2. \u9AD8\u901F\u7684\u65B9\u6CD5</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 3. \u7BC0\u7701\u8A18\u61B6\u9AD4\u7684\u65B9\u6CD5
    let max = 1;
    for (let num of n) {
        if (num &gt; max) max = num;
        if (max == 9) break;
    }
    return max;
    */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,18);function p(t,r){return e}var i=s(a,[["render",p]]);export{i as default};
