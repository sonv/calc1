+++
title = "05. Integration Foundations"
description = "Lecture on antiderivatives, indefinite integrals, substitution, integration by parts, Riemann sums, definite integrals, and the Fundamental Theorem of Calculus."
weight = 50
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- identify antiderivatives and write indefinite integrals with the constant of integration
- use basic antiderivative formulas and linearity
- apply substitution to undo a chain rule
- apply integration by parts to undo a product rule
- define a definite integral as a limit of Riemann sums
- use the Fundamental Theorem of Calculus to evaluate definite integrals
- use substitution, integration by parts, and symmetry for definite integrals

Integration begins with the reverse problem of differentiation: if a derivative tells us a rate of change, an antiderivative recovers a possible total.

## Antiderivatives And Indefinite Integrals

A function $F$ is an **antiderivative** of $f$ on an interval $I$ if

$$
F'(x)=f(x)\qquad (x\in I).
$$

If $F$ is one antiderivative of $f$, then the general antiderivative is

$$
F(x)+C.
$$

We write this as an **indefinite integral**:

$$
\int f(x)\,dx=F(x)+C.
$$

Always check an indefinite integral by differentiating the answer.

Important basic formulas include:

$$
\int x^\alpha\,dx=\frac{x^{\alpha+1}}{\alpha+1}+C,\quad \alpha\ne-1,
$$

$$
\int\frac{dx}{x}=\ln|x|+C,\qquad
\int e^x\,dx=e^x+C,
$$

$$
\int\sin x\,dx=-\cos x+C,\qquad
\int\cos x\,dx=\sin x+C.
$$

## Substitution

Substitution is the chain rule in reverse. If $u=u(x)$ and $du=u'(x)\,dx$, then

$$
\int f(u(x))u'(x)\,dx=\int f(u)\,du=F(u)+C.
$$

Example:

$$
\int \sin^3x\cos x\,dx.
$$

Let $u=\sin x$, so $du=\cos x\,dx$. Then

$$
\int \sin^3x\cos x\,dx=\int u^3\,du=\frac{u^4}{4}+C=\frac{\sin^4x}{4}+C.
$$

## Integration By Parts

Integration by parts is the product rule in reverse:

$$
\int u\,dv=uv-\int v\,du.
$$

Example:

$$
I=\int x\sin x\,dx.
$$

Take $u=x$ and $dv=\sin x\,dx$. Then $du=dx$ and $v=-\cos x$, so

$$
I=-x\cos x+\int\cos x\,dx=-x\cos x+\sin x+C.
$$

## Definite Integrals And Riemann Sums

Partition $[a,b]$ into $n$ subintervals of width

$$
\Delta x=\frac{b-a}{n}.
$$

Choose sample points $x_i^*\in[x_{i-1},x_i]$. A Riemann sum is

$$
\sum_{i=1}^n f(x_i^*)\Delta x.
$$

When the limit exists,

$$
\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^n f(x_i^*)\Delta x.
$$

If $f(x)\ge0$ on $[a,b]$, this definite integral is the area under the graph of $f$ from $a$ to $b$.

## Fundamental Theorem Of Calculus

If $f$ is continuous and

$$
g(x)=\int_a^x f(t)\,dt,
$$

then

$$
g'(x)=f(x).
$$

If $F'(x)=f(x)$ on $[a,b]$, then

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

Example:

$$
\int_{\pi/6}^{\pi/4}\frac{dx}{\cos^2x}
=\tan x\Big|_{\pi/6}^{\pi/4}
=1-\frac{\sqrt3}{3}.
$$

## Definite-Integral Techniques

For substitution, change the limits:

$$
\int_a^b f(u(x))u'(x)\,dx=\int_{u(a)}^{u(b)} f(u)\,du.
$$

For integration by parts:

$$
\int_a^b u\,dv=uv\Big|_a^b-\int_a^b v\,du.
$$

For symmetry on $[-a,a]$:

$$
f\text{ odd}\Rightarrow \int_{-a}^{a}f(x)\,dx=0,
$$

$$
f\text{ even}\Rightarrow \int_{-a}^{a}f(x)\,dx=2\int_0^a f(x)\,dx.
$$

## Practice

1. $\displaystyle \int\left(3x^2-\frac4x+2e^x\right)\,dx$.
2. $\displaystyle \int x(1+x^2)^5\,dx$.
3. $\displaystyle \int x\cos x\,dx$.
4. $\displaystyle \int_0^2(3x^2-4x+1)\,dx$.
5. $\displaystyle \int_0^2x\sqrt{4+x^2}\,dx$.
6. $\displaystyle \int_{-1}^{1}\frac{x^3}{1+x^2}\,dx$.

## Reading And References

- Course topics: antiderivatives, substitution, integration by parts, definite integrals, Riemann sums, and the Fundamental Theorem of Calculus
- [OpenStax Calculus Volume 1, 4.9: Antiderivatives](https://openstax.org/books/calculus-volume-1/pages/4-9-antiderivatives)
- [OpenStax Calculus Volume 1, Chapter 5: Integration](https://openstax.org/books/calculus-volume-1/pages/5-introduction)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Kết thúc bài giảng này, sinh viên có thể:

- nhận ra nguyên hàm và viết tích phân bất định với hằng số tích phân
- dùng các công thức nguyên hàm cơ bản và tính tuyến tính
- áp dụng đổi biến để đảo quy tắc dây chuyền
- áp dụng tích phân từng phần để đảo quy tắc tích
- định nghĩa tích phân xác định bằng giới hạn của tổng Riemann
- dùng định lý cơ bản của giải tích để tính tích phân xác định
- dùng đổi biến, từng phần, và đối xứng cho tích phân xác định

Tích phân bắt đầu từ bài toán ngược của đạo hàm: nếu đạo hàm cho ta tốc độ thay đổi, nguyên hàm khôi phục một tổng lượng có thể có.

## Nguyên hàm và tích phân bất định

Hàm $F$ là **nguyên hàm** của $f$ trên khoảng $I$ nếu

$$
F'(x)=f(x)\qquad (x\in I).
$$

Nếu $F$ là một nguyên hàm của $f$, thì nguyên hàm tổng quát là

$$
F(x)+C.
$$

Ta viết bằng ký hiệu **tích phân bất định**:

$$
\int f(x)\,dx=F(x)+C.
$$

Luôn kiểm tra tích phân bất định bằng cách đạo hàm đáp án.

Một số công thức cơ bản:

$$
\int x^\alpha\,dx=\frac{x^{\alpha+1}}{\alpha+1}+C,\quad \alpha\ne-1,
$$

$$
\int\frac{dx}{x}=\ln|x|+C,\qquad
\int e^x\,dx=e^x+C,
$$

$$
\int\sin x\,dx=-\cos x+C,\qquad
\int\cos x\,dx=\sin x+C.
$$

## Đổi biến

Đổi biến là quy tắc dây chuyền theo chiều ngược. Nếu $u=u(x)$ và $du=u'(x)\,dx$, thì

$$
\int f(u(x))u'(x)\,dx=\int f(u)\,du=F(u)+C.
$$

Ví dụ:

$$
\int \sin^3x\cos x\,dx.
$$

Đặt $u=\sin x$, nên $du=\cos x\,dx$. Khi đó

$$
\int \sin^3x\cos x\,dx=\int u^3\,du=\frac{u^4}{4}+C=\frac{\sin^4x}{4}+C.
$$

## Tích phân từng phần

Tích phân từng phần là quy tắc tích theo chiều ngược:

$$
\int u\,dv=uv-\int v\,du.
$$

Ví dụ:

$$
I=\int x\sin x\,dx.
$$

Chọn $u=x$ và $dv=\sin x\,dx$. Khi đó $du=dx$ và $v=-\cos x$, nên

$$
I=-x\cos x+\int\cos x\,dx=-x\cos x+\sin x+C.
$$

## Tích phân xác định và tổng Riemann

Chia $[a,b]$ thành $n$ khoảng con có độ dài

$$
\Delta x=\frac{b-a}{n}.
$$

Chọn điểm mẫu $x_i^*\in[x_{i-1},x_i]$. Tổng Riemann là

$$
\sum_{i=1}^n f(x_i^*)\Delta x.
$$

Khi giới hạn tồn tại,

$$
\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^n f(x_i^*)\Delta x.
$$

Nếu $f(x)\ge0$ trên $[a,b]$, tích phân xác định này là diện tích dưới đồ thị của $f$ từ $a$ đến $b$.

## Định lý cơ bản của giải tích

Nếu $f$ liên tục và

$$
g(x)=\int_a^x f(t)\,dt,
$$

thì

$$
g'(x)=f(x).
$$

Nếu $F'(x)=f(x)$ trên $[a,b]$, thì

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

Ví dụ:

$$
\int_{\pi/6}^{\pi/4}\frac{dx}{\cos^2x}
=\tan x\Big|_{\pi/6}^{\pi/4}
=1-\frac{\sqrt3}{3}.
$$

## Kỹ thuật cho tích phân xác định

Với đổi biến, phải đổi cả cận:

$$
\int_a^b f(u(x))u'(x)\,dx=\int_{u(a)}^{u(b)} f(u)\,du.
$$

Với tích phân từng phần:

$$
\int_a^b u\,dv=uv\Big|_a^b-\int_a^b v\,du.
$$

Với đối xứng trên $[-a,a]$:

$$
f\text{ lẻ}\Rightarrow \int_{-a}^{a}f(x)\,dx=0,
$$

$$
f\text{ chẵn}\Rightarrow \int_{-a}^{a}f(x)\,dx=2\int_0^a f(x)\,dx.
$$

## Luyện tập

1. $\displaystyle \int\left(3x^2-\frac4x+2e^x\right)\,dx$.
2. $\displaystyle \int x(1+x^2)^5\,dx$.
3. $\displaystyle \int x\cos x\,dx$.
4. $\displaystyle \int_0^2(3x^2-4x+1)\,dx$.
5. $\displaystyle \int_0^2x\sqrt{4+x^2}\,dx$.
6. $\displaystyle \int_{-1}^{1}\frac{x^3}{1+x^2}\,dx$.

## Bài đọc và tài liệu tham khảo

- Chủ đề: nguyên hàm, đổi biến, tích phân từng phần, tích phân xác định, tổng Riemann, và định lý cơ bản của giải tích
- [OpenStax Calculus Volume 1, 4.9: Antiderivatives](https://openstax.org/books/calculus-volume-1/pages/4-9-antiderivatives)
- [OpenStax Calculus Volume 1, Chapter 5: Integration](https://openstax.org/books/calculus-volume-1/pages/5-introduction)
{% end %}
