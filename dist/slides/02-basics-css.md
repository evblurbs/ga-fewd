<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Basics

## HTML and CSS

Evan Johnson + Derek Fons

Note: Give overview of course. Set class expectations.

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review Homework
* <!--- .element: class="fragment" data-fragment-index="2" -->Review HTML
  * <!--- .element: class="fragment" data-fragment-index="3" -->Images
  * <!--- .element: class="fragment" data-fragment-index="4" -->Lab
* <!--- .element: class="fragment" data-fragment-index="5" -->CSS Intro
  * <!--- .element: class="fragment" data-fragment-index="6" -->Syntax
  * <!--- .element: class="fragment" data-fragment-index="7" -->Code Along
  * <!--- .element: class="fragment" data-fragment-index="8" -->Colors
  * <!--- .element: class="fragment" data-fragment-index="9" -->Selectors

---

## Agenda (CONT)

* <!--- .element: class="fragment" data-fragment-index="1" -->CSS Intro (CONT)
  * <!--- .element: class="fragment" data-fragment-index="2" -->Inheritance
  * <!--- .element: class="fragment" data-fragment-index="3" -->Cascading
  * <!--- .element: class="fragment" data-fragment-index="4" -->Lab
  * <!--- .element: class="fragment" data-fragment-index="5" -->Specificity
  * <!--- .element: class="fragment" data-fragment-index="6" -->Code Along
* <!--- .element: class="fragment" data-fragment-index="7" -->Homework Lab
* <!--- .element: class="fragment" data-fragment-index="8" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe how to add a relative path
* <!--- .element: class="fragment" data-fragment-index="2" -->Identify 2 ways to declare colors in CSS
* <!--- .element: class="fragment" data-fragment-index="3" -->Identify 3 places where you can add CSS? (Hint: Where does your CSS live?)
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe CSS Inheritance
* <!--- .element: class="fragment" data-fragment-index="5" -->Calculate CSS Specificity

---

## HTML

<img src="/img/html5.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

### Images

<img src="/img/cookies.jpg" />

----

### Image Tag

<pre><code data-trim class="html">
&lt;img src="path/to/image" /&gt;
</code></pre>

----

### Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Full URL (http://placehold.it/img.jpg)
* <!--- .element: class="fragment" data-fragment-index="2" -->Absolute
* <!--- .element: class="fragment" data-fragment-index="2" -->Relative

----

### Absolute Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Start with a forward slash (**/**)
* <!--- .element: class="fragment" data-fragment-index="2" -->Searches the ***webroot*** directory for the declared path

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="html">
&lt;img src="/images/logo.png" /&gt;
</code></pre>

----

### Absolute Paths

<img src="/img/folder_structure.png" style="border:none;" />

----

### Relative Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Do NOT with a forward slash ("**/**")
* <!--- .element: class="fragment" data-fragment-index="2" -->Searches the ***current*** directory for the declared path

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="html">
&lt;img src="images/logo.png" /&gt;
</code></pre>

----

### Relative Paths

<img src="/img/folder_structure_parentDirectory.png" style="border:none;" />

----

### Relative Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Use two periods and a forward slash ("**../**") to navigate up a directory
* <!--- .element: class="fragment" data-fragment-index="2" -->Repeat the two periods and a forward slash ("**../../**") to navigate up two directories

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="html">
&lt;img src="../images/logo.png" /&gt;
</code></pre>

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## CSS

<img src="/img/css3.png" style="border:none; background: transparent; box-shadow:none; max-width: 400px;" />

----

### CSS Syntax

<img src="/img/css_syntax.png" style="border:none;" />

----

### CSS Syntax

<pre><code data-trim class="css">
p {
  color: red;
  font-weight: bold;
  font-size: 14px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</code></pre>

----

### Where does CSS live?

1. <!--- .element: class="fragment" data-fragment-index="1" -->Embedded

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
  &lt;style&gt;
    p {
      color: blue;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;This is styled with embedded CSS!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Where does CSS live?

1. Embedded
2. <!--- .element: class="fragment" data-fragment-index="1" -->Inline

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;p style="color: purple;"&gt;This is styled inline!&lt;/p&gt;
</code></pre>

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Where does CSS live?

1. Embedded
2. Inline
3. <!--- .element: class="fragment" data-fragment-index="1" -->External

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
  &lt;link rel="stylesheet" type="text/css" href="path/to/css/file" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;This is styled with embedded CSS!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Color Keywords

<img src="/img/color.png" style="border:none;background:transparent;" />

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
p {
  color: red;
}

p {
  color: green;
}

p {
  color: blue;
}
</code></pre>

----

### Hexcode Colors

<img src="/img/hex_colors.png" style="border:none;background:transparent;" />

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
p {
  color: #FF0000; /* red */
}

p {
  color: #00FF00; /* green */
}

p {
  color: #00F; /* blue */
}
</code></pre>

----

### RGB Colors

<pre><code data-trim class="css">
p {
  color: rgb(255,0,0); /* red */
}

p {
  color: rgb(0,255,0); /* green */
}

p {
  color: rgb(0,0,255); /* blue */
}
</code></pre>

----

### RGBA Colors

<img src="/img/rgba_color.png" style="border:none;background:transparent;" />

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
div {
  background-color: rgba(255,0,0,0); /* red */
}

div {
  background-color: rgba(0,255,0.5); /* green */
}

div {
  background-color: rgba(0,0,255,1); /* blue */
}
</code></pre>


----

### Color Wheel

<img src="/img/color_wheel.png" style="max-width:500px;border:none;box-shadow:none;" />

----

### Tag Selector

<pre><code data-trim class="css">
p {
  color: #F00; /* red */
}

div {
  background-color: rgba(0,255,0.5); /* green */
}

img {
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0,0,255,0.8); /* blue */
}
</code></pre>

----

### Attribute Selector

<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li optional&gt;1 cup brown sugar&lt;/li&gt;
  &lt;li background="color"&gt;2 Tbl milk&lt;/li&gt;
  &lt;li background="transparent"&gt;2 eggs&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
[optional] {
  color: #F00; /* red */
}

[background="color"] {
  background-color: rgba(0,255,0.5); /* green */
}

li[background="transparent"] {
  background-color: transparent;  
}
</code></pre>

----

### ID Selector

<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li id="main"&gt;1 cup brown sugar&lt;/li&gt;
  &lt;li&gt;2 Tbl milk&lt;/li&gt;
  &lt;li&gt;2 eggs&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  color: red;
  font-weight: bold;
}
</code></pre>

----

### Class Selector

<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li id="main"&gt;1 cup brown sugar&lt;/li&gt;
  &lt;li class="optional"&gt;2 Tbl milk&lt;/li&gt;
  &lt;li class="optional"&gt;2 eggs&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  color: red;
  font-weight: bold;
}

.optional {
  color: #CCC;
}
</code></pre>

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Inheritance

* What color will the strong tag be?
* What font-weight will the strong tag be?


<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li&gt;&lt;strong&gt;1&lt;/strong&gt; cup brown sugar&lt;/li&gt;
  &lt;li&gt;&lt;strong&gt;2&lt;/strong&gt; Tbl milk&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><code data-trim class="css" contenteditable>
li {
  color: gray;
}
</code></pre>

----

### Cascading

C is for Cascading

<pre><code data-trim class="html">
&lt;div class="first"&gt;
  &lt;p&gt;This is my first amazing paragraph!&lt;/p&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;p&gt;This is my second amazing paragraph!&lt;/p&gt;
&lt;/div&gt;
</code></pre>

<pre><code data-trim class="css" contenteditable>
.first p {
  font-weight: 700;
}
</code></pre>

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Specificity

Not all selectors are created equal

<img src="/img/specificity-wars.jpg" style="border:none;" />

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Homework

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

## Learning Objective

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe how to add a relative path
* <!--- .element: class="fragment" data-fragment-index="2" -->Identify 2 ways to declare colors in CSS
* <!--- .element: class="fragment" data-fragment-index="3" -->Identify 3 places where you can add CSS? (Hint: Where does your CSS live?)
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe CSS Inheritance
* <!--- .element: class="fragment" data-fragment-index="5" -->Calculate CSS Specificity

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
