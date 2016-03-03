<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Styling

## Layouts

Brian Cama + Steve Minor

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe the difference between **ID** and **Class** selectors
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement a CSS float **left** and **right**
* <!--- .element: class="fragment" data-fragment-index="4" -->Experiment and predict effects of floats and clearing CSS positioning
* <!--- .element: class="fragment" data-fragment-index="5" -->Describe what the **clearfix hack** is used for

---

## Review

----

### Relaxr

How is it going?

---

## Divs, IDs, and Classes

----

### Divs

<img src="img/html4.png" />

----

### IDs and Classes

<img src="img/tags_attributes.png" style="border:none;" />

----

### IDs

<pre><code class="html" data-trim>
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code class="css" data-trim>
#main {
  margin: 0 auto;
  width: 400px;
}
</code></pre>

----

### Classes

<pre><code class="html" data-trim>
&lt;div class="wrapper"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code class="css" data-trim>
.wrapper {
  border-top: 1px solid #CCC;
  width: 400px;
}
</code></pre>

----

### IDs and Classes

* <!--- .element: class="fragment" data-fragment-index="1" -->IDs are unique
* <!--- .element: class="fragment" data-fragment-index="2" -->Classes are not unique

<img src="img/specificity-value.png" style="border:none;" /><!--- .element: class="fragment" data-fragment-index="3" -->

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

## HTML5 Structural Elements

----

### HTML4

<img src="img/html4.png" />

----

### HTML5

<pre><code data-trim class="html">
&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;nav&gt;...&lt;/nav&gt;
  &lt;aside&gt;...&lt;/aside&gt;
  &lt;article&gt;...&lt;/article&gt;
  &lt;section&gt;...&lt;/section&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;
</code></pre>

---

## Floats

... a CSS positioning property.

<small>Credit to *CSS-Tricks: All About Floats*</small>

----

### Print Layouts

<img src="img/print-layout.png" style="border:none;" />

----

### Web Layouts

<img src="img/web-text-wrap.png" style="border:none;" />

----

### Web Layouts

<pre><code data-trim class="html">
&lt;img src="path/to/img" class="left" /&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur...&lt;/p&gt;
&lt;img src="path/to/img" class="right" /&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur...&lt;/p&gt;
</code></pre>

<pre><code data-trim class="css">
.left {
  float: left;
}

.right {
  float: right;
}
</code></pre>

----

### Web Layouts

<img src="img/web-layout.png" style="border:none;" />

----

### Clearing the Float

<img src="img/unclearedfooter.png" style="border:none;" />

----

### Clearing the Float

<img src="img/clearedfooter.png" style="border:none;" />

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
footer {
  clear: both;
}
</code></pre>

----

### Clearing the Float

<img src="img/directionalclearing.png" style="border:none;" />

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
img {
  clear: right;
}
</code></pre>

----

### The Great Collapse

<img src="img/collapse.png" style="border:none;" />

----

### The Great Collapse

* <!--- .element: class="fragment" data-fragment-index="1" -->The Empty Div Method

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;div style="clear:both;"&gt;&lt;/div&gt;
</code></pre>

* <!--- .element: class="fragment" data-fragment-index="3" -->Clearfix Hack

<pre><!--- .element: class="fragment" data-fragment-index="4" --><code data-trim class="css">
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}
&#42; html .clearfix             { zoom: 1; } /&#42; IE6 &#42;/
&#42;:first-child+html .clearfix { zoom: 1; } /&#42; IE7 &#42;/
</code></pre>

---

## Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe the difference between **ID** and **Class** selectors
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement a CSS float **left** and **right**
* <!--- .element: class="fragment" data-fragment-index="4" -->Experiment and predict effects of floats and clearing CSS positioning
* <!--- .element: class="fragment" data-fragment-index="5" -->Describe what the **clearfix hack** is used for
