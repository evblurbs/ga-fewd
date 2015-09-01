<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Conditions, Functions, and Arrays

Evan Johnson + Derek Fons

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Review
* <!--- .element: class="fragment" data-fragment-index="2" -->Conditions
* <!--- .element: class="fragment" data-fragment-index="3" -->Lab
* <!--- .element: class="fragment" data-fragment-index="4" -->Functions
* <!--- .element: class="fragment" data-fragment-index="5" -->Code Along
* <!--- .element: class="fragment" data-fragment-index="6" -->Arrays
* <!--- .element: class="fragment" data-fragment-index="7" -->Code Along
* <!--- .element: class="fragment" data-fragment-index="8" -->Lab
* <!--- .element: class="fragment" data-fragment-index="9" -->Closing

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Write an IF/ELSE condition
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe how to write a function
* <!--- .element: class="fragment" data-fragment-index="3" -->Write a Function that accepts 3 parameters
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe what an Array is and what it can be used for
* <!--- .element: class="fragment" data-fragment-index="5" -->Create an empty Array
* <!--- .element: class="fragment" data-fragment-index="6" -->Create an Array with data

---

## Review

----

### jQuery Selectors Challenge

How did it go?

----

### Startup MatchMaker

How did it go?

---

## Conditions

----

###Conditional Syntax

```
if (condition is true) {  
  // Do cool stuff
}
```

----

###Conditional Syntax

```
if (condition is true) {
  // Do cool stuff
} else {
  // Do other cool stuff
}	
```

----

###Conditional Syntax

<pre><code data-trim class="javascript" contenteditable>
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

###Multiple Conditions

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

###The Truth Table

AND operator:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if (name == "GA" && password == "YellowPencil") {
	// Allow access to internet
}
</code></pre>

----

###The Truth Table

![](img/and_table.png)

----

###The Truth Table

OR operator:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if (day == "Tuesday" || day == "Thursday") {
	// We have class today
}
</code></pre>

----

###The Truth Table


![](img/or_table.png)

----

### Lab

SEA-FEWD5: Week_05_JS_ComputerScience/
09_variables_conditionals/starter_code

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Functions

----

### Functions Syntax

![](img/functions_syntax.png)

----

### Function Calls

![](img/function_calls.png)

----

### Function Arguments

![](img/argument_syntax.png)

----

### Function Arguments

![](img/function_call_argument.png)

----

### Return Functions

----

###Organizing Function 

Where do you put functions

----

### Code Along

SEA-FEWD5: /Week_05_JS_ComputerScience/
10_functions/starter_code/cash_register

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Anonymous Functions

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

## Closing

----

### Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Write an IF/ELSE condition
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe how to write a function
* <!--- .element: class="fragment" data-fragment-index="3" -->Write a Function that accepts 3 parameters
* <!--- .element: class="fragment" data-fragment-index="4" -->Describe what an Array is and what it can be used for
* <!--- .element: class="fragment" data-fragment-index="5" -->Create an empty Array
* <!--- .element: class="fragment" data-fragment-index="6" -->Create an Array with data

----

### Final Project

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
