import{_ as n,e as s}from"./app.54b71ebc.js";const a={},e=s(`<h1 id="_1290-convert-binary-number-in-a-linked-list-to-integer" tabindex="-1"><a class="header-anchor" href="#_1290-convert-binary-number-in-a-linked-list-to-integer" aria-hidden="true">#</a> 1290. Convert Binary Number in a Linked List to Integer</h1><br><p>Tags: <code>Linked List</code>, <code>Math</code></p><p>Given <code>head</code> which is a reference node to a singly-linked list. The value of each node in the linked list is either <code>0</code> or <code>1</code>. The linked list holds the binary representation of a number.</p><p>Return the <em>decimal value</em> of the number in the linked list.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2019/12/05/graph-1.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: head = [0]
Output: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li>The Linked List is not empty.</li><li>Number of nodes\xA0will not exceed <code>30</code>.</li><li>Each node&#39;s value is either\xA0<code>0</code> or <code>1</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 3 ms (35.01%) Memory: 5.59 MB (83.07%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>


<span class="token keyword">int</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> head<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp" aria-hidden="true">#</a> CPP</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 0 ms (92.35%) Memory: 8.30 MB (45.51%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">+=</span> head<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
            head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 0 ms (94.96%) Memory: 2.05 MB (0.00%) </span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    result <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> head <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        result <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span>
        result <span class="token operator">+=</span> head<span class="token punctuation">.</span>Val
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> JAVA</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 0 ms (94.06%) Memory: 36.30 MB (93.10%) </span>

<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">+=</span> head<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 91 ms (22.90%) Memory: 38.52 MB (94.49%) </span>

<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> head<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 8 ms (72.22%) Memory: 15.56 MB (83.33%) </span>

<span class="token doc-comment comment">/**
 * Definition for a singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) <span class="token punctuation">{</span>
 *         $this-&gt;val = $val;
 *         $this-&gt;next = $next;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">ListNode</span> <span class="token parameter">$head</span>
     * <span class="token keyword">@return</span> <span class="token class-name">Integer</span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">getDecimalValue</span><span class="token punctuation">(</span><span class="token variable">$head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$head</span> <span class="token operator">!=</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$result</span> <span class="token operator">&lt;&lt;</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token variable">$result</span> <span class="token operator">+=</span> <span class="token variable">$head</span><span class="token operator">-&gt;</span><span class="token property">val</span><span class="token punctuation">;</span>
            <span class="token variable">$head</span> <span class="token operator">=</span> <span class="token variable">$head</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$result</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="py" tabindex="-1"><a class="header-anchor" href="#py" aria-hidden="true">#</a> PY</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment"># Runtime: 16 ms (79.95%) Memory: 13.33 MB (53.15%) </span>

<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode(object):</span>
<span class="token comment">#     def __init__(self, val=0, next=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.next = next</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type head: ListNode
        :rtype: int
        &quot;&quot;&quot;</span>
        result <span class="token operator">=</span> <span class="token number">0</span>
        
        <span class="token keyword">while</span> head <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            result <span class="token operator">&lt;&lt;</span><span class="token operator">=</span> <span class="token number">1</span>
            result <span class="token operator">+=</span> head<span class="token punctuation">.</span>val
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token keyword">return</span> result
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="py3" tabindex="-1"><a class="header-anchor" href="#py3" aria-hidden="true">#</a> PY3</h3><div class="language-py3 ext-py3 line-numbers-mode"><pre class="language-py3"><code># 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
# Runtime: 20 ms (94.37%) Memory: 14.18 MB (0.00%) 

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -&gt; int:
        result = 0
        
        while head != None:
            result &lt;&lt;= 1
            result += head.val
            head = head.next
        
        return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)</span>
<span class="token comment">// Runtime: 80 ms (51.61%) Memory: 40.79 MB (90.32%) </span>

<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> head<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function i(t,l){return e}var c=n(a,[["render",i],["__file","index.html.vue"]]);export{c as default};
