import{r as t,o,c as p,a as n,b as e,F as i,d as s,e as r}from"./app.d846698d.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=n("h1",{id:"_191-number-of-1-bits",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_191-number-of-1-bits","aria-hidden":"true"},"#"),s(" 191. Number of 1 Bits")],-1),d=n("br",null,null,-1),m=n("p",null,[s("Tags: "),n("code",null,"Bit Manipulation")],-1),h=s("Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the "),b={href:"http://en.wikipedia.org/wiki/Hamming_weight",target:"_blank",rel:"noopener noreferrer"},g=s("Hamming weight"),k=s(")."),_=n("p",null,[n("strong",null,"Note:")],-1),f=n("li",null,"Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.",-1),x=s("In Java, the compiler represents the signed integers using "),v={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},w=s("2's complement notation"),y=s(". Therefore, in "),E=n("strong",null,"Example 3",-1),I=s(", the input represents the signed integer. "),N=n("code",null,"-3",-1),T=s("."),B=r(`<p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three &#39;1&#39; bits.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one &#39;1&#39; bit.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one &#39;1&#39; bits.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code>.</li></ul><p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 191. Number of 1 Bits (10/10/2021)</span>
<span class="token comment">// Runtime: 80 ms (66.39%) Memory: 40.46 MB (76.85%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span> - a positive integer
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">===</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,12);function j(V,C){const a=t("ExternalLinkIcon");return o(),p(i,null,[u,d,m,n("p",null,[h,n("a",b,[g,e(a)]),k]),_,n("ul",null,[f,n("li",null,[x,n("a",v,[w,e(a)]),y,E,I,N,T])]),B],64)}var M=l(c,[["render",j]]);export{M as default};