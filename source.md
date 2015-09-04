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

# Structured programming overview

by some [National University of Colombia collaborators](https://github.com/orgs/objetos/people)

H:

# Index

 1. Introduction <!-- .element: class="fragment" data-fragment-index="1"-->
 1. Control flow <!-- .element: class="fragment" data-fragment-index="2"-->
 1. Functions <!-- .element: class="fragment" data-fragment-index="3"-->
 1. Arrays <!-- .element: class="fragment" data-fragment-index="4"-->
 
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

V:

## Control flow: assignments

What is?

> A process in imperative programming in which different values are associated with a particular variable name as time passes

V:

## Control flow: assignments

In order to:

> The program, in such model, operates by changing its state using successive assignment statements

V:

## Control flow: assignments

Example:

```java
int x = 10; 
float y;
x = 23;
y = 32.4f;
```

V:

## Control flow: assignments

<li class="fragment"> Augmented assignment: ```a = 2*a;``` can be written as: ```a *= 2;```
<li class="fragment"> Chained assignment: ```a = b = c = d = f = 5;```

V:

## Control flow: blocks

The following [code](https://processing.org/reference/curlybraces.html):

```java
int[] a = { 5, 20, 25, 45, 70 };

void setup() {
  size(100, 100);
}

void draw() {
  for (int i=0; i < a.length; i++) {
    line(0, a[i], 50, a[i]);
  }
}
```

V:

## Control flow: blocks

produces:

<div id='curly_id'></div>

V:

## Control flow: Simple choice

The following [code](https://processing.org/reference/if.html):

```java
for (int i = 5; i < height; i += 5) {
  stroke(255);   // Set the color to white
  if (i < 35) {  // When 'i' is less than 35...
    stroke(0);   //...set the color to black
  }
  line(30, i, 80, i);
}
```

V:

## Control flow: Simple choice

produces:

<div id='if_id'></div>

V:

## Control flow: Multiple choice

For [example](https://processing.org/reference/switch.html):

```java
int num = 1;

switch(num) {
  case 0: 
    println("Zero");  // Does not execute
    break;
  case 1: 
    println("One");  // Prints "One"
    break;
}
```

V:

## Control flow: Multiple choice

second [example](https://processing.org/reference/switch.html):

```java
char letter = 'N';

switch(letter) {
  case 'A': 
    println("Alpha");  // Does not execute
    break;
  case 'B': 
    println("Bravo");  // Does not execute
    break;
  default:             // Default executes if the case labels
    println("None");   // don't match the switch parameter
    break;
}
```

V:

## Control flow: Multiple choice

third [example](https://processing.org/reference/switch.html):

```java
// Removing a "break" enables testing
// for more than one value at once

char letter = 'b';

switch(letter) {
  case 'a':
  case 'A': 
    println("Alpha");  // Does not execute
    break;
  case 'b':
  case 'B': 
    println("Bravo");  // Prints "Bravo"
    break;
}
```

V:

## Control flow: For loops

The following [code](https://processing.org/reference/for.html):

```java
for (int i = 0; i < 80; i = i+5) {
  line(30, i, 80, i);
}
```

V:

## Control flow: For loops

produces:

<div id='for_id'></div>

V:

## Control flow: While loops

The following [code](https://processing.org/reference/while.html):

```java
int i = 0;
while (i < 80) {
  line(30, i, 80, i);
  i = i + 5;
} 
```

V:

## Control flow: While loops

produces:

<div id='while_id'></div>

H:

## Functions

V:

## Functions: recursive

The following:

```java
/*
Esta funcion retorna el n-simo termino de la serio de fibonacci
*/
int fibonacci(int n) {
  // salida de la recursion
  if(n == 1)
    return 0;
  if(n == 2)
    return 1;
  // avance de la recursion:
  if( n > 2)
    return fibonacci(n-2) + fibonacci(n-1);
  // si n es negativo o 0
  return -1; 
}

int squares = 5;

void setup() {
  size(720,50);
  background(255,0, 255);
  int w = width / squares;
  for(int i = 0; i < squares; i++) {
    fill(map(fibonacci(i+1), fibonacci(squares), 0, 0, 255));
    rect(i*w,0,w,50);
  }
  noLoop();
}
```

V:

## Functions: recursive

produces:

<div id='recursion_id'></div>

H:

## Arrays: 1D

The following [code](https://processing.org/examples/array.html):

```java
float[] coswave; 

void setup() {
  size(640, 360);
  coswave = new float[width];
  for (int i = 0; i < width; i++) {
    float amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(255);
  noLoop();
}

void draw() {

  int y1 = 0;
  int y2 = height/3;
  for (int i = 0; i < width; i++) {
    stroke(coswave[i]*255);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = y1 + y1;
  for (int i = 0; i < width; i++) {
    stroke(coswave[i]*255 / 4);
    line(i, y1, i, y2);
  }
  
  y1 = y2;
  y2 = height;
  for (int i = 0; i < width; i++) {
    stroke(255 - coswave[i]*255);
    line(i, y1, i, y2);
  }
  
}
```

V:

## Arrays: 1D

produces:

<div id='array_id'></div>

V:

## Arrays: 2D

The following [code](https://www.processing.org/examples/array2d.html):

```java
float[][] distances;
float maxDistance;
int spacer;

void setup() {
  size(640, 360);
  maxDistance = dist(width/2, height/2, width, height);
  distances = new float[width][height];
  for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
      float distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
  strokeWeight(6);
  noLoop();  // Run once and stop
}

void draw() {
  background(0);
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
  for (int y = 0; y < height; y += spacer) {
    for (int x = 0; x < width; x += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}
```

V:

### Arrays: 2D

produces:

<div id='array2d_id'></div>

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