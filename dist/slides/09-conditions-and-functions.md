<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Variables and Conditionals

Brian Cama & Sarah McAlear

---

## Learning Objectives


*Define variables and identify best cases to use them.
*Differentiate between strings, numbers and booleans.
*Apply conditionals to change the programs control flow.

---

## Review

----

###DOM Selectors

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

##Variables

What are variables?

----


##Variables

* We can tell our program to remember values for us to use later on. 

* The action of saving a value to memory is called assignment

* The entity we use to store the value is called a variable

----


##Variables

* The action of getting the value from a variable is called accessing the variable

* We will use all the above techniques to store values into variables, and generate new values using existing variables

----

##Variables Declaration

<!--- .element: class="fragment" data-fragment-index="1" -->Declaration: <pre><code data-trim class="javascript">var age;</pre></code>

<!--- .element: class="fragment" data-fragment-index="2" -->Assignment: <pre><code data-trim class="javascript">age = 21;</pre></code>

<!--- .element: class="fragment" data-fragment-index="3" -->Both at the same time: <pre><code data-trim class="javascript">var age = 21;</pre></code>

----

##Variable Re-Assignment

<pre><code data-trim class="javascript">var name = "Jo";
name = Amir;</code></pre>

Note:

name is now Amir.


----

##Variable Conventions

* Variables start with a lower case letter
* If they contain multiple words, subsequent words start with an upper case letter.

<pre><code data-trim class="javascript">var numberOfStudents = 10;
</code></pre>

---

##Variables and Data Types 

What can you store in a variable?

----

##Data Types

The types of different values we support include:
  
* __String__ text
* __int__, __float__ numbers
* __Boolean__ true or false

----

##Strings

* Stores textual information
* String literal is surrounded by quotes

```"How is the weather today?"```

```'Warm'```

----

##Strings

Double vs single quoted strings:

'They "purchased" it'

"It's a beautiful day"

----

##Strings
Escaping
"They \"purchased\" it"

'It\'s a beautiful day'

----

##Conversion: String To Number

<pre><code data-trim class="javascript">var intString = "4";
var intNumber = parseInt(intString, 10);
var floatString = "3.14159";
var floatNumber = parseFloat(floatString);</code></pre>

Note:
Why would you need to convert datatypes?

----

##Conversion: Number To String

<pre><code data-trim class="javascript">var number = 4;
number.toString(); // => "4"
</code></pre>

__OR__

<pre><code data-trim class="javascript">number + ""; //=> "4"</code></pre>

Note:
Why would you need to convert datatypes?

----

##Numbers

Represent numerical data

integers:         42

float:      3.14159265

----

##Numbers

Signed

int:         +6

float:      -8.2

Can perform arithmetic on number data types

----


##Arithmetic In JavaScript

<img src="img/arithmetic.jpg" style="border:none; background: transparent; box-shadow:none;" />

---

###Conditional Syntax

<pre><code data-trim class="javascript" contenteditable>
if (condition is true) {  
  // Do cool stuff
}

else {
  // Do other cool stuff
} 
</pre></code>

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

FEWD-SEA-6: Week_05_JS_ComputerScience/
09_variables_conditionals/starter_code

<img src="img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Closing

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.

----

### Final Project

----


