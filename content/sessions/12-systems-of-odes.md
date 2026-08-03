+++
title = "12. Systems of First-Order Linear ODEs"
description = "First-order linear systems of ordinary differential equations, matrix form, eigenvalue method, elimination method, and practice problems."
weight = 120
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- explain why coupled quantities are modeled by systems of differential equations
- write a first-order linear system in vector-matrix form
- distinguish homogeneous and nonhomogeneous systems
- solve homogeneous constant-coefficient systems using eigenvalues and eigenvectors
- reduce a $2\times2$ system to a second-order equation by elimination
- solve representative nonhomogeneous systems by elimination
- read basic phase-portrait behavior from eigenvalues

This lecture follows the syllabus item on systems of differential equations. The required methods are the elimination method and the eigenvalue method. The local slides and notes by Dr. Lê Xuân Đại provide the main examples and exercise bank; Stewart gives modeling context for systems.

## Why Systems?

A single first-order ODE usually has one unknown function:

$$
y'=f(t,y).
$$

A system has several unknown functions that change together. For two unknowns, we often write

$$
\begin{cases}
x'=f_1(t,x,y),\\
y'=f_2(t,x,y).
\end{cases}
$$

The pair $(x(t),y(t))$ is the **state** of the system at time $t$. The pair $(x'(t),y'(t))$ is the velocity of the state. A phase portrait draws arrows showing this velocity at many points in the plane.

One concrete model from the local notes describes a substance of initial amount $c$ decaying into two products $P$ and $Q$. If $x(t)$ and $y(t)$ are the amounts formed and each formation rate is proportional to the amount not yet transformed, then

$$
\begin{cases}
\dfrac{dx}{dt}=k_1(c-x-y),\\[3pt]
\dfrac{dy}{dt}=k_2(c-x-y).
\end{cases}
$$

Both rates depend on both variables through $c-x-y$, so the equations must be studied together.

## Definition

A first-order linear system for $\mathbf{x}(t)\in\mathbb{R}^n$ has the form

$$
\mathbf{x}'(t)=A(t)\mathbf{x}(t)+\mathbf{g}(t),
\qquad
\mathbf{x}(t)=
\begin{bmatrix}
x_1(t)\\
\vdots\\
x_n(t)
\end{bmatrix}.
$$

The system is **homogeneous** if $\mathbf{g}(t)=\mathbf{0}$:

$$
\mathbf{x}'=A(t)\mathbf{x}.
$$

The system has **constant coefficients** if the matrix $A$ does not depend on $t$:

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{g}(t).
$$

For a two-equation homogeneous system

$$
\begin{cases}
x'=ax+by,\\
y'=cx+dy,
\end{cases}
$$

set

$$
\mathbf{x}=
\begin{bmatrix}
x\\y
\end{bmatrix},
\qquad
A=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}.
$$

Then the system becomes

$$
\begin{bmatrix}
x'\\y'
\end{bmatrix}
=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}
\begin{bmatrix}
x\\y
\end{bmatrix},
\qquad
\mathbf{x}'=A\mathbf{x}.
$$

## Superposition And Fundamental Solutions

For a homogeneous linear system, if $\mathbf{x}_1$ and $\mathbf{x}_2$ are solutions of $\mathbf{x}'=A\mathbf{x}$, then

$$
C_1\mathbf{x}_1+C_2\mathbf{x}_2
$$

is also a solution.

For two vector solutions

$$
\mathbf{x}_1(t)=
\begin{bmatrix}
x_1(t)\\y_1(t)
\end{bmatrix},
\qquad
\mathbf{x}_2(t)=
\begin{bmatrix}
x_2(t)\\y_2(t)
\end{bmatrix},
$$

their Wronskian is

$$
W(t)=
\det
\begin{bmatrix}
x_1(t)&x_2(t)\\
y_1(t)&y_2(t)
\end{bmatrix}.
$$

If $W(t)\ne0$, then the two vector solutions are linearly independent and form a fundamental set. The homogeneous solution is

$$
\mathbf{x}_h=C_1\mathbf{x}_1+C_2\mathbf{x}_2.
$$

## Eigenvalue Method

For a homogeneous constant-coefficient system

$$
\mathbf{x}'=A\mathbf{x},
$$

try an exponential vector

$$
\mathbf{x}(t)=e^{\lambda t}\mathbf{v},
\qquad \mathbf{v}\ne\mathbf{0}.
$$

Substitution gives

$$
\lambda e^{\lambda t}\mathbf{v}=Ae^{\lambda t}\mathbf{v}
\quad\Longleftrightarrow\quad
A\mathbf{v}=\lambda\mathbf{v}.
$$

Thus $\lambda$ must be an eigenvalue and $\mathbf{v}$ must be an eigenvector of $A$.

Equivalently,

$$
(A-\lambda I)\mathbf{v}=\mathbf{0}.
$$

For a nonzero eigenvector to exist, $A-\lambda I$ must be singular, so the characteristic equation is

$$
\det(A-\lambda I)=0.
$$

For

$$
A=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix},
$$

this gives

$$
\lambda^2-(a+d)\lambda+(ad-bc)=0.
$$

If $A$ has two distinct real eigenvalues $\lambda_1\ne\lambda_2$ with eigenvectors $\mathbf{v}_1,\mathbf{v}_2$, then

$$
\mathbf{x}(t)=C_1e^{\lambda_1t}\mathbf{v}_1+C_2e^{\lambda_2t}\mathbf{v}_2.
$$

## Worked Example: Distinct Real Eigenvalues

Solve

$$
\begin{cases}
x'=7x+3y,\\
y'=6x+4y.
\end{cases}
$$

Here

$$
A=\begin{bmatrix}7&3\\6&4\end{bmatrix}.
$$

The characteristic equation is

$$
\det(A-\lambda I)=
\begin{vmatrix}
7-\lambda&3\\
6&4-\lambda
\end{vmatrix}
=0,
$$

so

$$
\lambda^2-11\lambda+10=0.
$$

Thus

$$
\lambda_1=1,\qquad \lambda_2=10.
$$

For $\lambda_1=1$,

$$
(A-I)\mathbf{v}=\mathbf{0}
\quad\Longrightarrow\quad
6p_1+3p_2=0,
$$

so choose

$$
\mathbf{v}_1=
\begin{bmatrix}
1\\-2
\end{bmatrix}.
$$

For $\lambda_2=10$,

$$
(A-10I)\mathbf{v}=\mathbf{0}
\quad\Longrightarrow\quad
-3p_1+3p_2=0,
$$

so choose

$$
\mathbf{v}_2=
\begin{bmatrix}
1\\1
\end{bmatrix}.
$$

Therefore

$$
\mathbf{x}(t)=
C_1e^t
\begin{bmatrix}
1\\-2
\end{bmatrix}
+C_2e^{10t}
\begin{bmatrix}
1\\1
\end{bmatrix}.
$$

Equivalently,

$$
\begin{cases}
x=C_1e^t+C_2e^{10t},\\
y=-2C_1e^t+C_2e^{10t}.
\end{cases}
$$

## In-Class Practice: Eigenvalue Method

These are placed right after the matrix-method example, following the practice rhythm from the earlier ODE slides.

1. Solve the homogeneous system by the eigenvalue method:
   $$
   \begin{cases}
   x'=2x+3y,\\
   y'=2x+y.
   \end{cases}
   $$
   Answer:
   $$
   \lambda=4,-1,\qquad
   \mathbf{v}_1=\begin{bmatrix}3\\2\end{bmatrix},\quad
   \mathbf{v}_2=\begin{bmatrix}1\\-1\end{bmatrix}.
   $$
   Thus
   $$
   \mathbf{x}(t)=C_1e^{4t}\begin{bmatrix}3\\2\end{bmatrix}
   +C_2e^{-t}\begin{bmatrix}1\\-1\end{bmatrix}.
   $$

2. Classify the basic phase behavior:
   $$
   \begin{cases}
   x'=4x-3y,\\
   y'=3x+4y.
   \end{cases}
   $$
   Answer: $\lambda=4\pm3i$, so the trajectories spiral outward while rotating.

## Phase Portrait Language

For a $2\times2$ homogeneous system, the origin is an equilibrium point. The eigenvectors give preferred directions. The signs and types of the eigenvalues tell the basic motion:

- both eigenvalues negative: trajectories move toward the origin
- both eigenvalues positive: trajectories move away from the origin
- eigenvalues with opposite signs: saddle behavior
- complex eigenvalues $\alpha\pm i\beta$: rotation with growth or decay determined by $\alpha$

For complex eigenvalues, suppose $A$ is real, $\lambda=\alpha+i\beta$, and $\mathbf{v}=\mathbf{u}+i\mathbf{w}$. Then two real solutions are

$$
\mathbf{x}_1=e^{\alpha t}(\mathbf{u}\cos\beta t-\mathbf{w}\sin\beta t),
$$

$$
\mathbf{x}_2=e^{\alpha t}(\mathbf{u}\sin\beta t+\mathbf{w}\cos\beta t).
$$

Example:

$$
\begin{cases}
x'=4x-3y,\\
y'=3x+4y.
\end{cases}
$$

The matrix is

$$
A=
\begin{bmatrix}
4&-3\\
3&4
\end{bmatrix},
$$

and the eigenvalues are

$$
\lambda=4\pm3i.
$$

The real general solution is

$$
\begin{cases}
x=e^{4t}(C_1\cos3t+C_2\sin3t),\\
y=e^{4t}(C_1\sin3t-C_2\cos3t).
\end{cases}
$$

Since the real part $4$ is positive, trajectories spiral away from the origin.

For a repeated eigenvalue $\lambda_0$, there may not be enough independent eigenvectors. In the $2\times2$ examples from the local notes, a useful form is

$$
\mathbf{x}(t)=e^{\lambda_0t}
\begin{bmatrix}
a_1t+a_2\\
b_1t+b_2
\end{bmatrix}.
$$

For example,

$$
\begin{cases}
x'=5x-y,\\
y'=x+3y
\end{cases}
\quad\Longrightarrow\quad
\lambda=4 \text{ repeated}.
$$

The solution is

$$
\begin{cases}
x=e^{4t}(C_1t+C_2),\\
y=e^{4t}(C_1t+C_2-C_1).
\end{cases}
$$

## Elimination Method

For the homogeneous system

$$
\begin{cases}
x'=ax+by,\\
y'=cx+dy,
\end{cases}
$$

assume $b\ne0$. From the first equation,

$$
y=\frac{x'-ax}{b}.
$$

Differentiate:

$$
y'=\frac{x''-ax'}{b}.
$$

Substitute these into the second equation:

$$
\frac{x''-ax'}{b}=cx+d\frac{x'-ax}{b}.
$$

After rearranging,

$$
x''-(a+d)x'+(ad-bc)x=0.
$$

This is a second-order homogeneous linear ODE. Solve it for $x(t)$, then recover $y(t)$ from

$$
y=\frac{x'-ax}{b}.
$$

## Worked Example: Elimination

Use elimination on

$$
\begin{cases}
x'=7x+3y,\\
y'=6x+4y.
\end{cases}
$$

From the first equation,

$$
y=\frac{x'-7x}{3},
\qquad
y'=\frac{x''-7x'}{3}.
$$

Substitute into $y'=6x+4y$:

$$
\frac{x''-7x'}{3}=6x+4\frac{x'-7x}{3}.
$$

Thus

$$
x''-11x'+10x=0.
$$

The characteristic equation is

$$
k^2-11k+10=0,
$$

so

$$
x=C_1e^t+C_2e^{10t}.
$$

Then

$$
x'=C_1e^t+10C_2e^{10t},
$$

and

$$
y=\frac{x'-7x}{3}
=-2C_1e^t+C_2e^{10t}.
$$

This matches the eigenvalue-method solution.

## In-Class Practice: Elimination

This is the companion practice placed immediately after the elimination example.

Start with

$$
\begin{cases}
x'=-x+3y,\\
y'=-3x+5y.
\end{cases}
$$

From the first equation,

$$
y=\frac{x'+x}{3},
\qquad
y'=\frac{x''+x'}{3}.
$$

Substitution gives

$$
x''-4x'+4x=0.
$$

Hence

$$
x=(C_1+C_2t)e^{2t},
\qquad
y=\left(C_1+C_2t+\frac{C_2}{3}\right)e^{2t}.
$$

## Nonhomogeneous Systems

A nonhomogeneous constant-coefficient system has the form

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t),
\qquad
\mathbf{f}(t)=
\begin{bmatrix}
f_1(t)\\
f_2(t)
\end{bmatrix}.
$$

The main classroom route is elimination: eliminate one variable, solve a nonhomogeneous second-order ODE, and recover the eliminated variable.

The matrix route is also important: solve the associated homogeneous system first, then use variation of constants when needed. We treat this as a reference extension.

## Worked Example: Nonhomogeneous Elimination

Solve

$$
\begin{cases}
x'=4x-3y+e^{-t},\\
y'=2x-y.
\end{cases}
$$

Use the second equation to eliminate $x$:

$$
x=\frac{y'+y}{2},
\qquad
x'=\frac{y''+y'}{2}.
$$

Substitute into the first equation:

$$
\frac{y''+y'}{2}
=4\frac{y'+y}{2}-3y+e^{-t}.
$$

Thus

$$
y''-3y'+2y=2e^{-t}.
$$

The homogeneous part has characteristic equation

$$
k^2-3k+2=0,
$$

so

$$
y_h=C_1e^t+C_2e^{2t}.
$$

Try $y_p=Ae^{-t}$. Then

$$
y_p''-3y_p'+2y_p=6Ae^{-t}.
$$

Since the right side is $2e^{-t}$, we get $A=\frac13$. Hence

$$
y=C_1e^t+C_2e^{2t}+\frac13e^{-t}.
$$

Recover $x$:

$$
x=\frac{y'+y}{2}
=C_1e^t+\frac32C_2e^{2t}.
$$

Therefore

$$
\begin{cases}
x=C_1e^t+\dfrac32C_2e^{2t},\\
y=C_1e^t+C_2e^{2t}+\dfrac13e^{-t}.
\end{cases}
$$

Equivalent answers may look slightly different because constants can be renamed.

## Choosing A Method

Use the eigenvalue method when:

- the system is homogeneous with constant coefficients
- the matrix form is clear
- the system is larger than $2\times2$

Use elimination when:

- the system is $2\times2$
- one variable is easy to solve for
- the resulting second-order equation is familiar

Use variation of constants when:

- the system is nonhomogeneous
- the homogeneous system has already been solved
- elimination is awkward or the matrix approach is desired

## After-Class Practice Bank

For each problem, first decide whether it is homogeneous or nonhomogeneous. Then choose a method.

**Homogeneous systems.**

1. 
   $$
   \begin{cases}
   x'=2x+3y,\\
   y'=2x+y.
   \end{cases}
   $$
2. 
   $$
   \begin{cases}
   x'=-x+3y,\\
   y'=-3x+5y.
   \end{cases}
   $$
3. 
   $$
   \begin{cases}
   x'=6x-y,\\
   y'=5x+2y.
   \end{cases}
   $$
4. 
   $$
   \begin{cases}
   x'=4x-3y,\\
   y'=3x+4y.
   \end{cases}
   $$
   Answer:
   $$
   \begin{cases}
   x=e^{4t}(C_1\cos3t+C_2\sin3t),\\
   y=e^{4t}(C_1\sin3t-C_2\cos3t).
   \end{cases}
   $$

**Nonhomogeneous systems.**

5. 
   $$
   \begin{cases}
   x'=-3x+y+3t,\\
   y'=2x-4y+e^{-t}.
   \end{cases}
   $$
6. 
   $$
   \begin{cases}
   x'=x+2y+e^t,\\
   y'=-x+3y.
   \end{cases}
   $$
7. 
   $$
   \begin{cases}
   x'=4x-3y+e^{-t},\\
   y'=2x-y.
   \end{cases}
   $$
   Answer:
   $$
   \begin{cases}
   x=C_1e^t+\dfrac32C_2e^{2t},\\
   y=C_1e^t+C_2e^{2t}+\dfrac13e^{-t}.
   \end{cases}
   $$

## Reading And References

- Course reading map: [Readings](../../readings/)
- Lecture slides: [Session 12 deck](../../slides/12-systems-of-odes/)
- Stewart, J. *Calculus: Early Transcendentals* (8th ed., metric version), Section 9.6 for modeling context
- Local source slides and notes: `system_of_first_order_linear_equations`, `the_matrix_approach`, `he_pt_vp_tt_version_print`, and `bai_tap_he_pt_vp_tt`
- Many examples and exercises are adapted from materials by Dr. Lê Xuân Đại
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau bài giảng này, sinh viên có thể:

- giải thích vì sao các đại lượng liên kết được mô hình hóa bằng hệ phương trình vi phân
- viết một hệ tuyến tính cấp một dưới dạng véc-tơ ma trận
- phân biệt hệ thuần nhất và hệ không thuần nhất
- giải hệ thuần nhất hệ số hằng bằng trị riêng và véc-tơ riêng
- đưa một hệ $2\times2$ về phương trình cấp hai bằng phương pháp khử
- giải các hệ không thuần nhất tiêu biểu bằng phương pháp khử
- đọc dáng điệu cơ bản của chân dung pha từ trị riêng

Bài giảng này đi theo mục trong đề cương về hệ phương trình vi phân. Hai phương pháp bắt buộc là phương pháp khử và phương pháp trị riêng. Slide và ghi chú địa phương của TS. Lê Xuân Đại cung cấp các ví dụ chính và ngân hàng bài tập; Stewart cung cấp bối cảnh mô hình hóa cho hệ.

## Vì sao cần hệ?

Một ODE cấp một đơn lẻ thường có một hàm chưa biết:

$$
y'=f(t,y).
$$

Một hệ có nhiều hàm chưa biết thay đổi cùng nhau. Với hai ẩn, ta thường viết

$$
\begin{cases}
x'=f_1(t,x,y),\\
y'=f_2(t,x,y).
\end{cases}
$$

Cặp $(x(t),y(t))$ là **trạng thái** của hệ tại thời điểm $t$. Cặp $(x'(t),y'(t))$ là vận tốc của trạng thái. Chân dung pha vẽ các mũi tên thể hiện vận tốc này tại nhiều điểm trong mặt phẳng.

Một mô hình cụ thể trong ghi chú địa phương mô tả một chất ban đầu có lượng $c$ phân rã thành hai sản phẩm $P$ và $Q$. Nếu $x(t)$ và $y(t)$ là lượng sản phẩm đã tạo thành, và mỗi tốc độ tạo thành tỉ lệ với lượng chưa chuyển hóa, thì

$$
\begin{cases}
\dfrac{dx}{dt}=k_1(c-x-y),\\[3pt]
\dfrac{dy}{dt}=k_2(c-x-y).
\end{cases}
$$

Cả hai tốc độ phụ thuộc vào cả hai biến qua $c-x-y$, nên hai phương trình phải được nghiên cứu cùng nhau.

## Định nghĩa

Một hệ tuyến tính cấp một với $\mathbf{x}(t)\in\mathbb{R}^n$ có dạng

$$
\mathbf{x}'(t)=A(t)\mathbf{x}(t)+\mathbf{g}(t),
\qquad
\mathbf{x}(t)=
\begin{bmatrix}
x_1(t)\\
\vdots\\
x_n(t)
\end{bmatrix}.
$$

Hệ là **thuần nhất** nếu $\mathbf{g}(t)=\mathbf{0}$:

$$
\mathbf{x}'=A(t)\mathbf{x}.
$$

Hệ có **hệ số hằng** nếu ma trận $A$ không phụ thuộc vào $t$:

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{g}(t).
$$

Với hệ thuần nhất hai phương trình

$$
\begin{cases}
x'=ax+by,\\
y'=cx+dy,
\end{cases}
$$

đặt

$$
\mathbf{x}=
\begin{bmatrix}
x\\y
\end{bmatrix},
\qquad
A=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}.
$$

Khi đó hệ trở thành

$$
\begin{bmatrix}
x'\\y'
\end{bmatrix}
=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}
\begin{bmatrix}
x\\y
\end{bmatrix},
\qquad
\mathbf{x}'=A\mathbf{x}.
$$

## Chồng chất và hệ nghiệm cơ bản

Với hệ tuyến tính thuần nhất, nếu $\mathbf{x}_1$ và $\mathbf{x}_2$ là nghiệm của $\mathbf{x}'=A\mathbf{x}$, thì

$$
C_1\mathbf{x}_1+C_2\mathbf{x}_2
$$

cũng là một nghiệm.

Với hai nghiệm véc-tơ

$$
\mathbf{x}_1(t)=
\begin{bmatrix}
x_1(t)\\y_1(t)
\end{bmatrix},
\qquad
\mathbf{x}_2(t)=
\begin{bmatrix}
x_2(t)\\y_2(t)
\end{bmatrix},
$$

Wronski của chúng là

$$
W(t)=
\det
\begin{bmatrix}
x_1(t)&x_2(t)\\
y_1(t)&y_2(t)
\end{bmatrix}.
$$

Nếu $W(t)\ne0$, hai nghiệm véc-tơ độc lập tuyến tính và tạo thành hệ nghiệm cơ bản. Nghiệm thuần nhất là

$$
\mathbf{x}_h=C_1\mathbf{x}_1+C_2\mathbf{x}_2.
$$

## Phương pháp trị riêng

Với hệ thuần nhất hệ số hằng

$$
\mathbf{x}'=A\mathbf{x},
$$

thử một véc-tơ mũ

$$
\mathbf{x}(t)=e^{\lambda t}\mathbf{v},
\qquad \mathbf{v}\ne\mathbf{0}.
$$

Thay vào hệ ta được

$$
\lambda e^{\lambda t}\mathbf{v}=Ae^{\lambda t}\mathbf{v}
\quad\Longleftrightarrow\quad
A\mathbf{v}=\lambda\mathbf{v}.
$$

Vậy $\lambda$ phải là trị riêng và $\mathbf{v}$ phải là véc-tơ riêng của $A$.

Tương đương,

$$
(A-\lambda I)\mathbf{v}=\mathbf{0}.
$$

Để có véc-tơ riêng khác không, $A-\lambda I$ phải suy biến, nên phương trình đặc trưng là

$$
\det(A-\lambda I)=0.
$$

Với

$$
A=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix},
$$

ta được

$$
\lambda^2-(a+d)\lambda+(ad-bc)=0.
$$

Nếu $A$ có hai trị riêng thực phân biệt $\lambda_1\ne\lambda_2$ với véc-tơ riêng $\mathbf{v}_1,\mathbf{v}_2$, thì

$$
\mathbf{x}(t)=C_1e^{\lambda_1t}\mathbf{v}_1+C_2e^{\lambda_2t}\mathbf{v}_2.
$$

## Ví dụ mẫu: hai trị riêng thực phân biệt

Giải

$$
\begin{cases}
x'=7x+3y,\\
y'=6x+4y.
\end{cases}
$$

Ở đây

$$
A=\begin{bmatrix}7&3\\6&4\end{bmatrix}.
$$

Phương trình đặc trưng là

$$
\det(A-\lambda I)=
\begin{vmatrix}
7-\lambda&3\\
6&4-\lambda
\end{vmatrix}
=0,
$$

nên

$$
\lambda^2-11\lambda+10=0.
$$

Do đó

$$
\lambda_1=1,\qquad \lambda_2=10.
$$

Với $\lambda_1=1$,

$$
(A-I)\mathbf{v}=\mathbf{0}
\quad\Longrightarrow\quad
6p_1+3p_2=0,
$$

nên chọn

$$
\mathbf{v}_1=
\begin{bmatrix}
1\\-2
\end{bmatrix}.
$$

Với $\lambda_2=10$,

$$
(A-10I)\mathbf{v}=\mathbf{0}
\quad\Longrightarrow\quad
-3p_1+3p_2=0,
$$

nên chọn

$$
\mathbf{v}_2=
\begin{bmatrix}
1\\1
\end{bmatrix}.
$$

Vậy

$$
\mathbf{x}(t)=
C_1e^t
\begin{bmatrix}
1\\-2
\end{bmatrix}
+C_2e^{10t}
\begin{bmatrix}
1\\1
\end{bmatrix}.
$$

Tương đương,

$$
\begin{cases}
x=C_1e^t+C_2e^{10t},\\
y=-2C_1e^t+C_2e^{10t}.
\end{cases}
$$

## Luyện tập tại lớp: phương pháp trị riêng

Các bài này được đặt ngay sau ví dụ phương pháp ma trận, theo nhịp luyện tập của các bộ slide ODE trước.

1. Giải hệ thuần nhất bằng phương pháp trị riêng:
   $$
   \begin{cases}
   x'=2x+3y,\\
   y'=2x+y.
   \end{cases}
   $$
   Đáp án:
   $$
   \lambda=4,-1,\qquad
   \mathbf{v}_1=\begin{bmatrix}3\\2\end{bmatrix},\quad
   \mathbf{v}_2=\begin{bmatrix}1\\-1\end{bmatrix}.
   $$
   Do đó
   $$
   \mathbf{x}(t)=C_1e^{4t}\begin{bmatrix}3\\2\end{bmatrix}
   +C_2e^{-t}\begin{bmatrix}1\\-1\end{bmatrix}.
   $$

2. Phân loại dáng điệu pha cơ bản:
   $$
   \begin{cases}
   x'=4x-3y,\\
   y'=3x+4y.
   \end{cases}
   $$
   Đáp án: $\lambda=4\pm3i$, nên quỹ đạo xoắn ra xa trong khi quay.

## Ngôn ngữ chân dung pha

Với một hệ thuần nhất $2\times2$, gốc tọa độ là điểm cân bằng. Véc-tơ riêng cho các hướng ưu tiên. Dấu và dạng của trị riêng cho biết chuyển động cơ bản:

- cả hai trị riêng âm: quỹ đạo đi về gốc tọa độ
- cả hai trị riêng dương: quỹ đạo đi ra xa gốc tọa độ
- hai trị riêng trái dấu: dáng điệu yên ngựa
- trị riêng phức $\alpha\pm i\beta$: chuyển động quay với tăng hoặc giảm do $\alpha$ quyết định

Với trị riêng phức, giả sử $A$ là ma trận thực, $\lambda=\alpha+i\beta$, và $\mathbf{v}=\mathbf{u}+i\mathbf{w}$. Khi đó hai nghiệm thực là

$$
\mathbf{x}_1=e^{\alpha t}(\mathbf{u}\cos\beta t-\mathbf{w}\sin\beta t),
$$

$$
\mathbf{x}_2=e^{\alpha t}(\mathbf{u}\sin\beta t+\mathbf{w}\cos\beta t).
$$

Ví dụ:

$$
\begin{cases}
x'=4x-3y,\\
y'=3x+4y.
\end{cases}
$$

Ma trận là

$$
A=
\begin{bmatrix}
4&-3\\
3&4
\end{bmatrix},
$$

và trị riêng là

$$
\lambda=4\pm3i.
$$

Nghiệm tổng quát thực là

$$
\begin{cases}
x=e^{4t}(C_1\cos3t+C_2\sin3t),\\
y=e^{4t}(C_1\sin3t-C_2\cos3t).
\end{cases}
$$

Vì phần thực $4$ dương, các quỹ đạo xoắn ra xa gốc tọa độ.

Với trị riêng bội $\lambda_0$, có thể không đủ véc-tơ riêng độc lập. Trong các ví dụ $2\times2$ của ghi chú địa phương, dạng hữu ích là

$$
\mathbf{x}(t)=e^{\lambda_0t}
\begin{bmatrix}
a_1t+a_2\\
b_1t+b_2
\end{bmatrix}.
$$

Ví dụ,

$$
\begin{cases}
x'=5x-y,\\
y'=x+3y
\end{cases}
\quad\Longrightarrow\quad
\lambda=4 \text{ bội}.
$$

Nghiệm là

$$
\begin{cases}
x=e^{4t}(C_1t+C_2),\\
y=e^{4t}(C_1t+C_2-C_1).
\end{cases}
$$

## Phương pháp khử

Với hệ thuần nhất

$$
\begin{cases}
x'=ax+by,\\
y'=cx+dy,
\end{cases}
$$

giả sử $b\ne0$. Từ phương trình đầu,

$$
y=\frac{x'-ax}{b}.
$$

Lấy đạo hàm:

$$
y'=\frac{x''-ax'}{b}.
$$

Thay vào phương trình thứ hai:

$$
\frac{x''-ax'}{b}=cx+d\frac{x'-ax}{b}.
$$

Sắp xếp lại,

$$
x''-(a+d)x'+(ad-bc)x=0.
$$

Đây là ODE tuyến tính thuần nhất cấp hai. Giải để tìm $x(t)$, rồi tìm lại $y(t)$ từ

$$
y=\frac{x'-ax}{b}.
$$

## Ví dụ mẫu: phương pháp khử

Dùng phương pháp khử cho

$$
\begin{cases}
x'=7x+3y,\\
y'=6x+4y.
\end{cases}
$$

Từ phương trình đầu,

$$
y=\frac{x'-7x}{3},
\qquad
y'=\frac{x''-7x'}{3}.
$$

Thay vào $y'=6x+4y$:

$$
\frac{x''-7x'}{3}=6x+4\frac{x'-7x}{3}.
$$

Do đó

$$
x''-11x'+10x=0.
$$

Phương trình đặc trưng là

$$
k^2-11k+10=0,
$$

nên

$$
x=C_1e^t+C_2e^{10t}.
$$

Khi đó

$$
x'=C_1e^t+10C_2e^{10t},
$$

và

$$
y=\frac{x'-7x}{3}
=-2C_1e^t+C_2e^{10t}.
$$

Kết quả khớp với phương pháp trị riêng.

## Luyện tập tại lớp: phương pháp khử

Đây là bài luyện đi kèm, đặt ngay sau ví dụ phương pháp khử.

Bắt đầu với

$$
\begin{cases}
x'=-x+3y,\\
y'=-3x+5y.
\end{cases}
$$

Từ phương trình đầu,

$$
y=\frac{x'+x}{3},
\qquad
y'=\frac{x''+x'}{3}.
$$

Thay vào ta được

$$
x''-4x'+4x=0.
$$

Suy ra

$$
x=(C_1+C_2t)e^{2t},
\qquad
y=\left(C_1+C_2t+\frac{C_2}{3}\right)e^{2t}.
$$

## Hệ không thuần nhất

Một hệ không thuần nhất hệ số hằng có dạng

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t),
\qquad
\mathbf{f}(t)=
\begin{bmatrix}
f_1(t)\\
f_2(t)
\end{bmatrix}.
$$

Hướng chính trên lớp là phương pháp khử: khử một biến, giải ODE cấp hai không thuần nhất, rồi tìm lại biến đã khử.

Hướng ma trận cũng quan trọng: giải hệ thuần nhất tương ứng trước, rồi dùng biến thiên hằng số khi cần. Ta xem phần này như mở rộng tham khảo.

## Ví dụ mẫu: khử cho hệ không thuần nhất

Giải

$$
\begin{cases}
x'=4x-3y+e^{-t},\\
y'=2x-y.
\end{cases}
$$

Dùng phương trình thứ hai để khử $x$:

$$
x=\frac{y'+y}{2},
\qquad
x'=\frac{y''+y'}{2}.
$$

Thay vào phương trình đầu:

$$
\frac{y''+y'}{2}
=4\frac{y'+y}{2}-3y+e^{-t}.
$$

Do đó

$$
y''-3y'+2y=2e^{-t}.
$$

Phần thuần nhất có phương trình đặc trưng

$$
k^2-3k+2=0,
$$

nên

$$
y_h=C_1e^t+C_2e^{2t}.
$$

Thử $y_p=Ae^{-t}$. Khi đó

$$
y_p''-3y_p'+2y_p=6Ae^{-t}.
$$

Vì vế phải là $2e^{-t}$, ta được $A=\frac13$. Suy ra

$$
y=C_1e^t+C_2e^{2t}+\frac13e^{-t}.
$$

Tìm lại $x$:

$$
x=\frac{y'+y}{2}
=C_1e^t+\frac32C_2e^{2t}.
$$

Vậy

$$
\begin{cases}
x=C_1e^t+\dfrac32C_2e^{2t},\\
y=C_1e^t+C_2e^{2t}+\dfrac13e^{-t}.
\end{cases}
$$

Các đáp án tương đương có thể nhìn hơi khác vì có thể đổi tên hằng số.

## Chọn phương pháp

Dùng phương pháp trị riêng khi:

- hệ thuần nhất có hệ số hằng
- dạng ma trận rõ ràng
- hệ lớn hơn $2\times2$

Dùng phương pháp khử khi:

- hệ là $2\times2$
- một biến dễ biểu diễn qua biến kia và đạo hàm của nó
- phương trình cấp hai thu được quen thuộc

Dùng biến thiên hằng số khi:

- hệ không thuần nhất
- hệ thuần nhất tương ứng đã được giải
- khử không thuận tiện hoặc muốn dùng hướng ma trận

## Ngân hàng bài tập sau giờ học

Với mỗi bài, trước hết xác định hệ thuần nhất hay không thuần nhất. Sau đó chọn phương pháp.

**Hệ thuần nhất.**

1. 
   $$
   \begin{cases}
   x'=2x+3y,\\
   y'=2x+y.
   \end{cases}
   $$
2. 
   $$
   \begin{cases}
   x'=-x+3y,\\
   y'=-3x+5y.
   \end{cases}
   $$
3. 
   $$
   \begin{cases}
   x'=6x-y,\\
   y'=5x+2y.
   \end{cases}
   $$
4. 
   $$
   \begin{cases}
   x'=4x-3y,\\
   y'=3x+4y.
   \end{cases}
   $$
   Đáp án:
   $$
   \begin{cases}
   x=e^{4t}(C_1\cos3t+C_2\sin3t),\\
   y=e^{4t}(C_1\sin3t-C_2\cos3t).
   \end{cases}
   $$

**Hệ không thuần nhất.**

5. 
   $$
   \begin{cases}
   x'=-3x+y+3t,\\
   y'=2x-4y+e^{-t}.
   \end{cases}
   $$
6. 
   $$
   \begin{cases}
   x'=x+2y+e^t,\\
   y'=-x+3y.
   \end{cases}
   $$
7. 
   $$
   \begin{cases}
   x'=4x-3y+e^{-t},\\
   y'=2x-y.
   \end{cases}
   $$
   Đáp án:
   $$
   \begin{cases}
   x=C_1e^t+\dfrac32C_2e^{2t},\\
   y=C_1e^t+C_2e^{2t}+\dfrac13e^{-t}.
   \end{cases}
   $$

## Tài liệu đọc và tham khảo

- Bản đồ đọc của môn: [Readings](../../readings/)
- Slide bài giảng: [Bộ slide Buổi 12](../../slides/12-systems-of-odes/)
- Stewart, J. *Calculus: Early Transcendentals* (ấn bản thứ 8, bản metric), Mục 9.6 cho bối cảnh mô hình hóa
- Slide và ghi chú địa phương: `system_of_first_order_linear_equations`, `the_matrix_approach`, `he_pt_vp_tt_version_print`, và `bai_tap_he_pt_vp_tt`
- Nhiều ví dụ và bài tập được biên soạn dựa trên tài liệu của TS. Lê Xuân Đại
{% end %}
