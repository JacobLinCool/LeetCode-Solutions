import{e as n}from"./app.c3942609.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="_383-ransom-note" tabindex="-1"><a class="header-anchor" href="#_383-ransom-note" aria-hidden="true">#</a> 383. Ransom Note</h1><br><p>Tags: <code>Hash Table</code>, <code>String</code>, <code>Counting</code></p><p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code> <em>if</em> <code>ransomNote</code> <em>can be constructed from</em> <code>magazine</code> <em>and</em> <code>false</code> <em>otherwise</em>.</p><p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: ransomNote = &quot;a&quot;, magazine = &quot;b&quot;
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: ransomNote = &quot;aa&quot;, magazine = &quot;ab&quot;
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: ransomNote = &quot;aa&quot;, magazine = &quot;aab&quot;
Output: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10^5</code></li><li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 383. Ransom Note (10/3/2021)</span>
<span class="token comment">// Runtime: 92 ms (80.22%) Memory: 41.11 MB (90.69%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">ransomNote</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">magazine</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">canConstruct</span><span class="token punctuation">(</span><span class="token parameter">ransomNote<span class="token punctuation">,</span> magazine</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> magazine<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> map<span class="token punctuation">[</span>magazine<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>magazine<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ransomNote<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">[</span>ransomNote<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        map<span class="token punctuation">[</span>ransomNote<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,16);function t(p,o){return e}var r=a(s,[["render",t]]);export{r as default};
