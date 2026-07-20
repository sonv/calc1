+++
title = "09. First-Order Differential Equations"
description = "Lecture on first-order ordinary differential equations: definitions and solutions, direction fields, separable equations, Newton's law of cooling, and linear equations solved with an integrating factor."
weight = 90
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- state what a differential equation is, give its order, and verify a solution by substitution
- read a direction field and use an initial condition to pick out one particular solution
- recognize and solve separable equations by integrating both sides
- model and solve a cooling problem with Newton's law of cooling
- recognize and solve first-order linear equations with the integrating factor

The notes are adapted in part from lectures by Dr. Lê Xuân Đại, and the practice problems are drawn from [Active Calculus 7.2](https://activecalculus.org/single/sec-7-2-qualitative.html) and [7.4](https://activecalculus.org/single/sec-7-4-separable.html) and from [OpenStax Calculus Volume 2, Sections 4.1-4.5](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations).

## Definitions And Solutions

A **differential equation** contains an unknown function and one or more of its derivatives; its **order** is the order of the highest derivative present. A first-order equation is usually written $y'=F(x,y)$. A function $y=f(x)$ is a **solution** on an interval if it satisfies the equation there. A first-order equation has a **general solution** with one arbitrary constant $C$; an **initial condition** $y(x_0)=y_0$ fixes $C$ and gives a **particular solution** (an initial-value problem).

## Direction Fields

For $y'=F(x,y)$, drawing a short segment of slope $F(x,y)$ at many points $(x,y)$ produces the **direction field**. A solution curve stays tangent to the field everywhere, so the field shows the shape of solutions - where they rise, fall, or level off - even before a formula is found. For $y'=x+y$, the solution curve through $(0,1)$ is $y=2e^{x}-x-1$.

## Separable Equations

A **separable** equation can be written $P(x)\,dx+Q(y)\,dy=0$. Integrate each side in its own variable:

$$
\int P(x)\,dx+\int Q(y)\,dy=C.
$$

An equation $f_1(x)g_1(y)\,dx+f_2(x)g_2(y)\,dy=0$ becomes separable after dividing by $f_2(x)g_1(y)$; each root of $g_1(y)=0$ gives a constant solution that must be checked separately.

**Newton's law of cooling.** With $T(t)$ the temperature and $T_s$ the (constant) surrounding temperature, $\dfrac{dT}{dt}=k\,(T-T_s)$ is separable, giving $T=T_s+Ce^{kt}$.

## Linear Equations

A first-order **linear** equation has the form $y'+P(x)\,y=Q(x)$ with $P,Q$ continuous. Multiply by the **integrating factor** $\mu(x)=e^{\int P(x)\,dx}$; the left side becomes $(\mu y)'$, so

$$
y=e^{-\int P(x)\,dx}\left[\int Q(x)\,e^{\int P(x)\,dx}\,dx+C\right].
$$

## Worked Example

Solve $y'+\dfrac{1}{x}\,y=3x,\ y(1)=1$. Here $P=\frac{1}{x}$ and $Q=3x$, so $\mu=e^{\int dx/x}=e^{\ln x}=x$. Multiplying gives $(xy)'=3x^2$, hence $xy=x^3+C$ and $y=x^2+\frac{C}{x}$. The condition $y(1)=1$ gives $1=1+C$, so $C=0$ and $y=x^2$. Check: $y'=2x$ and $2x+\frac{1}{x}\cdot x^2=3x$.

## Active Prompts

- The family $y=Ce^{x}-x-1$ solves $y'=x+y$. How does the condition $y(0)=1$ single out one curve, and which one?
- When you divide by $g_1(y)$ to separate an equation, why can constant solutions be lost, and how do you recover them?
- An equation can be both separable and linear. Give one that is linear but **not** separable, and explain what forces the integrating factor.
- In Newton's law of cooling, why must $k$ be negative for a body that is hotter than its surroundings?

## Practice Problems

A problem bank drawn from Active Calculus (AC) and OpenStax Calculus Volume 2 (OS); not all are due at once.

**A. Is it separable? (AC 7.4)**

1. Decide which equations are separable; if separable, rewrite it as $g(y)\dfrac{dy}{dt}=h(t)$: (a) $\dfrac{dy}{dt}=-3y$; (b) $\dfrac{dy}{dt}=ty-y$; (c) $\dfrac{dy}{dt}=t+1$; (d) $\dfrac{dy}{dt}=t^2-y^2$.

**B. Direction fields and slope fields (AC 7.2; OS 4.2)**

2. Sketch the slope field of $\dfrac{dy}{dt}=t-2$ using the slopes at integer points for $-1\le t\le 5$, $-3\le y\le 3$. Sketch the solution with $y(0)=1$ and check that it matches $y=\tfrac12(t-2)^2-1$. How are the solution curves for different initial values related to one another?
3. For $\dfrac{dy}{dt}=-\tfrac12(y-4)$: sketch the slope field for $-1\le t\le 7$, $-1\le y\le 7$; sketch the solutions with $y(0)=0,2,4,6$; then verify that $y(t)=4+2e^{-t/2}$ is the solution with $y(0)=6$.
4. Without solving, say where the slopes are zero, positive, and negative, and use that to sketch each slope field: (a) $\dfrac{dy}{dx}=x$; (b) $\dfrac{dy}{dx}=y$; (c) $\dfrac{dy}{dx}=x-y$.
5. The isoclines of $\dfrac{dy}{dx}=x+y$ (curves on which the slope equals a constant $c$) are the lines $x+y=c$. Draw the isoclines for $c=-2,-1,0,1,2$, use them to build the slope field, and sketch the solution through $(0,1)$.
6. For the autonomous equation $\dfrac{dy}{dt}=-\tfrac12\,y(y-4)$: find the equilibrium solutions; determine for which values of $y$ the solution increases and for which it decreases; then sketch the slope field and give the long-term value of the solution with $y(0)=1$ and with $y(0)=5$.
7. Find the equilibrium (constant) solutions and decide whether each is stable or unstable by testing the sign of $\dfrac{dy}{dt}$ on each side: (a) $\dfrac{dy}{dt}=y-3$; (b) $\dfrac{dy}{dt}=y^2-4$; (c) $\dfrac{dy}{dt}=(y-1)(y+2)$.

**C. Separable equations - solve (AC 7.4; OS 4.3)**

8. Find all solutions of $\dfrac{dy}{dt}=\dfrac{t}{y^2}$, then solve the initial-value problem with $y(0)=2$.
9. Solve $\dfrac{dy}{dt}=3y$.
10. Find the general solution: (a) $y'=\dfrac{x}{y}$; (b) $y'=y^2$; (c) $(1+x^2)y'=xy$; (d) $\dfrac{dy}{dx}=e^{x-y}$.
11. Solve the initial-value problems: (a) $y'=xy,\ y(0)=1$; (b) $y'=y\cos x,\ y(0)=1$; (c) $y'=1+y^2,\ y(0)=0$.

**D. Growth and cooling (AC 7.4; OS 4.3)**

12. A town's population grows continuously at $3\%$ per year. (a) Write a differential equation for the population $P(t)$. (b) Find its solutions. (c) If $P(0)=10{,}000$, find $P(t)$. (d) Find the doubling time. (e) Find the doubling time when the growth rate is $k$ times the population.
13. A cup of coffee at $105^\circ$F is placed in a $75^\circ$F room, so $\dfrac{dT}{dt}=-k(T-75)$. If the coffee is cooling at $1^\circ$F per minute the instant it enters the room, find $k$, solve for $T(t)$, and describe $T$ as $t\to\infty$.
14. A radioactive isotope decays at a rate proportional to the amount present and has a half-life of $1600$ years. What fraction remains after $1000$ years?

**E. Linear equations - integrating factor (OS 4.5)**

15. Find the general solution: (a) $y'+y=x$; (b) $y'-2y=e^{3x}$; (c) $y'+2xy=x$.
16. Solve the initial-value problems: (a) $y'-y=x,\ y(0)=1$; (b) $xy'+y=\cos x$; (c) $y'-\dfrac1x\,y=x,\ y(1)=0$.
17. Solve $y'=x+y$ with $y(0)=1$ using an integrating factor, and confirm it is the solution curve through $(0,1)$ read from the direction field.

**F. Mixed - name the method, then solve**

18. Decide whether each is separable, linear, or both, then solve: (a) $y'=xy+x$; (b) $y'=\dfrac{y}{x}+x$; (c) $y'=\dfrac{x+y}{x}$.
19. A tank holds $100$ L of water with $10$ kg of dissolved salt. Brine containing $0.5$ kg/L enters at $5$ L/min, and the well-stirred mixture leaves at $5$ L/min. Show that the amount of salt $S(t)$ satisfies $\dfrac{dS}{dt}=2.5-\dfrac{S}{20}$, solve for $S(t)$, and find $S$ as $t\to\infty$.

## Reading And References

- [OpenStax Calculus Volume 2, 4.1: Basics of Differential Equations](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations), [4.2: Direction Fields and Numerical Methods](https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods), [4.3: Separable Equations](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations), [4.5: First-Order Linear Equations](https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations)
- [Active Calculus 7.2: Qualitative behavior of solutions to DEs](https://activecalculus.org/single/sec-7-2-qualitative.html), [7.4: Separable differential equations](https://activecalculus.org/single/sec-7-4-separable.html)
- Stewart, J. *Calculus: Early Transcendentals* (8th ed., metric version), Sections 9.1-9.3 and 9.5
- Worked examples and the bread cooling problem adapted from Dr. Lê Xuân Đại's HCMUT lecture slides on ordinary differential equations
- Lecture slides: [Session 09 deck](../../slides/09-first-order-differential-equations/)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau bài giảng này, sinh viên có thể:

- phát biểu phương trình vi phân là gì, xác định cấp, và kiểm tra nghiệm bằng cách thế vào
- đọc trường hướng và dùng điều kiện ban đầu để chọn ra một nghiệm riêng
- nhận biết và giải phương trình tách biến bằng cách lấy tích phân hai vế
- mô hình hóa và giải bài toán làm nguội bằng định luật làm nguội Newton
- nhận biết và giải phương trình tuyến tính cấp một bằng thừa số tích phân

Ghi chú được biên soạn một phần dựa trên bài giảng của TS. Lê Xuân Đại, và các bài tập luyện tập lấy từ [Active Calculus 7.2](https://activecalculus.org/single/sec-7-2-qualitative.html) và [7.4](https://activecalculus.org/single/sec-7-4-separable.html) cùng [OpenStax Calculus Tập 2, Mục 4.1-4.5](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations).

## Định nghĩa và nghiệm

Một **phương trình vi phân** chứa một hàm chưa biết và một hay nhiều đạo hàm của nó; **cấp** của nó là cấp của đạo hàm cao nhất có mặt. Phương trình cấp một thường viết dạng $y'=F(x,y)$. Hàm $y=f(x)$ là một **nghiệm** trên một khoảng nếu nó thỏa phương trình trên đó. Phương trình cấp một có **nghiệm tổng quát** với một hằng số tùy ý $C$; một **điều kiện ban đầu** $y(x_0)=y_0$ cố định $C$ và cho một **nghiệm riêng** (bài toán giá trị ban đầu).

## Trường hướng

Với $y'=F(x,y)$, vẽ một đoạn thẳng ngắn có hệ số góc $F(x,y)$ tại nhiều điểm $(x,y)$ ta được **trường hướng**. Đường cong nghiệm luôn tiếp xúc với trường tại mọi nơi, nên trường cho thấy dáng điệu của nghiệm - nơi chúng tăng, giảm hay đi ngang - ngay cả trước khi tìm được công thức. Với $y'=x+y$, đường cong nghiệm qua $(0,1)$ là $y=2e^{x}-x-1$.

## Phương trình tách biến

Một phương trình **tách biến** có thể viết $P(x)\,dx+Q(y)\,dy=0$. Lấy tích phân mỗi vế theo biến của nó:

$$
\int P(x)\,dx+\int Q(y)\,dy=C.
$$

Phương trình $f_1(x)g_1(y)\,dx+f_2(x)g_2(y)\,dy=0$ trở thành tách biến sau khi chia cho $f_2(x)g_1(y)$; mỗi nghiệm của $g_1(y)=0$ cho một nghiệm hằng cần kiểm tra riêng.

**Định luật làm nguội Newton.** Với $T(t)$ là nhiệt độ và $T_s$ là nhiệt độ (không đổi) của môi trường, $\dfrac{dT}{dt}=k\,(T-T_s)$ là phương trình tách biến, cho $T=T_s+Ce^{kt}$.

## Phương trình tuyến tính

Phương trình **tuyến tính** cấp một có dạng $y'+P(x)\,y=Q(x)$ với $P,Q$ liên tục. Nhân với **thừa số tích phân** $\mu(x)=e^{\int P(x)\,dx}$; vế trái trở thành $(\mu y)'$, nên

$$
y=e^{-\int P(x)\,dx}\left[\int Q(x)\,e^{\int P(x)\,dx}\,dx+C\right].
$$

## Ví dụ đã giải

Giải $y'+\dfrac{1}{x}\,y=3x,\ y(1)=1$. Ở đây $P=\frac{1}{x}$ và $Q=3x$, nên $\mu=e^{\int dx/x}=e^{\ln x}=x$. Nhân vào cho $(xy)'=3x^2$, do đó $xy=x^3+C$ và $y=x^2+\frac{C}{x}$. Điều kiện $y(1)=1$ cho $1=1+C$, nên $C=0$ và $y=x^2$. Kiểm tra: $y'=2x$ và $2x+\frac{1}{x}\cdot x^2=3x$.

## Câu hỏi chủ động

- Họ $y=Ce^{x}-x-1$ là nghiệm của $y'=x+y$. Điều kiện $y(0)=1$ chọn ra một đường cong như thế nào, và là đường nào?
- Khi chia cho $g_1(y)$ để tách biến, vì sao có thể mất các nghiệm hằng, và làm sao lấy lại chúng?
- Một phương trình có thể vừa tách biến vừa tuyến tính. Hãy cho một phương trình tuyến tính nhưng **không** tách biến, và giải thích vì sao cần thừa số tích phân.
- Trong định luật làm nguội Newton, vì sao $k$ phải âm với một vật nóng hơn môi trường?

## Bài tập luyện tập

Ngân hàng bài tập lấy từ Active Calculus (AC) và OpenStax Calculus Tập 2 (OS); không nhất thiết làm hết cùng lúc.

**A. Có tách biến được không? (AC 7.4)**

1. Xác định phương trình nào tách biến; nếu tách biến, viết lại dạng $g(y)\dfrac{dy}{dt}=h(t)$: (a) $\dfrac{dy}{dt}=-3y$; (b) $\dfrac{dy}{dt}=ty-y$; (c) $\dfrac{dy}{dt}=t+1$; (d) $\dfrac{dy}{dt}=t^2-y^2$.

**B. Trường hướng (AC 7.2; OS 4.2)**

2. Vẽ trường hướng của $\dfrac{dy}{dt}=t-2$ bằng hệ số góc tại các điểm nguyên trên $-1\le t\le 5$, $-3\le y\le 3$. Vẽ nghiệm với $y(0)=1$ và kiểm tra nó khớp với $y=\tfrac12(t-2)^2-1$. Các đường cong nghiệm ứng với các giá trị ban đầu khác nhau liên hệ với nhau thế nào?
3. Với $\dfrac{dy}{dt}=-\tfrac12(y-4)$: vẽ trường hướng trên $-1\le t\le 7$, $-1\le y\le 7$; vẽ các nghiệm với $y(0)=0,2,4,6$; rồi kiểm tra $y(t)=4+2e^{-t/2}$ là nghiệm với $y(0)=6$.
4. Không giải, hãy chỉ ra nơi hệ số góc bằng $0$, dương, và âm, rồi dùng điều đó để vẽ mỗi trường hướng: (a) $\dfrac{dy}{dx}=x$; (b) $\dfrac{dy}{dx}=y$; (c) $\dfrac{dy}{dx}=x-y$.
5. Các đường đẳng nghiêng của $\dfrac{dy}{dx}=x+y$ (đường mà hệ số góc bằng hằng số $c$) là các đường thẳng $x+y=c$. Vẽ các đường đẳng nghiêng cho $c=-2,-1,0,1,2$, dùng chúng để dựng trường hướng, và vẽ nghiệm qua $(0,1)$.
6. Với phương trình tự trị $\dfrac{dy}{dt}=-\tfrac12\,y(y-4)$: tìm các nghiệm cân bằng; xác định với giá trị $y$ nào nghiệm tăng và với giá trị nào nghiệm giảm; rồi vẽ trường hướng và cho biết giá trị dài hạn của nghiệm với $y(0)=1$ và với $y(0)=5$.
7. Tìm các nghiệm cân bằng (nghiệm hằng) và xác định mỗi nghiệm là ổn định hay không ổn định bằng cách xét dấu của $\dfrac{dy}{dt}$ ở hai bên: (a) $\dfrac{dy}{dt}=y-3$; (b) $\dfrac{dy}{dt}=y^2-4$; (c) $\dfrac{dy}{dt}=(y-1)(y+2)$.

**C. Giải phương trình tách biến (AC 7.4; OS 4.3)**

8. Tìm tất cả nghiệm của $\dfrac{dy}{dt}=\dfrac{t}{y^2}$, rồi giải bài toán giá trị ban đầu với $y(0)=2$.
9. Giải $\dfrac{dy}{dt}=3y$.
10. Tìm nghiệm tổng quát: (a) $y'=\dfrac{x}{y}$; (b) $y'=y^2$; (c) $(1+x^2)y'=xy$; (d) $\dfrac{dy}{dx}=e^{x-y}$.
11. Giải các bài toán giá trị ban đầu: (a) $y'=xy,\ y(0)=1$; (b) $y'=y\cos x,\ y(0)=1$; (c) $y'=1+y^2,\ y(0)=0$.

**D. Tăng trưởng và làm nguội (AC 7.4; OS 4.3)**

12. Dân số một thị trấn tăng liên tục với tốc độ $3\%$ mỗi năm. (a) Viết phương trình vi phân cho dân số $P(t)$. (b) Tìm các nghiệm của nó. (c) Nếu $P(0)=10{,}000$, tìm $P(t)$. (d) Tìm thời gian tăng gấp đôi. (e) Tìm thời gian tăng gấp đôi khi tốc độ tăng bằng $k$ lần dân số.
13. Một tách cà phê ở $105^\circ$F được đặt trong phòng $75^\circ$F, nên $\dfrac{dT}{dt}=-k(T-75)$. Nếu cà phê nguội đi $1^\circ$F mỗi phút ngay lúc vào phòng, tìm $k$, giải $T(t)$, và mô tả $T$ khi $t\to\infty$.
14. Một đồng vị phóng xạ phân rã với tốc độ tỉ lệ với lượng còn lại và có chu kỳ bán rã $1600$ năm. Sau $1000$ năm còn lại bao nhiêu phần?

**E. Phương trình tuyến tính - thừa số tích phân (OS 4.5)**

15. Tìm nghiệm tổng quát: (a) $y'+y=x$; (b) $y'-2y=e^{3x}$; (c) $y'+2xy=x$.
16. Giải các bài toán giá trị ban đầu: (a) $y'-y=x,\ y(0)=1$; (b) $xy'+y=\cos x$; (c) $y'-\dfrac1x\,y=x,\ y(1)=0$.
17. Giải $y'=x+y$ với $y(0)=1$ bằng thừa số tích phân, và xác nhận đó là đường cong nghiệm qua $(0,1)$ đọc được từ trường hướng.

**F. Tổng hợp - gọi tên phương pháp rồi giải**

18. Xác định mỗi phương trình là tách biến, tuyến tính, hay cả hai, rồi giải: (a) $y'=xy+x$; (b) $y'=\dfrac{y}{x}+x$; (c) $y'=\dfrac{x+y}{x}$.
19. Một bể chứa $100$ L nước với $10$ kg muối hòa tan. Nước muối nồng độ $0.5$ kg/L chảy vào với lưu lượng $5$ L/phút, và hỗn hợp được khuấy đều chảy ra $5$ L/phút. Chứng minh lượng muối $S(t)$ thỏa $\dfrac{dS}{dt}=2.5-\dfrac{S}{20}$, giải $S(t)$, và tìm $S$ khi $t\to\infty$.

## Nguồn đọc và tham khảo

- [OpenStax Calculus Volume 2, 4.1: Basics of Differential Equations](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations), [4.2: Direction Fields and Numerical Methods](https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods), [4.3: Separable Equations](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations), [4.5: First-Order Linear Equations](https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations)
- [Active Calculus 7.2: Qualitative behavior of solutions to DEs](https://activecalculus.org/single/sec-7-2-qualitative.html), [7.4: Separable differential equations](https://activecalculus.org/single/sec-7-4-separable.html)
- Stewart, J. *Calculus: Early Transcendentals* (ấn bản thứ 8, bản metric), Mục 9.1-9.3 và 9.5
- Các ví dụ đã giải và bài toán làm nguội bánh mì biên soạn dựa trên slide bài giảng phương trình vi phân thường của TS. Lê Xuân Đại (ĐHBK TP.HCM)
- Slide bài giảng: [bộ slide Buổi 09](../../slides/09-first-order-differential-equations/)
{% end %}
