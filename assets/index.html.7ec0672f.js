import{e as n}from"./app.d846698d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_1881-maximum-value-after-insertion" tabindex="-1"><a class="header-anchor" href="#_1881-maximum-value-after-insertion" aria-hidden="true">#</a> 1881. Maximum Value after Insertion</h1><br><p>Tags: <code>String</code>, <code>Greedy</code></p><p>You are given a very large integer <code>n</code>, represented as a string,\u200B\u200B\u200B\u200B\u200B\u200B and an integer digit <code>x</code>. The digits in <code>n</code> and the digit <code>x</code> are in the <strong>inclusive</strong> range <code>[1, 9]</code>, and <code>n</code> may represent a <strong>negative</strong> number.</p><p>You want to <strong>maximize</strong> <code>n</code><strong>&#39;s numerical value</strong> by inserting <code>x</code> anywhere in the decimal representation of <code>n</code>\u200B\u200B\u200B\u200B\u200B\u200B. You <strong>cannot</strong> insert <code>x</code> to the left of the negative sign.</p><ul><li>For example, if <code>n = 73</code> and <code>x = 6</code>, it would be best to insert it between <code>7</code> and <code>3</code>, making <code>n = 763</code>.</li><li>If <code>n = -55</code> and <code>x = 2</code>, it would be best to insert it before the first <code>5</code>, making <code>n = -255</code>.</li></ul><p>Return <em>a string representing the <strong>maximum</strong> value of</em> <code>n</code><em>\u200B\u200B\u200B\u200B\u200B\u200B after the insertion</em>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = &quot;99&quot;, x = 9
Output: &quot;999&quot;
Explanation: The result is the same regardless of where you insert 9.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = &quot;-13&quot;, x = 2
Output: &quot;-123&quot;
Explanation: You can make n one of {-213, -123, -132}, and the largest of those three is -123.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n.length &lt;= 10^5</code></li><li><code>1 &lt;= x &lt;= 9</code></li><li>The digits in <code>n</code>\u200B\u200B\u200B are in the range <code>[1, 9]</code>.</li><li><code>n</code> is a valid representation of an integer.</li><li>In the case of a negative <code>n</code>,\u200B\u200B\u200B\u200B\u200B\u200B it will begin with <code>&#39;-&#39;</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1881. Maximum Value after Insertion (5/30/2021)</span>
<span class="token comment">// Runtime: 200 ms (14.71%) Memory: 67.30 MB (20.59%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxValue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">let</span> u <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
n <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    n <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                u <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
n <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    n <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                u <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>u<span class="token punctuation">)</span> <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token function">String</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">else</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,16);function p(t,o){return e}var u=s(a,[["render",p]]);export{u as default};