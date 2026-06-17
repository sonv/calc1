---
theme: default
title: "Calculus 1 - Review of Functions"
info: "MT1003 Calculus 1, Session 01"
transition: slide-left
download: "../../pdfs/functions.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Review of Functions</span><span class="lang-vi">Ôn tập hàm số</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Session 01</span>
<span class="lang-vi">MT1003 Giải tích 1 - Buổi 01</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn học</a>.</span>
</div>

---

# <span class="lang-en">Why Calculus?</span><span class="lang-vi">Vì sao học giải tích?</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">The short answer</span><span class="lang-vi">Câu trả lời ngắn</span></div>
<span class="lang-en">Calculus is the language for describing <strong>change</strong>, <strong>accumulation</strong>, and <strong>optimization</strong>.</span>
<span class="lang-vi">Giải tích là ngôn ngữ để mô tả <strong>sự biến thiên</strong>, <strong>sự tích lũy</strong>, và <strong>sự tối ưu</strong>.</span>
</div>

<div class="grid-3 mt-4">
<div class="box"><div class="label"><span class="lang-en">Motion</span><span class="lang-vi">Chuyển động</span></div><span class="lang-en">How does position change with time?</span><span class="lang-vi">Vị trí thay đổi theo thời gian như thế nào?</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Fields</span><span class="lang-vi">Trường</span></div><span class="lang-en">How do quantities vary from point to point?</span><span class="lang-vi">Các đại lượng thay đổi từ điểm này sang điểm khác như thế nào?</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Learning</span><span class="lang-vi">Học máy</span></div><span class="lang-en">How do we improve a model by changing its parameters?</span><span class="lang-vi">Ta cải thiện mô hình bằng cách thay đổi tham số như thế nào?</span></div>
</div>

<div class="refs">
<span class="lang-en">Motivation: functions are the objects that change; calculus measures and controls that change.</span>
<span class="lang-vi">Động lực: hàm số là những đối tượng biến thiên; giải tích đo và điều khiển sự biến thiên đó.</span>
</div>

---
layout: center
class: sim
---

<SimBackground kind="fluid" />

# <span class="lang-en">Navier-Stokes: Fluid Motion</span><span class="lang-vi">Navier-Stokes: chuyển động chất lưu</span>

<div class="sim-panel">
<div class="label"><span class="lang-en">Fluid mechanics</span><span class="lang-vi">Cơ học chất lưu</span></div>

$$
\rho\left(\frac{\partial \mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u\right)
=-\nabla p+\mu\Delta\mathbf u+\mathbf f
$$

<span class="lang-en">The velocity field $\mathbf u(x,y,z,t)$ changes in time and space. Calculus measures acceleration, pressure gradients, and diffusion of momentum.</span>
<span class="lang-vi">Trường vận tốc $\mathbf u(x,y,z,t)$ thay đổi theo thời gian và không gian. Giải tích đo gia tốc, gradient áp suất, và sự khuếch tán động lượng.</span>
</div>

---
layout: center
class: sim
---

<SimBackground kind="maxwell" />

# <span class="lang-en">Maxwell: Fields And Waves</span><span class="lang-vi">Maxwell: trường và sóng</span>

<div class="sim-panel">
<div class="label"><span class="lang-en">Electromagnetism</span><span class="lang-vi">Điện từ học</span></div>

$$
\begin{aligned}
\nabla\cdot\mathbf E
  &= \frac{\rho}{\varepsilon_0},\\
\nabla\cdot\mathbf B
  &= 0,\\
\nabla\times\mathbf E
  &= -\frac{\partial\mathbf B}{\partial t},\\
\nabla\times\mathbf B
  &= \mu_0\mathbf J
     +\mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t}.
\end{aligned}
$$

<span class="lang-en">Electric and magnetic fields are functions on space and time. The symbols $\nabla\cdot$, $\nabla\times$, and $\frac{\partial}{\partial t}$ describe how those fields vary.</span>
<span class="lang-vi">Điện trường và từ trường là các hàm theo không gian và thời gian. Các ký hiệu $\nabla\cdot$, $\nabla\times$, và $\frac{\partial}{\partial t}$ mô tả cách các trường đó biến thiên.</span>
</div>

---
layout: center
class: sim
---

<SimBackground kind="relativity" />

# <span class="lang-en">Einstein: Space-Time Curvature</span><span class="lang-vi">Einstein: độ cong không-thời gian</span>

<div class="sim-panel">
<div class="label"><span class="lang-en">Relativity</span><span class="lang-vi">Thuyết tương đối</span></div>

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=\frac{8\pi G}{c^4}T_{\mu\nu}
$$

<span class="lang-en">Geometry tells matter how to move; matter tells geometry how to curve. Calculus enters through curvature, rates of change, and differential geometry.</span>
<span class="lang-vi">Hình học cho vật chất biết cách chuyển động; vật chất cho hình học biết cách cong. Giải tích xuất hiện qua độ cong, tốc độ biến thiên, và hình học vi phân.</span>
</div>

---
layout: center
class: sim
---

<SimBackground kind="quantum" />

# <span class="lang-en">Schrodinger: Quantum Waves</span><span class="lang-vi">Schrodinger: sóng lượng tử</span>

<div class="sim-panel">
<div class="label"><span class="lang-en">Quantum mechanics</span><span class="lang-vi">Cơ học lượng tử</span></div>

$$
i\hbar\frac{\partial\psi}{\partial t}
=\widehat H\psi
$$

<span class="lang-en">The wave function $\psi$ evolves according to a differential equation. Here calculus describes how probability waves move, spread, and interfere.</span>
<span class="lang-vi">Hàm sóng $\psi$ tiến hóa theo một phương trình vi phân. Ở đây giải tích mô tả cách sóng xác suất chuyển động, lan ra, và giao thoa.</span>
</div>

---
layout: center
class: sim
---

<SimBackground kind="gradient" />

# <span class="lang-en">AI: Learning By Gradients</span><span class="lang-vi">AI: học bằng gradient</span>

<div class="sim-panel">
<div class="label"><span class="lang-en">Optimization and backpropagation</span><span class="lang-vi">Tối ưu và lan truyền ngược</span></div>

$$
L(\theta)=\frac1N\sum_{i=1}^N
\ell\big(f_\theta(x_i),y_i\big),
\qquad
\theta_{k+1}=\theta_k-\eta\nabla_\theta L(\theta_k)
$$

<span class="lang-en">Backpropagation is repeated use of the chain rule to compute gradients efficiently. Modern AI learns by following those gradients.</span>
<span class="lang-vi">Lan truyền ngược là việc dùng lặp lại quy tắc dây chuyền để tính gradient hiệu quả. AI hiện đại học bằng cách đi theo các gradient đó.</span>
</div>

---

# <span class="lang-en">What Calculus 1 Starts Building</span><span class="lang-vi">Giải tích 1 bắt đầu xây điều gì?</span>

<div class="grid-4">
<div class="kpi"><span class="pill">1</span><strong><span class="lang-en">Functions</span><span class="lang-vi">Hàm số</span></strong><br><span class="lang-en">inputs, outputs, models</span><span class="lang-vi">đầu vào, đầu ra, mô hình</span></div>
<div class="kpi"><span class="pill">2</span><strong><span class="lang-en">Limits</span><span class="lang-vi">Giới hạn</span></strong><br><span class="lang-en">approach and approximation</span><span class="lang-vi">tiến gần và xấp xỉ</span></div>
<div class="kpi"><span class="pill">3</span><strong><span class="lang-en">Derivatives</span><span class="lang-vi">Đạo hàm</span></strong><br><span class="lang-en">instantaneous change</span><span class="lang-vi">biến thiên tức thời</span></div>
<div class="kpi"><span class="pill">4</span><strong><span class="lang-en">Integrals</span><span class="lang-vi">Tích phân</span></strong><br><span class="lang-en">accumulated change</span><span class="lang-vi">biến thiên tích lũy</span></div>
</div>

<div class="box gold mt-4">
<div class="label"><span class="lang-en">Today</span><span class="lang-vi">Hôm nay</span></div>
<span class="lang-en">We begin with functions because every equation above describes relationships between changing quantities.</span>
<span class="lang-vi">Ta bắt đầu với hàm số vì mỗi phương trình ở trên đều mô tả quan hệ giữa các đại lượng đang biến thiên.</span>
</div>

<div class="refs">
<span class="lang-en">Bridge: functions first, then limits, derivatives, integrals, and differential equations.</span>
<span class="lang-vi">Cầu nối: hàm số trước, rồi giới hạn, đạo hàm, tích phân, và phương trình vi phân.</span>
</div>

---

# <span class="lang-en">Today</span><span class="lang-vi">Hôm nay</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">In class</span><span class="lang-vi">Trong lớp</span></div>
<ul>
<li><span class="lang-en">functions as models of changing quantities</span><span class="lang-vi">hàm số như mô hình của các đại lượng biến thiên</span></li>
<li><span class="lang-en">average rate of change as the bridge to derivatives</span><span class="lang-vi">tốc độ biến thiên trung bình như cầu nối đến đạo hàm</span></li>
<li><span class="lang-en">linear and quadratic functions as anchor models</span><span class="lang-vi">hàm tuyến tính và bậc hai như các mô hình neo</span></li>
</ul>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">For reading</span><span class="lang-vi">Để đọc thêm</span></div>
<ul>
<li><span class="lang-en">composition, inverse functions, transformations</span><span class="lang-vi">hàm hợp, hàm ngược, biến đổi đồ thị</span></li>
<li><span class="lang-en">combining functions into new models</span><span class="lang-vi">kết hợp hàm số thành mô hình mới</span></li>
<li><span class="lang-en">elementary function families for practice</span><span class="lang-vi">các họ hàm sơ cấp để luyện tập</span></li>
</ul>
</div>
</div>

<div class="box gold mt-6">
<div class="label"><span class="lang-en">Next class</span><span class="lang-vi">Buổi sau</span></div>
<span class="lang-en">Sequences begin next class, after the function review is solid.</span>
<span class="lang-vi">Buổi sau bắt đầu dãy số, sau khi phần ôn hàm số đã vững.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-functions-models.html">Active Prelude 1.2</a>-<a href="https://activecalculus.org/prelude/sec-changing-combining.html">1.9</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions">OpenStax 1.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions">1.5</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-functions-models.html">Active Prelude 1.2</a>-<a href="https://activecalculus.org/prelude/sec-changing-combining.html">1.9</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions">OpenStax 1.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions">1.5</a>.</span>
</div>

---

# <span class="lang-en">Course Rhythm</span><span class="lang-vi">Nhịp học của môn</span>

<div class="grid-3">
<div class="box"><div class="label"><span class="lang-en">Before class</span><span class="lang-vi">Trước giờ học</span></div><span class="lang-en">Read the assigned sections and try the warm-up questions.</span><span class="lang-vi">Đọc các mục được giao và thử các câu hỏi khởi động.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">In class</span><span class="lang-vi">Trong lớp</span></div><span class="lang-en">Work through prompts, examples, and quick checks.</span><span class="lang-vi">Cùng xử lý câu hỏi gợi mở, ví dụ, và kiểm tra nhanh.</span></div>
<div class="box gold"><div class="label"><span class="lang-en">After class</span><span class="lang-vi">Sau giờ học</span></div><span class="lang-en">Use the short notes for the linked practice bank.</span><span class="lang-vi">Dùng ghi chú ngắn cho danh sách bài tập có liên kết.</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="../../readings/">course readings</a>; practice from the <a href="../../sessions/01-functions-sequences/">Session 01 short notes</a>.</span>
<span class="lang-vi">Đọc: <a href="../../readings/">tài liệu đọc của môn</a>; luyện tập theo <a href="../../sessions/01-functions-sequences/">ghi chú ngắn Buổi 01</a>.</span>
</div>

---

# <span class="lang-en">Review Roadmap</span><span class="lang-vi">Lộ trình ôn tập</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Purpose</span><span class="lang-vi">Mục đích</span></div>
<span class="lang-en">This is a map of the function ideas we need for calculus. The details live in the readings.</span>
<span class="lang-vi">Đây là bản đồ các ý tưởng về hàm số cần cho giải tích. Chi tiết nằm trong phần đọc.</span>
</div>

<div class="grid-3 mt-5">
<div class="box"><div class="label"><span class="lang-en">Model</span><span class="lang-vi">Mô hình hóa</span></div><span class="lang-en">functions describe dependence between changing quantities</span><span class="lang-vi">hàm số mô tả sự phụ thuộc giữa các đại lượng biến thiên</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Measure</span><span class="lang-vi">Đo lường</span></div><span class="lang-en">average rate of change previews derivatives</span><span class="lang-vi">tốc độ biến thiên trung bình chuẩn bị cho đạo hàm</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Build</span><span class="lang-vi">Xây dựng</span></div><span class="lang-en">compose, invert, transform, and combine functions</span><span class="lang-vi">hợp, đảo, biến đổi, và kết hợp hàm số</span></div>
</div>

<div class="refs">
<span class="lang-en">Reading spine: <a href="https://activecalculus.org/prelude/C-changing.html">Active Prelude Chapter 1</a>, especially Sections 1.2-1.9.</span>
<span class="lang-vi">Trục đọc: <a href="https://activecalculus.org/prelude/C-changing.html">Active Prelude Chương 1</a>, đặc biệt các Mục 1.2-1.9.</span>
</div>

---

# <span class="lang-en">Functions As Models</span><span class="lang-vi">Hàm số như mô hình</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Core idea</span><span class="lang-vi">Ý tưởng cốt lõi</span></div>
<span class="lang-en">A function packages a relationship: one input determines one output.</span>
<span class="lang-vi">Một hàm số đóng gói một quan hệ: một đầu vào xác định một đầu ra.</span>
$$
\text{input } x \longmapsto \text{output } f(x)
$$
</div>
<div class="box">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">Dolbear's law models temperature from cricket chirps:</span>
<span class="lang-vi">Định luật Dolbear mô hình hóa nhiệt độ từ tiếng dế kêu:</span>
$$
T(N)=40+0.25N,\qquad T(92)=63
$$
</div>
</div>

<div class="grid-4 mt-5">
<div class="kpi"><span class="pill">1</span><strong><span class="lang-en">Words</span><span class="lang-vi">Lời</span></strong><br><span class="lang-en">what changes</span><span class="lang-vi">điều gì thay đổi</span></div>
<div class="kpi"><span class="pill">2</span><strong><span class="lang-en">Table</span><span class="lang-vi">Bảng</span></strong><br><span class="lang-en">sample values</span><span class="lang-vi">giá trị mẫu</span></div>
<div class="kpi"><span class="pill">3</span><strong><span class="lang-en">Graph</span><span class="lang-vi">Đồ thị</span></strong><br><span class="lang-en">shape and trend</span><span class="lang-vi">hình dạng và xu hướng</span></div>
<div class="kpi"><span class="pill">4</span><strong><span class="lang-en">Formula</span><span class="lang-vi">Công thức</span></strong><br><span class="lang-en">calculation rule</span><span class="lang-vi">quy tắc tính</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-functions-models.html">Active Prelude 1.2: Functions: Modeling Relationships</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-functions-models.html">Active Prelude 1.2: Hàm số và mô hình hóa quan hệ</a>.</span>
</div>

---

# <span class="lang-en">Domain, Range, And Graph</span><span class="lang-vi">Miền xác định, miền giá trị, và đồ thị</span>

<div class="grid-3">
<div class="box"><div class="label"><span class="lang-en">Domain</span><span class="lang-vi">Miền xác định</span></div><span class="lang-en">allowed inputs; for $f(x)=\sqrt{9-x^2}$, $-3\le x\le3$</span><span class="lang-vi">đầu vào được phép; với $f(x)=\sqrt{9-x^2}$, $-3\le x\le3$</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Range</span><span class="lang-vi">Miền giá trị</span></div><span class="lang-en">possible outputs; here $0\le f(x)\le3$</span><span class="lang-vi">đầu ra có thể có; ở đây $0\le f(x)\le3$</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Graph</span><span class="lang-vi">Đồ thị</span></div><span class="lang-en">all points $(x,f(x))$; here the upper semicircle</span><span class="lang-vi">mọi điểm $(x,f(x))$; ở đây là nửa đường tròn trên</span></div>
</div>

<div class="box gold mt-6">
<div class="label"><span class="lang-en">Function test</span><span class="lang-vi">Kiểm tra hàm số</span></div>
<span class="lang-en">A relationship is a function when each input has exactly one output. On a graph, vertical lines should hit at most once.</span>
<span class="lang-vi">Một quan hệ là hàm số khi mỗi đầu vào có đúng một đầu ra. Trên đồ thị, mỗi đường thẳng đứng cắt nhiều nhất một lần.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-functions-models.html">Active Prelude 1.2</a>; routine practice in <a href="https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions">OpenStax 1.1</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-functions-models.html">Active Prelude 1.2</a>; luyện cơ bản trong <a href="https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions">OpenStax 1.1</a>.</span>
</div>

---

# <span class="lang-en">Average Rate Of Change</span><span class="lang-vi">Tốc độ biến thiên trung bình</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Bridge to calculus</span><span class="lang-vi">Cầu nối đến giải tích</span></div>
<span class="lang-en">Before instantaneous change, we measure change over an interval.</span>
<span class="lang-vi">Trước khi nói đến biến thiên tức thời, ta đo biến thiên trên một khoảng.</span>
$$
\operatorname{AROC}_{[a,b]}(f)=\frac{f(b)-f(a)}{b-a}
$$
<div class="mini">
<span class="lang-en">Example: for $f(t)=t^2$ on $[1,3]$, $\frac{9-1}{3-1}=4$.</span>
<span class="lang-vi">Ví dụ: với $f(t)=t^2$ trên $[1,3]$, $\frac{9-1}{3-1}=4$.</span>
</div>
</div>

<div class="grid-3 mt-5">
<div class="box"><div class="label"><span class="lang-en">Units</span><span class="lang-vi">Đơn vị</span></div><span class="lang-en">output units per input unit</span><span class="lang-vi">đơn vị đầu ra trên mỗi đơn vị đầu vào</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Graph</span><span class="lang-vi">Đồ thị</span></div><span class="lang-en">slope of a secant line</span><span class="lang-vi">hệ số góc của dây cung</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Later</span><span class="lang-vi">Sau này</span></div><span class="lang-en">letting the interval shrink leads to derivatives</span><span class="lang-vi">cho khoảng co lại dẫn đến đạo hàm</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-aroc.html">Active Prelude 1.3: The Average Rate of Change of a Function</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-aroc.html">Active Prelude 1.3: Tốc độ biến thiên trung bình của hàm số</a>.</span>
</div>

---

# <span class="lang-en">Linear Models</span><span class="lang-vi">Mô hình tuyến tính</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">Constant rate</span><span class="lang-vi">Tốc độ không đổi</span></div>
$$
f(x)=mx+b
$$
<span class="lang-en">For a linear function, average rate of change is the same on every interval: it is the slope $m$.</span>
<span class="lang-vi">Với hàm tuyến tính, tốc độ biến thiên trung bình như nhau trên mọi khoảng: đó là hệ số góc $m$.</span>
</div>
<div class="box">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
$$
C(q)=50+12q
$$
<span class="lang-en">Fixed cost is $50$; each unit adds $12$.</span>
<span class="lang-vi">Chi phí cố định là $50$; mỗi đơn vị tăng thêm $12$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-linear.html">Active Prelude 1.4: Linear Functions</a>; practice through OpenStax 1.2 and the short notes.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-linear.html">Active Prelude 1.4: Hàm tuyến tính</a>; luyện qua OpenStax 1.2 và ghi chú ngắn.</span>
</div>

---

# <span class="lang-en">Quadratic Models</span><span class="lang-vi">Mô hình bậc hai</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Changing rate</span><span class="lang-vi">Tốc độ thay đổi</span></div>
$$
f(x)=a(x-h)^2+k
$$
<span class="lang-en">Quadratics are the first familiar family where the rate of change is not constant.</span>
<span class="lang-vi">Hàm bậc hai là họ quen thuộc đầu tiên mà tốc độ biến thiên không còn hằng.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Example and features</span><span class="lang-vi">Ví dụ và đặc trưng</span></div>
<span class="lang-en">$h(t)=-4.9t^2+20t+1$ models height.</span>
<span class="lang-vi">$h(t)=-4.9t^2+20t+1$ mô hình hóa độ cao.</span>
<ul>
<li><span class="lang-en">vertex: highest point</span><span class="lang-vi">đỉnh: điểm cao nhất</span></li>
<li><span class="lang-en">zeros and sign</span><span class="lang-vi">nghiệm và dấu</span></li>
<li><span class="lang-en">increasing/decreasing intervals</span><span class="lang-vi">khoảng tăng/giảm</span></li>
</ul>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-quadratic.html">Active Prelude 1.5: Quadratic Functions</a>; practice through OpenStax 1.2 and the short notes.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-quadratic.html">Active Prelude 1.5: Hàm bậc hai</a>; luyện qua OpenStax 1.2 và ghi chú ngắn.</span>
</div>

---

# <span class="lang-en">Composition</span><span class="lang-vi">Hàm hợp</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Multi-step dependence</span><span class="lang-vi">Sự phụ thuộc nhiều bước</span></div>
<span class="lang-en">If $u=g(x)$ and $y=f(u)$, then the output depends on $x$ through two stages.</span>
<span class="lang-vi">Nếu $u=g(x)$ và $y=f(u)$, thì đầu ra phụ thuộc vào $x$ qua hai bước.</span>
$$
(f\circ g)(x)=f(g(x))
$$
</div>

<div class="grid-3 mt-5">
<div class="box"><div class="label"><span class="lang-en">Read inside out</span><span class="lang-vi">Đọc từ trong ra</span></div><span class="lang-en">first $g$, then $f$</span><span class="lang-vi">trước là $g$, sau là $f$</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div><span class="lang-en">If $r(t)=2+t$ and $A(r)=\pi r^2$, then $(A\circ r)(t)=\pi(2+t)^2$.</span><span class="lang-vi">Nếu $r(t)=2+t$ và $A(r)=\pi r^2$, thì $(A\circ r)(t)=\pi(2+t)^2$.</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Later</span><span class="lang-vi">Sau này</span></div><span class="lang-en">composition is where the chain rule lives</span><span class="lang-vi">hàm hợp là nơi quy tắc dây chuyền xuất hiện</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-composite.html">Active Prelude 1.6: Composite Functions</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-composite.html">Active Prelude 1.6: Hàm hợp</a>.</span>
</div>

---

# <span class="lang-en">Inverse Functions</span><span class="lang-vi">Hàm ngược</span>

<div class="grid-3">
<div class="box gold">
<div class="label"><span class="lang-en">Reverse dependence</span><span class="lang-vi">Đảo chiều phụ thuộc</span></div>
$$
f^{-1}(y)=x \Longleftrightarrow f(x)=y
$$
<span class="lang-en">An inverse answers the reverse question: which input produced this output?</span>
<span class="lang-vi">Hàm ngược trả lời câu hỏi ngược: đầu vào nào đã tạo ra đầu ra này?</span>
</div>
<div class="box">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">If $F(C)=\frac95C+32$, then $F^{-1}$ converts Fahrenheit back to Celsius.</span>
<span class="lang-vi">Nếu $F(C)=\frac95C+32$, thì $F^{-1}$ đổi Fahrenheit ngược lại Celsius.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Condition</span><span class="lang-vi">Điều kiện</span></div>
<span class="lang-en">To have an inverse function, the original function must be one-to-one on the domain we choose.</span>
<span class="lang-vi">Để có hàm ngược, hàm ban đầu phải là một-một trên miền ta chọn.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-inverse.html">Active Prelude 1.7: Inverse Functions</a>; OpenStax 1.4 for routine practice.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-inverse.html">Active Prelude 1.7: Hàm ngược</a>; OpenStax 1.4 để luyện cơ bản.</span>
</div>

---

# <span class="lang-en">Transformations</span><span class="lang-vi">Biến đổi đồ thị</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Outside changes output</span><span class="lang-vi">Bên ngoài đổi đầu ra</span></div>
<ul>
<li>$f(x)+c$: <span class="lang-en">shift up</span><span class="lang-vi">tịnh tiến lên</span></li>
<li>$cf(x)$: <span class="lang-en">vertical stretch/shrink</span><span class="lang-vi">co giãn theo phương đứng</span></li>
<li>$-f(x)$: <span class="lang-en">reflect across the $x$-axis</span><span class="lang-vi">đối xứng qua trục $x$</span></li>
</ul>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Inside changes input</span><span class="lang-vi">Bên trong đổi đầu vào</span></div>
<ul>
<li>$f(x-c)$: <span class="lang-en">shift right</span><span class="lang-vi">tịnh tiến sang phải</span></li>
<li>$f(cx)$: <span class="lang-en">horizontal shrink/stretch</span><span class="lang-vi">co giãn theo phương ngang</span></li>
<li>$f(-x)$: <span class="lang-en">reflect across the $y$-axis</span><span class="lang-vi">đối xứng qua trục $y$</span></li>
</ul>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-transformations.html">Active Prelude 1.8: Transformations of Functions</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-transformations.html">Active Prelude 1.8: Biến đổi hàm số</a>.</span>
</div>

---

# <span class="lang-en">Combining Functions</span><span class="lang-vi">Kết hợp hàm số</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">New models from old ones</span><span class="lang-vi">Mô hình mới từ mô hình cũ</span></div>
<span class="lang-en">When two relationships describe parts of the same situation, we can build a new relationship.</span>
<span class="lang-vi">Khi hai quan hệ mô tả các phần của cùng một tình huống, ta có thể xây một quan hệ mới.</span>
<div class="mini">
<span class="lang-en">Example: profit is revenue minus cost, $P(q)=R(q)-C(q)$.</span>
<span class="lang-vi">Ví dụ: lợi nhuận là doanh thu trừ chi phí, $P(q)=R(q)-C(q)$.</span>
</div>
</div>

<div class="grid-4 mt-5">
<div class="kpi"><span class="pill">+</span><strong><span class="lang-en">Sum</span><span class="lang-vi">Tổng</span></strong><br>$f+g$</div>
<div class="kpi"><span class="pill">-</span><strong><span class="lang-en">Difference</span><span class="lang-vi">Hiệu</span></strong><br>$f-g$</div>
<div class="kpi"><span class="pill">&times;</span><strong><span class="lang-en">Product</span><span class="lang-vi">Tích</span></strong><br>$fg$</div>
<div class="kpi"><span class="pill">/</span><strong><span class="lang-en">Quotient</span><span class="lang-vi">Thương</span></strong><br>$f/g$</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/sec-changing-combining.html">Active Prelude 1.9: Combining Functions</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/sec-changing-combining.html">Active Prelude 1.9: Kết hợp hàm số</a>.</span>
</div>

---

# <span class="lang-en">Function Families To Read</span><span class="lang-vi">Các họ hàm cần đọc</span>

<div class="grid-4">
<div class="box"><div class="label"><span class="lang-en">Algebraic</span><span class="lang-vi">Đại số</span></div><span class="lang-en">linear, quadratic, polynomial, power, rational</span><span class="lang-vi">tuyến tính, bậc hai, đa thức, lũy thừa, hữu tỷ</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Growth / scale</span><span class="lang-vi">Tăng trưởng / thang đo</span></div><span class="lang-en">exponential and logarithmic functions</span><span class="lang-vi">hàm mũ và hàm logarithm</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Periodic</span><span class="lang-vi">Tuần hoàn</span></div><span class="lang-en">sine, cosine, tangent; cycles and waves</span><span class="lang-vi">sin, cos, tan; chu kỳ và sóng</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Special / optional</span><span class="lang-vi">Đặc biệt / tùy chọn</span></div><span class="lang-en">inverse trig and hyperbolic functions when needed</span><span class="lang-vi">lượng giác ngược và hyperbolic khi cần</span></div>
</div>

<div class="box gold mt-6">
<div class="label"><span class="lang-en">Class expectation</span><span class="lang-vi">Kỳ vọng trong lớp</span></div>
<span class="lang-en">Know what each family looks like, where it is defined, and which features matter for modeling. Read the detailed formulas outside the slides.</span>
<span class="lang-vi">Biết dáng đồ thị, miền xác định, và đặc trưng quan trọng cho mô hình hóa. Các công thức chi tiết để đọc ngoài slide.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/prelude/C-circular.html">Active Prelude 2</a>, <a href="https://activecalculus.org/prelude/C-exp.html">3</a>, and <a href="https://activecalculus.org/prelude/C-poly.html">5</a>; use OpenStax 1.2-1.5 and the short notes for routine practice.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/prelude/C-circular.html">Active Prelude 2</a>, <a href="https://activecalculus.org/prelude/C-exp.html">3</a>, và <a href="https://activecalculus.org/prelude/C-poly.html">5</a>; dùng OpenStax 1.2-1.5 và ghi chú ngắn để luyện cơ bản.</span>
</div>

---

# <span class="lang-en">How To Study This Review</span><span class="lang-vi">Cách học phần ôn tập</span>

<div class="grid-3">
<div class="box">
<div class="label"><span class="lang-en">Before class</span><span class="lang-vi">Trước giờ học</span></div>
<span class="lang-en">Skim Active Prelude 1.2-1.9 and mark any example where the context matters.</span>
<span class="lang-vi">Đọc lướt Active Prelude 1.2-1.9 và đánh dấu ví dụ mà bối cảnh quan trọng.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">In class</span><span class="lang-vi">Trong lớp</span></div>
<span class="lang-en">Use the slides to connect ideas, not to copy a complete formula list.</span>
<span class="lang-vi">Dùng slide để nối ý tưởng, không phải để chép một danh sách công thức đầy đủ.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">After class</span><span class="lang-vi">Sau giờ học</span></div>
<span class="lang-en">Use the Session 01 short notes for the linked practice bank.</span>
<span class="lang-vi">Dùng ghi chú ngắn Buổi 01 cho danh sách bài tập có liên kết.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Full notes and practice: <a href="../../sessions/01-functions-sequences/">Session 01 short notes</a>.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Ghi chú đầy đủ và bài tập: <a href="../../sessions/01-functions-sequences/">ghi chú Buổi 01</a>.</span>
</div>

---

# <span class="lang-en">Next Class</span><span class="lang-vi">Buổi sau</span>

<div class="box gold">
<span class="lang-en">Sequences begin next class, after the function review is solid.</span>
<span class="lang-vi">Buổi sau bắt đầu dãy số, sau khi phần ôn hàm số đã vững.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/5-1-sequences">OpenStax Calculus Volume 2, Section 5.1: Sequences</a>.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/5-1-sequences">OpenStax Calculus Volume 2, Section 5.1: Sequences</a>.</span>
</div>
