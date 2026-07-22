+++
title = "10. First-Order Differential Equations Continued"
description = "Homogeneous, linear, and Bernoulli first-order differential equations, with modeling applications and mixed exercises."
weight = 100
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- recognize first-order equations that are separable, linear, homogeneous, or Bernoulli
- solve linear equations using the integrating factor and explain why the product rule appears
- solve homogeneous equations by the substitution \(u=y/x\)
- solve Bernoulli equations by reducing them to linear equations
- model and solve first-order application problems such as mixing tanks, RL circuits, and variable-mass motion

This lecture continues the first-order ODE unit. Active Calculus supplies the qualitative and separable-equation context; OpenStax supports first-order linear equations and routine practice; Stewart provides additional computational practice; instructor notes and local exercise sets supply homogeneous, Bernoulli, and application examples.

## Key Methods

**Linear equations.** Put the equation in the form

\[
y'+P(x)y=Q(x).
\]

The integrating factor \(\mu=e^{\int P(x)\,dx}\) turns the left side into \((\mu y)'\), so the equation becomes \((\mu y)'=\mu Q\).

**Homogeneous equations.** If the equation can be written

\[
y'=f\left(\frac{y}{x}\right),
\]

set \(u=y/x\), so \(y=ux\) and \(y'=u+xu'\). The equation becomes separable in \(u\) and \(x\).

**Bernoulli equations.** If

\[
y'+P(x)y=Q(x)y^\alpha,\qquad \alpha\ne0,\quad \alpha\ne1,
\]

set \(z=y^{1-\alpha}\). The equation reduces to the linear equation

\[
z'+(1-\alpha)P(x)z=(1-\alpha)Q(x).
\]

## Worked Examples

The slide deck works through:

- a linear equation \(y'=y\cot x+\sin x\)
- homogeneous equations including \(y'=\frac{y}{x}+\sin\frac{y}{x}\)
- a Bernoulli equation \(y'+\frac{y}{x}=x^2y^4\)
- a salt-mixing model
- an RL-circuit model
- a falling hailstone with changing mass and air resistance

Each application is presented in the order: physical picture, model, solve, interpret.

## Practice

Students should first name the method before solving. Good representative problems include:

1. \(y'+\frac{3}{x}y=\frac{2}{x^3},\ y(1)=0\).
2. \(y'-3y=4e^{3x}\cos 5x\).
3. \(2(x+y)\,dy+(3x+3y-1)\,dx=0,\ y(0)=2\).
4. \(2y'-\frac{y}{x}=\frac{4x^2}{y}\).
5. A mixing tank with constant volume: model the rate as inflow minus outflow.
6. An RL circuit: translate Kirchhoff's law into \(LI'+RI=E(t)\).

## Reading And References

- [Active Calculus 7.2: Qualitative behavior of solutions to DEs](https://activecalculus.org/single/sec-7-2-qualitative.html) and [7.4: Separable differential equations](https://activecalculus.org/single/sec-7-4-separable.html)
- [OpenStax Calculus Volume 2, 4.5: First-Order Linear Equations](https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations)
- Stewart, J. *Calculus: Early Transcendentals* (8th ed., metric version), Sections 9.3 and 9.5
- Instructor notes and local exercises for homogeneous, Bernoulli, and first-order ODE applications
- Lecture slides: [Session 10 deck](../../slides/10-first-order-differential-equations-continued/)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau bài giảng này, sinh viên có thể:

- nhận biết phương trình cấp một dạng tách biến, tuyến tính, đẳng cấp, hoặc Bernoulli
- giải phương trình tuyến tính bằng thừa số tích phân và giải thích vì sao quy tắc tích xuất hiện
- giải phương trình đẳng cấp bằng phép đặt \(u=y/x\)
- giải phương trình Bernoulli bằng cách đưa về phương trình tuyến tính
- lập mô hình và giải các bài toán ứng dụng cấp một như bồn pha trộn, mạch RL, và chuyển động với khối lượng biến đổi

Bài giảng này tiếp tục phần ODE cấp một. Active Calculus cung cấp bối cảnh định tính và phương trình tách biến; OpenStax hỗ trợ phương trình tuyến tính cấp một và luyện tập cơ bản; Stewart cung cấp luyện tập tính toán bổ sung; ghi chú giảng viên và bộ bài tập địa phương cung cấp ví dụ đẳng cấp, Bernoulli, và ứng dụng.

## Phương pháp chính

**Phương trình tuyến tính.** Đưa phương trình về dạng

\[
y'+P(x)y=Q(x).
\]

Thừa số tích phân \(\mu=e^{\int P(x)\,dx}\) biến vế trái thành \((\mu y)'\), nên phương trình trở thành \((\mu y)'=\mu Q\).

**Phương trình đẳng cấp.** Nếu phương trình có thể viết

\[
y'=f\left(\frac{y}{x}\right),
\]

đặt \(u=y/x\), nên \(y=ux\) và \(y'=u+xu'\). Phương trình trở thành tách biến theo \(u\) và \(x\).

**Phương trình Bernoulli.** Nếu

\[
y'+P(x)y=Q(x)y^\alpha,\qquad \alpha\ne0,\quad \alpha\ne1,
\]

đặt \(z=y^{1-\alpha}\). Phương trình trở thành phương trình tuyến tính

\[
z'+(1-\alpha)P(x)z=(1-\alpha)Q(x).
\]

## Ví dụ mẫu

Bộ slide giải chi tiết:

- phương trình tuyến tính \(y'=y\cot x+\sin x\)
- phương trình đẳng cấp, gồm \(y'=\frac{y}{x}+\sin\frac{y}{x}\)
- phương trình Bernoulli \(y'+\frac{y}{x}=x^2y^4\)
- mô hình pha trộn muối trong bồn
- mô hình mạch RL
- hạt mưa đá rơi với khối lượng thay đổi và lực cản không khí

Mỗi ứng dụng được trình bày theo thứ tự: bức tranh vật lý, mô hình, giải, diễn giải.

## Luyện tập

Sinh viên nên gọi tên phương pháp trước khi giải. Một số bài đại diện:

1. \(y'+\frac{3}{x}y=\frac{2}{x^3},\ y(1)=0\).
2. \(y'-3y=4e^{3x}\cos 5x\).
3. \(2(x+y)\,dy+(3x+3y-1)\,dx=0,\ y(0)=2\).
4. \(2y'-\frac{y}{x}=\frac{4x^2}{y}\).
5. Bồn pha trộn có thể tích không đổi: mô hình hóa tốc độ bằng dòng vào trừ dòng ra.
6. Mạch RL: dịch định luật Kirchhoff thành \(LI'+RI=E(t)\).

## Tài liệu đọc và tham khảo

- [Active Calculus 7.2: Dáng điệu định tính của nghiệm ODE](https://activecalculus.org/single/sec-7-2-qualitative.html) và [7.4: Phương trình tách biến](https://activecalculus.org/single/sec-7-4-separable.html)
- [OpenStax Calculus Tập 2, 4.5: Phương trình tuyến tính cấp một](https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations)
- Stewart, J. *Calculus: Early Transcendentals* (ấn bản thứ 8, bản metric), Mục 9.3 và 9.5
- Ghi chú giảng viên và bài tập địa phương cho phương trình đẳng cấp, Bernoulli, và ứng dụng ODE cấp một
- Slide bài giảng: [Bộ slide Buổi 10](../../slides/10-first-order-differential-equations-continued/)
{% end %}
