<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Intro to jQuery

Brian Cama & Sarah McAlear

---

## Learning Ojectives

* Differentiate between jQuery and JavaScript, describe the benefits of using them.
* Recognize jQuery syntax
* Use selectors and jQuery functions to effectively manipulate the DOM

---

## Review

----

### Startup MatchMaker

How is it going?

----

<img src="img/js-logo.png" style="border:none; max-height: 500px;" />

What is JavaScript?

----

###Traffic Light Review

---

## jQuery

----

## What is jQuery?

jQuery is a JavaScript library, or a collection of functions/methods that you can utilize.

----

## jQuery Definition

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML

> It makes things like HTML document traversal and manipulation, event handling and animation much simpler with an easy-to-use API that works across a multitude of browsers.

----

## jQuery Motto

**“write less, do more”**

----

##Getting Started

Adding jQuery to your website
```<script src="js/jquery-1.11.3.js"></script>``` - Adding the file.
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.in.js"></script>``` - CDN

## Content Delivery Network (CDN)

> A **content delivery network** or **content distribution network** (CDN) is a large distributed system of servers deployed in multiple data centers across the Internet. The goal of a CDN is to serve content to end-users with high availability and high performance.

----

##Syntax

__Syntax:__ Spelling and grammar rules of a programming language. 


Note:
Like with any language, there are formal rules around how to write it. This is the syntax.


----

##JavaScript Syntax - Punctuation

* Semicolon
* Brackets
* Parentheses
* Quotation Marks

----

##JavaScript Syntax - Comments

  //Single Line Comments

  /* Multi line comments /*

----

## $ Symbol

In jQuery the **$** symbol is simply a shorthand alias for the jQuery function. This is typically used as a selector of DOM elements and allows us to use some useful jQuery methods.

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />
##Color Switcher: Part Deux

----

## jQuery Selector

With jQuery assigned to the **$** symbol, here is how you select a DOM element. (Similar to selecting elements in CSS)

<pre><code data-trim class="html">
<div id="myId"></div>
<span class="myClass"></span>
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId")     // returns DOM element with the ID 'myId'
$(".myClass")  // returns DOM element with the class 'myClass'
</code></pre>

Note: document.getElementById('thingy').onclick = doSomething;

  function doSomething() {
      // make something happen here
  }

In jQuery, this might look more like:

  $('#thingy').click(doSomething);

  function doSomething() {
    // make something happen here
    }
    
    
Note: We will certainly be discussing this in more detail, but in general jQuery let’s us grab some element from the page ($('selector')), and do something with it ($('selector').click(doSomething);). In this case, we grabbed an element with the id thingy and used .click() to make a function run when the user clicks on #thingy.

----

## jQuery Chained Methods

You can chain methods to the jQuery object that is returned. For example, after selecting the DOM elements, you might want to perform:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId").addClass('active');
// adds the class 'active' to the DOM element with the ID 'myId'
$(".myClass").hide();
// hides the DOM element with the class 'myClass'
</code></pre>

----

## jQuery DOC Ready

The browser loads some content synchronously and other content asynchronously. This can cause a problem with our JavaScript, as a lot of it is dependent on the state of the DOM and other assets.

----

## jQuery DOC Ready

**Good News!** jQuery has a method to handle this.

> A page can't be manipulated safely until the document is ‘ready.' jQuery detects this state of readiness for you.

----

## jQuery DOC Ready Example

<pre><code data-trim class="javascript">
$(document).ready(function() {
  console.log("Ready!");
});
</code></pre>

The console log statement is fired after the Document has loaded. http://learn.jquery.com/using-jquery-core/document-ready/

----

## Some jQuery methods

Mouse Events

<pre><code data-trim class="javascript">

$('myselector').click(moveBox)

function moveBox() {
  //my move Box code
}
</code></pre>

* The click method will call the function moveBox when the element chosen by myselector has been clicked on

----

Effects

<pre><code data-trim class="javascript">

$('myselector').show(300)

</code></pre>

* The first parameter is the duration of the animation in milliseconds(i.e. how long until the element is showed)<!--- .element: class="fragment" data-fragment-index="1" -->

----

Other jQuery methods

.hide()
.toggle()
.slideUp()
.slideDown()
.slideToggle()

Many of these also have a duration parameter that you can set.

</code></pre>

----

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />
##Traffic Light

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />
##Syntax Drill

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />
##FAQ's 


---

## Closing

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.


----

### Homework

----

## Click Event (example)

<pre><code data-trim class="javascript">

$("mySelector").click(toggleMenu)

function toggleMenu(event) {
  // toggleMenu code goes here
  // event is the click data
  // this prevents the default click event from occuring
  e.preventDefault();
});

</code></pre>

----