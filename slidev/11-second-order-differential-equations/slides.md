---
theme: default
title: "Calculus 1 - Second-Order Differential Equations"
info: "MT1003 Calculus 1, Lecture 11"
transition: slide-left
download: "../../pdfs/second-order-differential-equations.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Second-Order Linear Differential Equations</span><span class="lang-vi">Phương trình vi phân tuyến tính cấp hai</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 11</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 11</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Short notes: <a href="../../sessions/11-second-order-differential-equations/">Session 11 notes</a>. Read: Stewart 17.1; instructor notes adapted from Dr. Lê Xuân Đại. Background ODE language: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Ghi chú ngắn: <a href="../../sessions/11-second-order-differential-equations/">Buổi 11</a>. Đọc: Stewart 17.1; ghi chú giảng viên phỏng theo TS. Lê Xuân Đại. Ngôn ngữ ODE nền tảng: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>.</span>
</div>

---

# <span class="lang-en">Today's Work</span><span class="lang-vi">Nội dung hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">1</span><span><span class="lang-en"><strong>Language</strong> - second-order linear ODEs, IVPs, BVPs, and uniqueness.</span><span class="lang-vi"><strong>Ngôn ngữ</strong> - ODE tuyến tính cấp hai, BTGTBĐ, BT biên, và tính duy nhất.</span></span></div>
<div class="tl-row"><span class="clock">2</span><span><span class="lang-en"><strong>Structure</strong> - homogeneous/nonhomogeneous solutions and superposition.</span><span class="lang-vi"><strong>Cấu trúc</strong> - nghiệm thuần nhất/không thuần nhất và chồng chất.</span></span></div>
<div class="tl-row"><span class="clock">3</span><span><span class="lang-en"><strong>Wronskian</strong> - when two solutions form a fundamental set.</span><span class="lang-vi"><strong>Wronski</strong> - khi nào hai nghiệm tạo thành hệ nghiệm cơ bản.</span></span></div>
<div class="tl-row"><span class="clock">4</span><span><span class="lang-en"><strong>Constant coefficients</strong> - characteristic equation and three root cases.</span><span class="lang-vi"><strong>Hệ số hằng</strong> - phương trình đặc trưng và ba trường hợp nghiệm.</span></span></div>
<div class="tl-row disc"><span class="clock">5</span><span><span class="lang-en"><strong>Practice as we go</strong> - short exercise stops after each main method, then spring-mass models.</span><span class="lang-vi"><strong>Luyện tập từng phần</strong> - bài tập ngắn sau mỗi phương pháp chính, rồi mô hình lò xo-vật nặng.</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes for second-order ODEs. Review basic ODE vocabulary in <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên cho ODE cấp hai. Ôn từ vựng ODE trong <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Second-Order Linear Form</span><span class="lang-vi">Dạng tuyến tính cấp hai</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - variable coefficients</span><span class="lang-vi">Định nghĩa - hệ số hàm</span></div>
<span class="lang-en">A second-order linear differential equation has the form</span>
<span class="lang-vi">Một phương trình vi phân tuyến tính cấp hai có dạng</span>

$$
L(y)=a_0(x)y''+a_1(x)y'+a_2(x)y=F(x),
$$

<span class="lang-en">where $a_0,a_1,a_2,F$ are continuous on an interval $I$ and $a_0(x)\ne0$ on $I$.</span>
<span class="lang-vi">trong đó $a_0,a_1,a_2,F$ liên tục trên khoảng $I$ và $a_0(x)\ne0$ trên $I$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Constant-coefficient form</span><span class="lang-vi">Dạng hệ số hằng</span></div>

$$
Ay''+By'+Cy=f(x),\qquad A,B,C\in\mathbb R,\ A\ne0.
$$
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes adapted from Dr. Lê Xuân Đại.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên phỏng theo TS. Lê Xuân Đại.</span>
</div>

---
class: compact
---

# <span class="lang-en">Homogeneous And Nonhomogeneous</span><span class="lang-vi">Thuần nhất và không thuần nhất</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Homogeneous</span><span class="lang-vi">Thuần nhất</span></div>
<span class="lang-en">The forcing term is zero:</span>
<span class="lang-vi">Vế phải bằng không:</span>

$$
Ay''+By'+Cy=0.
$$

<span class="lang-en">We often write its general solution as $y_h$.</span>
<span class="lang-vi">Ta thường ký hiệu nghiệm tổng quát là $y_h$.</span>
</div>
<div class="defn">
<div class="tag"><span class="lang-en">Nonhomogeneous</span><span class="lang-vi">Không thuần nhất</span></div>
<span class="lang-en">The forcing term is present:</span>
<span class="lang-vi">Có vế phải tác động:</span>

$$
Ay''+By'+Cy=f(x).
$$

<span class="lang-en">A single particular solution is denoted $y_p$.</span>
<span class="lang-vi">Một nghiệm riêng được ký hiệu là $y_p$.</span>
</div>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Solution structure</span><span class="lang-vi">Cấu trúc nghiệm</span></div>

$$
y_{\mathrm{gen}}=y_h+y_p.
$$

<span class="lang-en">This is the organizing idea for the whole lecture.</span>
<span class="lang-vi">Đây là ý tưởng tổ chức cho toàn bộ bài học.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes. Background: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên. Nền tảng: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Initial And Boundary Value Problems</span><span class="lang-vi">BT giá trị ban đầu và bài toán biên</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Initial-value problem</span><span class="lang-vi">Bài toán giá trị ban đầu</span></div>
<span class="lang-en">A second-order IVP gives two values at the same point:</span>
<span class="lang-vi">BTGTBĐ cấp hai cho hai điều kiện tại cùng một điểm:</span>

$$
y(x_0)=\alpha,\qquad y'(x_0)=\beta.
$$
</div>
<div class="defn">
<div class="tag"><span class="lang-en">Boundary value problem</span><span class="lang-vi">Bài toán biên</span></div>
<span class="lang-en">A BVP gives conditions at different points, for example</span>
<span class="lang-vi">Bài toán biên cho điều kiện tại các điểm khác nhau, ví dụ</span>

$$
y(x_0)=\alpha,\qquad y(x_1)=\beta.
$$
</div>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Existence and uniqueness theorem</span><span class="lang-vi">Định lý tồn tại và duy nhất</span></div>
<span class="lang-en">If $p,q,g$ are continuous on an interval $I$ containing $x_0$, then the IVP $y''+p(x)y'+q(x)y=g(x)$, $y(x_0)=\alpha$, $y'(x_0)=\beta$ has exactly one solution on $I$.</span>
<span class="lang-vi">Nếu $p,q,g$ liên tục trên khoảng $I$ chứa $x_0$, thì BTGTBĐ $y''+p(x)y'+q(x)y=g(x)$, $y(x_0)=\alpha$, $y'(x_0)=\beta$ có đúng một nghiệm trên $I$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes for IVP/BVP language.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên cho ngôn ngữ BTGTBĐ/BT biên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Superposition For Homogeneous Equations</span><span class="lang-vi">Chồng chất cho phương trình thuần nhất</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $y_1$ and $y_2$ are solutions of</span>
<span class="lang-vi">Nếu $y_1$ và $y_2$ là nghiệm của</span>

$$
Ay''+By'+Cy=0,
$$

<span class="lang-en">then for any constants $C_1,C_2$,</span>
<span class="lang-vi">thì với mọi hằng số $C_1,C_2$,</span>

$$
C_1y_1+C_2y_2
$$

<span class="lang-en">is also a solution.</span>
<span class="lang-vi">cũng là một nghiệm.</span>
</div>

<div class="box gold mt-2 mini">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">For $y''+y=0$, $y_1=\sin x$ and $y_2=\cos x$; hence $y=C_1\sin x+C_2\cos x$ is also a solution.</span>
<span class="lang-vi">Với $y''+y=0$, $y_1=\sin x$ và $y_2=\cos x$; do đó $y=C_1\sin x+C_2\cos x$ cũng là một nghiệm.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, superposition principle.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, nguyên lý chồng chất.</span>
</div>

---
class: compact
---

# <span class="lang-en">Linear Independence</span><span class="lang-vi">Độc lập tuyến tính</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">The functions $y_1,y_2$ are <strong>linearly dependent</strong> on $I$ if there are constants $C_1,C_2$, not both zero, such that</span>
<span class="lang-vi">Hai hàm $y_1,y_2$ <strong>phụ thuộc tuyến tính</strong> trên $I$ nếu tồn tại hằng số $C_1,C_2$, không đồng thời bằng không, sao cho</span>

$$
C_1y_1(x)+C_2y_2(x)=0\qquad \text{for all }x\in I.
$$

<span class="lang-en">They are <strong>linearly independent</strong> if this identity forces $C_1=C_2=0$.</span>
<span class="lang-vi">Chúng <strong>độc lập tuyến tính</strong> nếu đẳng thức này kéo theo $C_1=C_2=0$.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Dependent</span><span class="lang-vi">Phụ thuộc</span></div>
<span class="lang-en">$x$ and $-3x$ are dependent: choose $C_1=3$, $C_2=1$.</span>
<span class="lang-vi">$x$ và $-3x$ phụ thuộc: chọn $C_1=3$, $C_2=1$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Independent</span><span class="lang-vi">Độc lập</span></div>
<span class="lang-en">$x$ and $x^2$ are independent on any interval containing more than one point.</span>
<span class="lang-vi">$x$ và $x^2$ độc lập trên mọi khoảng có hơn một điểm.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, linear independence.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, độc lập tuyến tính.</span>
</div>

---
class: compact
---

# <span class="lang-en">The Wronskian</span><span class="lang-vi">Định thức Wronski</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">For differentiable functions $y_1,y_2$, their Wronskian is</span>
<span class="lang-vi">Với hai hàm khả vi $y_1,y_2$, định thức Wronski là</span>

$$
W(y_1,y_2)(x)=
\begin{vmatrix}
y_1(x)&y_2(x)\\
y_1'(x)&y_2'(x)
\end{vmatrix}
=y_1y_2'-y_1'y_2.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Wronskian criterion for solutions</span><span class="lang-vi">Tiêu chuẩn Wronski cho nghiệm</span></div>
<span class="lang-en">If $y_1,y_2$ solve the same homogeneous second-order linear equation on $I$, then either $W$ is never zero on $I$, or $W$ is identically zero. In the first case the solutions are independent; in the second they are dependent.</span>
<span class="lang-vi">Nếu $y_1,y_2$ cùng là nghiệm của một phương trình tuyến tính thuần nhất cấp hai trên $I$, thì hoặc $W$ không bao giờ bằng không trên $I$, hoặc $W\equiv0$. Trường hợp đầu độc lập; trường hợp sau phụ thuộc.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, Wronskian theorem.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, định lý Wronski.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Wronskian Example</span><span class="lang-vi">Ví dụ Wronski</span>

<div class="your-turn">
<span class="timechip">3 min</span>
<div class="label"><span class="lang-en">Before we compute</span><span class="lang-vi">Trước khi tính</span></div>
<span class="lang-en">Show that $e^x$ and $e^{2x}$ are linearly independent.</span>
<span class="lang-vi">Chứng minh $e^x$ và $e^{2x}$ độc lập tuyến tính.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Compute</span><span class="lang-vi">Tính</span></div>
<span class="blur-step" v-click>
$$
W=
\begin{vmatrix}
e^x&e^{2x}\\
e^x&2e^{2x}
\end{vmatrix}
=2e^{3x}-e^{3x}=e^{3x}\ne0.
$$
</span>
<span class="blur-step" v-click>
<span class="lang-en">Therefore the two functions are linearly independent on $\mathbb R$.</span>
<span class="lang-vi">Vậy hai hàm độc lập tuyến tính trên $\mathbb R$.</span>
</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 17.1; instructor notes example.</span>
<span class="lang-vi">Luyện tập: Stewart 17.1; ví dụ trong ghi chú giảng viên.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Wronskians And Independence</span><span class="lang-vi">Luyện tập: Wronski và độc lập tuyến tính</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">W1</div>Compute $W(\sin x,\cos x)$.<div class="inline-answer blur-step" v-click>$W=-1$, so the pair is linearly independent.</div></div>
<div class="exercise-card"><div class="num">W2</div>Compute $W(e^x,xe^x)$.<div class="inline-answer blur-step" v-click>$W=e^{2x}\ne0$, so the pair is linearly independent.</div></div>
<div class="exercise-card"><div class="num">W3</div>Do $1,x,x^2$ form a fundamental set for a second-order equation?<div class="inline-answer blur-step" v-click>No. A second-order homogeneous linear equation needs two independent solutions.</div></div>
<div class="exercise-card"><div class="num">W4</div>If two solutions of the same homogeneous equation satisfy $W(y_1,y_2)(x_0)\ne0$, what can we conclude?<div class="inline-answer blur-step" v-click>$y_1,y_2$ are independent and can generate the homogeneous solution space.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: Stewart 17.1; instructor notes on Wronskians and fundamental solutions.</span>
<span class="lang-vi">Nguồn luyện tập: Stewart 17.1; ghi chú giảng viên về Wronski và hệ nghiệm cơ bản.</span>
</div>

---
class: compact
---

# <span class="lang-en">Fundamental Set And General Solution</span><span class="lang-vi">Hệ nghiệm cơ bản và nghiệm tổng quát</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $y_1,y_2$ are two linearly independent solutions of the homogeneous equation</span>
<span class="lang-vi">Nếu $y_1,y_2$ là hai nghiệm độc lập tuyến tính của phương trình thuần nhất</span>

$$
Ay''+By'+Cy=0,
$$

<span class="lang-en">then every homogeneous solution has the form</span>
<span class="lang-vi">thì mọi nghiệm thuần nhất đều có dạng</span>

$$
y_h=C_1y_1+C_2y_2.
$$
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Language</span><span class="lang-vi">Ngôn ngữ</span></div>
<span class="lang-en">The pair $\{y_1,y_2\}$ is called a <strong>fundamental set of solutions</strong>.</span>
<span class="lang-vi">Cặp $\{y_1,y_2\}$ được gọi là <strong>hệ nghiệm cơ bản</strong>.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, fundamental solutions.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, hệ nghiệm cơ bản.</span>
</div>

---
class: compact
---

# <span class="lang-en">Characteristic Equation</span><span class="lang-vi">Phương trình đặc trưng</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Why try $y=e^{kx}$?</span><span class="lang-vi">Vì sao thử $y=e^{kx}$?</span></div>
<span class="lang-en">For constant coefficients, derivatives of $e^{kx}$ only multiply by powers of $k$:</span>
<span class="lang-vi">Với hệ số hằng, đạo hàm của $e^{kx}$ chỉ nhân thêm lũy thừa của $k$:</span>

$$
y=e^{kx},\qquad y'=ke^{kx},\qquad y''=k^2e^{kx}.
$$
</div>

<div class="defn mt-3 formula-stack">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">Substitute into $Ay''+By'+Cy=0$:</span>
<span class="lang-vi">Thay vào $Ay''+By'+Cy=0$:</span>

$$
(Ak^2+Bk+C)e^{kx}=0
\quad\Rightarrow\quad
Ak^2+Bk+C=0.
$$

<span class="lang-en">This quadratic is the <strong>characteristic equation</strong>.</span>
<span class="lang-vi">Phương trình bậc hai này là <strong>phương trình đặc trưng</strong>.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, characteristic equation.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, phương trình đặc trưng.</span>
</div>

---
class: compact
---

# <span class="lang-en">Three Root Cases</span><span class="lang-vi">Ba trường hợp nghiệm đặc trưng</span>

<div class="grid-3">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Distinct real roots</span><span class="lang-vi">Hai nghiệm thực phân biệt</span></div>
<span class="lang-en">$k_1\ne k_2$</span><span class="lang-vi">$k_1\ne k_2$</span>

$$
y_h=C_1e^{k_1x}+C_2e^{k_2x}.
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Repeated root</span><span class="lang-vi">Nghiệm kép</span></div>
<span class="lang-en">$k=k_0$</span><span class="lang-vi">$k=k_0$</span>

$$
y_h=C_1e^{k_0x}+C_2xe^{k_0x}.
$$
</div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Complex roots</span><span class="lang-vi">Nghiệm phức liên hợp</span></div>
<span class="lang-en">$k=a\pm bi$</span><span class="lang-vi">$k=a\pm bi$</span>

$$
y_h=e^{ax}(C_1\cos bx+C_2\sin bx).
$$
</div>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Decision</span><span class="lang-vi">Quyết định</span></div>
<span class="lang-en">Compute $\Delta=B^2-4AC$: positive, zero, or negative gives the three cases above.</span>
<span class="lang-vi">Tính $\Delta=B^2-4AC$: dương, bằng không, hoặc âm cho ba trường hợp trên.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, constant coefficients.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, hệ số hằng.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 1: Distinct Real Roots</span><span class="lang-vi">Trường hợp 1: hai nghiệm thực phân biệt</span>

<div class="your-turn">
<span class="timechip">3 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Find the homogeneous solution.</span>
<span class="lang-vi">Tìm nghiệm thuần nhất.</span>

$$
y''-y'-6y=0.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="blur-step" v-click>
$$
k^2-k-6=0
\quad\Rightarrow\quad
k_1=-2,\quad k_2=3.
$$
</span>
<span class="blur-step" v-click>
$$
y_h=C_1e^{-2x}+C_2e^{3x}.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 17.1; instructor notes example.</span>
<span class="lang-vi">Luyện tập: Stewart 17.1; ví dụ trong ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Why Repeated Roots Need $xe^{k_0x}$</span><span class="lang-vi">Vì sao nghiệm kép cần $xe^{k_0x}$</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Reduction of order idea</span><span class="lang-vi">Ý tưởng hạ bậc</span></div>
<span class="lang-en">If one solution $y_1$ of a homogeneous second-order linear equation is known, set</span>
<span class="lang-vi">Nếu đã biết một nghiệm $y_1$ của phương trình tuyến tính thuần nhất cấp hai, đặt</span>

$$
y_2=y_1(x)v(x).
$$

<span class="lang-en">This reduces the problem of finding a second solution to a first-order equation in $w=v'$.</span>
<span class="lang-vi">Cách này hạ bài toán tìm nghiệm thứ hai về một phương trình cấp một theo $w=v'$.</span>
</div>

<div class="box gold mt-3 formula-stack">
<div class="label"><span class="lang-en">For a repeated root</span><span class="lang-vi">Với nghiệm kép</span></div>
<span class="lang-en">The first solution is $y_1=e^{k_0x}$. Reduction of order gives the independent companion</span>
<span class="lang-vi">Nghiệm thứ nhất là $y_1=e^{k_0x}$. Hạ bậc cho nghiệm độc lập đi kèm</span>

$$
y_2=xe^{k_0x}.
$$
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, reduction of order for the repeated-root case.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, hạ bậc cho trường hợp nghiệm kép.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 2: Repeated Root</span><span class="lang-vi">Trường hợp 2: nghiệm kép</span>

<div class="your-turn">
<span class="timechip">3 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Find the homogeneous solution.</span>
<span class="lang-vi">Tìm nghiệm thuần nhất.</span>

$$
y''-6y'+9y=0.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="blur-step" v-click>
$$
k^2-6k+9=(k-3)^2=0.
$$
</span>
<span class="blur-step" v-click>
$$
y_h=C_1e^{3x}+C_2xe^{3x}.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 17.1; instructor notes example.</span>
<span class="lang-vi">Luyện tập: Stewart 17.1; ví dụ trong ghi chú giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Case 3: Complex Roots</span><span class="lang-vi">Trường hợp 3: nghiệm phức liên hợp</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Euler's formula</span><span class="lang-vi">Công thức Euler</span></div>

$$
e^{i\varphi}=\cos\varphi+i\sin\varphi.
$$

<span class="lang-en">If $k=a\pm bi$, then the two real independent solutions are</span>
<span class="lang-vi">Nếu $k=a\pm bi$, thì hai nghiệm thực độc lập là</span>

$$
y_1=e^{ax}\cos bx,\qquad y_2=e^{ax}\sin bx.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">General solution</span><span class="lang-vi">Nghiệm tổng quát</span></div>

$$
y_h=e^{ax}(C_1\cos bx+C_2\sin bx).
$$
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, Euler formula and complex roots.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, công thức Euler và nghiệm phức.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Complex Root Example</span><span class="lang-vi">Ví dụ nghiệm phức</span>

<div class="your-turn">
<span class="timechip">3 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Find the homogeneous solution.</span>
<span class="lang-vi">Tìm nghiệm thuần nhất.</span>

$$
y''+9y=0.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="blur-step" v-click>
$$
k^2+9=0\quad\Rightarrow\quad k=\pm3i.
$$
</span>
<span class="blur-step" v-click>
$$
y_h=C_1\cos3x+C_2\sin3x.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 17.1; instructor notes example.</span>
<span class="lang-vi">Luyện tập: Stewart 17.1; ví dụ trong ghi chú giảng viên.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Characteristic Roots</span><span class="lang-vi">Luyện tập: nghiệm đặc trưng</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">H1</div>$$y''-5y'+6y=0.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{2x}+C_2e^{3x}$.</div></div>
<div class="exercise-card"><div class="num">H2</div>$$y''+6y'+9y=0.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{-3x}+C_2xe^{-3x}$.</div></div>
<div class="exercise-card"><div class="num">H3</div>$$y''-4y'+5y=0.$$<div class="inline-answer blur-step" v-click>$y=e^{2x}(C_1\cos x+C_2\sin x)$.</div></div>
<div class="exercise-card"><div class="num">H4</div>$$y''+4y=0.$$<div class="inline-answer blur-step" v-click>$y=C_1\cos2x+C_2\sin2x$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: Stewart 17.1; instructor notes on characteristic equations.</span>
<span class="lang-vi">Nguồn luyện tập: Stewart 17.1; ghi chú giảng viên về phương trình đặc trưng.</span>
</div>

---
class: compact
---

# <span class="lang-en">Nonhomogeneous Constant-Coefficient Method</span><span class="lang-vi">Phương pháp cho hệ số hằng không thuần nhất</span>

<div class="timeline">
<div class="tl-row"><span class="clock"><span class="lang-en">Step 1</span><span class="lang-vi">Bước 1</span></span><span><span class="lang-en">Solve the homogeneous equation $Ay''+By'+Cy=0$.</span><span class="lang-vi">Giải phương trình thuần nhất $Ay''+By'+Cy=0$.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">Step 2</span><span class="lang-vi">Bước 2</span></span><span><span class="lang-en">Build $y_h$ from the characteristic roots.</span><span class="lang-vi">Lập $y_h$ từ nghiệm của phương trình đặc trưng.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">Step 3</span><span class="lang-vi">Bước 3</span></span><span><span class="lang-en">Find one particular solution $y_p$.</span><span class="lang-vi">Tìm một nghiệm riêng $y_p$.</span></span></div>
<div class="tl-row disc"><span class="clock"><span class="lang-en">Step 4</span><span class="lang-vi">Bước 4</span></span><span><span class="lang-en">Write $y_{\mathrm{gen}}=y_h+y_p$ and apply conditions if given.</span><span class="lang-vi">Viết $y_{\mathrm{tq}}=y_h+y_p$ và áp điều kiện nếu có.</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, Dr. Lê Xuân Đại's four-step recipe.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, quy trình bốn bước của TS. Lê Xuân Đại.</span>
</div>

---
class: compact
---

# <span class="lang-en">Undetermined Coefficients: Exponential-Polynomial</span><span class="lang-vi">Hệ số bất định: mũ-nhân-đa thức</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">Template</span><span class="lang-vi">Dạng thử</span></div>
<span class="lang-en">If the forcing term has the form $f(x)=e^{\alpha x}P_n(x)$, try</span>
<span class="lang-vi">Nếu vế phải có dạng $f(x)=e^{\alpha x}P_n(x)$, thử</span>

$$
y_p=x^s e^{\alpha x}Q_n(x),
$$

<span class="lang-en">where $Q_n$ is a polynomial of the same degree as $P_n$.</span>
<span class="lang-vi">trong đó $Q_n$ là đa thức cùng bậc với $P_n$.</span>
</div>

<div class="grid-3 mt-3">
<div class="box"><strong>$s=0$</strong><br><span class="lang-en">if $\alpha$ is not a characteristic root.</span><span class="lang-vi">nếu $\alpha$ không là nghiệm đặc trưng.</span></div>
<div class="box blue"><strong>$s=1$</strong><br><span class="lang-en">if $\alpha$ is a simple characteristic root.</span><span class="lang-vi">nếu $\alpha$ là nghiệm đơn.</span></div>
<div class="box gold"><strong>$s=2$</strong><br><span class="lang-en">if $\alpha$ is a repeated characteristic root.</span><span class="lang-vi">nếu $\alpha$ là nghiệm kép.</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, undetermined coefficients.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, hệ số bất định.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Basic Exponential-Polynomial Forcing</span><span class="lang-vi">Luyện tập: vế phải mũ-đa thức cơ bản</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">A1</div>$$y''-5y'+6y=e^{-x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{2x}+C_2e^{3x}+\dfrac{1}{12}e^{-x}$.</div></div>
<div class="exercise-card"><div class="num">A2</div>$$y''+4y=x^2.$$<div class="inline-answer blur-step" v-click>$y=C_1\cos2x+C_2\sin2x+\dfrac14x^2-\dfrac18$.</div></div>
<div class="exercise-card"><div class="num">A3</div>$$y''+2y'=3x.$$<div class="inline-answer blur-step" v-click>$y=C_1+C_2e^{-2x}+\dfrac34x^2-\dfrac34x$.</div></div>
<div class="exercise-card"><div class="num">A4</div>$$y''-2y'+y=2e^x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^x+C_2xe^x+x^2e^x$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: local exercise set adapted from Dr. Lê Xuân Đại; extra practice: Stewart 17.1.</span>
<span class="lang-vi">Nguồn luyện tập: bộ bài tập địa phương phỏng theo TS. Lê Xuân Đại; luyện thêm: Stewart 17.1.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Resonance With Repeated Roots</span><span class="lang-vi">Luyện tập: cộng hưởng với nghiệm kép</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">C1</div>$$y''-4y'+4y=x+e^{2x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{2x}+C_2xe^{2x}+\dfrac14x+\dfrac14+\dfrac12x^2e^{2x}$.</div></div>
<div class="exercise-card"><div class="num">C2</div>$$y''+6y'+9y=12e^{3x}(3x-2).$$<div class="inline-answer blur-step" v-click>$y=C_1e^{-3x}+C_2xe^{-3x}+(x-1)e^{3x}$.</div></div>
<div class="exercise-card"><div class="num">C3</div>$$y''-4y'+4y=8e^{2x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{2x}+C_2xe^{2x}+4x^2e^{2x}$.</div></div>
<div class="exercise-card"><div class="num">C4</div>$$y''-6y'+9y=-2xe^{3x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{3x}+C_2xe^{3x}-\dfrac13x^3e^{3x}$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: local exercise set adapted from Dr. Lê Xuân Đại; extra practice: Stewart 17.1.</span>
<span class="lang-vi">Nguồn luyện tập: bộ bài tập địa phương phỏng theo TS. Lê Xuân Đại; luyện thêm: Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Undetermined Coefficients: Trig Forcing</span><span class="lang-vi">Hệ số bất định: vế phải lượng giác</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">Template</span><span class="lang-vi">Dạng thử</span></div>
<span class="lang-en">If</span><span class="lang-vi">Nếu</span>

$$
f(x)=e^{\alpha x}\big(P_n(x)\cos\beta x+Q_m(x)\sin\beta x\big),
$$

<span class="lang-en">try</span><span class="lang-vi">thử</span>

$$
y_p=x^s e^{\alpha x}\big(H_k(x)\cos\beta x+T_k(x)\sin\beta x\big),
\qquad k=\max\{m,n\}.
$$

<span class="small"><span class="lang-en">Here $H_k$ and $T_k$ are unknown polynomials of degree at most $k$.</span><span class="lang-vi">Ở đây $H_k$ và $T_k$ là các đa thức chưa biết có bậc không quá $k$.</span></span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">No resonance</span><span class="lang-vi">Không cộng hưởng</span></div>
<span class="lang-en">If $\alpha+i\beta$ is not a root: $s=0$</span>
<span class="lang-vi">Nếu $\alpha+i\beta$ không là nghiệm: $s=0$</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Resonance</span><span class="lang-vi">Cộng hưởng</span></div>
<span class="lang-en">If $\alpha+i\beta$ is a root: multiply by $x$, so $s=1$</span>
<span class="lang-vi">Nếu $\alpha+i\beta$ là nghiệm: nhân $x$, nên $s=1$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, undetermined coefficients.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, hệ số bất định.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Trig Forcing And Resonance</span><span class="lang-vi">Luyện tập: lượng giác và cộng hưởng</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">B1</div>$$y''-4y'+3y=\sin2x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^x+C_2e^{3x}+\dfrac{8}{65}\cos2x-\dfrac{1}{65}\sin2x$.</div></div>
<div class="exercise-card"><div class="num">B2</div>$$y''+y=\cos x.$$<div class="inline-answer blur-step" v-click>$y=C_1\cos x+C_2\sin x+\dfrac12x\sin x$.</div></div>
<div class="exercise-card"><div class="num">B3</div>$$y''-5y'+6y=22\cos2x+6\sin2x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{2x}+C_2e^{3x}+\cos2x-2\sin2x$.</div></div>
<div class="exercise-card"><div class="num">B4</div>$$y''-2y'-3y=-30\cos3x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{-x}+C_2e^{3x}+2\cos3x+\sin3x$.</div></div>
<div class="exercise-card"><div class="num">B5</div>$$y''-4y'+5y=8\sin x+16\cos x.$$<div class="inline-answer blur-step" v-click>$y=e^{2x}(C_1\cos x+C_2\sin x)+3\cos x-\sin x$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: local exercise set adapted from Dr. Lê Xuân Đại; extra practice: Stewart 17.1.</span>
<span class="lang-vi">Nguồn luyện tập: bộ bài tập địa phương phỏng theo TS. Lê Xuân Đại; luyện thêm: Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Superposition For Forcing Terms</span><span class="lang-vi">Chồng chất cho các vế phải</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">Suppose $f=f_1+f_2$. If $y_{p1}$ solves</span>
<span class="lang-vi">Giả sử $f=f_1+f_2$. Nếu $y_{p1}$ giải</span>

$$
Ay''+By'+Cy=f_1(x),
$$

<span class="lang-en">and $y_{p2}$ solves</span><span class="lang-vi">và $y_{p2}$ giải</span>

$$
Ay''+By'+Cy=f_2(x),
$$

<span class="lang-en">then $y_p=y_{p1}+y_{p2}$ solves $Ay''+By'+Cy=f(x)$.</span>
<span class="lang-vi">thì $y_p=y_{p1}+y_{p2}$ giải $Ay''+By'+Cy=f(x)$.</span>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Use</span><span class="lang-vi">Cách dùng</span></div>
<span class="lang-en">Split complicated forcing terms into pieces that match the templates.</span>
<span class="lang-vi">Tách vế phải phức tạp thành các phần khớp với dạng thử.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes, nonhomogeneous superposition.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên, chồng chất nghiệm riêng.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Mixed Exponential Forcing</span><span class="lang-vi">Luyện tập: vế phải mũ hỗn hợp</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">D1</div>$$y''+8y'+15y=-32e^{-x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{-3x}+C_2e^{-5x}-4e^{-x}$.</div></div>
<div class="exercise-card"><div class="num">D2</div>$$y''+y'-6y=8e^{-2x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{-3x}+C_2e^{2x}-2e^{-2x}$.</div></div>
<div class="exercise-card"><div class="num">D3</div>$$y''+2y'-3y=(6x+1)e^{3x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^x+C_2e^{-3x}+e^{3x}\left(\dfrac12x-\dfrac14\right)$.</div></div>
<div class="exercise-card"><div class="num">D4</div>$$y''-4y'+3y=6e^x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^x+C_2e^{3x}-3xe^x$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: local exercise set adapted from Dr. Lê Xuân Đại; extra practice: Stewart 17.1.</span>
<span class="lang-vi">Nguồn luyện tập: bộ bài tập địa phương phỏng theo TS. Lê Xuân Đại; luyện thêm: Stewart 17.1.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Polynomial And Mixed Terms</span><span class="lang-vi">Luyện tập: đa thức và vế phải hỗn hợp</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">E1</div>$$y''-7y'+6y=6x^2-20x+3.$$<div class="inline-answer blur-step" v-click>$y=C_1e^x+C_2e^{6x}+x^2-x-1$.</div></div>
<div class="exercise-card"><div class="num">E2</div>$$y''-5y'+6y=5\cos2x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{2x}+C_2e^{3x}+\dfrac{5}{52}\cos2x-\dfrac{25}{52}\sin2x$.</div></div>
<div class="exercise-card"><div class="num">E3</div>$$y''-4y'+3y=4xe^{2x}.$$<div class="inline-answer blur-step" v-click>$y=C_1e^x+C_2e^{3x}-4xe^{2x}$.</div></div>
<div class="exercise-card"><div class="num">E4</div>$$y''+3y'+2y=2x+3+6e^x.$$<div class="inline-answer blur-step" v-click>$y=C_1e^{-x}+C_2e^{-2x}+x+e^x$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: local exercise set adapted from Dr. Lê Xuân Đại; extra practice: Stewart 17.1.</span>
<span class="lang-vi">Nguồn luyện tập: bộ bài tập địa phương phỏng theo TS. Lê Xuân Đại; luyện thêm: Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Variation Of Parameters</span><span class="lang-vi">Biến thiên hằng số</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Method theorem</span><span class="lang-vi">Định lý phương pháp</span></div>
<span class="lang-en">For $Ay''+By'+Cy=f(x)$, if $y_1,y_2$ form a fundamental set for the homogeneous equation and $W=W(y_1,y_2)$, then a particular solution can be found from</span>
<span class="lang-vi">Với $Ay''+By'+Cy=f(x)$, nếu $y_1,y_2$ là hệ nghiệm cơ bản của phương trình thuần nhất và $W=W(y_1,y_2)$, thì có thể tìm nghiệm riêng từ</span>

$$
y_p=-y_1\int \frac{y_2f(x)}{AW(x)}\,dx
+y_2\int \frac{y_1f(x)}{AW(x)}\,dx.
$$
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">When to use it</span><span class="lang-vi">Khi nào dùng</span></div>
<span class="lang-en">Use this when $f(x)$ does not fit the undetermined-coefficients templates.</span>
<span class="lang-vi">Dùng phương pháp này khi $f(x)$ không khớp với các dạng thử hệ số bất định.</span>
</div>

<div class="refs">
<span class="lang-en">Read: instructor notes, variation of parameters; Stewart 17.2-17.3 for later practice.</span>
<span class="lang-vi">Đọc: ghi chú giảng viên, biến thiên hằng số; Stewart 17.2-17.3 cho luyện tập tiếp theo.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Choose The Method</span><span class="lang-vi">Luyện tập: chọn phương pháp</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">M1</div>$y''-3y'+2y=e^x+x$. Which part causes resonance?<div class="inline-answer blur-step" v-click>$e^x$ resonates with root $k=1$; multiply that trial by $x$.</div></div>
<div class="exercise-card"><div class="num">M2</div>$y''+y=\tan x$. Undetermined coefficients or variation of parameters?<div class="inline-answer blur-step" v-click>Variation of parameters; $\tan x$ is not in the usual UC template list.</div></div>
<div class="exercise-card"><div class="num">M3</div>$y''+4y=3\cos2x$. What trial form starts the work?<div class="inline-answer blur-step" v-click>Because of resonance, try $y_p=x(A\cos2x+B\sin2x)$.</div></div>
<div class="exercise-card"><div class="num">M4</div>$y''-y=e^x+e^{-x}$. What happens?<div class="inline-answer blur-step" v-click>Both forcing terms resonate; try $y_p=Axe^x+Bxe^{-x}$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: Stewart 17.1-17.3; instructor notes on method selection.</span>
<span class="lang-vi">Nguồn luyện tập: Stewart 17.1-17.3; ghi chú giảng viên về chọn phương pháp.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 1: Start</span><span class="lang-vi">Ví dụ mẫu 1: bắt đầu</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Solve and impose the two conditions.</span>
<span class="lang-vi">Giải và áp hai điều kiện.</span>

$$
y''-2y'-3y=e^{4x},\qquad y(\ln2)=1,\quad y(2\ln2)=1.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Steps 1-2</span><span class="lang-vi">Bước 1-2</span></div>
<span class="blur-step" v-click>
$$
k^2-2k-3=0
\quad\Rightarrow\quad
k_1=-1,\ k_2=3.
$$
</span>
<span class="blur-step" v-click>
$$
y_h=C_1e^{-x}+C_2e^{3x}.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 1: Particular Solution</span><span class="lang-vi">Ví dụ mẫu 1: nghiệm riêng</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Try the template</span><span class="lang-vi">Thử dạng mẫu</span></div>
<span class="lang-en">Since $\alpha=4$ is not a characteristic root, try $y_p=Ae^{4x}$.</span>
<span class="lang-vi">Vì $\alpha=4$ không là nghiệm đặc trưng, thử $y_p=Ae^{4x}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Substitute</span><span class="lang-vi">Thay vào</span></div>

$$
y_p'=4Ae^{4x},\qquad y_p''=16Ae^{4x}.
$$

$$
y_p''-2y_p'-3y_p=(16A-8A-3A)e^{4x}=5Ae^{4x}.
$$

<span class="blur-step" v-click>$5A=1$, so $A=\dfrac15$.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 1: Conditions</span><span class="lang-vi">Ví dụ mẫu 1: áp điều kiện</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">General solution</span><span class="lang-vi">Nghiệm tổng quát</span></div>

$$
y=C_1e^{-x}+C_2e^{3x}+\frac15e^{4x}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Use the two conditions</span><span class="lang-vi">Dùng hai điều kiện</span></div>

$$
\begin{cases}
\frac12C_1+8C_2+\frac{16}{5}=1,\\
\frac14C_1+64C_2+\frac{256}{5}=1.
\end{cases}
$$

<span class="blur-step" v-click>
$$
C_1=\frac{652}{75},\qquad C_2=-\frac{491}{600}.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 2: Polynomial Forcing</span><span class="lang-vi">Ví dụ mẫu 2: vế phải đa thức</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Solve</span><span class="lang-vi">Giải</span>

$$
y''-2y'+2y=x^2.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Homogeneous part</span><span class="lang-vi">Phần thuần nhất</span></div>
<span class="blur-step" v-click>
$$
k^2-2k+2=0\Rightarrow k=1\pm i.
$$
$$
y_h=e^x(C_1\cos x+C_2\sin x).
$$
</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Particular template</span><span class="lang-vi">Dạng nghiệm riêng</span></div>
<span class="blur-step" v-click>
$$
y_p=Ax^2+Bx+C.
$$
</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 2: Match Coefficients</span><span class="lang-vi">Ví dụ mẫu 2: so hệ số</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Substitute $y_p=Ax^2+Bx+C$</span><span class="lang-vi">Thay $y_p=Ax^2+Bx+C$</span></div>

$$
y_p'=2Ax+B,\qquad y_p''=2A.
$$

$$
y_p''-2y_p'+2y_p
=2Ax^2+(2B-4A)x+(2C-2B+2A).
$$

<span class="blur-step" v-click>
$$
A=\frac12,\qquad B=1,\qquad C=\frac12.
$$
</span>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">General solution</span><span class="lang-vi">Nghiệm tổng quát</span></div>
<span class="blur-step" v-click>
$$
y=e^x(C_1\cos x+C_2\sin x)+\frac12(x+1)^2.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 3: Trig Forcing</span><span class="lang-vi">Ví dụ mẫu 3: vế phải lượng giác</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Before we solve</span><span class="lang-vi">Trước khi giải</span></div>
<span class="lang-en">Find the solution satisfying $y(0)=1$, $y'(0)=2$.</span>
<span class="lang-vi">Tìm nghiệm thỏa $y(0)=1$, $y'(0)=2$.</span>

$$
y''+y'-2y=\cos x-3\sin x.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Homogeneous part</span><span class="lang-vi">Phần thuần nhất</span></div>
<span class="blur-step" v-click>
$$
k^2+k-2=0\Rightarrow k=-2,1.
$$
$$
y_h=C_1e^{-2x}+C_2e^x.
$$
</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Particular template</span><span class="lang-vi">Dạng nghiệm riêng</span></div>
<span class="blur-step" v-click>
$$
y_p=A\cos x+B\sin x.
$$
</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Example 3: Finish</span><span class="lang-vi">Ví dụ mẫu 3: hoàn tất</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Match coefficients</span><span class="lang-vi">So hệ số</span></div>

$$
y_p''+y_p'-2y_p=(B-3A)\cos x+(-3B-A)\sin x.
$$

<span class="blur-step" v-click>
$$
B-3A=1,\qquad 3B+A=3
\quad\Rightarrow\quad
A=0,\ B=1.
$$
</span>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Apply the IVP</span><span class="lang-vi">Áp điều kiện đầu</span></div>

$$
y=C_1e^{-2x}+C_2e^x+\sin x.
$$

<span class="blur-step" v-click>$C_1=0$, $C_2=1$, so $y=e^x+\sin x$.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example adapted from instructor notes; practice: Stewart 17.1.</span>
<span class="lang-vi">Ví dụ mẫu phỏng theo ghi chú giảng viên; luyện tập: Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Mechanical Vibration: Physical Picture</span><span class="lang-vi">Dao động cơ học: bức tranh vật lý</span>

<div class="grid-2 align-center">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Spring-mass system</span><span class="lang-vi">Hệ lò xo-vật nặng</span></div>
<span class="lang-en">A mass $m$ stretches a spring from natural length $L$ to equilibrium length $L+\ell$. We measure displacement $x(t)$ from equilibrium, positive downward.</span>
<span class="lang-vi">Vật nặng $m$ kéo lò xo từ chiều dài tự nhiên $L$ đến chiều dài cân bằng $L+\ell$. Ta đo li độ $x(t)$ từ vị trí cân bằng, chiều dương hướng xuống.</span>
</div>
<img src="./images/spring-mass.jpg" class="graph-img small" alt="Spring-mass system">
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Modeling question</span><span class="lang-vi">Câu hỏi mô hình</span></div>
<span class="lang-en">Which forces act on the mass, and how do they translate into a second-order ODE?</span>
<span class="lang-vi">Những lực nào tác dụng lên vật, và chúng dịch thành ODE cấp hai như thế nào?</span>
</div>

<div class="refs">
<span class="lang-en">Application source: instructor notes adapted from Dr. Lê Xuân Đại; Stewart 17.1 modeling context.</span>
<span class="lang-vi">Nguồn ứng dụng: ghi chú giảng viên phỏng theo TS. Lê Xuân Đại; bối cảnh mô hình trong Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Hooke's Law And Forces</span><span class="lang-vi">Định luật Hooke và các lực</span>

<div class="force-list">
<div class="force-row"><strong>$F_1$</strong><span><span class="lang-en">Gravity acts downward: $F_1=mg$.</span><span class="lang-vi">Trọng lực hướng xuống: $F_1=mg$.</span></span></div>
<div class="force-row"><strong>$F_2$</strong><span><span class="lang-en">Spring restoring force: $F_2=-k(x+\ell)$; at equilibrium $mg=k\ell$, so $F_2=-kx-mg$.</span><span class="lang-vi">Lực đàn hồi: $F_2=-k(x+\ell)$; tại cân bằng $mg=k\ell$, nên $F_2=-kx-mg$.</span></span></div>
<div class="force-row"><strong>$F_3$</strong><span><span class="lang-en">Damping force opposes velocity: $F_3=-bx'(t)$.</span><span class="lang-vi">Lực cản ngược chiều vận tốc: $F_3=-bx'(t)$.</span></span></div>
<div class="force-row"><strong>$F_4$</strong><span><span class="lang-en">External force: $F_4=F(t)$.</span><span class="lang-vi">Ngoại lực: $F_4=F(t)$.</span></span></div>
</div>

<div class="box gold mt-3 formula-stack">
<div class="label"><span class="lang-en">Hooke's law</span><span class="lang-vi">Định luật Hooke</span></div>

$$
|F|=kx.
$$
</div>

<div class="refs">
<span class="lang-en">Read: instructor notes, spring-mass formulation; Stewart 17.1.</span>
<span class="lang-vi">Đọc: ghi chú giảng viên, lập mô hình hệ lò xo; Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Newton's Law Gives The ODE</span><span class="lang-vi">Định luật Newton cho ODE</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Sum the forces</span><span class="lang-vi">Cộng các lực</span></div>

$$
mx''=mg+(-kx-mg)-bx'+F(t).
$$

$$
mx''+bx'+kx=F(t).
$$
</div>

<div class="grid-2 mt-3">
<div class="defn">
<div class="tag"><span class="lang-en">Free vs forced</span><span class="lang-vi">Tự do và cưỡng bức</span></div>
<span class="lang-en">If $F(t)=0$, motion is free; otherwise it is forced.</span>
<span class="lang-vi">Nếu $F(t)=0$, dao động tự do; nếu không, dao động cưỡng bức.</span>
</div>
<div class="defn">
<div class="tag"><span class="lang-en">Undamped vs damped</span><span class="lang-vi">Không cản và có cản</span></div>
<span class="lang-en">If $b=0$, motion is undamped; if $b>0$, it is damped.</span>
<span class="lang-vi">Nếu $b=0$, dao động không cản; nếu $b>0$, dao động có cản.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: instructor notes, Newton's law model; Stewart 17.1.</span>
<span class="lang-vi">Đọc: ghi chú giảng viên, mô hình từ định luật Newton; Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Spring Example: Undamped Free Motion</span><span class="lang-vi">Ví dụ lò xo: dao động tự do không cản</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Bài toán</span></div>
<span class="lang-en">A $2$ kg mass stretches a spring from $0.5$ m to $0.7$ m under a force of $25.6$ N. It is released from $x(0)=0.2$ m with $x'(0)=0$. Find $x(t)$.</span>
<span class="lang-vi">Vật $2$ kg kéo lò xo từ $0.5$ m đến $0.7$ m dưới lực $25.6$ N. Thả từ $x(0)=0.2$ m với $x'(0)=0$. Tìm $x(t)$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Model and solve</span><span class="lang-vi">Lập mô hình và giải</span></div>
<span class="blur-step" v-click>
$$
25.6=k(0.7-0.5)\Rightarrow k=128.
$$
</span>
<span class="blur-step" v-click>
$$
2x''+128x=0\Rightarrow x=C_1\cos8t+C_2\sin8t.
$$
</span>
<span class="blur-step" v-click>$x(0)=0.2$, $x'(0)=0$, so $x(t)=0.2\cos8t$.</span>
</div>

<div class="refs">
<span class="lang-en">Application example adapted from instructor notes; Stewart 17.1.</span>
<span class="lang-vi">Ví dụ ứng dụng phỏng theo ghi chú giảng viên; Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Spring Example: Damped Free Motion</span><span class="lang-vi">Ví dụ lò xo: dao động tự do có cản</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Bài toán</span></div>
<span class="lang-en">Use the same spring and mass, but immerse the system in a fluid with damping constant $b=40$. Let $x(0)=0$, $x'(0)=0.6$. Find $x(t)$.</span>
<span class="lang-vi">Dùng cùng lò xo và vật, nhưng đặt hệ trong chất lỏng có hệ số cản $b=40$. Cho $x(0)=0$, $x'(0)=0.6$. Tìm $x(t)$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Model and solve</span><span class="lang-vi">Lập mô hình và giải</span></div>
<span class="blur-step" v-click>
$$
2x''+40x'+128x=0,\qquad 2k^2+40k+128=0.
$$
</span>
<span class="blur-step" v-click>
$$
k=-4,-16\Rightarrow x=C_1e^{-4t}+C_2e^{-16t}.
$$
</span>
<span class="blur-step" v-click>$C_1=0.05$, $C_2=-0.05$, so $x(t)=0.05(e^{-4t}-e^{-16t})$.</span>
</div>

<div class="refs">
<span class="lang-en">Application example adapted from instructor notes; Stewart 17.1.</span>
<span class="lang-vi">Ví dụ ứng dụng phỏng theo ghi chú giảng viên; Stewart 17.1.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Forced Damped Motion: Showcase</span><span class="lang-vi">Dao động cưỡng bức có cản: ví dụ mẫu</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Model</span><span class="lang-vi">Mô hình</span></div>
<span class="lang-en">With $m=1$, $b=1$, $k=1.25$, and $F(t)=3\cos t$, the equation is</span>
<span class="lang-vi">Với $m=1$, $b=1$, $k=1.25$, và $F(t)=3\cos t$, phương trình là</span>

$$
x''+x'+1.25x=3\cos t,\qquad x(0)=2,\quad x'(0)=3.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution shape</span><span class="lang-vi">Dáng nghiệm</span></div>

$$
x_h=e^{-0.5t}(C_1\cos t+C_2\sin t),\qquad
x_p=A\cos t+B\sin t.
$$

<span class="blur-step" v-click>$A=\dfrac{12}{17}$, $B=\dfrac{48}{17}$, $C_1=\dfrac{22}{17}$, $C_2=\dfrac{14}{17}$.</span>
</div>

<div class="refs">
<span class="lang-en">Application example adapted from instructor notes; Stewart 17.1 modeling context.</span>
<span class="lang-vi">Ví dụ ứng dụng phỏng theo ghi chú giảng viên; bối cảnh mô hình Stewart 17.1.</span>
</div>

---
class: compact exercise-heavy ode-bank
---

# <span class="lang-en">Practice: Model Spring-Mass Motion</span><span class="lang-vi">Luyện tập: mô hình lò xo-khối lượng</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">S1</div>A $1$ kg mass, spring constant $9$, no damping, no forcing, $x(0)=0.1$, $x'(0)=0$. Model and solve.<div class="inline-answer blur-step" v-click>$x''+9x=0$, so $x(t)=0.1\cos3t$.</div></div>
<div class="exercise-card"><div class="num">S2</div>A $2$ kg mass has $b=6$, $k=8$, no forcing, $x(0)=1$, $x'(0)=0$. Write the IVP.<div class="inline-answer blur-step" v-click>$2x''+6x'+8x=0$, $x(0)=1$, $x'(0)=0$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice source: instructor notes adapted from Dr. Lê Xuân Đại; Stewart 17.1 modeling context.</span>
<span class="lang-vi">Nguồn luyện tập: ghi chú giảng viên phỏng theo TS. Lê Xuân Đại; bối cảnh mô hình Stewart 17.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Closing Decision Chart</span><span class="lang-vi">Bảng quyết định cuối bài</span>

<div class="timeline">
<div class="tl-row"><span class="clock"><span class="lang-en">1. Linear?</span><span class="lang-vi">1. Tuyến tính?</span></span><span><span class="lang-en">Put the ODE in $y''+p(x)y'+q(x)y=g(x)$ form.</span><span class="lang-vi">Đưa ODE về dạng $y''+p(x)y'+q(x)y=g(x)$.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">2. Homogeneous?</span><span class="lang-vi">2. Thuần nhất?</span></span><span><span class="lang-en">If $g=0$, solve using the characteristic equation when coefficients are constant.</span><span class="lang-vi">Nếu $g=0$, dùng phương trình đặc trưng khi hệ số là hằng.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">3. Roots?</span><span class="lang-vi">3. Nghiệm?</span></span><span><span class="lang-en">Choose distinct, repeated, or complex-root formula.</span><span class="lang-vi">Chọn công thức hai nghiệm phân biệt, nghiệm kép, hoặc nghiệm phức.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">4. Forced?</span><span class="lang-vi">4. Có vế phải?</span></span><span><span class="lang-en">Find $y_p$ by a template, superposition, or variation of parameters.</span><span class="lang-vi">Tìm $y_p$ bằng dạng thử, chồng chất, hoặc biến thiên hằng số.</span></span></div>
<div class="tl-row disc"><span class="clock"><span class="lang-en">5. Conditions?</span><span class="lang-vi">5. Điều kiện?</span></span><span><span class="lang-en">Use the two conditions to determine the two constants.</span><span class="lang-vi">Dùng hai điều kiện để tìm hai hằng số.</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 17.1; instructor notes for second-order ODEs and applications.</span>
<span class="lang-vi">Đọc: Stewart 17.1; ghi chú giảng viên cho ODE cấp hai và ứng dụng.</span>
</div>

---
class: compact
---

# <span class="lang-en">Reading And Practice Sources</span><span class="lang-vi">Nguồn đọc và luyện tập</span>

<div class="source-list compact-sources">
<div class="source-item">
<strong>Stewart, J.</strong>&nbsp;
<span class="lang-en"><em>Calculus: Early Transcendentals</em> (8th ed., metric version), Section 17.1 for second-order linear equations with constant coefficients; Sections 17.2-17.3 for later nonhomogeneous methods.</span>
<span class="lang-vi"><em>Calculus: Early Transcendentals</em> (ấn bản thứ 8, bản metric), Mục 17.1 cho phương trình tuyến tính cấp hai hệ số hằng; Mục 17.2-17.3 cho phương pháp không thuần nhất tiếp theo.</span>
</div>
<div class="source-item">
<strong>Strang, G., & Herman, E. "Jed".</strong>&nbsp;
<span class="lang-en"><em>Calculus Volume 2</em>, OpenStax, <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">Section 4.1</a> for basic ODE vocabulary.</span>
<span class="lang-vi"><em>Calculus Volume 2</em>, OpenStax, <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">Mục 4.1</a> cho từ vựng ODE nền tảng.</span>
</div>
<div class="source-item">
<strong>Boelkins, M.</strong>&nbsp;
<span class="lang-en"><em>Active Calculus</em>, <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Section 7.2</a> for qualitative thinking about differential equations.</span>
<span class="lang-vi"><em>Active Calculus</em>, <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Mục 7.2</a> cho tư duy định tính về phương trình vi phân.</span>
</div>
<div class="source-item">
<strong>Lê Xuân Đại.</strong>&nbsp;
<span class="lang-en">HCMUT lecture slides and local exercise sets on second-order ordinary differential equations, used for theorem sequence, worked examples, applications, and exercises.</span>
<span class="lang-vi">Slide bài giảng ĐHBK TP.HCM và bộ bài tập địa phương về phương trình vi phân thường cấp hai, dùng cho chuỗi định lý, ví dụ mẫu, ứng dụng, và bài tập.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Full map: <a href="../../readings/">course readings</a>. Short notes: <a href="../../sessions/11-second-order-differential-equations/">Session 11 notes</a>. Use section titles if a Stewart edition has different numbering.</span>
<span class="lang-vi">Bản đồ đầy đủ: <a href="../../readings/">tài liệu đọc của môn</a>. Ghi chú ngắn: <a href="../../sessions/11-second-order-differential-equations/">Buổi 11</a>. Nếu phiên bản Stewart khác số mục, hãy dùng tên mục.</span>
</div>
