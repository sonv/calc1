+++
title = "11. Second-Order Differential Equations"
description = "Second-order linear differential equations, constant-coefficient solution structure, undetermined coefficients, variation of parameters, and spring-mass modeling."
weight = 110
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- identify second-order linear equations, homogeneous equations, nonhomogeneous equations, IVPs, and BVPs
- use the Wronskian to recognize when two solutions form a fundamental set
- solve homogeneous constant-coefficient equations using the characteristic equation
- choose trial forms for undetermined coefficients, including resonance cases
- use superposition and variation of parameters as organizing principles for nonhomogeneous equations
- translate spring-mass problems into a second-order differential equation

This lecture develops the standard structure of second-order linear ODEs. Stewart supplies the constant-coefficient formulas and modeling context; OpenStax and Active Calculus support the general ODE language; instructor notes and local exercise sets supply theorem order, worked examples, and practice.

## Core Ideas

**Linear form.** A second-order linear differential equation has the form

$$
a_0(x)y''+a_1(x)y'+a_2(x)y=F(x),\qquad a_0(x)\ne0.
$$

For constant coefficients, we write

$$
Ay''+By'+Cy=f(x),\qquad A\ne0.
$$

**Initial conditions.** An IVP gives two conditions, usually

$$
y(x_0)=\alpha,\qquad y'(x_0)=\beta.
$$

If the coefficients are continuous on an interval and $a_0(x)\ne0$ there, the IVP has a unique solution on that interval.

**Homogeneous structure.** For the homogeneous equation $L(y)=0$, two linearly independent solutions $y_1,y_2$ give

$$
y_h=C_1y_1+C_2y_2.
$$

For the nonhomogeneous equation $L(y)=f(x)$, one particular solution $y_p$ gives

$$
y=y_h+y_p.
$$

**Wronskian.** For two functions,

$$
W(y_1,y_2)=
\begin{vmatrix}
y_1 & y_2\\
y_1' & y_2'
\end{vmatrix}
=y_1y_2'-y_1'y_2.
$$

If $W(y_1,y_2)(x_0)\ne0$ at one point, then $y_1,y_2$ are linearly independent.

## Characteristic Equation

For

$$
Ay''+By'+Cy=0,
$$

try $y=e^{kx}$. This gives the characteristic equation

$$
Ak^2+Bk+C=0.
$$

The three root cases are:

1. Distinct real roots $k_1,k_2$:
   $$
   y=C_1e^{k_1x}+C_2e^{k_2x}.
   $$
2. Repeated real root $k_0$:
   $$
   y=C_1e^{k_0x}+C_2xe^{k_0x}.
   $$
3. Complex roots $\alpha\pm i\beta$:
   $$
   y=e^{\alpha x}\left(C_1\cos\beta x+C_2\sin\beta x\right).
   $$

## Undetermined Coefficients

Use this method when the right side is built from polynomials, exponentials, sines, and cosines.

For

$$
f(x)=e^{\alpha x}P_n(x),
$$

try

$$
y_p=x^s e^{\alpha x}Q_n(x),
$$

where $Q_n$ is an unknown polynomial of degree at most $n$.

For

$$
f(x)=e^{\alpha x}\left(P_n(x)\cos\beta x+Q_m(x)\sin\beta x\right),
$$

try

$$
y_p=x^s e^{\alpha x}\left(H_k(x)\cos\beta x+T_k(x)\sin\beta x\right),
\qquad k=\max\{m,n\}.
$$

Here $H_k$ and $T_k$ are unknown polynomials of degree at most $k$.

Choose the power $s$ to avoid duplicating a homogeneous solution:

- $s=0$ if there is no resonance
- $s=1$ for a simple resonance
- $s=2$ for a repeated-root resonance in the exponential-polynomial case

## Worked Example

Solve

$$
y''-2y'-3y=e^{4x}.
$$

The homogeneous equation has characteristic equation

$$
k^2-2k-3=(k-3)(k+1)=0,
$$

so

$$
y_h=C_1e^{3x}+C_2e^{-x}.
$$

Since $e^{4x}$ is not part of $y_h$, try $y_p=Ae^{4x}$. Then

$$
y_p''-2y_p'-3y_p=(16A-8A-3A)e^{4x}=5Ae^{4x}.
$$

Thus $5A=1$, so $A=\frac15$, and

$$
y=C_1e^{3x}+C_2e^{-x}+\frac15e^{4x}.
$$

## Spring-Mass Model

Measure displacement $x(t)$ from equilibrium. Newton's law gives

$$
mx''+bx'+kx=F(t),
$$

where $m$ is mass, $b$ is the damping coefficient, $k$ is the spring constant, and $F(t)$ is the external force.

- $b=0$ gives an undamped oscillator
- $F(t)=0$ gives free motion
- $b>0$ gives damped motion
- $F(t)\ne0$ gives forced motion

## Practice

For each problem, first name the method and the expected form of the solution.

1. Solve $y''-5y'+6y=e^{-x}$.
2. Solve $y''+4y=x^2$.
3. Solve $y''+y=\cos x$.
4. Solve $y''-4y'+4y=x+e^{2x}$.
5. Solve $y''-7y'+6y=6x^2-20x+3$.
6. A $1$ kg mass is attached to a spring with $k=9$, no damping, no forcing, $x(0)=0.1$, and $x'(0)=0$. Model and solve.

## Reading And References

- Stewart, J. *Calculus: Early Transcendentals* (8th ed., metric version), Section 17.1; Sections 17.2-17.3 for later nonhomogeneous methods
- [OpenStax Calculus Volume 2, 4.1: Basics of Differential Equations](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations)
- [Active Calculus 7.2: Qualitative behavior of solutions to DEs](https://activecalculus.org/single/sec-7-2-qualitative.html)
- Instructor notes and local exercise sets adapted from Dr. Lê Xuân Đại
- Lecture slides: [Session 11 deck](../../slides/11-second-order-differential-equations/)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau bài giảng này, sinh viên có thể:

- nhận biết phương trình tuyến tính cấp hai, phương trình thuần nhất, phương trình không thuần nhất, bài toán giá trị ban đầu, và bài toán biên
- dùng Wronski để nhận biết khi nào hai nghiệm tạo thành hệ nghiệm cơ bản
- giải phương trình thuần nhất hệ số hằng bằng phương trình đặc trưng
- chọn dạng thử cho phương pháp hệ số bất định, gồm cả các trường hợp cộng hưởng
- dùng nguyên lý chồng chất và biến thiên hằng số để tổ chức nghiệm của phương trình không thuần nhất
- dịch bài toán lò xo-vật nặng thành phương trình vi phân cấp hai

Bài giảng này xây dựng cấu trúc chuẩn của ODE tuyến tính cấp hai. Stewart cung cấp công thức hệ số hằng và bối cảnh mô hình; OpenStax và Active Calculus hỗ trợ ngôn ngữ ODE tổng quát; ghi chú giảng viên và bộ bài tập địa phương cung cấp thứ tự định lý, ví dụ mẫu, và luyện tập.

## Ý tưởng chính

**Dạng tuyến tính.** Một phương trình vi phân tuyến tính cấp hai có dạng

$$
a_0(x)y''+a_1(x)y'+a_2(x)y=F(x),\qquad a_0(x)\ne0.
$$

Với hệ số hằng, ta viết

$$
Ay''+By'+Cy=f(x),\qquad A\ne0.
$$

**Điều kiện ban đầu.** Một bài toán giá trị ban đầu có hai điều kiện, thường là

$$
y(x_0)=\alpha,\qquad y'(x_0)=\beta.
$$

Nếu các hệ số liên tục trên một khoảng và $a_0(x)\ne0$ trên khoảng đó, bài toán có nghiệm duy nhất trên khoảng đó.

**Cấu trúc nghiệm thuần nhất.** Với phương trình thuần nhất $L(y)=0$, hai nghiệm độc lập tuyến tính $y_1,y_2$ cho

$$
y_h=C_1y_1+C_2y_2.
$$

Với phương trình không thuần nhất $L(y)=f(x)$, một nghiệm riêng $y_p$ cho

$$
y=y_h+y_p.
$$

**Wronski.** Với hai hàm,

$$
W(y_1,y_2)=
\begin{vmatrix}
y_1 & y_2\\
y_1' & y_2'
\end{vmatrix}
=y_1y_2'-y_1'y_2.
$$

Nếu $W(y_1,y_2)(x_0)\ne0$ tại một điểm, thì $y_1,y_2$ độc lập tuyến tính.

## Phương trình đặc trưng

Với

$$
Ay''+By'+Cy=0,
$$

thử $y=e^{kx}$. Khi đó ta có phương trình đặc trưng

$$
Ak^2+Bk+C=0.
$$

Ba trường hợp nghiệm là:

1. Hai nghiệm thực phân biệt $k_1,k_2$:
   $$
   y=C_1e^{k_1x}+C_2e^{k_2x}.
   $$
2. Nghiệm kép $k_0$:
   $$
   y=C_1e^{k_0x}+C_2xe^{k_0x}.
   $$
3. Hai nghiệm phức $\alpha\pm i\beta$:
   $$
   y=e^{\alpha x}\left(C_1\cos\beta x+C_2\sin\beta x\right).
   $$

## Hệ số bất định

Dùng phương pháp này khi vế phải được tạo từ đa thức, mũ, sin, và cos.

Với

$$
f(x)=e^{\alpha x}P_n(x),
$$

thử

$$
y_p=x^s e^{\alpha x}Q_n(x),
$$

trong đó $Q_n$ là đa thức chưa biết bậc không quá $n$.

Với

$$
f(x)=e^{\alpha x}\left(P_n(x)\cos\beta x+Q_m(x)\sin\beta x\right),
$$

thử

$$
y_p=x^s e^{\alpha x}\left(H_k(x)\cos\beta x+T_k(x)\sin\beta x\right),
\qquad k=\max\{m,n\}.
$$

Ở đây $H_k$ và $T_k$ là các đa thức chưa biết bậc không quá $k$.

Chọn lũy thừa $s$ để tránh trùng với nghiệm thuần nhất:

- $s=0$ nếu không có cộng hưởng
- $s=1$ nếu có cộng hưởng đơn
- $s=2$ nếu có cộng hưởng nghiệm kép trong trường hợp mũ-nhân-đa thức

## Ví dụ mẫu

Giải

$$
y''-2y'-3y=e^{4x}.
$$

Phương trình thuần nhất có phương trình đặc trưng

$$
k^2-2k-3=(k-3)(k+1)=0,
$$

nên

$$
y_h=C_1e^{3x}+C_2e^{-x}.
$$

Vì $e^{4x}$ không nằm trong $y_h$, thử $y_p=Ae^{4x}$. Khi đó

$$
y_p''-2y_p'-3y_p=(16A-8A-3A)e^{4x}=5Ae^{4x}.
$$

Suy ra $5A=1$, nên $A=\frac15$, và

$$
y=C_1e^{3x}+C_2e^{-x}+\frac15e^{4x}.
$$

## Mô hình lò xo-vật nặng

Đo li độ $x(t)$ từ vị trí cân bằng. Định luật Newton cho

$$
mx''+bx'+kx=F(t),
$$

trong đó $m$ là khối lượng, $b$ là hệ số cản, $k$ là độ cứng lò xo, và $F(t)$ là ngoại lực.

- $b=0$ cho dao động không cản
- $F(t)=0$ cho dao động tự do
- $b>0$ cho dao động có cản
- $F(t)\ne0$ cho dao động cưỡng bức

## Luyện tập

Với mỗi bài, trước hết hãy gọi tên phương pháp và dạng nghiệm dự kiến.

1. Giải $y''-5y'+6y=e^{-x}$.
2. Giải $y''+4y=x^2$.
3. Giải $y''+y=\cos x$.
4. Giải $y''-4y'+4y=x+e^{2x}$.
5. Giải $y''-7y'+6y=6x^2-20x+3$.
6. Một vật nặng $1$ kg gắn với lò xo có $k=9$, không có lực cản, không có ngoại lực, $x(0)=0.1$, và $x'(0)=0$. Lập mô hình và giải.

## Tài liệu đọc và tham khảo

- Stewart, J. *Calculus: Early Transcendentals* (ấn bản thứ 8, bản metric), Mục 17.1; Mục 17.2-17.3 cho các phương pháp không thuần nhất tiếp theo
- [OpenStax Calculus Tập 2, 4.1: Cơ sở phương trình vi phân](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations)
- [Active Calculus 7.2: Dáng điệu định tính của nghiệm ODE](https://activecalculus.org/single/sec-7-2-qualitative.html)
- Ghi chú giảng viên và bài tập địa phương phỏng theo TS. Lê Xuân Đại
- Slide bài giảng: [Bộ slide Buổi 11](../../slides/11-second-order-differential-equations/)
{% end %}
