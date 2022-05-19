import{_ as n,e as s}from"./app.4f1279d7.js";const a={},e=s(`<h1 id="_706-design-hashmap" tabindex="-1"><a class="header-anchor" href="#_706-design-hashmap" aria-hidden="true">#</a> 706. Design HashMap</h1><br><p>Tags: <code>Array</code>, <code>Hash Table</code>, <code>Linked List</code>, <code>Design</code>, <code>Hash Function</code></p><p>Design a HashMap without using any built-in hash table libraries.</p><p>Implement the <code>MyHashMap</code> class:</p><ul><li><code>MyHashMap()</code> initializes the object with an empty map.</li><li><code>void put(int key, int value)</code> inserts a <code>(key, value)</code> pair into the HashMap. If the <code>key</code> already exists in the map, update the corresponding <code>value</code>.</li><li><code>int get(int key)</code> returns the <code>value</code> to which the specified <code>key</code> is mapped, or <code>-1</code> if this map contains no mapping for the <code>key</code>.</li><li><code>void remove(key)</code> removes the <code>key</code> and its corresponding <code>value</code> if the map contains the mapping for the <code>key</code>.</li></ul><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
[&quot;MyHashMap&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;remove&quot;, &quot;get&quot;]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= key, value &lt;= 10^6</code></li><li>At most <code>10^4</code> calls will be made to <code>put</code>, <code>get</code>, and <code>remove</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 706. Design HashMap (11/14/2021)</span>
<span class="token comment">// Runtime: 192 ms (79.24%) Memory: 47.88 MB (94.84%) </span>


<span class="token keyword">class</span> <span class="token class-name">MyHashMap</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">1e6</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>space <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>space<span class="token punctuation">[</span>key <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>space<span class="token punctuation">[</span>key <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>space<span class="token punctuation">[</span>key <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>space<span class="token punctuation">[</span>key <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function t(o,p){return e}var c=n(a,[["render",t],["__file","index.html.vue"]]);export{c as default};
