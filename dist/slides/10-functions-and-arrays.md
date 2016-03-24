<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Functions

Brian Cama & Steve Minor

---


##Review

---

##Functions

#### W3Schools Definition

> A JavaScript function is a block of code designed to perform a
> particular task. A JavaScript function is executed when "something"
> invokes it (calls it).

----

##Functions Syntax

![](img/functions_syntax.png)

----

## Invoke (JS)

> To initiate a block of code, that would otherwise not be executed.

----

##Invoking Functions

![](img/function_calls.png)

----

##Function Arguments

![](img/argument_syntax.png)

----


##Function Arguments



![](img/function_call_argument.png)

----

##Return Functions

* <!--- .element: class="fragment" data-fragment-index="1" -->So far our functions have simply performed some action that made a change(displayed a new number, alter our html)
* <!--- .element: class="fragment" data-fragment-index="2" -->In programming we call this a side effect.
* <!--- .element: class="fragment" data-fragment-index="3" -->What if we want our function to actually return us a value?

----

##The Return Syntax

<pre><code data-trim class="javascript">return [[expression]];</code></pre>

----

##Return Statements

When a return statement is called in a function, the execution of the function is stopped. 
<pre><code data-trim class="javascript">function counter(num) {
      var count = num;
      if (count === 5) {          
        return;
      }
      //This statement is not run when count is equal to 5
      console.log("This number is not 5");
}</code></pre>

----

This function will return the square of it's argument(x). Assuming x is a number.

<pre><code data-trim class="javascript">function square(x) {
   return x * x;
}</code></pre>

You can then invoke the function to see it in action.

<pre><code data-trim class="javascript">//get the square of 4 and store it in a variable
	var squareTwo = square(2);
	console.log(squareTwo); // => 4
}</code></pre>

----

![](img/code_along.png)
##Cash Register

---


##Anonymous Functions

An anonymous function is a function that was declared without any named identifier to refer to it.

----

##Normal Declaration

In JavaScript we make a normal "Named Function" like so.
<pre><code>function hello() {
  alert('Hello world');
}

hello();</code></pre>

----

##Anonymous Function

We can also use an anonymous function and then assign it to a variable. 

<pre><code>var twoPlusTwo = function(){
    alert(2 + 2);
};
twoPlusTwo(); //=> 4</code></pre>

----

##Callbacks

We can also use anonymous functions within other functions (a function accepting another function as an argument).

<pre><code>//Note that the item in the click method's parameter is a function, not a variable.​
​//This item is a callback function
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
});</code></pre>

----

![](img/code_along.png)
##Annonymous Cash Register

---

![](img/exercise_icon_md.png)
##Temp Converter

---

##Arrays Collections


<img src="img/accordian.jpg" style="border:none; background: transparent; box-shadow:none;" />


----


##Arrays

What if we had a collection of images that we wanted to display to the screen one at a time? 

How could we store all the images? 

----


##Arrays

What is an array?

----



##Declaring Arrays

var myArr = new Array();

*	declaring an empty array using the Array constructor.

----


##Declaring Arrays

var myArr = [ ];

*	declaring an empty array using literal notation.
	
----

##Declaring Arrays

myArr = ['Hello', 54.3, true];

*	Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];
*	Elements can contain strings, numbers, booleans, and more.
	

----

##Declaring Arrays
	
	
If you leave a blank spot in an array it creates a blank shelf space (undefined) placeholder.

----


##Arrays Indexing

<img src="img/array_index_diagram.png" style="border:none; background: transparent; box-shadow:none;" />



----


##Arrays Indexing

Array elements can be fetched by their index number (starts from 0).

	myArr = ['Hello', , 54.3, true];

	console.log(myArr[0]); //prints Hello
	console.log(myArr[1]); //prints undefined
	console.log(myArr[2]); //prints 54.3
	console.log(myArr[3]); //prints true
	
----


##Arrays Indexing

We can insert new values into any space in the array using the positions index.

	myArr[1] = 'Stuff';


----


##Arrays Indexing

We can overwrite all the elements of an array simply by giving the array new values or by setting an array equal to a different array.
	
	var fruits = ['Apples', 'Oranges', 'Pears', 'Bananas'];
	var myArr=[1,2,3];
	myArr = fruits;
	
	console.log(myArr); //prints Apples, Oranges, Pears, Bananas

----

##Array Length

What if I would like to know how long my array is (how many elements)?
	
	console.log(myArr.length); //prints 4

----

<img src="img/code_along.png" style="border:none; background: transparent; box-shadow:none;" />

##Arrays

---

## Closing

----

### Homework

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.