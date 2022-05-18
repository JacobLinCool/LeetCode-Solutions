import{_ as t,r as p,o,c,a as n,b as l,F as i,e as s,d as a}from"./app.54b71ebc.js";const u={},r=s(`<h1 id="_316-remove-duplicate-letters" tabindex="-1"><a class="header-anchor" href="#_316-remove-duplicate-letters" aria-hidden="true">#</a> 316. Remove Duplicate Letters</h1><br><p>Tags: <code>String</code>, <code>Stack</code>, <code>Greedy</code>, <code>Monotonic Stack</code></p><p>Given a string <code>s</code>, remove duplicate letters so that every letter appears once and only once. You must make sure your result is <strong>the smallest in lexicographical order</strong> among all possible results.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;bcabc&quot;
Output: &quot;abc&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;cbacdcbc&quot;
Output: &quot;acdb&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of lowercase English letters.</li></ul>`,10),k=n("strong",null,"Note:",-1),d=a(" This question is the same as 1081: "),v={href:"https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/",target:"_blank",rel:"noopener noreferrer"},m=a("https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/"),b=s(`<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 316. Remove Duplicate Letters (3/18/2022)</span>
<span class="token comment">// Runtime: 0 ms (94.97%) Memory: 5.68 MB (88.68%) </span>

<span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">removeDuplicateLetters</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> last_pos<span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        last_pos<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    bool used<span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> false <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> stk<span class="token punctuation">[</span><span class="token number">10001</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> stk_size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> code <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">while</span> <span class="token punctuation">(</span>stk_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> prev <span class="token operator">=</span> stk<span class="token punctuation">[</span>stk_size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">&lt;</span> code <span class="token operator">||</span> i <span class="token operator">&gt;=</span> last_pos<span class="token punctuation">[</span>prev<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stk_size<span class="token operator">--</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>prev<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        stk<span class="token punctuation">[</span>stk_size<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> code<span class="token punctuation">;</span>
        used<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">char</span><span class="token operator">*</span> ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>stk_size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> stk_size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> stk<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(_,g){const e=p("ExternalLinkIcon");return o(),c(i,null,[r,n("p",null,[k,d,n("a",v,[m,l(e)])]),b],64)}var f=t(u,[["render",h],["__file","index.html.vue"]]);export{f as default};
