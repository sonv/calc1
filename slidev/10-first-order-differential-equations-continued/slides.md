---
theme: default
title: "Calculus 1 - First-Order Differential Equations Continued"
info: "MT1003 Calculus 1, Lecture 10"
transition: slide-left
download: "../../pdfs/first-order-differential-equations-continued.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">First-Order Differential Equations Continued</span><span class="lang-vi">Phương trình vi phân cấp một: tiếp theo</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 10</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 10</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Read: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5; instructor notes for homogeneous and Bernoulli equations.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Đọc: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5; ghi chú giảng viên cho phương trình đẳng cấp và Bernoulli.</span>
</div>

---

# <span class="lang-en">Today's Work</span><span class="lang-vi">Nội dung hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">1</span><span><span class="lang-en"><strong>Recognize the type</strong> - separable, linear, homogeneous, Bernoulli.</span><span class="lang-vi"><strong>Nhận dạng dạng</strong> - tách biến, tuyến tính, đẳng cấp, Bernoulli.</span></span></div>
<div class="tl-row"><span class="clock">2</span><span><span class="lang-en"><strong>Linear equations</strong> - review the integrating factor and solve a new example.</span><span class="lang-vi"><strong>Phương trình tuyến tính</strong> - ôn thừa số tích phân và giải ví dụ mới.</span></span></div>
<div class="tl-row"><span class="clock">3</span><span><span class="lang-en"><strong>Homogeneous equations</strong> - use the ratio $u=y/x$.</span><span class="lang-vi"><strong>Phương trình đẳng cấp</strong> - dùng tỉ số $u=y/x$.</span></span></div>
<div class="tl-row"><span class="clock">4</span><span><span class="lang-en"><strong>Bernoulli equations</strong> - turn nonlinear into linear.</span><span class="lang-vi"><strong>Phương trình Bernoulli</strong> - biến phi tuyến thành tuyến tính.</span></span></div>
<div class="tl-row disc"><span class="clock">5</span><span><span class="lang-en"><strong>Applications</strong> - salt mixing, RL circuits, and variable-mass motion.</span><span class="lang-vi"><strong>Ứng dụng</strong> - pha trộn muối, mạch RL, và chuyển động với khối lượng biến đổi.</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5; instructor notes and local exercises.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5; ghi chú và bài tập địa phương.</span>
</div>

---
class: compact
---

# <span class="lang-en">A Method Recognition Chart</span><span class="lang-vi">Bảng nhận dạng phương pháp</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Separable</span><span class="lang-vi">Tách biến</span></div>
<span class="lang-en">Can be rearranged so each variable has its own side.</span>
<span class="lang-vi">Có thể biến đổi để mỗi biến nằm ở một vế riêng.</span>

$$
g(y)\,dy=f(x)\,dx
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Linear</span><span class="lang-vi">Tuyến tính</span></div>
<span class="lang-en">$y$ and $y'$ appear to the first power; coefficients depend only on $x$.</span>
<span class="lang-vi">$y$ và $y'$ xuất hiện bậc nhất; hệ số chỉ phụ thuộc vào $x$.</span>

$$
y'+P(x)y=Q(x)
$$
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Homogeneous type</span><span class="lang-vi">Dạng đẳng cấp</span></div>
<span class="lang-en">The right side depends only on the ratio $y/x$.</span>
<span class="lang-vi">Vế phải chỉ phụ thuộc vào tỉ số $y/x$.</span>

$$
y'=f\left(\frac{y}{x}\right)
$$
</div>
<div class="caution">
<div class="label"><span class="lang-en">Bernoulli</span><span class="lang-vi">Bernoulli</span></div>
<span class="lang-en">Almost linear, except the right side contains a power of $y$.</span>
<span class="lang-vi">Gần tuyến tính, trừ việc vế phải chứa một lũy thừa của $y$.</span>

$$
y'+P(x)y=Q(x)y^\alpha
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Active Calculus 7.2 for qualitative context; OpenStax Vol 2, 4.5; Stewart 9.5; instructor notes for homogeneous and Bernoulli equations.</span>
<span class="lang-vi">Đọc: Active Calculus 7.2 cho bối cảnh định tính; OpenStax Tập 2, 4.5; Stewart 9.5; ghi chú giảng viên cho phương trình đẳng cấp và Bernoulli.</span>
</div>

---
class: compact
---

# <span class="lang-en">Linear Equations: Why The Factor Works</span><span class="lang-vi">Tuyến tính: vì sao thừa số tích phân hiệu quả?</span>

<div class="defn">
<div class="tag"><span class="lang-en">First-order linear equation</span><span class="lang-vi">Phương trình tuyến tính cấp một</span></div>
<span class="lang-en">A first-order linear equation has the form</span>
<span class="lang-vi">Phương trình tuyến tính cấp một có dạng</span>

$$
y'+P(x)y=Q(x).
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">The hidden product rule</span><span class="lang-vi">Quy tắc tích ẩn bên trong</span></div>
<span class="lang-en">Choose $\mu(x)=e^{\int P(x)\,dx}$. Then $\mu'=P\mu$, so</span>
<span class="lang-vi">Chọn $\mu(x)=e^{\int P(x)\,dx}$. Khi đó $\mu'=P\mu$, nên</span>

$$
\mu y'+\mu P y=\mu y'+\mu' y=(\mu y)'.
$$

<span class="lang-en">After multiplying by $\mu$, the equation becomes one integration:</span>
<span class="lang-vi">Sau khi nhân với $\mu$, phương trình trở thành một phép lấy tích phân:</span>

$$
(\mu y)'=\mu Q.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5; instructor notes.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5; ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Linear Example: Try The Setup</span><span class="lang-vi">Ví dụ tuyến tính: thử thiết lập</span>

<div class="your-turn">
<span class="timechip">3 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Solve the equation from the local exercise sheet:</span>
<span class="lang-vi">Giải phương trình từ bộ bài tập địa phương:</span>

$$
y'=y\cot x+\sin x.
$$

<span class="lang-en">Put it into linear standard form, then find $\mu(x)$.</span>
<span class="lang-vi">Đưa về dạng tuyến tính chuẩn, rồi tìm $\mu(x)$.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Standard form</span><span class="lang-vi">Dạng chuẩn</span></div>
<span class="blur-step" v-click>
$$
y'-y\cot x=\sin x,\qquad P(x)=-\cot x.
$$
</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Integrating factor</span><span class="lang-vi">Thừa số tích phân</span></div>
<span class="blur-step" v-click>
$$
\mu=e^{\int-\cot x\,dx}=e^{-\ln|\sin x|}=\csc x.
$$
</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 2, 4.5; Stewart 9.5. Example adapted from instructor notes and local exercises.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 2, 4.5; Stewart 9.5. Ví dụ phỏng theo ghi chú giảng viên và bài tập địa phương.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Linear Example: Solve</span><span class="lang-vi">Ví dụ tuyến tính: giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Multiply by $\csc x$</span><span class="lang-vi">Nhân với $\csc x$</span></div>
<span class="lang-en">On any interval where $\sin x\ne 0$, multiply the equation by $\mu=\csc x$:</span>
<span class="lang-vi">Trên khoảng mà $\sin x\ne 0$, nhân phương trình với $\mu=\csc x$:</span>

$$
\csc x\,y'-y\csc x\cot x=1.
$$

<span class="lang-en">The left side is exactly $\left(y\csc x\right)'$.</span>
<span class="lang-vi">Vế trái chính là $\left(y\csc x\right)'$.</span>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Integrate</span><span class="lang-vi">Lấy tích phân</span></div>

$$
\left(y\csc x\right)'=1
\quad\Rightarrow\quad
y\csc x=x+C
\quad\Rightarrow\quad
y=\sin x\,(x+C).
$$

<span class="lang-en">A quick substitution check catches sign mistakes in $\mu$.</span>
<span class="lang-vi">Thế lại kiểm tra nhanh giúp phát hiện lỗi dấu trong $\mu$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 2, 4.5; Stewart 9.5. Example adapted from instructor notes and local exercises.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 2, 4.5; Stewart 9.5. Ví dụ phỏng theo ghi chú giảng viên và bài tập địa phương.</span>
</div>

---
class: compact
---

# <span class="lang-en">Linear IVP: Student Try</span><span class="lang-vi">BTGTBĐ tuyến tính: sinh viên thử</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">L1</div>
<span class="lang-en">Solve the initial-value problem.</span>
<span class="lang-vi">Giải bài toán giá trị ban đầu.</span>

$$
y'+\frac{3}{x}y=\frac{2}{x^3},\qquad y(1)=0.
$$
</div>
<div class="exercise-card">
<div class="num">L2</div>
<span class="lang-en">Find the general solution.</span>
<span class="lang-vi">Tìm nghiệm tổng quát.</span>

$$
y'-3y=4e^{3x}\cos 5x.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">L1: $\mu=x^3$. L2: $\mu=e^{-3x}$, so the trigonometric integral is left behind.</span>
<span class="lang-vi">L1: $\mu=x^3$. L2: $\mu=e^{-3x}$, nên phần tích phân lượng giác còn lại.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>L1: $y=\dfrac{2x-2}{x^3}$.</span><br>
<span class="blur-step" v-click>L2: $y=e^{3x}\left(\dfrac45\sin 5x+C\right)$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 2, 4.5; Stewart 9.5; local exercise set.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 2, 4.5; Stewart 9.5; bộ bài tập địa phương.</span>
</div>

---
class: compact
---

# <span class="lang-en">Homogeneous Equations: The Ratio Matters</span><span class="lang-vi">Phương trình đẳng cấp: tỉ số mới quan trọng</span>

<div class="defn">
<div class="tag"><span class="lang-en">Homogeneous type</span><span class="lang-vi">Dạng đẳng cấp</span></div>
<span class="lang-en">A first-order equation is of homogeneous type if it can be written</span>
<span class="lang-vi">Phương trình vi phân cấp một có dạng đẳng cấp nếu có thể viết</span>

$$
\frac{dy}{dx}=f\left(\frac{y}{x}\right).
$$
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Geometric idea</span><span class="lang-vi">Ý tưởng hình học</span></div>
<span class="lang-en">The slope at $(x,y)$ depends on the direction from the origin, not on the distance from the origin. Points on the same ray $y/x=\text{constant}$ have the same slope rule. That is why the ratio $y/x$ is the natural variable.</span>
<span class="lang-vi">Hệ số góc tại $(x,y)$ phụ thuộc vào hướng nhìn từ gốc tọa độ, không phụ thuộc vào khoảng cách đến gốc. Các điểm trên cùng một tia $y/x=\text{hằng số}$ có cùng quy luật hệ số góc. Vì vậy tỉ số $y/x$ là biến tự nhiên.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Active Calculus 7.2 for solution behavior; Stewart 9.5 and instructor notes for substitution methods.</span>
<span class="lang-vi">Đọc: Active Calculus 7.2 cho dáng điệu nghiệm; Stewart 9.5 và ghi chú giảng viên cho phương pháp đổi biến.</span>
</div>

---
class: compact
---

# <span class="lang-en">Homogeneous Method: Substitute $u=y/x$</span><span class="lang-vi">Phương pháp đẳng cấp: đặt $u=y/x$</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">The substitution</span><span class="lang-vi">Phép đổi biến</span></div>
<span class="lang-en">Let $u=\dfrac{y}{x}$, so $y=ux$. Differentiate with respect to $x$:</span>
<span class="lang-vi">Đặt $u=\dfrac{y}{x}$, nên $y=ux$. Lấy đạo hàm theo $x$:</span>

$$
y'=u+xu'.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">The equation becomes separable</span><span class="lang-vi">Phương trình trở thành tách biến</span></div>

$$
u+x\frac{du}{dx}=f(u)
\quad\Rightarrow\quad
\frac{du}{f(u)-u}=\frac{dx}{x}.
$$

<span class="lang-en">So homogeneous equations are another door back to separable equations.</span>
<span class="lang-vi">Vì vậy phương trình đẳng cấp là một cánh cửa khác quay về phương trình tách biến.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 9.5; instructor notes for homogeneous first-order equations.</span>
<span class="lang-vi">Đọc: Stewart 9.5; ghi chú giảng viên cho phương trình vi phân đẳng cấp cấp một.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Homogeneous Example: Try The Substitution</span><span class="lang-vi">Ví dụ đẳng cấp: thử đổi biến</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Solve the initial-value problem</span>
<span class="lang-vi">Giải bài toán giá trị ban đầu</span>

$$
y'=\frac{y}{x}+\sin\frac{y}{x},\qquad y(1)=\frac{\pi}{2}.
$$

<span class="lang-en">Let $u=y/x$ and rewrite the differential equation in $u$.</span>
<span class="lang-vi">Đặt $u=y/x$ và viết lại phương trình theo $u$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">After substitution</span><span class="lang-vi">Sau đổi biến</span></div>
<span class="blur-step" v-click>
$$
u+xu'=u+\sin u
\quad\Rightarrow\quad
x\frac{du}{dx}=\sin u
\quad\Rightarrow\quad
\frac{du}{\sin u}=\frac{dx}{x}.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; example adapted from instructor notes and local exercises.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; ví dụ phỏng theo ghi chú giảng viên và bài tập địa phương.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Homogeneous Example: Solve</span><span class="lang-vi">Ví dụ đẳng cấp: giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Integrate</span><span class="lang-vi">Lấy tích phân</span></div>

$$
\int \csc u\,du=\int \frac{dx}{x}
\quad\Rightarrow\quad
\ln\left|\tan\frac{u}{2}\right|=\ln|x|+\ln C.
$$

<span class="lang-en">Exponentiate and return to $u=y/x$:</span>
<span class="lang-vi">Mũ hóa và thay lại $u=y/x$:</span>

$$
\tan\frac{u}{2}=Cx
\quad\Rightarrow\quad
\tan\frac{y}{2x}=Cx.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Apply $y(1)=\pi/2$</span><span class="lang-vi">Áp điều kiện $y(1)=\pi/2$</span></div>

$$
\tan\frac{\pi}{4}=C\quad\Rightarrow\quad C=1.
$$

<span class="lang-en">The solution is $\tan\dfrac{y}{2x}=x$.</span>
<span class="lang-vi">Nghiệm là $\tan\dfrac{y}{2x}=x$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; example adapted from instructor notes and local exercises.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; ví dụ phỏng theo ghi chú giảng viên và bài tập địa phương.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Homogeneous In Differential Form</span><span class="lang-vi">Đẳng cấp ở dạng vi phân</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Try recognizing the type</span><span class="lang-vi">Thử nhận dạng</span></div>
<span class="lang-en">Solve</span><span class="lang-vi">Giải</span>

$$
(x^2+2xy)\,dx+xy\,dy=0.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Convert to $y'=f(x,y)$</span><span class="lang-vi">Đưa về $y'=f(x,y)$</span></div>
<span class="blur-step" v-click>
$$
xy\,y'=-(x^2+2xy)
\quad\Rightarrow\quad
y'=-\frac{x}{y}-2.
$$
</span>

<span class="blur-step" v-click>
Since $-\dfrac{x}{y}-2=-\dfrac{1}{y/x}-2$, this depends only on $u=y/x$.
</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; local exercise set. Homogeneous form from instructor notes.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; bộ bài tập địa phương. Dạng đẳng cấp từ ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Homogeneous Differential Form: Solve</span><span class="lang-vi">Dạng vi phân đẳng cấp: giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Use $u=y/x$</span><span class="lang-vi">Dùng $u=y/x$</span></div>

$$
u+xu'=-\frac{1}{u}-2
\quad\Rightarrow\quad
x\frac{du}{dx}=-\frac{(u+1)^2}{u}.
$$

<span class="lang-en">Separate the variables:</span>
<span class="lang-vi">Tách biến:</span>

$$
\frac{u\,du}{(u+1)^2}=-\frac{dx}{x}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Integrate and return to $x,y$</span><span class="lang-vi">Lấy tích phân và thay lại $x,y$</span></div>

$$
\ln|u+1|+\frac{1}{u+1}=-\ln|x|+C.
$$

$$
\ln|x+y|+\frac{x}{x+y}=C.
$$
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; local exercise set. Example adapted from instructor notes.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; bộ bài tập địa phương. Ví dụ phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Bernoulli Equations</span><span class="lang-vi">Phương trình Bernoulli</span>

<div class="defn">
<div class="tag"><span class="lang-en">Bernoulli form</span><span class="lang-vi">Dạng Bernoulli</span></div>
<span class="lang-en">A Bernoulli equation has the form</span>
<span class="lang-vi">Phương trình Bernoulli có dạng</span>

$$
y'+P(x)y=Q(x)y^\alpha,\qquad \alpha\ne 0,\quad \alpha\ne 1.
$$
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">The idea</span><span class="lang-vi">Ý tưởng</span></div>
<span class="lang-en">It looks nonlinear because of $y^\alpha$, but one power substitution changes it into a linear equation. This is the same philosophy as before: recognize the structure, then use the substitution that exposes a familiar type.</span>
<span class="lang-vi">Nó có vẻ phi tuyến vì có $y^\alpha$, nhưng một phép đổi biến theo lũy thừa sẽ biến nó thành phương trình tuyến tính. Vẫn là triết lý cũ: nhận ra cấu trúc, rồi dùng đổi biến để lộ ra dạng quen thuộc.</span>
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5 for linear equations; Stewart 9.5 and instructor notes for Bernoulli equations.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5 cho phương trình tuyến tính; Stewart 9.5 và ghi chú giảng viên cho Bernoulli.</span>
</div>

---
class: compact
---

# <span class="lang-en">Bernoulli Method: Turn It Linear</span><span class="lang-vi">Phương pháp Bernoulli: biến thành tuyến tính</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Divide by $y^\alpha$</span><span class="lang-vi">Chia cho $y^\alpha$</span></div>

$$
y^{-\alpha}y'+P(x)y^{1-\alpha}=Q(x).
$$

<span class="lang-en">Now set</span><span class="lang-vi">Đặt</span>

$$
z=y^{1-\alpha}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Derivative of the new variable</span><span class="lang-vi">Đạo hàm của biến mới</span></div>

$$
z'=(1-\alpha)y^{-\alpha}y'.
$$

<span class="lang-en">Multiply the divided equation by $1-\alpha$:</span>
<span class="lang-vi">Nhân phương trình đã chia với $1-\alpha$:</span>

$$
z'+(1-\alpha)P(x)z=(1-\alpha)Q(x).
$$
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Bernoulli Example: Set Up</span><span class="lang-vi">Ví dụ Bernoulli: thiết lập</span>

<div class="your-turn">
<span class="timechip">3 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Solve</span><span class="lang-vi">Giải</span>

$$
y'+\frac{y}{x}=x^2y^4.
$$

<span class="lang-en">Identify $\alpha$ and choose $z=y^{1-\alpha}$.</span>
<span class="lang-vi">Xác định $\alpha$ và chọn $z=y^{1-\alpha}$.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Type</span><span class="lang-vi">Dạng</span></div>
<span class="blur-step" v-click>$P(x)=\dfrac1x,\quad Q(x)=x^2,\quad \alpha=4.$</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Substitution</span><span class="lang-vi">Đổi biến</span></div>
<span class="blur-step" v-click>$z=y^{1-4}=y^{-3}$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; example adapted from instructor notes and local exercises.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; ví dụ phỏng theo ghi chú giảng viên và bài tập địa phương.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Bernoulli Example: Solve</span><span class="lang-vi">Ví dụ Bernoulli: giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Linear equation in $z$</span><span class="lang-vi">Phương trình tuyến tính theo $z$</span></div>
<span class="lang-en">Using $z=y^{-3}$ gives</span>
<span class="lang-vi">Dùng $z=y^{-3}$ ta được</span>

$$
z'-\frac{3}{x}z=-3x^2.
$$

<span class="lang-en">The integrating factor is $\mu=e^{\int -3/x\,dx}=x^{-3}$.</span>
<span class="lang-vi">Thừa số tích phân là $\mu=e^{\int -3/x\,dx}=x^{-3}$.</span>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Back substitute</span><span class="lang-vi">Thay ngược lại</span></div>

$$
(x^{-3}z)'=-\frac{3}{x}
\quad\Rightarrow\quad
x^{-3}z=-3\ln|x|+C.
$$

$$
y^{-3}=x^3\left(-3\ln|x|+C\right)
\quad\Rightarrow\quad
y=\frac{1}{x\sqrt[3]{-3\ln|x|+C}}.
$$
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; example adapted from instructor notes and local exercises.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; ví dụ phỏng theo ghi chú giảng viên và bài tập địa phương.</span>
</div>

---
class: compact
---

# <span class="lang-en">Bernoulli: Student Try</span><span class="lang-vi">Bernoulli: sinh viên thử</span>

<div class="exercise-card">
<div class="num">B1</div>
<span class="lang-en">Solve the Bernoulli equation.</span>
<span class="lang-vi">Giải phương trình Bernoulli.</span>

$$
y'-\frac{2xy}{1+x^2}
=4\frac{\sqrt{y}}{\sqrt{1+x^2}}\arctan x.
$$
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">Here $\alpha=\frac12$, so set $z=\sqrt{y}$. Then solve a linear equation in $z$.</span>
<span class="lang-vi">Ở đây $\alpha=\frac12$, nên đặt $z=\sqrt{y}$. Sau đó giải phương trình tuyến tính theo $z$.</span>
</div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Answer</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>
$$
\sqrt{y}=\sqrt{1+x^2}\left((\arctan x)^2+C\right).
$$
</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 9.5; local exercise set.</span>
<span class="lang-vi">Luyện tập: Stewart 9.5; bộ bài tập địa phương.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Quick Lab: Name The Method</span><span class="lang-vi">Luyện nhanh: gọi tên phương pháp</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">Q1</div>
$$
(x^2+1)y'+4xy=3
$$
<span class="blur-step" v-click><span class="lang-en">Linear</span><span class="lang-vi">Tuyến tính</span>; $P=\dfrac{4x}{x^2+1}$.</span>
</div>
<div class="exercise-card">
<div class="num">Q2</div>
$$
y'=\frac{y}{x}+\sin\frac{y}{x}
$$
<span class="blur-step" v-click><span class="lang-en">Homogeneous type</span><span class="lang-vi">Dạng đẳng cấp</span>; use $u=y/x$.</span>
</div>
<div class="exercise-card">
<div class="num">Q3</div>
$$
y'+\frac{y}{x}=x^2y^4
$$
<span class="blur-step" v-click>Bernoulli; $\alpha=4$, use $z=y^{-3}$.</span>
</div>
<div class="exercise-card">
<div class="num">Q4</div>
$$
y'=\frac{x}{y}
$$
<span class="blur-step" v-click><span class="lang-en">Separable</span><span class="lang-vi">Tách biến</span>; $y\,dy=x\,dx$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: Active Calculus 7.4; OpenStax Vol 2, 4.3 and 4.5; Stewart 9.3, 9.5; local exercises.</span>
<span class="lang-vi">Luyện tập: Active Calculus 7.4; OpenStax Tập 2, 4.3 và 4.5; Stewart 9.3, 9.5; bài tập địa phương.</span>
</div>

---

# <span class="lang-en">Applications: Model First, Then Solve</span><span class="lang-vi">Ứng dụng: lập mô hình trước, rồi giải</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">The habit</span><span class="lang-vi">Thói quen</span></div>
<span class="lang-en">For applications, the hardest step is often not the integral or algebra. It is deciding what quantity changes, what physical law controls the change, and why the units on each term match.</span>
<span class="lang-vi">Với bài toán ứng dụng, bước khó nhất thường không phải là tích phân hay đại số. Đó là quyết định đại lượng nào thay đổi, định luật vật lý nào điều khiển sự thay đổi, và vì sao đơn vị của các hạng tử khớp nhau.</span>
</div>

<div class="grid-3 mt-4">
<div class="kpi"><strong><span class="lang-en">Quantity</span><span class="lang-vi">Đại lượng</span></strong><span class="lang-en">Name the unknown function and its units.</span><span class="lang-vi">Đặt tên hàm chưa biết và đơn vị của nó.</span></div>
<div class="kpi"><strong><span class="lang-en">Law</span><span class="lang-vi">Định luật</span></strong><span class="lang-en">Translate the physical principle into a rate equation.</span><span class="lang-vi">Dịch nguyên lý vật lý thành phương trình tốc độ.</span></div>
<div class="kpi"><strong><span class="lang-en">Solve</span><span class="lang-vi">Giải</span></strong><span class="lang-en">Use the ODE method, then interpret the constant and the limiting behavior.</span><span class="lang-vi">Dùng phương pháp ODE, rồi diễn giải hằng số và dáng điệu giới hạn.</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: Active Calculus 7.2, 7.4; OpenStax Vol 2, 4.5; Stewart 9.5; application examples from instructor notes.</span>
<span class="lang-vi">Đọc: Active Calculus 7.2, 7.4; OpenStax Tập 2, 4.5; Stewart 9.5; ví dụ ứng dụng từ ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Mixing Tank: The Physical Picture</span><span class="lang-vi">Bồn pha trộn: bức tranh vật lý</span>

<div class="grid-2 align-center">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Bài toán</span></div>
<span class="lang-en">A tank contains $1000$ gal of water with $100$ lb of salt. Brine enters at $10$ gal/min, with $5$ lb of salt per gallon. The well-stirred mixture leaves at $10$ gal/min. Find the salt amount $y(t)$.</span>
<span class="lang-vi">Một bồn chứa $1000$ gal nước với $100$ lb muối. Nước muối chảy vào với tốc độ $10$ gal/phút, mỗi gal chứa $5$ lb muối. Hỗn hợp được khuấy đều và chảy ra với tốc độ $10$ gal/phút. Tìm lượng muối $y(t)$.</span>
</div>
<img src="./images/tank.jpg" class="graph-img small" alt="Mixing tank diagram">
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Balance law</span><span class="lang-vi">Định luật cân bằng</span></div>
<span class="lang-en">Amount changes by what comes in minus what leaves:</span>
<span class="lang-vi">Lượng muối thay đổi bằng phần đi vào trừ phần đi ra:</span>

$$
y'(t)=\text{salt inflow rate}-\text{salt outflow rate}.
$$
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; application adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ứng dụng phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Mixing Tank: Build The ODE</span><span class="lang-vi">Bồn pha trộn: lập phương trình</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Inflow</span><span class="lang-vi">Dòng vào</span></div>
<span class="lang-en">Each minute, $10$ gal enters. Each gallon brings $5$ lb of salt.</span>
<span class="lang-vi">Mỗi phút có $10$ gal đi vào. Mỗi gal mang $5$ lb muối.</span>

$$
\text{in}=10\cdot 5=50\ \text{lb/min}.
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Outflow</span><span class="lang-vi">Dòng ra</span></div>
<span class="lang-en">The tank volume stays $1000$ gal. The salt concentration is $y(t)/1000$ lb/gal.</span>
<span class="lang-vi">Thể tích bồn giữ ở $1000$ gal. Nồng độ muối là $y(t)/1000$ lb/gal.</span>

$$
\text{out}=10\cdot \frac{y}{1000}=0.01y\ \text{lb/min}.
$$
</div>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Model</span><span class="lang-vi">Mô hình</span></div>

$$
y'=50-0.01y,\qquad y(0)=100.
$$

<span class="lang-en">This is first-order linear, and also separable.</span>
<span class="lang-vi">Đây là phương trình tuyến tính cấp một, đồng thời cũng tách biến được.</span>
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; application adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ứng dụng phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Mixing Tank: Solve And Interpret</span><span class="lang-vi">Bồn pha trộn: giải và diễn giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Solve by separation</span><span class="lang-vi">Giải bằng tách biến</span></div>

$$
\frac{dy}{50-0.01y}=dt
\quad\Rightarrow\quad
\ln|y-5000|=-0.01t+\ln C.
$$

$$
y-5000=Ce^{-0.01t}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Initial condition and meaning</span><span class="lang-vi">Điều kiện ban đầu và ý nghĩa</span></div>

$$
100-5000=C\quad\Rightarrow\quad C=-4900.
$$

$$
y(t)=5000-4900e^{-0.01t}.
$$

<span class="lang-en">As $t\to\infty$, $y(t)\to 5000$ lb, the amount matching concentration $5$ lb/gal in a $1000$ gal tank.</span>
<span class="lang-vi">Khi $t\to\infty$, $y(t)\to 5000$ lb, đúng lượng muối ứng với nồng độ $5$ lb/gal trong bồn $1000$ gal.</span>
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; application adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ứng dụng phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">RL Circuit: The Physical Picture</span><span class="lang-vi">Mạch RL: bức tranh vật lý</span>

<div class="grid-2 align-center">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Physics</span><span class="lang-vi">Vật lý</span></div>
<span class="lang-en">A current $I(t)$ causes a voltage drop $RI$ across the resistor and a voltage drop $L\dfrac{dI}{dt}$ across the inductor. Kirchhoff's voltage law says the sum equals the supplied voltage $E(t)$.</span>
<span class="lang-vi">Dòng điện $I(t)$ gây sụt áp $RI$ qua điện trở và sụt áp $L\dfrac{dI}{dt}$ qua cuộn cảm. Định luật điện áp Kirchhoff nói tổng hai sụt áp bằng suất điện động $E(t)$.</span>
</div>
<img src="./images/circuit.jpg" class="graph-img small" alt="RL circuit diagram">
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Model</span><span class="lang-vi">Mô hình</span></div>

$$
L I'(t)+RI(t)=E(t).
$$

<span class="lang-en">This is linear in the unknown current $I(t)$.</span>
<span class="lang-vi">Đây là phương trình tuyến tính theo dòng điện chưa biết $I(t)$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; application adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ứng dụng phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">RL Circuit: Solve</span><span class="lang-vi">Mạch RL: giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Data and standard form</span><span class="lang-vi">Dữ kiện và dạng chuẩn</span></div>
<span class="lang-en">Let $E=48$ V, $R=11\,\Omega$, $L=0.1$ H, and $I(0)=0$.</span>
<span class="lang-vi">Cho $E=48$ V, $R=11\,\Omega$, $L=0.1$ H, và $I(0)=0$.</span>

$$
I'+\frac{R}{L}I=\frac{E}{L}
\quad\Rightarrow\quad
I'+110I=480.
$$

<span class="lang-en">A constant particular solution is $I_\infty=\dfrac{480}{110}=\dfrac{48}{11}$.</span>
<span class="lang-vi">Một nghiệm riêng hằng là $I_\infty=\dfrac{480}{110}=\dfrac{48}{11}$.</span>
</div>

<div class="thm mt-2 formula-stack">
<div class="tag"><span class="lang-en">Initial current</span><span class="lang-vi">Dòng điện ban đầu</span></div>

$$
I(t)=\frac{48}{11}+Ce^{-110t},\qquad I(0)=0
\quad\Rightarrow\quad
C=-\frac{48}{11}.
$$

$$
I(t)=\frac{48}{11}\left(1-e^{-110t}\right).
$$
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; application adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ứng dụng phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Variable-Mass Motion: The Physical Picture</span><span class="lang-vi">Chuyển động khối lượng biến đổi: bức tranh vật lý</span>

<div class="box gold formula-stack">
<div class="label"><span class="lang-en">A falling hailstone</span><span class="lang-vi">Hạt mưa đá đang rơi</span></div>
<span class="lang-en">A hailstone has initial mass $M$ and evaporates steadily, losing $m$ units of mass per second. Air resistance is proportional to velocity. Take downward direction as positive and let $v(t)$ be the velocity.</span>
<span class="lang-vi">Một hạt mưa đá có khối lượng ban đầu $M$ và bốc hơi đều, mỗi giây mất $m$ đơn vị khối lượng. Lực cản không khí tỉ lệ với vận tốc. Chọn chiều xuống là chiều dương và gọi $v(t)$ là vận tốc.</span>
</div>

<div class="grid-3 mt-3">
<div class="kpi"><strong><span class="lang-en">Mass</span><span class="lang-vi">Khối lượng</span></strong>$M-mt$</div>
<div class="kpi"><strong><span class="lang-en">Weight</span><span class="lang-vi">Trọng lực</span></strong>$(M-mt)g$</div>
<div class="kpi"><strong><span class="lang-en">Drag</span><span class="lang-vi">Lực cản</span></strong>$-kv$</div>
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; variable-mass example adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ví dụ khối lượng biến đổi phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Variable-Mass Motion: Build The ODE</span><span class="lang-vi">Khối lượng biến đổi: lập phương trình</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Newton's second law</span><span class="lang-vi">Định luật II Newton</span></div>
<span class="lang-en">The total force is weight plus drag:</span>
<span class="lang-vi">Tổng lực là trọng lực cộng lực cản:</span>

$$
F=(M-mt)g-kv.
$$

<span class="lang-en">Also $F=(M-mt)\dfrac{dv}{dt}$, so</span>
<span class="lang-vi">Mặt khác $F=(M-mt)\dfrac{dv}{dt}$, nên</span>

$$
(M-mt)\frac{dv}{dt}=(M-mt)g-kv.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Linear model</span><span class="lang-vi">Mô hình tuyến tính</span></div>

$$
\frac{dv}{dt}+\frac{k}{M-mt}v=g,\qquad v(0)=0.
$$

<span class="lang-en">We solve only while $M-mt>0$.</span>
<span class="lang-vi">Ta chỉ giải trong khoảng $M-mt>0$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; variable-mass example adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ví dụ khối lượng biến đổi phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Variable-Mass Motion: Solve</span><span class="lang-vi">Khối lượng biến đổi: giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Integrating factor</span><span class="lang-vi">Thừa số tích phân</span></div>

$$
P(t)=\frac{k}{M-mt},\qquad
\mu(t)=e^{\int P(t)\,dt}=(M-mt)^{-k/m}.
$$

<span class="lang-en">Then $(\mu v)'=g\mu$.</span>
<span class="lang-vi">Khi đó $(\mu v)'=g\mu$.</span>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">General and particular solution</span><span class="lang-vi">Nghiệm tổng quát và nghiệm riêng</span></div>

$$
v(t)=\frac{g(M-mt)}{k-m}+C(M-mt)^{k/m}.
$$

<span class="lang-en">Using $v(0)=0$ gives $C=\dfrac{gM^{1-k/m}}{m-k}$, hence</span>
<span class="lang-vi">Dùng $v(0)=0$ ta được $C=\dfrac{gM^{1-k/m}}{m-k}$, do đó</span>

$$
v(t)=\frac{g}{m-k}\left[-M+mt+M\left(1-\frac{m}{M}t\right)^{k/m}\right].
$$
</div>

<div class="refs">
<span class="lang-en">Read: OpenStax Vol 2, 4.5; Stewart 9.5; variable-mass example adapted from instructor notes.</span>
<span class="lang-vi">Đọc: OpenStax Tập 2, 4.5; Stewart 9.5; ví dụ khối lượng biến đổi phỏng theo ghi chú giảng viên.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Application Lab: Build The Model</span><span class="lang-vi">Luyện ứng dụng: lập mô hình</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">A1</div>
<span class="lang-en">A tank holds $100$ L with $10$ kg of salt. Brine with $0.5$ kg/L enters at $5$ L/min and leaves at $5$ L/min. Let $S(t)$ be kg of salt. Write the ODE.</span>
<span class="lang-vi">Bồn chứa $100$ L với $10$ kg muối. Nước muối $0.5$ kg/L vào $5$ L/phút và ra $5$ L/phút. Gọi $S(t)$ là kg muối. Lập ODE.</span>
</div>
<div class="exercise-card">
<div class="num">A2</div>
<span class="lang-en">For an RL circuit, identify the ODE when $R=6\,\Omega$, $L=2$ H, and $E(t)=12$ V.</span>
<span class="lang-vi">Với mạch RL, xác định ODE khi $R=6\,\Omega$, $L=2$ H, và $E(t)=12$ V.</span>
</div>
</div>

<div class="grid-2 mt-3">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Model answers</span><span class="lang-vi">Đáp án mô hình</span></div>
<span class="blur-step" v-click>A1: $S'=2.5-\dfrac{S}{20}$, $S(0)=10$.</span><br>
<span class="blur-step" v-click>A2: $2I'+6I=12$, or $I'+3I=6$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Question to ask every time</span><span class="lang-vi">Câu hỏi cần hỏi mỗi lần</span></div>
<span class="lang-en">Do the units of each term match the units of the derivative?</span>
<span class="lang-vi">Đơn vị của từng hạng tử có khớp với đơn vị của đạo hàm không?</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: Active Calculus 7.4; OpenStax Vol 2, 4.5; Stewart 9.5; local exercises.</span>
<span class="lang-vi">Luyện tập: Active Calculus 7.4; OpenStax Tập 2, 4.5; Stewart 9.5; bài tập địa phương.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Mixed Exercise Lab</span><span class="lang-vi">Luyện tập tổng hợp</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">E1</div>
$$
(1-x)(y'+y)=e^{-x},\qquad y(2)=1.
$$
<span class="blur-step" v-click>$y=e^{-x}\left[-\ln|1-x|+e^2\right]$.</span>
</div>
<div class="exercise-card">
<div class="num">E2</div>
$$
y'=\frac{3y}{x}+2e^{2x}x^3.
$$
<span class="blur-step" v-click>$y=x^3(e^{2x}+C)$.</span>
</div>
<div class="exercise-card">
<div class="num">E3</div>
$$
2(x+y)\,dy+(3x+3y-1)\,dx=0,\qquad y(0)=2.
$$
<span class="blur-step" v-click>$3x+2y+2\ln|1-x-y|=4$.</span>
</div>
<div class="exercise-card">
<div class="num">E4</div>
$$
2y'-\frac{y}{x}=\frac{4x^2}{y}.
$$
<span class="blur-step" v-click>Bernoulli in $y$ or linear in $y^2$: $y^2=x(2x^2+C)$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 2, 4.5; Stewart 9.5; local exercise set. Solve after naming the method.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 2, 4.5; Stewart 9.5; bộ bài tập địa phương. Giải sau khi gọi tên phương pháp.</span>
</div>

---
class: compact
---

# <span class="lang-en">Closing Decision Chart</span><span class="lang-vi">Bảng quyết định cuối bài</span>

<div class="timeline">
<div class="tl-row"><span class="clock"><span class="lang-en">1. Split?</span><span class="lang-vi">1. Tách?</span></span><span><span class="lang-en">If variables separate, integrate both sides and check constant solutions.</span><span class="lang-vi">Nếu tách biến được, lấy tích phân hai vế và kiểm tra nghiệm hằng.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">2. Linear?</span><span class="lang-vi">2. Tuyến tính?</span></span><span><span class="lang-en">If $y'+P(x)y=Q(x)$, use $\mu=e^{\int P\,dx}$.</span><span class="lang-vi">Nếu $y'+P(x)y=Q(x)$, dùng $\mu=e^{\int P\,dx}$.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">3. Ratio?</span><span class="lang-vi">3. Tỉ số?</span></span><span><span class="lang-en">If the equation depends on $y/x$, set $u=y/x$.</span><span class="lang-vi">Nếu phương trình phụ thuộc vào $y/x$, đặt $u=y/x$.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">4. Power?</span><span class="lang-vi">4. Lũy thừa?</span></span><span><span class="lang-en">If $y'+Py=Qy^\alpha$, set $z=y^{1-\alpha}$ and solve a linear equation.</span><span class="lang-vi">Nếu $y'+Py=Qy^\alpha$, đặt $z=y^{1-\alpha}$ rồi giải phương trình tuyến tính.</span></span></div>
<div class="tl-row disc"><span class="clock"><span class="lang-en">5. Model?</span><span class="lang-vi">5. Mô hình?</span></span><span><span class="lang-en">For applications, write the physical law before solving the ODE.</span><span class="lang-vi">Với ứng dụng, viết định luật vật lý trước khi giải ODE.</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Read: Active Calculus 7.2, 7.4; OpenStax Vol 2, 4.3 and 4.5; Stewart 9.3, 9.5; instructor notes.</span>
<span class="lang-vi">Đọc: Active Calculus 7.2, 7.4; OpenStax Tập 2, 4.3 và 4.5; Stewart 9.3, 9.5; ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Reading And Practice Sources</span><span class="lang-vi">Nguồn đọc và luyện tập</span>

<div class="source-list compact-sources">
<div class="source-item">
<strong>Boelkins, M.</strong>&nbsp;
<span class="lang-en"><em>Active Calculus</em> (2nd ed.), Sections 7.2 (Qualitative behavior) and 7.4 (Separable equations).</span>
<span class="lang-vi"><em>Active Calculus</em> (ấn bản thứ 2), Mục 7.2 (Dáng điệu định tính) và 7.4 (Phương trình tách biến).</span>
</div>
<div class="source-item">
<strong>Strang, G., & Herman, E. "Jed".</strong>&nbsp;
<span class="lang-en"><em>Calculus Volume 2</em>, OpenStax, Sections 4.3 and 4.5.</span>
<span class="lang-vi"><em>Calculus Volume 2</em>, OpenStax, Mục 4.3 và 4.5.</span>
</div>
<div class="source-item">
<strong>Stewart, J.</strong>&nbsp;
<span class="lang-en"><em>Calculus: Early Transcendentals</em> (8th ed., metric version), Sections 9.3 and 9.5.</span>
<span class="lang-vi"><em>Calculus: Early Transcendentals</em> (ấn bản thứ 8, bản metric), Mục 9.3 và 9.5.</span>
</div>
<div class="source-item">
<strong>Lê Xuân Đại.</strong>&nbsp;
<span class="lang-en">HCMUT lecture slides and local exercise sets on first-order ordinary differential equations, used for worked examples and application models.</span>
<span class="lang-vi">Slide bài giảng ĐHBK TP.HCM và bộ bài tập địa phương về phương trình vi phân thường cấp một, dùng cho ví dụ mẫu và mô hình ứng dụng.</span>
</div>
<div class="source-item">
<strong><span class="lang-en">Instructor notes.</span><span class="lang-vi">Ghi chú của giảng viên.</span></strong>&nbsp;
<span class="lang-en">Additional homogeneous and Bernoulli methods adapted for MT1003 Calculus 1.</span>
<span class="lang-vi">Bổ sung phương pháp đẳng cấp và Bernoulli được điều chỉnh cho MT1003 Giải tích 1.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Full map: <a href="../../readings/">course readings</a>. Use section titles if a Stewart edition has different numbering.</span>
<span class="lang-vi">Bản đồ đầy đủ: <a href="../../readings/">tài liệu đọc của môn</a>. Nếu phiên bản Stewart khác số mục, hãy dùng tên mục.</span>
</div>
