import{r as t,o as p,c as o,a as n,b as e,F as c,d as s,e as l}from"./app.d846698d.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"_28-implement-strstr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_28-implement-strstr","aria-hidden":"true"},"#"),s(" 28. Implement strStr()")],-1),d=n("br",null,null,-1),k=n("p",null,[s("Tags: "),n("code",null,"Two Pointers"),s(", "),n("code",null,"String"),s(", "),n("code",null,"String Matching")],-1),m=s("Implement "),h={href:"http://www.cplusplus.com/reference/cstring/strstr/",target:"_blank",rel:"noopener noreferrer"},b=s("strStr()"),_=s("."),g=n("p",null,[s("Return the index of the first occurrence of needle in haystack, or "),n("code",null,"-1"),s(" if "),n("code",null,"needle"),s(" is not part of "),n("code",null,"haystack"),s(".")],-1),f=n("p",null,[n("strong",null,"Clarification:")],-1),x=n("p",null,[s("What should we return when "),n("code",null,"needle"),s(" is an empty string? This is a great question to ask during an interview.")],-1),y=s("For the purpose of this problem, we will return 0 when "),w=n("code",null,"needle",-1),v=s(" is an empty string. This is consistent to C's\xA0"),q={href:"http://www.cplusplus.com/reference/cstring/strstr/",target:"_blank",rel:"noopener noreferrer"},S=s("strstr()"),I=s(" and Java's\xA0"),E={href:"https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)",target:"_blank",rel:"noopener noreferrer"},C=s("indexOf()"),O=s("."),T=l(`<p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: haystack = &quot;hello&quot;, needle = &quot;ll&quot;
Output: 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: haystack = &quot;aaaaa&quot;, needle = &quot;bba&quot;
Output: -1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: haystack = &quot;&quot;, needle = &quot;&quot;
Output: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= haystack.length, needle.length &lt;= 5 * 10^4</code></li><li><code>haystack</code> and\xA0<code>needle</code> consist of only lower-case English characters.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 28. Implement strStr() (12/27/2021)</span>
<span class="token comment">// Runtime: 12 ms (75.13%) Memory: 6.04 MB (74.19%) </span>

<span class="token keyword">int</span> <span class="token function">strStr</span><span class="token punctuation">(</span><span class="token keyword">char</span> haystack<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">char</span> needle<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C needle \u70BA\u7A7A\u5B57\u4E32\uFF0C\u76F4\u63A5\u56DE\u50B3 0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>needle<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8A08\u7B97\u5169\u5B57\u4E32\u9577\u5EA6</span>
    <span class="token keyword">int</span> haystack_length <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>haystack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> needle_length <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>needle<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// haystack \u5F9E\u982D\u958B\u59CB\u6BD4\u5C0D</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> haystack_length <span class="token operator">-</span> needle_length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7528 memcmp \u6BD4\u8F03</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">memcmp</span><span class="token punctuation">(</span>haystack <span class="token operator">+</span> i<span class="token punctuation">,</span> needle<span class="token punctuation">,</span> needle_length<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,11);function B(N,V){const a=t("ExternalLinkIcon");return p(),o(c,null,[u,d,k,n("p",null,[m,n("a",h,[b,e(a)]),_]),g,f,x,n("p",null,[y,w,v,n("a",q,[S,e(a)]),I,n("a",E,[C,e(a)]),O]),T],64)}var M=r(i,[["render",B]]);export{M as default};