<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Intro to jQuery

Brian Cama & Steve Minor

---

## Learning Objectives

* Differentiate between jQuery and JavaScript, describe the benefits of using them.
* Recognize jQuery syntax
* Use selectors and jQuery functions to effectively manipulate the DOM

---

## Javascript

----

<img src="img/js-logo.png" style="border:none; max-height: 500px;" />

What is JavaScript?

----

## Variable Types

Primitive Variables are the most common data types:

| Type          | Example            | 
| ------------- |:------------------:|
| Number        | 42, 3.14159        |
| Boolean       | true / false       |
| Strings       | "howdy"            | 
| undefined     | value is undefined |

----

## Declaring Variables

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var x = 18;
</code></pre>

Note: We will go over global variables at a later point.

----

## Declaring Functions

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
function myFunction (myParameter) {
  // this is a function
  // your code block goes in between the curly brackets {}
  // you can access the parameter by it's name above:
  // myParameter in this case
  console.log(myParameter);
};

</code></pre>

----

<img src="img/console.png" width="600" style="border:none;box-shadow:none; width: 600px; display:block;margin:30px auto;background:transparent;"/>

* Chrome Menu (top right hamburger button) -> Tools -> Developer Tools
* Mac shortcut: Cmd + Opt + i
* PC shortcut: F12, Ctrl + Shift + i

----

## Object Example

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};
</code></pre>

---

## jQuery

----

## What is jQuery?

jQuery is a JavaScript library, or a collection of functions/methods and objects that you can utilize.

----

## jQuery Definition

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML
> It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

----

## jQuery Motto

**“write less, do more”**

----

##Getting Started

Adding jQuery to your website
<pre><script src="js/jquery-1.11.3.js"></script></pre>- Adding the file.
<pre><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.in.js"></script></pre> - CDN

----

## Content Delivery Network (CDN)

> A **content delivery network** or **content distribution network** (CDN) is a large distributed system of servers deployed in multiple data centers across the Internet. The goal of a CDN is to serve content to end-users with high availability and high performance.

----

## Code Along

Color Switcher: Revenge of the $(ith)

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

##jQuery Syntax - Selectors


Selectors are just like CSS

  $(".class").click();

  function doSomething() {
      // make something happen here
  }

In jQuery, this might look more like:

  $('selector').click(doSomething);

  function doSomething() {
    // make something happen here
    }

----


## jQuery Selector

With jQuery assigned to the **$** symbol, here is how you select a DOM element.

<pre><code data-trim class="html">
<div id="myId"></div>
<span class="myClass"></span>
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId")     // returns DOM element with the ID 'myId'
$(".myClass")  // returns DOM element with the class 'myClass'
</code></pre>

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

## jQuery Events

Events are actions that happen in the browser. jQuery allows you to assign a function that will run when the event is "fired".

Event types:<!--- .element: class="fragment" data-fragment-index="1" -->

* ready<!--- .element: class="fragment" data-fragment-index="2" -->
* hover<!--- .element: class="fragment" data-fragment-index="3" -->
* click<!--- .element: class="fragment" data-fragment-index="4" -->

----

## jQuery Hover (event)
<img src="img/jq-hover.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## Functions as variables

<pre><code data-trim class="javascript">
var hoverIn = function() {
  // hover in statement
};

var hoverOut = function() {
  // hover out statement
};

$("mySelector").hover( hoverIn, hoverOut );
</code></pre>

----

##Anonymous Functions

<pre><code data-trim class="javascript">
$("mySelector").hover(function() {
    // hover in statement
  }, function() {
    // hover out statement
  }
);
</code></pre>

----

## Click Event

<img src="img/jq-click.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## Click Event (example)

<pre><code data-trim class="javascript">
$("mySelector").click(function(e) {
  // e is the click data
  // this prevents the default click event from occuring
  e.preventDefault();
  // click occured
});
</code></pre>

----

## jQuery Animations

jQuery animations allow you to add visual effects to the browser with JavaScript. There are a number of jQuery animations, but we'll go over a commonly used one called show()

----

## jQuery Show

<img src="img/jq-show.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## jQuery Show (example)

<pre><code data-trim class="javascript">
$("mySelector").show(300)
</code></pre>

* The first parameter is the duration of the animation (i.e. how long until the element is shown).<!--- .element: class="fragment" data-fragment-index="1" -->
* An optional second parameter can be passed to it. It has to be a function, or callback for when the animation is complete.<!--- .element: class="fragment" data-fragment-index="2" -->

----

## Lab

Traffic Light

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

Syntax Drill

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

----

FAQ's

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

## Learning Objectives

* Differentiate between jQuery and JavaScript, describe the benefits of using them.
* Recognize jQuery syntax
* Use selectors and jQuery functions to effectively manipulate the DOM

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.

----

##Homework

####Interactive Relaxr Blog