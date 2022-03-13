import{e as n}from"./app.c3942609.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_695-max-area-of-island" tabindex="-1"><a class="header-anchor" href="#_695-max-area-of-island" aria-hidden="true">#</a> 695. Max Area of Island</h1><br><p>Tags: <code>Array</code>, <code>Depth-First Search</code>, <code>Breadth-First Search</code>, <code>Union Find</code>, <code>Matrix</code></p><p>You are given an <code>m x n</code> binary matrix <code>grid</code>. An island is a group of <code>1</code>&#39;s (representing land) connected <strong>4-directionally</strong> (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.</p><p>The <strong>area</strong> of an island is the number of cells with a value <code>1</code> in the island.</p><p>Return <em>the maximum <strong>area</strong> of an island in</em> <code>grid</code>. If there is no island, return <code>0</code>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 695. Max Area of Island (12/26/2021)</span>
<span class="token comment">// Runtime: 8 ms (93.30%) Memory: 6.88 MB (24.58%) </span>

<span class="token keyword">int</span> <span class="token function">maxAreaOfIsland</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> grid<span class="token punctuation">,</span> <span class="token keyword">int</span> gridSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> gridColSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> m <span class="token operator">=</span> gridSize<span class="token punctuation">,</span> n <span class="token operator">=</span> gridColSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u662F (x, y) \u662F\u6D77\u6D0B\u6216\u662F\u5DF2\u7D93\u627E\u904E\u4E86\uFF0C\u5C31\u4E0D\u8981\u7E7C\u7E8C</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> grid<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// area \u662F\u9019\u4E00\u500B\u9678\u584A\u7684\u5927\u5C0F</span>
        <span class="token keyword">int</span> area <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token comment">// \u7D00\u9304\u9019\u584A\u5730\u5DF2\u627E\u904E</span>
        grid<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5982\u679C\u53F3\u908A\u4E0D\u662F\u908A\u754C\uFF0C\u627E\u53F3\u908A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> area <span class="token operator">+=</span> <span class="token function">find</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5982\u679C\u5DE6\u908A\u4E0D\u662F\u908A\u754C\uFF0C\u627E\u5DE6\u908A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> area <span class="token operator">+=</span> <span class="token function">find</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5982\u679C\u4E0B\u9762\u4E0D\u662F\u908A\u754C\uFF0C\u627E\u4E0B\u9762</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> area <span class="token operator">+=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5982\u679C\u4E0A\u9762\u4E0D\u662F\u908A\u754C\uFF0C\u627E\u4E0A\u9762</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> area <span class="token operator">+=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u56DE\u50B3\u8A72\u9678\u584A\u7E3D\u5927\u5C0F</span>
        <span class="token keyword">return</span> area<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u6B77\u6240\u6709\u4F4D\u7F6E</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5982\u679C\u662F\u9678\u5730\uFF0C\u5247\u627E\u8A72\u9678\u5730\u6240\u5C6C\u9678\u584A\u5927\u5C0F</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> area <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                max <span class="token operator">=</span> area <span class="token operator">&gt;</span> max <span class="token operator">?</span> area <span class="token operator">:</span> max<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 695. Max Area of Island (6/2/2021)</span>
<span class="token comment">// Runtime: 108 ms (61.54%) Memory: 40.80 MB (89.77%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxAreaOfIsland</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> grid<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> area <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                max <span class="token operator">=</span> area <span class="token operator">&gt;</span> max <span class="token operator">?</span> area <span class="token operator">:</span> max<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,18);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
