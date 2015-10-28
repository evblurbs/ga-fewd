<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Functions

Brian Cama & Sarah McAlear

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



![](img/function_call_argument)

----

##Return Functions

*<!--- .element: class="fragment" data-fragment-index="1" -->So far our functions have simply performed some action that made a change(displayed a new number, alter our html)
*<!--- .element: class="fragment" data-fragment-index="2" -->In programming we call this a side effect
*<!--- .element: class="fragment" data-fragment-index="3" -->What if we want our function to actually return us a value?

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

## Closing

----

### Homework

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
