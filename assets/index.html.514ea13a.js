import{_ as n,e as s}from"./app.c4971744.js";const a={},e=s(`<h1 id="_682-baseball-game" tabindex="-1"><a class="header-anchor" href="#_682-baseball-game" aria-hidden="true">#</a> 682. Baseball Game</h1><br><p>Tags: <code>Array</code>, <code>Stack</code>, <code>Simulation</code></p><p>You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds&#39; scores.</p><p>At the beginning of the game, you start with an empty record. You are given a list of strings <code>ops</code>, where <code>ops[i]</code> is the <code>i^th</code> operation you must apply to the record and is one of the following:</p><ol><li>An integer <code>x</code> - Record a new score of <code>x</code>.</li><li><code>&quot;+&quot;</code> - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.</li><li><code>&quot;D&quot;</code> - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.</li><li><code>&quot;C&quot;</code> - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.</li></ol><p>Return <em>the sum of all the scores on the record</em>. The test cases are generated so that the answer fits in a 32-bit integer.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: ops = [&quot;5&quot;,&quot;2&quot;,&quot;C&quot;,&quot;D&quot;,&quot;+&quot;]
Output: 30
Explanation:
&quot;5&quot; - Add 5 to the record, record is now [5].
&quot;2&quot; - Add 2 to the record, record is now [5, 2].
&quot;C&quot; - Invalidate and remove the previous score, record is now [5].
&quot;D&quot; - Add 2 * 5 = 10 to the record, record is now [5, 10].
&quot;+&quot; - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: ops = [&quot;5&quot;,&quot;-2&quot;,&quot;4&quot;,&quot;C&quot;,&quot;D&quot;,&quot;9&quot;,&quot;+&quot;,&quot;+&quot;]
Output: 27
Explanation:
&quot;5&quot; - Add 5 to the record, record is now [5].
&quot;-2&quot; - Add -2 to the record, record is now [5, -2].
&quot;4&quot; - Add 4 to the record, record is now [5, -2, 4].
&quot;C&quot; - Invalidate and remove the previous score, record is now [5, -2].
&quot;D&quot; - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
&quot;9&quot; - Add 9 to the record, record is now [5, -2, -4, 9].
&quot;+&quot; - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
&quot;+&quot; - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: ops = [&quot;1&quot;,&quot;C&quot;]
Output: 0
Explanation:
&quot;1&quot; - Add 1 to the record, record is now [1].
&quot;C&quot; - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ops.length &lt;= 1000</code></li><li><code>ops[i]</code> is <code>&quot;C&quot;</code>, <code>&quot;D&quot;</code>, <code>&quot;+&quot;</code>, or a string representing an integer in the range <code>[-3 * 10^4, 3 * 10^4]</code>.</li><li>For operation <code>&quot;+&quot;</code>, there will always be at least two previous scores on the record.</li><li>For operations <code>&quot;C&quot;</code> and <code>&quot;D&quot;</code>, there will always be at least one previous score on the record.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 682. Baseball Game (4/10/2022)</span>
<span class="token comment">// Runtime: 4 ms (32.17%) Memory: 2.64 MB (60.99%) </span>

<span class="token keyword">func</span> <span class="token function">calPoints</span><span class="token punctuation">(</span>ops <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	records <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ops<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> op <span class="token operator">:=</span> <span class="token keyword">range</span> ops <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> op <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">:</span>
			records <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>records<span class="token punctuation">,</span> records<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>records<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>records<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>records<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span>
			records <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>records<span class="token punctuation">,</span> records<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>records<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span>
			records <span class="token operator">=</span> records<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>records<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			num<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span>
			records <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>records<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	sum <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> records <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> val
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function o(t,c){return e}var p=n(a,[["render",o],["__file","index.html.vue"]]);export{p as default};
