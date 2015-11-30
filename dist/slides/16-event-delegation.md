<img src="img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Javascript

## Event Delegation

Brian Cama & Sarah McAlear

---

## Learning Objectives

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe Event Delegation

---

## Event Delegation

----

How would you select the `<a>` elements within this unordered list?

```
<ul id="main">
  <li><a href='#1'>Item 1</a></li>
  <li><a href="#2">Item 2</a></li>
  <li><a href="#3">Item 3</a></li>
</ul>
```
<!--- .element: class="fragment" data-fragment-index="1" --><pre><code data-trim class="html">$('#main a').on('click',function(){})</code></pre>


----

## Event Propogation

Any time one of our anchor tags is clicked a 'click' event is triggered. But it doesn't stop there it 'bubbles' up. So it will move up the dom tree and trigger the click event on each of it parent elements. 

----

```
<ul id="main">
  <li><a href='#1'>Item 1</a></li>
  <li><a href="#2">Item 2</a></li>
  <li><a href="#3">Item 3</a></li>
</ul>
```

In this example it would trigger in the following order
`<a> --> <li> --> <ul> --> ... --> <html> --> document root`

----
### Delegated Events

Since we know that events bubble up we can change our code to solve the issue of new elements being added to our html.

----
###Events Delegated Code

```
$('#main').on('click','a',function(){
  //do something here
})
```

We've now moved the 'a' tag from our main selector into the .on() method. The .on() method will listen for the specified event(in this case 'click') and *after* it hears the event, it checks to see if the selector you placed as the second parameter is the triggering element. 
