import{e as n}from"./app.2cc02f10.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_4-median-of-two-sorted-arrays" tabindex="-1"><a class="header-anchor" href="#_4-median-of-two-sorted-arrays" aria-hidden="true">#</a> 4. Median of Two Sorted Arrays</h1><br><p>Tags: <code>Array</code>, <code>Binary Search</code>, <code>Divide and Conquer</code></p><p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p><p>The overall run time complexity should be <code>O(log (m+n))</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>nums1.length == m</code></li><li><code>nums2.length == n</code></li><li><code>0 &lt;= m &lt;= 1000</code></li><li><code>0 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= m + n &lt;= 2000</code></li><li><code>-10^6 &lt;= nums1[i], nums2[i] &lt;= 10^6</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 4. Median of Two Sorted Arrays (5/29/2021)</span>
<span class="token comment">// Runtime: 16 ms (64.38%) Memory: 5.38 MB (56.95%) </span>

<span class="token keyword">func</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	m<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span>
	p1<span class="token punctuation">,</span> p2 <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> p1 <span class="token operator">&gt;=</span> m <span class="token punctuation">{</span>
				p2<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p2 <span class="token operator">&gt;=</span> n <span class="token punctuation">{</span>
				p1<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				p2<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				p1<span class="token operator">++</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> p1 <span class="token operator">&gt;=</span> m <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">float64</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p2 <span class="token operator">&gt;=</span> n <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">float64</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">float64</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">float64</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> p1 <span class="token operator">&gt;=</span> m <span class="token punctuation">{</span>
				p2<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p2 <span class="token operator">&gt;=</span> n <span class="token punctuation">{</span>
				p1<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				p2<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				p1<span class="token operator">++</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		sum <span class="token operator">:=</span> <span class="token number">0</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> p1 <span class="token operator">&gt;=</span> m <span class="token punctuation">{</span>
				sum <span class="token operator">+=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
                p2<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p2 <span class="token operator">&gt;=</span> n <span class="token punctuation">{</span>
				sum <span class="token operator">+=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
                p1<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				sum <span class="token operator">+=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
                p2<span class="token operator">++</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				sum <span class="token operator">+=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
                p1<span class="token operator">++</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">float64</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 4. Median of Two Sorted Arrays (5/29/2021)</span>
<span class="token comment">// Runtime: 128 ms (71.30%) Memory: 43.58 MB (93.34%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> n <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> p2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> p2<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> p1<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span> p2<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> p1<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">?</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">:</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> p2<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> p1<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span> p2<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> p1<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> sum <span class="token operator">+=</span> nums2<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> sum <span class="token operator">+=</span> nums1<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span> sum <span class="token operator">+=</span> nums2<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> sum <span class="token operator">+=</span> nums1<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,16);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
