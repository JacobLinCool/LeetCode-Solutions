import{e as n}from"./app.a30802fc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_52-n-queens-ii" tabindex="-1"><a class="header-anchor" href="#_52-n-queens-ii" aria-hidden="true">#</a> 52. N-Queens II</h1><br><p>Tags: <code>Backtracking</code></p><p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p><p>Given an integer <code>n</code>, return <em>the number of distinct solutions to the\xA0<strong>n-queens puzzle</strong></em>.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 1
Output: 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 9</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 52. N-Queens II (5/29/2021)</span>
<span class="token comment">// Runtime: 0 ms (94.51%) Memory: 1.92 MB (49.45%) </span>

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">var</span> result <span class="token builtin">int</span>
<span class="token keyword">var</span> queens_col <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">var</span> n <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">abs</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span>a
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">attacked</span><span class="token punctuation">(</span>row <span class="token builtin">int</span><span class="token punctuation">,</span> col <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		enemy_row<span class="token punctuation">,</span> enemy_col <span class="token operator">:=</span> i<span class="token punctuation">,</span> queens_col<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		relative_x<span class="token punctuation">,</span> relative_y <span class="token operator">:=</span> <span class="token function">abs</span><span class="token punctuation">(</span>enemy_row<span class="token operator">-</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">abs</span><span class="token punctuation">(</span>enemy_col<span class="token operator">-</span>col<span class="token punctuation">)</span>

		<span class="token keyword">if</span> relative_x <span class="token operator">==</span> relative_y <span class="token operator">||</span> col <span class="token operator">==</span> enemy_col <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">place_queen</span><span class="token punctuation">(</span>row <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> row <span class="token operator">==</span> n <span class="token punctuation">{</span>
		result<span class="token operator">++</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">attacked</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			queens_col<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> i
			<span class="token function">place_queen</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
			queens_col<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">totalNQueens</span><span class="token punctuation">(</span>sn <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token number">0</span>
    queens_col <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
    n <span class="token operator">=</span> sn

	<span class="token function">place_queen</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 52. N-Queens II (5/29/2021)</span>
<span class="token comment">// Runtime: 76 ms (78.48%) Memory: 38.63 MB (94.37%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">totalNQueens</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9019\u4E00\u984C\u6709\u500B\u7279\u9EDE\uFF0C\u5C31\u662F\u4ED6 n \u53EA\u6709 1 ~ 9 \uFF0C\u6240\u4EE5\u7528 testcase \u8DD1\u5B8C\u5C31\u53EF\u4EE5\u77E5\u9053\u7B54\u6848\u4E86 XD</span>
    <span class="token comment">// return [1, 0, 0, 2, 10, 4, 40, 92, 352][n - 1];</span>

    <span class="token comment">// \u6B63\u78BA\u7684\u65B9\u6CD5\u662F\u7528\u905E\u8FF4\u8DD1\u5B8C\u6240\u6709\u7D50\u679C</span>

    <span class="token comment">// \u53EF\u884C\u65B9\u6CD5\u6578</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7687\u540E\u6240\u5728\u7684\u884C\u6578</span>
    <span class="token keyword">const</span> queens_col <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">valid</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u78BA\u8A8D\u8A72\u683C\u662F\u5426\u53EF\u653E</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7B2C i \u5217\u7687\u540E\u4F4D\u7F6E</span>
            <span class="token keyword">const</span> prev_row <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">const</span> prev_col <span class="token operator">=</span> queens_col<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">const</span> relative_x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>prev_row <span class="token operator">-</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> relative_y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>prev_col <span class="token operator">-</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// relative_x === relative_y: \u4F4D\u65BC\u5DF2\u653E\u7687\u540E\u4E4B\u659C\u7DDA\u4E0A, prev_col === col: \u4F4D\u65BC\u5DF2\u653E\u7687\u540E\u4E4B\u540C\u884C</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>relative_x <span class="token operator">===</span> relative_y <span class="token operator">||</span> prev_col <span class="token operator">===</span> col<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">place_queen</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6700\u5F8C\u4E00\u5217\u53EF\u884C\u7684\u8A71\uFF08\u6700\u6DF1\u905E\u8FF4\uFF09\uFF0C\u53EF\u884C\u65B9\u6CD5\u6578 += 1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> n<span class="token punctuation">)</span> result<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53BB\u8DD1\u6BCF\u884C</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">valid</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5982\u679C\u90A3\u884C\u53EF\u4EE5\u653E\u5C31\u653E\uFF0C\u7136\u5F8C\u627E\u653E\u9019\u884C\u63A5\u4E0B\u4F86\u7684\u53EF\u80FD\u6027</span>
                queens_col<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> col<span class="token punctuation">;</span>
                <span class="token function">place_queen</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// \u627E\u5B8C\u653E\u9019\u884C\u7684\u53EF\u80FD\u6027\u4E4B\u5F8C\u8981\u6E05\u6389\uFF0C\u8981\u4E0D\u7136\u4E0B\u500B validation \u53EF\u80FD\u6703\u932F</span>
                queens_col<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5F9E\u7B2C\u4E00\u5217\u958B\u59CB\u653E\u7687\u540E</span>
    <span class="token function">place_queen</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,17);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
