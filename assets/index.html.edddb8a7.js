import{_ as t,r as o,o as p,c,a as n,b as l,F as i,e as a,d as s}from"./app.03da02d8.js";const r={},d=a('<h1 id="_138-copy-list-with-random-pointer" tabindex="-1"><a class="header-anchor" href="#_138-copy-list-with-random-pointer" aria-hidden="true">#</a> 138. Copy List with Random Pointer</h1><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><br><p>Tags: <code>Hash Table</code>, <code>Linked List</code></p><p>A linked list of length <code>n</code> is given such that each node contains an additional random pointer, which could point to any node in the list, or <code>null</code>.</p>',5),u=s("Construct a "),k={href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy",target:"_blank",rel:"noopener noreferrer"},h=n("strong",null,"deep copy",-1),m=s(" of the list. The deep copy should consist of exactly "),b=n("code",null,"n",-1),g=s(),_=n("strong",null,"brand new",-1),f=s(" nodes, where each new node has its value set to the value of its corresponding original node. Both the "),x=n("code",null,"next",-1),w=s(" and "),y=n("code",null,"random",-1),v=s(" pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. "),N=n("strong",null,"None of the pointers in the new list should point to nodes in the original list",-1),L=s("."),I=a(`<p>For example, if there are two nodes <code>X</code> and <code>Y</code> in the original list, where <code>X.random --&gt; Y</code>, then for the corresponding two nodes <code>x</code> and <code>y</code> in the copied list, <code>x.random --&gt; y</code>.</p><p>Return <em>the head of the copied linked list</em>.</p><p>The linked list is represented in the input/output as a list of <code>n</code> nodes. Each node is represented as a pair of <code>[val, random_index]</code> where:</p><ul><li><code>val</code>: an integer representing <code>Node.val</code></li><li><code>random_index</code>: the index of the node (range from <code>0</code> to <code>n-1</code>) that the <code>random</code> pointer points to, or <code>null</code> if it does not point to any node.</li></ul><p>Your code will <strong>only</strong> be given the <code>head</code> of the original linked list.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2019/12/18/e1.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2019/12/18/e2.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Example 3:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2019/12/18/e3.png" alt=""></strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 1000</code></li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li><li><code>Node.random</code> is <code>null</code> or is pointing to some node in the linked list.</li></ul><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><h2 id="solution-1" tabindex="-1"><a class="header-anchor" href="#solution-1" aria-hidden="true">#</a> Solution</h2><p>I use a <code>hashtable</code> to memorize if the node has been copied.</p><p>The size of the table is <code>100003</code>, which is the smallest prime number after 100000. I think it is big enough, and the submission result has confirmed my assumption.</p><p>I found that many people use a <em>interweave list</em> solution, in my opinion, that is not a good method because it makes side-effect to the original list, which should not happen in a <em>deep copy</em> situation.</p><blockquote><p>After further investigating, I found that <code>1111</code> sized hashtable is large enough for this problem.</p></blockquote><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 138. Copy List with Random Pointer (1/28/54164)</span>
<span class="token comment">// Runtime: 8 ms (82.95%) Memory: 8.40 MB (55.68%) </span>

<span class="token comment">/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *next;
 *     struct Node *random;
 * };
 */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">HASH_SIZE</span> <span class="token expression"><span class="token number">1111</span></span></span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> <span class="token function">clone</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> source<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> created<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>source <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">int64_t</span><span class="token punctuation">)</span>source <span class="token operator">%</span> HASH_SIZE<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>created<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        created<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        created<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">-&gt;</span>val <span class="token operator">=</span> source<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
        created<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>source<span class="token operator">-&gt;</span>next<span class="token punctuation">,</span> created<span class="token punctuation">)</span><span class="token punctuation">;</span>
        created<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">-&gt;</span>random <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>source<span class="token operator">-&gt;</span>random<span class="token punctuation">,</span> created<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> created<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> <span class="token function">copyRandomList</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> created<span class="token punctuation">[</span>HASH_SIZE<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token constant">NULL</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">clone</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> created<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,25);function E(S,C){const e=o("ExternalLinkIcon");return p(),c(i,null,[d,n("p",null,[u,n("a",k,[h,l(e)]),m,b,g,_,f,x,w,y,v,N,L]),I],64)}var T=t(r,[["render",E],["__file","index.html.vue"]]);export{T as default};
