---
theme: default
title: "Calculus 1 - Applications of Integration"
info: "MT1003 Calculus 1, Lecture 06"
transition: slide-left
download: "../../pdfs/applications-of-integration.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Applications of Integration</span><span class="lang-vi">Ứng dụng tích phân</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 06</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 06</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Main lecture source: Active Calculus; student reading/practice: OpenStax and Stewart.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Nguồn chính: Active Calculus; đọc và luyện tập: OpenStax và Stewart.</span>
</div>

---

# <span class="lang-en">From Total To Geometry</span><span class="lang-vi">Từ tổng lượng đến hình học</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">One idea, many objects</span><span class="lang-vi">Một ý tưởng, nhiều đại lượng</span></div>
<span class="lang-en">A definite integral adds tiny pieces. Today each tiny piece has a geometric meaning: height times width, area times thickness, circumference times thickness, or length times radius.</span>
<span class="lang-vi">Tích phân xác định cộng các phần rất nhỏ. Hôm nay mỗi phần nhỏ mang ý nghĩa hình học: cao nhân rộng, diện tích nhân độ dày, chu vi nhân độ dày, hoặc độ dài nhân bán kính.</span>
</div>

<div class="method-grid mt-4">
<div class="method-card"><strong><span class="lang-en">Area</span><span class="lang-vi">Diện tích</span></strong>$dA\approx h\,dx$</div>
<div class="method-card"><strong><span class="lang-en">Volume</span><span class="lang-vi">Thể tích</span></strong>$dV\approx A(x)\,dx$</div>
<div class="method-card"><strong><span class="lang-en">Arc length</span><span class="lang-vi">Độ dài cung</span></strong>$ds=\sqrt{1+(y')^2}\,dx$</div>
<div class="method-card"><strong><span class="lang-en">Surface</span><span class="lang-vi">Diện tích mặt</span></strong>$dS\approx 2\pi r\,ds$</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>-<a href="https://activecalculus.org/single/sec-6-2-volume.html">6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Vol 1, 6.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">6.4</a>; Stewart 6.1-6.5, 8.1-8.4.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>-<a href="https://activecalculus.org/single/sec-6-2-volume.html">6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Tập 1, 6.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">6.4</a>; Stewart 6.1-6.5, 8.1-8.4.</span>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-25</span><span><span class="lang-en"><strong>Areas</strong> - area under a curve and area between curves</span><span class="lang-vi"><strong>Diện tích</strong> - diện tích dưới đồ thị và giữa hai đường cong</span></span></div>
<div class="tl-row"><span class="clock">25-70</span><span><span class="lang-en"><strong>Volumes</strong> - slicing, disks, washers, and shells</span><span class="lang-vi"><strong>Thể tích</strong> - lát cắt, đĩa, vòng đệm, và vỏ trụ</span></span></div>
<div class="tl-row break"><span class="clock">70-80</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row"><span class="clock">80-115</span><span><span class="lang-en"><strong>Arc length</strong> - build length from small line segments</span><span class="lang-vi"><strong>Độ dài cung</strong> - xây dựng độ dài từ các đoạn thẳng nhỏ</span></span></div>
<div class="tl-row"><span class="clock">115-135</span><span><span class="lang-en"><strong>Surface area</strong> - rotate a curve and add frustums</span><span class="lang-vi"><strong>Diện tích mặt</strong> - quay đường cong và cộng các nón cụt</span></span></div>
<div class="tl-row"><span class="clock">135-155</span><span><span class="lang-en"><strong>Five models</strong> - spring work, dam force, present value, surplus, renewal</span><span class="lang-vi"><strong>Năm mô hình</strong> - công lò xo, áp lực đập, hiện giá, thặng dư, bổ sung</span></span></div>
<div class="tl-row disc"><span class="clock">155-170</span><span><span class="lang-en"><strong>Exercise lab</strong> - setup first, compute second</span><span class="lang-vi"><strong>Luyện tập</strong> - thiết lập trước, tính sau</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Session 9 reading map: Active Calculus 6.1, 6.2, 6.4; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5, 8.1-8.4.</span>
<span class="lang-vi">Bản đồ đọc Buổi 9: Active Calculus 6.1, 6.2, 6.4; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5, 8.1-8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Area Under A Curve</span><span class="lang-vi">Diện tích dưới đồ thị</span>

<div class="grid-2 align-center">
<div>
<div class="thm">
<div class="tag"><span class="lang-en">Signed height, positive area</span><span class="lang-vi">Chiều cao có dấu, diện tích dương</span></div>
<span class="lang-en">If $f$ is integrable on $[a,b]$, the area between $y=f(x)$ and the $x$-axis is</span>
<span class="lang-vi">Nếu $f$ khả tích trên $[a,b]$, diện tích giữa $y=f(x)$ và trục $x$ là</span>

$$
A=\int_a^b |f(x)|\,dx.
$$
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Watch the sign</span><span class="lang-vi">Chú ý dấu</span></div>
<span class="lang-en">If the graph crosses the $x$-axis, split the interval at the zeros.</span>
<span class="lang-vi">Nếu đồ thị cắt trục $x$, hãy chia khoảng tại các nghiệm.</span>
</div>
</div>
<img src="./images/8.JPG" class="graph-img" alt="Area between a graph and the x-axis">
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Vol 1, 6.1</a>; extra practice: Stewart 6.1.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Tập 1, 6.1</a>; luyện thêm: Stewart 6.1.</span>
</div>

---

# <span class="lang-en">Example: Area With The Axis</span><span class="lang-vi">Ví dụ: diện tích với trục hoành</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Find the area</span><span class="lang-vi">Tìm diện tích</span></div>
<span class="lang-en">Region bounded by $y=4x-x^2$ and the $x$-axis.</span>
<span class="lang-vi">Miền giới hạn bởi $y=4x-x^2$ và trục $x$.</span>
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Set up and compute</span><span class="lang-vi">Thiết lập và tính</span></div>

$$
4x-x^2=x(4-x)=0
$$

$$
A=\int_0^4(4x-x^2)\,dx
=\left[2x^2-\frac{x^3}{3}\right]_0^4=\frac{32}{3}.
$$
</div>
</div>
<img src="./images/2.jpeg" class="graph-img" alt="Parabolic region bounded by x-axis">
</div>

<div class="refs">
<span class="lang-en">Area with the axis: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Vol 1, 6.1</a>; Stewart 6.1.</span>
<span class="lang-vi">Diện tích với trục tọa độ: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Tập 1, 6.1</a>; Stewart 6.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Area Between Curves</span><span class="lang-vi">Diện tích giữa hai đường cong</span>

<div class="grid-2 align-center">
<div>
<div class="thm">
<div class="tag"><span class="lang-en">Top minus bottom</span><span class="lang-vi">Trên trừ dưới</span></div>

$$
A=\int_a^b |f(x)-g(x)|\,dx.
$$

<span class="lang-en">If $f(x)\ge g(x)$ on the interval, this becomes</span>
<span class="lang-vi">Nếu $f(x)\ge g(x)$ trên khoảng, công thức trở thành</span>

$$
A=\int_a^b\big(f(x)-g(x)\big)\,dx.
$$
</div>
</div>
<img src="./images/9.JPG" class="graph-img" alt="Area between two curves">
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Workflow</span><span class="lang-vi">Quy trình</span></div>
<span class="lang-en">Find intersections, decide which curve is on top, integrate the difference.</span>
<span class="lang-vi">Tìm giao điểm, xác định đường nào ở trên, rồi tích phân hiệu.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Vol 1, 6.1</a>; extra practice: Stewart 6.1.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Tập 1, 6.1</a>; luyện thêm: Stewart 6.1.</span>
</div>

---

# <span class="lang-en">Example: Two Curves</span><span class="lang-vi">Ví dụ: hai đường cong</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Find the enclosed area</span><span class="lang-vi">Tìm diện tích miền kín</span></div>

$$
y=3-x,\qquad y=x^2-9.
$$
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Intersections</span><span class="lang-vi">Giao điểm</span></div>

$$
3-x=x^2-9
\ \Rightarrow\ (x-3)(x+4)=0
$$

$$
A=\int_{-4}^{3}(-x^2-x+12)\,dx=\frac{343}{6}.
$$
</div>
</div>
<img src="./images/dt_1.jpg" class="graph-img small" alt="Line and parabola enclosed region">
</div>

<div class="refs">
<span class="lang-en">Practice source pattern: area-between-curves examples from <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>, <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax 6.1</a>, and Stewart 6.1.</span>
<span class="lang-vi">Dạng luyện tập: ví dụ diện tích giữa hai đường cong từ <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>, <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax 6.1</a>, và Stewart 6.1.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Area</span><span class="lang-vi">Tự luyện: diện tích</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">A1</div>
<span class="lang-en">Find the area enclosed by</span>
<span class="lang-vi">Tìm diện tích miền kín bởi</span>

$$
y=(x-1)^2,\qquad x^2-\frac{y^2}{2}=1.
$$
</div>
<div class="exercise-card">
<div class="num">A2</div>
<span class="lang-en">Find the area enclosed by</span>
<span class="lang-vi">Tìm diện tích miền kín bởi</span>

$$
y=x-x^2,\qquad y=x\sqrt{1-x}.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Setup hints</span><span class="lang-vi">Gợi ý thiết lập</span></div>
<span class="lang-en">A1 intersects at $x=1,3$; A2 intersects at $x=0,1$.</span>
<span class="lang-vi">A1 giao tại $x=1,3$; A2 giao tại $x=0,1$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>$A_1=\displaystyle \frac{10}{3}-\frac{\sqrt2}{2}\ln(3+\sqrt8)$</span><br>
<span class="blur-step" v-click>$A_2=\displaystyle \frac{1}{10}$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Area practice: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Vol 1, 6.1</a>; Stewart 6.1.</span>
<span class="lang-vi">Luyện diện tích: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax Tập 1, 6.1</a>; Stewart 6.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Volume By Slicing</span><span class="lang-vi">Thể tích bằng lát cắt</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Slice the solid</span><span class="lang-vi">Cắt vật thể</span></div>
<span class="lang-en">If a cross section perpendicular to the $x$-axis has area $A(x)$, then one thin slice has volume approximately $A(x)\,dx$.</span>
<span class="lang-vi">Nếu lát cắt vuông góc trục $x$ có diện tích $A(x)$, thì một lát mỏng có thể tích xấp xỉ $A(x)\,dx$.</span>
</div>

<div class="thm mt-3">

$$
V=\int_a^b A(x)\,dx.
$$
</div>
</div>
<img src="./images/the_tich_2.jpg" class="graph-img" alt="Volume by slicing">
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Vol 1, 6.2</a>; extra practice: Stewart 6.2.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Tập 1, 6.2</a>; luyện thêm: Stewart 6.2.</span>
</div>

---

# <span class="lang-en">Example: Volume Of A Sphere</span><span class="lang-vi">Ví dụ: thể tích hình cầu</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Radius $r$</span><span class="lang-vi">Bán kính $r$</span></div>
<span class="lang-en">At position $x$, the circular cross section has radius $\sqrt{r^2-x^2}$.</span>
<span class="lang-vi">Tại vị trí $x$, lát cắt tròn có bán kính $\sqrt{r^2-x^2}$.</span>
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Cross-section area</span><span class="lang-vi">Diện tích lát cắt</span></div>

$$
A(x)=\pi(r^2-x^2)
$$

$$
V=\int_{-r}^r A(x)\,dx=\frac{4}{3}\pi r^3.
$$
</div>
</div>
<img src="./images/the_tich_3.jpg" class="graph-img small" alt="Sphere cross section">
</div>

<div class="refs">
<span class="lang-en">Slicing model: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Vol 1, 6.2</a>; Stewart 6.2.</span>
<span class="lang-vi">Mô hình lát cắt: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Tập 1, 6.2</a>; Stewart 6.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Disks And Washers</span><span class="lang-vi">Phương pháp đĩa và vòng đệm</span>

<div class="grid-2 align-center">
<div>
<div class="thm">
<div class="tag"><span class="lang-en">Rotate about the $x$-axis</span><span class="lang-vi">Quay quanh trục $x$</span></div>

$$
V=\pi\int_a^b R(x)^2\,dx.
$$

<span class="lang-en">With a hole, subtract the inner radius:</span>
<span class="lang-vi">Nếu có lỗ, trừ bán kính trong:</span>

$$
V=\pi\int_a^b\big(R(x)^2-r(x)^2\big)\,dx.
$$
</div>
</div>
<img src="./images/the_tich_4.jpg" class="graph-img" alt="Disk method">
</div>

<div class="refs">
<span class="lang-en">Choose slices perpendicular to the axis of rotation. Read: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax 6.2</a>; Stewart 6.2.</span>
<span class="lang-vi">Chọn lát cắt vuông góc với trục quay. Đọc: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax 6.2</a>; Stewart 6.2.</span>
</div>

---

# <span class="lang-en">Example: Disk Method</span><span class="lang-vi">Ví dụ: phương pháp đĩa</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Revolve</span><span class="lang-vi">Quay miền</span></div>
<span class="lang-en">The region under $y=\sqrt{x}$ on $[0,4]$ about the $x$-axis.</span>
<span class="lang-vi">Miền dưới $y=\sqrt{x}$ trên $[0,4]$ quanh trục $x$.</span>
</div>

<div class="thm mt-3">

$$
V=\pi\int_0^4(\sqrt{x})^2\,dx
=\pi\int_0^4 x\,dx=8\pi.
$$
</div>
</div>
<img src="./images/the_tich_5.jpg" class="graph-img" alt="Rotating y=sqrt x about x-axis">
</div>

<div class="refs">
<span class="lang-en">Disk/washer practice: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Vol 1, 6.2</a>; Stewart 6.2.</span>
<span class="lang-vi">Luyện đĩa/vòng đệm: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Tập 1, 6.2</a>; Stewart 6.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Rotate About The $y$-Axis</span><span class="lang-vi">Quay quanh trục $y$</span>

<div class="grid-2 align-center">
<div>
<div class="thm">
<div class="tag"><span class="lang-en">Horizontal disks</span><span class="lang-vi">Đĩa ngang</span></div>
<span class="lang-en">If $x=g(y)\ge0$ on $[c,d]$, rotating about the $y$-axis gives</span>
<span class="lang-vi">Nếu $x=g(y)\ge0$ trên $[c,d]$, quay quanh trục $y$ cho</span>

$$
V=\pi\int_c^d g(y)^2\,dy.
$$
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Example setup</span><span class="lang-vi">Thiết lập ví dụ</span></div>
<span class="lang-en">For $y=4-x^2$, use $x=\sqrt{4-y}$ and $1\le y\le4$.</span>
<span class="lang-vi">Với $y=4-x^2$, dùng $x=\sqrt{4-y}$ và $1\le y\le4$.</span>
</div>
</div>
<img src="./images/the_tich_7.jpg" class="graph-img" alt="Rotating about y-axis">
</div>

<div class="thm mt-3">

$$
V=\pi\int_1^4(4-y)\,dy=\frac{9\pi}{2}.
$$
</div>

<div class="refs">
<span class="lang-en">Horizontal slicing: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Vol 1, 6.2</a>; Stewart 6.2.</span>
<span class="lang-vi">Lát cắt ngang: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax Tập 1, 6.2</a>; Stewart 6.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Cylindrical Shells</span><span class="lang-vi">Phương pháp vỏ trụ</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Thin shell</span><span class="lang-vi">Vỏ trụ mỏng</span></div>
<span class="lang-en">A rectangle at $x$ with height $f(x)$ rotates about the $y$-axis into a shell.</span>
<span class="lang-vi">Một hình chữ nhật tại $x$ có chiều cao $f(x)$ quay quanh trục $y$ thành vỏ trụ.</span>
</div>

<div class="thm mt-3">

$$
dV\approx 2\pi x f(x)\,dx,
\qquad
V=2\pi\int_a^b x f(x)\,dx.
$$
</div>
</div>
<div class="img-strip">
<img src="./images/the_tich_9.jpg" class="graph-img" alt="Shell rectangle">
<img src="./images/the_tich_10.jpg" class="graph-img" alt="Rotated shell">
<img src="./images/the_tich_11.jpg" class="graph-img" alt="Unrolled cylindrical shell">
</div>
</div>

<div class="refs">
<span class="lang-en">Shell method: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">OpenStax Vol 1, 6.3</a>; Stewart 6.3.</span>
<span class="lang-vi">Phương pháp vỏ trụ: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">OpenStax Tập 1, 6.3</a>; Stewart 6.3.</span>
</div>

---

# <span class="lang-en">Example: Shells vs Washers</span><span class="lang-vi">Ví dụ: vỏ trụ và vòng đệm</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Region</span><span class="lang-vi">Miền phẳng</span></div>
<span class="lang-en">Bounded by $y=x^2$, $x=1$, $x=2$, and $y=0$; rotate about the $y$-axis.</span>
<span class="lang-vi">Giới hạn bởi $y=x^2$, $x=1$, $x=2$, và $y=0$; quay quanh trục $y$.</span>
</div>

<div class="thm mt-3">

$$
V=2\pi\int_1^2 x\cdot x^2\,dx
=2\pi\left[\frac{x^4}{4}\right]_1^2
=\frac{15\pi}{2}.
$$
</div>
</div>
<img src="./images/tron_xoay_oy.jpeg" class="graph-img" alt="Shell method example region">
</div>

<div class="refs">
<span class="lang-en">Compare methods: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">OpenStax Vol 1, 6.3</a>; Stewart 6.2-6.3.</span>
<span class="lang-vi">So sánh phương pháp: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">OpenStax Tập 1, 6.3</a>; Stewart 6.2-6.3.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Volumes</span><span class="lang-vi">Tự luyện: thể tích</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">V1</div>
<span class="lang-en">Rotate $y^2=(x-1)^3$, $1\le x\le2$, about the $x$-axis.</span>
<span class="lang-vi">Quay $y^2=(x-1)^3$, $1\le x\le2$, quanh trục $x$.</span>
</div>
<div class="exercise-card">
<div class="num">V2</div>
<span class="lang-en">Rotate the region bounded by $y=x^2$, $y=0$, $x+y=2$ about the $x$-axis.</span>
<span class="lang-vi">Quay miền giới hạn bởi $y=x^2$, $y=0$, $x+y=2$ quanh trục $x$.</span>
</div>
<div class="exercise-card">
<div class="num">V3</div>
<span class="lang-en">Rotate the region under $y=4-x^2$ above $y=1$, $0\le x\le\sqrt3$, about the $y$-axis.</span>
<span class="lang-vi">Quay miền dưới $y=4-x^2$ và trên $y=1$, $0\le x\le\sqrt3$, quanh trục $y$.</span>
</div>
<div class="exercise-card">
<div class="num">V4</div>
<span class="lang-en">Use shells for the region under $y=x^2$, $1\le x\le2$, about the $y$-axis.</span>
<span class="lang-vi">Dùng vỏ trụ cho miền dưới $y=x^2$, $1\le x\le2$, quanh trục $y$.</span>
</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>V1: $\pi/4$</span> &nbsp; 
<span class="blur-step" v-click>V2: $8\pi/15$</span> &nbsp; 
<span class="blur-step" v-click>V3: $9\pi/2$</span> &nbsp; 
<span class="blur-step" v-click>V4: $15\pi/2$</span>
</div>

<div class="refs">
<span class="lang-en">Volume practice: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax 6.2</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">6.3</a>; Stewart 6.2-6.3.</span>
<span class="lang-vi">Luyện thể tích: <a href="https://activecalculus.org/single/sec-6-2-volume.html">Active Calculus 6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing">OpenStax 6.2</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">6.3</a>; Stewart 6.2-6.3.</span>
</div>

---
class: compact
---

# <span class="lang-en">Arc Length</span><span class="lang-vi">Độ dài cung</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Small line segment</span><span class="lang-vi">Đoạn thẳng nhỏ</span></div>
<span class="lang-en">Approximate each tiny piece of the curve by a line segment.</span>
<span class="lang-vi">Xấp xỉ mỗi phần nhỏ của đường cong bằng một đoạn thẳng.</span>
</div>

<div class="formula-stack mt-3">

$$
ds=\sqrt{dx^2+dy^2}
$$

$$
ds=\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx
$$
</div>
</div>
<img src="./images/1.JPG" class="graph-img" alt="Arc length approximation">
</div>

<div class="thm mt-3">

$$
L=\int_a^b\sqrt{1+\big(f'(x)\big)^2}\,dx.
$$
</div>

<div class="refs">
<span class="lang-en">Arc length: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; extra practice: Stewart 8.1-8.4; see the <a href="../../readings/">reading map</a>.</span>
<span class="lang-vi">Độ dài cung: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; luyện thêm: Stewart 8.1-8.4; xem <a href="../../readings/">bản đồ đọc</a>.</span>
</div>

---

# <span class="lang-en">Example: Arc Length</span><span class="lang-vi">Ví dụ: độ dài cung</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Find the length</span><span class="lang-vi">Tìm độ dài</span></div>

$$
y=\frac{x^2}{2}-\frac{\ln x}{4},\qquad 1\le x\le3.
$$
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Derivative</span><span class="lang-vi">Đạo hàm</span></div>

$$
y'=x-\frac{1}{4x}
$$

$$
\sqrt{1+(y')^2}=x+\frac{1}{4x}.
$$

$$
L=\int_1^3\left(x+\frac{1}{4x}\right)\,dx
=4+\frac14\ln3.
$$
</div>
</div>
<img src="./images/do_dai1.jpg" class="graph-img" alt="Arc length example curve">
</div>

<div class="refs">
<span class="lang-en">Arc length examples: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; extra practice: Stewart 8.1-8.4.</span>
<span class="lang-vi">Ví dụ độ dài cung: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; luyện thêm: Stewart 8.1-8.4.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Arc Length</span><span class="lang-vi">Tự luyện: độ dài cung</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">L1</div>
<span class="lang-en">Find the length of</span>
<span class="lang-vi">Tìm độ dài của</span>

$$
y=\frac{x^3}{12}+\frac1x,\qquad 1\le x\le4.
$$
</div>
<div class="exercise-card">
<div class="num">L2</div>
<span class="lang-en">Find the length of</span>
<span class="lang-vi">Tìm độ dài của</span>

$$
y=\ln(1-x^2),\qquad -\frac12\le x\le\frac12.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hint</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">Both are chosen so the square root simplifies exactly.</span>
<span class="lang-vi">Cả hai bài đều được chọn để căn bậc hai rút gọn đẹp.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>L1: $6$</span><br>
<span class="blur-step" v-click>L2: $2\ln3-1$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Arc length practice: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; Stewart 8.1-8.4.</span>
<span class="lang-vi">Luyện độ dài cung: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; Stewart 8.1-8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Surface Area Of Revolution</span><span class="lang-vi">Diện tích mặt tròn xoay</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Unroll the surface</span><span class="lang-vi">Trải mặt ra</span></div>
<span class="lang-en">A small arc segment of length $ds$ rotating with radius $r$ sweeps out area approximately $2\pi r\,ds$.</span>
<span class="lang-vi">Một đoạn cung nhỏ dài $ds$ quay với bán kính $r$ quét diện tích xấp xỉ $2\pi r\,ds$.</span>
</div>

<div class="thm mt-3">

$$
S=2\pi\int_a^b f(x)\sqrt{1+\big(f'(x)\big)^2}\,dx
$$

<span class="lang-en">for rotation about the $x$-axis.</span>
<span class="lang-vi">khi quay quanh trục $x$.</span>
</div>
</div>
<img src="./images/mat_tron_xoay_1.jpg" class="graph-img" alt="Surface of revolution">
</div>

<div class="refs">
<span class="lang-en">Surface area: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; extra practice: Stewart 8.1-8.4.</span>
<span class="lang-vi">Diện tích mặt: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; luyện thêm: Stewart 8.1-8.4.</span>
</div>

---

# <span class="lang-en">Example: Surface Area</span><span class="lang-vi">Ví dụ: diện tích mặt</span>

<div class="box gold">
<div class="label"><span class="lang-en">Rotate about the $x$-axis</span><span class="lang-vi">Quay quanh trục $x$</span></div>

$$
y=\sin 2x,\qquad 0\le x\le\frac{\pi}{2}.
$$
</div>

<div class="grid-2 mt-3">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Set up</span><span class="lang-vi">Thiết lập</span></div>

$$
y'=2\cos2x
$$

$$
S=2\pi\int_0^{\pi/2}\sin2x\sqrt{1+4\cos^2 2x}\,dx.
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Substitute</span><span class="lang-vi">Đổi biến</span></div>

$$
t=2\cos2x,\qquad dt=-4\sin2x\,dx
$$

$$
S=\pi\int_0^2\sqrt{1+t^2}\,dt
=\pi\left(\sqrt5+\frac12\ln(2+\sqrt5)\right).
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Surface-area setup: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; Stewart 8.1-8.4.</span>
<span class="lang-vi">Thiết lập diện tích mặt: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; Stewart 8.1-8.4.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Surface Area</span><span class="lang-vi">Tự luyện: diện tích mặt</span>

<div class="grid-2 align-center">
<div>
<div class="your-turn">
<span class="timechip">6 min</span>
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Bài toán</span></div>
<span class="lang-en">Find the area of the surface obtained by rotating</span>
<span class="lang-vi">Tìm diện tích mặt tạo ra khi quay</span>

$$
y=\sqrt{x^2+4},\qquad 0\le x\le1,
$$

<span class="lang-en">about the $x$-axis.</span>
<span class="lang-vi">quanh trục $x$.</span>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Answer</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>
$S=\pi\sqrt2\left(\sqrt3+2\ln\dfrac{1+\sqrt3}{\sqrt2}\right)$
</span>
</div>
</div>
<img src="./images/6.JPG" class="graph-img small" alt="Surface area formula figure">
</div>

<div class="refs">
<span class="lang-en">Surface-area practice: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; Stewart 8.1-8.4.</span>
<span class="lang-vi">Luyện diện tích mặt: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; Stewart 8.1-8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Applications: Slice, Add, Interpret</span><span class="lang-vi">Ứng dụng: cắt nhỏ, cộng lại, diễn giải</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">One method for every model</span><span class="lang-vi">Một phương pháp cho mọi mô hình</span></div>
<span class="lang-en">In every model we divide the quantity into small pieces, approximate each piece, and take a limit of the sums — a definite integral, read with its units.</span>
<span class="lang-vi">Trong mọi mô hình, ta chia đại lượng thành các phần nhỏ, xấp xỉ từng phần, rồi qua giới hạn của các tổng — được một tích phân xác định, đọc kèm đơn vị.</span>
</div>

<div class="method-grid app-methods mt-4">
<div class="method-card">
<strong><span class="lang-en">1 · Spring</span><span class="lang-vi">1 · Lò xo</span></strong>
<span class="lang-en">Work to stretch it 3 more cm?</span>
<span class="lang-vi">Công kéo giãn thêm 3 cm?</span>
</div>
<div class="method-card">
<strong><span class="lang-en">2 · Dam</span><span class="lang-vi">2 · Đập nước</span></strong>
<span class="lang-en">How hard do 16 m of water push?</span>
<span class="lang-vi">16 m nước đẩy mạnh cỡ nào?</span>
</div>
<div class="method-card">
<strong><span class="lang-en">3 · Pricing</span><span class="lang-vi">3 · Định giá</span></strong>
<span class="lang-en">7 years of income — worth what today?</span>
<span class="lang-vi">7 năm thu nhập — hôm nay đáng bao nhiêu?</span>
</div>
<div class="method-card">
<strong><span class="lang-en">4 · Market</span><span class="lang-vi">4 · Thị trường</span></strong>
<span class="lang-en">Who gains at one price?</span>
<span class="lang-vi">Ai lợi khi chỉ có một giá?</span>
</div>
<div class="method-card">
<strong><span class="lang-en">5 · Clinic</span><span class="lang-vi">5 · Phòng khám</span></strong>
<span class="lang-en">How many patients at month 15?</span>
<span class="lang-vi">Tháng 15 còn bao nhiêu bệnh nhân?</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4, 8.3-8.4.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4, 8.3-8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Work: When The Force Varies</span><span class="lang-vi">Công: khi lực biến thiên</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Work done by a constant force</span><span class="lang-vi">Công của lực không đổi</span></div>
<span class="lang-en">A constant force $F$ acting over a distance $d$ does work $W=Fd$. Lifting a 1.2 kg book 0.7 m against gravity ($F=mg$, $g=9.8$ m/s²): $W=(1.2)(9.8)(0.7)\approx8.2$ J.</span>
<span class="lang-vi">Lực không đổi $F$ trên quãng đường $d$ sinh công $W=Fd$. Nâng cuốn sách 1.2 kg lên 0.7 m thắng trọng lực ($F=mg$, $g=9.8$ m/s²): $W=(1.2)(9.8)(0.7)\approx8.2$ J.</span>
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">A variable force</span><span class="lang-vi">Lực biến thiên</span></div>
<span class="lang-en">Divide $[a,b]$ into $n$ subintervals of width $\Delta x$, with a point $x_i^*$ in the $i$-th; there the force is nearly constant:</span>
<span class="lang-vi">Chia $[a,b]$ thành $n$ đoạn con độ rộng $\Delta x$, chọn điểm $x_i^*$ trong đoạn thứ $i$; tại đó lực gần như không đổi:</span>

$$
W_i\approx F(x_i^*)\,\Delta x
$$
</div>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Definition of work</span><span class="lang-vi">Định nghĩa công</span></div>

$$
W=\lim_{n\to\infty}\sum_{i=1}^{n}F(x_i^*)\,\Delta x=\int_a^b F(x)\,dx.
$$

<span class="lang-en">This limit defines the work done by $F(x)$ from $a$ to $b$.</span>
<span class="lang-vi">Giới hạn này định nghĩa công của lực $F(x)$ từ $a$ đến $b$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4 (Work).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4 (Công).</span>
</div>

---
class: compact
---

# <span class="lang-en">Case 1 - Stretching A Spring</span><span class="lang-vi">Tình huống 1 - kéo giãn lò xo</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">The question (Stewart 6.4)</span><span class="lang-vi">Câu hỏi (Stewart 6.4)</span></div>
<span class="lang-en">A force of 40 N is required to hold a spring that has been stretched from its natural length of 10 cm to a length of 15 cm. How much work is done in stretching the spring from 15 cm to 18 cm?</span>
<span class="lang-vi">Cần lực 40 N để giữ lò xo giãn từ chiều dài tự nhiên 10 cm đến 15 cm. Tính công kéo giãn lò xo từ 15 cm đến 18 cm.</span>
</div>
<div class="box">
<div class="label"><span class="lang-en">Hooke's law</span><span class="lang-vi">Định luật Hooke</span></div>
<span class="lang-en">The force needed to hold a spring stretched $x$ beyond its natural length is proportional to $x$: $F(x)=kx$ ($k$ = the spring constant), valid while $x$ is not too large.</span>
<span class="lang-vi">Lực cần để giữ lò xo giãn $x$ so với chiều dài tự nhiên tỉ lệ thuận với $x$: $F(x)=kx$ ($k$ = hằng số lò xo), đúng khi $x$ không quá lớn.</span>
</div>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">1. Find $k$ from the given force</span><span class="lang-vi">1. Tìm $k$ từ lực đã cho</span></div>
<span class="lang-en">At 15 cm the extension is $0.05$ m, so $F(0.05)=40$:</span>
<span class="lang-vi">Ở 15 cm, độ giãn là $0.05$ m, nên $F(0.05)=40$:</span>

$$
40=k(0.05)\ \Rightarrow\ k=800\ \text{N/m},\qquad F(x)=800x.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4 (Work).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4 (Công).</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 1 - Solve And Check</span><span class="lang-vi">Tình huống 1 - giải và kiểm tra</span>

<div class="grid-2 align-center">
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">2. Integrate the force</span><span class="lang-vi">2. Tích phân lực</span></div>
<span class="lang-en">Stretching from 15 cm to 18 cm means the extension goes from $0.05$ m to $0.08$ m:</span>
<span class="lang-vi">Kéo từ 15 cm đến 18 cm nghĩa là độ giãn đi từ $0.05$ m đến $0.08$ m:</span>

$$
W=\int_{0.05}^{0.08}800x\,dx
=400x^2\Big|_{0.05}^{0.08}
=1.56\ \text{J}
$$
</div>
<img src="./images/hooke.jpg" class="graph-img" alt="Spring force grows with extension">
</div>

<div class="thm mt-3">
<span class="tag"><span class="lang-en">3. Interpret and check</span><span class="lang-vi">3. Diễn giải và kiểm tra</span></span>
<span class="lang-en">The work done is 1.56 J. As a check: the force grows linearly from 40 N to 64 N here, so its average is 52 N, and $52\times0.03=1.56$ J — the same answer.</span>
<span class="lang-vi">Công thực hiện là 1.56 J. Kiểm tra lại: lực tăng tuyến tính từ 40 N đến 64 N trên đoạn này, trung bình là 52 N, và $52\times0.03=1.56$ J — cùng đáp số.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4 (Work).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4 (Công).</span>
</div>

---
class: compact
---

# <span class="lang-en">Case 2 - Water Against A Dam</span><span class="lang-vi">Tình huống 2 - nước đẩy mặt đập</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">The question (Stewart 8.3)</span><span class="lang-vi">Câu hỏi (Stewart 8.3)</span></div>
<span class="lang-en">A dam has the shape of a trapezoid: the height is 20 m, and the width is 50 m at the top and 30 m at the bottom. Find the force on the dam due to hydrostatic pressure if the water level is 4 m from the top. Here $\rho=1000$ kg/m³ is the density of water and $g=9.8$ m/s² is the acceleration due to gravity.</span>
<span class="lang-vi">Một đập nước có dạng hình thang: cao 20 m, rộng 50 m ở đỉnh và 30 m ở đáy. Tìm áp lực thủy tĩnh lên đập, biết mực nước thấp hơn đỉnh đập 4 m. Ở đây $\rho=1000$ kg/m³ là khối lượng riêng của nước và $g=9.8$ m/s² là gia tốc trọng trường.</span>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Why this is not straightforward</span><span class="lang-vi">Vì sao bài này không đơn giản</span></div>
<span class="lang-en">The pressure is not constant — it increases as the depth increases. So we first need to know how pressure depends on depth.</span>
<span class="lang-vi">Áp suất không phải hằng số — nó tăng khi độ sâu tăng. Vì vậy trước hết ta cần biết áp suất phụ thuộc độ sâu như thế nào.</span>
</div>
</div>
<img src="./images/dam.jpg" class="graph-img" alt="Trapezoidal dam with water level below the top">
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3.</span>
</div>

---
class: compact
---

# <span class="lang-en">Pressure Under Water</span><span class="lang-vi">Áp suất dưới nước</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Pressure at depth $d$</span><span class="lang-vi">Áp suất ở độ sâu $d$</span></div>
<span class="lang-en">A horizontal plate of area $A$ at depth $d$ in a fluid of density $\rho$ carries mass $\rho Ad$, weight $\rho g\,Ad$ ($g$ = gravity's acceleration). Pressure = force per unit area:</span>
<span class="lang-vi">Tấm ngang diện tích $A$ ở độ sâu $d$ trong chất lỏng có khối lượng riêng $\rho$ đỡ khối lượng $\rho Ad$, nặng $\rho g\,Ad$ ($g$ = gia tốc trọng trường). Áp suất = lực trên diện tích:</span>

$$
P=\frac{F}{A}=\rho g\,d
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">The same in all directions</span><span class="lang-vi">Như nhau theo mọi hướng</span></div>
<span class="lang-en">At any point in a liquid, the pressure is the same in all directions. So at depth $d$, a vertical surface also feels the pressure $\rho g\,d$.</span>
<span class="lang-vi">Tại mỗi điểm trong chất lỏng, áp suất như nhau theo mọi hướng. Vậy ở độ sâu $d$, mặt thẳng đứng cũng chịu áp suất $\rho g\,d$.</span>
</div>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Consequence: slice horizontally</span><span class="lang-vi">Hệ quả: cắt dải ngang</span></div>
<span class="lang-en">On a vertical face the pressure grows with depth. On a thin horizontal strip, however, the depth — and so the pressure — is essentially constant.</span>
<span class="lang-vi">Trên mặt thẳng đứng, áp suất tăng theo độ sâu. Nhưng trên một dải ngang mỏng, độ sâu — và do đó áp suất — hầu như không đổi.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3.</span>
</div>

---
class: compact
---

# <span class="lang-en">Force On A Submerged Wall</span><span class="lang-vi">Lực nước lên thành đứng</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Force on one strip</span><span class="lang-vi">Lực trên một dải</span></div>
<span class="lang-en">Let the wall be wet from depth $0$ to $H$, with width $L(x)$ at depth $x$. A strip there has area $L(x)\,dx$ and nearly constant pressure $\rho g\,x$:</span>
<span class="lang-vi">Giả sử thành ướt từ độ sâu $0$ đến $H$, bề rộng ở độ sâu $x$ là $L(x)$. Dải tại đó có diện tích $L(x)\,dx$ và áp suất gần như không đổi $\rho g\,x$:</span>

$$
dF=\rho g\,x\,L(x)\,dx
$$
</div>
<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Total hydrostatic force</span><span class="lang-vi">Tổng áp lực thủy tĩnh</span></div>
<span class="lang-en">Summing the strip forces and taking the limit of the Riemann sums:</span>
<span class="lang-vi">Cộng lực trên các dải và qua giới hạn của tổng Riemann:</span>

$$
F=\int_0^{H}\rho g\,x\,L(x)\,dx
$$
</div>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Strategy</span><span class="lang-vi">Chiến lược</span></div>
<span class="lang-en">Choose the depth variable $x$, find the wet depth $H$, and find the width $L(x)$ from the geometry of the face.</span>
<span class="lang-vi">Chọn biến độ sâu $x$, tìm độ sâu ướt $H$, và tìm bề rộng $L(x)$ từ hình học của mặt.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a> (problem-solving strategy); <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a> (chiến lược giải); <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 2 - Slice: One Horizontal Strip</span><span class="lang-vi">Tình huống 2 - cắt: một dải ngang</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">1. Choose the axis</span><span class="lang-vi">1. Chọn trục</span></div>
<span class="lang-en">Choose a vertical $x$-axis with origin at the surface of the water, directed downward. The water is $20-4=16$ m deep, so $0\le x\le16$.</span>
<span class="lang-vi">Chọn trục $x$ thẳng đứng, gốc tại mặt nước, hướng xuống dưới. Nước sâu $20-4=16$ m, nên $0\le x\le16$.</span>
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">2. Width from similar triangles</span><span class="lang-vi">2. Bề rộng từ tam giác đồng dạng</span></div>
<span class="lang-en">Let $a$ be the horizontal overhang of the sloped edge beside the strip (see figure). From similar triangles,</span>
<span class="lang-vi">Gọi $a$ là phần nhô ngang của cạnh xiên bên cạnh dải (xem hình). Từ tam giác đồng dạng,</span>

$$
\frac{a}{16-x}=\frac{10}{20}
\ \Rightarrow\ L(x)=2(15+a)=46-x
$$
</div>
</div>
<div>
<img src="./images/dam2.jpg" class="graph-img" alt="Dam cross-section with a horizontal strip and similar triangles">

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">3. Force on the strip at depth $x$</span><span class="lang-vi">3. Lực trên dải ở độ sâu $x$</span></div>
<span class="lang-en">Here $\rho g=1000\times9.8=9800$:</span>
<span class="lang-vi">Ở đây $\rho g=1000\times9.8=9800$:</span>

$$
dF=\underbrace{\rho g\,x}_{P}\,\underbrace{L(x)\,dx}_{dA}=9800\,x(46-x)\,dx
$$
</div>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3 (this is Example 2).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3 (đây là Ví dụ 2).</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 2 - Add And Interpret</span><span class="lang-vi">Tình huống 2 - cộng và diễn giải</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">4. Add the strip forces</span><span class="lang-vi">4. Cộng lực trên các dải</span></div>
<span class="lang-en">Adding the forces and taking the limit as $n\to\infty$:</span>
<span class="lang-vi">Cộng các lực và qua giới hạn khi $n\to\infty$:</span>

$$
F=\int_0^{16}9800\,x(46-x)\,dx
=9800\left[23x^2-\frac{x^3}{3}\right]_0^{16}
$$

$$
=9800\left(5888-\tfrac{4096}{3}\right)
\approx4.43\times10^7\ \text{N}
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">5. Interpret</span><span class="lang-vi">5. Diễn giải</span></div>
<span class="lang-en">About $4.4\times10^7$ N — the weight of roughly 4500 tonnes. Since $x(46-x)$ increases up to $x=16$, the deepest strips carry the largest forces, even though the dam is narrower there.</span>
<span class="lang-vi">Khoảng $4.4\times10^7$ N — bằng trọng lượng cỡ 4500 tấn. Vì $x(46-x)$ tăng đến tận $x=16$, các dải sâu nhất chịu lực lớn nhất, dù đập ở đó hẹp hơn.</span>
</div>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">A common error</span><span class="lang-vi">Một lỗi thường gặp</span></div>
<span class="lang-en">In $P=\rho g\,x$, depth is measured from the water surface, not from the top of the dam.</span>
<span class="lang-vi">Trong $P=\rho g\,x$, độ sâu được đo từ mặt nước, không phải từ đỉnh đập.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3 (this is Example 2).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 8.3 (đây là Ví dụ 2).</span>
</div>

---
class: compact
---

# <span class="lang-en">Money Through Time</span><span class="lang-vi">Tiền theo dòng thời gian</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Continuous compounding</span><span class="lang-vi">Ghép lãi liên tục</span></div>
<span class="lang-en">Compounded $n$ times a year at annual interest rate $r$, a deposit $PV$ (present value) grows after $t$ years to the future value $FV$. Letting $n\to\infty$:</span>
<span class="lang-vi">Ghép lãi $n$ lần mỗi năm với lãi suất năm $r$, khoản gửi $PV$ (hiện giá) sau $t$ năm tăng thành giá trị tương lai $FV$. Cho $n\to\infty$:</span>

$$
FV=PV\left(1+\frac{r}{n}\right)^{nt}
\ \xrightarrow{\ n\to\infty\ }\ PV\,e^{rt}
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Present value</span><span class="lang-vi">Hiện giá</span></div>
<span class="lang-en">The present value of $K$ dollars payable $t$ years from now is $Ke^{-rt}$ — the deposit today that grows to $K$.</span>
<span class="lang-vi">Hiện giá của $K$ đô-la nhận sau $t$ năm là $Ke^{-rt}$ — khoản gửi hôm nay sẽ tăng thành $K$.</span>
</div>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Summary</span><span class="lang-vi">Tóm tắt</span></div>
<span class="lang-en">Multiply by $e^{rt}$ to move money $t$ years forward in time; multiply by $e^{-rt}$ to move it back to today ($e$ enters through the limit above).</span>
<span class="lang-vi">Nhân với $e^{rt}$ để chuyển tiền tới $t$ năm sau; nhân với $e^{-rt}$ để chuyển ngược về hôm nay (số $e$ xuất hiện qua giới hạn ở trên).</span>
</div>

<div class="refs">
<span class="lang-en">Continuous money streams: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Dòng tiền liên tục: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Value Of An Income Stream</span><span class="lang-vi">Giá trị của dòng thu nhập</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">One small deposit</span><span class="lang-vi">Một khoản gửi nhỏ</span></div>
<span class="lang-en">$f(t)$ = the deposit rate, $r$ = the interest rate. The deposit in $[t,\,t+dt]$ is about $f(t)\,dt$; its present value is</span>
<span class="lang-vi">$f(t)$ = tốc độ gửi tiền, $r$ = lãi suất. Khoản gửi trong $[t,\,t+dt]$ xấp xỉ $f(t)\,dt$; hiện giá của nó là</span>

$$
dPV=f(t)\,e^{-rt}\,dt
$$
</div>
<div class="thm formula-stack">
<div class="tag"><span class="lang-en">Present value of the stream</span><span class="lang-vi">Hiện giá của dòng tiền</span></div>

$$
PV=\int_0^{T}f(t)\,e^{-rt}\,dt
$$
</div>
</div>

<div class="thm mt-3 formula-stack">
<span class="tag"><span class="lang-en">Future value of the stream</span><span class="lang-vi">Giá trị tương lai của dòng tiền</span></span>
<span class="lang-en">Each deposit still earns interest for $T-t$ more years (try X2):</span>
<span class="lang-vi">Mỗi khoản gửi còn sinh lãi thêm $T-t$ năm (thử X2):</span>

$$
FV=\int_0^{T}f(t)\,e^{r(T-t)}\,dt
$$
</div>

<div class="refs">
<span class="lang-en">Continuous money streams: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Dòng tiền liên tục: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Case 3 - Pricing A Machine</span><span class="lang-vi">Tình huống 3 - định giá cỗ máy</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">The question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">A machine generates income at the rate $f(t)=15-2t$ million dollars per year, $0\le t\le7$. Money can be invested at 8% compounded continuously. Find the machine's fair market price.</span>
<span class="lang-vi">Một cỗ máy tạo thu nhập với tốc độ $f(t)=15-2t$ triệu đô-la mỗi năm, $0\le t\le7$. Tiền có thể đầu tư với lãi suất 8% ghép liên tục. Tìm giá thị trường hợp lý của máy.</span>
</div>
<img src="./images/5year.jpg" class="graph-img" alt="Timeline of an income stream sliced into small deposits">
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Fair price = present value</span><span class="lang-vi">Giá hợp lý = hiện giá</span></div>
<span class="lang-en">The fair price is the present value of the machine's income. Substitute $f(t)=15-2t$, $r=0.08$, $T=7$:</span>
<span class="lang-vi">Giá hợp lý là hiện giá của dòng thu nhập của máy. Thế $f(t)=15-2t$, $r=0.08$, $T=7$:</span>

$$
PV=\int_0^7(15-2t)\,e^{-0.08t}\,dt
$$
</div>

<div class="refs">
<span class="lang-en">Continuous money streams: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Dòng tiền liên tục: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 3 - Solve: Present Value</span><span class="lang-vi">Tình huống 3 - giải: hiện giá</span>

<div class="grid-2">
<div class="box formula-stack">
<div class="label"><span class="lang-en">1. Integrate by parts</span><span class="lang-vi">1. Tích phân từng phần</span></div>
<span class="lang-en">Take $u=15-2t$, $dv=e^{-0.08t}dt$, so $du=-2\,dt$ and $v=-12.5\,e^{-0.08t}$:</span>
<span class="lang-vi">Chọn $u=15-2t$, $dv=e^{-0.08t}dt$, suy ra $du=-2\,dt$ và $v=-12.5\,e^{-0.08t}$:</span>

$$
\int(15-2t)e^{-0.08t}dt
=-12.5(15-2t)e^{-0.08t}-25\!\int e^{-0.08t}dt
$$

$$
=e^{-0.08t}(25t+125)
$$
</div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">2. Evaluate and check</span><span class="lang-vi">2. Thế cận và kiểm tra</span></div>

$$
PV=\Big[e^{-0.08t}(25t+125)\Big]_0^7
=300e^{-0.56}-125\approx46.36
$$

<span class="lang-en">Check: differentiating $e^{-0.08t}(25t+125)$ gives back $(15-2t)e^{-0.08t}$.</span>
<span class="lang-vi">Kiểm tra: đạo hàm $e^{-0.08t}(25t+125)$ trả lại đúng $(15-2t)e^{-0.08t}$.</span>
</div>
</div>

<div class="thm mt-3">
<span class="tag"><span class="lang-en">3. Interpret</span><span class="lang-vi">3. Diễn giải</span></span>
<span class="lang-en">The fair price is about 46.4 million dollars. In total the machine pays $\int_0^7(15-2t)\,dt=56$ million; discounting at 8% reduces its value today to 46.4 million.</span>
<span class="lang-vi">Giá hợp lý xấp xỉ 46.4 triệu đô-la. Tổng cộng cỗ máy trả $\int_0^7(15-2t)\,dt=56$ triệu; chiết khấu 8% đưa giá trị hôm nay về 46.4 triệu.</span>
</div>

<div class="refs">
<span class="lang-en">Continuous money streams: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Dòng tiền liên tục: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Case 4 - A Tire Market</span><span class="lang-vi">Tình huống 4 - thị trường lốp xe</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">The question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">Wholesalers will buy $q$ thousand tires when the price is $p=D(q)=90-0.1q^2$ dollars per tire, and producers will supply $q$ thousand tires when the price is $p=S(q)=0.2q^2+q+50$. Find the equilibrium price and the consumer's and producer's surplus there.</span>
<span class="lang-vi">Nhà bán sỉ sẽ mua $q$ nghìn lốp khi giá là $p=D(q)=90-0.1q^2$ đô-la/lốp, và nhà sản xuất sẽ cung ứng $q$ nghìn lốp khi giá là $p=S(q)=0.2q^2+q+50$. Tìm giá cân bằng cùng thặng dư tiêu dùng và thặng dư sản xuất tại đó.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Demand and supply curves</span><span class="lang-vi">Đường cầu và đường cung</span></div>
<span class="lang-en">The demand curve $p=D(q)$ gives the price per unit at which $q$ units can be sold; it decreases as $q$ increases. The supply curve $p=S(q)$ gives the price at which producers will supply $q$ units; it increases.</span>
<span class="lang-vi">Đường cầu $p=D(q)$ cho mức giá mỗi đơn vị mà tại đó bán được $q$ đơn vị; nó giảm khi $q$ tăng. Đường cung $p=S(q)$ cho mức giá mà tại đó nhà sản xuất cung ứng $q$ đơn vị; nó tăng.</span>
</div>
</div>
<img src="./images/surplus.jpg" class="graph-img" alt="Demand and supply curves with surplus areas">
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 8.4 (consumer surplus); notes on <a href="../../readings/">course readings</a>.</span>
<span class="lang-vi">Đọc: Stewart 8.4 (thặng dư tiêu dùng); ghi chú trên <a href="../../readings/">tài liệu đọc của môn</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Why Surplus Is An Area</span><span class="lang-vi">Vì sao thặng dư là diện tích</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Consumer surplus</span><span class="lang-vi">Thặng dư tiêu dùng</span></div>
<span class="lang-en">Suppose $q_0$ units sell, all at one price $p_0$. Buyers of the $dq$ units near $q$ would have paid $D(q)$ each — saving $(D(q)-p_0)\,dq$. Total saving = consumer surplus:</span>
<span class="lang-vi">Giả sử bán được $q_0$ đơn vị, cùng một giá $p_0$. Người mua $dq$ đơn vị quanh mức $q$ chịu trả tới $D(q)$ — tiết kiệm $(D(q)-p_0)\,dq$. Tổng tiết kiệm = thặng dư tiêu dùng:</span>

$$
CS=\int_0^{q_0}\big(D(q)-p_0\big)\,dq
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Producer surplus</span><span class="lang-vi">Thặng dư sản xuất</span></div>
<span class="lang-en">Producers would have supplied unit $q$ at the price $S(q)$ but receive $p_0$. Their total gain is the producer surplus:</span>
<span class="lang-vi">Nhà sản xuất sẵn lòng cung ứng đơn vị thứ $q$ với giá $S(q)$ nhưng nhận được $p_0$. Tổng phần lời của họ là thặng dư sản xuất:</span>

$$
PS=\int_0^{q_0}\big(p_0-S(q)\big)\,dq
$$
</div>
</div>

<div class="thm mt-3">
<span class="tag"><span class="lang-en">As areas</span><span class="lang-vi">Dưới dạng diện tích</span></span>
<span class="lang-en">$CS$ is the area between the demand curve and the line $p=p_0$; $PS$ is the area between $p=p_0$ and the supply curve — both from $0$ to $q_0$.</span>
<span class="lang-vi">$CS$ là diện tích giữa đường cầu và đường thẳng $p=p_0$; $PS$ là diện tích giữa $p=p_0$ và đường cung — đều tính từ $0$ đến $q_0$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 8.4 (consumer surplus); notes on <a href="../../readings/">course readings</a>.</span>
<span class="lang-vi">Đọc: Stewart 8.4 (thặng dư tiêu dùng); ghi chú trên <a href="../../readings/">tài liệu đọc của môn</a>.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 4 - Equilibrium: One Price</span><span class="lang-vi">Tình huống 4 - cân bằng: một mức giá</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">1. Supply equals demand</span><span class="lang-vi">1. Cung bằng cầu</span></div>

$$
D(q)=S(q)\ \Rightarrow\ 0.3q^2+q-40=0
$$

$$
q_0=10,\qquad p_0=D(10)=80
$$

<span class="lang-en">(the negative root $q=-40/3$ is rejected).</span>
<span class="lang-vi">(loại nghiệm âm $q=-40/3$).</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">What the surpluses measure</span><span class="lang-vi">Thặng dư đo điều gì</span></div>
<span class="lang-en">All $q_0$ units sell at the single price $p_0=80$ — yet buyers of earlier units were willing to pay more, and producers of earlier units to accept less. The surpluses measure these gains.</span>
<span class="lang-vi">Cả $q_0$ đơn vị đều bán ở một mức giá $p_0=80$ — nhưng người mua các đơn vị đầu sẵn lòng trả cao hơn, và nhà sản xuất các đơn vị đầu chấp nhận thấp hơn. Thặng dư đo các phần lợi này.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 8.4 (consumer surplus); notes on <a href="../../readings/">course readings</a>.</span>
<span class="lang-vi">Đọc: Stewart 8.4 (thặng dư tiêu dùng); ghi chú trên <a href="../../readings/">tài liệu đọc của môn</a>.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 4 - Compute The Surpluses</span><span class="lang-vi">Tình huống 4 - tính hai thặng dư</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">2. Consumer surplus</span><span class="lang-vi">2. Thặng dư tiêu dùng</span></div>
<span class="lang-en">Substitute $D(q)=90-0.1q^2$, $p_0=80$, $q_0=10$ into the boxed formula:</span>
<span class="lang-vi">Thế $D(q)=90-0.1q^2$, $p_0=80$, $q_0=10$ vào công thức đã đóng khung:</span>

$$
CS=\int_0^{10}\big(10-0.1q^2\big)\,dq=\frac{200}{3}
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">3. Producer surplus</span><span class="lang-vi">3. Thặng dư sản xuất</span></div>
<span class="lang-en">And $S(q)=0.2q^2+q+50$ into the formula for $PS$:</span>
<span class="lang-vi">Và $S(q)=0.2q^2+q+50$ vào công thức của $PS$:</span>

$$
PS=\int_0^{10}\big(30-q-0.2q^2\big)\,dq=\frac{550}{3}
$$
</div>
</div>

<div class="thm mt-3">
<span class="tag"><span class="lang-en">4. Interpret</span><span class="lang-vi">4. Diễn giải</span></span>
<span class="lang-en">Units: thousands of dollars. $CS\approx66.7$, $PS\approx183.3$ — producers gain more, since supply starts 30 below the price and demand only 10 above.</span>
<span class="lang-vi">Đơn vị: nghìn đô-la. $CS\approx66.7$, $PS\approx183.3$ — nhà sản xuất lợi hơn, vì đường cung thấp hơn giá 30 còn đường cầu chỉ cao hơn 10.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 8.4 (consumer surplus); notes on <a href="../../readings/">course readings</a>.</span>
<span class="lang-vi">Đọc: Stewart 8.4 (thặng dư tiêu dùng); ghi chú trên <a href="../../readings/">tài liệu đọc của môn</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Case 5 - A Clinic With Arrivals</span><span class="lang-vi">Tình huống 5 - phòng khám có bệnh nhân mới</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">The question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">A new clinic accepts 300 patients when it opens. The fraction of patients still receiving treatment $t$ months after joining is $f(t)=e^{-t/20}$, and new patients arrive at the rate of 10 per month. How many patients will be in treatment 15 months from now?</span>
<span class="lang-vi">Một phòng khám mới nhận 300 bệnh nhân khi mở cửa. Tỉ lệ bệnh nhân còn được điều trị $t$ tháng sau khi vào là $f(t)=e^{-t/20}$, và bệnh nhân mới đến với tốc độ 10 người mỗi tháng. Hỏi 15 tháng nữa có bao nhiêu bệnh nhân đang được điều trị?</span>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Two groups of patients</span><span class="lang-vi">Hai nhóm bệnh nhân</span></div>
<span class="lang-en">At month 15 there are two kinds of patients: the remaining originals, and later arrivals. A patient admitted at time $t$ has then been treated for only $15-t$ months.</span>
<span class="lang-vi">Ở tháng 15 có hai nhóm bệnh nhân: những người ban đầu còn lại, và những người vào sau. Bệnh nhân vào ở thời điểm $t$ khi đó mới được điều trị $15-t$ tháng.</span>
</div>
</div>
<img src="./images/treatment.jpg" class="graph-img" alt="Timeline of patients arriving and leaving treatment">
</div>

<div class="refs">
<span class="lang-en">Survival-and-renewal models: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Mô hình tồn tại và bổ sung: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Survival And Renewal: The Formula</span><span class="lang-vi">Tồn tại và bổ sung: công thức</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">The original group</span><span class="lang-vi">Nhóm ban đầu</span></div>
<span class="lang-en">A group starts with $P_0$ members, and $f(t)$ is the fraction that remains $t$ months after joining. Of the originals, $P_0\,f(T)$ remain at time $T$.</span>
<span class="lang-vi">Một nhóm bắt đầu với $P_0$ thành viên, và $f(t)$ là tỉ lệ còn lại $t$ tháng sau khi vào. Trong nhóm ban đầu, còn $P_0\,f(T)$ ở thời điểm $T$.</span>
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">The arrivals</span><span class="lang-vi">Nhóm vào sau</span></div>
<span class="lang-en">Of the $r(t)\,dt$ members arriving during $[t,\,t+dt]$, the fraction $f(T-t)$ remains at time $T$:</span>
<span class="lang-vi">Trong $r(t)\,dt$ thành viên vào lúc $[t,\,t+dt]$, tỉ lệ $f(T-t)$ còn lại ở thời điểm $T$:</span>

$$
dP=r(t)\,f(T-t)\,dt
$$
</div>
</div>

<div class="thm mt-3 formula-stack">
<span class="tag"><span class="lang-en">Population at time $T$</span><span class="lang-vi">Số lượng ở thời điểm $T$</span></span>

$$
P(T)=P_0\,f(T)+\int_0^{T}r(t)\,f(T-t)\,dt
$$
</div>

<div class="refs">
<span class="lang-en">Survival-and-renewal models: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Mô hình tồn tại và bổ sung: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 5 - Apply The Formula</span><span class="lang-vi">Tình huống 5 - áp dụng công thức</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Identify the ingredients</span><span class="lang-vi">Xác định các thành phần</span></div>
<span class="lang-en">$P_0=300$, arrival rate $r(t)=10$ patients per month, survival fraction $f(t)=e^{-t/20}$, and $T=15$ months.</span>
<span class="lang-vi">$P_0=300$, tốc độ vào $r(t)=10$ bệnh nhân mỗi tháng, tỉ lệ còn lại $f(t)=e^{-t/20}$, và $T=15$ tháng.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Why $f(15-t)$, not $f(t)$</span><span class="lang-vi">Vì sao là $f(15-t)$, không phải $f(t)$</span></div>
<span class="lang-en">A patient admitted at time $t$ has been in treatment for $15-t$ months at month 15, so the fraction remaining is $f(15-t)$.</span>
<span class="lang-vi">Bệnh nhân vào ở thời điểm $t$ thì đến tháng 15 mới điều trị được $15-t$ tháng, nên tỉ lệ còn lại là $f(15-t)$.</span>
</div>
</div>

<div class="thm mt-3 formula-stack">
<span class="tag"><span class="lang-en">The number to evaluate</span><span class="lang-vi">Biểu thức cần tính</span></span>

$$
P(15)=300\,e^{-15/20}+\int_0^{15}10\,e^{-(15-t)/20}\,dt
$$
</div>

<div class="refs">
<span class="lang-en">Survival-and-renewal models: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Mô hình tồn tại và bổ sung: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Case 5 - Solve And Look Ahead</span><span class="lang-vi">Tình huống 5 - giải và nhìn xa hơn</span>

<div class="grid-2">
<div class="box formula-stack">
<div class="label"><span class="lang-en">1. Evaluate the integral</span><span class="lang-vi">1. Tính tích phân</span></div>
<span class="lang-en">Substitute $u=15-t$, $du=-dt$; the limits $t:0\to15$ become $u:15\to0$:</span>
<span class="lang-vi">Đổi biến $u=15-t$, $du=-dt$; cận $t:0\to15$ thành $u:15\to0$:</span>

$$
\int_0^{15}10\,e^{-(15-t)/20}\,dt
=\int_0^{15}10\,e^{-u/20}\,du
=200\big(1-e^{-0.75}\big)
$$
</div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">2. Count both groups</span><span class="lang-vi">2. Đếm cả hai nhóm</span></div>

$$
P(15)=300e^{-0.75}+200\big(1-e^{-0.75}\big)
$$

$$
\approx141.7+105.5\approx247
$$

<span class="lang-en">About 247 patients will be in treatment.</span>
<span class="lang-vi">Khoảng 247 bệnh nhân đang được điều trị.</span>
</div>
</div>

<div class="thm mt-3">
<span class="tag"><span class="lang-en">3. Look ahead</span><span class="lang-vi">3. Nhìn xa hơn</span></span>
<span class="lang-en">As $T\to\infty$ the originals tend to $0$ and the arrivals term to $200$ = rate × average stay ($\int_0^\infty e^{-t/20}dt=20$ months): the clinic approaches a steady 200 patients.</span>
<span class="lang-vi">Khi $T\to\infty$, nhóm cũ tiến về $0$ còn nhóm vào sau tiến về $200$ = tốc độ vào × thời gian ở trung bình ($\int_0^\infty e^{-t/20}dt=20$ tháng): phòng khám tiến về mức ổn định 200 bệnh nhân.</span>
</div>

<div class="refs">
<span class="lang-en">Survival-and-renewal models: instructor notes — see <a href="../../readings/">course readings</a>; related: Stewart 8.4.</span>
<span class="lang-vi">Mô hình tồn tại và bổ sung: ghi chú môn học — xem <a href="../../readings/">tài liệu đọc của môn</a>; đọc thêm: Stewart 8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Five Models, One Recipe</span><span class="lang-vi">Năm mô hình, một công thức chung</span>

<div class="method-grid app-methods">
<div class="method-card">
<strong><span class="lang-en">Spring</span><span class="lang-vi">Lò xo</span></strong>
<span class="lang-en">force × small stretch</span>
<span class="lang-vi">lực × đoạn giãn nhỏ</span>

$$
dW=kx\,dx
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Dam</span><span class="lang-vi">Đập nước</span></strong>
<span class="lang-en">pressure × strip area</span>
<span class="lang-vi">áp suất × diện tích dải</span>

$$
dF=\rho g\,x\,L(x)\,dx
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Pricing</span><span class="lang-vi">Định giá</span></strong>
<span class="lang-en">deposit, discounted</span>
<span class="lang-vi">khoản gửi, đã chiết khấu</span>

$$
dPV=f(t)\,e^{-rt}\,dt
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Market</span><span class="lang-vi">Thị trường</span></strong>
<span class="lang-en">saving on each unit</span>
<span class="lang-vi">khoản lời trên từng đơn vị</span>

$$
dCS=\big(D(q)-p_0\big)\,dq
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Clinic</span><span class="lang-vi">Phòng khám</span></strong>
<span class="lang-en">arrivals × fraction left</span>
<span class="lang-vi">người vào × tỉ lệ còn lại</span>

$$
dP=r(t)\,f(T-t)\,dt
$$
</div>
</div>

<div class="box blue mt-4">
<div class="label"><span class="lang-en">Check units first</span><span class="lang-vi">Kiểm tra đơn vị trước</span></div>
<span class="lang-en">Write the small piece first and check its units; wrong units mean a wrong integral.</span>
<span class="lang-vi">Hãy viết phần nhỏ trước và kiểm tra đơn vị của nó; đơn vị sai nghĩa là tích phân sai.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4, 8.3-8.4.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; <a href="https://activecalculus.org/single/sec-6-4-physics.html">Active Calculus 6.4</a>; Stewart 6.4, 8.3-8.4.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Applications I</span><span class="lang-vi">Tự luyện: ứng dụng I</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">X1</div>
<span class="lang-en">When a particle is located a distance $x$ metres from the origin, a force of $x^2+2x$ newtons acts on it. How much work is done in moving it from $x=1$ to $x=3$?</span>
<span class="lang-vi">Khi chất điểm cách gốc tọa độ $x$ mét, một lực $x^2+2x$ newton tác dụng lên nó. Hỏi cần bao nhiêu công để di chuyển nó từ $x=1$ đến $x=3$?</span>
</div>
<div class="exercise-card">
<div class="num">X2</div>
<span class="lang-en">You deposit 1200 dollars per year continuously into an account paying 6% per year, compounded continuously. How much is in the account after 10 years?</span>
<span class="lang-vi">Bạn gửi liên tục 1200 đô-la mỗi năm vào tài khoản lãi suất 6%/năm, ghép lãi liên tục. Sau 10 năm tài khoản có bao nhiêu?</span>
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">X1: apply the definition of work. X2: a deposit made at time $t$ grows for $10-t$ years, so $dFV=1200e^{0.06(10-t)}\,dt$.</span>
<span class="lang-vi">X1: áp dụng định nghĩa của công. X2: khoản gửi lúc $t$ sinh lãi trong $10-t$ năm, nên $dFV=1200e^{0.06(10-t)}\,dt$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>X1: $W=\dfrac{50}{3}\approx16.7$ J</span><br>
<span class="blur-step" v-click>X2: $FV=20000\big(e^{0.6}-1\big)\approx16442$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Vol 1, 6.5</a>; Stewart 6.4 (X1 is Example 1).</span>
<span class="lang-vi">Luyện tập: <a href="https://openstax.org/books/calculus-volume-1/pages/6-5-physical-applications">OpenStax Tập 1, 6.5</a>; Stewart 6.4 (X1 là Ví dụ 1).</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Applications II</span><span class="lang-vi">Tự luyện: ứng dụng II</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">X3</div>
<span class="lang-en">Marginal cost $C'(x)=0.1x^2+4x+10$, marginal revenue $R'(x)=70-x$ (thousand dollars/unit). Find $x_m$ where they are equal, and the net earnings $\int_0^{x_m}\big(R'-C'\big)\,dx$.</span>
<span class="lang-vi">Chi phí biên $C'(x)=0.1x^2+4x+10$, doanh thu biên $R'(x)=70-x$ (nghìn đô-la/đơn vị). Tìm $x_m$ tại đó chúng bằng nhau, và lợi nhuận ròng $\int_0^{x_m}\big(R'-C'\big)\,dx$.</span>
</div>
<div class="exercise-card">
<div class="num">X4</div>
<span class="lang-en">Blood at distance $r$ from the axis of an artery of radius $R$ flows at speed $S(r)=k(R^2-r^2)$, where $k$ is a constant. Slicing the cross-section into thin rings, find the volume rate of blood flow.</span>
<span class="lang-vi">Máu ở cách trục động mạch (bán kính $R$) một khoảng $r$ chảy với tốc độ $S(r)=k(R^2-r^2)$, với $k$ là hằng số. Cắt tiết diện thành các vành mỏng, tìm lưu lượng máu chảy qua động mạch.</span>
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">X3: solve $C'(x)=R'(x)$, reject the negative root. X4: a ring at radius $r$ has area $2\pi r\,dr$, and all of it moves at speed $S(r)$.</span>
<span class="lang-vi">X3: giải $C'(x)=R'(x)$, loại nghiệm âm. X4: vành ở bán kính $r$ có diện tích $2\pi r\,dr$, và cả vành chuyển động với tốc độ $S(r)$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>X3: $x_m=10$; $\displaystyle\int_0^{10}\big(R'-C'\big)\,dx=\dfrac{950}{3}\approx316.7$</span><br>
<span class="blur-step" v-click>X4: $\dfrac{\pi kR^4}{2}$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: Stewart 8.4 (blood flow); notes on <a href="../../readings/">course readings</a>.</span>
<span class="lang-vi">Luyện tập: Stewart 8.4 (dòng máu); ghi chú trên <a href="../../readings/">tài liệu đọc của môn</a>.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Mixed Practice I: Setups</span><span class="lang-vi">Luyện tập tổng hợp I: thiết lập</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">M1 Area</div>
<span class="lang-en">Set up, but do not evaluate, the area between</span>
<span class="lang-vi">Thiết lập, chưa cần tính, diện tích giữa</span>

$$
y=4-x^2,\qquad y=1.
$$
</div>
<div class="exercise-card">
<div class="num">M2 Washer</div>
<span class="lang-en">Set up the volume when the M1 region is rotated about the $x$-axis.</span>
<span class="lang-vi">Thiết lập thể tích khi miền M1 quay quanh trục $x$.</span>
</div>
<div class="exercise-card">
<div class="num">M3 Shell</div>
<span class="lang-en">Set up the volume when the M1 region in $x\ge0$ rotates about the $y$-axis.</span>
<span class="lang-vi">Thiết lập thể tích khi phần M1 với $x\ge0$ quay quanh trục $y$.</span>
</div>
<div class="exercise-card">
<div class="num">M4 Compare</div>
<span class="lang-en">Which setup uses fewer algebraic pieces: washers or shells?</span>
<span class="lang-vi">Thiết lập nào ít phần đại số hơn: vòng đệm hay vỏ trụ?</span>
</div>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Goal</span><span class="lang-vi">Mục tiêu</span></div>
<span class="lang-en">Do not rush to integrate. First decide the axis, the slice direction, and the radius/height.</span>
<span class="lang-vi">Đừng vội tính. Trước hết xác định trục quay, hướng lát cắt, và bán kính/chiều cao.</span>
</div>

<div class="refs">
<span class="lang-en">Setup practice: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>-<a href="https://activecalculus.org/single/sec-6-2-volume.html">6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax 6.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">6.3</a>; Stewart 6.1-6.3.</span>
<span class="lang-vi">Luyện thiết lập: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>-<a href="https://activecalculus.org/single/sec-6-2-volume.html">6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax 6.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells">6.3</a>; Stewart 6.1-6.3.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Mixed Practice II: Compute</span><span class="lang-vi">Luyện tập tổng hợp II: tính toán</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">C1</div>
<span class="lang-en">Area between $y=x-x^2$ and $y=x\sqrt{1-x}$.</span>
<span class="lang-vi">Diện tích giữa $y=x-x^2$ và $y=x\sqrt{1-x}$.</span>
</div>
<div class="exercise-card">
<div class="num">C2</div>
<span class="lang-en">Volume from rotating $y=\sqrt{x}$, $0\le x\le4$, about the $x$-axis.</span>
<span class="lang-vi">Thể tích khi quay $y=\sqrt{x}$, $0\le x\le4$, quanh trục $x$.</span>
</div>
<div class="exercise-card">
<div class="num">C3</div>
<span class="lang-en">Arc length of $y=\frac{x^3}{12}+\frac1x$, $1\le x\le4$.</span>
<span class="lang-vi">Độ dài cung của $y=\frac{x^3}{12}+\frac1x$, $1\le x\le4$.</span>
</div>
<div class="exercise-card">
<div class="num">C4</div>
<span class="lang-en">Surface area for $y=\sqrt{x^2+4}$, $0\le x\le1$, about the $x$-axis.</span>
<span class="lang-vi">Diện tích mặt của $y=\sqrt{x^2+4}$, $0\le x\le1$, quay quanh trục $x$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Mixed practice: use the <a href="../../readings/">Session 9 reading map</a>; OpenStax 6.1-6.4 and Stewart 6.1-6.5, 8.1-8.4 are the student practice anchors.</span>
<span class="lang-vi">Luyện tổng hợp: dùng <a href="../../readings/">bản đồ đọc Buổi 9</a>; OpenStax 6.1-6.4 và Stewart 6.1-6.5, 8.1-8.4 là nguồn bài tập chính.</span>
</div>

---

# <span class="lang-en">Decision Chart</span><span class="lang-vi">Bảng chọn phương pháp</span>

<div class="method-grid">
<div class="method-card">
<strong><span class="lang-en">Area</span><span class="lang-vi">Diện tích</span></strong>
<span class="lang-en">Vertical slice: top minus bottom.</span>
<span class="lang-vi">Lát dọc: trên trừ dưới.</span>

$$
\int(\text{top}-\text{bottom})\,dx
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Washer</span><span class="lang-vi">Vòng đệm</span></strong>
<span class="lang-en">Slice perpendicular to rotation axis.</span>
<span class="lang-vi">Lát vuông góc với trục quay.</span>

$$
\pi\int(R^2-r^2)
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Shell</span><span class="lang-vi">Vỏ trụ</span></strong>
<span class="lang-en">Slice parallel to rotation axis.</span>
<span class="lang-vi">Lát song song với trục quay.</span>

$$
2\pi\int rh
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Length / Surface</span><span class="lang-vi">Độ dài / mặt</span></strong>
<span class="lang-en">Build from arc length.</span>
<span class="lang-vi">Xây từ độ dài cung.</span>

$$
ds=\sqrt{1+(y')^2}\,dx
$$
</div>
</div>

<div class="caution mt-4">
<div class="label"><span class="lang-en">The most common error</span><span class="lang-vi">Lỗi thường gặp nhất</span></div>
<span class="lang-en">Using the right formula with the wrong radius or wrong interval.</span>
<span class="lang-vi">Dùng đúng công thức nhưng sai bán kính hoặc sai khoảng lấy tích phân.</span>
</div>

<div class="refs">
<span class="lang-en">Review map: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>-<a href="https://activecalculus.org/single/sec-6-2-volume.html">6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax 6.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">6.4</a>; Stewart 6.1-6.5, 8.1-8.4.</span>
<span class="lang-vi">Bản đồ ôn tập: <a href="https://activecalculus.org/single/sec-6-1-area.html">Active Calculus 6.1</a>-<a href="https://activecalculus.org/single/sec-6-2-volume.html">6.2</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves">OpenStax 6.1</a>-<a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">6.4</a>; Stewart 6.1-6.5, 8.1-8.4.</span>
</div>

---

# <span class="lang-en">Reading And Practice Sources</span><span class="lang-vi">Nguồn đọc và luyện tập</span>

<div class="source-list compact-sources">
<div class="source-item">
<strong>Boelkins, M.</strong>&nbsp;
<span class="lang-en"><em>Active Calculus</em> (2nd ed.), Sections 6.1, 6.2, 6.4.</span>
<span class="lang-vi"><em>Active Calculus</em> (ấn bản thứ 2), Mục 6.1, 6.2, 6.4.</span>
</div>
<div class="source-item">
<strong>Strang, G., & Herman, E. "Jed".</strong>&nbsp;
<span class="lang-en"><em>Calculus Volume 1</em>, OpenStax, Sections 6.1-6.6.</span>
<span class="lang-vi"><em>Calculus Volume 1</em>, OpenStax, Mục 6.1-6.6.</span>
</div>
<div class="source-item">
<strong>Stewart, J.</strong>&nbsp;
<span class="lang-en"><em>Calculus: Early Transcendentals</em> (8th ed., metric version), Sections 6.1-6.5 and 8.1-8.4.</span>
<span class="lang-vi"><em>Calculus: Early Transcendentals</em> (ấn bản thứ 8, bản metric), Mục 6.1-6.5 và 8.1-8.4.</span>
</div>
<div class="source-item">
<strong>Lê Xuân Đại.</strong>&nbsp;
<span class="lang-en">HCMUT lecture slides: physical applications; applications to business, economics, and life sciences (source of the five application cases).</span>
<span class="lang-vi">Slide bài giảng ĐHBK TP.HCM: ứng dụng vật lý; ứng dụng trong kinh doanh, kinh tế và khoa học sự sống (nguồn của năm tình huống ứng dụng).</span>
</div>
<div class="source-item">
<strong><span class="lang-en">Instructor notes.</span><span class="lang-vi">Ghi chú của giảng viên.</span></strong>&nbsp;
<span class="lang-en">Local examples and extra exercises adapted for MT1003 Calculus 1.</span>
<span class="lang-vi">Ví dụ và bài tập bổ sung được điều chỉnh cho MT1003 Giải tích 1.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Full map: <a href="../../readings/">course readings</a>. Use section titles if a Stewart edition has different numbering.</span>
<span class="lang-vi">Bản đồ đầy đủ: <a href="../../readings/">tài liệu đọc của môn</a>. Nếu phiên bản Stewart khác số mục, hãy dùng tên mục.</span>
</div>
