import{_ as n,e as s}from"./app.3029a842.js";const a={},e=s(`<h1 id="_680-valid-palindrome-ii" tabindex="-1"><a class="header-anchor" href="#_680-valid-palindrome-ii" aria-hidden="true">#</a> 680. Valid Palindrome II</h1><br><p>Tags: <code>Two Pointers</code>, <code>String</code>, <code>Greedy</code></p><p>Given a string <code>s</code>, return <code>true</code> <em>if the</em> <code>s</code> <em>can be palindrome after deleting <strong>at most one</strong> character from it</em>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;aba&quot;
Output: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;abca&quot;
Output: true
Explanation: You could delete the character &#39;c&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;abc&quot;
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 680. Valid Palindrome II (4/2/2022)</span>
<span class="token comment">// Runtime: 12 ms (91.14%) Memory: 9.10 MB (39.63%) </span>

bool <span class="token function">is_palindrome</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> half <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> half<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> false<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">validPalindrome</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bool used <span class="token operator">=</span> false<span class="token punctuation">;</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> false<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span>s <span class="token operator">+</span> left<span class="token punctuation">,</span> right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span>s <span class="token operator">+</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">-</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> false<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            used <span class="token operator">=</span> true<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function t(p,o){return e}var i=n(a,[["render",t],["__file","index.html.vue"]]);export{i as default};
