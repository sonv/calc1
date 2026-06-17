+++
title = "01. Review of Functions"
description = "Calculus motivation and function review before limits and derivatives."
weight = 10
+++

{% lang(code="en") %}
## Goals

By the end of this session, students should be able to:

- explain why calculus begins with changing quantities
- describe functions verbally, numerically, visually, and algebraically
- identify domain, range, graph, and basic function tests
- compute and interpret average rate of change
- recognize linear and quadratic functions as anchor models
- work with composition, inverse functions, transformations, and combinations of functions
- identify algebraic, exponential, logarithmic, periodic, inverse trigonometric, and hyperbolic function families
- use the reading map and practice list below to review details outside class

## Why Calculus?

Calculus is the language for describing **change**, **accumulation**, and **optimization**.

Functions are the objects that change. Calculus measures and controls how they change.

Some motivating examples:

- **Motion:** How does position change with time?
- **Fields:** How do quantities vary from point to point?
- **Learning:** How do we improve a model by changing its parameters?

In later mathematics, science, and engineering, the same language appears in equations such as:

$$
\rho\left(\frac{\partial \mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u\right)
=-\nabla p+\mu\Delta\mathbf u+\mathbf f
$$

This Navier-Stokes equation describes fluid motion. The velocity field $\mathbf u(x,y,z,t)$ changes in time and space; calculus measures acceleration, pressure gradients, and diffusion of momentum.

$$
\begin{aligned}
\nabla\cdot\mathbf E &= \frac{\rho}{\varepsilon_0},\\
\nabla\cdot\mathbf B &= 0,\\
\nabla\times\mathbf E &= -\frac{\partial\mathbf B}{\partial t},\\
\nabla\times\mathbf B &= \mu_0\mathbf J+\mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t}.
\end{aligned}
$$

Maxwell's equations treat electric and magnetic fields as functions on space and time. The symbols $\nabla\cdot$, $\nabla\times$, and $\frac{\partial}{\partial t}$ describe how those fields vary.

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=\frac{8\pi G}{c^4}T_{\mu\nu}
$$

Einstein's field equation connects geometry, matter, and curvature. In short: geometry tells matter how to move, and matter tells geometry how to curve.

$$
i\hbar\frac{\partial\psi}{\partial t}
=\widehat H\psi
$$

Schrodinger's equation describes how a wave function evolves. Calculus describes how probability waves move, spread, and interfere.

$$
L(\theta)=\frac1N\sum_{i=1}^N
\ell\big(f_\theta(x_i),y_i\big),
\qquad
\theta_{k+1}=\theta_k-\eta\nabla_\theta L(\theta_k).
$$

Modern AI learns by repeatedly changing parameters in the direction suggested by gradients. Backpropagation is repeated use of the chain rule to compute those gradients efficiently.

Calculus 1 starts building the language behind these examples:

1. **Functions:** inputs, outputs, models
2. **Limits:** approach and approximation
3. **Derivatives:** instantaneous change
4. **Integrals:** accumulated change

## Today

In class, we focus on:

- functions as models of changing quantities
- average rate of change as the bridge to derivatives
- linear and quadratic functions as anchor models

For reading, review:

- composition, inverse functions, and transformations
- combining functions into new models
- elementary function families for practice

Read: [Active Prelude 1.2](https://activecalculus.org/prelude/sec-changing-functions-models.html)-[1.9](https://activecalculus.org/prelude/sec-changing-combining.html) and [OpenStax 1.1](https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions)-[1.5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions).

## Course Rhythm

- **Before class:** read the assigned sections and try the warm-up questions.
- **In class:** work through prompts, examples, and quick checks.
- **After class:** practice with Active Prelude, OpenStax, and the problem list below.

## Review Roadmap

This review is a map of the function ideas needed for calculus. The detailed mechanics live in the readings.

- **Model:** functions describe dependence between changing quantities.
- **Measure:** average rate of change previews derivatives.
- **Build:** compose, invert, transform, and combine functions.

Main reading spine: [Active Prelude Chapter 1](https://activecalculus.org/prelude/C-changing.html), especially Sections 1.2-1.9.

## Functions As Models

A function packages a relationship: one input determines one output.

$$
\text{input } x \longmapsto \text{output } f(x)
$$

Example: Dolbear's law models temperature from cricket chirps:

$$
T(N)=40+0.25N,\qquad T(92)=63.
$$

A function can be represented in several ways:

- **Words:** what changes?
- **Table:** what sample values are known?
- **Graph:** what shape and trend appear?
- **Formula:** what calculation rule is being used?

Read: [Active Prelude 1.2: Functions: Modeling Relationships](https://activecalculus.org/prelude/sec-changing-functions-models.html).

## Domain, Range, And Graph

- **Domain:** allowed inputs.
- **Range:** possible outputs.
- **Graph:** all points $(x,f(x))$.

Example:

$$
f(x)=\sqrt{9-x^2}.
$$

For this function, the domain is $-3\le x\le 3$ and the range is $0\le f(x)\le 3$. Its graph is the upper semicircle of radius $3$.

A relationship is a function when each input has exactly one output. On a graph, vertical lines should hit at most once.

Read: [Active Prelude 1.2](https://activecalculus.org/prelude/sec-changing-functions-models.html) and [OpenStax 1.1](https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions).

## Average Rate Of Change

Before instantaneous change, we measure change over an interval:

$$
\operatorname{AROC}_{[a,b]}(f)=\frac{f(b)-f(a)}{b-a}.
$$

Example: for $f(t)=t^2$ on $[1,3]$,

$$
\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4.
$$

Interpretations:

- **Units:** output units per input unit.
- **Graph:** slope of a secant line.
- **Later:** letting the interval shrink leads to derivatives.

Read: [Active Prelude 1.3: The Average Rate of Change of a Function](https://activecalculus.org/prelude/sec-changing-aroc.html).

## Linear Models

A linear model has constant rate of change:

$$
f(x)=mx+b.
$$

For a linear function, average rate of change is the same on every interval: it is the slope $m$.

Example:

$$
C(q)=50+12q.
$$

The fixed cost is $50$ and each unit adds $12$.

Read: [Active Prelude 1.4: Linear Functions](https://activecalculus.org/prelude/sec-changing-linear.html).

## Quadratic Models

A common quadratic form is

$$
f(x)=a(x-h)^2+k.
$$

Quadratics are the first familiar family where the rate of change is not constant.

Example:

$$
h(t)=-4.9t^2+20t+1
$$

models height under gravity.

Important features:

- vertex: highest or lowest point
- axis of symmetry
- zeros and sign
- increasing and decreasing intervals

Read: [Active Prelude 1.5: Quadratic Functions](https://activecalculus.org/prelude/sec-changing-quadratic.html).

## Composition

If $u=g(x)$ and $y=f(u)$, then the output depends on $x$ through two stages:

$$
(f\circ g)(x)=f(g(x)).
$$

Read composition from the inside out: first $g$, then $f$.

Example: if $r(t)=2+t$ and $A(r)=\pi r^2$, then

$$
(A\circ r)(t)=\pi(2+t)^2.
$$

Both stages must make sense on the domain. Composition is where the chain rule will live later.

Read: [Active Prelude 1.6: Composite Functions](https://activecalculus.org/prelude/sec-changing-composite.html).

## Inverse Functions

An inverse answers the reverse question: which input produced this output?

$$
f^{-1}(y)=x \Longleftrightarrow f(x)=y.
$$

Example: if

$$
F(C)=\frac95C+32,
$$

then $F^{-1}$ converts Fahrenheit back to Celsius.

To have an inverse function, the original function must be one-to-one on the domain we choose.

Read: [Active Prelude 1.7: Inverse Functions](https://activecalculus.org/prelude/sec-changing-inverse.html) and [OpenStax 1.4](https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions).

## Transformations

Outside changes affect the output:

- $f(x)+c$: shift up
- $cf(x)$: vertical stretch or shrink
- $-f(x)$: reflect across the $x$-axis

Inside changes affect the input:

- $f(x-c)$: shift right
- $f(cx)$: horizontal shrink or stretch
- $f(-x)$: reflect across the $y$-axis

Read: [Active Prelude 1.8: Transformations of Functions](https://activecalculus.org/prelude/sec-changing-transformations.html).

## Combining Functions

When two relationships describe parts of the same situation, we can build a new relationship.

Example: profit is revenue minus cost:

$$
P(q)=R(q)-C(q).
$$

Common combinations:

$$
(f+g)(x),\qquad (f-g)(x),\qquad (fg)(x),\qquad \frac{f(x)}{g(x)}.
$$

For quotients, remember to exclude inputs where $g(x)=0$.

Read: [Active Prelude 1.9: Combining Functions](https://activecalculus.org/prelude/sec-changing-combining.html).

## Function Families To Read

In class we only need an overview. Outside class, use the readings for detailed formulas, graphs, and practice.

- **Algebraic:** linear, quadratic, polynomial, power, rational
- **Growth / scale:** exponential and logarithmic functions
- **Periodic:** sine, cosine, tangent; cycles and waves
- **Special / optional:** inverse trigonometric and hyperbolic functions

Read: [Active Prelude 2](https://activecalculus.org/prelude/C-circular.html), [Active Prelude 3](https://activecalculus.org/prelude/C-exp.html), [Active Prelude 5](https://activecalculus.org/prelude/C-poly.html), and [OpenStax 1.2-1.5](https://openstax.org/books/calculus-volume-1/pages/1-2-basic-classes-of-functions).

## Hyperbolic Functions

Hyperbolic functions are built from exponential functions. They appear naturally in differential equations, geometry, and several engineering models.

$$
\sinh x=\frac{e^x-e^{-x}}{2},
\qquad
\cosh x=\frac{e^x+e^{-x}}{2}.
$$

The most important identity is

$$
\cosh^2 x-\sinh^2 x=1.
$$

The hyperbolic tangent and cotangent are

$$
\tanh x=\frac{\sinh x}{\cosh x},
\qquad
\coth x=\frac{\cosh x}{\sinh x}, \quad x\ne 0.
$$

## Problems To Work Through

These problems are a practice bank, not necessarily all due at once.

**Active Prelude**

- [1.2](https://activecalculus.org/prelude/sec-changing-functions-models.html): Preview Activity 1.2.1 and exercises on models/functions.
- [1.3](https://activecalculus.org/prelude/sec-changing-aroc.html): exercises on average rate of change and trends.
- [1.4](https://activecalculus.org/prelude/sec-changing-linear.html): choose 2-3 exercises on linear models.
- [1.5](https://activecalculus.org/prelude/sec-changing-quadratic.html): choose 2-3 exercises on quadratic models.
- [1.6](https://activecalculus.org/prelude/sec-changing-composite.html): choose 2-3 exercises on composition.
- [1.7](https://activecalculus.org/prelude/sec-changing-inverse.html): choose 2-3 exercises on inverse functions.
- [1.8](https://activecalculus.org/prelude/sec-changing-transformations.html): choose 2-3 exercises on transformations.
- [1.9](https://activecalculus.org/prelude/sec-changing-combining.html): choose 2-3 exercises on combining functions.

**OpenStax**

- [1.1 Review of Functions](https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions): Exercises 1-13, 14-35, 36-49.
- [1.2 Basic Classes of Functions](https://openstax.org/books/calculus-volume-1/pages/1-2-basic-classes-of-functions): Exercises 59-82 and 83-97.
- [1.3 Trigonometric Functions](https://openstax.org/books/calculus-volume-1/pages/1-3-trigonometric-functions): Exercises 163-173 for periodic functions.
- [1.4 Inverse Functions](https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions): Exercises 183-206.
- [1.5 Exponential and Logarithmic Functions](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions): Exercises 239-269.

## How To Study This Review

- **Before class:** skim Active Prelude 1.2-1.9 and mark any example where the context matters.
- **In class:** use the slides to connect ideas, not to copy a complete formula list.
- **After class:** use the problem list above for domains, graphs, average rate of change, inverses, transformations, and function families.

## Next Class

Sequences begin next class, after the function review is solid.

Read: [OpenStax Calculus Volume 2, Section 5.1: Sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences).
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau buổi học này, sinh viên có thể:

- giải thích vì sao giải tích bắt đầu từ các đại lượng biến thiên
- mô tả hàm số bằng lời, bảng số, hình vẽ và công thức
- xác định miền xác định, miền giá trị, đồ thị và các kiểm tra cơ bản của hàm số
- tính và diễn giải tốc độ biến thiên trung bình
- nhận ra hàm tuyến tính và hàm bậc hai như các mô hình neo
- làm việc với hàm hợp, hàm ngược, biến đổi đồ thị và phép kết hợp hàm số
- nhận ra các họ hàm đại số, mũ, logarithm, tuần hoàn, lượng giác ngược và hyperbolic
- dùng bản đồ đọc và danh sách bài tập dưới đây để ôn chi tiết ngoài giờ học

## Vì sao học giải tích?

Giải tích là ngôn ngữ để mô tả **sự biến thiên**, **sự tích lũy** và **sự tối ưu**.

Hàm số là những đối tượng biến thiên. Giải tích đo và điều khiển cách chúng biến thiên.

Một vài động lực:

- **Chuyển động:** vị trí thay đổi theo thời gian như thế nào?
- **Trường:** các đại lượng thay đổi từ điểm này sang điểm khác như thế nào?
- **Học máy:** ta cải thiện mô hình bằng cách thay đổi tham số như thế nào?

Trong toán học, khoa học và kỹ thuật, cùng ngôn ngữ đó xuất hiện trong các phương trình như:

$$
\rho\left(\frac{\partial \mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u\right)
=-\nabla p+\mu\Delta\mathbf u+\mathbf f
$$

Phương trình Navier-Stokes mô tả chuyển động chất lưu. Trường vận tốc $\mathbf u(x,y,z,t)$ thay đổi theo thời gian và không gian; giải tích đo gia tốc, gradient áp suất và sự khuếch tán động lượng.

$$
\begin{aligned}
\nabla\cdot\mathbf E &= \frac{\rho}{\varepsilon_0},\\
\nabla\cdot\mathbf B &= 0,\\
\nabla\times\mathbf E &= -\frac{\partial\mathbf B}{\partial t},\\
\nabla\times\mathbf B &= \mu_0\mathbf J+\mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t}.
\end{aligned}
$$

Các phương trình Maxwell xem điện trường và từ trường như các hàm trên không gian và thời gian. Các ký hiệu $\nabla\cdot$, $\nabla\times$ và $\frac{\partial}{\partial t}$ mô tả cách các trường đó biến thiên.

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=\frac{8\pi G}{c^4}T_{\mu\nu}
$$

Phương trình trường Einstein nối hình học, vật chất và độ cong. Nói ngắn gọn: hình học cho vật chất biết cách chuyển động, và vật chất cho hình học biết cách cong.

$$
i\hbar\frac{\partial\psi}{\partial t}
=\widehat H\psi
$$

Phương trình Schrodinger mô tả cách hàm sóng tiến hóa. Giải tích mô tả cách sóng xác suất chuyển động, lan ra và giao thoa.

$$
L(\theta)=\frac1N\sum_{i=1}^N
\ell\big(f_\theta(x_i),y_i\big),
\qquad
\theta_{k+1}=\theta_k-\eta\nabla_\theta L(\theta_k).
$$

AI hiện đại học bằng cách liên tục thay đổi tham số theo hướng do gradient gợi ý. Lan truyền ngược là việc dùng lặp lại quy tắc dây chuyền để tính các gradient đó hiệu quả.

Giải tích 1 bắt đầu xây ngôn ngữ phía sau các ví dụ này:

1. **Hàm số:** đầu vào, đầu ra, mô hình
2. **Giới hạn:** tiến gần và xấp xỉ
3. **Đạo hàm:** biến thiên tức thời
4. **Tích phân:** biến thiên tích lũy

## Hôm nay

Trong lớp, ta tập trung vào:

- hàm số như mô hình của các đại lượng biến thiên
- tốc độ biến thiên trung bình như cầu nối đến đạo hàm
- hàm tuyến tính và bậc hai như các mô hình neo

Để đọc thêm, hãy ôn:

- hàm hợp, hàm ngược và biến đổi đồ thị
- kết hợp hàm số thành mô hình mới
- các họ hàm sơ cấp để luyện tập

Đọc: [Active Prelude 1.2](https://activecalculus.org/prelude/sec-changing-functions-models.html)-[1.9](https://activecalculus.org/prelude/sec-changing-combining.html) và [OpenStax 1.1](https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions)-[1.5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions).

## Nhịp học của môn

- **Trước giờ học:** đọc các mục được giao và thử câu hỏi khởi động.
- **Trong lớp:** cùng xử lý câu hỏi gợi mở, ví dụ và kiểm tra nhanh.
- **Sau giờ học:** luyện tập bằng Active Prelude, OpenStax và danh sách bài tập dưới đây.

## Lộ trình ôn tập

Phần ôn tập này là bản đồ các ý tưởng về hàm số cần cho giải tích. Chi tiết kỹ thuật nằm trong phần đọc.

- **Mô hình hóa:** hàm số mô tả sự phụ thuộc giữa các đại lượng biến thiên.
- **Đo lường:** tốc độ biến thiên trung bình chuẩn bị cho đạo hàm.
- **Xây dựng:** hợp, đảo, biến đổi và kết hợp hàm số.

Trục đọc chính: [Active Prelude Chương 1](https://activecalculus.org/prelude/C-changing.html), đặc biệt các Mục 1.2-1.9.

## Hàm số như mô hình

Một hàm số đóng gói một quan hệ: một đầu vào xác định một đầu ra.

$$
\text{đầu vào } x \longmapsto \text{đầu ra } f(x)
$$

Ví dụ: định luật Dolbear mô hình hóa nhiệt độ từ tiếng dế kêu:

$$
T(N)=40+0.25N,\qquad T(92)=63.
$$

Một hàm số có thể được biểu diễn bằng nhiều cách:

- **Lời:** điều gì thay đổi?
- **Bảng:** những giá trị mẫu nào đã biết?
- **Đồ thị:** hình dạng và xu hướng là gì?
- **Công thức:** quy tắc tính là gì?

Đọc: [Active Prelude 1.2: Functions: Modeling Relationships](https://activecalculus.org/prelude/sec-changing-functions-models.html).

## Miền xác định, miền giá trị và đồ thị

- **Miền xác định:** các đầu vào được phép.
- **Miền giá trị:** các đầu ra có thể có.
- **Đồ thị:** mọi điểm $(x,f(x))$.

Ví dụ:

$$
f(x)=\sqrt{9-x^2}.
$$

Với hàm này, miền xác định là $-3\le x\le 3$ và miền giá trị là $0\le f(x)\le 3$. Đồ thị là nửa đường tròn trên bán kính $3$.

Một quan hệ là hàm số khi mỗi đầu vào có đúng một đầu ra. Trên đồ thị, mỗi đường thẳng đứng cắt nhiều nhất một lần.

Đọc: [Active Prelude 1.2](https://activecalculus.org/prelude/sec-changing-functions-models.html) và [OpenStax 1.1](https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions).

## Tốc độ biến thiên trung bình

Trước khi nói đến biến thiên tức thời, ta đo biến thiên trên một khoảng:

$$
\operatorname{AROC}_{[a,b]}(f)=\frac{f(b)-f(a)}{b-a}.
$$

Ví dụ: với $f(t)=t^2$ trên $[1,3]$,

$$
\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4.
$$

Cách diễn giải:

- **Đơn vị:** đơn vị đầu ra trên mỗi đơn vị đầu vào.
- **Đồ thị:** hệ số góc của dây cung.
- **Sau này:** cho khoảng co lại dẫn đến đạo hàm.

Đọc: [Active Prelude 1.3: The Average Rate of Change of a Function](https://activecalculus.org/prelude/sec-changing-aroc.html).

## Mô hình tuyến tính

Một mô hình tuyến tính có tốc độ biến thiên không đổi:

$$
f(x)=mx+b.
$$

Với hàm tuyến tính, tốc độ biến thiên trung bình như nhau trên mọi khoảng: đó là hệ số góc $m$.

Ví dụ:

$$
C(q)=50+12q.
$$

Chi phí cố định là $50$ và mỗi đơn vị tăng thêm $12$.

Đọc: [Active Prelude 1.4: Linear Functions](https://activecalculus.org/prelude/sec-changing-linear.html).

## Mô hình bậc hai

Dạng bậc hai thường gặp là

$$
f(x)=a(x-h)^2+k.
$$

Hàm bậc hai là họ quen thuộc đầu tiên mà tốc độ biến thiên không còn hằng.

Ví dụ:

$$
h(t)=-4.9t^2+20t+1
$$

mô hình hóa độ cao dưới tác dụng của trọng lực.

Các đặc trưng quan trọng:

- đỉnh: điểm cao nhất hoặc thấp nhất
- trục đối xứng
- nghiệm và dấu
- khoảng tăng và giảm

Đọc: [Active Prelude 1.5: Quadratic Functions](https://activecalculus.org/prelude/sec-changing-quadratic.html).

## Hàm hợp

Nếu $u=g(x)$ và $y=f(u)$, thì đầu ra phụ thuộc vào $x$ qua hai bước:

$$
(f\circ g)(x)=f(g(x)).
$$

Đọc hàm hợp từ trong ra ngoài: trước là $g$, sau là $f$.

Ví dụ: nếu $r(t)=2+t$ và $A(r)=\pi r^2$, thì

$$
(A\circ r)(t)=\pi(2+t)^2.
$$

Cả hai bước đều phải có nghĩa trên miền xác định. Hàm hợp là nơi quy tắc dây chuyền sẽ xuất hiện sau này.

Đọc: [Active Prelude 1.6: Composite Functions](https://activecalculus.org/prelude/sec-changing-composite.html).

## Hàm ngược

Hàm ngược trả lời câu hỏi ngược: đầu vào nào đã tạo ra đầu ra này?

$$
f^{-1}(y)=x \Longleftrightarrow f(x)=y.
$$

Ví dụ: nếu

$$
F(C)=\frac95C+32,
$$

thì $F^{-1}$ đổi Fahrenheit ngược lại Celsius.

Để có hàm ngược, hàm ban đầu phải là một-một trên miền ta chọn.

Đọc: [Active Prelude 1.7: Inverse Functions](https://activecalculus.org/prelude/sec-changing-inverse.html) và [OpenStax 1.4](https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions).

## Biến đổi đồ thị

Thay đổi bên ngoài tác động đến đầu ra:

- $f(x)+c$: tịnh tiến lên
- $cf(x)$: co giãn theo phương đứng
- $-f(x)$: đối xứng qua trục $x$

Thay đổi bên trong tác động đến đầu vào:

- $f(x-c)$: tịnh tiến sang phải
- $f(cx)$: co giãn theo phương ngang
- $f(-x)$: đối xứng qua trục $y$

Đọc: [Active Prelude 1.8: Transformations of Functions](https://activecalculus.org/prelude/sec-changing-transformations.html).

## Kết hợp hàm số

Khi hai quan hệ mô tả các phần của cùng một tình huống, ta có thể xây một quan hệ mới.

Ví dụ: lợi nhuận là doanh thu trừ chi phí:

$$
P(q)=R(q)-C(q).
$$

Các phép kết hợp thường gặp:

$$
(f+g)(x),\qquad (f-g)(x),\qquad (fg)(x),\qquad \frac{f(x)}{g(x)}.
$$

Với thương, nhớ loại các đầu vào làm $g(x)=0$.

Đọc: [Active Prelude 1.9: Combining Functions](https://activecalculus.org/prelude/sec-changing-combining.html).

## Các họ hàm cần đọc

Trong lớp ta chỉ cần cái nhìn tổng quan. Ngoài giờ học, dùng phần đọc để xem công thức, đồ thị và luyện tập chi tiết.

- **Đại số:** tuyến tính, bậc hai, đa thức, lũy thừa, hữu tỷ
- **Tăng trưởng / thang đo:** hàm mũ và hàm logarithm
- **Tuần hoàn:** sin, cos, tan; chu kỳ và sóng
- **Đặc biệt / tùy chọn:** lượng giác ngược và hyperbolic

Đọc: [Active Prelude 2](https://activecalculus.org/prelude/C-circular.html), [Active Prelude 3](https://activecalculus.org/prelude/C-exp.html), [Active Prelude 5](https://activecalculus.org/prelude/C-poly.html), và [OpenStax 1.2-1.5](https://openstax.org/books/calculus-volume-1/pages/1-2-basic-classes-of-functions).

## Hàm hyperbolic

Các hàm hyperbolic được xây dựng từ hàm mũ. Chúng xuất hiện tự nhiên trong phương trình vi phân, hình học và nhiều mô hình kỹ thuật.

$$
\sinh x=\frac{e^x-e^{-x}}{2},
\qquad
\cosh x=\frac{e^x+e^{-x}}{2}.
$$

Đẳng thức quan trọng nhất là

$$
\cosh^2 x-\sinh^2 x=1.
$$

Tang hyperbolic và cotang hyperbolic là

$$
\tanh x=\frac{\sinh x}{\cosh x},
\qquad
\coth x=\frac{\cosh x}{\sinh x}, \quad x\ne 0.
$$

## Bài tập nên làm

Đây là ngân hàng bài tập, không nhất thiết phải làm toàn bộ cùng một lúc.

**Active Prelude**

- [1.2](https://activecalculus.org/prelude/sec-changing-functions-models.html): Preview Activity 1.2.1 và bài tập về mô hình/hàm số.
- [1.3](https://activecalculus.org/prelude/sec-changing-aroc.html): bài tập về tốc độ biến thiên trung bình và xu hướng.
- [1.4](https://activecalculus.org/prelude/sec-changing-linear.html): chọn 2-3 bài về mô hình tuyến tính.
- [1.5](https://activecalculus.org/prelude/sec-changing-quadratic.html): chọn 2-3 bài về mô hình bậc hai.
- [1.6](https://activecalculus.org/prelude/sec-changing-composite.html): chọn 2-3 bài về hàm hợp.
- [1.7](https://activecalculus.org/prelude/sec-changing-inverse.html): chọn 2-3 bài về hàm ngược.
- [1.8](https://activecalculus.org/prelude/sec-changing-transformations.html): chọn 2-3 bài về biến đổi đồ thị.
- [1.9](https://activecalculus.org/prelude/sec-changing-combining.html): chọn 2-3 bài về kết hợp hàm số.

**OpenStax**

- [1.1 Review of Functions](https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions): Bài 1-13, 14-35, 36-49.
- [1.2 Basic Classes of Functions](https://openstax.org/books/calculus-volume-1/pages/1-2-basic-classes-of-functions): Bài 59-82 và 83-97.
- [1.3 Trigonometric Functions](https://openstax.org/books/calculus-volume-1/pages/1-3-trigonometric-functions): Bài 163-173 cho hàm tuần hoàn.
- [1.4 Inverse Functions](https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions): Bài 183-206.
- [1.5 Exponential and Logarithmic Functions](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions): Bài 239-269.

## Cách học phần ôn tập

- **Trước giờ học:** đọc lướt Active Prelude 1.2-1.9 và đánh dấu ví dụ mà bối cảnh quan trọng.
- **Trong lớp:** dùng slide để nối ý tưởng, không phải để chép một danh sách công thức đầy đủ.
- **Sau giờ học:** dùng danh sách bài tập ở trên để luyện miền xác định, đồ thị, tốc độ biến thiên trung bình, hàm ngược, biến đổi đồ thị và các họ hàm.

## Buổi sau

Buổi sau bắt đầu dãy số, sau khi phần ôn hàm số đã vững.

Đọc: [OpenStax Calculus Volume 2, Section 5.1: Sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences).
{% end %}
