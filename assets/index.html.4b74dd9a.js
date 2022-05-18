import{_ as n,e as s}from"./app.54b71ebc.js";const a={},e=s(`<h1 id="_8-string-to-integer-atoi" tabindex="-1"><a class="header-anchor" href="#_8-string-to-integer-atoi" aria-hidden="true">#</a> 8. String to Integer (atoi)</h1><br><p>Tags: <code>String</code></p><p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++&#39;s <code>atoi</code> function).</p><p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p><ol><li>Read in and ignore any leading whitespace.</li><li>Check if the next character (if not already at the end of the string) is <code>&#39;-&#39;</code> or <code>&#39;+&#39;</code>. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</li><li>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</li><li>Convert these digits into an integer (i.e. <code>&quot;123&quot; -&gt; 123</code>, <code>&quot;0032&quot; -&gt; 32</code>). If no digits were read, then the integer is <code>0</code>. Change the sign as necessary (from step 2).</li><li>If the integer is out of the 32-bit signed integer range <code>[-2^31, 2^31 - 1]</code>, then clamp the integer so that it remains in the range. Specifically, integers less than <code>-2^31</code> should be clamped to <code>-2^31</code>, and integers greater than <code>2^31 - 1</code> should be clamped to <code>2^31 - 1</code>.</li><li>Return the integer as the final result.</li></ol><p><strong>Note:</strong></p><ul><li>Only the space character <code>&#39; &#39;</code> is considered a whitespace character.</li><li><strong>Do not ignore</strong> any characters other than the leading whitespace or the rest of the string after the digits.</li></ul><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;42&quot;
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: &quot;42&quot; (no characters read because there is no leading whitespace)
         ^
Step 2: &quot;42&quot; (no characters read because there is neither a &#39;-&#39; nor &#39;+&#39;)
         ^
Step 3: &quot;42&quot; (&quot;42&quot; is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;   -42&quot;
Output: -42
Explanation:
Step 1: &quot;   -42&quot; (leading whitespace is read and ignored)
            ^
Step 2: &quot;   -42&quot; (&#39;-&#39; is read, so the result should be negative)
             ^
Step 3: &quot;   -42&quot; (&quot;42&quot; is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;4193 with words&quot;
Output: 4193
Explanation:
Step 1: &quot;4193 with words&quot; (no characters read because there is no leading whitespace)
         ^
Step 2: &quot;4193 with words&quot; (no characters read because there is neither a &#39;-&#39; nor &#39;+&#39;)
         ^
Step 3: &quot;4193 with words&quot; (&quot;4193&quot; is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 200</code></li><li><code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>&#39; &#39;</code>, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, and <code>&#39;.&#39;</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 8. String to Integer (atoi) (3/21/2022)</span>
<span class="token comment">// Runtime: 4 ms (48.28%) Memory: 5.58 MB (77.09%) </span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">base</span> <span class="token expression"><span class="token number">10LL</span></span></span>

<span class="token keyword">int</span> <span class="token function">myAtoi</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span><span class="token operator">*</span> head <span class="token operator">=</span> str<span class="token punctuation">;</span>
    bool overflow <span class="token operator">=</span> false<span class="token punctuation">,</span> no_digits <span class="token operator">=</span> true<span class="token punctuation">;</span>
    <span class="token class-name">int64_t</span> val <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">int32_t</span> sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">isspace</span><span class="token punctuation">(</span>head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sign <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        head<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">int64_t</span> limit <span class="token operator">=</span> <span class="token punctuation">(</span>sign <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> INT_MAX <span class="token operator">:</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token class-name">int64_t</span><span class="token punctuation">)</span>INT_MIN<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">int64_t</span> tmp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isdigit</span><span class="token punctuation">(</span>head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tmp <span class="token operator">=</span> head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isalpha</span><span class="token punctuation">(</span>head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tmp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">isupper</span><span class="token punctuation">(</span>head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;A&#39;</span> <span class="token operator">:</span> head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp <span class="token operator">&gt;=</span> base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        no_digits <span class="token operator">=</span> false<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> <span class="token punctuation">(</span>limit <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token class-name">int64_t</span><span class="token punctuation">)</span>tmp<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token class-name">int64_t</span><span class="token punctuation">)</span>base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            overflow <span class="token operator">=</span> true<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> val <span class="token operator">*</span> base <span class="token operator">+</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        head<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> sign <span class="token operator">*</span> <span class="token punctuation">(</span>overflow <span class="token operator">?</span> limit <span class="token operator">:</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function t(i,p){return e}var c=n(a,[["render",t],["__file","index.html.vue"]]);export{c as default};
