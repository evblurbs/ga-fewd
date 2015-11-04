<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Arrays and "this"

Brian Cama & Sarah McAlear

---

##Learning Objectives

* Define arrays and collections
* Practice using indexes to access array elements
* Describe the concept of "this" as it applies within jQuery anonymous functions
* Apply JS and jQuery knowledge to program a carousel.

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

### Array Code Along

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

##Iterate Over Array

Allows you to run code using each element from the array as a value
Syntax:

  Array.forEach

----

##Using forEach

  var fruits=[“Banana”,”Apple”,”Pear”]
    fruits.forEach(function(element,index){
    console.log(element,index);
  });

Note:
Element is the item from the array
Index is the item’s position in the array
As always, code we want to execute goes between curly braces

----

### forEach Code Along

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

---

##Keyword: "This"

jQuery: “this” refers to the selected object

----


##Topic

How about this code?

```
$(“p”).on(“click”,function(e){
    $(this).fadeOut(500);
});
```

Rule of thumb (ROT): If I don’t know what thing will be acted on, then I should consider using “this”


----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />
##Color Scheme Refactor

---

##Carousel Lab

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

## Exit Tickets

Please give us feedback, comments, questions or concerns.

----

##Homework


