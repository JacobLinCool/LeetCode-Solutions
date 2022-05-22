import{_ as n,e as s}from"./app.f5e35c51.js";const a={},e=s(`<h1 id="_1359-count-all-valid-pickup-and-delivery-options" tabindex="-1"><a class="header-anchor" href="#_1359-count-all-valid-pickup-and-delivery-options" aria-hidden="true">#</a> 1359. Count All Valid Pickup and Delivery Options</h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><br><p>Tags: <code>Math</code>, <code>Dynamic Programming</code>, <code>Combinatorics</code></p><p>Given <code>n</code> orders, each order consist in pickup and delivery services.</p><p>Count all valid pickup/delivery possible sequences such that delivery(i) is always after of\xA0pickup(i).</p><p>Since the answer\xA0may be too large,\xA0return it modulo\xA010^9 + 7.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 2
Output: 6
Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 3
Output: 90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (1/26/54148)</span>
<span class="token comment">// Runtime: 0 ms (86.67%) Memory: 5.63 MB (6.67%) </span>

<span class="token keyword">int</span> <span class="token function">countOrders</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">int64_t</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> fact <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">int64_t</span> mod <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fact <span class="token operator">*=</span> i<span class="token punctuation">;</span>
        fact <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>ans <span class="token operator">*</span> fact<span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp" aria-hidden="true">#</a> CPP</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (2/8/54148)</span>
<span class="token comment">// Runtime: 0 ms (94.84%) Memory: 5.84 MB (73.87%) </span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">countOrders</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int64_t</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int64_t</span> mod <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> i<span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cs" tabindex="-1"><a class="header-anchor" href="#cs" aria-hidden="true">#</a> CS</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (2/11/54148)</span>
<span class="token comment">// Runtime: 31 ms (81.08%) Memory: 25.25 MB (67.57%) </span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">CountOrders</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">long</span></span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">long</span></span> mod <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> i<span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> JAVA</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (2/9/54148)</span>
<span class="token comment">// Runtime: 0 ms (94.99%) Memory: 41.28 MB (35.76%) </span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countOrders</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> mod <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> i<span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (1/31/54148)</span>
<span class="token comment">// Runtime: 59 ms (84.00%) Memory: 42.36 MB (48.00%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">countOrders</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">*=</span> i<span class="token punctuation">;</span>
        ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="py" tabindex="-1"><a class="header-anchor" href="#py" aria-hidden="true">#</a> PY</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 1359. Count All Valid Pickup and Delivery Options (2/10/54148)</span>
<span class="token comment"># Runtime: 24 ms (50.00%) Memory: 13.43 MB (55.88%) </span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">countOrders</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type n: int
        :rtype: int
        &quot;&quot;&quot;</span>
        ans <span class="token operator">=</span> <span class="token number">1</span>
        mod <span class="token operator">=</span> <span class="token number">1000000007</span>
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span>
            ans <span class="token operator">%=</span> mod
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            ans <span class="token operator">*=</span> i
            ans <span class="token operator">%=</span> mod
        
        <span class="token keyword">return</span> ans

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="py3" tabindex="-1"><a class="header-anchor" href="#py3" aria-hidden="true">#</a> PY3</h3><div class="language-py3 ext-py3 line-numbers-mode"><pre class="language-py3"><code># 1359. Count All Valid Pickup and Delivery Options (2/10/54148)
# Runtime: 42 ms (58.80%) Memory: 13.78 MB (91.90%) 

class Solution:
    def countOrders(self, n: int) -&gt; int:
        ans = 1
        mod = 1000000007
        
        for i in range(2, n+1):
            ans *= 2 * i - 1
            ans %= mod
        
        for i in range(2, n+1):
            ans *= i
            ans %= mod
        
        return ans

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rb" tabindex="-1"><a class="header-anchor" href="#rb" aria-hidden="true">#</a> RB</h3><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code><span class="token comment"># 1359. Count All Valid Pickup and Delivery Options (2/17/54148)</span>
<span class="token comment"># Runtime: 48 ms (0.00%) Memory: 210.95 MB (0.00%) </span>

<span class="token comment"># @param {Integer} n</span>
<span class="token comment"># @return {Integer}</span>
<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">count_orders</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    ans <span class="token operator">=</span> <span class="token number">1</span>
    mod <span class="token operator">=</span> <span class="token number">1000000007</span>
    
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">2.</span><span class="token punctuation">.</span>n
        ans <span class="token operator">*=</span> i
        ans <span class="token operator">%=</span> mod
    <span class="token keyword">end</span>
    
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">2.</span><span class="token punctuation">.</span>n
        ans <span class="token operator">*=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
        ans <span class="token operator">%=</span> mod
    <span class="token keyword">end</span>
    
    <span class="token keyword">return</span> ans
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rs" tabindex="-1"><a class="header-anchor" href="#rs" aria-hidden="true">#</a> RS</h3><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (2/7/54148)</span>
<span class="token comment">// Runtime: 1 ms (0.00%) Memory: 2.06 MB (0.00%) </span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">count_orders</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> ans<span class="token punctuation">:</span> <span class="token keyword">i64</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> modulo<span class="token punctuation">:</span> <span class="token keyword">i64</span> <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
    
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1i64</span><span class="token punctuation">..=</span><span class="token punctuation">(</span>n <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> modulo<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1i64</span><span class="token punctuation">..=</span><span class="token punctuation">(</span>n <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">*=</span> i<span class="token punctuation">;</span>
            ans <span class="token operator">%=</span> modulo<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ans <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (1/31/54148)</span>
<span class="token comment">// Runtime: 60 ms (0.00%) Memory: 44.80 MB (0.00%) </span>

<span class="token keyword">function</span> <span class="token function">countOrders</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">*=</span> i<span class="token punctuation">;</span>
        ans <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function p(t,o){return e}var l=n(a,[["render",p],["__file","index.html.vue"]]);export{l as default};
