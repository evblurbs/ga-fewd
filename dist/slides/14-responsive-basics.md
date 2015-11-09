<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# CSS

## Responsive Basics

Brian Cama & Sarah McAlear

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what responsive design is
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe the differences between fixed and responsive designs
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement 2 different types of media queries
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe the difference between REM and EM

---

## Review

----

### Final Project

Share what we have so far.

----

### Citipix

How'd it Go?

----

### Do you remember?

* <!--- .element: class="fragment" data-fragment-index="1" -->Box Model
* <!--- .element: class="fragment" data-fragment-index="2" -->CSS Specificity
* <!--- .element: class="fragment" data-fragment-index="3" -->Floats

---

## Responsive Layouts

----

### Fixed Websites

* UPS.com
* Google.com
* Amazon.com
* NYTimes.com

----

### Fixed Layouts

* <!--- .element: class="fragment" data-fragment-index="1" -->Used up to this point
* <!--- .element: class="fragment" data-fragment-index="2" -->Relies on a container of fixed width
* <!--- .element: class="fragment" data-fragment-index="3" -->Usually 960px or 980px

----

### Responsive Websites

* Apple.com
* BostonGlobe.com
* signesduquotidien.org
* generalassemb.ly

----

### Responsive Layouts

* <!--- .element: class="fragment" data-fragment-index="1" -->Different styles for different screen widths
* <!--- .element: class="fragment" data-fragment-index="2" -->Fluid
* <!--- .element: class="fragment" data-fragment-index="3" -->Smaller screens are often sized in percentages

---

## REM/EM

----

### EM

* <!--- .element: class="fragment" data-fragment-index="1" -->Originates from print design
* <!--- .element: class="fragment" data-fragment-index="2" -->Is a relative to it's parent element

----

### EM

<pre><code data-trim class="css">
body {
  font-size: 20px;
}

.container {
  font-size: 10px;
}

p {
  font-size: 1.5em;
}
</code></pre>

<pre><code data-trim class="html">
&lt;body&gt;
  &lt;p&gt;Paragraph one...&lt;/p&gt;
  &lt;div class="container"&gt;
    &lt;p&gt;Paragraph two...&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
</code></pre>

----

### REM

* <!--- .element: class="fragment" data-fragment-index="1" -->REM is easier to keep track of than EM
* <!--- .element: class="fragment" data-fragment-index="2" -->Is a relative to the root element

----

### REM

<pre><code data-trim class="css">
body {
  font-size: 20px;
}

.container {
  font-size: 10px;
}

p {
  font-size: 1.5rem;
}
</code></pre>

<pre><code data-trim class="html">
&lt;body&gt;
  &lt;p&gt;Paragraph one...&lt;/p&gt;
  &lt;div class = "container"&gt;
    &lt;p&gt;Paragraph two...&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
</code></pre>

---

## Media Queries

----

### Media Queries

* <!--- .element: class="fragment" data-fragment-index="1" -->Start with the ```@media``` keyword
* <!--- .element: class="fragment" data-fragment-index="2" -->Contains conditions inside parenthesis
* <!--- .element: class="fragment" data-fragment-index="3" -->Can combine multiple conditions with the ```and``` or ```or``` keyword

----

### Media Queries

<pre><code data-trim class="css">
@media (min-width: 960px) {
  // css here
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
@media (min-width: 360px) and (max-width: 960px) {
  // css here
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="css">
@media (max-width: 360px) or (min-width: 960px) {
  // css here
}
</code></pre>

----

### Media Type

* <!--- .element: class="fragment" data-fragment-index="1" -->braille, embossed, handheld, print, projection, screen, speech, tv
* <!--- .element: class="fragment" data-fragment-index="2" -->added after the ```@media``` keyword

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="css">
@media screen (min-width: 960px) {
  // css here
}
</code></pre>

----

### Only Keyword

Allows you to ignore CSS in older browsers (i.e. screen) that are not compatible.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
@media only screen (min-width: 960px) {
  // css here
}
</code></pre>

----

### Bootstrap Queries

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
/* Extra small devices (phones, less than 768px) */
/* No media query since this is the default in Bootstrap */

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) {
  // css
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  // css
}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  // css
}
</code></pre>

---

## Why Mobile First

----

###Graceful Degradation

* Arose out of a need to have a design function on as many browsers and platforms as possible.
* A full standard website would scale back as the viewport and devices got smaller

----

###Progressive Enhancement
* Attempt to provide users with the least resources (screen size, processing power, third party plugins) with a perfectly functional experience.
* The site can gradually be enhanced for larger platforms with more resources.

----

###Progressive Enhancement vs Graceful Degradation

* Scaling Down is much more difficult than scaling up

## Lab

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what responsive design is
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe the differences between fixed and responsive designs
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement 2 different types of media queries
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe the difference between REM and EM

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.

----

### Homework
