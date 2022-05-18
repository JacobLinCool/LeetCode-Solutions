import{_ as n,e as s}from"./app.54b71ebc.js";const a={},p=s(`<h1 id="_576-out-of-boundary-paths" tabindex="-1"><a class="header-anchor" href="#_576-out-of-boundary-paths" aria-hidden="true">#</a> 576. Out of Boundary Paths</h1><br><p>Tags: <code>Dynamic Programming</code></p><p>There is an <code>m x n</code> grid with a ball. The ball is initially at the position <code>[startRow, startColumn]</code>. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply <strong>at most</strong> <code>maxMove</code> moves to the ball.</p><p>Given the five integers <code>m</code>, <code>n</code>, <code>maxMove</code>, <code>startRow</code>, <code>startColumn</code>, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it <strong>modulo</strong> <code>10^9 + 7</code>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_1.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_2.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>0 &lt;= maxMove &lt;= 50</code></li><li><code>0 &lt;= startRow &lt; m</code></li><li><code>0 &lt;= startColumn &lt; n</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 576. Out of Boundary Paths (6/24/2021)</span>
<span class="token comment">// Runtime: 100 ms (89.29%) Memory: 46.43 MB (89.29%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maxMove</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">startRow</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">startColumn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findPaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> maxMove<span class="token punctuation">,</span> startRow<span class="token punctuation">,</span> startColumn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> move <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> move <span class="token operator">&lt;=</span> maxMove<span class="token punctuation">;</span> move<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>move<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>move<span class="token punctuation">]</span><span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> move <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> move <span class="token operator">&lt;=</span> maxMove<span class="token punctuation">;</span> move<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> up <span class="token operator">=</span> <span class="token punctuation">(</span>row <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> dp<span class="token punctuation">[</span>move<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> down <span class="token operator">=</span> <span class="token punctuation">(</span>row <span class="token operator">!==</span> m<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> dp<span class="token punctuation">[</span>move<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token punctuation">(</span>col <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> dp<span class="token punctuation">[</span>move<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token punctuation">(</span>col <span class="token operator">!==</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> dp<span class="token punctuation">[</span>move<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> sum <span class="token operator">=</span> up <span class="token operator">+</span> down <span class="token operator">+</span> left <span class="token operator">+</span> right<span class="token punctuation">;</span>
                dp<span class="token punctuation">[</span>move<span class="token punctuation">]</span><span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">1e9</span><span class="token operator">+</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>maxMove<span class="token punctuation">]</span><span class="token punctuation">[</span>startRow<span class="token punctuation">]</span><span class="token punctuation">[</span>startColumn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function t(o,e){return p}var l=n(a,[["render",t],["__file","index.html.vue"]]);export{l as default};
