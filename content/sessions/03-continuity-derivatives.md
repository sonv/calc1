+++
title = "03. Continuity And Derivatives"
description = "Continuity and discontinuity, then the derivative, differentiation rules, higher-order derivatives, and differentials."
weight = 30
+++

{% lang(code="en") %}
## Goals

By the end of this session, students should be able to:

- decide whether a function is continuous at a point, on one side, or on an interval, and use continuity to evaluate limits
- state and apply the Intermediate Value Theorem (root location) and the Extreme Value Theorem
- classify a discontinuity as removable, jump, or infinite
- define the derivative as a limit, compute it from the definition, and read it as a slope and as a rate
- relate differentiability and continuity, and recognize where differentiability fails
- differentiate using the elementary formulas, the product/quotient rules, and the chain rule
- compute higher-order derivatives, use Leibniz's formula, and find $n$th-derivative patterns
- use linearization to approximate values, and compute first- and higher-order differentials

The notes are adapted in part from lectures by Dr. Le Xuan Dai, and from [Active Calculus 1.7-1.8](https://activecalculus.org/single/sec-1-7-lim-cont-diff.html) and [2.1-2.5](https://activecalculus.org/single/sec-2-1-elem-rules.html), and [OpenStax Calculus Volume 1, Chapters 2-3](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity).

## From Limits To Continuity

Last session we computed $\lim_{x\to a}f(x)$. The next question is when that limit equals the value $f(a)$ itself. That property is **continuity**, and it is exactly what lets us draw a graph without lifting the pen. Continuity then powers the derivative, the central tool of the course.

## Continuity

### Continuity At A Number

A function $f$ is **continuous at $a$** if

$$
\lim_{x\to a}f(x)=f(a).
$$

This single equation packs three requirements: $f(a)$ is defined; $\lim_{x\to a}f(x)$ exists; and the two are equal.

Elementary functions (polynomials, $x^\alpha$, $\sin x$, $\cos x$, $a^x$, $\log_a x$ for $x>0$) are continuous at every point of their domain. Sums, differences, products, quotients (nonzero denominator), and compositions of continuous functions are continuous. This is why "substitute the value" is a valid way to find many limits:

$$
\lim_{x\to 3}(x^3-5x^2+7x-10)=-7,\qquad \lim_{x\to 4}\frac{x^2-2x-8}{x^2-4x}=\lim_{x\to 4}\frac{x+2}{x}=\frac32.
$$

### One-Sided Continuity And Intervals

$f$ is **continuous from the right** at $a$ if $\lim_{x\to a^+}f(x)=f(a)$, and **from the left** if $\lim_{x\to a^-}f(x)=f(a)$. Consequently $f$ is continuous at $a$ iff

$$
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=f(a).
$$

$f$ is **continuous on $(a,b)$** if continuous at every point of $(a,b)$, and **continuous on $[a,b]$** if also continuous from the right at $a$ and from the left at $b$.

### Limit Of A Composite Function

If $f$ is continuous at $b$ and $\lim_{x\to a}g(x)=b$, then

$$
\lim_{x\to a}f(g(x))=f\Big(\lim_{x\to a}g(x)\Big)=f(b).
$$

In particular, if $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f\circ g$ is continuous at $a$. For example $\lim_{x\to0}\sin(x^2+2x+3)=\sin 3$, and $h(x)=\cos(x^2-5x+2)$ is continuous for all $x$.

### Two Theorems For Continuous Functions

**Intermediate Value Theorem (IVT).** If $f$ is continuous on $[a,b]$ and $N$ lies between $f(a)$ and $f(b)$, then there is some $c\in(a,b)$ with $f(c)=N$. In practice: if $f(a)$ and $f(b)$ have opposite signs, a root lies in $[a,b]$, and bisection traps it.

**Extreme Value Theorem (EVT).** If $f$ is continuous on a closed bounded interval $[a,b]$, then $f$ attains an absolute maximum and an absolute minimum on $[a,b]$. Both "closed" and "bounded" are needed: $f(x)=x$ has no maximum on $(0,1)$ or on $[0,\infty)$.

## Discontinuity

$f$ is **discontinuous at $a$** if it is not continuous there. Comparing the two one-sided limits with each other and with $f(a)$ names the type.

- **Removable.** Both one-sided limits exist and are equal, but $f(a)$ is undefined or different: $\lim_{x\to a^-}f=\lim_{x\to a^+}f\neq f(a)$. Redefining the single value repairs it. Example: $f(x)=|x|$ for $x\neq0$, $f(0)=1$.
- **Jump.** Both one-sided limits exist but differ: $\lim_{x\to a^-}f\neq\lim_{x\to a^+}f$. Example: $\operatorname{sign}(x)$ at $0$ jumps from $-1$ to $1$.
- **Infinite.** At least one one-sided limit is $\pm\infty$. Example: $1/x$ at $0$; the line $x=0$ is a vertical asymptote.

**Recipe.** At a suspect point $a$, compute $\lim_{x\to a^-}f$ and $\lim_{x\to a^+}f$, then compare to $f(a)$.

## The Derivative

### Two Motivations

**Tangent line.** The tangent to $y=f(x)$ at $P(a,f(a))$ has slope $m=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$. For $y=x^2$ at $(1,1)$, $m=\lim_{x\to1}(x+1)=2$, so the tangent is $y=2x-1$.

**Velocity.** For motion $s=f(t)$, the average velocity over $[a,a+h]$ is $\frac{f(a+h)-f(a)}{h}$, and the instantaneous velocity is its limit as $h\to0$.

### Definition

The **derivative of $f$ at $a$** is

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a},
$$

when the limit exists. Notations: $f'(a)=y'(a)=\left.\frac{dy}{dx}\right|_{x=a}=\frac{d}{dx}f(a)$.

### Differentiability And Continuity

The one-sided derivatives are $f'&#95;{-}(a)=\lim_{x\to a^-}\frac{f(x)-f(a)}{x-a}$ and $f'&#95;{+}(a)$ similarly; $f$ is **differentiable at $a$** iff both exist and are equal. Key fact: differentiable at $a$ $\Rightarrow$ continuous at $a$, but **not** conversely. The standard counterexample is $f(x)=|x|$: it is continuous at $0$ but $f'&#95;{+}(0)=1\neq-1=f'&#95;{-}(0)$, so $f'(0)$ does not exist (a corner).

### Derivatives Of Elementary Functions

$$
(x^\alpha)'=\alpha x^{\alpha-1},\quad (a^x)'=a^x\ln a,\quad (e^x)'=e^x,\quad (\log_a|x|)'=\frac{1}{x\ln a},\quad (\ln|x|)'=\frac1x.
$$

$$
(\sin x)'=\cos x,\quad (\cos x)'=-\sin x,\quad (\tan x)'=\frac{1}{\cos^2x},\quad (\cot x)'=-\frac{1}{\sin^2x}.
$$

$$
(\arcsin x)'=\frac{1}{\sqrt{1-x^2}},\ (\arccos x)'=-\frac{1}{\sqrt{1-x^2}},\ (\arctan x)'=\frac{1}{1+x^2},\ (\operatorname{arccot} x)'=-\frac{1}{1+x^2}.
$$

$$
(\sinh x)'=\cosh x,\quad (\cosh x)'=\sinh x,\quad (\tanh x)'=\frac{1}{\cosh^2x},\quad (\coth x)'=-\frac{1}{\sinh^2x}.
$$

### Rules And The Chain Rule

$$
(cu)'=cu',\quad (u\pm v)'=u'\pm v',\quad (uv)'=u'v+uv',\quad \Big(\frac uv\Big)'=\frac{u'v-uv'}{v^2}.
$$

**Chain rule.** If $u$ is differentiable at $x$ and $f$ at $u(x)$, then $y=f(u(x))$ has $y'=f'(u(x))\,u'(x)$. Example: $y=\sin^5(4x+3)\Rightarrow y'=20\sin^4(4x+3)\cos(4x+3)$.

## Higher-Order Derivatives

$f''=(f')'$ and, in general, $f^{(n)}=(f^{(n-1)})'$. Linearity holds: $(c_1f+c_2g)^{(n)}=c_1f^{(n)}+c_2g^{(n)}$. If $s(t)$ is position then $s'=v$ is velocity and $s''=a$ is acceleration.

**Leibniz's formula.** $(f g)^{(n)}=\sum_{k=0}^{n}\binom nk f^{(n-k)}g^{(k)}$.

Standard patterns: $(e^x)^{(n)}=e^x$, $(a^x)^{(n)}=a^x\ln^n a$, $(\sin ax)^{(n)}=a^n\sin(ax+\tfrac{n\pi}{2})$, $(\cos ax)^{(n)}=a^n\cos(ax+\tfrac{n\pi}{2})$, $(\ln|x|)^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^n}$, and $\big((ax+b)^{-1}\big)^{(n)}=\frac{(-1)^n a^n n!}{(ax+b)^{n+1}}$.

## Linear Approximation And Differentials

Near $a$, the curve hugs its tangent line. The **linearization** of $f$ at $a$ is $L(x)=f(a)+f'(a)(x-a)$, and $f(x)\approx L(x)$. For $f(x)=\sqrt{x+3}$ at $a=1$, $L(x)=2+\tfrac14(x-1)$, so $\sqrt{3.98}\approx1.995$ and $\sqrt{4.05}\approx2.0125$.

The **first-order differential** of $y=f(x)$ is $dy=f'(a)\,dx$. Geometrically $dy$ is the rise of the tangent line, while $\Delta y=f(x+\Delta x)-f(x)$ is the rise of the curve; $\Delta y\approx dy$, and the approximation improves as $\Delta x\to0$. Higher-order differentials are $d^2f(a)=f''(a)\,dx^2$ and, in general, $d^nf(a)=f^{(n)}(a)\,dx^n$.

## Solutions To The In-Class Exercises

**A. Continuity.**
1. $\lim_{x\to2}\frac{x^2+3x}{x+1}=\frac{4+6}{3}=\frac{10}{3}$ (the function is continuous at $2$).
2. $f(x)=1-\sqrt{1-x^2}$ is a composition of continuous functions on $(-1,1)$; at the endpoints $\lim_{x\to-1^+}f=1=f(-1)$ and $\lim_{x\to1^-}f=1=f(1)$, so $f$ is continuous on $[-1,1]$.
3. The left limit and value at $1$ are $1$; the right limit is $2(1)+c=2+c$. Continuity requires $2+c=1$, so $c=-1$.

**B. Classify the discontinuity.**
1. $\frac{x^2-9}{x-3}=x+3\to6$ but $f(3)$ is undefined: **removable**.
2. $\frac{|x-2|}{x-2}\to1$ from the right and $\to-1$ from the left: **jump**.
3. $\frac{1}{(x-1)^2}\to+\infty$ on both sides: **infinite**.
4. $\frac{\sin x}{x}\to1$ but $f(0)$ is undefined: **removable**.

**C. Intermediate Value Theorem.**
1. $f(x)=x^3-x-1$ is continuous, $f(1)=-1<0<5=f(2)$, so a root lies in $(1,2)$.
2. $f(1.5)=1.5^3-1.5-1=0.875>0$, and $f(1)<0$, so the root is in $(1,1.5)$.
3. $g(x)=\cos x-x$ is continuous, $g(0)=1>0$ and $g(1)=\cos1-1<0$, so $\cos x=x$ has a solution in $(0,1)$.

**D. Derivative from the definition.**
1. $f'(a)=\lim_{h\to0}\frac{(a+h)^2-8(a+h)+9-(a^2-8a+9)}{h}=\lim_{h\to0}(2a+h-8)=2a-8$.
2. $f'(a)=\lim_{x\to a}\frac{\sqrt x-\sqrt a}{x-a}=\lim_{x\to a}\frac{1}{\sqrt x+\sqrt a}=\frac{1}{2\sqrt a}$ for $a>0$.
3. \\(f(x)=|x-3|\\): since \\(f'&#95;{+}(3)=1\\) and \\(f'&#95;{-}(3)=-1\\), the one-sided derivatives are unequal, so \\(f\\) is not differentiable at \\(3\\) (a corner).

**E. Rules and the chain rule.**
1. $y=(3x^2+1)e^x\Rightarrow y'=6xe^x+(3x^2+1)e^x=e^x(3x^2+6x+1)$.
2. $y=\frac{x-1}{x^2+1}\Rightarrow y'=\frac{(x^2+1)-(x-1)2x}{(x^2+1)^2}=\frac{-x^2+2x+1}{(x^2+1)^2}$.
3. $y=\cos(\sqrt{x^2+1})\Rightarrow y'=-\sin(\sqrt{x^2+1})\cdot\frac{x}{\sqrt{x^2+1}}$.
4. $y=\ln(\tan x)\Rightarrow y'=\frac{1}{\tan x}\cdot\frac{1}{\cos^2x}=\frac{1}{\sin x\cos x}=\frac{2}{\sin 2x}$.
5. $y=\arctan(3x)\Rightarrow y'=\frac{3}{1+9x^2}$.
6. $y=\sin^5(4x+3)\Rightarrow y'=20\sin^4(4x+3)\cos(4x+3)$.

**F. Higher-order derivatives.**
1. $f(x)=\frac{2x+3}{x-2}\Rightarrow f'(x)=\frac{-7}{(x-2)^2}\Rightarrow f''(x)=\frac{14}{(x-2)^3}\Rightarrow f''(0)=-\frac74$.
2. $\frac{1}{x^2-4}=\frac14\big(\frac{1}{x-2}-\frac{1}{x+2}\big)$, so $f^{(n)}(x)=\frac{(-1)^n n!}{4}\big[(x-2)^{-(n+1)}-(x+2)^{-(n+1)}\big]$.
3. By Leibniz with $g=x^2$ (only $g,g',g''$ survive), $(x^2e^x)^{(n)}=e^x\big(x^2+2nx+n(n-1)\big)$.

**G. Approximation and differentials.**
1. $f(x)=x^{1/3}$ at $a=8$: $L(x)=2+\frac{1}{12}(x-8)$, so $\sqrt[3]{8.1}\approx2+\frac{0.1}{12}\approx2.00833$.
2. $dy=(3x^2+2x-2)\,dx=14(0.01)=0.14$; $\Delta y=f(2.01)-f(2)=9.140701-9=0.140701$.
3. $f(x)=\sqrt{x^2-4x+3}$: $f''(0)=-\frac{1}{3\sqrt3}$, so $d^2f(0)=-\frac{1}{3\sqrt3}\,dx^2$.

## Extra Practice

1. Find all discontinuities of $f(x)=\frac{x}{x^2-x}$ and name each type.
2. Show that $p(x)=x^5+x-3$ has at least one real root.
3. Differentiate $y=x^x$ (write $x^x=e^{x\ln x}$) and $y=\frac{\ln x}{x}$.
4. Find the equation of the tangent to $y=\sqrt{x}$ at $x=4$.
5. Find $y^{(n)}$ for $y=\frac{1}{1-x}$ and for $y=\sin x$.
6. Use a differential to estimate the change in the area of a circle when the radius grows from $10$ to $10.1$.

## Reading And References

- [Active Calculus 1.7: Limits, Continuity, and Differentiability](https://activecalculus.org/single/sec-1-7-lim-cont-diff.html)
- [Active Calculus 1.8: The Tangent Line Approximation](https://activecalculus.org/single/sec-1-8-tan-line-approx.html)
- [Active Calculus 1.3-1.4: The derivative](https://activecalculus.org/single/sec-1-3-derivative-pt.html) and [2.1, 2.3, 2.5: rules and the chain rule](https://activecalculus.org/single/sec-2-1-elem-rules.html)
- [OpenStax Calculus Volume 1, 2.4: Continuity](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity) and [Chapter 3: Derivatives](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Kết thúc buổi học, sinh viên có thể:

- xét tính liên tục của hàm tại một điểm, một phía, hay trên một khoảng, và dùng tính liên tục để tính giới hạn
- phát biểu và vận dụng Định lý giá trị trung gian (định vị nghiệm) và Định lý giá trị cực trị
- phân loại điểm gián đoạn là khử được, nhảy, hay vô cực
- định nghĩa đạo hàm bằng giới hạn, tính từ định nghĩa, và hiểu nó như một hệ số góc và một tốc độ thay đổi
- liên hệ giữa khả vi và liên tục, và nhận ra nơi tính khả vi mất
- tính đạo hàm bằng các công thức cơ bản, quy tắc tích/thương, và quy tắc hàm hợp
- tính đạo hàm cấp cao, dùng công thức Leibniz, và tìm quy luật đạo hàm cấp $n$
- dùng tuyến tính hóa để xấp xỉ giá trị, và tính vi phân cấp một, cấp cao

Ghi chú được biên soạn một phần từ bài giảng của TS. Lê Xuân Đại, và từ [Active Calculus 1.7-1.8](https://activecalculus.org/single/sec-1-7-lim-cont-diff.html) cùng [2.1-2.5](https://activecalculus.org/single/sec-2-1-elem-rules.html), và [OpenStax Calculus Volume 1, Chương 2-3](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity).

## Từ giới hạn đến tính liên tục

Buổi trước ta tính $\lim_{x\to a}f(x)$. Câu hỏi tiếp theo là khi nào giới hạn đó bằng đúng giá trị $f(a)$. Tính chất ấy là **tính liên tục**, đúng thứ cho phép vẽ đồ thị mà không nhấc bút. Tính liên tục lại làm nền cho đạo hàm, công cụ trung tâm của môn học.

## Tính liên tục

### Liên tục tại một điểm

Hàm $f$ **liên tục tại $a$** nếu

$$
\lim_{x\to a}f(x)=f(a).
$$

Đẳng thức này gói ba yêu cầu: $f(a)$ xác định; $\lim_{x\to a}f(x)$ tồn tại; và hai giá trị bằng nhau.

Các hàm sơ cấp (đa thức, $x^\alpha$, $\sin x$, $\cos x$, $a^x$, $\log_a x$ với $x>0$) liên tục tại mọi điểm thuộc miền của chúng. Tổng, hiệu, tích, thương (mẫu khác $0$) và hợp của các hàm liên tục đều liên tục. Vì thế "thế giá trị vào" là cách hợp lệ để tính nhiều giới hạn:

$$
\lim_{x\to 3}(x^3-5x^2+7x-10)=-7,\qquad \lim_{x\to 4}\frac{x^2-2x-8}{x^2-4x}=\lim_{x\to 4}\frac{x+2}{x}=\frac32.
$$

### Liên tục một phía và trên khoảng

$f$ **liên tục phải** tại $a$ nếu $\lim_{x\to a^+}f(x)=f(a)$, và **liên tục trái** nếu $\lim_{x\to a^-}f(x)=f(a)$. Do đó $f$ liên tục tại $a$ khi và chỉ khi

$$
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=f(a).
$$

$f$ **liên tục trên $(a,b)$** nếu liên tục tại mọi điểm của $(a,b)$, và **liên tục trên $[a,b]$** nếu thêm điều kiện liên tục phải tại $a$ và liên tục trái tại $b$.

### Giới hạn của hàm hợp

Nếu $f$ liên tục tại $b$ và $\lim_{x\to a}g(x)=b$, thì

$$
\lim_{x\to a}f(g(x))=f\Big(\lim_{x\to a}g(x)\Big)=f(b).
$$

Đặc biệt, nếu $g$ liên tục tại $a$ và $f$ liên tục tại $g(a)$, thì $f\circ g$ liên tục tại $a$. Ví dụ $\lim_{x\to0}\sin(x^2+2x+3)=\sin 3$, và $h(x)=\cos(x^2-5x+2)$ liên tục với mọi $x$.

### Hai định lý cho hàm liên tục

**Định lý giá trị trung gian (IVT).** Nếu $f$ liên tục trên $[a,b]$ và $N$ nằm giữa $f(a)$ và $f(b)$, thì tồn tại $c\in(a,b)$ sao cho $f(c)=N$. Thực hành: nếu $f(a)$ và $f(b)$ trái dấu, có một nghiệm trong $[a,b]$, và phép chia đôi kẹp được nó.

**Định lý giá trị cực trị (EVT).** Nếu $f$ liên tục trên đoạn đóng, bị chặn $[a,b]$, thì $f$ đạt giá trị lớn nhất và nhỏ nhất trên $[a,b]$. Cần cả "đóng" và "bị chặn": $f(x)=x$ không có giá trị lớn nhất trên $(0,1)$ hay trên $[0,\infty)$.

## Sự gián đoạn

$f$ **gián đoạn tại $a$** nếu nó không liên tục tại đó. So sánh hai giới hạn một phía với nhau và với $f(a)$ sẽ gọi tên loại gián đoạn.

- **Khử được.** Hai giới hạn một phía tồn tại và bằng nhau, nhưng $f(a)$ không xác định hoặc khác: $\lim_{x\to a^-}f=\lim_{x\to a^+}f\neq f(a)$. Định nghĩa lại một giá trị là sửa được. Ví dụ: $f(x)=|x|$ với $x\neq0$, $f(0)=1$.
- **Nhảy.** Hai giới hạn một phía tồn tại nhưng khác nhau: $\lim_{x\to a^-}f\neq\lim_{x\to a^+}f$. Ví dụ: $\operatorname{sign}(x)$ tại $0$ nhảy từ $-1$ sang $1$.
- **Vô cực.** Ít nhất một giới hạn một phía bằng $\pm\infty$. Ví dụ: $1/x$ tại $0$; đường $x=0$ là tiệm cận đứng.

**Quy trình.** Tại điểm nghi ngờ $a$, tính $\lim_{x\to a^-}f$ và $\lim_{x\to a^+}f$, rồi so sánh với $f(a)$.

## Đạo hàm

### Hai động lực

**Tiếp tuyến.** Tiếp tuyến của $y=f(x)$ tại $P(a,f(a))$ có hệ số góc $m=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$. Với $y=x^2$ tại $(1,1)$, $m=\lim_{x\to1}(x+1)=2$, nên tiếp tuyến là $y=2x-1$.

**Vận tốc.** Với chuyển động $s=f(t)$, vận tốc trung bình trên $[a,a+h]$ là $\frac{f(a+h)-f(a)}{h}$, và vận tốc tức thời là giới hạn của nó khi $h\to0$.

### Định nghĩa

**Đạo hàm của $f$ tại $a$** là

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a},
$$

khi giới hạn tồn tại. Ký hiệu: $f'(a)=y'(a)=\left.\frac{dy}{dx}\right|_{x=a}=\frac{d}{dx}f(a)$.

### Khả vi và liên tục

Đạo hàm một phía là $f'&#95;{-}(a)=\lim_{x\to a^-}\frac{f(x)-f(a)}{x-a}$ và $f'&#95;{+}(a)$ tương tự; $f$ **khả vi tại $a$** khi và chỉ khi cả hai tồn tại và bằng nhau. Tính chất then chốt: khả vi tại $a$ $\Rightarrow$ liên tục tại $a$, nhưng chiều ngược lại **sai**. Phản ví dụ chuẩn là $f(x)=|x|$: liên tục tại $0$ nhưng $f'&#95;{+}(0)=1\neq-1=f'&#95;{-}(0)$, nên $f'(0)$ không tồn tại (một góc nhọn).

### Đạo hàm các hàm sơ cấp

$$
(x^\alpha)'=\alpha x^{\alpha-1},\quad (a^x)'=a^x\ln a,\quad (e^x)'=e^x,\quad (\log_a|x|)'=\frac{1}{x\ln a},\quad (\ln|x|)'=\frac1x.
$$

$$
(\sin x)'=\cos x,\quad (\cos x)'=-\sin x,\quad (\tan x)'=\frac{1}{\cos^2x},\quad (\cot x)'=-\frac{1}{\sin^2x}.
$$

$$
(\arcsin x)'=\frac{1}{\sqrt{1-x^2}},\ (\arccos x)'=-\frac{1}{\sqrt{1-x^2}},\ (\arctan x)'=\frac{1}{1+x^2},\ (\operatorname{arccot} x)'=-\frac{1}{1+x^2}.
$$

$$
(\sinh x)'=\cosh x,\quad (\cosh x)'=\sinh x,\quad (\tanh x)'=\frac{1}{\cosh^2x},\quad (\coth x)'=-\frac{1}{\sinh^2x}.
$$

### Quy tắc và quy tắc hàm hợp

$$
(cu)'=cu',\quad (u\pm v)'=u'\pm v',\quad (uv)'=u'v+uv',\quad \Big(\frac uv\Big)'=\frac{u'v-uv'}{v^2}.
$$

**Quy tắc hàm hợp.** Nếu $u$ khả vi tại $x$ và $f$ khả vi tại $u(x)$, thì $y=f(u(x))$ có $y'=f'(u(x))\,u'(x)$. Ví dụ: $y=\sin^5(4x+3)\Rightarrow y'=20\sin^4(4x+3)\cos(4x+3)$.

## Đạo hàm cấp cao

$f''=(f')'$ và tổng quát $f^{(n)}=(f^{(n-1)})'$. Tính tuyến tính: $(c_1f+c_2g)^{(n)}=c_1f^{(n)}+c_2g^{(n)}$. Nếu $s(t)$ là vị trí thì $s'=v$ là vận tốc và $s''=a$ là gia tốc.

**Công thức Leibniz.** $(f g)^{(n)}=\sum_{k=0}^{n}\binom nk f^{(n-k)}g^{(k)}$.

Các quy luật chuẩn: $(e^x)^{(n)}=e^x$, $(a^x)^{(n)}=a^x\ln^n a$, $(\sin ax)^{(n)}=a^n\sin(ax+\tfrac{n\pi}{2})$, $(\cos ax)^{(n)}=a^n\cos(ax+\tfrac{n\pi}{2})$, $(\ln|x|)^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^n}$, và $\big((ax+b)^{-1}\big)^{(n)}=\frac{(-1)^n a^n n!}{(ax+b)^{n+1}}$.

## Xấp xỉ tuyến tính và vi phân

Gần $a$, đường cong sát với tiếp tuyến. **Tuyến tính hóa** của $f$ tại $a$ là $L(x)=f(a)+f'(a)(x-a)$, và $f(x)\approx L(x)$. Với $f(x)=\sqrt{x+3}$ tại $a=1$, $L(x)=2+\tfrac14(x-1)$, nên $\sqrt{3.98}\approx1.995$ và $\sqrt{4.05}\approx2.0125$.

**Vi phân cấp một** của $y=f(x)$ là $dy=f'(a)\,dx$. Về hình học $dy$ là độ tăng của tiếp tuyến, còn $\Delta y=f(x+\Delta x)-f(x)$ là độ tăng của đường cong; $\Delta y\approx dy$, càng chính xác khi $\Delta x\to0$. Vi phân cấp cao là $d^2f(a)=f''(a)\,dx^2$ và tổng quát $d^nf(a)=f^{(n)}(a)\,dx^n$.

## Lời giải các bài trên lớp

**A. Tính liên tục.**
1. $\lim_{x\to2}\frac{x^2+3x}{x+1}=\frac{4+6}{3}=\frac{10}{3}$ (hàm liên tục tại $2$).
2. $f(x)=1-\sqrt{1-x^2}$ là hợp của các hàm liên tục trên $(-1,1)$; tại hai đầu $\lim_{x\to-1^+}f=1=f(-1)$ và $\lim_{x\to1^-}f=1=f(1)$, nên $f$ liên tục trên $[-1,1]$.
3. Giới hạn trái và giá trị tại $1$ đều bằng $1$; giới hạn phải là $2(1)+c=2+c$. Liên tục đòi hỏi $2+c=1$, nên $c=-1$.

**B. Phân loại gián đoạn.**
1. $\frac{x^2-9}{x-3}=x+3\to6$ nhưng $f(3)$ không xác định: **khử được**.
2. $\frac{|x-2|}{x-2}\to1$ từ phải và $\to-1$ từ trái: **nhảy**.
3. $\frac{1}{(x-1)^2}\to+\infty$ cả hai phía: **vô cực**.
4. $\frac{\sin x}{x}\to1$ nhưng $f(0)$ không xác định: **khử được**.

**C. Định lý giá trị trung gian.**
1. $f(x)=x^3-x-1$ liên tục, $f(1)=-1<0<5=f(2)$, nên có nghiệm trong $(1,2)$.
2. $f(1.5)=1.5^3-1.5-1=0.875>0$, và $f(1)<0$, nên nghiệm nằm trong $(1,1.5)$.
3. $g(x)=\cos x-x$ liên tục, $g(0)=1>0$ và $g(1)=\cos1-1<0$, nên $\cos x=x$ có nghiệm trong $(0,1)$.

**D. Đạo hàm theo định nghĩa.**
1. $f'(a)=\lim_{h\to0}\frac{(a+h)^2-8(a+h)+9-(a^2-8a+9)}{h}=\lim_{h\to0}(2a+h-8)=2a-8$.
2. $f'(a)=\lim_{x\to a}\frac{\sqrt x-\sqrt a}{x-a}=\lim_{x\to a}\frac{1}{\sqrt x+\sqrt a}=\frac{1}{2\sqrt a}$ với $a>0$.
3. \\(f(x)=|x-3|\\): vì \\(f'&#95;{+}(3)=1\\) và \\(f'&#95;{-}(3)=-1\\), hai đạo hàm một phía không bằng nhau, nên \\(f\\) không khả vi tại \\(3\\) (góc nhọn).

**E. Quy tắc và hàm hợp.**
1. $y=(3x^2+1)e^x\Rightarrow y'=6xe^x+(3x^2+1)e^x=e^x(3x^2+6x+1)$.
2. $y=\frac{x-1}{x^2+1}\Rightarrow y'=\frac{(x^2+1)-(x-1)2x}{(x^2+1)^2}=\frac{-x^2+2x+1}{(x^2+1)^2}$.
3. $y=\cos(\sqrt{x^2+1})\Rightarrow y'=-\sin(\sqrt{x^2+1})\cdot\frac{x}{\sqrt{x^2+1}}$.
4. $y=\ln(\tan x)\Rightarrow y'=\frac{1}{\tan x}\cdot\frac{1}{\cos^2x}=\frac{1}{\sin x\cos x}=\frac{2}{\sin 2x}$.
5. $y=\arctan(3x)\Rightarrow y'=\frac{3}{1+9x^2}$.
6. $y=\sin^5(4x+3)\Rightarrow y'=20\sin^4(4x+3)\cos(4x+3)$.

**F. Đạo hàm cấp cao.**
1. $f(x)=\frac{2x+3}{x-2}\Rightarrow f'(x)=\frac{-7}{(x-2)^2}\Rightarrow f''(x)=\frac{14}{(x-2)^3}\Rightarrow f''(0)=-\frac74$.
2. $\frac{1}{x^2-4}=\frac14\big(\frac{1}{x-2}-\frac{1}{x+2}\big)$, nên $f^{(n)}(x)=\frac{(-1)^n n!}{4}\big[(x-2)^{-(n+1)}-(x+2)^{-(n+1)}\big]$.
3. Dùng Leibniz với $g=x^2$ (chỉ $g,g',g''$ còn lại), $(x^2e^x)^{(n)}=e^x\big(x^2+2nx+n(n-1)\big)$.

**G. Xấp xỉ và vi phân.**
1. $f(x)=x^{1/3}$ tại $a=8$: $L(x)=2+\frac{1}{12}(x-8)$, nên $\sqrt[3]{8.1}\approx2+\frac{0.1}{12}\approx2.00833$.
2. $dy=(3x^2+2x-2)\,dx=14(0.01)=0.14$; $\Delta y=f(2.01)-f(2)=9.140701-9=0.140701$.
3. $f(x)=\sqrt{x^2-4x+3}$: $f''(0)=-\frac{1}{3\sqrt3}$, nên $d^2f(0)=-\frac{1}{3\sqrt3}\,dx^2$.

## Bài tập thêm

1. Tìm mọi điểm gián đoạn của $f(x)=\frac{x}{x^2-x}$ và gọi tên từng loại.
2. Chứng minh $p(x)=x^5+x-3$ có ít nhất một nghiệm thực.
3. Tính đạo hàm $y=x^x$ (viết $x^x=e^{x\ln x}$) và $y=\frac{\ln x}{x}$.
4. Tìm phương trình tiếp tuyến của $y=\sqrt{x}$ tại $x=4$.
5. Tìm $y^{(n)}$ cho $y=\frac{1}{1-x}$ và cho $y=\sin x$.
6. Dùng vi phân để ước lượng độ thay đổi diện tích hình tròn khi bán kính tăng từ $10$ lên $10.1$.

## Bài đọc và tham khảo

- [Active Calculus 1.7: Limits, Continuity, and Differentiability](https://activecalculus.org/single/sec-1-7-lim-cont-diff.html)
- [Active Calculus 1.8: The Tangent Line Approximation](https://activecalculus.org/single/sec-1-8-tan-line-approx.html)
- [Active Calculus 1.3-1.4: The derivative](https://activecalculus.org/single/sec-1-3-derivative-pt.html) và [2.1, 2.3, 2.5: quy tắc và hàm hợp](https://activecalculus.org/single/sec-2-1-elem-rules.html)
- [OpenStax Calculus Volume 1, 2.4: Continuity](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity) và [Chương 3: Derivatives](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative)
{% end %}
