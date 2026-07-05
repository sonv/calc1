+++
title = "06. Applications of Integration"
description = "Lecture on areas, volumes, arc length, surface area of revolution, physical applications, economic applications, and mixed applications of definite integrals."
weight = 60
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- compute areas under curves and between curves
- set up volumes by slicing, disks, washers, and cylindrical shells
- compute arc length for curves with continuous derivatives
- compute surface area of revolution about the coordinate axes
- derive and apply the work integral and the hydrostatic-force integral
- derive and apply the present and future value of an income stream, consumer and producer surplus, and the survival-and-renewal model
- choose an appropriate integral model before evaluating

The central idea is that an integral adds many small pieces. The hard part is usually not the antiderivative; it is choosing the correct small contribution and its unit.

## Area

For area between a graph and the $x$-axis,

$$
A=\int_a^b |f(x)|\,dx.
$$

For area between two curves,

$$
A=\int_a^b |f(x)-g(x)|\,dx.
$$

If $f(x)\ge g(x)$ on $[a,b]$, then

$$
A=\int_a^b (f(x)-g(x))\,dx.
$$

Example:

$$
y=3-x,\qquad y=x^2-9.
$$

The intersections are $x=-4$ and $x=3$, so

$$
A=\int_{-4}^{3} \big((3-x)-(x^2-9)\big)\,dx
=\frac{343}{6}.
$$

## Volume

If a cross section perpendicular to the $x$-axis has area $A(x)$, then

$$
V=\int_a^b A(x)\,dx.
$$

For disks and washers about the $x$-axis,

$$
V=\pi\int_a^b R(x)^2\,dx,
$$

or

$$
V=\pi\int_a^b\big(R(x)^2-r(x)^2\big)\,dx.
$$

For cylindrical shells about the $y$-axis,

$$
V=2\pi\int_a^b x f(x)\,dx.
$$

Example:

Rotate the region under $y=\sqrt{x}$ on $[0,4]$ about the $x$-axis:

$$
V=\pi\int_0^4(\sqrt{x})^2\,dx
=\pi\int_0^4 x\,dx
=8\pi.
$$

## Arc Length

For $y=f(x)$ with continuous derivative,

$$
L=\int_a^b \sqrt{1+\big(f'(x)\big)^2}\,dx.
$$

Example:

For

$$
y=\frac{x^2}{2}-\frac{\ln x}{4},\qquad 1\le x\le3,
$$

we have

$$
y'=x-\frac{1}{4x},
\qquad
\sqrt{1+(y')^2}=x+\frac{1}{4x}.
$$

Therefore

$$
L=\int_1^3\left(x+\frac{1}{4x}\right)\,dx
=4+\frac14\ln3.
$$

## Surface Area

For rotation about the $x$-axis,

$$
S=2\pi\int_a^b f(x)\sqrt{1+\big(f'(x)\big)^2}\,dx.
$$

This formula is built from the idea

$$
dS\approx 2\pi r\,ds.
$$

Example:

For $y=\sin2x$, $0\le x\le \pi/2$, rotated about the $x$-axis,

$$
S=2\pi\int_0^{\pi/2}\sin2x\sqrt{1+4\cos^2 2x}\,dx.
$$

With $t=2\cos2x$,

$$
S=\pi\int_0^2\sqrt{1+t^2}\,dt
=\pi\left(\sqrt5+\frac12\ln(2+\sqrt5)\right).
$$

## Physical Applications

Work done by a constant force $F$ over a distance $d$ is $W=Fd$. If the force varies, divide $[a,b]$ into $n$ subintervals of width $\Delta x$ with a sample point $x_i^*$ in each; the force is nearly constant on each subinterval, and the limit of the Riemann sums defines

$$
W=\int_a^b F(x)\,dx.
$$

**Case 1 (spring; Stewart 6.4, Example 2).** Hooke's law: the force needed to hold a spring stretched $x$ beyond its natural length is $F(x)=kx$, where $k$ is the spring constant. A force of 40 N holds a spring stretched from its natural length of 10 cm to 15 cm, so $40=k(0.05)$ and $k=800$ N/m. The work done in stretching it from 15 cm to 18 cm is

$$
W=\int_{0.05}^{0.08}800x\,dx=1.56\text{ J}.
$$

The pressure at depth $x$ in a fluid of density $\rho$ is $P=\rho g\,x$, where $g$ is the acceleration due to gravity, and at any point it acts equally in all directions. On a thin horizontal strip of width $L(x)$ the pressure is nearly constant, so a vertical wall that is wet from depth $0$ to $H$ feels the total force

$$
F=\int_0^{H}\rho g\,x\,L(x)\,dx.
$$

**Case 2 (dam; Stewart 8.3, Example 2).** A trapezoidal dam is 20 m high, 50 m wide at the top and 30 m at the bottom, and the water level is 4 m below the top. Measuring $x$ from the water surface, the water is $16$ m deep, and similar triangles give the width $L(x)=46-x$. Hence

$$
F=\int_0^{16}9800\,x(46-x)\,dx
\approx4.43\times10^7\text{ N},
$$

the weight of roughly 4500 tonnes.

## Economic And Life-Science Applications

With continuous compounding at annual interest rate $r$, a deposit grows by the factor $e^{rt}$ in $t$ years, so $K$ dollars payable at time $t$ is worth $Ke^{-rt}$ today. Slicing an income stream that flows at the rate $f(t)$, the deposit $f(t)\,dt$ made at time $t$ gives

$$
PV=\int_0^T f(t)e^{-rt}\,dt,
\qquad
FV=\int_0^T f(t)e^{r(T-t)}\,dt.
$$

**Case 3 (pricing a machine).** A machine earns income at the rate $f(t)=15-2t$ million dollars per year for $0\le t\le7$, with $r=0.08$. Its fair market price is the present value of that stream:

$$
PV=\int_0^7(15-2t)e^{-0.08t}\,dt
=300e^{-0.56}-125\approx46.36\text{ million dollars}.
$$

**Case 4 (tire market).** Suppose $q_0$ units sell, all at one price $p_0$. The buyer of unit $q$ would have paid the demand price $D(q)$, and the seller would have accepted the supply price $S(q)$, so

$$
CS=\int_0^{q_0}\big(D(q)-p_0\big)\,dq,
\qquad
PS=\int_0^{q_0}\big(p_0-S(q)\big)\,dq.
$$

With $D(q)=90-0.1q^2$ and $S(q)=0.2q^2+q+50$ (dollars per tire, $q$ in thousands of tires), the equilibrium is $q_0=10$, $p_0=80$, and

$$
CS=\frac{200}{3},
\qquad
PS=\frac{550}{3}
$$

in thousands of dollars.

**Case 5 (survival and renewal).** If a group starts with $P_0$ members, $f(t)$ is the fraction still present $t$ months after joining, and new members arrive at the rate $r(t)$, then

$$
P(T)=P_0f(T)+\int_0^T r(t)f(T-t)\,dt.
$$

A clinic with $P_0=300$, $f(t)=e^{-t/20}$, and $r(t)=10$ patients per month has

$$
P(15)=300e^{-0.75}+200\big(1-e^{-0.75}\big)\approx247\text{ patients},
$$

and in the long run it drifts toward the steady level $10\times20=200$ (arrival rate times average stay).

In the slides, each case follows the same pattern: state the question, derive the general formula by slicing, substitute the data, and interpret the result with its units.

## Practice

1. Find the area enclosed by $y=(x-1)^2$ and $x^2-\frac{y^2}{2}=1$.
2. Find the area enclosed by $y=x-x^2$ and $y=x\sqrt{1-x}$.
3. Rotate $y^2=(x-1)^3$, $1\le x\le2$, about the $x$-axis.
4. Rotate the region bounded by $y=x^2$, $y=0$, and $x+y=2$ about the $x$-axis.
5. Find the arc length of $y=\frac{x^3}{12}+\frac1x$, $1\le x\le4$.
6. Find the arc length of $y=\ln(1-x^2)$, $-\frac12\le x\le\frac12$.
7. Find the surface area generated by rotating $y=\sqrt{x^2+4}$, $0\le x\le1$, about the $x$-axis.
8. When a particle is located a distance $x$ metres from the origin, a force of $x^2+2x$ newtons acts on it. How much work is done in moving it from $x=1$ to $x=3$?
9. You deposit 1200 dollars per year continuously into an account paying 6% per year, compounded continuously. How much is in the account after 10 years?
10. Marginal cost is $C'(x)=0.1x^2+4x+10$ and marginal revenue is $R'(x)=70-x$ (thousand dollars per unit). Find $x_m$ where they are equal, and the net earnings $\int_0^{x_m}(R'-C')\,dx$.
11. Blood at distance $r$ from the axis of an artery of radius $R$ flows at speed $S(r)=k(R^2-r^2)$, where $k$ is a constant. Slicing the cross-section into thin rings of area $2\pi r\,dr$, find the volume rate of blood flow.

Answers:

1. $\displaystyle \frac{10}{3}-\frac{\sqrt2}{2}\ln(3+\sqrt8)$.
2. $\displaystyle \frac{1}{10}$.
3. $\displaystyle \frac{\pi}{4}$.
4. $\displaystyle \frac{8\pi}{15}$.
5. $\displaystyle 6$.
6. $\displaystyle 2\ln3-1$.
7. $\displaystyle \pi\sqrt2\left(\sqrt3+2\ln\frac{1+\sqrt3}{\sqrt2}\right)$.
8. $\displaystyle \frac{50}{3}\approx16.7$ J.
9. $\displaystyle 20000\big(e^{0.6}-1\big)\approx16442$ dollars.
10. $x_m=10$; $\displaystyle \frac{950}{3}\approx316.7$ thousand dollars.
11. $\displaystyle \frac{\pi kR^4}{2}$.

## Reading And Practice Sources

- Boelkins, M., [*Active Calculus*](https://activecalculus.org/single/) (2nd ed.), Sections 6.1, 6.2, and [6.4 (work, force, and pressure)](https://activecalculus.org/single/sec-6-4-physics.html).
- Strang, G., & Herman, E. "Jed", *Calculus Volume 1*, OpenStax, Sections [6.1](https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves)-[6.5 (physical applications)](https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications).
- Stewart, J. (2016), *Calculus: Early Transcendentals* (8th ed., metric version), Sections 6.1-6.5 and 8.1-8.4.
- Lê Xuân Đại, HCMUT lecture slides: source of the five application cases.
- Instructor notes: local examples and extra exercises adapted for MT1003 Calculus 1.
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Sau bài này, sinh viên có thể:

- tính diện tích dưới đồ thị và giữa hai đường cong
- thiết lập thể tích bằng lát cắt, đĩa, vòng đệm, và vỏ trụ
- tính độ dài cung của đường cong có đạo hàm liên tục
- tính diện tích mặt tròn xoay quanh các trục tọa độ
- xây dựng và áp dụng tích phân công và tích phân áp lực thủy tĩnh
- xây dựng và áp dụng hiện giá/giá trị tương lai của dòng thu nhập, thặng dư tiêu dùng và sản xuất, và mô hình tồn tại-bổ sung
- chọn đúng mô hình tích phân trước khi tính

Ý tưởng chính là tích phân cộng nhiều phần rất nhỏ. Phần khó thường không phải là nguyên hàm, mà là chọn đúng phần đóng góp nhỏ và đơn vị của nó.

## Diện tích

Diện tích giữa đồ thị và trục $x$:

$$
A=\int_a^b |f(x)|\,dx.
$$

Diện tích giữa hai đường cong:

$$
A=\int_a^b |f(x)-g(x)|\,dx.
$$

Nếu $f(x)\ge g(x)$ trên $[a,b]$, thì

$$
A=\int_a^b (f(x)-g(x))\,dx.
$$

Ví dụ:

$$
y=3-x,\qquad y=x^2-9.
$$

Hai giao điểm là $x=-4$ và $x=3$, nên

$$
A=\int_{-4}^{3} \big((3-x)-(x^2-9)\big)\,dx
=\frac{343}{6}.
$$

## Thể tích

Nếu lát cắt vuông góc trục $x$ có diện tích $A(x)$, thì

$$
V=\int_a^b A(x)\,dx.
$$

Với phương pháp đĩa và vòng đệm quanh trục $x$,

$$
V=\pi\int_a^b R(x)^2\,dx,
$$

hoặc

$$
V=\pi\int_a^b\big(R(x)^2-r(x)^2\big)\,dx.
$$

Với phương pháp vỏ trụ quanh trục $y$,

$$
V=2\pi\int_a^b x f(x)\,dx.
$$

Ví dụ:

Quay miền dưới $y=\sqrt{x}$ trên $[0,4]$ quanh trục $x$:

$$
V=\pi\int_0^4(\sqrt{x})^2\,dx
=\pi\int_0^4 x\,dx
=8\pi.
$$

## Độ dài cung

Với $y=f(x)$ có đạo hàm liên tục,

$$
L=\int_a^b \sqrt{1+\big(f'(x)\big)^2}\,dx.
$$

Ví dụ:

Với

$$
y=\frac{x^2}{2}-\frac{\ln x}{4},\qquad 1\le x\le3,
$$

ta có

$$
y'=x-\frac{1}{4x},
\qquad
\sqrt{1+(y')^2}=x+\frac{1}{4x}.
$$

Do đó

$$
L=\int_1^3\left(x+\frac{1}{4x}\right)\,dx
=4+\frac14\ln3.
$$

## Diện tích mặt

Khi quay quanh trục $x$,

$$
S=2\pi\int_a^b f(x)\sqrt{1+\big(f'(x)\big)^2}\,dx.
$$

Công thức này đến từ ý tưởng

$$
dS\approx 2\pi r\,ds.
$$

Ví dụ:

Với $y=\sin2x$, $0\le x\le \pi/2$, quay quanh trục $x$,

$$
S=2\pi\int_0^{\pi/2}\sin2x\sqrt{1+4\cos^2 2x}\,dx.
$$

Đặt $t=2\cos2x$,

$$
S=\pi\int_0^2\sqrt{1+t^2}\,dt
=\pi\left(\sqrt5+\frac12\ln(2+\sqrt5)\right).
$$

## Ứng dụng vật lý

Công của lực không đổi $F$ trên quãng đường $d$ là $W=Fd$. Nếu lực biến thiên, chia $[a,b]$ thành $n$ đoạn con độ rộng $\Delta x$ với điểm mẫu $x_i^*$ trong mỗi đoạn; trên mỗi đoạn lực gần như không đổi, và giới hạn của tổng Riemann định nghĩa

$$
W=\int_a^b F(x)\,dx.
$$

**Tình huống 1 (lò xo; Stewart 6.4, Ví dụ 2).** Định luật Hooke: lực cần để giữ lò xo giãn $x$ so với chiều dài tự nhiên là $F(x)=kx$, với $k$ là hằng số lò xo. Cần lực 40 N để giữ lò xo giãn từ chiều dài tự nhiên 10 cm đến 15 cm, nên $40=k(0.05)$ và $k=800$ N/m. Công kéo giãn lò xo từ 15 cm đến 18 cm là

$$
W=\int_{0.05}^{0.08}800x\,dx=1.56\text{ J}.
$$

Áp suất ở độ sâu $x$ trong chất lỏng có khối lượng riêng $\rho$ là $P=\rho g\,x$, với $g$ là gia tốc trọng trường, và tại mỗi điểm nó tác dụng như nhau theo mọi hướng. Trên một dải ngang mỏng bề rộng $L(x)$, áp suất gần như không đổi, nên thành đứng ướt từ độ sâu $0$ đến $H$ chịu tổng lực

$$
F=\int_0^{H}\rho g\,x\,L(x)\,dx.
$$

**Tình huống 2 (đập nước; Stewart 8.3, Ví dụ 2).** Đập hình thang cao 20 m, rộng 50 m ở đỉnh và 30 m ở đáy, mực nước thấp hơn đỉnh 4 m. Đo $x$ từ mặt nước, nước sâu $16$ m, và tam giác đồng dạng cho bề rộng $L(x)=46-x$. Do đó

$$
F=\int_0^{16}9800\,x(46-x)\,dx
\approx4.43\times10^7\text{ N},
$$

bằng trọng lượng cỡ 4500 tấn.

## Ứng dụng kinh tế và khoa học sự sống

Với lãi ghép liên tục lãi suất năm $r$, khoản gửi tăng theo hệ số $e^{rt}$ sau $t$ năm, nên $K$ đô-la nhận ở thời điểm $t$ hiện đáng $Ke^{-rt}$. Cắt nhỏ dòng thu nhập chảy với tốc độ $f(t)$: khoản gửi $f(t)\,dt$ ở thời điểm $t$ cho

$$
PV=\int_0^T f(t)e^{-rt}\,dt,
\qquad
FV=\int_0^T f(t)e^{r(T-t)}\,dt.
$$

**Tình huống 3 (định giá cỗ máy).** Một cỗ máy tạo thu nhập với tốc độ $f(t)=15-2t$ triệu đô-la mỗi năm với $0\le t\le7$, và $r=0.08$. Giá thị trường hợp lý là hiện giá của dòng tiền đó:

$$
PV=\int_0^7(15-2t)e^{-0.08t}\,dt
=300e^{-0.56}-125\approx46.36\text{ triệu đô-la}.
$$

**Tình huống 4 (thị trường lốp xe).** Giả sử bán được $q_0$ đơn vị, cùng một giá $p_0$. Người mua đơn vị thứ $q$ chịu trả tới giá cầu $D(q)$, còn người bán chấp nhận giá cung $S(q)$, nên

$$
CS=\int_0^{q_0}\big(D(q)-p_0\big)\,dq,
\qquad
PS=\int_0^{q_0}\big(p_0-S(q)\big)\,dq.
$$

Với $D(q)=90-0.1q^2$ và $S(q)=0.2q^2+q+50$ (đô-la mỗi lốp, $q$ theo nghìn lốp), điểm cân bằng là $q_0=10$, $p_0=80$, và

$$
CS=\frac{200}{3},
\qquad
PS=\frac{550}{3}
$$

theo nghìn đô-la.

**Tình huống 5 (tồn tại và bổ sung).** Nếu một nhóm bắt đầu với $P_0$ thành viên, $f(t)$ là tỉ lệ còn lại $t$ tháng sau khi vào, và thành viên mới đến với tốc độ $r(t)$, thì

$$
P(T)=P_0f(T)+\int_0^T r(t)f(T-t)\,dt.
$$

Phòng khám với $P_0=300$, $f(t)=e^{-t/20}$, và $r(t)=10$ bệnh nhân mỗi tháng có

$$
P(15)=300e^{-0.75}+200\big(1-e^{-0.75}\big)\approx247\text{ bệnh nhân},
$$

và về lâu dài tiến tới mức ổn định $10\times20=200$ (tốc độ vào nhân thời gian ở trung bình).

Trong slide, mỗi tình huống theo cùng một khuôn: nêu câu hỏi, xây dựng công thức tổng quát bằng cách cắt nhỏ, thế số liệu, và diễn giải kết quả kèm đơn vị.

## Luyện tập

1. Tìm diện tích miền kín bởi $y=(x-1)^2$ và $x^2-\frac{y^2}{2}=1$.
2. Tìm diện tích miền kín bởi $y=x-x^2$ và $y=x\sqrt{1-x}$.
3. Quay $y^2=(x-1)^3$, $1\le x\le2$, quanh trục $x$.
4. Quay miền giới hạn bởi $y=x^2$, $y=0$, và $x+y=2$ quanh trục $x$.
5. Tìm độ dài cung của $y=\frac{x^3}{12}+\frac1x$, $1\le x\le4$.
6. Tìm độ dài cung của $y=\ln(1-x^2)$, $-\frac12\le x\le\frac12$.
7. Tìm diện tích mặt tạo bởi $y=\sqrt{x^2+4}$, $0\le x\le1$, quay quanh trục $x$.
8. Khi chất điểm cách gốc tọa độ $x$ mét, một lực $x^2+2x$ newton tác dụng lên nó. Hỏi cần bao nhiêu công để di chuyển nó từ $x=1$ đến $x=3$?
9. Bạn gửi liên tục 1200 đô-la mỗi năm vào tài khoản lãi suất 6%/năm, ghép lãi liên tục. Sau 10 năm tài khoản có bao nhiêu?
10. Chi phí biên $C'(x)=0.1x^2+4x+10$ và doanh thu biên $R'(x)=70-x$ (nghìn đô-la mỗi đơn vị). Tìm $x_m$ tại đó chúng bằng nhau, và lợi nhuận ròng $\int_0^{x_m}(R'-C')\,dx$.
11. Máu ở cách trục động mạch (bán kính $R$) một khoảng $r$ chảy với tốc độ $S(r)=k(R^2-r^2)$, với $k$ là hằng số. Cắt tiết diện thành các vành mỏng diện tích $2\pi r\,dr$, tìm lưu lượng máu.

Đáp số:

1. $\displaystyle \frac{10}{3}-\frac{\sqrt2}{2}\ln(3+\sqrt8)$.
2. $\displaystyle \frac{1}{10}$.
3. $\displaystyle \frac{\pi}{4}$.
4. $\displaystyle \frac{8\pi}{15}$.
5. $\displaystyle 6$.
6. $\displaystyle 2\ln3-1$.
7. $\displaystyle \pi\sqrt2\left(\sqrt3+2\ln\frac{1+\sqrt3}{\sqrt2}\right)$.
8. $\displaystyle \frac{50}{3}\approx16.7$ J.
9. $\displaystyle 20000\big(e^{0.6}-1\big)\approx16442$ đô-la.
10. $x_m=10$; $\displaystyle \frac{950}{3}\approx316.7$ nghìn đô-la.
11. $\displaystyle \frac{\pi kR^4}{2}$.

## Nguồn đọc và luyện tập

- Boelkins, M., [*Active Calculus*](https://activecalculus.org/single/) (ấn bản thứ 2), Mục 6.1, 6.2, và [6.4 (công, lực, và áp suất)](https://activecalculus.org/single/sec-6-4-physics.html).
- Strang, G., & Herman, E. "Jed", *Calculus Volume 1*, OpenStax, Mục [6.1](https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves)-[6.5 (ứng dụng vật lý)](https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications).
- Stewart, J. (2016), *Calculus: Early Transcendentals* (ấn bản thứ 8, bản metric), Mục 6.1-6.5 và 8.1-8.4.
- Lê Xuân Đại, slide bài giảng ĐHBK TP.HCM: nguồn của năm tình huống ứng dụng.
- Ghi chú của giảng viên: ví dụ và bài tập bổ sung được điều chỉnh cho MT1003 Giải tích 1.
{% end %}
