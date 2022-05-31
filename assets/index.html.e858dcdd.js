import{_ as n,e as s}from"./app.f5d1dbc4.js";const a={},t=s(`<h1 id="_44-wildcard-matching" tabindex="-1"><a class="header-anchor" href="#_44-wildcard-matching" aria-hidden="true">#</a> 44. Wildcard Matching</h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><br><p>Tags: <code>String</code>, <code>Dynamic Programming</code>, <code>Greedy</code>, <code>Recursion</code></p><p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>&#39;?&#39;</code> and <code>&#39;*&#39;</code> where:</p><ul><li><code>&#39;?&#39;</code> Matches any single character.</li><li><code>&#39;*&#39;</code> Matches any sequence of characters (including the empty sequence).</li></ul><p>The matching should cover the <strong>entire</strong> input string (not partial).</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;aa&quot;, p = &quot;a&quot;
Output: false
Explanation: &quot;a&quot; does not match the entire string &quot;aa&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;aa&quot;, p = &quot;*&quot;
Output: true
Explanation: &#39;*&#39; matches any sequence.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;cb&quot;, p = &quot;?a&quot;
Output: false
Explanation: &#39;?&#39; matches &#39;c&#39;, but the second letter is &#39;a&#39;, which does not match &#39;b&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length, p.length &lt;= 2000</code></li><li><code>s</code> contains only lowercase English letters.</li><li><code>p</code> contains only lowercase English letters, <code>&#39;?&#39;</code> or <code>&#39;*&#39;</code>.</li></ul><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><h2 id="solution-1" tabindex="-1"><a class="header-anchor" href="#solution-1" aria-hidden="true">#</a> Solution</h2><p>The most difficult part of this problem is <code>&#39;*&#39;</code>, when we meet it, we don&#39;t know how many chars we should match.</p><p>So, we store a position to &quot;come back&quot; after the current match failed.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 44. Wildcard Matching (12/10/54169)</span>
<span class="token comment">// Runtime: 8 ms (67.76%) Memory: 5.79 MB (76.50%) </span>

bool <span class="token function">isMatch</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> pat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> str_len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> pat_len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>pat<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> str_idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> pat_idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> str_idx_retry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> pat_idx_retry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>str_idx <span class="token operator">&lt;</span> str_len <span class="token operator">||</span> pat_idx <span class="token operator">&lt;</span> pat_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// printf(&quot;---\\nstr: %s\\npat: %s\\n&quot;, str + str_idx, pat + pat_idx);</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pat_idx <span class="token operator">&lt;</span> pat_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pat<span class="token punctuation">[</span>pat_idx<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pat_idx_retry <span class="token operator">=</span> pat_idx<span class="token punctuation">;</span>
                str_idx_retry <span class="token operator">=</span> str_idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                pat_idx<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pat<span class="token punctuation">[</span>pat_idx<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span> <span class="token operator">&amp;&amp;</span> str_idx <span class="token operator">&lt;</span> str_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                str_idx<span class="token operator">++</span><span class="token punctuation">,</span> pat_idx<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>str_idx<span class="token punctuation">]</span> <span class="token operator">==</span> pat<span class="token punctuation">[</span>pat_idx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                str_idx<span class="token operator">++</span><span class="token punctuation">,</span> pat_idx<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>str_idx_retry <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> str_idx_retry <span class="token operator">&lt;=</span> str_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            str_idx <span class="token operator">=</span> str_idx_retry<span class="token punctuation">;</span>
            pat_idx <span class="token operator">=</span> pat_idx_retry<span class="token punctuation">;</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 44. Wildcard Matching (10/24/54169)</span>
<span class="token comment">// Runtime: 8 ms (79.38%) Memory: 2.87 MB (89.38%) </span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,24);function p(e,o){return t}var r=n(a,[["render",p],["__file","index.html.vue"]]);export{r as default};
