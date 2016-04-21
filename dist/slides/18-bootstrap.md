<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Web Frameworks

## Bootstrap

Brian Cama & Steve Minor

---

## Learning Objectives

* Describe the advantages of using a Front End Framework for your project
* Use the Bootstrap navbar component to create a header navigation
* Understand and implement a grid system using Bootstrap
* Have confidence in using Bootstrap documentation to add components to your website.


---

## Front End Frameworks

----

### What is a framework?

> [A framework] is a standardized set of practices and concepts used to address common problems and can be used as a reference to help us solve new issues that are similar

----

### Frameworks in Front End Web Development

Most websites share a similar structure. Web Frameworks give us a standardized package of files that includes CSS, Javascript and even HTML Files.

----

###Don't Reinvent the Wheel

Frameworks provide a common structure so that web developers don't have to start from scratch and can just reuse code

----

### Front End Frameworks

Examples:
* <!--- .element: class="fragment" data-fragment-index="1" -->Foundation
* <!--- .element: class="fragment" data-fragment-index="2" -->Semantic UI
* <!--- .element: class="fragment" data-fragment-index="3" -->Bootstrap

----

What might be some useful elements to have built into your project from the start?

---

##Bootstrap

<img src="/img/bootstrap.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

##Bootstrap

Definitely the most popular JavaScript, CSS and HTML framework out there, Twitter Bootstrap is used in websites all over the internet. 

----

##Bootstrap

Bootstrap provides many of the basic modules you will need to develop your website:
* <!--- .element: class="fragment" data-fragment-index="1" -->Typography
* <!--- .element: class="fragment" data-fragment-index="2" -->Grid
* <!--- .element: class="fragment" data-fragment-index="3" -->Buttons
* <!--- .element: class="fragment" data-fragment-index="4" -->Responsiveness

----

##Bootstrap

###Criticisms

People often complain that the pervasiveness of the Bootstrap Framework leads to websites all looking the same.

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />
##Setting up Bootstrap

---

##Bootstrap

###The Grid

Bootstrap includes a grid system that is mobile-first, responsive and scales to 12 columns. 

----

### Grid Rules

To use the Bootstrap capabilities we will have to add classes to our html elements. The three main type of classes you will use to build a grid are as follows: 
* <!--- .element: class="fragment" data-fragment-index="1" -->container
* <!--- .element: class="fragment" data-fragment-index="2" -->row
* <!--- .element: class="fragment" data-fragment-index="3" -->column

----

### Simple 50/50 grid

<pre><code><div class="container">
	<div class="row">
		<div class="col-md-6">Left Column</div>
		<div class="col-md-6">Right column</div>
	</div>
</div></code></pre>

----

### Container


<pre><code><div class="container"></div></code></pre>

The element with the container class serves as the outer container for all of our grid elements.
* <!--- .element: class="fragment" data-fragment-index="1" -->Your rows should be placed within a container element.
* <!--- .element: class="fragment" data-fragment-index="2" -->The .container has set fixed-widths for varying viewports(media queries will change the width) .
* <!--- .element: class="fragment" data-fragment-index="3" -->If you want your grid to be fluid(always 100% width) then use the .container-fluid class instead.


----

### Row

```
<div class="container">
	<div class="row">
	</div>
</div>
```

The element with the row class holds our column elements.
* <!--- .element: class="fragment" data-fragment-index="1" -->The only immediate child of a row should be a column element

----

### Columns

```<div class="col-md-12">Content goes inside columns</div>```

Content should be placed inside columns. You are provided with predefined css classes that allow you to determine the size and behavior of columns.

----

### Column Queries

The second part of the column class syntax allows you to change the grid depending on the size of the viewport. 

<img src="/img/grid-layouts.jpg" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

###Column size/span

Bootstrap bases it's grid on a 12 column system. The final number tells the element how many columns it should span. 

```
<div class="col-md-6">First Column</div>
<div class="col-md-6">Second Column</div>
```

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

##Simple Grid

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

##Responsive Grid

---

##Bootstrap Components

Bootstrap provides some base styling, such as font styles and also a grid system built into the CSS. They also include modules that help you build out components of your website.

----

###Bootstrap Documentation

In order to use these components Bootstrap has documentation that gives you detailed directions as to how to go about building the large number of components they have built in.

www.getbootstrap.com/components

----

### Customizing Bootstrap

The easiest and simplest way to customize your Bootstrap site is to add your own custom css. To do that you'll want to add a css file into the css folder and make sure to link to it in your HTML.

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

##Bootstrap Navbar


----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

##Bootstrap Tabs


---

Lab Time 