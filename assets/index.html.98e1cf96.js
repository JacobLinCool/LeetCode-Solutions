import{e as n}from"./app.2cc02f10.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="_1007-minimum-domino-rotations-for-equal-row" tabindex="-1"><a class="header-anchor" href="#_1007-minimum-domino-rotations-for-equal-row" aria-hidden="true">#</a> 1007. Minimum Domino Rotations For Equal Row</h1><br><p>Tags: <code>Array</code>, <code>Greedy</code></p><p>In a row of dominoes, <code>tops[i]</code> and <code>bottoms[i]</code> represent the top and bottom halves of the <code>i^th</code> domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)</p><p>We may rotate the <code>i^th</code> domino, so that <code>tops[i]</code> and <code>bottoms[i]</code> swap values.</p><p>Return the minimum number of rotations so that all the values in <code>tops</code> are the same, or all the values in <code>bottoms</code> are the same.</p><p>If it cannot be done, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/05/14/domino.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= tops.length &lt;= 2 * 10^4</code></li><li><code>bottoms.length == tops.length</code></li><li><code>1 &lt;= tops[i], bottoms[i] &lt;= 6</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 1007. Minimum Domino Rotations For Equal Row (3/20/2022)</span>
<span class="token comment">// Runtime: 116 ms (93.75%) Memory: 11.40 MB (43.75%) </span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">MAX</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">)</span></span></span>

<span class="token keyword">int</span> <span class="token function">minDominoRotations</span> <span class="token punctuation">(</span><span class="token keyword">int</span> tops<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> tops_size<span class="token punctuation">,</span> <span class="token keyword">int</span> bottoms<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> bottoms_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">uint16_t</span> both<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> only_tops<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> only_bottoms<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tops_size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tops<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> bottoms<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            both<span class="token punctuation">[</span>tops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            only_tops<span class="token punctuation">[</span>tops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
            only_bottoms<span class="token punctuation">[</span>bottoms<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>only_tops<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> only_bottoms<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> both<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> tops_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> tops_size <span class="token operator">-</span> both<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token function">MAX</span><span class="token punctuation">(</span>only_tops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> only_bottoms<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,17);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
