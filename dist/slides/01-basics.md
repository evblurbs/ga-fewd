<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Basics

## GitHub and HTML

Evan Johnson + Rick Chen

Note: Give overview of course. Set class expectations.

---

## Agenda

* <!--- .element: class="fragment" data-fragment-index="1" -->Course Website
* <!--- .element: class="fragment" data-fragment-index="2" -->GitHub
  * <!--- .element: class="fragment" data-fragment-index="3" -->Review
  * <!--- .element: class="fragment" data-fragment-index="4" -->Github Lab
* <!--- .element: class="fragment" data-fragment-index="5" -->HTML
  * <!--- .element: class="fragment" data-fragment-index="6" -->Tags Review
  * <!--- .element: class="fragment" data-fragment-index="7" -->Structural Reading w/ Understanding
  * <!--- .element: class="fragment" data-fragment-index="8" -->HTML Code Along
  * <!--- .element: class="fragment" data-fragment-index="9" -->HTML Lab

---

## Learning Objective

* <!--- .element: class="fragment" data-fragment-index="1" -->Describe one of the many Git and GitHub terms/concepts (i.e. clone, fork, repository, etc.)
* <!--- .element: class="fragment" data-fragment-index="2" -->Describe what an HTML tag is
* <!--- .element: class="fragment" data-fragment-index="3" -->Demonstrate how to add an attribute to an HTML tag
* <!--- .element: class="fragment" data-fragment-index="4" -->Recall three types of HTML tags

---

## Course Website

---

## GitHub

<img src="/img/Octocat.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

### What is GitHub?

* <!--- .element: class="fragment" data-fragment-index="1" -->**GitHub** is a *platform*. **Git** is a *version control system*.
* <!--- .element: class="fragment" data-fragment-index="2" -->**GitHub** stores files like Dropbox or Google Drive.
* <!--- .element: class="fragment" data-fragment-index="3" -->**Git/GitHub** keep a history of changes made to your project's files.
* <!--- .element: class="fragment" data-fragment-index="4" -->**GitHub** makes it easy to share code with other people.
* <!--- .element: class="fragment" data-fragment-index="5" -->**Git** was designed to allow multiple developers work on the same projec at the same time.

----

### Why GitHub?

* <!--- .element: class="fragment" data-fragment-index="1" -->Reverting
* <!--- .element: class="fragment" data-fragment-index="2" -->Collaborating
* <!--- .element: class="fragment" data-fragment-index="3" -->Stats
* <!--- .element: class="fragment" data-fragment-index="4" -->Feedback

----

### Git/GitHub Vocabulary

* <!--- .element: class="fragment" data-fragment-index="1" -->**git** - a version control program that saves the state of your project's files and folders; basically, it takes a "snapshot" of what all your files look like at a moment and stores a reference to that "snapshot"
* <!--- .element: class="fragment" data-fragment-index="2" -->**repository** - a central location in which data is stored and managed
* <!--- .element: class="fragment" data-fragment-index="3" -->**clone** - download data from the cloud to your local machine (laptop, computer, etc.)
* <!--- .element: class="fragment" data-fragment-index="4" -->**fork** - copy one repository into another (both data sets live on the cloud)
* <!--- .element: class="fragment" data-fragment-index="5" -->**commit** - save a version of your project to git

----

### Commits

<img src="/img/timeline.jpg" style="border:none;" />

Analogous to a timeline, or the chapters in a story.

----

### Commit Log

<img src="/img/commit-log.png" style="border:none;" />

----

### Clone

Download data from the cloud to your local machine (laptop, computer, etc.). **The code on your local machine is typically synced later on with the code on the cloud.**

----

### Fork

Similar to clone, forking a repository copies data. Instead of copying it from the cloud to your local machine, it copies it from one repository in the cloud to another one in the cloud.

<img src="/img/git-fork.png" style="border:none;box-shadow:none;height:300px;" />

----

### Collaborating with Git

1. <!--- .element: class="fragment" data-fragment-index="1" -->**Clone** the **repository**
2. <!--- .element: class="fragment" data-fragment-index="2" -->Make changes locally
3. <!--- .element: class="fragment" data-fragment-index="3" -->**Add** and **commit** changes
4. <!--- .element: class="fragment" data-fragment-index="4" -->**Push** local commits to central **repository**

Note: GitHub's collaborative process can work many different ways, but this is the most common. Remember: "Clone" means that we are copying our GitHub repository from the cloud and saving it as a local folder on our computer. Engineers typically create new branches for certain features or portions of the code they will work on, but we won't be creating branches in this class in this class.

----

### GitHub Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

Note: It is time to setup our GitHub repository for the work we will be doing today.

---

## HTML

<img src="/img/html5.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

### HTML vs HTML5

HTML5 is HTML with a few additions. The Doctype tells you if the page is HTML5 ready.

<pre><code data-trim class="html">
&lt;!DOCTYPE html&gt;
</code></pre>

----

### HTML History

<img src="/img/html-timeline.jpg" style="border:none; background: transparent;" />

----

### Tags

<img src="/img/tags.png" style="border:none; background: transparent;" />

----

### Tag Attributes

<img src="/img/tags_attributes.png" style="border:none; background: transparent;" />

Note: What kind of attributes would a person tag have?

----

### Content Tags

Heading Elements

<pre><code data-trim class="html">
&lt;h1&gt;Largest Heading&lt;/h1&gt;
&lt;h2&gt; . . . &lt;/h2&gt;
&lt;h3&gt; . . . &lt;/h3&gt;
&lt;h4&gt; . . . &lt;/h4&gt;
&lt;h5&gt; . . . &lt;/h5&gt;
&lt;h6&gt;Smallest Heading&lt;/h6&gt;
</code></pre>

----

### Content Tags

Text Elements

<pre><code data-trim class="html">
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;span&gt;This is a span.&lt;/span&gt;
</code></pre>

----

### Content Tags

Unordered List

<pre><code data-trim class="html">
&lt;ul&gt; . . . &lt;/ul&gt;
</code></pre>

----

### Content Tags

Unordered List Items

<pre><code data-trim class="html">
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
&lt;/ul&gt;
</code></pre>


----

### Content Tags

Anchor Tags (Links)

<pre><code data-trim class="html">
&lt;a href="link"&gt;Link text&lt;/a&gt;
</code></pre>

----

### HTML Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

Note: Magazine and newspaper. Have them declare tags they know, and ask about one's they don't know.

----

### HTML Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

Note: General Assembly Press Release

----

### HTML Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

Note: Just HTML of Cookie Recipe

---

## Homework

* <!--- .element: class="fragment" data-fragment-index="1" -->Push/sync cookie recipe to GitHub
  * <!--- .element: class="fragment" data-fragment-index="2" -->We'll walk through syncing what you have now as a demonstration
* <!--- .element: class="fragment" data-fragment-index="3" -->If you feel comfortable with CSS, feel free to add styling to the
  Cookie Recipe. If not, no worries, we will go over CSS next class.

----

## Learning Objective

* Describe one of the many Git and GitHub terms/concepts (i.e. clone, fork, repository, etc.)
* Describe what an HTML tag is
* Demonstrate how to add an attribute to an HTML tag
* Recall three types of HTML tags

----

### Exit Tickets

Give us feedback! Let us know what we're doing well at, and more
importantly, what we can improve at.
