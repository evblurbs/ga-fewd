<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Basics

## HTML and CSS

Brian Cama


---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Predict image paths and apply relative paths to img and a tags
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe CSS Inheritance
* <!--- .element: class="fragment" data-fragment-index="3" -->Calculate CSS Specificity
* <!--- .element: class="fragment" data-fragment-index="4" -->Build a simple page

Note: On the board before class ask students to research the tags header, img, hr and nav. Explain in front of class.

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

Note: The `img` tag requires a `src` attribute, which tells the browser where to find the image.

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

Note:

  Absolute URLs start with a `/`, so if we imagine that our `webroot` directory was stored on a server such that the `webroot/index.html` file is accessible at `http://example.com/index.html`, then placing the logo image could be done from any html page with: ```<img src="/images/logo.png">```

The benefit here is that this same ```src``` path works on any html page, no matter what its location, so the same ```img``` tag can be used on both the ```webroot/index.html``` page and the ```webroot/about/index.html``` page.

The downside is that the path only works if the project is stored to a proper location for serving.

----

### Absolute Paths

<img src="/img/folder_structure.png" style="border:none;" />

----

### Relative Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Do NOT start with a forward slash ("**/**")
* <!--- .element: class="fragment" data-fragment-index="2" -->Searches the ***current*** directory for the declared path

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="html">
&lt;img src="images/logo.png" /&gt;
</code></pre>

----

### Relative Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Use two periods and a forward slash ("**../**") to navigate up a directory
* <!--- .element: class="fragment" data-fragment-index="2" -->Repeat the two periods and a forward slash ("**../../**") to navigate up two directories

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="html">
&lt;img src="../images/logo.png" /&gt;
</code></pre>

----

### Relative Paths

<img src="/img/folder_structure_parentDirectory.png" style="border:none;" />

----

### Alt Attribute

<pre><code data-trim class="html">
&lt;img src="puppy.jpg" alt="My cute puppy" /&gt;
</code></pre>

Note:

A piece of text to be used in lieu of the image when the image is unavailable

Using `alt` attributes has the added benefit of giving search engines more linguistic context about the image as it is used on your page.

Reasons an image may not load:

* There was a connection error, the browser didn't download the image.

* The file was not found, perhaps because the image got moved elsewhere and the page wasn't updated yet to reflect the change.

* The user is running a text-based browser such as an older phone with a WAP-style browser, or a non-graphical browser like lynx.

* The user is using a screen reader because she has low vision, which will read the `alt` text aloud or present it through a braille reader.

----

### What Tag is It?

<img src="/img/about_me_deliverable.png" style="border:none;box-shadow:none;background:transparent;" />

Note: Go through the about_me_deliverable.png and ask the students to tag the elements.

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
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</code></pre>

Note:
Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.
In this declaration, we are setting the `color` **property** to the **value** `red`.

----

### Where does CSS live?

####Embedded

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

### Where does CSS live?

####Inline

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;p style="color: purple;"&gt;This is styled inline!&lt;/p&gt;
</code></pre>

----

### Where does CSS live?

####External

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
  &lt;link rel="stylesheet" type="text/css" href="path/to/css/file" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;This is styled with external CSS!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

Note: Using a separate CSS file
Its best practice to put CSS in its own file and link to it from the `<head>`.
```<link rel="stylesheet" href="style.css">```

"The `link` tag needs two attributes: `rel="stylesheet"` and an `href` attribute.

The `href` attribute value works very similarly to linking to an image, or to another page.

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

Note: Here we create our index.html page for the homework assignment and focus on using our What Tag Is It? exercise to fill in our HTML.

---

### Color Keywords

<img src="img/color.png" style="border:none;background:transparent;" />

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

<img src="img/hex_colors.png" style="border:none;background:transparent;" />

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

Note:
"Hex" values are so-called because they use hexadecimal, or base-16, to describe the color values for red, green, and blue. Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.

Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.

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

Note:
FF in base-16 is equivalent to 255 in base-10.

In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.

White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.

----

### RGBA Colors

<img src="img/rgba_color.png" style="border:none;background:transparent;" />

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

Note:
0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

Thus, __rgba(0,0,0,.25)__ is black at 25% opacity and __rgba(255, 255, 255, 0.8)__ is white at 80% opacity.

The alpha value can be in decimal form but cannot use a percentage. When a decimal is used, the leading zero is optional.

---

##CSS: Styling our HTML

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

### Descendant Selectors

Matches elements that are descendants of a specified element

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

### The Cascade

<img src="img/proximity.gif" style="border:none;" />

Note: The cascade is a fundamental feature of CSS. It is an algorithm defining how to combine properties values originating from different sources. It lies at the core of CSS as stressed by its name: Cascading Style Sheets.

----

### Specificity

Not all selectors are created equal

<img src="/img/specificity-wars.jpg" style="border:none;" />

----

### Lab

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.

----

## Homework

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />


