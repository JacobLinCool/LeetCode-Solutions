import{_ as p,r as o,o as c,c as r,a as n,b as t,F as l,e as a,d as s}from"./app.4ac92f30.js";const u={},i=a('<h1 id="_344-reverse-string" tabindex="-1"><a class="header-anchor" href="#_344-reverse-string" aria-hidden="true">#</a> 344. Reverse String</h1><br><p>Tags: <code>Two Pointers</code>, <code>String</code>, <code>Recursion</code></p><p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p>',4),k=s("You must do this by modifying the input array "),d={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},m=s("in-place"),b=s(" with "),h=n("code",null,"O(1)",-1),g=s(" extra memory."),_=a(`<p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = [&quot;h&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;]
Output: [&quot;o&quot;,&quot;l&quot;,&quot;l&quot;,&quot;e&quot;,&quot;h&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = [&quot;H&quot;,&quot;a&quot;,&quot;n&quot;,&quot;n&quot;,&quot;a&quot;,&quot;h&quot;]
Output: [&quot;h&quot;,&quot;a&quot;,&quot;n&quot;,&quot;n&quot;,&quot;a&quot;,&quot;H&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p>`,5),q=n("li",null,[n("code",null,"1 <= s.length <= 10^5")],-1),v=n("code",null,"s[i]",-1),f=s(" is a "),y={href:"https://en.wikipedia.org/wiki/ASCII#Printable_characters",target:"_blank",rel:"noopener noreferrer"},x=s("printable ascii character"),w=s("."),S=a(`<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 344. Reverse String (4/1/2022)</span>
<span class="token comment">// Runtime: 48 ms (87.11%) Memory: 12.32 MB (39.69%) </span>

<span class="token keyword">void</span> <span class="token function">reverseString</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> half <span class="token operator">=</span> size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> last <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> half<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> tmp <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>last <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        s<span class="token punctuation">[</span>last <span class="token operator">-</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 344. Reverse String (10/1/2021)</span>
<span class="token comment">// Runtime: 127 ms (46.94%) Memory: 46.52 MB (94.95%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify s in-place instead.
 */</span>
<span class="token keyword">function</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>s<span class="token punctuation">[</span>s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="rs" tabindex="-1"><a class="header-anchor" href="#rs" aria-hidden="true">#</a> RS</h3><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// 344. Reverse String (4/1/2022)</span>
<span class="token comment">// Runtime: 17 ms (64.26%) Memory: 5.39 MB (94.47%) </span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">reverse_string</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,7);function R(I,B){const e=o("ExternalLinkIcon");return c(),r(l,null,[i,n("p",null,[k,n("a",d,[m,t(e)]),b,h,g]),_,n("ul",null,[q,n("li",null,[v,f,n("a",y,[x,t(e)]),w])]),S],64)}var j=p(u,[["render",R],["__file","index.html.vue"]]);export{j as default};
