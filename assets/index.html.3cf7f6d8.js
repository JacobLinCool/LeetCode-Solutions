import{e as n}from"./app.d846698d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_1690-stone-game-vii" tabindex="-1"><a class="header-anchor" href="#_1690-stone-game-vii" aria-hidden="true">#</a> 1690. Stone Game VII</h1><br><p>Tags: <code>Array</code>, <code>Math</code>, <code>Dynamic Programming</code>, <code>Game Theory</code></p><p>Alice and Bob take turns playing a game, with <strong>Alice starting first</strong>.</p><p>There are <code>n</code> stones arranged in a row. On each player&#39;s turn, they can <strong>remove</strong> either the leftmost stone or the rightmost stone from the row and receive points equal to the <strong>sum</strong> of the remaining stones&#39; values in the row. The winner is the one with the higher score when there are no stones left to remove.</p><p>Bob found that he will always lose this game (poor Bob, he always loses), so he decided to <strong>minimize the score&#39;s difference</strong>. Alice&#39;s goal is to <strong>maximize the difference</strong> in the score.</p><p>Given an array of integers <code>stones</code> where <code>stones[i]</code> represents the value of the <code>i^th</code> stone <strong>from the left</strong>, return <em>the <strong>difference</strong> in Alice and Bob&#39;s score if they both play <strong>optimally</strong>.</em></p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: stones = [5,3,1,4,2]
Output: 6
Explanation: 
- Alice removes 2 and gets 5 + 3 + 1 + 4 = 13 points. Alice = 13, Bob = 0, stones = [5,3,1,4].
- Bob removes 5 and gets 3 + 1 + 4 = 8 points. Alice = 13, Bob = 8, stones = [3,1,4].
- Alice removes 3 and gets 1 + 4 = 5 points. Alice = 18, Bob = 8, stones = [1,4].
- Bob removes 1 and gets 4 points. Alice = 18, Bob = 12, stones = [4].
- Alice removes 4 and gets 0 points. Alice = 18, Bob = 12, stones = [].
The score difference is 18 - 12 = 6.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: stones = [7,90,5,1,100,10,10,2]
Output: 122
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>n == stones.length</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= stones[i] &lt;= 1000</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 1690. Stone Game VII (12/27/2021)</span>
<span class="token comment">// Runtime: 52 ms (50.00%) Memory: 10.40 MB (0.00%) </span>

<span class="token keyword">int</span> <span class="token function">stoneGameVII</span><span class="token punctuation">(</span><span class="token keyword">int</span> stones<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> stonesSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// dp[a][b] \u4EE3\u8868\u77F3\u982D\u7B2C\u4E00\u500B\u4F4D\u7F6E\u662F a \u6700\u5F8C\u4E00\u500B\u4F4D\u7F6E\u662F b \u7684\u5DEE</span>
    <span class="token keyword">int</span> dp<span class="token punctuation">[</span>stonesSize<span class="token punctuation">]</span><span class="token punctuation">[</span>stonesSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>dp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> stonesSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// sum \u5C31\u662F\u5340\u6BB5\u7684\u5206\u6578\u7E3D\u548C</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> stones<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> stonesSize<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> stones<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token comment">// \u79FB\u9664\u7B2C\u4E00\u500B\u7684\u5DEE\uFF0C\u591A\u4E86\u4E00\u500B\u5143\u7D20\uFF0C\u6240\u4EE5\u628A\u4E0A\u6B21\u7684\u53CD\u8F49\u6263\u9664</span>
            <span class="token keyword">int</span> remove_first <span class="token operator">=</span> sum <span class="token operator">-</span> stones<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// \u79FB\u9664\u6700\u5F8C\u4E00\u500B\u7684\u5DEE\uFF0C\u591A\u4E86\u4E00\u500B\u5143\u7D20\uFF0C\u6240\u4EE5\u628A\u4E0A\u6B21\u7684\u53CD\u8F49\u6263\u9664</span>
            <span class="token keyword">int</span> remove_last <span class="token operator">=</span> sum <span class="token operator">-</span> stones<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token comment">// Alex \u5FC5\u5B9A\u6703\u9078\u8F03\u5927\u7684\u90A3\u500B</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> remove_first <span class="token operator">&gt;</span> remove_last <span class="token operator">?</span> remove_first <span class="token operator">:</span> remove_last<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u56DE\u50B3\u5168\u5340\u6BB5\u7684\u60C5\u5F62\u4E0B\u7684\u5DEE</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>stonesSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1690. Stone Game VII (6/11/2021)</span>
<span class="token comment">// Runtime: 592 ms (24.24%) Memory: 64.59 MB (78.79%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">stones</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">stoneGameVII</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">stones</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> stones<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// dp[a][b] \u4EE3\u8868\u77F3\u982D\u7B2C\u4E00\u500B\u4F4D\u7F6E\u662F a \u6700\u5F8C\u4E00\u500B\u4F4D\u7F6E\u662F b \u7684\u5DEE</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> stones<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> j<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            
            <span class="token keyword">let</span> remove_first <span class="token operator">=</span> sum <span class="token operator">-</span> stones<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> remove_last <span class="token operator">=</span> sum <span class="token operator">-</span> stones<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> remove_first <span class="token operator">&gt;</span> remove_last <span class="token operator">?</span> remove_first <span class="token operator">:</span> remove_last<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,18);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};