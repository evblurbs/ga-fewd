<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Conditions, Functions, and Arrays

Evan Johnson + Derek Fons

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Arrays
* <!--- .element: class="fragment" data-fragment-index="3" -->Lab (Arrays)
* <!--- .element: class="fragment" data-fragment-index="4" -->Lab (RPS)
* <!--- .element: class="fragment" data-fragment-index="5" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what an Array is
* <!--- .element: class="fragment" data-fragment-index="2" -->Create an empty Array
* <!--- .element: class="fragment" data-fragment-index="3" -->Create an Array with data
* <!--- .element: class="fragment" data-fragment-index="4" -->Calculating the length of Arrays
* <!--- .element: class="fragment" data-fragment-index="5" -->Describe how to access items inside an Arrays

---

## Review

----

### Code Academy

How's it going?

----

### Cash Register

Any questions on this?

----

### Student Choice

What would you like to review?

* Functions
* Objects
* jQuery
* jQuery Events
* jQuery DOM Manipulations
* Arithmetic Operators
* Data Types
* Variables

---

## Arrays

----

### Arrays

What is an array?

----

### Arrays Collections

<img src="img/accordian.jpg" style="border:none;box-shadow:none;" />

----

### Declaring Arrays

Declaring an empty array using the Array constructor.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var myArr = new Array();
</code></pre>

----

### Declaring Arrays

Declaring an empty array using literal notation.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var myArr = [];
</code></pre>

----

### Declaring Arrays

* <!--- .element: class="fragment" data-fragment-index="1" -->Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];
* <!--- .element: class="fragment" data-fragment-index="2" -->Elements can contain strings, numbers, booleans, and more.

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="javascript">
var myArr = ['Hello', 54.3, true];
</code></pre>

----

### Declaring Arrays

If you leave a blank spot in an array it creates a blank shelf space (undefined) placeholder.

----

### Arrays Indexing

<img src="img/array_index_diagram.png" style="border:none;box-shadow:none;background:transparent;" />


----

### Arrays Indexing

Array elements can be fetched by their index number (starts from 0).

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="javascript">
var myArr = ['Hello', , 54.3, true];

console.log(myArr[0]); // prints Hello
console.log(myArr[1]); // prints undefined
console.log(myArr[2]); // prints 54.3
console.log(myArr[3]); // prints true
</code></pre>

----

### Arrays Indexing

We can insert new values into any space in the array using the positions index.

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="javascript">
var myArr = ['Hello', , 54.3, true];

console.log(myArr[1]); // prints undefined

myArr[1] = 'Stuff';

console.log(myArr[0]); // prints Hello
console.log(myArr[1]); // prints Stuff
console.log(myArr[2]); // prints 54.3
console.log(myArr[3]); // prints true
</code></pre>

----

### Array Length

What if I would like to know how long my array is (how many elements)?

<pre><!--- .element: class="fragment" data-fragment-index="3" --><code data-trim class="javascript">
var myArr = ['Hello', 'Stuff', 54.3, true];

console.log(myArr.length); // prints 4
</code></pre>

----

### Code Along

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Lab

SEA-FEWD5: Week_05_JS_ComputerScience/<br />
10a_ advance_arrays/starter_code

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Lab

----

### RPS

<img src="img/rps.png" style="border:none;box-shadow:none;" />

Rock, Paper, Scissor

----

### RPS

<img src="img/rps-screen.png" style="border:none;box-shadow:none;" />

----

### Lab

SEA-FEWD5: Week_05_JS_ComputerScience/<br />
Assignment/rps/starter_code/

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe what an Array is
* <!--- .element: class="fragment" data-fragment-index="2" -->Create an empty Array
* <!--- .element: class="fragment" data-fragment-index="3" -->Create an Array with data
* <!--- .element: class="fragment" data-fragment-index="4" -->Calculating the length of Arrays
* <!--- .element: class="fragment" data-fragment-index="5" -->Describe how to access items inside an Arrays

----

### Final Project

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
