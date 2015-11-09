<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# JavaScript

## Debugging

Brian Cama & Sarah McAlear

---

##Debugging

Why isn't this working?

----


##Debugging

Always start by defining the problem. 

*	“The image is not moving”

*	“None of my code works”

----


##Debugging

This will tell you where to start your hunt

*	Image not moving
	*	find the code that makes the image move

*	None of my code works
	*	Syntax error, check console


----

##Debugging: Level __1__

Check for errors (red text, aligned right) in console
To access debugging console
	
	PC: CTRL+SHIFT+J
	Mac: COMMAND+OPTION+J

Click the error

The location may not be correct but is a good place to start
Ex: Unbalanced brackets or parentheses

----


##Debugging: Level __2__
	
So no red errors but not getting the right answer?
Try console.log

Ex: 

```
var stringOfNames=“”;
[“Bob”,”Joe”].forEach(function(element){
	stringOfNames-=element+”,”;
	console.log(stringOfNames);
});
```

----


##Debugging: Level __3__

*	Use the debugger in Chrome
*	Set a breakpoint
*	Run the code
*	Step through the code until you get to the error
*	Variable values display on the right
*	You can switch to the console to run code or check value of variable

----

##Debugging: Level __4__

Get help!

1.	Try “Your preferred search engine” search
2.	Be ready to clearly articulate the problem (Write out what your problem is)	
3.	If nothing, ask instructor


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
* <!--- .element: class="fragment" data-fragment-index="2" -->Use variables
* <!--- .element: class="fragment" data-fragment-index="3" -->Use arrays

----

### JS Refactor

* <!--- .element: class="fragment" data-fragment-index="1" -->Combine jQuery selectors
* <!--- .element: class="fragment" data-fragment-index="2" -->Combine jQuery property changes into objects
* <!--- .element: class="fragment" data-fragment-index="3" -->Chain jQuery function calls

----