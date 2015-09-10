<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## for statements and Closure

Evan Johnson + Derek Fons

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->for statement
* <!--- .element: class="fragment" data-fragment-index="3" -->Lab
* <!--- .element: class="fragment" data-fragment-index="4" -->AJAX
* <!--- .element: class="fragment" data-fragment-index="5" -->Lab
* <!--- .element: class="fragment" data-fragment-index="6" -->Closure
* <!--- .element: class="fragment" data-fragment-index="7" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what Scope is in JavaScript
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe how to shadow a variable with Scope
* <!--- .element: class="fragment" data-fragment-index="3" -->Describe what a for statement is
* <!--- .element: class="fragment" data-fragment-index="4" -->Identify the 3 parameters/statements a for loop takes
* <!--- .element: class="fragment" data-fragment-index="5" -->Describe what Closure is

---

## Review

----

### Code Academy

How's it going?

----

### Final Project

How did the wireframes go?

----

### InstaSearch

Anyone work on InstaSearch?

----

## Scope

----

### Function Scope

What will the two console log statements do below?

<pre><code data-trim class="javascript">
var myFunction = function() {
  var workshop = "Intermediate JavaScript and jQuery";
  console.log(workshop);    
}

console.log(workshop);      
</code></pre>

----

### Global Scope

What are two ways to declare a global variable?

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var location = null;        // global variable
var myFunction = function() {
  var location = "Seattle"; // local variable to the myFunction scope
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="javascript">
var myFunction = function() {
  location = "Hawaii";
}
</code></pre>

----

### Global Scope

Why should we avoid using the global scope when possible?

----

### Principle of Least Privilege

> This principle states that in design of software, such as the API for a module/object, you should only expose only what is minimally necessary, and hide everything else.

----

### IIFE or Self-Invoked Function

What is an Immediately-Invoked Function Expression (aka self-invoked anonymous function)

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
(function IIFE() {
  // local variable to the IIFEE function scope
  var workshop = "Intermediate JavaScript & jQuery";
})();

// global variable set to the window object
var workshop = "Intermediate JavaScript & jQuery";
</code></pre>

----

### Lexical Scope

<img src="img/lexical-scope.png" />

----

### Variable Shadowing

How do you shadow a variable?

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
function foo() {
  var a = 1; // local variable set to the scope of foo()
  function bar() {
    var a = 2; // local variable set to the scope of bar()
  }
  bar();
}
foo();
</code></pre>

---

## for statement

----

### for statement 

> The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.

----

### Syntax

<pre><code data-trim class="javascript">
for ([initializer]; [condition]; [final-expression]) {
  // statement
}
</code></pre>

----

### Initializer

<pre><code data-trim class="javascript">
for (var i = 0; [condition]; [final-expression]) {
  // statement
}
</code></pre>

* <!--- .element: class="fragment" data-fragment-index="1" -->An expression or variable declaration
* <!--- .element: class="fragment" data-fragment-index="2" -->Typically used to initialize a counter variable

----

### Condition

<pre><code data-trim class="javascript">
for (var i = 0; i < 9; [final-expression]) {
  // statement
}
</code></pre>

* <!--- .element: class="fragment" data-fragment-index="1" -->An expression (returns true or false)
* <!--- .element: class="fragment" data-fragment-index="2" -->The expression is evaluated before each loop iteration
* <!--- .element: class="fragment" data-fragment-index="3" -->If this expression evaluates to true, the statement is executed
* <!--- .element: class="fragment" data-fragment-index="4" -->If this expression evaluates to false, the loop is exited

----

### Final Expression

<pre><code data-trim class="javascript">
for (var i = 0; i < 9; i++) {
  // statement
}
</code></pre>

* <!--- .element: class="fragment" data-fragment-index="1" -->An expression that is evaluated at the end of each loop iteration
* <!--- .element: class="fragment" data-fragment-index="2" -->This occurs before the next evaluation of the condition
* <!--- .element: class="fragment" data-fragment-index="3" -->Generally used to update or increment the counter variable

----

### Statement

<pre><code data-trim class="javascript">
for (var i = 0; i < 9; i++) {
  console.log(i);
}
</code></pre>

* <!--- .element: class="fragment" data-fragment-index="1" -->A statement or block statement that is executed as long as the condition evaluates to true

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 004.1-for-statement.html<br />
005-arrays.html

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 006-lab.html

---

## AJAX

----

### AJAX

* <!--- .element: class="fragment" data-fragment-index="1" -->AJAX stands for Asynchronous JavaScript and XML

----

### Asynchronous

> When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.

----

### AJAX

* AJAX stands for Asynchronous JavaScript and XML
* <!--- .element: class="fragment" data-fragment-index="1" -->This occurs before the next evaluation of the condition
* <!--- .element: class="fragment" data-fragment-index="2" -->Generally used to update or increment the counter variable

----

### JSON

<pre><code data-trim class="javascript">
data = {
  "key": "value",
  "objectKey": {
    "key1": "objectValue1",
    "key2": "objectValue2"
  },
  "arrayKey": [
    {
      "arrayKey": "arrayValue1"
    },
    "arrayValue2"
  ]
}

data.key;
data.objectKey.key2;
data.arrayKey[0].arrayKey;
data.arrayKey[1];
</code></pre>

----

### jQuery AJAX

<img src="img/jquery.ajax.png" style="border:none;box-shadow:none;"/>

----

<!--- .element: data-background="#CCC" -->

### Lab

http://api.jquery.com/jquery.ajax/

Notes: data, url, success

----

### jQuery Get

<img src="img/jquery.get.png" style="border:none;box-shadow:none; max-height: 500px;"/>

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 007-lab.html<br />
008-arrays.html

---

## Closure

----

### Closure

> Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.

----

### jQuery Callbacks

* <!--- .element: class="fragment" data-fragment-index="1" -->Click
* <!--- .element: class="fragment" data-fragment-index="2" -->Ready
* <!--- .element: class="fragment" data-fragment-index="3" -->Hover
* <!--- .element: class="fragment" data-fragment-index="4" -->AJAX

---

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what Scope is in JavaScript
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe how to shadow a variable with Scope
* <!--- .element: class="fragment" data-fragment-index="3" -->Describe what a for statement is
* <!--- .element: class="fragment" data-fragment-index="4" -->Identify the 3 parameters/statements a for loop takes
* <!--- .element: class="fragment" data-fragment-index="5" -->Describe what Closure is

----

### Final Project

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
