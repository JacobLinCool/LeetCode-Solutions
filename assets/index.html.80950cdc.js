import{e as n}from"./app.c3942609.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_658-find-k-closest-elements" tabindex="-1"><a class="header-anchor" href="#_658-find-k-closest-elements" aria-hidden="true">#</a> 658. Find K Closest Elements</h1><br><p>Tags: <code>Array</code>, <code>Two Pointers</code>, <code>Binary Search</code>, <code>Sorting</code>, <code>Heap (Priority Queue)</code></p><p>Given a <strong>sorted</strong> integer array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code> in the array. The result should also be sorted in ascending order.</p><p>An integer <code>a</code> is closer to <code>x</code> than an integer <code>b</code> if:</p><ul><li><code>|a - x| &lt; |b - x|</code>, or</li><li><code>|a - x| == |b - x|</code> and <code>a &lt; b</code></li></ul><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= arr.length</code></li><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>arr</code> is sorted in <strong>ascending</strong> order.</li><li><code>-10^4 &lt;= arr[i], x &lt;= 10^4</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 658. Find K Closest Elements (7/3/2021)</span>
<span class="token comment">// Runtime: 120 ms (64.05%) Memory: 45.48 MB (84.29%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findClosestElements</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> elements <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">val</span><span class="token operator">:</span> val<span class="token punctuation">,</span>
            <span class="token literal-property property">dist</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>val <span class="token operator">-</span> x<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    elements<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>dist <span class="token operator">-</span> b<span class="token punctuation">.</span>dist<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> elements<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>val <span class="token operator">-</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> element<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,15);function p(t,o){return e}var r=s(a,[["render",p]]);export{r as default};
