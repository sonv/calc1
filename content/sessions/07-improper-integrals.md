+++
title = "07. Improper Integrals"
description = "Lecture on improper integrals of Type 1 (infinite intervals) and Type 2 (unbounded integrands), the reference p-integrals, and the comparison and limit-comparison tests."
weight = 70
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- recognize when an integral is improper, of Type 1, of Type 2, or both
- evaluate improper integrals as limits of ordinary integrals (Newton-Leibniz with a limit at each bad endpoint)
- state and use the reference integrals: $\int_1^{\infty} x^{-p}\,dx$ converges iff $p>1$; $\int_a^b (b-x)^{-\alpha}\,dx$ converges iff $\alpha<1$
- test convergence with the Comparison Theorem and with limit comparison via equivalent functions
- avoid the classic traps: hidden interior asymptotes, and symmetric cancellation over $(-\infty,\infty)$

## Type 1: Infinite Intervals

If $\int_a^t f(x)\,dx$ exists for every $t\ge a$, then

$$
\int_a^{\infty} f(x)\,dx=\lim_{t\to\infty}\int_a^t f(x)\,dx,
$$

provided this limit exists (as a finite number); then the integral is called convergent, otherwise divergent. The integral over $(-\infty,b]$ is defined symmetrically, and the integral over $(-\infty,\infty)$ converges only when both halves converge separately.

Reference integral: $\int_1^{\infty} \dfrac{dx}{x^p}$ converges if $p>1$ and diverges if $p\le1$.

## Type 2: Unbounded Integrands

If $f$ is continuous on $[a,b)$ with a vertical asymptote at $b$, then

$$
\int_a^b f(x)\,dx=\lim_{t\to b^-}\int_a^t f(x)\,dx,
$$

if this limit exists. An asymptote at the left endpoint or at an interior point is handled by the mirrored limit or by splitting the interval.

Reference integral: $\int_a^b \dfrac{dx}{(b-x)^{\alpha}}$ converges if $\alpha<1$ and diverges if $\alpha\ge1$. Note the flip: $p>1$ at infinity, $\alpha<1$ at a finite endpoint.

## Convergence Tests

Comparison Theorem: if $f(x)\ge g(x)\ge0$, convergence of $\int f$ forces convergence of $\int g$, and divergence of $\int g$ forces divergence of $\int f$.

Limit comparison: with $\lambda=\lim f/g$ (both nonnegative), a finite positive $\lambda$ means both integrals behave the same way. In practice, replace the integrand near the bad point by an equivalent power using the standard equivalences as $x\to0$ ($\sin x \sim x$, $e^x-1 \sim x$, $\ln(1+x) \sim x$, $1-\cos x \sim x^2/2$, ...) and the growth scale $\ln^{\alpha}x \ll x^{\beta} \ll a^x$.

## Worked Example

Determine whether $I=\int_0^1 \dfrac{\ln(1+\sqrt[3]{x})}{e^{\sin x}-1}\,dx$ converges. The integrand is undefined at $x=0$. As $x\to0^+$, $\ln(1+\sqrt[3]{x}) \sim x^{1/3}$ and $e^{\sin x}-1 \sim \sin x \sim x$, so the integrand behaves like $x^{1/3}/x=x^{-2/3}$. Since $\alpha=\frac{2}{3}<1$, the integral converges.

## Active Prompts

- Why is $\int_{-\infty}^{\infty} \frac{x}{1+x^2}\,dx$ divergent even though the integrand is odd?
- $\frac{1}{x}$ tends to $0$ at infinity, yet $\int_1^{\infty}\frac{dx}{x}$ diverges. What, precisely, is "not enough" about tending to $0$?
- Where does $\int_{-1}^1 \frac{dx}{x^2}=-2$ go wrong?

## Reading And Practice

Active Calculus 6.5; OpenStax Calculus Volume 2, Section 3.7; Stewart, Calculus: Early Transcendentals, Section 7.8. Worked examples and several practice problems adapted from Dr. Lê Xuân Đại's HCMUT lecture slides on improper integrals.
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau bài giảng này, sinh viên có thể:

- nhận biết khi nào tích phân là suy rộng, loại 1, loại 2, hoặc cả hai
- tính tích phân suy rộng như giới hạn của tích phân thường (Newton-Leibniz với giới hạn tại mỗi cận xấu)
- phát biểu và dùng các tích phân mẫu: $\int_1^{\infty} x^{-p}\,dx$ hội tụ khi và chỉ khi $p>1$; $\int_a^b (b-x)^{-\alpha}\,dx$ hội tụ khi và chỉ khi $\alpha<1$
- xét sự hội tụ bằng Định lý so sánh và so sánh qua giới hạn với hàm tương đương
- tránh các bẫy kinh điển: tiệm cận ẩn bên trong đoạn, và triệt tiêu đối xứng trên $(-\infty,\infty)$

## Loại 1: khoảng vô hạn

Nếu $\int_a^t f(x)\,dx$ tồn tại với mọi $t\ge a$ thì

$$
\int_a^{\infty} f(x)\,dx=\lim_{t\to\infty}\int_a^t f(x)\,dx,
$$

miễn là giới hạn này tồn tại (hữu hạn); khi đó tích phân gọi là hội tụ, ngược lại là phân kỳ. Tích phân trên $(-\infty,b]$ định nghĩa đối xứng, và tích phân trên $(-\infty,\infty)$ chỉ hội tụ khi cả hai nửa tự hội tụ.

Tích phân mẫu: $\int_1^{\infty} \dfrac{dx}{x^p}$ hội tụ nếu $p>1$ và phân kỳ nếu $p\le1$.

## Loại 2: hàm dưới dấu tích phân không bị chặn

Nếu $f$ liên tục trên $[a,b)$ và có tiệm cận đứng tại $b$ thì

$$
\int_a^b f(x)\,dx=\lim_{t\to b^-}\int_a^t f(x)\,dx,
$$

nếu giới hạn này tồn tại. Tiệm cận tại cận trái hoặc điểm trong được xử lý bằng giới hạn đối xứng hoặc tách đoạn.

Tích phân mẫu: $\int_a^b \dfrac{dx}{(b-x)^{\alpha}}$ hội tụ nếu $\alpha<1$ và phân kỳ nếu $\alpha\ge1$. Chú ý quy tắc ngược: $p>1$ tại vô cực, $\alpha<1$ tại cận hữu hạn.

## Tiêu chuẩn hội tụ

Định lý so sánh: nếu $f(x)\ge g(x)\ge0$ thì tích phân của $f$ hội tụ kéo theo tích phân của $g$ hội tụ, và tích phân của $g$ phân kỳ kéo theo tích phân của $f$ phân kỳ.

So sánh qua giới hạn: với $\lambda=\lim f/g$ (cả hai không âm), $\lambda$ dương hữu hạn nghĩa là hai tích phân cùng hội tụ hoặc cùng phân kỳ. Trong thực hành, thay hàm gần điểm xấu bởi lũy thừa tương đương nhờ các tương đương chuẩn khi $x\to0$ ($\sin x \sim x$, $e^x-1 \sim x$, $\ln(1+x) \sim x$, $1-\cos x \sim x^2/2$, ...) và thang bậc $\ln^{\alpha}x \ll x^{\beta} \ll a^x$.

## Ví dụ đã giải

Xét sự hội tụ của $I=\int_0^1 \dfrac{\ln(1+\sqrt[3]{x})}{e^{\sin x}-1}\,dx$. Hàm dưới dấu tích phân không xác định tại $x=0$. Khi $x\to0^+$, $\ln(1+\sqrt[3]{x}) \sim x^{1/3}$ và $e^{\sin x}-1 \sim \sin x \sim x$, nên hàm cỡ $x^{1/3}/x=x^{-2/3}$. Vì $\alpha=\frac{2}{3}<1$, tích phân hội tụ.

## Câu hỏi chủ động

- Vì sao $\int_{-\infty}^{\infty} \frac{x}{1+x^2}\,dx$ phân kỳ dù hàm dưới dấu tích phân là hàm lẻ?
- $\frac{1}{x}$ dần về $0$ tại vô cực, nhưng $\int_1^{\infty}\frac{dx}{x}$ phân kỳ. Chính xác thì "chưa đủ" ở chỗ nào?
- Phép tính $\int_{-1}^1 \frac{dx}{x^2}=-2$ sai ở đâu?

## Nguồn đọc và luyện tập

Active Calculus 6.5; OpenStax Calculus Tập 2, Mục 3.7; Stewart, Calculus: Early Transcendentals, Mục 7.8. Các bài giải mẫu và một số bài luyện tập được biên soạn dựa trên slide bài giảng tích phân suy rộng của TS. Lê Xuân Đại (ĐHBK TP.HCM).
{% end %}
