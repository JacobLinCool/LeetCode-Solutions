import{e as n}from"./app.3a9b86c6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="_44-wildcard-matching" tabindex="-1"><a class="header-anchor" href="#_44-wildcard-matching" aria-hidden="true">#</a> 44. Wildcard Matching</h1><br><p>Tags: <code>String</code>, <code>Dynamic Programming</code>, <code>Greedy</code>, <code>Recursion</code></p><p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>&#39;?&#39;</code> and <code>&#39;*&#39;</code> where:</p><ul><li><code>&#39;?&#39;</code> Matches any single character.</li><li><code>&#39;*&#39;</code> Matches any sequence of characters (including the empty sequence).</li></ul><p>The matching should cover the <strong>entire</strong> input string (not partial).</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;aa&quot;, p = &quot;a&quot;
Output: false
Explanation: &quot;a&quot; does not match the entire string &quot;aa&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;aa&quot;, p = &quot;*&quot;
Output: true
Explanation: &#39;*&#39; matches any sequence.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;cb&quot;, p = &quot;?a&quot;
Output: false
Explanation: &#39;?&#39; matches &#39;c&#39;, but the second letter is &#39;a&#39;, which does not match &#39;b&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length, p.length &lt;= 2000</code></li><li><code>s</code> contains only lowercase English letters.</li><li><code>p</code> contains only lowercase English letters, <code>&#39;?&#39;</code> or <code>&#39;*&#39;</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 44. Wildcard Matching (3/14/2022)</span>
<span class="token comment">// Runtime: 8 ms (77.86%) Memory: 2.87 MB (87.14%) </span>

<span class="token keyword">func</span> <span class="token function">isMatch</span><span class="token punctuation">(</span>target <span class="token builtin">string</span><span class="token punctuation">,</span> pattern <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	target_idx<span class="token punctuation">,</span> pattern_idx <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	target_idx_retry<span class="token punctuation">,</span> pattern_idx_retry <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>

	<span class="token keyword">for</span> pattern_idx <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span> <span class="token operator">||</span> target_idx <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> pattern_idx <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c <span class="token operator">:=</span> pattern<span class="token punctuation">[</span>pattern_idx<span class="token punctuation">]</span>
			<span class="token keyword">switch</span> c <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">:</span>
				<span class="token keyword">if</span> target_idx <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					pattern_idx<span class="token operator">++</span>
					target_idx<span class="token operator">++</span>
					<span class="token keyword">continue</span>
				<span class="token punctuation">}</span>
			<span class="token keyword">case</span> <span class="token char">&#39;*&#39;</span><span class="token punctuation">:</span>
				pattern_idx_retry <span class="token operator">=</span> pattern_idx
				target_idx_retry <span class="token operator">=</span> target_idx <span class="token operator">+</span> <span class="token number">1</span>
				pattern_idx<span class="token operator">++</span>
				<span class="token keyword">continue</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
				<span class="token keyword">if</span> target_idx <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">[</span>target_idx<span class="token punctuation">]</span> <span class="token operator">==</span> c <span class="token punctuation">{</span>
					pattern_idx<span class="token operator">++</span>
					target_idx<span class="token operator">++</span>
					<span class="token keyword">continue</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
        
		<span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;</span> target_idx_retry <span class="token operator">&amp;&amp;</span> target_idx_retry <span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pattern_idx <span class="token operator">=</span> pattern_idx_retry
			target_idx <span class="token operator">=</span> target_idx_retry
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,17);function e(p,o){return t}var l=s(a,[["render",e]]);export{l as default};
