<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Styling

## Box Model

Evan Johnson + Rick Chen

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Box Model
* <!--- .element: class="fragment" data-fragment-index="3" -->CSS Review
  * <!--- .element: class="fragment" data-fragment-index="4" -->Tag Selectors
  * <!--- .element: class="fragment" data-fragment-index="5" -->Nested Selectors
* <!--- .element: class="fragment" data-fragment-index="6" -->Lab
* <!--- .element: class="fragment" data-fragment-index="7" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Use a nested CSS selector
* <!--- .element: class="fragment" data-fragment-index="2"
  -->List the 4 ***layers*** of the Box Model
* <!--- .element: class="fragment" data-fragment-index="3"
  -->Describe the difference between padding, border, and margin
* <!--- .element: class="fragment" data-fragment-index="4"
  -->Calculate the ***border-box*** width of an element

---

## Review

Turn to a partner, and review the Portfolio project.

----

### GitHub Workflow

* <!--- .element: class="fragment" data-fragment-index="1" -->*Pull/Sync* **local CLONED student repo** to make sure you have the latest updates
* <!--- .element: class="fragment" data-fragment-index="2" -->Copy files (starter code) to **local FORKED student repo**
* <!--- .element: class="fragment" data-fragment-index="3" -->Coplete work in **local FORKED student repo**
* <!--- .element: class="fragment" data-fragment-index="4" -->*Commit* and *push/sync* changes to **remote FORKED student repo** to share your work

---

## Box Model

----

<img src="/img/box_model.gif" style="border:none;" />

----

### Content

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
}
</code></pre>

----

### Padding

'top right bottom left' vs. 'top/bottom right/left'.

<pre><code data-trim class="css">
#main {
  padding: 50px 25px 50px 25px;
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  padding: 50px 25px;
}
</code></pre>

----

### Padding

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
  padding: 50px 25px;
}
</code></pre>

----

### Border

<pre><code data-trim class="css">
#main {
  border-width: 1px;
  border-style: solid;
  border-color: #000;
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  border: 1px solid #000;
}
</code></pre>

----

### Border

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
  padding: 50px 25px;
  border: 1px solid #000;
}
</code></pre>

----

### Margin

'top right bottom left' vs. 'top/bottom right/left'.

<pre><code data-trim class="css">
#main {
  margin: 50px 25px 50px 25px;
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  margin: 50px 25px;
}
</code></pre>

----

### Margin

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
  padding: 50px 25px;
  border: 1px solid #000;
  margin: 50px 25px;
}
</code></pre>

----

<img src="/img/box_model.gif" style="border:none;" />

----

### Box Sizing

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
* {
  box-sizing: content-box;
  box-sizing: padding-box;
  box-sizing: border-box;
}
</code></pre>

----

### Border Box

#### <!--- .element: class="fragment" data-fragment-index="1" -->Total Width = width + padding-left + padding-right + border-left + border-right

#### <!--- .element: class="fragment" data-fragment-index="2" -->Total Height = height + padding-top + padding-bottom + border-top + border-bottom

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

## CSS Review

<img src="/img/css3.png" style="border:none; background: transparent; box-shadow:none; max-width: 400px;" />

----

### Tag Selectors

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
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

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Nested Selectors

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
p a {
  text-decoration: none;
  font-weight: bold;
}
</code></pre>

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Homework

Relaxr, a NY Startup, needs you to build them a landing page.

----

### The DOM

<img src="/img/dom.png" style="border:none; width: 75%;" />

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

### CSS Reset

> set of CSS rules that resets the styling of all HTML elements to a consistent baseline.

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

### Learning Objective

* <!--- .element: class="fragment" data-fragment-index="1" -->Use a nested CSS selector
* <!--- .element: class="fragment" data-fragment-index="2"
  -->List the 4 ***layers*** of the Box Model
* <!--- .element: class="fragment" data-fragment-index="3"
  -->Describe the difference between padding, border, and margin
* <!--- .element: class="fragment" data-fragment-index="4"
  -->Calculate the ***border-box*** width of an element

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.

