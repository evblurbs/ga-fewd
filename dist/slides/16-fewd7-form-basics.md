<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# CSS

## Form Basics

Evan Johnson + Rick Chen

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Forms
* <!--- .element: class="fragment" data-fragment-index="3" -->Lab
* <!--- .element: class="fragment" data-fragment-index="4" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe how to add a form to a webpage
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe 3 different types of input tags
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement a select field

---

## Review

----

### Final Project

Where is everyone at?

---

## Forms

----

### Forms

How we get data from users

<img src="img/forms.png" style="border:none;" />

----

### Forms

Wrapper for data collection elements

* <!--- .element: class="fragment" data-fragment-index="1" -->Text Fields
* <!--- .element: class="fragment" data-fragment-index="2" -->Dropdowns
* <!--- .element: class="fragment" data-fragment-index="3" -->Radio Buttons
* <!--- .element: class="fragment" data-fragment-index="4" -->Check Boxes

----

### Forms

Tell the page:

* <!--- .element: class="fragment" data-fragment-index="1" -->**Where** to send the data
* <!--- .element: class="fragment" data-fragment-index="2" -->**How** to send it
* <!--- .element: class="fragment" data-fragment-index="3" -->**What** is being sent

----

### Form Tag

<img src="img/form_tag.png" style="border:none;" />

Available Attributes:

* <!--- .element: class="fragment" data-fragment-index="1" -->Action (where):
  * <!--- .element: class="fragment" data-fragment-index="1" -->URL to send data to
* <!--- .element: class="fragment" data-fragment-index="2" -->Method (how):
  * <!--- .element: class="fragment" data-fragment-index="2" -->Post, Get, Put, Delete
* <!--- .element: class="fragment" data-fragment-index="3" -->Enctype (what):
  * <!--- .element: class="fragment" data-fragment-index="3" -->Multipart/form-data if uploading files

----

### Form Tag

<pre><code data-trim class="html">
&lt;form action="register.php" method="post" enctype="multipart/form-data"&gt;
  &lt;!--Data collection elements go here --&gt;
&lt;/form&gt;
</code></pre>

----

### Inputs

Placed between the <code>&lt;form&gt; &lt;/form&gt;</code> tags.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;input type="text" /&gt;
&lt;/form&gt;
</code></pre>

----

### Inputs

Attributes:

* <!--- .element: class="fragment" data-fragment-index="1" -->Type
  * <!--- .element: class="fragment" data-fragment-index="1" -->Text, Submit, Password, Email, Checkbox, Button, Radio, File, etc.
* <!--- .element: class="fragment" data-fragment-index="2" -->Name
* <!--- .element: class="fragment" data-fragment-index="3" -->Placeholder
* <!--- .element: class="fragment" data-fragment-index="4" -->Value

----

### Text

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;input type="text" placeholder="Your Full Name" /&gt;
&lt;/form&gt;
</code></pre>

----

### Text

<img src="img/forms.png" style="border:none;" />

----

### Email

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;input type="text" placeholder="Your Full Name" /&gt;
  &lt;input type="email" placeholder="Your Email" /&gt;
&lt;/form&gt;
</code></pre>

----

### Email

<img src="img/email.png" style="border:none;" />

----

### Password

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;input type="text" placeholder="Your Full Name" /&gt;
  &lt;input type="email" placeholder="Your Email" /&gt;
  &lt;input type="password" placeholder="Your Password" /&gt;
&lt;/form&gt;
</code></pre>

----

### Password

<img src="img/password.png" style="border:none;" />

----

### Select Fields

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;select&gt;
    &lt;option value="Seattle"&gt;Seattle&lt;/option&gt;
    &lt;option value="San Francisco"&gt;San Francisco&lt;/option&gt;
  &lt;/select&gt;
&lt;/form&gt;
</code></pre>

----

### File

Adds a button that opens the finder to select a file.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;input type="text" placeholder="Your Full Name" /&gt;
  &lt;input type="email" placeholder="Your Email" /&gt;
  &lt;input type="password" placeholder="Your Password" /&gt;
  &lt;input type="file" /&gt;
&lt;/form&gt;
</code></pre>

----

### Submit

Adds a submit button:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;form action="register.php" method="post"&gt;
  &lt;input type="text" placeholder="Your Full Name" /&gt;
  &lt;input type="email" placeholder="Your Email" /&gt;
  &lt;input type="password" placeholder="Your Password" /&gt;
  &lt;input type="file" /&gt;
  &lt;input type="submit" /&gt;
&lt;/form&gt;
</code></pre>

---

## Lab

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe how to add a form to a webpage
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe 3 different types of input tags
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement a select field

----

### Homework

Make Relaxr's website responsive.

----

### Final Project

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
