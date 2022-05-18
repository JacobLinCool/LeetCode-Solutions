import{_ as n,e as s}from"./app.54b71ebc.js";const a={},t=s(`<h1 id="_1695-maximum-erasure-value" tabindex="-1"><a class="header-anchor" href="#_1695-maximum-erasure-value" aria-hidden="true">#</a> 1695. Maximum Erasure Value</h1><br><p>Tags: <code>Array</code>, <code>Hash Table</code>, <code>Sliding Window</code></p><p>You are given an array of positive integers <code>nums</code> and want to erase a subarray containing\xA0<strong>unique elements</strong>. The <strong>score</strong> you get by erasing the subarray is equal to the <strong>sum</strong> of its elements.</p><p>Return <em>the <strong>maximum score</strong> you can get by erasing <strong>exactly one</strong> subarray.</em></p><p>An array <code>b</code> is called to be a subarray of <code>a</code> if it forms a contiguous subsequence of <code>a</code>, that is, if it is equal to <code>a[l],a[l+1],...,a[r]</code> for some <code>(l,r)</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 1695. Maximum Erasure Value (5/29/2021)</span>
<span class="token comment">// Runtime: 192 ms (69.56%) Memory: 8.64 MB (82.61%) </span>

<span class="token keyword">func</span> <span class="token function">maximumUniqueSubarray</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    max<span class="token punctuation">,</span> sum <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	table <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

	front<span class="token punctuation">,</span> back <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	<span class="token keyword">for</span> front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> front <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> front<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span>
		<span class="token keyword">if</span> pos<span class="token punctuation">,</span> exists <span class="token operator">:=</span> table<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> exists <span class="token punctuation">{</span>
			<span class="token keyword">for</span> back <span class="token operator">&lt;=</span> pos <span class="token punctuation">{</span>
				<span class="token function">delete</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>back<span class="token punctuation">]</span><span class="token punctuation">)</span>
                sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>back<span class="token punctuation">]</span>
				back<span class="token operator">++</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> sum <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
			max <span class="token operator">=</span> sum
		<span class="token punctuation">}</span>
		table<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> front
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> max
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1695. Maximum Erasure Value (5/29/2021)</span>
<span class="token comment">// Runtime: 148 ms (88.46%) Memory: 53.86 MB (89.75%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumUniqueSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u66AB\u5B58\u6700\u5927\u7E3D\u548C</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// hash table</span>
    <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5B50\u9663\u5217\u7576\u524D\u7E3D\u548C</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">// \u5B50\u9663\u5217\u982D\u5C3E\u4F4D\u7F6E</span>
    <span class="token keyword">let</span> front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> back <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> front <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> front<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>table<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5982\u679C\u6709\u7D00\u9304\uFF0C\u5C3E\u7AEF\u524D\u63A8\u81F3\u8A72\u7D00\u9304\u4F4D\u7F6E\u7684\u4E0B\u500B\u4F4D\u7F6E</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>back <span class="token operator">&lt;=</span> table<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                table<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>back<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
                sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>back<span class="token punctuation">]</span><span class="token punctuation">;</span>
                back<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8A66\u5716\u66F4\u65B0\u6700\u5927\u7E3D\u548C</span>
            max <span class="token operator">=</span> sum <span class="token operator">&gt;</span> max <span class="token operator">?</span> sum <span class="token operator">:</span> max<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        table<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> front<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function e(p,o){return t}var i=n(a,[["render",e],["__file","index.html.vue"]]);export{i as default};
