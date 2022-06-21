import{_ as t,r as p,o,c as r,a as n,b as e,F as l,d as s,e as c}from"./app.9d5d6949.js";const i={},u=n("h1",{id:"_191-number-of-1-bits",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_191-number-of-1-bits","aria-hidden":"true"},"#"),s(" 191. Number of 1 Bits")],-1),m=n("h2",{id:"problem",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#problem","aria-hidden":"true"},"#"),s(" Problem")],-1),b=n("br",null,null,-1),d=n("p",null,[s("Tags: "),n("code",null,"Bit Manipulation")],-1),k=s("Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the "),h={href:"http://en.wikipedia.org/wiki/Hamming_weight",target:"_blank",rel:"noopener noreferrer"},g=s("Hamming weight"),_=s(")."),f=n("p",null,[n("strong",null,"Note:")],-1),x=n("li",null,"Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.",-1),v=s("In Java, the compiler represents the signed integers using "),y={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},w=s("2's complement notation"),B=s(". Therefore, in "),N=n("strong",null,"Example 3",-1),E=s(", the input represents the signed integer. "),I=n("code",null,"-3",-1),M=s("."),T=c(`<p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three &#39;1&#39; bits.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one &#39;1&#39; bit.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one &#39;1&#39; bits.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code>.</li></ul><p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 191. Number of 1 Bits (5/8/54369)</span>
<span class="token comment">// Runtime: 3 ms (40.72%) Memory: 5.43 MB (38.83%) </span>

<span class="token keyword">int</span> <span class="token function">hammingWeight</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">=</span> n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 191. Number of 1 Bits (5/9/54369)</span>
<span class="token comment">// Runtime: 0 ms (90.80%) Memory: 1.84 MB (43.77%) </span>

<span class="token keyword">func</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>num <span class="token builtin">uint32</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token number">0</span>
    
    <span class="token keyword">for</span> num <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        num <span class="token operator">=</span> num <span class="token operator">&amp;</span> <span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 191. Number of 1 Bits (3/10/53745)</span>
<span class="token comment">// Runtime: 80 ms (57.00%) Memory: 40.46 MB (94.65%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span> - a positive integer
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">===</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 191. Number of 1 Bits (5/20/54369)</span>
<span class="token comment">// Runtime: 109 ms (33.99%) Memory: 44.26 MB (87.93%) </span>

<span class="token keyword">function</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,18);function j(W,C){const a=p("ExternalLinkIcon");return o(),r(l,null,[u,m,b,d,n("p",null,[k,n("a",h,[g,e(a)]),_]),f,n("ul",null,[x,n("li",null,[v,n("a",y,[w,e(a)]),B,N,E,I,M])]),T],64)}var R=t(i,[["render",j],["__file","index.html.vue"]]);export{R as default};
