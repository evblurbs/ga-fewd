<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Styling

## Layouts Lab

Brian Cama & Sarah McAlear

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what Psuedo Classes are
* <!--- .element: class="fragment" data-fragment-index="2" -->Identify **2** Psuedo Classes
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement a CSS float **left** and **right**
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe what the **clearfix hack** is used for

---

## Review

----

### Layout Challenge

How did it go?

---

## Psuedo Classes

Another way to select a subgroup of elements.

----

### Psuedo Classes Syntax

Selector, colon, then psuedo class name.

>Pseudo class selectors are CSS selectors with a colon preceding them.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
a:link {
    color: green;
}
</code></pre>

----

### Links + Psuedo Classes

<pre><code data-trim class="css">
a:link {
    color: green;
}
a:visited {
    color: gray;
}
a:hover {
    color: blue;
}
a:focus {
    color: blue;
}
a:active {
    color: black;
}

</code></pre>

Note: link is anchor tags with an href. active is when links are clicked on.

----

### Relational Psuedo Classes

First child, last child, odd, even, etc.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#parent .child:first-child {
    margin-left: 0;    
}

.row section:last-child {
    margin-right: 0;
}
</code></pre>

----

### Relational Psuedo Classes

<img src="img/pseudo-classes-relationship.png" style="border:none;" />

---

## Code Along

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

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

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what Psuedo Classes are
* <!--- .element: class="fragment" data-fragment-index="2" -->Identify **2** Psuedo Classes
* <!--- .element: class="fragment" data-fragment-index="3" -->Implement a CSS float **left** and **right**
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe what the **clearfix hack** is used for

----

###Homework

*Finish up your Relaxr Blog page. 
*Begin reading about Javascript to prepare for next weeks