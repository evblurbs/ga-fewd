<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Intro to jQuery

Evan Johnson + Rick Chen

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Functions
* <!--- .element: class="fragment" data-fragment-index="3" -->External JavaScript
* <!--- .element: class="fragment" data-fragment-index="4" -->Intro to jQuery
* <!--- .element: class="fragment" data-fragment-index="5" -->Code Along
* <!--- .element: class="fragment" data-fragment-index="6" -->Lab
* <!--- .element: class="fragment" data-fragment-index="7" -->Conditions
* <!--- .element: class="fragment" data-fragment-index="8" -->Lab
* <!--- .element: class="fragment" data-fragment-index="9" -->Closing


---

## Learning Ojectives

* Describe JavaScript<!--- .element: class="fragment" data-fragment-index="1" -->
* Create a JS Function<!--- .element: class="fragment" data-fragment-index="2" -->
* Describe jQuery<!--- .element: class="fragment" data-fragment-index="3" -->
* Identify 2 jQuery events<!--- .element: class="fragment" data-fragment-index="4" -->
* Identify 2 jQuery animations<!--- .element: class="fragment" data-fragment-index="5" -->
* Write an IF/ELSE condition<!--- .element: class="fragment" data-fragment-index="6" -->

---

## Review

----

### Startup MatchMaker

How is it going?

----

<img src="img/js-logo.png" style="border:none; max-height: 500px;" />

What is JavaScript?

----

## Console

<img src="img/console.png" width="600" style="border:none;box-shadow:none; width: 600px; display:block;margin:30px auto;background:transparent;"/>

* Chrome Menu (top right hamburger button) -> Tools -> Developer Tools
* Mac shortcut: Cmd + Opt + i
* PC shortcut: F12, Ctrl + Shift + i

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
var myFunction = function(myParameter) {
  // this is a function
  // your code block goes in between the curly brackets {}
  // you can access the parameter by it's name above:
  // myParameter in this case
  console.log(myParameter);
};

</code></pre>

----

## Arithmetic Operators

| Operator      | Description        |
| ------------- |:------------------:|
| +             | Addition           |
| -             | Subtraction        |
| *             | Multiplication     |
| /             | Division           |
| %             | Modulus            |
| ++            | Increment          |
| --            | Decrement          |

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

# Functions

----

## Review W3Schools

> A **JavaScript function** is a block of code designed to perform a particular task. A JavaScript function is executed when "something" **invokes it** (calls it).

----

## Review Invoke (JS)

> To initiate a block of code, that would otherwise not be executed.

----

## Syntax

Global Function

<small>Note that we will cover the difference between global and local variables in the next lesson.</small>

* <!--- .element: class="fragment" data-fragment-index="1" -->Are created with the keyword ***function***
* <!--- .element: class="fragment" data-fragment-index="2" -->If creating a global function, you add the name after the ***function*** keyword
* <!--- .element: class="fragment" data-fragment-index="3" -->The function name is followed with parenthesis ***()***

<pre><!--- .element: class="fragment" data-fragment-index="4" --><code data-trim class="javascript">
function myFunctionName()
</code></pre>

----

## Syntax

Local Function

* <!--- .element: class="fragment" data-fragment-index="1" -->To create a local function, you use the ***var*** keyword and the statement character (***=***)
* <!--- .element: class="fragment" data-fragment-index="2" -->The function name is the ***left operand*** of the statement
* <!--- .element: class="fragment" data-fragment-index="3" -->The right operand is the ***function*** keyword followed by parenthesis ***()***

<pre><!--- .element: class="fragment" data-fragment-index="4" --><code data-trim class="javascript">
var myFunctionName = function()
</code></pre>

----

## Syntax

Function Declaration

* <!--- .element: class="fragment" data-fragment-index="1" -->The function declaration is after the parenthesis ***()***
* <!--- .element: class="fragment" data-fragment-index="2" -->The statement lives between curly brackets ***{}***
* <!--- .element: class="fragment" data-fragment-index="3" -->After the closing curly bracket, you end the function with a semi-colon (;)


<pre><!--- .element: class="fragment" data-fragment-index="4" --><code data-trim class="javascript">
var myFunctionName = function() {
  // declaration here
};

function myFunctionName() {
  // declaration here
};
</code></pre>

----

## Syntax

Params

* <!--- .element: class="fragment" data-fragment-index="1" -->Inside the parenthesis, after the ***function*** keyword, you can pass in paramaters ***(param)***
* <!--- .element: class="fragment" data-fragment-index="2" -->Parameters are used to pass data into the function to reference in your declaration.

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="javascript">
var myAlert = function(msg) {
  alert("ALERT: " + msg);
}

myAlert("Are you confused yet?");
// creates the alert: ALERT: Are you confused yet?
myAlert("Don't worry. It will make sense :)");
// creates the alert: ALERT: Don't worry. It will make sense :)
</code></pre>

----

## Syntax

Multiple Params

* <!--- .element: class="fragment" data-fragment-index="1" -->Multiple parameters can be passed inside the parenthesis after the ***function*** keyword.
* <!--- .element: class="fragment" data-fragment-index="2" -->Each parameter inside the parenthesis is separated with a comma.

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="javascript">
function multiply(x, y) {
  return x * y;
};

multiply(2, 4);
// returns the number 8 
</code></pre>

----

## Functions and Vars

Functions can be assigned to variables

<pre><code data-trim class="javascript">
function logName(myName) {
  console.log(myName);
};

logName('John'); // logs 'John' to the console
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var logName = function(myName) {
  console.log(myName);
};

logName('Jane'); // logs 'Jane' to the console
</code></pre>

----

## Encapsulate Logic

<pre><code data-trim contenteditable class="javascript">
function multiply(x, y) {
  return x * y;
};

var z = multiply(2, 4); // assigns the number 8 to z
</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 006-functions.html

---

# External JavaScript

----

## Inline JavaScript

Inline JavaScript is added directly to the DOM between a &lt;script&gt; and &lt;/script&gt; tag. If your not using the HTML5 Document type, then you need to define a type on the opening script tag:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">&lt;script type=“text/javascript”&gt; // JavaScript goes here &lt;/script&gt;</code></pre>

----

## Inline JavaScript Use Cases

Not a maintainable format. Use this only for code that should be fired immediately, and doesn’t deserve it’s own file (I.e. Google Analytics code).

----

## External JavaScript

External JavaScript is JavaScript that lives in a separate file than the DOM, but is referenced by the DOM.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">&lt;script src=“path/to/file.js“&gt;&lt;/script&gt;</code></pre>

----

## External JavaScript

Unlike CSS, which is added to the head, you typically add external JavaScript right before the closing body tag.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link rel="stylesheet" type="text/css" href="path/to/css" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;script src=“path/to/file.js“&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>


----

## External JavaScript Use Cases

* Maintainability<!--- .element: class="fragment" data-fragment-index="1" -->
* Asynchronous loading<!--- .element: class="fragment" data-fragment-index="2" -->
* Compiled files<!--- .element: class="fragment" data-fragment-index="3" -->

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 007-external-js.html

---

## jQuery

----

## What is jQuery?

jQuery is a JavaScript library, or a collection of functions/methods and objects that you can utilize.

----

## jQuery Definition

> It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

----

## jQuery Motto

**“write less, do more”**

----

## Content Dilvery Network (CDN)

> A **content delivery network** or **content distribution network** (CDN) is a large distributed system of servers deployed in multiple data centers across the Internet. The goal of a CDN is to serve content to end-users with high availability and high performance.

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008.1-jquery.html

----

## $ Symbol

jQuery, unless assigned otherwise, assigns its methods to the **$** symbol.

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

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008.2-jquery.html

----

## jQuery Chained Methods

You can chain methods to the jQuery object that is returned. For example, after selecting the DOM elements, you might want to preform:

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

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008.3-jquery.html

----

## jQuery Events

Events are actions that happen in the browser. jQuery allows you to bind functions to events that happens in the invent.

Event types:<!--- .element: class="fragment" data-fragment-index="1" -->

* ready<!--- .element: class="fragment" data-fragment-index="2" -->
* hover<!--- .element: class="fragment" data-fragment-index="3" -->
* click<!--- .element: class="fragment" data-fragment-index="4" -->

----

## Why Events?

Up to this point, we have manually invoked functions. With jQuery events, we can bind functions to actions that occur in the browser.

Examples:<!--- .element: class="fragment" data-fragment-index="1" -->

* Once the Document has loaded, preload popular assets to improve latency<!--- .element: class="fragment" data-fragment-index="2" -->
* On hover over button, show tooltip with additional info<!--- .element: class="fragment" data-fragment-index="3" -->
* On click of button, show contact form in modal<!--- .element: class="fragment" data-fragment-index="4" -->

----

## jQuery Hover (event)
<img src="img/jq-hover.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## Functions as variables

<pre><code data-trim class="javascript">
$("mySelector").hover(function() {
    // hover in statement
  }, function() {
    // hover out statement
  }
);
</code></pre>

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

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008.4-jquery.html

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

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008.5-jquery.html

----

## jQuery Animations

jQuery animations allow you to add visual effects to the browser with JavaScript. There are a number of jQuery animations, but will go over a commonly used one called show()

----

## jQuery Show

<img src="img/jq-show.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## jQuery Show (example)

<pre><code data-trim class="javascript">
$("mySelector").show(300)
</code></pre>

* The first parameter is the duration of the animation (i.e. how long until the element is showed).<!--- .element: class="fragment" data-fragment-index="1" -->
* An option second parameter can passed it. It has to be a function, or callback for when the animation is complete.<!--- .element: class="fragment" data-fragment-index="2" -->

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008.6-jquery.html

----

## Code Along

SEA-FEWD7: /Week_04_Intro_Programming/
07_intro_programming/starter_code/color_scheme_switcher

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

## Lab

SEA-FEWD7: Week_04_Intro_Programming/
Assignment/jquery_dom_selector_practice

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Conditions

----

##Conditional Syntax

```
if (condition is true) {  
  // Do cool stuff
}
```

----

##Conditional Syntax

```
if (condition is true) {
  // Do cool stuff
} else {
  // Do other cool stuff
}	
```

----

##Conditional Syntax

<pre><code data-trim class="javascript">
var topic = "JS";

if (topic == "JS") {
  console.log("You're learning JavaScript");
} else if (topic == "JavaScript") {
  console.log("You're still learning JavaScript");
} else {
  console.log("You're learning something else");
}
</code></pre>

----

##Multiple Conditions

You can check multiple conditions by using the AND (**&&**) or the OR (**||**) operators.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if (name == "GA" && password == "YellowPencil") {
  // Allow access to internet
}

if (day == "Tuesday" || day == "Thursday"){
  // We have class today
}
</code></pre>

----

##The Truth Table

AND operator:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if (name == "GA" && password == "YellowPencil") {
	// Allow access to internet
}
</code></pre>

----

##The Truth Table

![](img/and_table.png)

----

##The Truth Table

OR operator:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if (day == "Tuesday" || day == "Thursday") {
	// We have class today
}
</code></pre>

----

##The Truth Table


![](img/or_table.png)

----

## Lab

SEA-FEWD5: Week_05_JS_ComputerScience/
09_variables_conditionals/starter_code

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

## Learning Ojectives

* Describe JavaScript<!--- .element: class="fragment" data-fragment-index="1" -->
* Create a JS Function<!--- .element: class="fragment" data-fragment-index="2" -->
* Describe jQuery<!--- .element: class="fragment" data-fragment-index="3" -->
* Identify 2 jQuery events<!--- .element: class="fragment" data-fragment-index="4" -->
* Identify 2 jQuery animations<!--- .element: class="fragment" data-fragment-index="5" -->
* Write an IF/ELSE condition<!--- .element: class="fragment" data-fragment-index="6" -->

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
