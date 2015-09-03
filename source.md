<section id="themes">
	<h2>Themes</h2>
		<p>
			Set your presentation theme: <br>
			<!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
		</p>
</section>

H:

# Introduction to git

by some [National University of Colombia collaborators](https://github.com/orgs/objetos/people)

H:

# Index

 1. Introduction <!-- .element: class="fragment" data-fragment-index="1"-->
 1. Control flow <!-- .element: class="fragment" data-fragment-index="2"-->
 1. Functions <!-- .element: class="fragment" data-fragment-index="3"-->
 1. Recursion <!-- .element: class="fragment" data-fragment-index="4"-->
 1. Arrays <!-- .element: class="fragment" data-fragment-index="5"-->
 
H:

## Introduction

1. Mathematical facts
1. Program Paradigms

H:

## Control flow

1. Assignments
1. Blocks
1. Choice
2. Loops

H:

## Functions



H:

## Recursion

H:

## References

Stack-overflow
* [Can all iterative algorithms be expressed recursively?](http://stackoverflow.com/questions/2093618/can-all-iterative-algorithms-be-expressed-recursively)
* [Can every recursion be converted into iteration?](http://stackoverflow.com/questions/931762/can-every-recursion-be-converted-into-iteration)
Wikipedia
* [Turing completeness](https://en.wikipedia.org/wiki/Turing_completeness)
* [Programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm)
* [Structured programming](https://en.wikipedia.org/wiki/Structured_programming)
Processing
* [API](https://processing.org/reference/)
* [P5.js](http://p5js.org/)

H:

### Workshop

* (level 1) <!-- .element: class="fragment" data-fragment-index="1"-->
 1. Create a local Git repo to track some source files
 1. Create the program of your choice
 2. Begin to track your program source files with Git
 1. Commit some changes
 1. Use ```git tool``` and/or ```git difftool``` to study some changes
* (level 2) <!-- .element: class="fragment" data-fragment-index="2"-->
 2. Create a branch to test an experimental feature
 3. Merge your ```test branch``` into your ```master branch```
* (level 3) <!-- .element: class="fragment" data-fragment-index="3"-->
 1. Share your repo online using [Git on the server](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols)
 Tip: you may use a [third party hosted option](https://git.wiki.kernel.org/index.php/GitHosting)