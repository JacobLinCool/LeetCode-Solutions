import{e as n}from"./app.7fc1eb42.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_1359-count-all-valid-pickup-and-delivery-options" tabindex="-1"><a class="header-anchor" href="#_1359-count-all-valid-pickup-and-delivery-options" aria-hidden="true">#</a> 1359. Count All Valid Pickup and Delivery Options</h1><br><p>Tags: <code>Math</code>, <code>Dynamic Programming</code>, <code>Combinatorics</code></p><p>Given <code>n</code> orders, each order consist in pickup and delivery services.</p><p>Count all valid pickup/delivery possible sequences such that delivery(i) is always after of\xA0pickup(i).</p><p>Since the answer\xA0may be too large,\xA0return it modulo\xA010^9 + 7.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 2
Output: 6
Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 3
Output: 90
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 0 ms (93.80%) Memory: 5.63 MB (0.00%) </span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp" aria-hidden="true">#</a> CPP</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 0 ms (94.87%) Memory: 5.84 MB (71.04%) </span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="cs" tabindex="-1"><a class="header-anchor" href="#cs" aria-hidden="true">#</a> CS</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 31 ms (57.57%) Memory: 25.25 MB (53.51%) </span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> JAVA</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 0 ms (94.96%) Memory: 41.28 MB (35.09%) </span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 59 ms (87.92%) Memory: 42.36 MB (46.71%) </span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="py" tabindex="-1"><a class="header-anchor" href="#py" aria-hidden="true">#</a> PY</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment"># Runtime: 24 ms (56.66%) Memory: 13.43 MB (52.29%) </span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="py3" tabindex="-1"><a class="header-anchor" href="#py3" aria-hidden="true">#</a> PY3</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment"># Runtime: 42 ms (61.98%) Memory: 13.78 MB (89.36%) </span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">countOrders</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        ans <span class="token operator">=</span> <span class="token number">1</span>
        mod <span class="token operator">=</span> <span class="token number">1000000007</span>
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            ans <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span>
            ans <span class="token operator">%=</span> mod
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            ans <span class="token operator">*=</span> i
            ans <span class="token operator">%=</span> mod
        
        <span class="token keyword">return</span> ans

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="rb" tabindex="-1"><a class="header-anchor" href="#rb" aria-hidden="true">#</a> RB</h3><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code><span class="token comment"># 1359. Count All Valid Pickup and Delivery Options (3/7/2022)</span>
<span class="token comment"># Runtime: 48 ms (94.87%) Memory: 210.95 MB (74.36%) </span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="rs" tabindex="-1"><a class="header-anchor" href="#rs" aria-hidden="true">#</a> RS</h3><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 1 ms (56.47%) Memory: 2.06 MB (57.65%) </span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)</span>
<span class="token comment">// Runtime: 60 ms (91.84%) Memory: 44.80 MB (38.78%) </span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,35);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
