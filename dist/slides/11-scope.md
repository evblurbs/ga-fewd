<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Scope and for statements

Evan Johnson + Derek Fons

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Lab
* <!--- .element: class="fragment" data-fragment-index="3" -->Scope

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what Scope is in JavaScript
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe how to shadow a variable with Scope
* <!--- .element: class="fragment" data-fragment-index="3" -->Describe how to reassign a variable with Scope

---

## Review

----

### Code Academy

How's it going?

----

### Final Project

How did the wireframes go?

----

### Lab

Ratomgs App or RPS

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Scope

----

### Scope

> Scope is the set of rules that determines where and how a variable (identifier) can be looked-up

Kyle Simpson, You Don't Know JS: Scope & Closure

----

### JavaScript Engine and Compiler

**Engine**: Responsible for the execution of our JavaScript program.

**Compiler**: Engine's assistant; handles parsing and code generation.

* <!--- .element: class="fragment" data-fragment-index="1" --> Tokenizing/Lexing
* <!--- .element: class="fragment" data-fragment-index="2" --> Parsing

----

### Scope: Another Assistant to the JS Engine

> [Scope] collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

----

### Function Scope

Every variable defined in a function, is available for the entirety of that function.

<pre><code data-trim class="javascript">
var myFunction = function() {
  var workshop = "Intermediate JavaScript and jQuery";
  console.log(workshop);    // logs "Intermediate JavaScript.."
}

console.log(workshop);      // ReferenceError: workshop is not defined
</code></pre>

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 001.1-scope.html

----

### Global Scope

Everything not defined inside a scope (i.e. function scope) will become a global variable.

<pre><code data-trim class="javascript">
var location = null;        // global variable
var myFunction = function() {
  var location = "Seattle"; // local variable to the myFunction scope
}
</code></pre>

----

### Global Scope

If you do not use the **var** keyword, you will create a global variable regardless of where you define it.

<pre><code data-trim class="javascript">
var myFunction = function() {
  location = "Hawaii";
}
</code></pre>

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 001.2-scope.html

----

### Global Scope

Why should we avoid using the global scope when possible?

* <!--- .element: class="fragment" data-fragment-index="1" -->Your variables, functions, and objects might class with the global variables JavaScript provides.
* <!--- .element: class="fragment" data-fragment-index="2" -->We might overwrite some of the default JavaScript behaviors on accident (i.e. *location*)

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 001.3-scope.html

----

### Global Scope

Why should we avoid using the global scope when possible?

* Your variables, functions, and objects might class with the global variables JavaScript provides.
* We might overwrite some of the default JavaScript behaviors on accident (i.e. *location*)
* <!--- .element: class="fragment" data-fragment-index="1" -->Our variables can clash with themselves!

----

### Principle of Least Privilege

> This principle states that in design of software, such as the API for a module/object, you should only expose only what is minimally necessary, and hide everything else.

----

### Principle of Least Privilege

In other words, our *student* object doesn't need to know the *name* of our *workshop* object, and vice versa.

----

## How do we make sure our functions are scoped to a function?

* <!--- .element: class="fragment" data-fragment-index="1" -->Immediately-Invoked Function Expression (aka self-invoked anonymous function)
* <!--- .element: class="fragment" data-fragment-index="2" -->By wrapping our code in an IIFE, we remove our variable declarations from the Global Scope
* <!--- .element: class="fragment" data-fragment-index="3" -->We are able to use Function Scope to avoid name clashing, manipulating the global objects, and more.

----

## IIFE to the Rescue

<pre><code data-trim class="javascript">
(function IIFE() {
  // local variable to the IIFEE function scope
  var workshop = "Intermediate JavaScript & jQuery";
})();

// global variable set to the window object
var workshop = "Intermediate JavaScript & jQuery";
</code></pre>

* <!--- .element: class="fragment" data-fragment-index="1" -->We turn a function into an expression by wrapping it in a pair of ()
* <!--- .element: class="fragment" data-fragment-index="2" -->The second pair of () executes the function

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 001.4-scope.html

----

<!--- .element: data-background="#CCC" -->

## Lab

Files: project/instasearch.html,<br />project/js/instasearch.view.js

----

### Lexical Scope

<img src="img/lexical-scope.png" />

----

### Scope Closure

* <!--- .element: class="fragment" data-fragment-index="1" -->If one function is declared inside another, the nested function has access to all variables declared in the parent function
* <!--- .element: class="fragment" data-fragment-index="2" -->Function nesting can go multiple levels. A nested function has access to all variables declared in it's parent functions - i.e. parent function, grandparent function, great grandparent function, and so on.
* <!--- .element: class="fragment" data-fragment-index="3" -->The Global Scope is an example of this - all functions have access to global variables, or variables declared in the Global Scope.

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 003.1-lexical.html

----

### Lexical Scope

* <!--- .element: class="fragment" data-fragment-index="1" -->Assistant to the JavaScript Engine: helps the Engine look up variables
* <!--- .element: class="fragment" data-fragment-index="2" -->Starts at the Current Scope, and works it's way up to the Global Scope

----

### Lexical Scope

<img src="img/lexical-scope2.png" style="max-height:500px;" />

----

### Variable Shadowing

Since the Scope will stop looking for a variable once it finds it, you can override variables declared in a parent scope by creating another local variable.

<pre><code data-trim class="javascript">
function foo() {
  var a = 1; // local variable set to the scope of foo()
  function bar() {
    var a = 2; // local variable set to the scope of bar()
  }
  bar();
}
foo();
</code></pre>

----

### Reassign Variables

Exactly how we reassigned the global variable *location* earlier, you can reassign local variables inside a nested scope.

<pre><code data-trim class="javascript">
function foo() {
  var a = 1; // local variable set to the scope of foo()
  function bar() {
    a = 2; // local variable set to the scope of foo()
  }
  bar();
}
foo();
</code></pre>

----

<!--- .element: data-background="#CCC" -->

### Lab

File: 003.2-lexical.html

---

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what Scope is in JavaScript
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe how to shadow a variable with Scope
* <!--- .element: class="fragment" data-fragment-index="3" -->Describe how to reassign a variable with Scope

----

### Final Project

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
