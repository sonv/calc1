+++
title = "02. Sequences And Limits"
description = "Sequences as the first model of approaching, then limits of functions, infinity, and infinitesimals."
weight = 20
+++

{% lang(code="en") %}
## Goals

By the end of this session, students should be able to:

- view a sequence as a function whose inputs are positive integers
- write sequences using explicit formulas and recurrence relations, and recognize arithmetic and geometric sequences
- decide whether a sequence converges or diverges, and compute limits using limit laws, the squeeze theorem, and standard limits
- use boundedness and monotonicity (the Weierstrass theorem) to prove a recurrence-defined sequence converges
- connect function limits to sequence limits, and use the sequential idea to show a limit does not exist
- handle one-sided limits, limits at infinity, infinite limits, and asymptotes
- compare infinitesimals and infinitely large quantities, and use equivalents to evaluate limits

The notes are adapted in part from lectures by Dr. Le Xuan Dai, and from [OpenStax Calculus Volume 2, Section 5.1: Sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences) and [OpenStax Calculus Volume 1, Chapter 2: Limits](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function).

## Why Sequences? The Idea Of Approaching

Last session functions described how quantities depend on each other. The central new idea now is **approaching**: what does it mean for a quantity to get closer and closer to a value?

Three motivating pictures, all of them sequences (ordered lists indexed by $n=1,2,3,\dots$):

- **Area of a circle.** Inscribe regular $n$-gons in a circle of radius $R$. Their areas $A_n=\tfrac12 nR^2\sin\frac{2\pi}{n}$ creep up to the circle: $\lim_{n\to\infty}A_n=\pi R^2$.
- **Zeno's steps.** Walking half the remaining distance again and again gives partial totals $s_n=1-\frac1{2^n}\to 1$.
- **Relativity.** A moving object's length is $L=L_0\sqrt{1-v^2/c^2}$. As $v\to c^-$, the length $\lim_{v\to c^-} L = 0$.

A limit turns "gets closer and closer" into something we can compute.

## Sequences

### Definition

An infinite **sequence** is a function $f:\mathbb{N}\to\mathbb{R}$, written $(x_n)$. The number $x_n=f(n)$ is the **general term** (the $n$th term), and $n$ is the index. The domain is the positive integers, not an interval.

Example: for $x_n=\dfrac{1}{n}$ the list is $1,\ \tfrac12,\ \tfrac13,\ \tfrac14,\dots$

### Explicit Formulas And Recurrence Relations

A sequence can be described in two ways:

- **Explicit formula:** each term comes directly from $n$, e.g. $a_n=2^n$ gives $2,4,8,16,\dots$
- **Recurrence relation:** each term comes from earlier ones, e.g. $a_1=2$ and $a_{n+1}=2a_n$ gives the same list.

Explicit formulas are easy to evaluate at any $n$; recurrences capture step-by-step rules (interest, populations, iteration). Converting between the two is a key skill.

### Arithmetic And Geometric Sequences

- **Arithmetic** (constant difference $d$): $a_n=a_1+(n-1)d$. Example: $3,7,11,15,\dots$ with $d=4$.
- **Geometric** (constant ratio $r$): $a_n=a_1 r^{\,n-1}$. Example: $2,6,18,54,\dots$ with $r=3$.

The single fact that **$r^{\,n}\to 0$ when $|r|<1$** (and blows up when $|r|>1$) powers many limit computations.

### Monotone And Bounded Sequences

- $(x_n)$ is **increasing** if $x_n\lt x_{n+1}$ for all $n$, and **decreasing** if $x_n>x_{n+1}$ for all $n$. Either way it is **monotone**.
- $(x_n)$ is **bounded above** if some $M$ has $x_n\le M$ for all $n$; **bounded below** if some $m$ has $x_n\ge m$; **bounded** if both hold.

**Bernoulli's inequality:** for $h\ge -1$ and integer $n\ge 1$, $(1+h)^n\ge 1+nh$. (By induction, $(1+h)^{n+1}\ge(1+nh)(1+h)=1+(n+1)h+nh^2\ge 1+(n+1)h$.) It helps show that $x_n=\left(1+\tfrac1n\right)^n$ is increasing and bounded above by $4$.

## Limits Of Sequences

### Definition (epsilon-N)

$(x_n)$ **converges** to $L$ if for every $\varepsilon>0$ there is an integer $N$ such that

$$
|x_n-L|<\varepsilon\quad\text{whenever } n>N.
$$

We write $\lim_{n\to\infty}x_n=L$. If no finite $L$ works, the sequence **diverges**. Intuitively, no matter how thin the band $L\pm\varepsilon$, the tail of the sequence eventually stays inside it.

### Examples

- $a_n=\dfrac1n\to 0$.
- $a_n=\dfrac{n}{n+1}=1-\dfrac{1}{n+1}\to 1$.
- $a_n=(-1)^n$ **diverges**: even terms $\to 1$, odd terms $\to -1$. It is bounded but not convergent, so **bounded does not imply convergent**.
- $a_n=\dfrac{(-1)^n}{n}\to 0$ because $-\tfrac1n\le a_n\le \tfrac1n$ (squeeze).

### Limit Laws

If $x_n\to a$ and $y_n\to b$ (both finite), then

$$
x_n\pm y_n\to a\pm b,\qquad x_ny_n\to ab,\qquad \frac{x_n}{y_n}\to\frac{a}{b}\ (b\ne0),\qquad |x_n|\to|a|.
$$

Two basic facts: a convergent sequence is **bounded**, and its limit is **unique**.

### Squeeze Theorem

If $x_n\le y_n\le z_n$ for all large $n$ and $\lim x_n=\lim z_n=a$, then $\lim y_n=a$.

Example: for $n>8$, $\ 0<\dfrac{7^n}{n^n}<\left(\dfrac78\right)^n\to 0$, so $\dfrac{7^n}{n^n}\to 0$.

### Standard Limits

$$
\lim q^n=0\ (|q|<1),\quad \lim\frac{1}{n^\alpha}=0\ (\alpha>0),\quad \lim\sqrt[n]{a}=1\ (a>0),
$$

$$
\lim\sqrt[n]{n}=1,\quad \lim\frac{n^p}{e^n}=0,\quad \lim\Big(1+\tfrac1n\Big)^n=e,\quad \lim\Big(1+\tfrac{a}{n}\Big)^n=e^a.
$$

**Growth hierarchy** as $n\to\infty$: $\ln^p n \ll n^\alpha \ll a^n \ll n!$ for $p,\alpha>0$, $a>1$. Whatever is further right wins, so a ratio is decided by the faster term.

### Monotone Bounded Theorem (Weierstrass)

An increasing sequence bounded above converges; a decreasing sequence bounded below converges. (An unbounded monotone sequence tends to $\pm\infty$.)

This **defines $e$**: $x_n=\left(1+\tfrac1n\right)^n$ is increasing and bounded above by $4$, so it converges, and

$$
\lim_{n\to\infty}\Big(1+\tfrac1n\Big)^n=e\approx 2.718281828.
$$

The theorem guarantees a limit exists even before we can name it.

### Why $\left(1+\tfrac1n\right)^n$ Increases And Is Bounded

Let $x_n=\left(1+\tfrac1n\right)^n$.

**Increasing (AM-GM).** Apply the AM-GM inequality to the $n+1$ numbers made of $n$ copies of $1+\tfrac1n$ and one copy of $1$:

$$
\sqrt[n+1]{\left(1+\tfrac1n\right)^{n}\cdot 1}\le \frac{n\left(1+\tfrac1n\right)+1}{n+1}=\frac{n+2}{n+1}=1+\frac{1}{n+1}.
$$

Raising both sides to the power $n+1$ gives $x_n\le \left(1+\tfrac{1}{n+1}\right)^{n+1}=x_{n+1}$, so $(x_n)$ is increasing.

**Bounded above (Bernoulli).** Let $y_n=\left(1+\tfrac1n\right)^{n+1}$. By Bernoulli the ratio

$$
\frac{y_n}{y_{n+1}}=\left(1+\frac{1}{n(n+2)}\right)^{n+2}\frac{n}{n+1}\ge\left(1+\frac1n\right)\frac{n}{n+1}=1,
$$

so $y_n$ is decreasing. Since $x_n\lt y_n$,

$$
x_n\lt y_n\le y_1=(1+1)^2=4.
$$

Hence $2\le x_n\lt 4$ for all $n$.

**Conclusion.** $(x_n)$ is increasing and bounded above, so by the monotone bounded theorem it converges; the limit is $e\approx 2.718$.

**Sharper bound (binomial).** The binomial expansion gives a tighter ceiling:

$$
x_n=\sum_{k=0}^{n}\binom{n}{k}\frac{1}{n^{k}}\le \sum_{k=0}^{n}\frac{1}{k!}\le 1+\sum_{k=1}^{n}\frac{1}{2^{\,k-1}}\lt 3,
$$

using $\binom{n}{k}n^{-k}=\frac1{k!}\prod_{j=1}^{k-1}\left(1-\frac jn\right)\le\frac1{k!}$ and $k!\ge 2^{\,k-1}$. So in fact $2\le e\lt 3$.

**Increasing via Bernoulli.** Monotonicity also follows from Bernoulli: $\dfrac{x_{n+1}}{x_n}=\left(1-\dfrac{1}{(n+1)^2}\right)^{n+1}\dfrac{n+1}{n}\ge\left(1-\dfrac{1}{n+1}\right)\dfrac{n+1}{n}=1$.

### Recurrence Plus Monotone Bounded (worked example)

Let $a_1=\sqrt2$ and $a_{n+1}=\sqrt{2a_n}$.

1. **Monotone:** $a_1\lt a_2\lt\cdots$, so the sequence is increasing.
2. **Bounded:** by induction $a_n\le 2$ for all $n$ (if $a_n\le 2$ then $a_{n+1}=\sqrt{2a_n}\le\sqrt{4}=2$). By Weierstrass it converges.
3. **Solve:** let $L=\lim a_n$. Taking $n\to\infty$ in $a_{n+1}^2=2a_n$ gives $L^2=2L$, so $L=0$ or $L=2$. Since $a_n>\sqrt2$, we get $L=2$.

### A Toolbox For Sequence Limits

1. **Algebra:** simplify, combine fractions, use conjugates.
2. **Divide by the dominant term:** rational and exponential ratios.
3. **Squeeze:** bounded times small, factorials, $n$th roots.
4. **Standard limits:** $q^n$, $\sqrt[n]{a}$, the growth hierarchy.
5. **Recurrence + monotone bounded:** prove existence, then solve for $L$.
6. **The $e$ limit ($1^\infty$):** $\big(1+\tfrac{1}{u_n}\big)^{u_n}\to e$ when $u_n\to\infty$.

## Limits Of Functions

### From Sequences To Functions

The same "approaching" idea, now for a continuous input: what happens to $f(x)$ as $x$ approaches a point $a$ (from both sides), or as $x\to\pm\infty$?

### Definition (epsilon-delta)

$\displaystyle\lim_{x\to a}f(x)=L$ if for every $\varepsilon>0$ there is a $\delta>0$ such that

$$
0<|x-a|<\delta\ \Rightarrow\ |f(x)-L|<\varepsilon.
$$

We can force $f(x)$ as close to $L$ as we like by taking $x$ close enough to $a$ (but not equal to $a$). The value $f(a)$ itself does not affect the limit.

### Sequential Characterization (the bridge)

$\displaystyle\lim_{x\to a}f(x)=L$ **if and only if** for every sequence $x_n\to a$ with $x_n\ne a$, we have $f(x_n)\to L$.

This connects the two halves of the lecture and gives a clean way to prove a limit **does not exist**: find two sequences $x_n\to a$ whose images head to different places.

Example: $\displaystyle\lim_{x\to 0}\sin\frac1x$ **does not exist**. Take $x_n=\dfrac{1}{n\pi}\to 0$, so $\sin\frac1{x_n}=0$; take $x_n=\dfrac{1}{\frac\pi2+2n\pi}\to 0$, so $\sin\frac1{x_n}=1$. Two sequences, two answers.

### One-Sided Limits

The two-sided limit exists exactly when both one-sided limits exist and agree:

$$
\lim_{x\to a}f(x)=L\iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L.
$$

- $\operatorname{sign}x$: left limit $-1$, right limit $1$, so $\lim_{x\to0}\operatorname{sign}x$ does not exist.
- $\dfrac{x}{|x|}$: same behavior, limit DNE at $0$.
- $|x|$: both sides $\to 0$, so $\lim_{x\to0}|x|=0$.

### Limit Laws And Composition

If $\lim_{x\to a}f=A$ and $\lim_{x\to a}g=B$ are finite, then sum, scalar multiple, product, and quotient ($B\ne0$) behave as expected. Example:

$$
\lim_{x\to 3}\frac{x^3-5x+4}{x^2-2}=\frac{27-15+4}{9-2}=\frac{16}{7}.
$$

If $g$ is continuous at $A$, then $\lim_{x\to a}g(f(x))=g\big(\lim_{x\to a}f(x)\big)$.

### Caution: A Sequence Is Not A Differentiable Function

For $a_n=\dfrac{\ln n}{n}$ you cannot apply L'Hopital "in $n$": $n$ runs over integers, not a continuous variable. The correct route: pass to $f(x)=\dfrac{\ln x}{x}$, find $\lim_{x\to\infty}f(x)=0$ (L'Hopital or $\ln x\ll x$), then the sequential characterization gives $a_n=f(n)\to 0$. Note the one-way street: $f(n)\to L\Rightarrow a_n\to L$, but a sequence limit alone does not control the whole function.

## Limits Involving Infinity

### Limits At Infinity And Horizontal Asymptotes

$\displaystyle\lim_{x\to+\infty}f(x)=L$ if for every $\varepsilon>0$ there is $N$ with $x>N\Rightarrow|f(x)-L|<\varepsilon$; then $y=L$ is a **horizontal asymptote**. Divide by the dominant power:

$$
\lim_{x\to\infty}\frac{3x^2-x-2}{5x^2+4x+1}=\lim_{x\to\infty}\frac{3-\frac1x-\frac2{x^2}}{5+\frac4x+\frac1{x^2}}=\frac{3}{5}.
$$

### Infinite Limits And Vertical Asymptotes

$\displaystyle\lim_{x\to a}f(x)=+\infty$ means: for every $M>0$ there is $\delta>0$ with $0<|x-a|<\delta\Rightarrow f(x)>M$; then $x=a$ is a **vertical asymptote**. Example:

$$
\lim_{x\to 3^+}\frac{2x}{x-3}=+\infty,\qquad \lim_{x\to 3^-}\frac{2x}{x-3}=-\infty.
$$

### Determinate And Indeterminate Forms

Determinate (answer can be read off): $\dfrac{L}{0}=\infty\ (L\ne0)$, $\dfrac{L}{\infty}=0$, $L\cdot\infty=\infty\ (L\ne0)$, $q^\infty=0\ (|q|<1)$.

The **seven indeterminate forms**: $\dfrac00,\ \dfrac\infty\infty,\ \infty-\infty,\ 0\cdot\infty,\ 1^\infty,\ \infty^0,\ 0^0$.

Because $\infty$ is not a number, $\lim_{x\to\infty}(x^2-x)=\infty-\infty$ is meaningless; factor first: $x(x-1)\to\infty$.

### Slant Asymptotes

The line $y=mx+b$ is a slant asymptote if $\lim_{x\to\infty}[f(x)-(mx+b)]=0$, where

$$
m=\lim_{x\to\infty}\frac{f(x)}{x},\qquad b=\lim_{x\to\infty}\big[f(x)-mx\big].
$$

Example: $f(x)=\dfrac{x^3}{x^2+1}$ has $m=1$, $b=0$, so $y=x$ is a slant asymptote.

## Infinitesimals And Infinitely Large Quantities

### Definitions

- $f$ is an **infinitesimal** as $x\to a$ if $\lim_{x\to a}f(x)=0$.
- $f$ is **infinitely large** as $x\to a$ if $\lim_{x\to a}|f(x)|=+\infty$.

**Reciprocal relationship:** if $f$ is infinitely large then $\tfrac1f$ is infinitesimal; if $f$ is a nonzero infinitesimal then $\tfrac1f$ is infinitely large. For example $\tfrac1x$ is infinitesimal as $x\to\infty$ and infinitely large as $x\to0$.

### Comparison

Let $f,g$ be infinitesimals as $x\to a$ and consider $\lim_{x\to a}\frac fg$:

- $=0$: $f$ is of **higher order** than $g$, written $f=o(g)$ (shrinks faster).
- $=c\ne0$: $f,g$ are of the **same order**.
- $=\infty$: $f$ is of **lower order** than $g$.
- does not exist: $f,g$ are **incomparable** (e.g. $x\sin\frac1x$ vs $x$).

For infinitely large quantities the picture flips: a larger limit ratio means higher order.

### Equivalent Infinitesimals

$f\sim g$ as $x\to a$ if $\lim_{x\to a}\frac fg=1$. As $x\to 0$:

$$
\sin x\sim x,\quad \tan x\sim x,\quad \arcsin x\sim x,\quad \arctan x\sim x,\quad 1-\cos x\sim\tfrac{x^2}{2},
$$

$$
e^x-1\sim x,\quad \ln(1+x)\sim x,\quad a^x-1\sim x\ln a,\quad (1+x)^\mu-1\sim\mu x,\quad \sqrt{1+x}-1\sim\tfrac{x}{2}.
$$

### Using Equivalents To Find Limits

In a **product or quotient** you may replace a factor by an equivalent one. Example:

$$
\lim_{x\to0}\frac{e^{x^2}-\cos x}{x^2}=\lim_{x\to0}\frac{(e^{x^2}-1)+(1-\cos x)}{x^2}=\lim_{x\to0}\frac{x^2+\frac{x^2}{2}}{x^2}=\frac32.
$$

Be careful: do not replace a term inside a sum or difference when that cancellation is the whole point; split into recognizable pieces first.

### Equivalent Infinities And Growth

As $x\to+\infty$: $\ln^\alpha x \ll x^\beta \ll a^x$ for $\alpha,\beta>0$, $a>1$. Keep only the fastest-growing term. Example:

$$
\lim_{x\to+\infty}\frac{\sqrt{x^2+4}+2x+3\sqrt{x}}{\sqrt{x^2-4}+x}=\lim_{x\to+\infty}\frac{3x}{2x}=\frac32.
$$

## Bridge To Continuity (preview)

Continuity closes the loop: $f$ is **continuous** at $a$ when $\lim_{x\to a}f(x)=f(a)$. We start there next session.

## Solutions To The Discussion Problems

**Sequences (Your Turn 1).**

1. $5,8,11,14,\dots$: explicit $a_n=5+3(n-1)=3n+2$; recurrence $a_1=5,\ a_{n+1}=a_n+3$.
2. $a_n=(-1)^n n$ is **not** bounded (the magnitude $n\to\infty$) and **not** monotone (signs alternate).
3. $a_n=\frac{n-1}{n}$: $a_1=0,\ a_2=\tfrac12,\ a_3=\tfrac23$; the list increases toward $1$ (indeed $a_n=1-\frac1n\to 1$).

**Sequence limits (Your Turn 2).**

1. $\displaystyle\lim\frac{2n^2+1}{n^2+n}=\lim\frac{2+\frac1{n^2}}{1+\frac1n}=2$.
2. $\displaystyle\lim\frac{\cos n}{n}=0$ since $-\frac1n\le\frac{\cos n}{n}\le\frac1n$ (squeeze).
3. $\displaystyle\lim\Big(1+\frac1{2n}\Big)^n=\lim\Big(1+\frac1{2n}\Big)^{2n\cdot\frac12}=e^{1/2}$.

**The $\ln n / n$ discussion.** $f(n)\to L\Rightarrow a_n\to L$ holds because $a_n$ is literally the restriction of $f$ to integers, and the sequential characterization runs in that direction. The reverse can fail: $a_n=\sin(n\pi)=0\to 0$ but $f(x)=\sin(\pi x)$ has no limit as $x\to\infty$.

**Infinity (Your Turn 3).**

1. $\displaystyle\lim_{x\to+\infty}\frac{\sqrt{2x^2+1}}{3x-5}=\lim_{x\to+\infty}\frac{\sqrt{2+\frac1{x^2}}}{3-\frac5x}=\frac{\sqrt2}{3}$ (horizontal asymptote $y=\tfrac{\sqrt2}{3}$).
2. $\displaystyle\lim_{x\to 2^+}\frac{1}{x-2}=+\infty$ (vertical asymptote $x=2$).
3. $\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)=\lim_{x\to+\infty}\frac{x}{\sqrt{x^2+x}+x}=\frac12$ (multiply by the conjugate).

## Practice Problems

A practice bank; not all are due at once.

**A. Sequences (formulas, recurrence, monotonicity, boundedness)**

1. Give an explicit formula and a recurrence for $2,5,8,11,\dots$ and for $3,6,12,24,\dots$
2. Classify each as arithmetic, geometric, or neither: $a_n=7-2n$; $a_n=5\cdot 3^{\,n}$; $a_n=n^2$.
3. Decide whether each is monotone and/or bounded: $a_n=\frac{n}{n+1}$; $a_n=(-1)^n\frac1n$; $a_n=\frac{2^n}{n!}$.
4. Show $x_n=\left(1+\frac1n\right)^n$ is increasing and bounded above (use Bernoulli).

**B. Limits of sequences**

5. $\displaystyle\lim\frac{n^2-n}{(n+1)(n^2+1)}$.
6. $\displaystyle\lim\frac{1+7^{\,n+2}}{3-7^{\,n}}$ and $\displaystyle\lim\frac{2^{\,n+2}+3^{\,n+3}}{2^n+3^n}$.
7. $\displaystyle\lim\big(\sqrt{n^2+1}-n\big)$ and $\displaystyle\lim\frac{\sqrt{n^2+1}-n}{\sqrt{n+1}-\sqrt n}$.
8. $\displaystyle\lim\frac{1}{\sqrt{n!}}$ and $\displaystyle\lim\sqrt[n]{n}$ (squeeze / binomial).
9. $\displaystyle\lim\Big(1+\frac1{n+k}\Big)^n$ and $\displaystyle\lim\Big(\frac{n}{n+1}\Big)^n$.
10. Recurrence: $a_1=\sqrt2,\ a_{n+1}=\sqrt{2a_n}$; and $x_n=\underbrace{\sqrt{a+\sqrt{a+\cdots+\sqrt a}}}_{n}$ for $a>0$. Prove convergence and find the limit.
11. Show $a_n=(-1)^n\frac{2n+3}{3n+1}$ diverges (two subsequences).

**C. Limits of functions**

12. $\displaystyle\lim_{x\to 3}\frac{x^3-5x+4}{x^2-2}$ and $\displaystyle\lim_{x\to 0}x^2\cos\frac1x$.
13. Evaluate the one-sided limits of $\operatorname{sign}x$, $\dfrac{x}{|x|}$, and $|x|$ at $0$.
14. Show $\displaystyle\lim_{x\to 0}\sin\frac1x$ does not exist using two sequences.
15. Piecewise: $f(x)=\sqrt{x-4}$ for $x\ge4$, $f(x)=8-2x$ for $x<4$; find $\lim_{x\to4}f(x)$.

**D. Limits involving infinity**

16. $\displaystyle\lim_{x\to\infty}\frac{3x^2-x-2}{5x^2+4x+1}$ and $\displaystyle\lim_{x\to+\infty}\frac{x^2+x}{3-x}$.
17. Vertical asymptotes of $\dfrac{2x}{x-3}$; horizontal asymptotes of $\dfrac{\sqrt{2x^2+1}}{3x-5}$.
18. Slant asymptote of $\dfrac{x^3}{x^2+1}$.
19. $\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)$ and $\displaystyle\lim_{x\to+\infty}(x^2-x)$.

**E. Infinitesimals and equivalents**

20. Order (higher/same/lower) of $1-\cos x$ vs $x$, and of $\sqrt[3]{x}$ vs $x$, as $x\to0$.
21. $\displaystyle\lim_{x\to0}\frac{\sin 5x}{x}$, $\displaystyle\lim_{x\to0}\frac{\ln(1+3x)}{\tan 2x}$, $\displaystyle\lim_{x\to0}\frac{e^{x^2}-\cos x}{x^2}$.
22. $\displaystyle\lim_{x\to+\infty}\frac{\sqrt{x^2+4}+2x+3\sqrt x}{\sqrt{x^2-4}+x}$.

## Reading And References

- [OpenStax Calculus Volume 2, Section 5.1: Sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences)
- [OpenStax Calculus Volume 1, 2.2: The Limit of a Function](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function), [2.3: Limit Laws](https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws), [2.4: Continuity](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity)
- [Active Calculus 1.2: The notion of limit](https://activecalculus.org/single/sec-1-2-limits.html)
- Lecture slides: [Session 02 deck](../../slides/02-sequences/)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau buổi học này, sinh viên có thể:

- xem dãy số như một hàm có đầu vào là các số nguyên dương
- viết dãy bằng công thức tường minh và hệ thức truy hồi, nhận ra cấp số cộng và cấp số nhân
- xác định dãy hội tụ hay phân kỳ, và tính giới hạn bằng quy tắc giới hạn, định lý kẹp, các giới hạn cơ bản
- dùng tính bị chặn và tính đơn điệu (định lý Weierstrass) để chứng minh dãy cho bởi truy hồi hội tụ
- nối giới hạn hàm số với giới hạn dãy, và dùng ý tưởng dãy để chứng minh giới hạn không tồn tại
- xử lý giới hạn một phía, giới hạn tại vô cực, giới hạn vô cực, và tiệm cận
- so sánh vô cùng bé và vô cùng lớn, dùng đại lượng tương đương để tính giới hạn

Ghi chú được biên soạn một phần dựa trên bài giảng của TS. Lê Xuân Đại, cùng [OpenStax Calculus Volume 2, Section 5.1: Sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences) và [OpenStax Calculus Volume 1, Chương 2: Giới hạn](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function).

## Vì sao học dãy số? Ý tưởng tiến gần

Buổi trước hàm số mô tả sự phụ thuộc giữa các đại lượng. Ý tưởng mới trung tâm bây giờ là **sự tiến gần**: một đại lượng ngày càng gần một giá trị nghĩa là gì?

Ba hình ảnh động lực, tất cả đều là dãy số (danh sách có thứ tự đánh số bởi $n=1,2,3,\dots$):

- **Diện tích hình tròn.** Nội tiếp đa giác đều $n$ cạnh trong hình tròn bán kính $R$. Diện tích $A_n=\tfrac12 nR^2\sin\frac{2\pi}{n}$ tiến dần đến hình tròn: $\lim_{n\to\infty}A_n=\pi R^2$.
- **Các bước của Zeno.** Đi nửa quãng còn lại lặp mãi cho tổng riêng $s_n=1-\frac1{2^n}\to 1$.
- **Thuyết tương đối.** Độ dài vật chuyển động là $L=L_0\sqrt{1-v^2/c^2}$. Khi $v\to c^-$ thì $\lim_{v\to c^-} L = 0$.

Giới hạn biến "ngày càng gần" thành thứ ta tính được.

## Dãy số

### Định nghĩa

Một **dãy số** vô hạn là một hàm $f:\mathbb{N}\to\mathbb{R}$, ký hiệu $(x_n)$. Số $x_n=f(n)$ là **số hạng tổng quát** (số hạng thứ $n$), và $n$ là chỉ số. Miền xác định là các số nguyên dương, không phải một khoảng.

Ví dụ: với $x_n=\dfrac1n$ danh sách là $1,\ \tfrac12,\ \tfrac13,\ \tfrac14,\dots$

### Công thức tường minh và hệ thức truy hồi

Một dãy có thể mô tả theo hai cách:

- **Công thức tường minh:** mỗi số hạng tính trực tiếp từ $n$, ví dụ $a_n=2^n$ cho $2,4,8,16,\dots$
- **Hệ thức truy hồi:** mỗi số hạng tính từ các số hạng trước, ví dụ $a_1=2$ và $a_{n+1}=2a_n$ cho cùng danh sách.

Công thức tường minh dễ tính tại $n$ bất kỳ; truy hồi nắm bắt quy tắc từng bước (lãi suất, dân số, lặp). Chuyển đổi giữa hai dạng là kỹ năng quan trọng.

### Cấp số cộng và cấp số nhân

- **Cấp số cộng** (hiệu không đổi $d$): $a_n=a_1+(n-1)d$. Ví dụ: $3,7,11,15,\dots$ với $d=4$.
- **Cấp số nhân** (tỷ số không đổi $r$): $a_n=a_1 r^{\,n-1}$. Ví dụ: $2,6,18,54,\dots$ với $r=3$.

Một sự kiện **$r^{\,n}\to 0$ khi $|r|<1$** (và tăng vô hạn khi $|r|>1$) chi phối nhiều phép tính giới hạn.

### Dãy đơn điệu và bị chặn

- $(x_n)$ là **dãy tăng** nếu $x_n\lt x_{n+1}$ với mọi $n$, và **dãy giảm** nếu $x_n>x_{n+1}$ với mọi $n$. Cả hai trường hợp đều gọi là **đơn điệu**.
- $(x_n)$ **bị chặn trên** nếu có $M$ với $x_n\le M$ với mọi $n$; **bị chặn dưới** nếu có $m$ với $x_n\ge m$; **bị chặn** nếu cả hai.

**Bất đẳng thức Bernoulli:** với $h\ge -1$ và số nguyên $n\ge 1$, $(1+h)^n\ge 1+nh$. (Bằng quy nạp, $(1+h)^{n+1}\ge(1+nh)(1+h)=1+(n+1)h+nh^2\ge 1+(n+1)h$.) Nó giúp chứng minh $x_n=\left(1+\tfrac1n\right)^n$ tăng và bị chặn trên bởi $4$.

## Giới hạn của dãy số

### Định nghĩa (epsilon-N)

$(x_n)$ **hội tụ** đến $L$ nếu với mọi $\varepsilon>0$ tồn tại số nguyên $N$ sao cho

$$
|x_n-L|<\varepsilon\quad\text{khi } n>N.
$$

Ta viết $\lim_{n\to\infty}x_n=L$. Nếu không có $L$ hữu hạn nào thỏa, dãy **phân kỳ**. Trực giác: dù dải $L\pm\varepsilon$ mỏng đến đâu, phần đuôi của dãy cuối cùng vẫn nằm trong đó.

### Ví dụ

- $a_n=\dfrac1n\to 0$.
- $a_n=\dfrac{n}{n+1}=1-\dfrac{1}{n+1}\to 1$.
- $a_n=(-1)^n$ **phân kỳ**: số hạng chẵn $\to 1$, số hạng lẻ $\to -1$. Nó bị chặn nhưng không hội tụ, nên **bị chặn không kéo theo hội tụ**.
- $a_n=\dfrac{(-1)^n}{n}\to 0$ vì $-\tfrac1n\le a_n\le\tfrac1n$ (kẹp).

### Quy tắc giới hạn

Nếu $x_n\to a$ và $y_n\to b$ (đều hữu hạn), thì

$$
x_n\pm y_n\to a\pm b,\qquad x_ny_n\to ab,\qquad \frac{x_n}{y_n}\to\frac{a}{b}\ (b\ne0),\qquad |x_n|\to|a|.
$$

Hai sự kiện cơ bản: dãy hội tụ thì **bị chặn**, và giới hạn của nó **duy nhất**.

### Định lý kẹp

Nếu $x_n\le y_n\le z_n$ với mọi $n$ đủ lớn và $\lim x_n=\lim z_n=a$, thì $\lim y_n=a$.

Ví dụ: với $n>8$, $\ 0<\dfrac{7^n}{n^n}<\left(\dfrac78\right)^n\to 0$, nên $\dfrac{7^n}{n^n}\to 0$.

### Các giới hạn cơ bản

$$
\lim q^n=0\ (|q|<1),\quad \lim\frac{1}{n^\alpha}=0\ (\alpha>0),\quad \lim\sqrt[n]{a}=1\ (a>0),
$$

$$
\lim\sqrt[n]{n}=1,\quad \lim\frac{n^p}{e^n}=0,\quad \lim\Big(1+\tfrac1n\Big)^n=e,\quad \lim\Big(1+\tfrac{a}{n}\Big)^n=e^a.
$$

**Thứ bậc tăng** khi $n\to\infty$: $\ln^p n \ll n^\alpha \ll a^n \ll n!$ với $p,\alpha>0$, $a>1$. Thứ nằm bên phải hơn "thắng", nên một thương được quyết định bởi số hạng tăng nhanh hơn.

### Định lý đơn điệu bị chặn (Weierstrass)

Dãy tăng và bị chặn trên thì hội tụ; dãy giảm và bị chặn dưới thì hội tụ. (Dãy đơn điệu không bị chặn thì tiến tới $\pm\infty$.)

Điều này **định nghĩa $e$**: $x_n=\left(1+\tfrac1n\right)^n$ tăng và bị chặn trên bởi $4$, nên hội tụ, và

$$
\lim_{n\to\infty}\Big(1+\tfrac1n\Big)^n=e\approx 2.718281828.
$$

Định lý bảo đảm giới hạn tồn tại ngay cả khi ta chưa gọi tên được nó.

### Vì sao $\left(1+\tfrac1n\right)^n$ tăng và bị chặn

Đặt $x_n=\left(1+\tfrac1n\right)^n$.

**Tăng (AM-GM).** Áp dụng bất đẳng thức AM-GM cho $n+1$ số gồm $n$ số $1+\tfrac1n$ và một số $1$:

$$
\sqrt[n+1]{\left(1+\tfrac1n\right)^{n}\cdot 1}\le \frac{n\left(1+\tfrac1n\right)+1}{n+1}=\frac{n+2}{n+1}=1+\frac{1}{n+1}.
$$

Nâng hai vế lên lũy thừa $n+1$ được $x_n\le \left(1+\tfrac{1}{n+1}\right)^{n+1}=x_{n+1}$, nên $(x_n)$ tăng.

**Bị chặn trên (Bernoulli).** Đặt $y_n=\left(1+\tfrac1n\right)^{n+1}$. Theo Bernoulli, tỷ số

$$
\frac{y_n}{y_{n+1}}=\left(1+\frac{1}{n(n+2)}\right)^{n+2}\frac{n}{n+1}\ge\left(1+\frac1n\right)\frac{n}{n+1}=1,
$$

nên $y_n$ giảm. Vì $x_n\lt y_n$,

$$
x_n\lt y_n\le y_1=(1+1)^2=4.
$$

Do đó $2\le x_n\lt 4$ với mọi $n$.

**Kết luận.** $(x_n)$ tăng và bị chặn trên, nên theo định lý đơn điệu bị chặn nó hội tụ; giới hạn là $e\approx 2.718$.

**Cận chặt hơn (nhị thức).** Khai triển nhị thức cho cận nhỏ hơn:

$$
x_n=\sum_{k=0}^{n}\binom{n}{k}\frac{1}{n^{k}}\le \sum_{k=0}^{n}\frac{1}{k!}\le 1+\sum_{k=1}^{n}\frac{1}{2^{\,k-1}}\lt 3,
$$

dùng $\binom{n}{k}n^{-k}=\frac1{k!}\prod_{j=1}^{k-1}\left(1-\frac jn\right)\le\frac1{k!}$ và $k!\ge 2^{\,k-1}$. Do đó thực ra $2\le e\lt 3$.

**Tăng theo Bernoulli.** Tính đơn điệu cũng suy ra từ Bernoulli: $\dfrac{x_{n+1}}{x_n}=\left(1-\dfrac{1}{(n+1)^2}\right)^{n+1}\dfrac{n+1}{n}\ge\left(1-\dfrac{1}{n+1}\right)\dfrac{n+1}{n}=1$.

### Truy hồi cùng đơn điệu bị chặn (ví dụ đã giải)

Cho $a_1=\sqrt2$ và $a_{n+1}=\sqrt{2a_n}$.

1. **Đơn điệu:** $a_1\lt a_2\lt\cdots$, nên dãy tăng.
2. **Bị chặn:** bằng quy nạp $a_n\le 2$ với mọi $n$ (nếu $a_n\le2$ thì $a_{n+1}=\sqrt{2a_n}\le\sqrt4=2$). Theo Weierstrass nó hội tụ.
3. **Giải:** đặt $L=\lim a_n$. Lấy $n\to\infty$ trong $a_{n+1}^2=2a_n$ cho $L^2=2L$, nên $L=0$ hoặc $L=2$. Vì $a_n>\sqrt2$ nên $L=2$.

### Hộp công cụ tìm giới hạn dãy

1. **Biến đổi đại số:** rút gọn, quy đồng, nhân liên hợp.
2. **Chia cho số hạng trội:** thương đa thức và mũ.
3. **Định lý kẹp:** bị chặn nhân với nhỏ, giai thừa, căn bậc $n$.
4. **Giới hạn cơ bản:** $q^n$, $\sqrt[n]{a}$, thứ bậc tăng.
5. **Truy hồi + đơn điệu bị chặn:** chứng minh tồn tại, rồi giải tìm $L$.
6. **Giới hạn $e$ (dạng $1^\infty$):** $\big(1+\tfrac{1}{u_n}\big)^{u_n}\to e$ khi $u_n\to\infty$.

## Giới hạn của hàm số

### Từ dãy số đến hàm số

Cùng ý tưởng "tiến gần", nay cho biến liên tục: $f(x)$ ra sao khi $x$ tiến đến điểm $a$ (từ hai phía), hoặc khi $x\to\pm\infty$?

### Định nghĩa (epsilon-delta)

$\displaystyle\lim_{x\to a}f(x)=L$ nếu với mọi $\varepsilon>0$ tồn tại $\delta>0$ sao cho

$$
0<|x-a|<\delta\ \Rightarrow\ |f(x)-L|<\varepsilon.
$$

Ta ép được $f(x)$ gần $L$ tùy ý bằng cách lấy $x$ đủ gần $a$ (nhưng khác $a$). Bản thân $f(a)$ không ảnh hưởng đến giới hạn.

### Đặc trưng qua dãy (cầu nối)

$\displaystyle\lim_{x\to a}f(x)=L$ **khi và chỉ khi** với mọi dãy $x_n\to a$ ($x_n\ne a$), ta có $f(x_n)\to L$.

Điều này nối hai nửa của bài giảng và cho cách rõ ràng để chứng minh giới hạn **không tồn tại**: tìm hai dãy $x_n\to a$ mà ảnh tiến về hai nơi khác nhau.

Ví dụ: $\displaystyle\lim_{x\to 0}\sin\frac1x$ **không tồn tại**. Lấy $x_n=\dfrac{1}{n\pi}\to 0$ thì $\sin\frac1{x_n}=0$; lấy $x_n=\dfrac{1}{\frac\pi2+2n\pi}\to 0$ thì $\sin\frac1{x_n}=1$. Hai dãy, hai kết quả.

### Giới hạn một phía

Giới hạn hai phía tồn tại đúng khi cả hai giới hạn một phía tồn tại và bằng nhau:

$$
\lim_{x\to a}f(x)=L\iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L.
$$

- $\operatorname{sign}x$: giới hạn trái $-1$, phải $1$, nên $\lim_{x\to0}\operatorname{sign}x$ không tồn tại.
- $\dfrac{x}{|x|}$: tương tự, giới hạn không tồn tại tại $0$.
- $|x|$: cả hai phía $\to 0$, nên $\lim_{x\to0}|x|=0$.

### Quy tắc giới hạn và hàm hợp

Nếu $\lim_{x\to a}f=A$ và $\lim_{x\to a}g=B$ hữu hạn, thì tổng, nhân vô hướng, tích, thương ($B\ne0$) hoạt động như mong đợi. Ví dụ:

$$
\lim_{x\to 3}\frac{x^3-5x+4}{x^2-2}=\frac{27-15+4}{9-2}=\frac{16}{7}.
$$

Nếu $g$ liên tục tại $A$, thì $\lim_{x\to a}g(f(x))=g\big(\lim_{x\to a}f(x)\big)$.

### Lưu ý: dãy không phải là hàm khả vi

Với $a_n=\dfrac{\ln n}{n}$ bạn không thể áp dụng L'Hopital "theo $n$": $n$ chạy trên số nguyên, không phải biến liên tục. Cách đúng: chuyển sang $f(x)=\dfrac{\ln x}{x}$, tìm $\lim_{x\to\infty}f(x)=0$ (L'Hopital hoặc $\ln x\ll x$), rồi đặc trưng qua dãy cho $a_n=f(n)\to 0$. Lưu ý chiều một chiều: $f(n)\to L\Rightarrow a_n\to L$, nhưng chỉ giới hạn dãy thì không kiểm soát được cả hàm.

## Giới hạn liên quan vô cực

### Giới hạn tại vô cực và tiệm cận ngang

$\displaystyle\lim_{x\to+\infty}f(x)=L$ nếu với mọi $\varepsilon>0$ tồn tại $N$ sao cho $x>N\Rightarrow|f(x)-L|<\varepsilon$; khi đó $y=L$ là **tiệm cận ngang**. Chia cho lũy thừa trội:

$$
\lim_{x\to\infty}\frac{3x^2-x-2}{5x^2+4x+1}=\lim_{x\to\infty}\frac{3-\frac1x-\frac2{x^2}}{5+\frac4x+\frac1{x^2}}=\frac{3}{5}.
$$

### Giới hạn vô cực và tiệm cận đứng

$\displaystyle\lim_{x\to a}f(x)=+\infty$ nghĩa là: với mọi $M>0$ tồn tại $\delta>0$ sao cho $0<|x-a|<\delta\Rightarrow f(x)>M$; khi đó $x=a$ là **tiệm cận đứng**. Ví dụ:

$$
\lim_{x\to 3^+}\frac{2x}{x-3}=+\infty,\qquad \lim_{x\to 3^-}\frac{2x}{x-3}=-\infty.
$$

### Dạng xác định và dạng vô định

Xác định (đọc ngay kết quả): $\dfrac{L}{0}=\infty\ (L\ne0)$, $\dfrac{L}{\infty}=0$, $L\cdot\infty=\infty\ (L\ne0)$, $q^\infty=0\ (|q|<1)$.

**Bảy dạng vô định**: $\dfrac00,\ \dfrac\infty\infty,\ \infty-\infty,\ 0\cdot\infty,\ 1^\infty,\ \infty^0,\ 0^0$.

Vì $\infty$ không phải là số, $\lim_{x\to\infty}(x^2-x)=\infty-\infty$ là vô nghĩa; hãy phân tích trước: $x(x-1)\to\infty$.

### Tiệm cận xiên

Đường $y=mx+b$ là tiệm cận xiên nếu $\lim_{x\to\infty}[f(x)-(mx+b)]=0$, với

$$
m=\lim_{x\to\infty}\frac{f(x)}{x},\qquad b=\lim_{x\to\infty}\big[f(x)-mx\big].
$$

Ví dụ: $f(x)=\dfrac{x^3}{x^2+1}$ có $m=1$, $b=0$, nên $y=x$ là tiệm cận xiên.

## Vô cùng bé và vô cùng lớn

### Định nghĩa

- $f$ là **vô cùng bé (VCB)** khi $x\to a$ nếu $\lim_{x\to a}f(x)=0$.
- $f$ là **vô cùng lớn (VCL)** khi $x\to a$ nếu $\lim_{x\to a}|f(x)|=+\infty$.

**Quan hệ nghịch đảo:** nếu $f$ là VCL thì $\tfrac1f$ là VCB; nếu $f$ là VCB khác $0$ thì $\tfrac1f$ là VCL. Ví dụ $\tfrac1x$ là VCB khi $x\to\infty$ và VCL khi $x\to0$.

### So sánh

Cho $f,g$ là VCB khi $x\to a$ và xét $\lim_{x\to a}\frac fg$:

- $=0$: $f$ có **bậc cao hơn** $g$, viết $f=o(g)$ (nhỏ nhanh hơn).
- $=c\ne0$: $f,g$ **cùng bậc**.
- $=\infty$: $f$ có **bậc thấp hơn** $g$.
- không tồn tại: $f,g$ **không so sánh được** (vd $x\sin\frac1x$ với $x$).

Với các VCL, bức tranh đảo lại: thương giới hạn lớn hơn nghĩa là bậc cao hơn.

### Vô cùng bé tương đương

$f\sim g$ khi $x\to a$ nếu $\lim_{x\to a}\frac fg=1$. Khi $x\to 0$:

$$
\sin x\sim x,\quad \tan x\sim x,\quad \arcsin x\sim x,\quad \arctan x\sim x,\quad 1-\cos x\sim\tfrac{x^2}{2},
$$

$$
e^x-1\sim x,\quad \ln(1+x)\sim x,\quad a^x-1\sim x\ln a,\quad (1+x)^\mu-1\sim\mu x,\quad \sqrt{1+x}-1\sim\tfrac{x}{2}.
$$

### Dùng tương đương để tính giới hạn

Trong một **tích hoặc thương** có thể thay một thừa số bằng đại lượng tương đương. Ví dụ:

$$
\lim_{x\to0}\frac{e^{x^2}-\cos x}{x^2}=\lim_{x\to0}\frac{(e^{x^2}-1)+(1-\cos x)}{x^2}=\lim_{x\to0}\frac{x^2+\frac{x^2}{2}}{x^2}=\frac32.
$$

Cẩn thận: đừng thay một hạng tử bên trong tổng/hiệu khi chính sự triệt tiêu đó là mấu chốt; hãy tách thành các mảnh nhận dạng được trước.

### Vô cùng lớn tương đương và tốc độ tăng

Khi $x\to+\infty$: $\ln^\alpha x \ll x^\beta \ll a^x$ với $\alpha,\beta>0$, $a>1$. Chỉ giữ số hạng tăng nhanh nhất. Ví dụ:

$$
\lim_{x\to+\infty}\frac{\sqrt{x^2+4}+2x+3\sqrt{x}}{\sqrt{x^2-4}+x}=\lim_{x\to+\infty}\frac{3x}{2x}=\frac32.
$$

## Cầu nối sang tính liên tục (xem trước)

Tính liên tục khép vòng: $f$ **liên tục** tại $a$ khi $\lim_{x\to a}f(x)=f(a)$. Ta bắt đầu từ đó vào buổi sau.

## Lời giải các bài thảo luận

**Dãy số (Đến lượt bạn 1).**

1. $5,8,11,14,\dots$: tường minh $a_n=5+3(n-1)=3n+2$; truy hồi $a_1=5,\ a_{n+1}=a_n+3$.
2. $a_n=(-1)^n n$ **không** bị chặn (độ lớn $n\to\infty$) và **không** đơn điệu (đổi dấu liên tục).
3. $a_n=\frac{n-1}{n}$: $a_1=0,\ a_2=\tfrac12,\ a_3=\tfrac23$; danh sách tăng về $1$ (thực ra $a_n=1-\frac1n\to1$).

**Giới hạn dãy (Đến lượt bạn 2).**

1. $\displaystyle\lim\frac{2n^2+1}{n^2+n}=\lim\frac{2+\frac1{n^2}}{1+\frac1n}=2$.
2. $\displaystyle\lim\frac{\cos n}{n}=0$ vì $-\frac1n\le\frac{\cos n}{n}\le\frac1n$ (kẹp).
3. $\displaystyle\lim\Big(1+\frac1{2n}\Big)^n=\lim\Big(1+\frac1{2n}\Big)^{2n\cdot\frac12}=e^{1/2}$.

**Thảo luận $\ln n / n$.** $f(n)\to L\Rightarrow a_n\to L$ đúng vì $a_n$ chính là hạn chế của $f$ trên số nguyên, và đặc trưng qua dãy chạy theo chiều đó. Chiều ngược có thể sai: $a_n=\sin(n\pi)=0\to0$ nhưng $f(x)=\sin(\pi x)$ không có giới hạn khi $x\to\infty$.

**Vô cực (Đến lượt bạn 3).**

1. $\displaystyle\lim_{x\to+\infty}\frac{\sqrt{2x^2+1}}{3x-5}=\lim_{x\to+\infty}\frac{\sqrt{2+\frac1{x^2}}}{3-\frac5x}=\frac{\sqrt2}{3}$ (tiệm cận ngang $y=\tfrac{\sqrt2}{3}$).
2. $\displaystyle\lim_{x\to 2^+}\frac{1}{x-2}=+\infty$ (tiệm cận đứng $x=2$).
3. $\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)=\lim_{x\to+\infty}\frac{x}{\sqrt{x^2+x}+x}=\frac12$ (nhân liên hợp).

## Bài tập luyện tập

Ngân hàng bài tập; không nhất thiết làm hết cùng lúc.

**A. Dãy số (công thức, truy hồi, đơn điệu, bị chặn)**

1. Cho công thức tường minh và truy hồi cho $2,5,8,11,\dots$ và cho $3,6,12,24,\dots$
2. Phân loại cấp số cộng, cấp số nhân, hay không: $a_n=7-2n$; $a_n=5\cdot 3^{\,n}$; $a_n=n^2$.
3. Xét đơn điệu và/hoặc bị chặn: $a_n=\frac{n}{n+1}$; $a_n=(-1)^n\frac1n$; $a_n=\frac{2^n}{n!}$.
4. Chứng minh $x_n=\left(1+\frac1n\right)^n$ tăng và bị chặn trên (dùng Bernoulli).

**B. Giới hạn của dãy**

5. $\displaystyle\lim\frac{n^2-n}{(n+1)(n^2+1)}$.
6. $\displaystyle\lim\frac{1+7^{\,n+2}}{3-7^{\,n}}$ và $\displaystyle\lim\frac{2^{\,n+2}+3^{\,n+3}}{2^n+3^n}$.
7. $\displaystyle\lim\big(\sqrt{n^2+1}-n\big)$ và $\displaystyle\lim\frac{\sqrt{n^2+1}-n}{\sqrt{n+1}-\sqrt n}$.
8. $\displaystyle\lim\frac{1}{\sqrt{n!}}$ và $\displaystyle\lim\sqrt[n]{n}$ (kẹp / nhị thức).
9. $\displaystyle\lim\Big(1+\frac1{n+k}\Big)^n$ và $\displaystyle\lim\Big(\frac{n}{n+1}\Big)^n$.
10. Truy hồi: $a_1=\sqrt2,\ a_{n+1}=\sqrt{2a_n}$; và $x_n=\underbrace{\sqrt{a+\sqrt{a+\cdots+\sqrt a}}}_{n}$ với $a>0$. Chứng minh hội tụ và tìm giới hạn.
11. Chứng minh $a_n=(-1)^n\frac{2n+3}{3n+1}$ phân kỳ (hai dãy con).

**C. Giới hạn của hàm số**

12. $\displaystyle\lim_{x\to 3}\frac{x^3-5x+4}{x^2-2}$ và $\displaystyle\lim_{x\to 0}x^2\cos\frac1x$.
13. Tính các giới hạn một phía của $\operatorname{sign}x$, $\dfrac{x}{|x|}$, và $|x|$ tại $0$.
14. Chứng minh $\displaystyle\lim_{x\to 0}\sin\frac1x$ không tồn tại bằng hai dãy.
15. Hàm khúc: $f(x)=\sqrt{x-4}$ với $x\ge4$, $f(x)=8-2x$ với $x<4$; tìm $\lim_{x\to4}f(x)$.

**D. Giới hạn liên quan vô cực**

16. $\displaystyle\lim_{x\to\infty}\frac{3x^2-x-2}{5x^2+4x+1}$ và $\displaystyle\lim_{x\to+\infty}\frac{x^2+x}{3-x}$.
17. Tiệm cận đứng của $\dfrac{2x}{x-3}$; tiệm cận ngang của $\dfrac{\sqrt{2x^2+1}}{3x-5}$.
18. Tiệm cận xiên của $\dfrac{x^3}{x^2+1}$.
19. $\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)$ và $\displaystyle\lim_{x\to+\infty}(x^2-x)$.

**E. Vô cùng bé và tương đương**

20. Bậc (cao/cùng/thấp) của $1-\cos x$ so với $x$, và của $\sqrt[3]{x}$ so với $x$, khi $x\to0$.
21. $\displaystyle\lim_{x\to0}\frac{\sin 5x}{x}$, $\displaystyle\lim_{x\to0}\frac{\ln(1+3x)}{\tan 2x}$, $\displaystyle\lim_{x\to0}\frac{e^{x^2}-\cos x}{x^2}$.
22. $\displaystyle\lim_{x\to+\infty}\frac{\sqrt{x^2+4}+2x+3\sqrt x}{\sqrt{x^2-4}+x}$.

## Bài đọc và tham khảo

- [OpenStax Calculus Volume 2, Section 5.1: Sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences)
- [OpenStax Calculus Volume 1, 2.2: The Limit of a Function](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function), [2.3: Limit Laws](https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws), [2.4: Continuity](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity)
- [Active Calculus 1.2: Khái niệm giới hạn](https://activecalculus.org/single/sec-1-2-limits.html)
- Slide bài giảng: [bộ slide Buổi 02](../../slides/02-sequences/)
{% end %}
