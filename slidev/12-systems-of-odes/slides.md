---
theme: default
title: "Calculus 1 - Systems of First-Order Linear ODEs"
info: "MT1003 Calculus 1, Lecture 12"
transition: slide-left
download: "../../pdfs/systems-of-odes.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Systems of First-Order Linear ODEs</span><span class="lang-vi">Hệ phương trình vi phân tuyến tính cấp một</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 12</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 12</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Short notes: <a href="../../sessions/12-systems-of-odes/">Session 12 notes</a>. Read: Stewart 9.6 for modeling context; local systems notes and exercises adapted from Dr. Lê Xuân Đại.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Ghi chú ngắn: <a href="../../sessions/12-systems-of-odes/">Buổi 12</a>. Đọc: Stewart 9.6 cho bối cảnh mô hình hóa; ghi chú và bài tập địa phương phỏng theo TS. Lê Xuân Đại.</span>
</div>

---
layout: center
class: sim system-final
---

<PhasePortrait kind="coupled" tone="dark" class="sim-canvas" />

# <span class="lang-en">Several Quantities Change Together</span><span class="lang-vi">Nhiều đại lượng thay đổi cùng nhau</span>

<div class="sim-panel wide">
<div class="label"><span class="lang-en">The new object</span><span class="lang-vi">Đối tượng mới</span></div>

$$
\mathbf{x}'(t)=A\mathbf{x}(t)
$$

<span class="lang-en">A system records how the current state of several quantities determines all of their rates of change.</span>
<span class="lang-vi">Một hệ ghi lại cách trạng thái hiện tại của nhiều đại lượng quyết định tất cả tốc độ thay đổi của chúng.</span>
</div>

---

# <span class="lang-en">Today's Work</span><span class="lang-vi">Nội dung hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-15</span><span><span class="lang-en"><strong>Motivation</strong> - coupled quantities and state vectors.</span><span class="lang-vi"><strong>Động lực</strong> - các đại lượng liên kết và véc-tơ trạng thái.</span></span></div>
<div class="tl-row"><span class="clock">15-40</span><span><span class="lang-en"><strong>Definition</strong> - first-order linear systems and the matrix form.</span><span class="lang-vi"><strong>Định nghĩa</strong> - hệ tuyến tính cấp một và dạng ma trận.</span></span></div>
<div class="tl-row disc"><span class="clock">40-75</span><span><span class="lang-en"><strong>Eigenvalue method</strong> - try $e^{\lambda t}\mathbf{v}$ and solve $A\mathbf{v}=\lambda\mathbf{v}$.</span><span class="lang-vi"><strong>Phương pháp trị riêng</strong> - thử $e^{\lambda t}\mathbf{v}$ và giải $A\mathbf{v}=\lambda\mathbf{v}$.</span></span></div>
<div class="tl-row break"><span class="clock">75-85</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row disc"><span class="clock">85-125</span><span><span class="lang-en"><strong>Elimination method</strong> - reduce a $2\times2$ system to a second-order equation.</span><span class="lang-vi"><strong>Phương pháp khử</strong> - đưa hệ $2\times2$ về phương trình cấp hai.</span></span></div>
<div class="tl-row"><span class="clock">125-165</span><span><span class="lang-en"><strong>Practice</strong> - solve representative homogeneous and nonhomogeneous systems.</span><span class="lang-vi"><strong>Luyện tập</strong> - giải các hệ thuần nhất và không thuần nhất tiêu biểu.</span></span></div>
<div class="tl-row"><span class="clock">165-170</span><span><span class="lang-en"><strong>Synthesis</strong> - when to use each method.</span><span class="lang-vi"><strong>Tổng kết</strong> - khi nào dùng mỗi phương pháp.</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Syllabus target: define first-order linear systems and present elimination and eigenvalue methods for constant-coefficient systems.</span>
<span class="lang-vi">Mục tiêu đề cương: định nghĩa hệ tuyến tính cấp một và trình bày phương pháp khử, phương pháp trị riêng cho hệ hệ số hằng.</span>
</div>

---
class: compact
---

# <span class="lang-en">Why Systems?</span><span class="lang-vi">Vì sao cần hệ?</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">One equation</span><span class="lang-vi">Một phương trình</span></div>
<span class="lang-en">A single unknown changes according to one rule:</span>
<span class="lang-vi">Một ẩn thay đổi theo một quy luật:</span>

$$
y'=f(t,y).
$$
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">A system</span><span class="lang-vi">Một hệ</span></div>
<span class="lang-en">Several unknowns change together:</span>
<span class="lang-vi">Nhiều ẩn thay đổi cùng nhau:</span>

$$
\begin{cases}
x'=f_1(t,x,y),\\
y'=f_2(t,x,y).
\end{cases}
$$
</div>
</div>

<div class="phase-frame">
<PhasePortrait kind="coupled" />
<div class="phase-caption"><span class="lang-en">The arrows show the velocity of the state $(x,y)$.</span><span class="lang-vi">Các mũi tên cho vận tốc của trạng thái $(x,y)$.</span></div>
</div>
</div>

<div class="refs">
<span class="lang-en">Motivation adapted from local systems notes: chemical decay, mixing tanks, and coupled engineering quantities.</span>
<span class="lang-vi">Động lực phỏng theo ghi chú hệ ODE: phân rã chất, bồn pha trộn, và các đại lượng kỹ thuật liên kết.</span>
</div>

---
class: compact
---

# <span class="lang-en">A Concrete Coupled Model</span><span class="lang-vi">Một mô hình liên kết cụ thể</span>

<div class="defn system-eq">
<div class="tag"><span class="lang-en">Chemical decay into two products</span><span class="lang-vi">Một chất phân rã thành hai sản phẩm</span></div>
<span class="lang-en">Let $x(t)$ and $y(t)$ be the amounts of two products formed from an initial amount $c$ of a substance. If each formation rate is proportional to the amount not yet transformed, then</span>
<span class="lang-vi">Gọi $x(t)$ và $y(t)$ là lượng của hai sản phẩm tạo thành từ lượng ban đầu $c$ của một chất. Nếu mỗi tốc độ tạo thành tỉ lệ với lượng chưa chuyển hóa, thì</span>

$$
\begin{cases}
\dfrac{dx}{dt}=k_1(c-x-y),\\[3pt]
\dfrac{dy}{dt}=k_2(c-x-y).
\end{cases}
$$
</div>

<div class="grid-3 mt-3">
<div class="box"><strong><span class="lang-en">State</span><span class="lang-vi">Trạng thái</span></strong><br><span class="lang-en">The pair $(x,y)$ describes the system at time $t$.</span><span class="lang-vi">Cặp $(x,y)$ mô tả hệ tại thời điểm $t$.</span></div>
<div class="box blue"><strong><span class="lang-en">Coupling</span><span class="lang-vi">Liên kết</span></strong><br><span class="lang-en">Both rates depend on both variables through $c-x-y$.</span><span class="lang-vi">Cả hai tốc độ phụ thuộc vào cả hai biến qua $c-x-y$.</span></div>
<div class="box gold"><strong><span class="lang-en">Goal</span><span class="lang-vi">Mục tiêu</span></strong><br><span class="lang-en">Find $x(t)$ and $y(t)$ from the system and initial data.</span><span class="lang-vi">Tìm $x(t)$ và $y(t)$ từ hệ và dữ kiện ban đầu.</span></div>
</div>

<div class="refs">
<span class="lang-en">Example adapted from <em>he_pt_vp_tt_version_print</em>, real-world chemical decay opening.</span>
<span class="lang-vi">Ví dụ phỏng theo <em>he_pt_vp_tt_version_print</em>, mở đầu về phân rã chất.</span>
</div>

---
class: compact
---

# <span class="lang-en">Definition: Linear System</span><span class="lang-vi">Định nghĩa: hệ tuyến tính</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">First-order linear system</span><span class="lang-vi">Hệ tuyến tính cấp một</span></div>
<span class="lang-en">A first-order linear system for $\mathbf{x}(t)\in\mathbb{R}^n$ has the form</span>
<span class="lang-vi">Một hệ tuyến tính cấp một với $\mathbf{x}(t)\in\mathbb{R}^n$ có dạng</span>

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
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Homogeneous</span><span class="lang-vi">Thuần nhất</span></div>
<span class="lang-en">The forcing term is zero:</span>
<span class="lang-vi">Vế phải phụ bằng không:</span>

$$
\mathbf{x}'=A(t)\mathbf{x}.
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Constant coefficients</span><span class="lang-vi">Hệ số hằng</span></div>
<span class="lang-en">The matrix $A$ does not depend on $t$:</span>
<span class="lang-vi">Ma trận $A$ không phụ thuộc vào $t$:</span>

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{g}(t).
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Read: local systems notes; <em>the_matrix_approach</em>, matrix form of homogeneous and nonhomogeneous systems.</span>
<span class="lang-vi">Đọc: ghi chú hệ ODE; <em>the_matrix_approach</em>, dạng ma trận của hệ thuần nhất và không thuần nhất.</span>
</div>

---
class: compact
---

# <span class="lang-en">From Equations To Matrix Form</span><span class="lang-vi">Từ phương trình sang dạng ma trận</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Two-equation system</span><span class="lang-vi">Hệ hai phương trình</span></div>

$$
\begin{cases}
x'=ax+by,\\
y'=cx+dy.
\end{cases}
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">State vector form</span><span class="lang-vi">Dạng véc-tơ trạng thái</span></div>

$$
\mathbf{x}=
\begin{bmatrix}x\\y\end{bmatrix},
\qquad
A=
\begin{bmatrix}a&b\\c&d\end{bmatrix}.
$$
</div>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Compact form</span><span class="lang-vi">Dạng gọn</span></div>

$$
\begin{bmatrix}x'\\y'\end{bmatrix}
=
\begin{bmatrix}a&b\\c&d\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
\quad\Longleftrightarrow\quad
\mathbf{x}'=A\mathbf{x}.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <em>the_matrix_approach</em>, first matrix-form slide.</span>
<span class="lang-vi">Đọc: <em>the_matrix_approach</em>, slide đầu về dạng ma trận.</span>
</div>

---
class: compact
---

# <span class="lang-en">Superposition And Fundamental Solutions</span><span class="lang-vi">Chồng chất và hệ nghiệm cơ bản</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Superposition</span><span class="lang-vi">Nguyên lý chồng chất</span></div>
<span class="lang-en">If $\mathbf{x}_1$ and $\mathbf{x}_2$ solve the homogeneous system $\mathbf{x}'=A\mathbf{x}$, then</span>
<span class="lang-vi">Nếu $\mathbf{x}_1$ và $\mathbf{x}_2$ là nghiệm của hệ thuần nhất $\mathbf{x}'=A\mathbf{x}$, thì</span>

$$
C_1\mathbf{x}_1+C_2\mathbf{x}_2
$$

<span class="lang-en">is also a solution.</span>
<span class="lang-vi">cũng là một nghiệm.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Wronskian for vector solutions</span><span class="lang-vi">Wronski cho nghiệm véc-tơ</span></div>

$$
W(t)=
\det
\begin{bmatrix}
x_1(t)&x_2(t)\\
y_1(t)&y_2(t)
\end{bmatrix}.
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">General homogeneous solution</span><span class="lang-vi">Nghiệm tổng quát thuần nhất</span></div>
<span class="lang-en">If $W(t)\ne0$, then</span><span class="lang-vi">Nếu $W(t)\ne0$, thì</span>

$$
\mathbf{x}_h=C_1\mathbf{x}_1+C_2\mathbf{x}_2.
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <em>the_matrix_approach</em>, linear independence, Wronskian, and general solution.</span>
<span class="lang-vi">Đọc: <em>the_matrix_approach</em>, độc lập tuyến tính, Wronski, và nghiệm tổng quát.</span>
</div>

---
class: compact
---

# <span class="lang-en">Eigenvalue Method: The Key Guess</span><span class="lang-vi">Phương pháp trị riêng: dạng thử chính</span>

<div class="box gold spotlight formula-stack">
<div class="label"><span class="lang-en">Try an exponential vector</span><span class="lang-vi">Thử một véc-tơ mũ</span></div>

$$
\mathbf{x}(t)=e^{\lambda t}\mathbf{v},
\qquad \mathbf{v}\ne \mathbf{0}.
$$
</div>

<div class="defn mt-3 formula-stack">
<div class="tag"><span class="lang-en">Substitute into $\mathbf{x}'=A\mathbf{x}$</span><span class="lang-vi">Thay vào $\mathbf{x}'=A\mathbf{x}$</span></div>

$$
\lambda e^{\lambda t}\mathbf{v}=Ae^{\lambda t}\mathbf{v}
\quad\Longleftrightarrow\quad
A\mathbf{v}=\lambda\mathbf{v}.
$$

<span class="lang-en">Thus $\lambda$ must be an eigenvalue and $\mathbf{v}$ an eigenvector of $A$.</span>
<span class="lang-vi">Vậy $\lambda$ phải là trị riêng và $\mathbf{v}$ là véc-tơ riêng của $A$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <em>he_pt_vp_tt_version_print</em> and <em>the_matrix_approach</em>, Euler/eigenvalue method.</span>
<span class="lang-vi">Đọc: <em>he_pt_vp_tt_version_print</em> và <em>the_matrix_approach</em>, phương pháp Euler/trị riêng.</span>
</div>

---
class: compact
---

# <span class="lang-en">Characteristic Equation</span><span class="lang-vi">Phương trình đặc trưng</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">Nonzero eigenvectors require singularity</span><span class="lang-vi">Véc-tơ riêng khác không cần ma trận suy biến</span></div>

$$
(A-\lambda I)\mathbf{v}=\mathbf{0}.
$$

<span class="lang-en">For a nonzero $\mathbf{v}$ to exist, $A-\lambda I$ must not be invertible. Therefore</span>
<span class="lang-vi">Để tồn tại $\mathbf{v}\ne\mathbf{0}$, ma trận $A-\lambda I$ phải không khả nghịch. Do đó</span>

$$
\det(A-\lambda I)=0.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">For a $2\times2$ matrix</span><span class="lang-vi">Với ma trận $2\times2$</span></div>

$$
A=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}
\quad\Rightarrow\quad
\lambda^2-(a+d)\lambda+(ad-bc)=0.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <em>the_matrix_approach</em>, characteristic equation for a $2\times2$ system.</span>
<span class="lang-vi">Đọc: <em>the_matrix_approach</em>, phương trình đặc trưng cho hệ $2\times2$.</span>
</div>

---
class: compact
---

# <span class="lang-en">Distinct Real Eigenvalues</span><span class="lang-vi">Các trị riêng thực phân biệt</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $A$ has two distinct real eigenvalues $\lambda_1\ne\lambda_2$ with eigenvectors $\mathbf{v}_1,\mathbf{v}_2$, then</span>
<span class="lang-vi">Nếu $A$ có hai trị riêng thực phân biệt $\lambda_1\ne\lambda_2$ với véc-tơ riêng $\mathbf{v}_1,\mathbf{v}_2$, thì</span>

$$
\mathbf{x}_1=e^{\lambda_1t}\mathbf{v}_1,
\qquad
\mathbf{x}_2=e^{\lambda_2t}\mathbf{v}_2
$$

<span class="lang-en">are linearly independent solutions, and</span>
<span class="lang-vi">là hai nghiệm độc lập tuyến tính, và</span>

$$
\mathbf{x}(t)=C_1e^{\lambda_1t}\mathbf{v}_1+C_2e^{\lambda_2t}\mathbf{v}_2.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <em>he_pt_vp_tt_version_print</em>, distinct eigenvalues case.</span>
<span class="lang-vi">Đọc: <em>he_pt_vp_tt_version_print</em>, trường hợp trị riêng phân biệt.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Example: Eigenvalues</span><span class="lang-vi">Ví dụ: trị riêng</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Start the system</span><span class="lang-vi">Bắt đầu giải hệ</span></div>
<span class="lang-en">Find the eigenvalues.</span>
<span class="lang-vi">Tìm các trị riêng.</span>

$$
\begin{cases}
x'=7x+3y,\\
y'=6x+4y.
\end{cases}
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Matrix and characteristic equation</span><span class="lang-vi">Ma trận và phương trình đặc trưng</span></div>

$$
A=\begin{bmatrix}7&3\\6&4\end{bmatrix},
\qquad
\det(A-\lambda I)=
\begin{vmatrix}
7-\lambda&3\\
6&4-\lambda
\end{vmatrix}.
$$

<span class="blur-step" v-click>
$$
\lambda^2-11\lambda+10=0
\quad\Rightarrow\quad
\lambda_1=1,\quad \lambda_2=10.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Example adapted from <em>he_pt_vp_tt_version_print</em> and <em>the_matrix_approach</em>.</span>
<span class="lang-vi">Ví dụ phỏng theo <em>he_pt_vp_tt_version_print</em> và <em>the_matrix_approach</em>.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Example: Eigenvectors And Solution</span><span class="lang-vi">Ví dụ: véc-tơ riêng và nghiệm</span>

<div class="solution-pair">
<div class="box formula-stack">
<div class="label"><span class="lang-en">For $\lambda_1=1$</span><span class="lang-vi">Với $\lambda_1=1$</span></div>

$$
(A-I)\mathbf{v}=\mathbf{0}
\quad\Rightarrow\quad
6p_1+3p_2=0.
$$

$$
\mathbf{v}_1=
\begin{bmatrix}1\\-2\end{bmatrix}.
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">For $\lambda_2=10$</span><span class="lang-vi">Với $\lambda_2=10$</span></div>

$$
(A-10I)\mathbf{v}=\mathbf{0}
\quad\Rightarrow\quad
-3p_1+3p_2=0.
$$

$$
\mathbf{v}_2=
\begin{bmatrix}1\\1\end{bmatrix}.
$$
</div>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">General solution</span><span class="lang-vi">Nghiệm tổng quát</span></div>

$$
\mathbf{x}(t)=
C_1e^t
\begin{bmatrix}1\\-2\end{bmatrix}
+C_2e^{10t}
\begin{bmatrix}1\\1\end{bmatrix}.
$$
</div>

<div class="refs">
<span class="lang-en">Check: $x=C_1e^t+C_2e^{10t}$ and $y=-2C_1e^t+C_2e^{10t}$.</span>
<span class="lang-vi">Kiểm tra: $x=C_1e^t+C_2e^{10t}$ và $y=-2C_1e^t+C_2e^{10t}$.</span>
</div>

---
class: compact system-bank ode-bank exercise-heavy
---

# <span class="lang-en">Your Turn: Eigenvalue Method</span><span class="lang-vi">Tự luyện: phương pháp trị riêng</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">E1</div>$$\begin{cases}x'=2x+3y,\\y'=2x+y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">$\lambda=4,-1$ with eigenvectors $\begin{bmatrix}3\\2\end{bmatrix}$ and $\begin{bmatrix}1\\-1\end{bmatrix}$.</span><span class="lang-vi">$\lambda=4,-1$ với véc-tơ riêng $\begin{bmatrix}3\\2\end{bmatrix}$ và $\begin{bmatrix}1\\-1\end{bmatrix}$.</span></div></div>
<div class="exercise-card"><div class="num">E2</div>$$\begin{cases}x'=4x-3y,\\y'=3x+4y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">$\lambda=4\pm3i$; solutions spiral outward while rotating.</span><span class="lang-vi">$\lambda=4\pm3i$; nghiệm xoắn ra xa trong khi quay.</span></div></div>
</div>

<div class="refs">
<span class="lang-en">Practice: <em>bai_tap_he_pt_vp_tt</em>, homogeneous systems; extra fluency after the matrix-method example.</span>
<span class="lang-vi">Luyện tập: <em>bai_tap_he_pt_vp_tt</em>, hệ thuần nhất; luyện thêm sau ví dụ phương pháp ma trận.</span>
</div>

---
class: compact phase-overview
---

# <span class="lang-en">Reading A Phase Portrait</span><span class="lang-vi">Đọc chân dung pha</span>

<div class="grid-3">
<div class="box">
<div class="label"><span class="lang-en">Sink</span><span class="lang-vi">Hút về cân bằng</span></div>
<div class="phase-frame short"><PhasePortrait kind="sink" /></div>
<div class="phase-caption"><span class="lang-en">Both eigenvalues negative.</span><span class="lang-vi">Cả hai trị riêng âm.</span></div>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Source</span><span class="lang-vi">Đẩy ra xa</span></div>
<div class="phase-frame short"><PhasePortrait kind="source" /></div>
<div class="phase-caption"><span class="lang-en">Both eigenvalues positive.</span><span class="lang-vi">Cả hai trị riêng dương.</span></div>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Saddle</span><span class="lang-vi">Yên ngựa</span></div>
<div class="phase-frame short"><PhasePortrait kind="saddle" /></div>
<div class="phase-caption"><span class="lang-en">Eigenvalues have opposite signs.</span><span class="lang-vi">Hai trị riêng trái dấu.</span></div>
</div>
</div>

<div class="refs">
<span class="lang-en">The eigenvectors give preferred directions; eigenvalue signs tell whether motion enters or leaves those directions.</span>
<span class="lang-vi">Véc-tơ riêng cho các hướng ưu tiên; dấu của trị riêng cho biết chuyển động đi vào hay đi ra theo các hướng đó.</span>
</div>

---
class: compact
---

# <span class="lang-en">Complex Eigenvalues</span><span class="lang-vi">Trị riêng phức</span>

<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Real solutions from a complex eigenpair</span><span class="lang-vi">Nghiệm thực từ một cặp trị riêng phức</span></div>
<span class="lang-en">Suppose $A$ is real, $\lambda=\alpha+i\beta$, and $\mathbf{v}=\mathbf{u}+i\mathbf{w}$ is an eigenvector. Then two real solutions are</span>
<span class="lang-vi">Giả sử $A$ là ma trận thực, $\lambda=\alpha+i\beta$, và $\mathbf{v}=\mathbf{u}+i\mathbf{w}$ là véc-tơ riêng. Khi đó hai nghiệm thực là</span>

$$
\mathbf{x}_1=e^{\alpha t}(\mathbf{u}\cos\beta t-\mathbf{w}\sin\beta t),
$$

$$
\mathbf{x}_2=e^{\alpha t}(\mathbf{u}\sin\beta t+\mathbf{w}\cos\beta t).
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Interpretation</span><span class="lang-vi">Diễn giải</span></div>
<span class="lang-en">The factor $e^{\alpha t}$ expands or decays; the sine and cosine create rotation.</span>
<span class="lang-vi">Nhân tử $e^{\alpha t}$ làm phóng to hoặc suy giảm; sin và cos tạo chuyển động quay.</span>
</div>
<div class="phase-frame short">
<PhasePortrait kind="spiral" />
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <em>he_pt_vp_tt_version_print</em>, complex eigenvalue case.</span>
<span class="lang-vi">Đọc: <em>he_pt_vp_tt_version_print</em>, trường hợp trị riêng phức.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Complex Example</span><span class="lang-vi">Ví dụ trị riêng phức</span>

<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Predict the shape</span><span class="lang-vi">Dự đoán dáng điệu</span></div>

$$
\begin{cases}
x'=4x-3y,\\
y'=3x+4y.
\end{cases}
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution structure</span><span class="lang-vi">Cấu trúc nghiệm</span></div>

$$
A=\begin{bmatrix}4&-3\\3&4\end{bmatrix},
\qquad
\lambda=4\pm3i.
$$

<span class="blur-step" v-click>
$$
\begin{cases}
x=e^{4t}(C_1\cos3t+C_2\sin3t),\\
y=e^{4t}(C_1\sin3t-C_2\cos3t).
\end{cases}
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Because $\alpha=4>0$, trajectories spiral away from the origin.</span>
<span class="lang-vi">Vì $\alpha=4>0$, các quỹ đạo xoắn ra xa gốc tọa độ.</span>
</div>

---
class: compact
---

# <span class="lang-en">Repeated Eigenvalues</span><span class="lang-vi">Trị riêng bội</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">What changes?</span><span class="lang-vi">Điều gì thay đổi?</span></div>
<span class="lang-en">If $\lambda_0$ is repeated, there may not be enough independent eigenvectors. In the $2\times2$ examples from the local notes, a useful form is</span>
<span class="lang-vi">Nếu $\lambda_0$ là trị riêng bội, có thể không đủ véc-tơ riêng độc lập. Trong các ví dụ $2\times2$ của ghi chú địa phương, dạng hữu ích là</span>

$$
\mathbf{x}(t)=e^{\lambda_0 t}
\begin{bmatrix}
a_1t+a_2\\
b_1t+b_2
\end{bmatrix}.
$$
</div>

<div class="box gold mt-3 formula-stack">
<div class="label"><span class="lang-en">Example from the notes</span><span class="lang-vi">Ví dụ từ ghi chú</span></div>

$$
\begin{cases}
x'=5x-y,\\
y'=x+3y
\end{cases}
\quad\Rightarrow\quad
\lambda=4 \text{ repeated}.
$$

$$
\begin{cases}
x=e^{4t}(C_1t+C_2),\\
y=e^{4t}(C_1t+C_2-C_1).
\end{cases}
$$
</div>

<div class="refs">
<span class="lang-en">Read: <em>he_pt_vp_tt_version_print</em> and the short notes for the full repeated-eigenvalue calculation.</span>
<span class="lang-vi">Đọc: <em>he_pt_vp_tt_version_print</em> và ghi chú ngắn để xem đầy đủ phép tính cho trị riêng bội.</span>
</div>

---
class: compact
---

# <span class="lang-en">Elimination Method</span><span class="lang-vi">Phương pháp khử</span>

<div class="defn system-eq">
<div class="tag"><span class="lang-en">Start with a $2\times2$ homogeneous system</span><span class="lang-vi">Bắt đầu với hệ thuần nhất $2\times2$</span></div>

$$
\begin{cases}
x'=ax+by,\\
y'=cx+dy.
\end{cases}
$$

<span class="lang-en">If $b\ne0$, solve the first equation for $y$, then differentiate:</span>
<span class="lang-vi">Nếu $b\ne0$, giải phương trình đầu theo $y$, rồi lấy đạo hàm:</span>

$$
y=\frac{x'-ax}{b},
\qquad
y'=\frac{x''-ax'}{b}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Substitute into the second equation</span><span class="lang-vi">Thay vào phương trình thứ hai</span></div>

$$
x''-(a+d)x'+(ad-bc)x=0.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <em>elimination_method</em> and <em>phuong_phap_khu</em>, reduction to a second-order equation.</span>
<span class="lang-vi">Đọc: <em>elimination_method</em> và <em>phuong_phap_khu</em>, đưa về phương trình cấp hai.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Same Example By Elimination</span><span class="lang-vi">Cùng ví dụ bằng phương pháp khử</span>

<div class="your-turn">
<span class="timechip">5 min</span>
<div class="label"><span class="lang-en">Use the first equation</span><span class="lang-vi">Dùng phương trình đầu</span></div>

$$
\begin{cases}
x'=7x+3y,\\
y'=6x+4y.
\end{cases}
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Reduce to one equation</span><span class="lang-vi">Đưa về một phương trình</span></div>

$$
y=\frac{x'-7x}{3},
\qquad
y'=\frac{x''-7x'}{3}.
$$

<span class="blur-step" v-click>
$$
\frac{x''-7x'}{3}=6x+4\frac{x'-7x}{3}
\quad\Rightarrow\quad
x''-11x'+10x=0.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">This produces the same characteristic roots $1$ and $10$ as the matrix method.</span>
<span class="lang-vi">Cách này cho cùng nghiệm đặc trưng $1$ và $10$ như phương pháp ma trận.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Finish The Elimination Solution</span><span class="lang-vi">Hoàn tất lời giải bằng khử</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Solve the second-order equation</span><span class="lang-vi">Giải phương trình cấp hai</span></div>

$$
x''-11x'+10x=0
\quad\Rightarrow\quad
x=C_1e^t+C_2e^{10t}.
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Recover $y$</span><span class="lang-vi">Tìm lại $y$</span></div>

$$
x'=C_1e^t+10C_2e^{10t},
$$

$$
y=\frac{x'-7x}{3}
=-2C_1e^t+C_2e^{10t}.
$$
</div>

<div class="refs">
<span class="lang-en">Elimination is familiar because it uses second-order ODEs. The eigenvalue method is usually shorter for systems.</span>
<span class="lang-vi">Phương pháp khử quen thuộc vì dùng ODE cấp hai. Phương pháp trị riêng thường ngắn hơn cho hệ.</span>
</div>

---
class: compact system-bank ode-bank exercise-heavy
---

# <span class="lang-en">Your Turn: Elimination</span><span class="lang-vi">Tự luyện: phương pháp khử</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">K1</div>$$\begin{cases}x'=-x+3y,\\y'=-3x+5y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">From $y=(x'+x)/3$, get $x''-4x'+4x=0$.</span><span class="lang-vi">Từ $y=(x'+x)/3$, thu được $x''-4x'+4x=0$.</span></div></div>
<div class="exercise-card"><div class="num">K2</div><span class="lang-en">Finish K1.</span><span class="lang-vi">Hoàn tất K1.</span><div class="inline-answer blur-step" v-click>$$x=(C_1+C_2t)e^{2t},\quad y=\left(C_1+C_2t+\frac{C_2}{3}\right)e^{2t}.$$</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice: <em>bai_tap_he_pt_vp_tt</em>, homogeneous systems; extra fluency with elimination.</span>
<span class="lang-vi">Luyện tập: <em>bai_tap_he_pt_vp_tt</em>, hệ thuần nhất; luyện thêm phương pháp khử.</span>
</div>

---
class: compact
---

# <span class="lang-en">Nonhomogeneous Systems</span><span class="lang-vi">Hệ không thuần nhất</span>

<div class="defn formula-stack">
<div class="tag"><span class="lang-en">Constant-coefficient nonhomogeneous form</span><span class="lang-vi">Dạng không thuần nhất hệ số hằng</span></div>

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t),
\qquad
\mathbf{f}(t)=
\begin{bmatrix}
f_1(t)\\
f_2(t)
\end{bmatrix}.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Elimination route</span><span class="lang-vi">Hướng khử</span></div>
<span class="lang-en">Eliminate one variable and solve a nonhomogeneous second-order equation.</span>
<span class="lang-vi">Khử một biến và giải một phương trình cấp hai không thuần nhất.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Matrix route</span><span class="lang-vi">Hướng ma trận</span></div>
<span class="lang-en">Find the homogeneous solution first, then use variation of constants if needed.</span>
<span class="lang-vi">Tìm nghiệm thuần nhất trước, rồi dùng biến thiên hằng số khi cần.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <em>he_pt_vp_tt_version_print</em>, nonhomogeneous definition, elimination, and variation of constants.</span>
<span class="lang-vi">Đọc: <em>he_pt_vp_tt_version_print</em>, định nghĩa hệ không thuần nhất, khử, và biến thiên hằng số.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Nonhomogeneous Example: Reduce</span><span class="lang-vi">Ví dụ không thuần nhất: đưa về một phương trình</span>

<div class="your-turn">
<span class="timechip">5 min</span>
<div class="label"><span class="lang-en">Eliminate $x$ using the second equation</span><span class="lang-vi">Khử $x$ bằng phương trình thứ hai</span></div>

$$
\begin{cases}
x'=4x-3y+e^{-t},\\
y'=2x-y.
\end{cases}
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Substitution</span><span class="lang-vi">Thay thế</span></div>

$$
x=\frac{y'+y}{2},
\qquad
x'=\frac{y''+y'}{2}.
$$

<span class="blur-step" v-click>
$$
\frac{y''+y'}{2}
=4\frac{y'+y}{2}-3y+e^{-t}
\quad\Rightarrow\quad
y''-3y'+2y=2e^{-t}.
$$
</span>
</div>

<div class="refs">
<span class="lang-en">Example adapted from <em>he_pt_vp_tt_version_print</em>, nonhomogeneous elimination.</span>
<span class="lang-vi">Ví dụ phỏng theo <em>he_pt_vp_tt_version_print</em>, phương pháp khử cho hệ không thuần nhất.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Nonhomogeneous Example: Finish</span><span class="lang-vi">Ví dụ không thuần nhất: hoàn tất</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Solve for $y$</span><span class="lang-vi">Giải theo $y$</span></div>

$$
y''-3y'+2y=2e^{-t}.
$$

<span class="blur-step" v-click>
$$
y=C_1e^t+C_2e^{2t}+\frac13e^{-t}.
$$
</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Recover $x$</span><span class="lang-vi">Tìm lại $x$</span></div>

<span class="blur-step" v-click>
$$
x=\frac{y'+y}{2}
=C_1e^t+\frac32C_2e^{2t}.
$$
</span>

$$
\begin{cases}
x=C_1e^t+\dfrac32C_2e^{2t},\\
y=C_1e^t+C_2e^{2t}+\dfrac13e^{-t}.
\end{cases}
$$
</div>

<div class="refs">
<span class="lang-en">The constants can be renamed, so equivalent forms of the answer may look slightly different.</span>
<span class="lang-vi">Có thể đổi tên hằng số, nên các dạng tương đương của đáp án có thể nhìn hơi khác nhau.</span>
</div>

---
class: compact
---

# <span class="lang-en">Which Method Should I Use?</span><span class="lang-vi">Nên dùng phương pháp nào?</span>

<div class="method-strip">
<div class="box">
<strong><span class="lang-en">Eigenvalues</span><span class="lang-vi">Trị riêng</span></strong>
<span class="lang-en">Best for homogeneous constant-coefficient systems, especially when the matrix language is natural.</span>
<span class="lang-vi">Tốt nhất cho hệ thuần nhất hệ số hằng, nhất là khi ngôn ngữ ma trận tự nhiên.</span>
</div>
<div class="box blue">
<strong><span class="lang-en">Elimination</span><span class="lang-vi">Khử</span></strong>
<span class="lang-en">Good for $2\times2$ systems when one variable is easy to remove.</span>
<span class="lang-vi">Tốt cho hệ $2\times2$ khi một biến dễ khử.</span>
</div>
<div class="box gold">
<strong><span class="lang-en">Variation of constants</span><span class="lang-vi">Biến thiên hằng số</span></strong>
<span class="lang-en">Useful for nonhomogeneous systems after the homogeneous system is understood.</span>
<span class="lang-vi">Hữu ích cho hệ không thuần nhất sau khi đã hiểu hệ thuần nhất.</span>
</div>
</div>

<div class="your-turn mt-3">
<span class="timechip">2 min</span>
<div class="label"><span class="lang-en">Decision prompt</span><span class="lang-vi">Câu hỏi chọn phương pháp</span></div>
<span class="lang-en">For a $3\times3$ homogeneous constant-coefficient system, which method would you prefer and why?</span>
<span class="lang-vi">Với một hệ thuần nhất hệ số hằng $3\times3$, bạn thích phương pháp nào hơn và vì sao?</span>
</div>

<div class="refs">
<span class="lang-en">Syllabus asks for elimination and eigenvalue methods. Variation of constants is a reference extension.</span>
<span class="lang-vi">Đề cương yêu cầu phương pháp khử và trị riêng. Biến thiên hằng số là phần mở rộng tham khảo.</span>
</div>

---
class: compact system-bank ode-bank exercise-heavy
---

# <span class="lang-en">Practice Bank: Homogeneous</span><span class="lang-vi">Ngân hàng: hệ thuần nhất</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">H1</div>$$\begin{cases}x'=2x+3y,\\y'=2x+y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">Find eigenvalues/eigenvectors. Check if the eigenvalues are distinct.</span><span class="lang-vi">Tìm trị riêng/véc-tơ riêng. Kiểm tra trị riêng có phân biệt không.</span></div></div>
<div class="exercise-card"><div class="num">H2</div>$$\begin{cases}x'=-x+3y,\\y'=-3x+5y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">Use the matrix method or eliminate one variable.</span><span class="lang-vi">Dùng phương pháp ma trận hoặc khử một biến.</span></div></div>
<div class="exercise-card"><div class="num">H3</div>$$\begin{cases}x'=6x-y,\\y'=5x+2y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">Start with $\det(A-\lambda I)=0$.</span><span class="lang-vi">Bắt đầu với $\det(A-\lambda I)=0$.</span></div></div>
<div class="exercise-card"><div class="num">H4</div>$$\begin{cases}x'=4x-3y,\\y'=3x+4y.\end{cases}$$<div class="inline-answer blur-step" v-click>$x=e^{4t}(C_1\cos3t+C_2\sin3t)$, $y=e^{4t}(C_1\sin3t-C_2\cos3t)$.</div></div>
</div>

<div class="refs">
<span class="lang-en">Practice: <em>bai_tap_he_pt_vp_tt</em>, homogeneous system exercises.</span>
<span class="lang-vi">Luyện tập: <em>bai_tap_he_pt_vp_tt</em>, bài tập hệ thuần nhất.</span>
</div>

---
class: compact system-bank ode-bank exercise-heavy
---

# <span class="lang-en">Practice Bank: Nonhomogeneous</span><span class="lang-vi">Ngân hàng: hệ không thuần nhất</span>

<div class="exercise-grid">
<div class="exercise-card"><div class="num">N1</div>$$\begin{cases}x'=-3x+y+3t,\\y'=2x-4y+e^{-t}.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">Eliminate one variable, then solve the resulting nonhomogeneous equation.</span><span class="lang-vi">Khử một biến, rồi giải phương trình không thuần nhất thu được.</span></div></div>
<div class="exercise-card"><div class="num">N2</div>$$\begin{cases}x'=x+2y+e^t,\\y'=-x+3y.\end{cases}$$<div class="inline-answer blur-step" v-click><span class="lang-en">Find the homogeneous system first, then one particular solution.</span><span class="lang-vi">Tìm hệ thuần nhất trước, rồi tìm một nghiệm riêng.</span></div></div>
<div class="exercise-card"><div class="num">N3</div>$$\begin{cases}x'=4x-3y+e^{-t},\\y'=2x-y.\end{cases}$$<div class="inline-answer blur-step" v-click>$x=C_1e^t+\dfrac32C_2e^{2t}$, $y=C_1e^t+C_2e^{2t}+\dfrac13e^{-t}$.</div></div>
<div class="exercise-card"><div class="num">N4</div><span class="lang-en">For any system, first ask: homogeneous or nonhomogeneous?</span><span class="lang-vi">Với mọi hệ, trước hết hỏi: thuần nhất hay không thuần nhất?</span><div class="inline-answer blur-step" v-click><span class="lang-en">Then choose eigenvalues, elimination, or variation of constants.</span><span class="lang-vi">Rồi chọn trị riêng, khử, hoặc biến thiên hằng số.</span></div></div>
</div>

<div class="refs">
<span class="lang-en">Practice: <em>bai_tap_he_pt_vp_tt</em>, nonhomogeneous system exercises.</span>
<span class="lang-vi">Luyện tập: <em>bai_tap_he_pt_vp_tt</em>, bài tập hệ không thuần nhất.</span>
</div>

---
class: compact
---

# <span class="lang-en">What To Remember</span><span class="lang-vi">Cần nhớ điều gì</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Concept</span><span class="lang-vi">Khái niệm</span></div>
<span class="lang-en">A system studies a state vector. The derivative of the state is another vector.</span>
<span class="lang-vi">Một hệ nghiên cứu véc-tơ trạng thái. Đạo hàm của trạng thái cũng là một véc-tơ.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Matrix form</span><span class="lang-vi">Dạng ma trận</span></div>
<span class="lang-en">For constant coefficients, write $\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)$.</span>
<span class="lang-vi">Với hệ số hằng, viết $\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)$.</span>
</div>
<div class="box">
<div class="label"><span class="lang-en">Eigenvalue method</span><span class="lang-vi">Phương pháp trị riêng</span></div>
<span class="lang-en">Try $\mathbf{x}=e^{\lambda t}\mathbf{v}$. This turns the ODE into linear algebra.</span>
<span class="lang-vi">Thử $\mathbf{x}=e^{\lambda t}\mathbf{v}$. Việc này biến ODE thành đại số tuyến tính.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Elimination method</span><span class="lang-vi">Phương pháp khử</span></div>
<span class="lang-en">For $2\times2$ systems, remove one variable and solve a second-order ODE.</span>
<span class="lang-vi">Với hệ $2\times2$, khử một biến và giải ODE cấp hai.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">After class: read the short notes and work the practice bank from the local exercise PDF.</span>
<span class="lang-vi">Sau giờ học: đọc ghi chú ngắn và làm ngân hàng bài tập từ PDF bài tập địa phương.</span>
</div>

---
class: compact
---

# <span class="lang-en">Reading And References</span><span class="lang-vi">Tài liệu đọc và tham khảo</span>

<div class="source-list">
<div class="box">
<span class="source-chip">Slidev</span>
<span class="lang-en">Short notes for this lecture: <a href="../../sessions/12-systems-of-odes/">Systems of First-Order Linear ODEs</a>.</span>
<span class="lang-vi">Ghi chú ngắn cho buổi này: <a href="../../sessions/12-systems-of-odes/">Hệ ODE tuyến tính cấp một</a>.</span>
</div>
<div class="box blue">
<span class="source-chip">Local notes</span>
<span class="lang-en"><em>system_of_first_order_linear_equations</em>, <em>the_matrix_approach</em>, <em>he_pt_vp_tt_version_print</em>, and <em>bai_tap_he_pt_vp_tt</em>.</span>
<span class="lang-vi"><em>system_of_first_order_linear_equations</em>, <em>the_matrix_approach</em>, <em>he_pt_vp_tt_version_print</em>, và <em>bai_tap_he_pt_vp_tt</em>.</span>
</div>
<div class="box gold">
<span class="source-chip">Textbooks</span>
<span class="lang-en">Use the course reading map for ODE background. Stewart 9.6 gives modeling context; local notes give the linear-system methods.</span>
<span class="lang-vi">Dùng bản đồ đọc của môn cho nền tảng ODE. Stewart 9.6 cho bối cảnh mô hình hóa; ghi chú địa phương cung cấp các phương pháp cho hệ tuyến tính.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Acknowledgment: many examples and exercises are adapted from materials by Dr. Lê Xuân Đại.</span>
<span class="lang-vi">Lời cảm ơn: nhiều ví dụ và bài tập được biên soạn dựa trên tài liệu của TS. Lê Xuân Đại.</span>
</div>
