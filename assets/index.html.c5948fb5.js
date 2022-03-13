import{r as t,o,c as p,a as n,b as c,F as l,e as a,d as s}from"./app.c3942609.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a(`<h1 id="_378-kth-smallest-element-in-a-sorted-matrix" tabindex="-1"><a class="header-anchor" href="#_378-kth-smallest-element-in-a-sorted-matrix" aria-hidden="true">#</a> 378. Kth Smallest Element in a Sorted Matrix</h1><br><p>Tags: <code>Array</code>, <code>Binary Search</code>, <code>Sorting</code>, <code>Heap (Priority Queue)</code>, <code>Matrix</code></p><p>Given an <code>n x n</code> <code>matrix</code> where each of the rows and columns is sorted in ascending order, return <em>the</em> <code>k^th</code> <em>smallest element in the matrix</em>.</p><p>Note that it is the <code>k^th</code> smallest element <strong>in the sorted order</strong>, not the <code>k^th</code> <strong>distinct</strong> element.</p><p>You must find a solution with a memory complexity better than <code>O(n^2)</code>.</p><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: matrix = [[-5]], k = 1
Output: -5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>1 &lt;= n &lt;= 300</code></li><li><code>-10^9 &lt;= matrix[i][j] &lt;= 10^9</code></li><li>All the rows and columns of <code>matrix</code> are <strong>guaranteed</strong> to be sorted in <strong>non-decreasing order</strong>.</li><li><code>1 &lt;= k &lt;= n^2</code></li></ul><p><strong>Follow up:</strong></p>`,13),d=n("li",null,[s("Could you solve the problem with a constant memory (i.e., "),n("code",null,"O(1)"),s(" memory complexity)?")],-1),m=s("Could you solve the problem in "),k=n("code",null,"O(n)",-1),h=s(" time complexity? The solution may be too advanced for an interview but you may find reading "),b={href:"http://www.cse.yorku.ca/~andy/pubs/X+Y.pdf",target:"_blank",rel:"noopener noreferrer"},x=s("this paper"),g=s(" fun."),_=a(`<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 378. Kth Smallest Element in a Sorted Matrix (7/8/2021)</span>
<span class="token comment">// Runtime: 100 ms (70.84%) Memory: 54.37 MB (5.13%) </span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kthSmallest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nums <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,3);function f(y,v){const e=t("ExternalLinkIcon");return o(),p(l,null,[u,n("ul",null,[d,n("li",null,[m,k,h,n("a",b,[x,c(e)]),g])]),_],64)}var E=r(i,[["render",f]]);export{E as default};
