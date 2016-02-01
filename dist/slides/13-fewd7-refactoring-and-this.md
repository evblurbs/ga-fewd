<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Refactoring and this

Evan Johnson + Rick Chen

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Refactoring
* <!--- .element: class="fragment" data-fragment-index="3" -->Lab
* <!--- .element: class="fragment" data-fragment-index="4" -->This
* <!--- .element: class="fragment" data-fragment-index="5" -->Lab
* <!--- .element: class="fragment" data-fragment-index="6" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what pseudocode is
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe why refactoring is important

---

## Review

----

### Final Project

Anyone make any progress?

----

## Scope

What is it?

----

## Shadowing

How do you shadow a variable?

----

### Global Scope

How do you declare Global variables?

----

### Global Scope

Why should we avoid using the global scope when possible?

----

### Principle of Least Privilege

What is it?

----

### for statement

What are the three statements required?

---

## Refactoring

----

### Why Refactoring?

* <!--- .element: class="fragment" data-fragment-index="1" -->Makes code more efficient without changing functionality
* <!--- .element: class="fragment" data-fragment-index="2" -->Makes code more maintainable
* <!--- .element: class="fragment" data-fragment-index="3" -->Makes code easier to read
* <!--- .element: class="fragment" data-fragment-index="4" -->To reduce or eliminate redundancy

----

### CSS Refactor

* <!--- .element: class="fragment" data-fragment-index="1" -->Remove inline styling
* <!--- .element: class="fragment" data-fragment-index="2" -->Replace repeated styles with classes
* <!--- .element: class="fragment" data-fragment-index="3" -->Rename classes/IDs for readability

----

### CSS Refactor

* <!--- .element: class="fragment" data-fragment-index="1" -->Organize CSS
* <!--- .element: class="fragment" data-fragment-index="2" -->Group by section
* <!--- .element: class="fragment" data-fragment-index="3" -->Order by precedence (tag selectors at top, id selectors at bottom)

----

### CSS Refactor

* <!--- .element: class="fragment" data-fragment-index="1" -->Create classes for large CSS changes in JS
* <!--- .element: class="fragment" data-fragment-index="2" -->Remove unnecessary CSS

----

### JS Refactor

* <!--- .element: class="fragment" data-fragment-index="1" -->Use functions
* <!--- .element: class="fragment" data-fragment-index="2" -->Use vaariables
* <!--- .element: class="fragment" data-fragment-index="3" -->Use arrays

----

### JS Refactor

* <!--- .element: class="fragment" data-fragment-index="1" -->Combine jQuery selectors
* <!--- .element: class="fragment" data-fragment-index="2" -->Combine jQuery property changes into objects
* <!--- .element: class="fragment" data-fragment-index="3" -->Chain jQuery function calls

----

### Code Along

/Week_06_Review_Refactor/12_refactor
/starter_code/refactor/

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

## this

----

### This

> The JavaScript this keyword is used within any function scope or the global scope, and in each scope it receives a different value. The value of this inside a function, effectively depends on the object which called it.

----

### Javascript Object

<pre><code data-trim class="javascript">
var person = {
  firstName: 'John',
  lastName: 'Doe',
  welcomeMessage: function() {
    return this.firstName + ' ' + this.lastName;
    // same as return person.firstName + ' ' + person.lastName;
  }
};

</code></pre>

----

### jQuery Button

<pre><code data-trim class="javascript">
$('.button').click(function(event){
  var thisButton = $(this);
  thisButton.toggleClass('active');
});
</code></pre>

---

## Lab

---

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what pseudocode is
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe why refactoring is important

----

### Final Project

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
