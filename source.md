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
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/blood.css'); return false;">Blood</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
		</p>
</section>

H:

# Geometry for CP

by Sebastian Chaves  
[Training Camp Medellin](https://www.tcmedellin.com/) 

[jschavesr.github.io/base-presentation](https://jschavesr.github.io/base-presentation)   

H:

# Indice

1. Introducción <!-- .element: class="fragment" data-fragment-index="1"-->
2. Geometria Básica <!-- .element: class="fragment" data-fragment-index="2"-->
  * Elementos 1D
  * Elementos 2D 
3. Poligonos <!-- .element: class="fragment" data-fragment-index="3"-->
  * Representacion
  * Perimetro
  * Area 
  * Problemas clásicos 
 
H:

## Introduccion

1. Competencias ICPC
1. Geometria computacional

V:

## Introduction: ICPC

Al menos un problema de geometria en competencias oficiales <!-- .element: class="fragment" data-fragment-index="2"-->

Muchas formulas son dificiles de derivar, es mejor tenerlas estudiadas

Recomendable tener un notebook propio de geometria <!-- .element: class="fragment" data-fragment-index="1"-->

V:

## Introduction: Geometria computacional

Simulaciones

Motores Fisicos

Video juegos

V:

<div id='particles'></div>



H:

## Geometría Básica



V:

## Puntos


Bloque basico de construcción para estructuras de mayores dimensiones

```cpp
  struct point_i {
    int x, y;
    point_i() {x=y=0;}
    point_i(int _x, int _y) : x(_x), y(_y){}
  };
  
```

V:

## Puntos con coordenadas reales

Se acostumbra a usar una variable Epsilon *EPS* para comparar

```cpp
  const double EPS  = 1e-9;
  struct point { 
    double x, y;
    point() { x = y = 0.0;}
    point(double _x, double _y) : x(_x), y(_y) {}

    bool operator == (point other) const {
      return (fabs(x-other.x) < EPS && fabs(y-other.y) < EPS);
    }

    bool operator < (point other) const {
      if (fabs(x-other.x) > EPS) return x < other.x;
      return y < other.y;
    }
  };
```

V:

## Distancia dos puntos

Teorema de pitagoras:

```cpp
double dist(point p1, point p2) {
	return hypot(p1.x - p2.x, p1.y - p2.y); // sqrt(dx * dx + dy * dy)
}
```

V:
## Rotacion de un punto

<figure>
    <img height='250' src='https://i.ibb.co/XXKKBHr/Screenshot-from-2023-07-11-09-47-43.png' />
</figure>


V:

## Rotacion

```cpp

  #define DEG_to_RAD(x) acos(-1)*x/180.0
  point rotate (point p, double theta) {
    double rad = DEG_to_RAD(theta);
    return point(p.x*cos(rad)-p.y*sin(rad),
                p.x*sin(rad)+p.y*cos(rad));
  }

```

V:

## Lineas

Pasar de la forma 

*y = mx + c* 
  
  a

*ax + by + c = 0*

```cpp
  struct line { double a, b, c; };
```

V:

## Puntos a linea



```cpp
void pointsToLine(point p1, point p2, line &l) {
	if (fabs(p1.x - p2.x) < EPS) {
		l.a = 1.0, l.b = 0.0, l.c = -p1.x;
	} else {
		l.a = -(double)(p1.y - p2.y)/(p1.x - p2.x);
		l.b = 1.0;
		l.c = -(double)(l.a * p1.x) - p1.y;
	}
}
```

V:

## Comparacion sobre lineas

```cpp
double distPointToLineEq(line l, point p) {
    return fabs(l.a*p.x + l.b*p.y + l.c)/sqrt(l.a*l.a + l.b*l.b);    
}

bool areParallel(line l1, line l2) {
	return (fabs(l1.a-l2.a) < EPS && (fabs(l1.b-l2.b) <EPS));
}

bool areSame(line l1, line l2) {
	return areParallel(l1, l2) && (fabs(l1.c - l2.c) < EPS);
}
```

V:

## Intersección dos lineas

```cpp
bool areIntersect(line l1, line l2, point &p) {
	if (areParallel(l1, l2)) return false;

	p.x = (l2.b * l1.c - l1.b * l2.c) / (l2.a * l1.b - l1.a * l2.b);

	if (fabs(l1.b) > EPS) 
      p.y = -(l1.a * p.x + l1.c);
	else								
      p.y = -(l2.a * p.x + l2.c);
	return true;
}
```

V:

### Vectores

```cpp
struct vec { double x, y;
		vec(double _x, double _y) : x(_x), y(_y) {} };


vec toVec(point a, point b) {
	return vec(b.x-a.x, b.y-a.y);
}
```

V:

## Operaciones sobre vectores
```cpp
vec scale (vec v, double s) {
	return vec(v.x * s, v.y * s);
}

vec add(vec a, vec b) {
    return vec(a.x + b.x, a.y + b.y);
}

vec sub(vec a, vec b) {
    return vec(a.x - b.x, a.y - b.y);
    
}
```

V:


## Mover un punto



```cpp
point translate(point p, vec v) {
	return point(p.x + v.x, p.y + v.y); 
}
```


V: 
## Ángulo 3 puntos 

```cpp

double dot(vec a, vec b) { return (a.x*b.x + a.y*b.y); }

double angle(point a, point o, point b) {
	vec oa = toVec(o, a), ob = toVec(o, b);
	return acos(dot(oa, ob)/sqrt(norm_sq(oa) * norm_sq(ob)));
}

```

V:

## Distancia a la linea

```cpp
double dot(vec a, vec b) { return (a.x*b.x + a.y*b.y); }

double norm_sq(vec v) { return v.x * v.x + v.y*v.y;}

double distToLine(point p, point a, point b, point &c) {
	vec ap = toVec(a, p), ab = toVec(a,b);
	double u = dot(ap, ab)/norm_sq(ab);
	c = translate (a, scale(ab, u));
	return dist(p, c);
}
```
V:

## Distancia a un segmento
```cpp
double distToLineSegment(point p, point a, point b, point &c) {
	vec ap=toVec(a, p), ab = toVec(a, b);
	double u = dot(ap, ab) / norm_sq(ab);
	if ( u < 0.0) { c = point(a.x, a.y);
		return dist(p,a); }
	if (u > 1.0) { c = point(b.x, b.y);
		return dist(p,b);
	}
	return distToLine(p, a, b, c); 
}
```

V:

  ## Producto cruz

  ```cpp
  double cross(vec a, vec b) { return a.x * b.y - a.y * b.x;}

  bool ccw(point p, point q, point r) {
    return cross(toVec(p,q), toVec(p, r)) > 0;
  }

  bool collinear(point p, point q, point r) {
    return fabs(cross(toVec(p, q), toVec(p, r))) < EPS;
  }
  ```


H: 
## Poligonos

¿Qué es un poligono?

¿Cómo guardar un poligono?


V:
## Representacion de un poligono

```cpp
  // N number of points
  vector<int> polygon(N)
```

V:
## Perimetro de un triangulo

```cpp
double perimeter(double ab, double bc, double ca) {
	return ab+bc+ca;
}

double area( double ab, double bc, double ca) {
	double s = perimeter(ab, bc, ca) * 0.5;
	return sqrt(s * (s-ab) * (s-bc) * (s-ca));
}
```

V:
## Perimetro de un poligono

```cpp
double perimeterPolygon(const vector<point> &P) {
	double result = 0.0;
	for (int i=0; i<(int)P.size()-1; i++) result += dist(P[i], P[i+1]);
	return result ;
}
```

V:
## Area poligono
```cpp
double areaPolygon(const vector<point> &P) {
	double result = 0.0, x1, x2, y1, y2;
	for (int i=0; i < (int) P.size()-1; i++) {
		x1 = P[i].x, x2 = P[i+1].x;
		y1 = P[i].y, y2 = P[i+1].y;
		result += (x1*y2 - x2*y1);
	}
	return fabs(result) / 2.0;
}
```

V:
## Poligono convexo
```cpp
 
bool isConvex(const vector<point> &P) {
	int sz = (int)P.size();
	if(sz<=3) return false;
	bool is_left =  ccw(P[0], P[1], P[2]);
	for (int i=1; i<sz-1; i++) 
		if (ccw(P[i], P[i+1], P[(i+2) == sz ? 1  : i+2]) != is_left)
			return false;
	return true;
}
```


