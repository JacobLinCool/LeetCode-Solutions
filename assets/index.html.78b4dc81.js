import{_ as n,e as s}from"./app.54b71ebc.js";const a={},e=s(`<h1 id="_729-my-calendar-i" tabindex="-1"><a class="header-anchor" href="#_729-my-calendar-i" aria-hidden="true">#</a> 729. My Calendar I</h1><br><p>Tags: <code>Design</code>, <code>Segment Tree</code>, <code>Ordered Set</code></p><p>You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a <strong>double booking</strong>.</p><p>A <strong>double booking</strong> happens when two events have some non-empty intersection (i.e., some moment is common to both events.).</p><p>The event can be represented as a pair of integers <code>start</code> and <code>end</code> that represents a booking on the half-open interval <code>[start, end)</code>, the range of real numbers <code>x</code> such that <code>start &lt;= x &lt; end</code>.</p><p>Implement the <code>MyCalendar</code> class:</p><ul><li><code>MyCalendar()</code> Initializes the calendar object.</li><li><code>boolean book(int start, int end)</code> Returns <code>true</code> if the event can be added to the calendar successfully without causing a <strong>double booking</strong>. Otherwise, return <code>false</code> and do not add the event to the calendar.</li></ul><p><strong>Example 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
[&quot;MyCalendar&quot;, &quot;book&quot;, &quot;book&quot;, &quot;book&quot;]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]

Explanation
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= start &lt; end &lt;= 10^9</code></li><li>At most <code>1000</code> calls will be made to <code>book</code>.</li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 729. My Calendar I (12/27/2021)</span>
<span class="token comment">// Runtime: 104 ms (58.33%) Memory: 22.34 MB (50.00%) </span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> start<span class="token punctuation">;</span>
    <span class="token keyword">int</span> end<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Event<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">MyCalendar</span> <span class="token punctuation">{</span>
    Event <span class="token operator">*</span>events<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span> MyCalendar<span class="token punctuation">;</span>

MyCalendar<span class="token operator">*</span> <span class="token function">myCalendarCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyCalendar <span class="token operator">*</span>calendar <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>MyCalendar<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    calendar<span class="token operator">-&gt;</span>events <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Event<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    calendar<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> calendar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">myCalendarBook</span><span class="token punctuation">(</span>MyCalendar<span class="token operator">*</span> calendar<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u628A\u5DF2\u7D93\u5EFA\u7ACB\u7684\u4E8B\u4EF6\u90FD\u505A\u4E00\u6B21\u78B0\u649E\u6E2C\u8A66</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> calendar<span class="token operator">-&gt;</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Event event <span class="token operator">=</span> calendar<span class="token operator">-&gt;</span>events<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5982\u679C\u65B0\u4E8B\u4EF6\u958B\u59CB\u6BD4\u820A\u4E8B\u4EF6\u958B\u59CB\u65E9\uFF0C\u4F46\u7D50\u675F\u5728\u820A\u4E8B\u4EF6\u958B\u59CB\u5F8C\uFF0C\u4E00\u5B9A\u6703\u649E\u5230</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> event<span class="token punctuation">.</span>start <span class="token operator">&amp;&amp;</span> end <span class="token operator">&gt;</span> event<span class="token punctuation">.</span>start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> false<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5982\u679C\u65B0\u4E8B\u4EF6\u958B\u59CB\u5728\u820A\u4E8B\u4EF6\u6642\u9593\u7BC4\u570D\u5167\uFF0C\u4E5F\u4E00\u5B9A\u6703\u649E\u5230</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;=</span> event<span class="token punctuation">.</span>start <span class="token operator">&amp;&amp;</span> start <span class="token operator">&lt;</span> event<span class="token punctuation">.</span>end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> false<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5982\u679C\u6C92\u6709\u649E\u5230\uFF0C\u5C31\u628A\u65B0\u4E8B\u4EF6\u52A0\u5165</span>
    Event new_event <span class="token operator">=</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">;</span>
    calendar<span class="token operator">-&gt;</span>events<span class="token punctuation">[</span>calendar<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> new_event<span class="token punctuation">;</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">myCalendarFree</span><span class="token punctuation">(</span>MyCalendar<span class="token operator">*</span> calendar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">free</span><span class="token punctuation">(</span>calendar<span class="token operator">-&gt;</span>events<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>calendar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your MyCalendar struct will be instantiated and called as such:
 * MyCalendar* obj = myCalendarCreate();
 * bool param_1 = myCalendarBook(obj, start, end);
 
 * myCalendarFree(obj);
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 729. My Calendar I (6/10/2021)</span>
<span class="token comment">// Runtime: 164 ms (83.74%) Memory: 47.40 MB (94.31%) </span>

<span class="token doc-comment comment">/** MyCalendar.book
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">start</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">end</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">MyCalendar</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">book</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> end <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> start<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> start<span class="token punctuation">)</span> right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function t(p,o){return e}var l=n(a,[["render",t],["__file","index.html.vue"]]);export{l as default};
