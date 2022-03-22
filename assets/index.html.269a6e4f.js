import{e as n}from"./app.437ee891.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_705-design-hashset" tabindex="-1"><a class="header-anchor" href="#_705-design-hashset" aria-hidden="true">#</a> 705. Design HashSet</h1><br><p>Tags: <code>Array</code>, <code>Hash Table</code>, <code>Linked List</code>, <code>Design</code>, <code>Hash Function</code></p><p>Design a HashSet without using any built-in hash table libraries.</p><p>Implement <code>MyHashSet</code> class:</p><ul><li><code>void add(key)</code> Inserts the value <code>key</code> into the HashSet.</li><li><code>bool contains(key)</code> Returns whether the value <code>key</code> exists in the HashSet or not.</li><li><code>void remove(key)</code> Removes the value <code>key</code> in the HashSet. If <code>key</code> does not exist in the HashSet, do nothing.</li></ul><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
[&quot;MyHashSet&quot;, &quot;add&quot;, &quot;add&quot;, &quot;contains&quot;, &quot;contains&quot;, &quot;add&quot;, &quot;contains&quot;, &quot;remove&quot;, &quot;contains&quot;]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= key &lt;= 10^6</code></li><li>At most <code>10^4</code> calls will be made to <code>add</code>, <code>remove</code>, and <code>contains</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 705. Design HashSet (3/19/2022)</span>
<span class="token comment">// Runtime: 96 ms (81.96%) Memory: 25.04 MB (93.23%) </span>

<span class="token comment">// Macros and functions in sys/mman.h</span>
<span class="token keyword">extern</span> <span class="token keyword">void</span><span class="token operator">*</span> <span class="token function">mmap</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> addr<span class="token punctuation">,</span> <span class="token class-name">size_t</span> len<span class="token punctuation">,</span> <span class="token keyword">int</span> prot<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">,</span> <span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token class-name">off_t</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> <span class="token function">munmap</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> addr<span class="token punctuation">,</span> <span class="token class-name">size_t</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SIZE</span> <span class="token expression"><span class="token number">1000001ULL</span></span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    bool key<span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> MyHashSet<span class="token punctuation">;</span>

MyHashSet<span class="token operator">*</span> <span class="token function">myHashSetCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">mmap</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>MyHashSet<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span>b11<span class="token punctuation">,</span> <span class="token number">0x22</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">myHashSetAdd</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> this<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    this<span class="token operator">-&gt;</span>key<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">myHashSetRemove</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> this<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    this<span class="token operator">-&gt;</span>key<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">myHashSetContains</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> this<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> this<span class="token operator">-&gt;</span>key<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">myHashSetFree</span><span class="token punctuation">(</span>MyHashSet<span class="token operator">*</span> this<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">munmap</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>MyHashSet<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your MyHashSet struct will be instantiated and called as such:
 * MyHashSet* obj = myHashSetCreate();
 * myHashSetAdd(obj, key);
 
 * myHashSetRemove(obj, key);
 
 * bool param_3 = myHashSetContains(obj, key);
 
 * myHashSetFree(obj);
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,13);function p(t,o){return e}var u=s(a,[["render",p]]);export{u as default};
