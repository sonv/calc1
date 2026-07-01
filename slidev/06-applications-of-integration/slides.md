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
<div class="tl-row"><span class="clock">135-155</span><span><span class="lang-en"><strong>Physical/economic models</strong> - work, pressure, present value, surplus</span><span class="lang-vi"><strong>Mô hình vật lý/kinh tế</strong> - công, áp lực, hiện giá, thặng dư</span></span></div>
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
<div class="label"><span class="lang-en">Set up</span><span class="lang-vi">Thiết lập</span></div>

$$
4x-x^2=x(4-x)=0
$$

$$
A=\int_0^4(4x-x^2)\,dx
$$
</div>
</div>
<img src="./images/2.jpeg" class="graph-img" alt="Parabolic region bounded by x-axis">
</div>

<div class="thm mt-3">

$$
A=\left[2x^2-\frac{x^3}{3}\right]_0^4=\frac{32}{3}.
$$
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
$$

$$
(x-3)(x+4)=0.
$$

$$
A=\int_{-4}^{3}(-x^2-x+12)\,dx=\frac{343}{6}.
$$
</div>
</div>
<img src="./images/dt_1.jpg" class="graph-img" alt="Line and parabola enclosed region">
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
<img src="./images/the_tich_3.jpg" class="graph-img" alt="Sphere cross section">
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
S=\pi\int_0^2\sqrt{1+t^2}\,dt.
$$
</div>
</div>

<div class="thm mt-3">

$$
S=\pi\left(\sqrt5+\frac12\ln(2+\sqrt5)\right).
$$
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
<img src="./images/6.JPG" class="graph-img" alt="Surface area formula figure">
</div>

<div class="refs">
<span class="lang-en">Surface-area practice: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Vol 1, 6.4</a>; Stewart 8.1-8.4.</span>
<span class="lang-vi">Luyện diện tích mặt: <a href="https://openstax.org/books/calculus-volume-1/pages/6-4-arc-length-of-a-curve-and-surface-area">OpenStax Tập 1, 6.4</a>; Stewart 8.1-8.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Physical Applications</span><span class="lang-vi">Ứng dụng vật lý</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Same integral, different unit</span><span class="lang-vi">Cùng tích phân, khác đơn vị</span></div>
<span class="lang-en">First identify the tiny contribution, then add it over the interval.</span>
<span class="lang-vi">Trước hết nhận diện phần đóng góp rất nhỏ, rồi cộng trên khoảng.</span>
</div>

<div class="method-grid app-methods mt-3">
<div class="method-card">
<strong><span class="lang-en">Work</span><span class="lang-vi">Công</span></strong>

$$
dW=F(x)\,dx
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Spring</span><span class="lang-vi">Lò xo</span></strong>

$$
F(x)=kx
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Fluid force</span><span class="lang-vi">Áp lực chất lỏng</span></strong>

$$
dF=\rho g\,hL\,dy
$$
</div>
</div>
</div>
<div class="img-strip vertical-strip">
<img src="./images/hooke.jpg" class="graph-img" alt="Spring force illustration">
<img src="./images/pressure3.jpg" class="graph-img" alt="Fluid pressure on a plate">
<img src="./images/dam.jpg" class="graph-img" alt="Dam force illustration">
</div>
</div>

<div class="refs">
<span class="lang-en">Physical applications: OpenStax Vol 1, 6.5; related setup ideas from Active Calculus 6.4 and Stewart 6.5.</span>
<span class="lang-vi">Ứng dụng vật lý: OpenStax Tập 1, 6.5; ý tưởng thiết lập liên quan từ Active Calculus 6.4 và Stewart 6.5.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Physical Models</span><span class="lang-vi">Tự luyện: mô hình vật lý</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">P1 Work</div>
<span class="lang-en">A force of $F(x)=x^2+2x$ lb moves an object from $x=1$ to $x=3$ ft.</span>
<span class="lang-vi">Lực $F(x)=x^2+2x$ lb di chuyển vật từ $x=1$ đến $x=3$ ft.</span>
</div>
<div class="exercise-card">
<div class="num">P2 Spring</div>
<span class="lang-en">A 40 N force holds a spring stretched from 10 cm to 15 cm. Find the work to stretch it from 5 cm to 8 cm past natural length.</span>
<span class="lang-vi">Lực 40 N giữ lò xo giãn từ 10 cm đến 15 cm. Tính công để kéo từ 5 cm đến 8 cm so với chiều dài tự nhiên.</span>
</div>
<div class="exercise-card">
<div class="num">P3 Fluid</div>
<span class="lang-en">A vertical dam face is 20 m high, 50 m wide at the top and 30 m wide at the bottom. Water is 4 m below the top. Set up the force.</span>
<span class="lang-vi">Mặt đập cao 20 m, rộng 50 m ở trên và 30 m ở đáy. Mực nước thấp hơn đỉnh 4 m. Thiết lập áp lực.</span>
</div>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Before computing</span><span class="lang-vi">Trước khi tính</span></div>
<span class="lang-en">Write the small piece first, then check the unit of the final answer.</span>
<span class="lang-vi">Viết phần nhỏ cần cộng trước, rồi kiểm tra đơn vị của đáp số.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 1, 6.5; extra practice: Stewart 6.5; local instructor exercises.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 1, 6.5; luyện thêm: Stewart 6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution P1: Variable Work</span><span class="lang-vi">Lời giải P1: công với lực biến thiên</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Small piece</span><span class="lang-vi">Phần nhỏ</span></div>
<span class="lang-en">During a tiny displacement $dx$, the force is nearly constant.</span>
<span class="lang-vi">Trong một dịch chuyển rất nhỏ $dx$, lực gần như không đổi.</span>

$$
dW=F(x)\,dx=(x^2+2x)\,dx.
$$
</div>
<div class="box formula-stack">
<div class="label"><span class="lang-en">Add from $1$ to $3$</span><span class="lang-vi">Cộng từ $1$ đến $3$</span></div>

$$
W=\int_1^3(x^2+2x)\,dx
$$

$$
W=\left[\frac{x^3}{3}+x^2\right]_1^3
=18-\frac43=\frac{50}{3}.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">The unit is force times distance, so $W=\dfrac{50}{3}$ ft-lb.</span>
<span class="lang-vi">Đơn vị là lực nhân quãng đường, nên $W=\dfrac{50}{3}$ ft-lb.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example: OpenStax Vol 1, 6.5; Stewart 6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: OpenStax Tập 1, 6.5; Stewart 6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution P2: Spring Work</span><span class="lang-vi">Lời giải P2: công kéo lò xo</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Find the spring constant</span><span class="lang-vi">Tìm hằng số lò xo</span></div>
<span class="lang-en">The extension is $15-10=5$ cm, or $0.05$ m.</span>
<span class="lang-vi">Độ giãn là $15-10=5$ cm, tức $0.05$ m.</span>

$$
F=kx,\qquad 40=k(0.05)
$$

$$
k=800\ \text{N/m}.
$$
</div>
<div class="box formula-stack">
<div class="label"><span class="lang-en">Integrate the force</span><span class="lang-vi">Tích phân lực</span></div>
<span class="lang-en">Stretching from 5 cm to 8 cm means $x=0.05$ to $0.08$ m.</span>
<span class="lang-vi">Kéo từ 5 cm đến 8 cm nghĩa là $x=0.05$ đến $0.08$ m.</span>

$$
W=\int_{0.05}^{0.08}800x\,dx
=400x^2\Big|_{0.05}^{0.08}
$$

$$
W=400(0.08^2-0.05^2)=1.56.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">The work is $1.56$ J, since N m = J.</span>
<span class="lang-vi">Công bằng $1.56$ J, vì N m = J.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example: OpenStax Vol 1, 6.5; Stewart 6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: OpenStax Tập 1, 6.5; Stewart 6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution P3: Hydrostatic Force</span><span class="lang-vi">Lời giải P3: áp lực thủy tĩnh</span>

<div class="grid-2 align-center">
<div class="formula-stack">
<div class="box gold">
<div class="label"><span class="lang-en">Choose depth $x$</span><span class="lang-vi">Chọn độ sâu $x$</span></div>
<span class="lang-en">Let $x$ be depth below the water surface. Then $0\le x\le16$.</span>
<span class="lang-vi">Gọi $x$ là độ sâu dưới mặt nước. Khi đó $0\le x\le16$.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Strip width</span><span class="lang-vi">Chiều rộng dải</span></div>
<span class="lang-en">The dam narrows linearly: at depth $x$, the width is $L(x)=46-x$.</span>
<span class="lang-vi">Mặt đập hẹp tuyến tính: tại độ sâu $x$, chiều rộng là $L(x)=46-x$.</span>
</div>
</div>
<img src="./images/dam.jpg" class="graph-img" alt="Dam force illustration">
</div>

<div class="thm mt-3 formula-stack">

$$
dF=1000(9.8)\,x(46-x)\,dx
$$

$$
F=1000(9.8)\int_0^{16}x(46-x)\,dx
\approx4.43\times10^7\ \text{N}.
$$
</div>

<div class="refs">
<span class="lang-en">Worked example: OpenStax Vol 1, 6.5; Stewart 6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: OpenStax Tập 1, 6.5; Stewart 6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact
---

# <span class="lang-en">Economic Applications</span><span class="lang-vi">Ứng dụng kinh tế</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Accumulate money continuously</span><span class="lang-vi">Tích lũy tiền liên tục</span></div>
<span class="lang-en">A payment made at time $t$ grows or discounts according to how far it is from the target time.</span>
<span class="lang-vi">Một khoản tiền tại thời điểm $t$ tăng trưởng hoặc chiết khấu tùy khoảng cách đến thời điểm mục tiêu.</span>
</div>

<div class="grid-2 mt-3 economic-formulas">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Future value</span><span class="lang-vi">Giá trị tương lai</span></div>

$$
FV=\int_0^T f(t)e^{r(T-t)}\,dt
$$
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Present value</span><span class="lang-vi">Hiện giá</span></div>

$$
PV=\int_0^T f(t)e^{-rt}\,dt
$$
</div>
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Marginal profit</span><span class="lang-vi">Lợi nhuận biên</span></div>

$$
\Delta E=\int_a^b\big(R'(x)-C'(x)\big)\,dx
$$
</div>
</div>
<div class="img-strip vertical-strip">
<img src="./images/compounding.jpg" class="graph-img" alt="Continuous compounding">
<img src="./images/5year.jpg" class="graph-img" alt="Continuous income stream timeline">
<img src="./images/surplus.jpg" class="graph-img" alt="Consumer and producer surplus">
</div>
</div>

<div class="refs">
<span class="lang-en">Economic applications use the same accumulation principle as OpenStax Vol 1, 6.1-6.6; practice anchors: Stewart 6.1-6.5 and local instructor exercises.</span>
<span class="lang-vi">Ứng dụng kinh tế dùng cùng nguyên lý cộng dồn như OpenStax Tập 1, 6.1-6.6; nguồn luyện tập: Stewart 6.1-6.5 và bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Economic Models I: Money Streams</span><span class="lang-vi">Mô hình kinh tế I: dòng tiền</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">E1 Future value</div>
<span class="lang-en">Deposit 1500 dollars per year continuously for 5 years at 7% continuously compounded interest.</span>
<span class="lang-vi">Gửi liên tục 1500 đô-la mỗi năm trong 5 năm với lãi suất ghép liên tục 7%.</span>
</div>
<div class="exercise-card">
<div class="num">E2 Present value</div>
<span class="lang-en">A machine earns $15-2t$ million dollars/year for $0\le t\le7$. Discount at 8% continuously.</span>
<span class="lang-vi">Một máy tạo thu nhập $15-2t$ triệu đô-la/năm với $0\le t\le7$. Chiết khấu liên tục 8%.</span>
</div>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Before computing</span><span class="lang-vi">Trước khi tính</span></div>
<span class="lang-en">For each dollar at time $t$, decide whether it grows forward to year 5 or discounts back to today.</span>
<span class="lang-vi">Với mỗi đô-la tại thời điểm $t$, quyết định nó tăng đến năm 5 hay chiết khấu về hiện tại.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 1, 6.1-6.6 for integral setup fluency; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 1, 6.1-6.6 để thuần thục thiết lập tích phân; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution E1: Future Value</span><span class="lang-vi">Lời giải E1: giá trị tương lai</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Model one small deposit</span><span class="lang-vi">Mô hình một khoản gửi nhỏ</span></div>
<span class="lang-en">A deposit $1500\,dt$ made at time $t$ grows for $5-t$ years.</span>
<span class="lang-vi">Khoản gửi $1500\,dt$ tại thời điểm $t$ tăng trưởng trong $5-t$ năm.</span>

$$
dFV=1500e^{0.07(5-t)}\,dt.
$$
</div>
<div class="box formula-stack">
<div class="label"><span class="lang-en">Add all deposits</span><span class="lang-vi">Cộng tất cả khoản gửi</span></div>

$$
FV=\int_0^5 1500e^{0.07(5-t)}\,dt
$$

$$
FV=\frac{1500}{0.07}\left(e^{0.35}-1\right)
\approx8980.02.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">The future value after 5 years is about 8980 dollars.</span>
<span class="lang-vi">Giá trị tương lai sau 5 năm xấp xỉ 8980 đô-la.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example: continuous accumulation; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: tích lũy liên tục; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution E2: Present Value</span><span class="lang-vi">Lời giải E2: hiện giá</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Discount each payment</span><span class="lang-vi">Chiết khấu từng khoản</span></div>
<span class="lang-en">Income at time $t$ is worth less today by the factor $e^{-0.08t}$.</span>
<span class="lang-vi">Thu nhập tại thời điểm $t$ có giá trị hiện tại giảm bởi hệ số $e^{-0.08t}$.</span>

$$
PV=\int_0^7(15-2t)e^{-0.08t}\,dt.
$$
</div>
<div class="box formula-stack">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính tích phân</span></div>

$$
\int(15-2t)e^{-0.08t}\,dt
=e^{-0.08t}(25t+125)
$$

$$
PV=300e^{-0.56}-125\approx46.36.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">The present value is about 46.36 million dollars.</span>
<span class="lang-vi">Hiện giá xấp xỉ 46.36 triệu đô-la.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example: continuous discounting; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: chiết khấu liên tục; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Economic Models II: Margins And Surplus</span><span class="lang-vi">Mô hình kinh tế II: biên và thặng dư</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">E3 Net earnings</div>
<span class="lang-en">$C'(x)=0.1x^2+4x+10$, $R'(x)=70-x$. Find net earnings from $0$ to $10$.</span>
<span class="lang-vi">$C'(x)=0.1x^2+4x+10$, $R'(x)=70-x$. Tính lợi nhuận ròng từ $0$ đến $10$.</span>
</div>
<div class="exercise-card">
<div class="num">E4 Surplus</div>
<span class="lang-en">Demand $D(q)=-0.1q^2+90$; supply $S(q)=0.2q^2+q+50$. Find both surpluses.</span>
<span class="lang-vi">Cầu $D(q)=-0.1q^2+90$; cung $S(q)=0.2q^2+q+50$. Tìm hai thặng dư.</span>
</div>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Before computing</span><span class="lang-vi">Trước khi tính</span></div>
<span class="lang-en">Net earnings integrate marginal revenue minus marginal cost; surplus integrates the vertical gap from equilibrium price.</span>
<span class="lang-vi">Lợi nhuận ròng là tích phân doanh thu biên trừ chi phí biên; thặng dư là tích phân khoảng cách theo phương đứng từ giá cân bằng.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: OpenStax Vol 1, 6.1-6.6 for integral setup fluency; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Luyện tập: OpenStax Tập 1, 6.1-6.6 để thuần thục thiết lập tích phân; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution E3: Net Earnings</span><span class="lang-vi">Lời giải E3: lợi nhuận ròng</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Build the marginal profit</span><span class="lang-vi">Lập lợi nhuận biên</span></div>

$$
R'(x)-C'(x)
=(70-x)-(0.1x^2+4x+10)
$$

$$
=60-5x-0.1x^2.
$$
</div>
<div class="box formula-stack">
<div class="label"><span class="lang-en">Add from $0$ to $10$</span><span class="lang-vi">Cộng từ $0$ đến $10$</span></div>

$$
\Delta E=\int_0^{10}(60-5x-0.1x^2)\,dx
$$

$$
\Delta E=\left[60x-\frac52x^2-\frac{x^3}{30}\right]_0^{10}
=\frac{950}{3}.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">Net earnings are $\dfrac{950}{3}$ thousand dollars, about 316667 dollars.</span>
<span class="lang-vi">Lợi nhuận ròng là $\dfrac{950}{3}$ nghìn đô-la, xấp xỉ 316667 đô-la.</span>
</div>

<div class="refs">
<span class="lang-en">Worked example: marginal functions; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: hàm biên; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution E4: Consumer And Producer Surplus</span><span class="lang-vi">Lời giải E4: thặng dư tiêu dùng và sản xuất</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Equilibrium</span><span class="lang-vi">Điểm cân bằng</span></div>

$$
-0.1q^2+90=0.2q^2+q+50
$$

$$
0.3q^2+q-40=0
$$

$$
q_0=10,\qquad p_0=80.
$$
</div>
<div class="box formula-stack">
<div class="label"><span class="lang-en">Surplus integrals</span><span class="lang-vi">Tích phân thặng dư</span></div>

$$
CS=\int_0^{10}(D(q)-80)\,dq
=\int_0^{10}(10-0.1q^2)\,dq
$$

$$
CS=\frac{200}{3}
$$

$$
PS=\int_0^{10}(80-S(q))\,dq
=\int_0^{10}(30-q-0.2q^2)\,dq
$$

$$
PS=\frac{550}{3}.
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Worked example: surplus as area; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: thặng dư như diện tích; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Life Science And Flow Models</span><span class="lang-vi">Mô hình dòng chảy và khoa học sự sống</span>

<div class="grid-2 align-center">
<div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Survival with continuous intake</span><span class="lang-vi">Tồn tại với dòng vào liên tục</span></div>

$$
P(T)=P_0f(T)+\int_0^T r(t)f(T-t)\,dt
$$
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Blood-flow rate</span><span class="lang-vi">Lưu lượng máu</span></div>

$$
S(r)=k(R^2-r^2)
$$

$$
Q=\int_0^R2\pi rS(r)\,dr=\frac{\pi kR^4}{2}
$$
</div>

</div>
<div class="img-strip vertical-strip">
<img src="./images/treatment.jpg" class="graph-img" alt="Treatment survival model">
<img src="./images/artery.jpg" class="graph-img" alt="Artery flow model">
</div>
</div>

<div class="refs">
<span class="lang-en">Flow and life-science models extend the same accumulation idea; reading/practice anchors: OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5.</span>
<span class="lang-vi">Mô hình dòng chảy và khoa học sự sống mở rộng cùng ý tưởng cộng dồn; nguồn đọc/luyện: OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Flow Model</span><span class="lang-vi">Tự luyện: mô hình dòng chảy</span>

<div class="grid-2 align-center">
<div>
<div class="your-turn">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Exercise</span><span class="lang-vi">Bài tập</span></div>
<span class="lang-en">A clinic has 300 patients, survival $f(t)=e^{-t/20}$, and admits 10 new patients per month. Estimate the number of patients after 15 months.</span>
<span class="lang-vi">Một phòng khám có 300 bệnh nhân, hàm tồn tại $f(t)=e^{-t/20}$, và nhận thêm 10 người/tháng. Ước lượng số bệnh nhân sau 15 tháng.</span>
</div>
</div>
<img src="./images/treatment.jpg" class="graph-img" alt="Treatment survival model">
</div>

<div class="refs">
<span class="lang-en">Practice: renewal and flow models as continuous accumulation; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5.</span>
<span class="lang-vi">Luyện tập: mô hình bổ sung và dòng chảy như tích lũy liên tục; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Solution: Flow Model</span><span class="lang-vi">Lời giải: mô hình dòng chảy</span>

<div class="grid-2 align-center">
<div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Two groups remain</span><span class="lang-vi">Hai nhóm còn lại</span></div>
<span class="lang-en">Original patients survive for 15 months. A new patient admitted at time $t$ survives for $15-t$ months.</span>
<span class="lang-vi">Bệnh nhân ban đầu tồn tại 15 tháng. Bệnh nhân mới vào lúc $t$ tồn tại trong $15-t$ tháng.</span>

$$
P(15)=300e^{-15/20}+\int_0^{15}10e^{-(15-t)/20}\,dt.
$$
</div>

<div class="box mt-3 formula-stack">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>

$$
\int_0^{15}10e^{-(15-t)/20}\,dt
=200(1-e^{-15/20})
$$

$$
P(15)=300e^{-0.75}+200(1-e^{-0.75})
$$

$$
P(15)\approx247.24\ \text{patients}.
$$
</div>
</div>
<img src="./images/treatment.jpg" class="graph-img" alt="Treatment survival model">
</div>

<div class="refs">
<span class="lang-en">Worked example: renewal and flow models; OpenStax Vol 1, 6.1-6.6; Stewart 6.1-6.5; local instructor exercises.</span>
<span class="lang-vi">Ví dụ lời giải: mô hình bổ sung và dòng chảy; OpenStax Tập 1, 6.1-6.6; Stewart 6.1-6.5; bài tập bổ sung của giảng viên.</span>
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
<strong><span class="lang-en">Instructor notes.</span><span class="lang-vi">Ghi chú của giảng viên.</span></strong>&nbsp;
<span class="lang-en">Local examples and extra exercises adapted for MT1003 Calculus 1.</span>
<span class="lang-vi">Ví dụ và bài tập bổ sung được điều chỉnh cho MT1003 Giải tích 1.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Full map: <a href="../../readings/">course readings</a>. Use section titles if a Stewart edition has different numbering.</span>
<span class="lang-vi">Bản đồ đầy đủ: <a href="../../readings/">tài liệu đọc của môn</a>. Nếu phiên bản Stewart khác số mục, hãy dùng tên mục.</span>
</div>
