---
theme: default
title: "Calculus 1 - Sequences And Limits"
info: "MT1003 Calculus 1, Session 02"
transition: slide-left
download: "../../pdfs/sequences.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Sequences And Limits</span><span class="lang-vi">Dãy số và giới hạn</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Session 02</span>
<span class="lang-vi">MT1003 Giải tích 1 - Buổi 02</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Some material adapted from lectures by Dr. Le Xuan Dai.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn học</a>. Một phần nội dung biên soạn dựa trên bài giảng của TS. Lê Xuân Đại.</span>
</div>

---

# <span class="lang-en">From Functions To Approaching</span><span class="lang-vi">Từ hàm số đến sự tiến gần</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">The new idea</span><span class="lang-vi">Ý tưởng mới</span></div>
<span class="lang-en">Last session: functions describe how quantities depend on each other. Today: what does it mean for a quantity to <strong>approach</strong> a value?</span>
<span class="lang-vi">Buổi trước: hàm số mô tả sự phụ thuộc giữa các đại lượng. Hôm nay: một đại lượng <strong>tiến gần</strong> đến một giá trị nghĩa là gì?</span>
</div>

<div class="grid-2 mt-4">
<div class="box"><div class="label"><span class="lang-en">First model</span><span class="lang-vi">Mô hình đầu tiên</span></div><span class="lang-en">A <strong>sequence</strong> is an endless list of numbers. Watching the list settle down is the cleanest picture of a limit.</span><span class="lang-vi">Một <strong>dãy số</strong> là danh sách số vô tận. Nhìn danh sách "ổn định lại" là hình ảnh rõ nhất của giới hạn.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Then functions</span><span class="lang-vi">Rồi đến hàm số</span></div><span class="lang-en">The same idea, for a continuous input $x\to a$, becomes the limit of a function - the gateway to derivatives and integrals.</span><span class="lang-vi">Cùng ý tưởng đó, với biến liên tục $x\to a$, trở thành giới hạn của hàm số - cửa ngõ vào đạo hàm và tích phân.</span></div>
</div>

<div class="refs">
<span class="lang-en">Bridge: limits turn "gets closer and closer" into something we can compute.</span>
<span class="lang-vi">Cầu nối: giới hạn biến "ngày càng gần" thành thứ ta tính được.</span>
</div>

---
layout: center
class: sim
---

<SimBackground kind="relativity" />

# <span class="lang-en">A First Limit Question</span><span class="lang-vi">Một câu hỏi giới hạn đầu tiên</span>

<div class="sim-panel">
<div class="label"><span class="lang-en">Special relativity</span><span class="lang-vi">Thuyết tương đối hẹp</span></div>

$$
L=L_0\sqrt{1-\dfrac{v^2}{c^2}}
$$

<span class="lang-en">A moving object's length $L$ shrinks as its speed $v$ grows. What happens as $v$ approaches the speed of light $c$? The closer $v$ gets to $c$, the closer $L$ gets to $0$:</span>
<span class="lang-vi">Độ dài $L$ của vật chuyển động co lại khi tốc độ $v$ tăng. Điều gì xảy ra khi $v$ tiến đến tốc độ ánh sáng $c$? $v$ càng gần $c$ thì $L$ càng gần $0$:</span>

$$
\lim_{v\to c^-} L_0\sqrt{1-\dfrac{v^2}{c^2}}=0
$$

</div>

---

# <span class="lang-en">The Idea Of Approaching</span><span class="lang-vi">Ý tưởng tiến gần</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Area of a circle</span><span class="lang-vi">Diện tích hình tròn</span></div>
<span class="lang-en">Inscribe regular $n$-gons in a circle of radius $R$. Their areas form a list that creeps up to the circle:</span>
<span class="lang-vi">Nội tiếp các đa giác đều $n$ cạnh trong hình tròn bán kính $R$. Diện tích của chúng tạo thành một danh sách tiến dần đến diện tích hình tròn:</span>

$$
A_n=\tfrac12 n R^2\sin\tfrac{2\pi}{n},\qquad \lim_{n\to\infty}A_n=\pi R^2
$$

</div>
<div class="box blue">
<div class="label"><span class="lang-en">Zeno's steps</span><span class="lang-vi">Các bước của Zeno</span></div>
<span class="lang-en">Walk half the way, then half of what is left, again and again. The distance covered is a list approaching $1$:</span>
<span class="lang-vi">Đi nửa quãng đường, rồi nửa phần còn lại, lặp mãi. Quãng đã đi là một danh sách tiến đến $1$:</span>

$$
s_n=1-\frac{1}{2^n}\longrightarrow 1
$$

</div>
</div>

<div class="refs">
<span class="lang-en">Both $A_n$ and $s_n$ are <strong>sequences</strong>: ordered lists indexed by $n=1,2,3,\dots$ that approach a limit.</span>
<span class="lang-vi">Cả $A_n$ và $s_n$ đều là <strong>dãy số</strong>: danh sách có thứ tự đánh số bởi $n=1,2,3,\dots$ và tiến đến một giới hạn.</span>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-15</span><span><span class="lang-en"><strong>Motivation &amp; roadmap</strong> - approaching as the central idea</span><span class="lang-vi"><strong>Động lực &amp; lộ trình</strong> - sự tiến gần là ý tưởng trung tâm</span></span></div>
<div class="tl-row"><span class="clock">15-45</span><span><span class="lang-en"><strong>Sequences</strong> - formulas, recurrence, arithmetic &amp; geometric</span><span class="lang-vi"><strong>Dãy số</strong> - công thức, truy hồi, cấp số cộng &amp; nhân</span></span></div>
<div class="tl-row disc"><span class="clock">45-75</span><span><span class="lang-en"><strong>Limits of sequences</strong> + discussion: convergence, squeeze, monotone bounded</span><span class="lang-vi"><strong>Giới hạn của dãy</strong> + thảo luận: hội tụ, kẹp, đơn điệu bị chặn</span></span></div>
<div class="tl-row break"><span class="clock">75-85</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row disc"><span class="clock">85-115</span><span><span class="lang-en"><strong>Limits of functions</strong> + discussion: sequential idea, one-sided, $\sin(1/x)$</span><span class="lang-vi"><strong>Giới hạn của hàm số</strong> + thảo luận: ý tưởng dãy, một phía, $\sin(1/x)$</span></span></div>
<div class="tl-row disc"><span class="clock">115-140</span><span><span class="lang-en"><strong>Limits involving infinity</strong> + discussion: asymptotes</span><span class="lang-vi"><strong>Giới hạn liên quan vô cực</strong> + thảo luận: tiệm cận</span></span></div>
<div class="tl-row"><span class="clock">140-160</span><span><span class="lang-en"><strong>Infinitesimals &amp; infinitely large</strong> - comparison, equivalents</span><span class="lang-vi"><strong>Vô cùng bé &amp; vô cùng lớn</strong> - so sánh, tương đương</span></span></div>
<div class="tl-row"><span class="clock">160-170</span><span><span class="lang-en"><strong>Synthesis &amp; practice directions</strong></span><span class="lang-vi"><strong>Tổng kết &amp; hướng luyện tập</strong></span></span></div>
</div>

---

# <span class="lang-en">What Is A Sequence?</span><span class="lang-vi">Dãy số là gì?</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">A <strong>sequence</strong> is a function $f:\mathbb{N}\to\mathbb{R}$. We write it $(x_n)$, and $x_n=f(n)$ is the <strong>general term</strong> (the $n$th term).</span>
<span class="lang-vi">Một <strong>dãy số</strong> là một hàm $f:\mathbb{N}\to\mathbb{R}$. Ta ký hiệu là $(x_n)$, và $x_n=f(n)$ là <strong>số hạng tổng quát</strong> (số hạng thứ $n$).</span>
</div>

<div class="grid-2 mt-4">
<div class="box"><div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div><span class="lang-en">For $x_n=\dfrac{1}{n}$: the list is $1,\ \tfrac12,\ \tfrac13,\ \tfrac14,\dots$</span><span class="lang-vi">Với $x_n=\dfrac{1}{n}$: danh sách là $1,\ \tfrac12,\ \tfrac13,\ \tfrac14,\dots$</span></div>
<div class="box blue"><div class="label"><span class="lang-en">A sequence is a function</span><span class="lang-vi">Dãy là một hàm</span></div><span class="lang-en">The input is a positive integer $n$; the output is the term $x_n$. The domain is $\mathbb{N}$, not an interval.</span><span class="lang-vi">Đầu vào là số nguyên dương $n$; đầu ra là số hạng $x_n$. Miền xác định là $\mathbb{N}$, không phải một khoảng.</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/5-1-sequences">OpenStax Calculus Volume 2, 5.1: Sequences</a>.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/5-1-sequences">OpenStax Calculus Volume 2, 5.1: Sequences</a>.</span>
</div>

---

# <span class="lang-en">Two Ways To Define A Sequence</span><span class="lang-vi">Hai cách định nghĩa một dãy</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Explicit formula</span><span class="lang-vi">Công thức tường minh</span></div>
<span class="lang-en">Each term comes directly from $n$:</span>
<span class="lang-vi">Mỗi số hạng tính trực tiếp từ $n$:</span>

$$
a_n=2^n\ \Rightarrow\ 2,4,8,16,\dots
$$

</div>
<div class="box blue">
<div class="label"><span class="lang-en">Recurrence relation</span><span class="lang-vi">Hệ thức truy hồi</span></div>
<span class="lang-en">Each term comes from earlier terms:</span>
<span class="lang-vi">Mỗi số hạng tính từ các số hạng trước:</span>

$$
a_1=2,\quad a_{n+1}=2a_n
$$

</div>
</div>

<div class="box mt-4">
<div class="label"><span class="lang-en">Same list, two descriptions</span><span class="lang-vi">Cùng một danh sách, hai cách mô tả</span></div>
<span class="lang-en">Explicit formulas are easy to evaluate at any $n$; recurrences capture step-by-step rules (interest, population, iteration). Converting between them is a key skill.</span>
<span class="lang-vi">Công thức tường minh dễ tính tại $n$ bất kỳ; truy hồi nắm bắt quy tắc từng bước (lãi suất, dân số, lặp). Chuyển đổi giữa hai dạng là một kỹ năng quan trọng.</span>
</div>

---

# <span class="lang-en">Visualizing A Sequence</span><span class="lang-vi">Biểu diễn hình học của dãy</span>

<div class="grid-2 align-center">
<div class="seq-figure">
<SeqViz kind="inv" />
<div class="cap"><span class="lang-en">Points $(n,\,x_n)$ for $x_n=1/n$</span><span class="lang-vi">Các điểm $(n,\,x_n)$ với $x_n=1/n$</span></div>
</div>
<div>
<div class="box"><div class="label"><span class="lang-en">Method 1: graph</span><span class="lang-vi">Cách 1: đồ thị</span></div><span class="lang-en">Plot the points $(n,x_n)$. The pattern in height shows the behavior.</span><span class="lang-vi">Vẽ các điểm $(n,x_n)$. Dáng điệu độ cao cho thấy hành vi của dãy.</span></div>
<div class="box blue mt-4"><div class="label"><span class="lang-en">Method 2: number line</span><span class="lang-vi">Cách 2: trục số</span></div><span class="lang-en">Mark $x_1,x_2,x_3,\dots$ on the $x$-axis and watch where they pile up.</span><span class="lang-vi">Đánh dấu $x_1,x_2,x_3,\dots$ trên trục $x$ và quan sát chúng dồn về đâu.</span></div>
</div>
</div>

<div class="refs">
<span class="lang-en">Here the terms $1/n$ pile up near $0$ - our first visual limit.</span>
<span class="lang-vi">Ở đây các số hạng $1/n$ dồn về gần $0$ - giới hạn trực quan đầu tiên.</span>
</div>

---

# <span class="lang-en">Arithmetic And Geometric Sequences</span><span class="lang-vi">Cấp số cộng và cấp số nhân</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Arithmetic: constant difference</span><span class="lang-vi">Cấp số cộng: hiệu không đổi</span></div>

$$
a_n=a_1+(n-1)d
$$

<span class="lang-en">Example: $3,7,11,15,\dots$ with $d=4$.</span>
<span class="lang-vi">Ví dụ: $3,7,11,15,\dots$ với $d=4$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Geometric: constant ratio</span><span class="lang-vi">Cấp số nhân: tỷ số không đổi</span></div>

$$
a_n=a_1\,r^{\,n-1}
$$

<span class="lang-en">Example: $2,6,18,54,\dots$ with $r=3$.</span>
<span class="lang-vi">Ví dụ: $2,6,18,54,\dots$ với $r=3$.</span>
</div>
</div>

<div class="box mt-4">
<div class="label"><span class="lang-en">Why geometric matters for limits</span><span class="lang-vi">Vì sao cấp số nhân quan trọng với giới hạn</span></div>
<span class="lang-en">If $|r|<1$ then $r^{\,n}\to 0$; if $|r|>1$ the terms blow up. This single fact powers many limit computations.</span>
<span class="lang-vi">Nếu $|r|<1$ thì $r^{\,n}\to 0$; nếu $|r|>1$ các số hạng tăng vô hạn. Một sự kiện này chi phối rất nhiều phép tính giới hạn.</span>
</div>

---

# <span class="lang-en">Monotone And Bounded Sequences</span><span class="lang-vi">Dãy đơn điệu và bị chặn</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Monotone</span><span class="lang-vi">Đơn điệu</span></div>
<span class="lang-en">$(x_n)$ is <strong>increasing</strong> if $x_n\lt x_{n+1}$ for all $n$, and <strong>decreasing</strong> if $x_n>x_{n+1}$ for all $n$.</span>
<span class="lang-vi">$(x_n)$ là <strong>dãy tăng</strong> nếu $x_n\lt x_{n+1}$ với mọi $n$, và <strong>dãy giảm</strong> nếu $x_n>x_{n+1}$ với mọi $n$.</span>
</div>
<div class="defn">
<div class="tag"><span class="lang-en">Bounded</span><span class="lang-vi">Bị chặn</span></div>
<span class="lang-en">$(x_n)$ is <strong>bounded</strong> if there are $m,M$ with $m\le x_n\le M$ for all $n$ (bounded below and above).</span>
<span class="lang-vi">$(x_n)$ <strong>bị chặn</strong> nếu tồn tại $m,M$ sao cho $m\le x_n\le M$ với mọi $n$ (bị chặn dưới và trên).</span>
</div>
</div>

---

# <span class="lang-en">Your Turn: Sequences</span><span class="lang-vi">Đến lượt bạn: Dãy số</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~5 min, in pairs</span><span class="lang-vi">~5 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Discuss with a neighbor</span><span class="lang-vi">Thảo luận với bạn bên cạnh</span></div>
<ol>
<li><span class="lang-en">Write a formula for $5,8,11,14,\dots$ both explicitly and as a recurrence.</span><span class="lang-vi">Viết công thức cho $5,8,11,14,\dots$ cả dạng tường minh lẫn dạng truy hồi.</span></li>
<li><span class="lang-en">Is $a_n=(-1)^n n$ bounded? Is it monotone?</span><span class="lang-vi">Dãy $a_n=(-1)^n n$ có bị chặn không? Có đơn điệu không?</span></li>
<li><span class="lang-en">For $a_n=\dfrac{n-1}{n}$, compute $a_1,a_2,a_3$ and guess where the list is heading.</span><span class="lang-vi">Với $a_n=\dfrac{n-1}{n}$, tính $a_1,a_2,a_3$ và đoán xem danh sách đang tiến về đâu.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Full solutions and more practice are in the <a href="../../sessions/02-sequences/">Session 02 short notes</a>.</span>
<span class="lang-vi">Lời giải đầy đủ và thêm bài tập có trong <a href="../../sessions/02-sequences/">ghi chú ngắn Buổi 02</a>.</span>
</div>

---

# <span class="lang-en">When Does A Sequence Converge?</span><span class="lang-vi">Khi nào một dãy hội tụ?</span>

<div class="defn">
<div class="tag"><span class="lang-en">Limit of a sequence</span><span class="lang-vi">Giới hạn của dãy</span></div>
<span class="lang-en">$(x_n)$ <strong>converges</strong> to $L$ if for every $\varepsilon>0$ there is an $N$ such that</span>
<span class="lang-vi">$(x_n)$ <strong>hội tụ</strong> đến $L$ nếu với mọi $\varepsilon>0$ tồn tại $N$ sao cho</span>

$$
|x_n-L|<\varepsilon\quad\text{for all } n>N,\qquad \text{written}\quad \lim_{n\to\infty}x_n=L.
$$

</div>

<div class="grid-2 align-center mt-3">
<div class="seq-figure">
<SeqViz kind="inv" />
<div class="cap"><span class="lang-en">Beyond some $N$, all terms sit in the band $L\pm\varepsilon$</span><span class="lang-vi">Sau một $N$ nào đó, mọi số hạng nằm trong dải $L\pm\varepsilon$</span></div>
</div>
<div class="box blue"><div class="label"><span class="lang-en">In words</span><span class="lang-vi">Nói bằng lời</span></div><span class="lang-en">No matter how thin the band around $L$, the tail of the sequence eventually stays inside it. If no finite $L$ works, the sequence <strong>diverges</strong>.</span><span class="lang-vi">Dù dải quanh $L$ mỏng đến đâu, phần đuôi của dãy cuối cùng vẫn nằm trong đó. Nếu không có $L$ hữu hạn nào thỏa, dãy <strong>phân kỳ</strong>.</span></div>
</div>

---

# <span class="lang-en">Convergent Examples</span><span class="lang-vi">Ví dụ hội tụ</span>

<div class="grid-2 align-center">
<div class="seq-figure">
<SeqViz kind="inv" />
<div class="cap">$a_n=\dfrac1n\to 0$</div>
</div>
<div class="seq-figure">
<SeqViz kind="ratio" />
<div class="cap">$a_n=\dfrac{n}{n+1}\to 1$</div>
</div>
</div>

<div class="grid-2 mt-3">
<div class="box"><span class="lang-en">As $n$ grows, $1/n$ gets arbitrarily small, so $\lim 1/n=0$.</span><span class="lang-vi">Khi $n$ tăng, $1/n$ nhỏ tùy ý, nên $\lim 1/n=0$.</span></div>
<div class="box blue"><span class="lang-en">$\dfrac{n}{n+1}=1-\dfrac{1}{n+1}\to 1$.</span><span class="lang-vi">$\dfrac{n}{n+1}=1-\dfrac{1}{n+1}\to 1$.</span></div>
</div>

---

# <span class="lang-en">Divergence And A Warning</span><span class="lang-vi">Phân kỳ và một lưu ý</span>

<div class="grid-2 align-center">
<div class="seq-figure">
<SeqViz kind="alt" />
<div class="cap">$a_n=(-1)^n$ <span class="lang-en">oscillates</span><span class="lang-vi">dao động</span></div>
</div>
<div class="seq-figure">
<SeqViz kind="altinv" />
<div class="cap">$a_n=\dfrac{(-1)^n}{n}\to 0$</div>
</div>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Bounded does not mean convergent</span><span class="lang-vi">Bị chặn không có nghĩa là hội tụ</span></div>
<span class="lang-en">$(-1)^n$ is bounded but <strong>diverges</strong>: even terms $\to 1$, odd terms $\to -1$. By contrast $\dfrac{(-1)^n}{n}\to 0$ because the size $\tfrac1n$ shrinks.</span>
<span class="lang-vi">$(-1)^n$ bị chặn nhưng <strong>phân kỳ</strong>: số hạng chẵn $\to 1$, số hạng lẻ $\to -1$. Ngược lại $\dfrac{(-1)^n}{n}\to 0$ vì độ lớn $\tfrac1n$ co về $0$.</span>
</div>

---

# <span class="lang-en">Limit Laws For Sequences</span><span class="lang-vi">Các quy tắc giới hạn của dãy</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $x_n\to a$ and $y_n\to b$ (both finite), then:</span>
<span class="lang-vi">Nếu $x_n\to a$ và $y_n\to b$ (đều hữu hạn), thì:</span>

$$
x_n\pm y_n\to a\pm b,\quad x_n y_n\to ab,\quad \frac{x_n}{y_n}\to\frac{a}{b}\ (b\ne 0),\quad |x_n|\to|a|.
$$

</div>

<div class="grid-2 mt-4">
<div class="box gold"><div class="label"><span class="lang-en">Two basic facts</span><span class="lang-vi">Hai sự kiện cơ bản</span></div><span class="lang-en">A convergent sequence is <strong>bounded</strong>, and its limit is <strong>unique</strong>.</span><span class="lang-vi">Một dãy hội tụ thì <strong>bị chặn</strong>, và giới hạn của nó là <strong>duy nhất</strong>.</span></div>
<div class="box"><div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div><span class="lang-en">$\dfrac{2n^2+1}{n^2+n}=\dfrac{2+\frac1{n^2}}{1+\frac1n}\to\dfrac{2}{1}=2.$</span><span class="lang-vi">$\dfrac{2n^2+1}{n^2+n}=\dfrac{2+\frac1{n^2}}{1+\frac1n}\to\dfrac{2}{1}=2.$</span></div>
</div>

---

# <span class="lang-en">The Squeeze Theorem</span><span class="lang-vi">Định lý kẹp</span>

<div class="grid-2 align-center">
<div class="thm">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $x_n\le y_n\le z_n$ for all large $n$, and $\lim x_n=\lim z_n=a$, then</span>
<span class="lang-vi">Nếu $x_n\le y_n\le z_n$ với mọi $n$ đủ lớn, và $\lim x_n=\lim z_n=a$, thì</span>

$$
\lim_{n\to\infty} y_n=a.
$$

</div>
<div class="seq-figure">
<SeqViz kind="squeeze" />
<div class="cap"><span class="lang-en">middle term trapped between $\pm\frac1n$</span><span class="lang-vi">số hạng giữa bị kẹp giữa $\pm\frac1n$</span></div>
</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">For $n>8$, $\ 0<\dfrac{7^n}{n^n}<\left(\dfrac{7}{8}\right)^n\to 0$, so $\dfrac{7^n}{n^n}\to 0$.</span>
<span class="lang-vi">Với $n>8$, $\ 0<\dfrac{7^n}{n^n}<\left(\dfrac{7}{8}\right)^n\to 0$, nên $\dfrac{7^n}{n^n}\to 0$.</span>
</div>

---

# <span class="lang-en">Standard Limits To Memorize</span><span class="lang-vi">Các giới hạn cơ bản cần nhớ</span>

<div class="box">
<div class="cols-2">

$$\lim_{n\to\infty} q^n=0\ \ (|q|<1)$$

$$\lim_{n\to\infty}\frac{1}{n^\alpha}=0\ \ (\alpha>0)$$

$$\lim_{n\to\infty}\sqrt[n]{a}=1\ \ (a>0)$$

$$\lim_{n\to\infty}\sqrt[n]{n}=1$$

$$\lim_{n\to\infty}\frac{n^p}{e^n}=0\ \ (\forall p)$$

$$\lim_{n\to\infty}\Big(1+\tfrac1n\Big)^n=e$$

</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Growth hierarchy (as $n\to\infty$)</span><span class="lang-vi">Thứ bậc tăng (khi $n\to\infty$)</span></div>

$$
\ln^p n \ \ll\ n^\alpha \ \ll\ a^n \ \ll\ n!\qquad (p,\ \alpha>0,\ a>1)
$$

<span class="lang-en">Whatever is further right wins the race, so a ratio is decided by the faster term.</span>
<span class="lang-vi">Thứ nằm bên phải hơn "thắng cuộc đua", nên một thương được quyết định bởi số hạng tăng nhanh hơn.</span>
</div>

---

# <span class="lang-en">Monotone Bounded Theorem (Weierstrass)</span><span class="lang-vi">Định lý đơn điệu bị chặn (Weierstrass)</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">An increasing sequence that is bounded above converges. A decreasing sequence that is bounded below converges.</span>
<span class="lang-vi">Một dãy tăng và bị chặn trên thì hội tụ. Một dãy giảm và bị chặn dưới thì hội tụ.</span>
</div>

<div class="box gold mt-4">
<div class="label"><span class="lang-en">This defines the number $e$</span><span class="lang-vi">Điều này định nghĩa số $e$</span></div>
<span class="lang-en">$x_n=\left(1+\tfrac1n\right)^n$ is increasing and bounded above by $4$. By the theorem it converges; its limit is</span>
<span class="lang-vi">$x_n=\left(1+\tfrac1n\right)^n$ tăng và bị chặn trên bởi $4$. Theo định lý, nó hội tụ; giới hạn của nó là</span>

$$
\lim_{n\to\infty}\Big(1+\tfrac1n\Big)^n=e\approx 2.718281828.
$$

</div>

<div class="refs">
<span class="lang-en">The theorem guarantees a limit <em>exists</em> even before we can name it.</span>
<span class="lang-vi">Định lý bảo đảm giới hạn <em>tồn tại</em> ngay cả khi ta chưa gọi tên được nó.</span>
</div>

---

# <span class="lang-en">Bernoulli's Inequality</span><span class="lang-vi">Bất đẳng thức Bernoulli</span>

<div class="thm spotlight">
<div class="tag"><span class="lang-en">The inequality</span><span class="lang-vi">Bất đẳng thức</span></div>
<span class="lang-en">For every real $h\ge -1$ and integer $n\ge 1$,</span>
<span class="lang-vi">Với mọi số thực $h\ge -1$ và số nguyên $n\ge 1$,</span>

$$
(1+h)^n\ \ge\ 1+nh ,
$$

<span class="lang-en">with equality only when $h=0$ or $n=1$.</span>
<span class="lang-vi">đẳng thức chỉ khi $h=0$ hoặc $n=1$.</span>
</div>

<div class="grid-2 mt-4">
<div class="box">
<div class="label"><span class="lang-en">Why it holds</span><span class="lang-vi">Vì sao đúng</span></div>
<span class="lang-en">Induction: from $(1+h)^n\ge 1+nh$ and $1+h\ge 0$,</span>
<span class="lang-vi">Quy nạp: từ $(1+h)^n\ge 1+nh$ và $1+h\ge 0$,</span>

$$
(1+h)^{n+1}\ge(1+nh)(1+h)=1+(n+1)h+nh^2\ge 1+(n+1)h.
$$

</div>
<div class="box blue">
<div class="label"><span class="lang-en">Why we want it</span><span class="lang-vi">Vì sao cần nó</span></div>
<span class="lang-en">It replaces an $n$-th power by a simple linear bound - exactly what we need to compare consecutive terms of $\left(1+\tfrac1n\right)^n$ next.</span>
<span class="lang-vi">Nó thay lũy thừa bậc $n$ bằng một cận tuyến tính đơn giản - đúng thứ ta cần để so sánh các số hạng liên tiếp của $\left(1+\tfrac1n\right)^n$ ngay sau đây.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Next: use it to show $\left(1+\tfrac1n\right)^n$ is increasing and bounded above.</span>
<span class="lang-vi">Tiếp theo: dùng nó để chứng minh $\left(1+\tfrac1n\right)^n$ tăng và bị chặn trên.</span>
</div>

---

# <span class="lang-en">Why $\left(1+\tfrac1n\right)^n$ Is Increasing And Bounded</span><span class="lang-vi">Vì sao $\left(1+\tfrac1n\right)^n$ tăng và bị chặn</span>

<div class="grid-2">
<div class="box gold" v-click>
<div class="label"><span class="lang-en">Increasing (AM-GM)</span><span class="lang-vi">Tăng (bất đẳng thức AM-GM)</span></div>
<span class="lang-en">Geometric mean $\le$ arithmetic mean, for $n$ copies of $1+\tfrac1n$ and one $1$:</span>
<span class="lang-vi">Trung bình nhân $\le$ trung bình cộng, cho $n$ số $1+\tfrac1n$ và một số $1$:</span>

$$
\sqrt[n+1]{\left(1+\tfrac1n\right)^{n}\cdot 1}\ \le\ \frac{n\left(1+\tfrac1n\right)+1}{n+1}=1+\frac{1}{n+1}
$$

<span class="lang-en">Raise to the power $n+1$: $\ x_n\le x_{n+1}$.</span>
<span class="lang-vi">Nâng lên lũy thừa $n+1$: $\ x_n\le x_{n+1}$.</span>
</div>
<div class="box blue" v-click>
<div class="label"><span class="lang-en">Bounded above (Bernoulli)</span><span class="lang-vi">Bị chặn trên (Bernoulli)</span></div>
<span class="lang-en">Set $y_n=\left(1+\tfrac1n\right)^{n+1}$. Bernoulli makes $y_n$ <strong>decreasing</strong>, and $x_n\lt y_n$, so</span>
<span class="lang-vi">Đặt $y_n=\left(1+\tfrac1n\right)^{n+1}$. Bernoulli cho $y_n$ <strong>giảm</strong>, và $x_n\lt y_n$, nên</span>

$$
x_n\ \lt\ y_n\ \le\ y_1=(1+1)^2=4
$$

</div>
</div>

<div class="box gold mt-4" v-click>
<div class="label"><span class="lang-en">Conclusion</span><span class="lang-vi">Kết luận</span></div>
<span class="lang-en">$(x_n)$ is increasing and bounded, $2\le x_n\lt 4$, so the monotone bounded theorem makes it converge - and the limit is $e\approx 2.718$.</span>
<span class="lang-vi">$(x_n)$ tăng và bị chặn, $2\le x_n\lt 4$, nên định lý đơn điệu bị chặn cho nó hội tụ - và giới hạn là $e\approx 2.718$.</span>
</div>

<div class="refs">
<span class="lang-en">The binomial expansion gives the sharper bound $x_n\lt 3$; full steps in the <a href="../../sessions/02-sequences/">short notes</a>.</span>
<span class="lang-vi">Khai triển nhị thức cho cận chặt hơn $x_n\lt 3$; các bước đầy đủ trong <a href="../../sessions/02-sequences/">ghi chú ngắn</a>.</span>
</div>

---

# <span class="lang-en">Recurrence + Monotone Bounded</span><span class="lang-vi">Truy hồi + đơn điệu bị chặn</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">A powerful combination</span><span class="lang-vi">Một sự kết hợp mạnh</span></div>
<span class="lang-en">Let $a_1=\sqrt 2$ and $a_{n+1}=\sqrt{2a_n}$. Show it converges, then find the limit.</span>
<span class="lang-vi">Cho $a_1=\sqrt 2$ và $a_{n+1}=\sqrt{2a_n}$. Chứng minh nó hội tụ, rồi tìm giới hạn.</span>
</div>

<div class="grid-3 mt-4">
<div class="box"><span class="pill">1</span><div class="label mt-2"><span class="lang-en">Monotone</span><span class="lang-vi">Đơn điệu</span></div><span class="lang-en">$a_1\lt a_2\lt\cdots$ - the sequence is increasing.</span><span class="lang-vi">$a_1\lt a_2\lt\cdots$ - dãy tăng.</span></div>
<div class="box blue"><span class="pill">2</span><div class="label mt-2"><span class="lang-en">Bounded</span><span class="lang-vi">Bị chặn</span></div><span class="lang-en">By induction $a_n\le 2$ for all $n$, so it converges.</span><span class="lang-vi">Bằng quy nạp $a_n\le 2$ với mọi $n$, nên nó hội tụ.</span></div>
<div class="box gold"><span class="pill">3</span><div class="label mt-2"><span class="lang-en">Solve</span><span class="lang-vi">Giải</span></div><span class="lang-en">Let $L=\lim a_n$. Then $L=\sqrt{2L}\Rightarrow L=2$.</span><span class="lang-vi">Đặt $L=\lim a_n$. Khi đó $L=\sqrt{2L}\Rightarrow L=2$.</span></div>
</div>

<div class="refs">
<span class="lang-en">Key trick: take $n\to\infty$ on both sides of the recurrence, using that $a_{n+1}$ has the same limit as $a_n$.</span>
<span class="lang-vi">Mẹo then chốt: lấy $n\to\infty$ hai vế của hệ thức truy hồi, dùng việc $a_{n+1}$ có cùng giới hạn với $a_n$.</span>
</div>

---

# <span class="lang-en">A Toolbox For Sequence Limits</span><span class="lang-vi">Hộp công cụ tìm giới hạn dãy</span>

<div class="grid-3">
<div class="box"><div class="label"><span class="lang-en">1. Algebra</span><span class="lang-vi">1. Biến đổi đại số</span></div><span class="lang-en">simplify, combine fractions, conjugates</span><span class="lang-vi">rút gọn, quy đồng, nhân liên hợp</span></div>
<div class="box blue"><div class="label"><span class="lang-en">2. Divide by dominant term</span><span class="lang-vi">2. Chia cho số hạng trội</span></div><span class="lang-en">rational and exponential ratios</span><span class="lang-vi">thương đa thức và mũ</span></div>
<div class="box gold"><div class="label"><span class="lang-en">3. Squeeze</span><span class="lang-vi">3. Định lý kẹp</span></div><span class="lang-en">bounded $\times$ small, factorials, $n$th roots</span><span class="lang-vi">bị chặn $\times$ nhỏ, giai thừa, căn bậc $n$</span></div>
<div class="box gold"><div class="label"><span class="lang-en">4. Standard limits</span><span class="lang-vi">4. Giới hạn cơ bản</span></div><span class="lang-en">$q^n$, $\sqrt[n]{a}$, growth hierarchy</span><span class="lang-vi">$q^n$, $\sqrt[n]{a}$, thứ bậc tăng</span></div>
<div class="box"><div class="label"><span class="lang-en">5. Recurrence + monotone bounded</span><span class="lang-vi">5. Truy hồi + đơn điệu bị chặn</span></div><span class="lang-en">prove existence, then solve for $L$</span><span class="lang-vi">chứng minh tồn tại, rồi giải tìm $L$</span></div>
<div class="box blue"><div class="label"><span class="lang-en">6. The $e$ limit ($1^\infty$)</span><span class="lang-vi">6. Giới hạn $e$ (dạng $1^\infty$)</span></div><span class="lang-en">$\big(1+\frac1{u_n}\big)^{u_n}\to e$ when $u_n\to\infty$</span><span class="lang-vi">$\big(1+\frac1{u_n}\big)^{u_n}\to e$ khi $u_n\to\infty$</span></div>
</div>

---

# <span class="lang-en">Your Turn: Sequence Limits</span><span class="lang-vi">Đến lượt bạn: Giới hạn dãy</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~6 min, in pairs</span><span class="lang-vi">~6 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Pick a method, then evaluate</span><span class="lang-vi">Chọn phương pháp, rồi tính</span></div>
<ol>
<li>$\displaystyle\lim_{n\to\infty}\frac{2n^2+1}{n^2+n}$ <span class="muted"><span class="lang-en">(divide by dominant power)</span><span class="lang-vi">(chia cho lũy thừa trội)</span></span></li>
<li>$\displaystyle\lim_{n\to\infty}\frac{\cos n}{n}$ <span class="muted"><span class="lang-en">(squeeze)</span><span class="lang-vi">(kẹp)</span></span></li>
<li>$\displaystyle\lim_{n\to\infty}\Big(1+\frac{1}{2n}\Big)^{n}$ <span class="muted"><span class="lang-en">(the $e$ limit)</span><span class="lang-vi">(giới hạn $e$)</span></span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Answers: $2$, $\ 0$, $\ e^{1/2}$. Worked solutions in the <a href="../../sessions/02-sequences/">short notes</a>.</span>
<span class="lang-vi">Đáp số: $2$, $\ 0$, $\ e^{1/2}$. Lời giải trong <a href="../../sessions/02-sequences/">ghi chú ngắn</a>.</span>
</div>

---
layout: center
---

# <span class="lang-en">Break - 10 minutes</span><span class="lang-vi">Nghỉ giải lao - 10 phút</span>

<div class="box gold spotlight center">
<span class="lang-en">Stretch, breathe. Next we carry the "approaching" idea from sequences to <strong>functions of a real variable</strong>.</span>
<span class="lang-vi">Vươn vai, hít thở. Tiếp theo ta mang ý tưởng "tiến gần" từ dãy số sang <strong>hàm số một biến thực</strong>.</span>
</div>

---

# <span class="lang-en">From Sequences To Functions</span><span class="lang-vi">Từ dãy số đến hàm số</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Same idea, continuous input</span><span class="lang-vi">Cùng ý tưởng, biến liên tục</span></div>
<span class="lang-en">For sequences we asked: what happens as $n\to\infty$? For functions we ask: what happens to $f(x)$ as $x$ approaches a point $a$ - or as $x\to\pm\infty$?</span>
<span class="lang-vi">Với dãy ta hỏi: điều gì xảy ra khi $n\to\infty$? Với hàm ta hỏi: $f(x)$ ra sao khi $x$ tiến đến một điểm $a$ - hoặc khi $x\to\pm\infty$?</span>
</div>

<div class="grid-2 mt-4">
<div class="box"><div class="label"><span class="lang-en">Sequence</span><span class="lang-vi">Dãy số</span></div><span class="lang-en">discrete steps $n=1,2,3,\dots$</span><span class="lang-vi">các bước rời rạc $n=1,2,3,\dots$</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Function</span><span class="lang-vi">Hàm số</span></div><span class="lang-en">$x$ slides continuously toward $a$ from both sides</span><span class="lang-vi">$x$ trượt liên tục về phía $a$ từ cả hai phía</span></div>
</div>

---

# <span class="lang-en">Definition Of A Function Limit</span><span class="lang-vi">Định nghĩa giới hạn hàm số</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition ($\varepsilon$-$\delta$)</span><span class="lang-vi">Định nghĩa ($\varepsilon$-$\delta$)</span></div>
<span class="lang-en">$\displaystyle\lim_{x\to a}f(x)=L$ if for every $\varepsilon>0$ there is a $\delta>0$ such that</span>
<span class="lang-vi">$\displaystyle\lim_{x\to a}f(x)=L$ nếu với mọi $\varepsilon>0$ tồn tại $\delta>0$ sao cho</span>

$$
0<|x-a|<\delta\ \Rightarrow\ |f(x)-L|<\varepsilon.
$$

</div>

<div class="box blue mt-4">
<div class="label"><span class="lang-en">In words</span><span class="lang-vi">Nói bằng lời</span></div>
<span class="lang-en">We can force $f(x)$ as close to $L$ as we like by taking $x$ close enough to $a$ (but not equal to $a$). The value $f(a)$ itself is irrelevant to the limit.</span>
<span class="lang-vi">Ta có thể ép $f(x)$ gần $L$ tùy ý bằng cách lấy $x$ đủ gần $a$ (nhưng khác $a$). Bản thân giá trị $f(a)$ không ảnh hưởng đến giới hạn.</span>
</div>

---

# <span class="lang-en">The Bridge: Sequential Limits</span><span class="lang-vi">Cầu nối: giới hạn qua dãy</span>

<div class="thm">
<div class="tag"><span class="lang-en">Sequential characterization</span><span class="lang-vi">Đặc trưng qua dãy</span></div>
<span class="lang-en">$\displaystyle\lim_{x\to a}f(x)=L$ if and only if for <strong>every</strong> sequence $x_n\to a$ with $x_n\ne a$, we have $f(x_n)\to L$.</span>
<span class="lang-vi">$\displaystyle\lim_{x\to a}f(x)=L$ khi và chỉ khi với <strong>mọi</strong> dãy $x_n\to a$ ($x_n\ne a$), ta có $f(x_n)\to L$.</span>
</div>

<div class="box gold mt-4">
<div class="label"><span class="lang-en">Why this is useful</span><span class="lang-vi">Vì sao điều này hữu ích</span></div>
<span class="lang-en">It connects today's two halves. Best of all, it gives a clean way to prove a limit <strong>does not exist</strong>: find two sequences $x_n\to a$ whose images $f(x_n)$ head to different places.</span>
<span class="lang-vi">Nó nối hai nửa của buổi học. Hơn nữa, nó cho cách rõ ràng để chứng minh giới hạn <strong>không tồn tại</strong>: tìm hai dãy $x_n\to a$ mà ảnh $f(x_n)$ tiến về hai nơi khác nhau.</span>
</div>

---

# <span class="lang-en">A Limit That Does Not Exist</span><span class="lang-vi">Một giới hạn không tồn tại</span>

<div class="grid-2 align-center">
<div class="seq-figure">
<SeqViz kind="sin1x" />
<div class="cap">$y=\sin\dfrac1x$ <span class="lang-en">near $0$</span><span class="lang-vi">gần $0$</span></div>
</div>
<div class="box">
<div class="label"><span class="lang-en">Two sequences, two answers</span><span class="lang-vi">Hai dãy, hai kết quả</span></div>
<span class="lang-en">Take $x_n=\dfrac{1}{n\pi}\to 0$: then $\sin\frac1{x_n}=\sin(n\pi)=0$.</span>
<span class="lang-vi">Lấy $x_n=\dfrac{1}{n\pi}\to 0$: khi đó $\sin\frac1{x_n}=\sin(n\pi)=0$.</span>

<span class="lang-en">Take $x_n=\dfrac{1}{\frac\pi2+2n\pi}\to 0$: then $\sin\frac1{x_n}=1$.</span>
<span class="lang-vi">Lấy $x_n=\dfrac{1}{\frac\pi2+2n\pi}\to 0$: khi đó $\sin\frac1{x_n}=1$.</span>
</div>
</div>

<div class="caution mt-2">
<span class="lang-en">Different limits along different sequences $\Rightarrow\ \displaystyle\lim_{x\to 0}\sin\frac1x$ <strong>does not exist</strong>.</span>
<span class="lang-vi">Giới hạn khác nhau theo các dãy khác nhau $\Rightarrow\ \displaystyle\lim_{x\to 0}\sin\frac1x$ <strong>không tồn tại</strong>.</span>
</div>

---

# <span class="lang-en">One-Sided Limits</span><span class="lang-vi">Giới hạn một phía</span>

<div class="thm">
<div class="tag"><span class="lang-en">Two sides agree</span><span class="lang-vi">Hai phía bằng nhau</span></div>
<span class="lang-en">The two-sided limit exists exactly when both one-sided limits exist and are equal:</span>
<span class="lang-vi">Giới hạn hai phía tồn tại đúng khi cả hai giới hạn một phía tồn tại và bằng nhau:</span>

$$
\lim_{x\to a}f(x)=L\iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L.
$$

</div>

<div class="grid-3 mt-4">
<div class="box"><div class="label"><span class="lang-en">Sign function</span><span class="lang-vi">Hàm dấu</span></div><span class="lang-en">$\operatorname{sign}x$: left $\to-1$, right $\to 1$, so no limit at $0$.</span><span class="lang-vi">$\operatorname{sign}x$: trái $\to-1$, phải $\to 1$, nên không có giới hạn tại $0$.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">$x/|x|$</span><span class="lang-vi">$x/|x|$</span></div><span class="lang-en">left $\to-1$, right $\to 1$: limit DNE at $0$.</span><span class="lang-vi">trái $\to-1$, phải $\to 1$: giới hạn không tồn tại tại $0$.</span></div>
<div class="box gold"><div class="label"><span class="lang-en">$|x|$</span><span class="lang-vi">$|x|$</span></div><span class="lang-en">both sides $\to 0$, so $\lim_{x\to0}|x|=0$.</span><span class="lang-vi">cả hai phía $\to 0$, nên $\lim_{x\to0}|x|=0$.</span></div>
</div>

---

# <span class="lang-en">Limit Laws And Composition</span><span class="lang-vi">Quy tắc giới hạn và hàm hợp</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $\lim_{x\to a}f=A$ and $\lim_{x\to a}g=B$ are finite, the sum, scalar multiple, product, and quotient ($B\ne 0$) all behave as expected - same shape as for sequences.</span>
<span class="lang-vi">Nếu $\lim_{x\to a}f=A$ và $\lim_{x\to a}g=B$ hữu hạn, thì tổng, nhân vô hướng, tích và thương ($B\ne 0$) đều hoạt động như mong đợi - cùng dạng với dãy số.</span>
</div>

<div class="grid-2 mt-4">
<div class="box gold"><div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\lim_{x\to 3}\frac{x^3-5x+4}{x^2-2}=\frac{27-15+4}{9-2}=\frac{16}{7}.
$$

</div>
<div class="box blue"><div class="label"><span class="lang-en">Composition</span><span class="lang-vi">Hàm hợp</span></div><span class="lang-en">If $g$ is continuous at $A$, then $\lim_{x\to a}g(f(x))=g\big(\lim_{x\to a}f(x)\big)$. Substitution is allowed when things are nice.</span><span class="lang-vi">Nếu $g$ liên tục tại $A$, thì $\lim_{x\to a}g(f(x))=g\big(\lim_{x\to a}f(x)\big)$. Được phép thế khi mọi thứ "đẹp".</span></div>
</div>

---

# <span class="lang-en">Caution: Sequences Are Not Functions</span><span class="lang-vi">Lưu ý: dãy không phải là hàm khả vi</span>

<div class="caution">
<div class="label"><span class="lang-en">Do not apply L'Hopital to a sequence directly</span><span class="lang-vi">Đừng áp dụng L'Hopital trực tiếp cho dãy</span></div>
<span class="lang-en">For $a_n=\dfrac{\ln n}{n}$ you cannot "differentiate in $n$" - $n$ runs over integers, not a continuous variable.</span>
<span class="lang-vi">Với $a_n=\dfrac{\ln n}{n}$ bạn không thể "lấy đạo hàm theo $n$" - $n$ chạy trên số nguyên, không phải biến liên tục.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">The correct route</span><span class="lang-vi">Cách làm đúng</span></div>
<span class="lang-en">Pass to the function $f(x)=\dfrac{\ln x}{x}$, find $\displaystyle\lim_{x\to\infty}f(x)=0$ (L'Hopital or the growth hierarchy $\ln x\ll x$). Then the sequential characterization gives $a_n=f(n)\to 0$.</span>
<span class="lang-vi">Chuyển sang hàm $f(x)=\dfrac{\ln x}{x}$, tìm $\displaystyle\lim_{x\to\infty}f(x)=0$ (L'Hopital hoặc thứ bậc tăng $\ln x\ll x$). Khi đó đặc trưng qua dãy cho $a_n=f(n)\to 0$.</span>
</div>

<div class="your-turn mt-2">
<span class="timechip"><span class="lang-en">~3 min</span><span class="lang-vi">~3 phút</span></span>
<span class="lang-en">Discuss: why does "$f(n)\to L \Rightarrow a_n\to L$" work, but the reverse direction can fail?</span>
<span class="lang-vi">Thảo luận: vì sao "$f(n)\to L \Rightarrow a_n\to L$" đúng, nhưng chiều ngược lại có thể sai?</span>
</div>

---

# <span class="lang-en">Limits At Infinity</span><span class="lang-vi">Giới hạn tại vô cực</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$\displaystyle\lim_{x\to+\infty}f(x)=L$ if for every $\varepsilon>0$ there is an $N$ such that $x>N\Rightarrow|f(x)-L|<\varepsilon$. The line $y=L$ is a <strong>horizontal asymptote</strong>.</span>
<span class="lang-vi">$\displaystyle\lim_{x\to+\infty}f(x)=L$ nếu với mọi $\varepsilon>0$ tồn tại $N$ sao cho $x>N\Rightarrow|f(x)-L|<\varepsilon$. Đường $y=L$ là <strong>tiệm cận ngang</strong>.</span>
</div>

<div class="box gold mt-4">
<div class="label"><span class="lang-en">Example: divide by the dominant power</span><span class="lang-vi">Ví dụ: chia cho lũy thừa trội</span></div>

$$
\lim_{x\to\infty}\frac{3x^2-x-2}{5x^2+4x+1}=\lim_{x\to\infty}\frac{3-\frac1x-\frac2{x^2}}{5+\frac4x+\frac1{x^2}}=\frac{3}{5}.
$$

</div>

<div class="refs">
<span class="lang-en">Same trick as sequences: only the highest-degree terms survive.</span>
<span class="lang-vi">Cùng mẹo với dãy số: chỉ các số hạng bậc cao nhất "sống sót".</span>
</div>

---

# <span class="lang-en">Infinite Limits</span><span class="lang-vi">Giới hạn vô cực</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$\displaystyle\lim_{x\to a}f(x)=+\infty$ means: for every $M>0$ there is $\delta>0$ with $0<|x-a|<\delta\Rightarrow f(x)>M$. The line $x=a$ is a <strong>vertical asymptote</strong>.</span>
<span class="lang-vi">$\displaystyle\lim_{x\to a}f(x)=+\infty$ nghĩa là: với mọi $M>0$ tồn tại $\delta>0$ sao cho $0<|x-a|<\delta\Rightarrow f(x)>M$. Đường $x=a$ là <strong>tiệm cận đứng</strong>.</span>
</div>

<div class="box mt-4">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\lim_{x\to 3^+}\frac{2x}{x-3}=+\infty,\qquad \lim_{x\to 3^-}\frac{2x}{x-3}=-\infty.
$$

<span class="lang-en">So $x=3$ is a vertical asymptote of $f(x)=\dfrac{2x}{x-3}$.</span>
<span class="lang-vi">Vậy $x=3$ là tiệm cận đứng của $f(x)=\dfrac{2x}{x-3}$.</span>
</div>

---

# <span class="lang-en">Determinate vs Indeterminate Forms</span><span class="lang-vi">Dạng xác định và dạng vô định</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Determinate (you can read off the answer)</span><span class="lang-vi">Xác định (đọc ngay kết quả)</span></div>

$$
\frac{L}{0}=\infty,\qquad \frac{L}{\infty}=0
$$

$$
L\cdot\infty=\infty,\qquad q^{\infty}=0
$$

<div class="mini muted"><span class="lang-en">with $L\ne 0$; and $|q|<1$ for $q^{\infty}$</span><span class="lang-vi">với $L\ne 0$; và $|q|<1$ cho $q^{\infty}$</span></div>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">The 7 indeterminate forms</span><span class="lang-vi">7 dạng vô định</span></div>

$$
\frac{0}{0},\quad \frac{\infty}{\infty},\quad \infty-\infty
$$

$$
0\cdot\infty,\quad 1^{\infty},\quad \infty^{0},\quad 0^{0}
$$

</div>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">$\infty$ is not a number</span><span class="lang-vi">$\infty$ không phải là một số</span></div>
<span class="lang-en">Writing $\lim_{x\to\infty}(x^2-x)=\infty-\infty$ is wrong. Factor first: $x(x-1)\to\infty$.</span>
<span class="lang-vi">Viết $\lim_{x\to\infty}(x^2-x)=\infty-\infty$ là sai. Hãy phân tích trước: $x(x-1)\to\infty$.</span>
</div>

---

# <span class="lang-en">Asymptotes At A Glance</span><span class="lang-vi">Tiệm cận trong một trang</span>

<div class="grid-3">
<div class="box"><div class="label"><span class="lang-en">Vertical</span><span class="lang-vi">Đứng</span></div><span class="lang-en">$x=a$ when $f\to\pm\infty$ as $x\to a$.</span><span class="lang-vi">$x=a$ khi $f\to\pm\infty$ lúc $x\to a$.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Horizontal</span><span class="lang-vi">Ngang</span></div><span class="lang-en">$y=L$ when $f\to L$ as $x\to\pm\infty$.</span><span class="lang-vi">$y=L$ khi $f\to L$ lúc $x\to\pm\infty$.</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Slant</span><span class="lang-vi">Xiên</span></div><span class="lang-en">$y=mx+b$ with $m=\lim\frac{f(x)}{x}$, $b=\lim(f-mx)$.</span><span class="lang-vi">$y=mx+b$ với $m=\lim\frac{f(x)}{x}$, $b=\lim(f-mx)$.</span></div>
</div>

<div class="box mt-4">
<div class="label"><span class="lang-en">Example (slant)</span><span class="lang-vi">Ví dụ (xiên)</span></div>
<span class="lang-en">For $f(x)=\dfrac{x^3}{x^2+1}$: $m=1$ and $b=0$, so $y=x$ is a slant asymptote.</span>
<span class="lang-vi">Với $f(x)=\dfrac{x^3}{x^2+1}$: $m=1$ và $b=0$, nên $y=x$ là tiệm cận xiên.</span>
</div>

---

# <span class="lang-en">Your Turn: Infinity</span><span class="lang-vi">Đến lượt bạn: Vô cực</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~6 min, in pairs</span><span class="lang-vi">~6 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Evaluate and interpret</span><span class="lang-vi">Tính và diễn giải</span></div>
<ol>
<li>$\displaystyle\lim_{x\to+\infty}\frac{\sqrt{2x^2+1}}{3x-5}$ <span class="muted"><span class="lang-en">(horizontal asymptote?)</span><span class="lang-vi">(tiệm cận ngang?)</span></span></li>
<li>$\displaystyle\lim_{x\to 2^{+}}\frac{1}{x-2}$ <span class="muted"><span class="lang-en">(vertical asymptote?)</span><span class="lang-vi">(tiệm cận đứng?)</span></span></li>
<li>$\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)$ <span class="muted"><span class="lang-en">($\infty-\infty$: use a conjugate)</span><span class="lang-vi">($\infty-\infty$: nhân liên hợp)</span></span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Answers: $\tfrac{\sqrt2}{3}$, $\ +\infty$, $\ \tfrac12$. Solutions in the <a href="../../sessions/02-sequences/">short notes</a>.</span>
<span class="lang-vi">Đáp số: $\tfrac{\sqrt2}{3}$, $\ +\infty$, $\ \tfrac12$. Lời giải trong <a href="../../sessions/02-sequences/">ghi chú ngắn</a>.</span>
</div>

---

# <span class="lang-en">Infinitesimals And Infinitely Large</span><span class="lang-vi">Vô cùng bé và vô cùng lớn</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Infinitesimal</span><span class="lang-vi">Vô cùng bé (VCB)</span></div>
<span class="lang-en">$f$ is an <strong>infinitesimal</strong> as $x\to a$ if $\displaystyle\lim_{x\to a}f(x)=0$.</span>
<span class="lang-vi">$f$ là một <strong>vô cùng bé</strong> khi $x\to a$ nếu $\displaystyle\lim_{x\to a}f(x)=0$.</span>
</div>
<div class="defn">
<div class="tag"><span class="lang-en">Infinitely large</span><span class="lang-vi">Vô cùng lớn (VCL)</span></div>
<span class="lang-en">$f$ is <strong>infinitely large</strong> as $x\to a$ if $\displaystyle\lim_{x\to a}|f(x)|=+\infty$.</span>
<span class="lang-vi">$f$ là <strong>vô cùng lớn</strong> khi $x\to a$ nếu $\displaystyle\lim_{x\to a}|f(x)|=+\infty$.</span>
</div>
</div>

<div class="box gold mt-4">
<div class="label"><span class="lang-en">Reciprocal relationship</span><span class="lang-vi">Quan hệ nghịch đảo</span></div>
<span class="lang-en">If $f$ is infinitely large then $\tfrac1f$ is infinitesimal; if $f$ is a nonzero infinitesimal then $\tfrac1f$ is infinitely large. Example: $\tfrac1x$ is infinitesimal as $x\to\infty$ and infinitely large as $x\to 0$.</span>
<span class="lang-vi">Nếu $f$ là VCL thì $\tfrac1f$ là VCB; nếu $f$ là VCB khác $0$ thì $\tfrac1f$ là VCL. Ví dụ: $\tfrac1x$ là VCB khi $x\to\infty$ và VCL khi $x\to 0$.</span>
</div>

---

# <span class="lang-en">Comparing Infinitesimals</span><span class="lang-vi">So sánh các vô cùng bé</span>

<div class="box">
<div class="label"><span class="lang-en">Let $f,g$ be infinitesimals as $x\to a$. Look at $\displaystyle\lim_{x\to a}\frac{f}{g}$</span><span class="lang-vi">Cho $f,g$ là VCB khi $x\to a$. Xét $\displaystyle\lim_{x\to a}\frac{f}{g}$</span></div>
<ul>
<li><span class="lang-en">$=0$: $f$ is of <strong>higher order</strong> than $g$, written $f=o(g)$ (it shrinks faster).</span><span class="lang-vi">$=0$: $f$ có <strong>bậc cao hơn</strong> $g$, viết $f=o(g)$ ($f$ nhỏ nhanh hơn).</span></li>
<li><span class="lang-en">$=c\ne 0$: $f,g$ have the <strong>same order</strong>.</span><span class="lang-vi">$=c\ne 0$: $f,g$ <strong>cùng bậc</strong>.</span></li>
<li><span class="lang-en">$=\infty$: $f$ is of <strong>lower order</strong> than $g$.</span><span class="lang-vi">$=\infty$: $f$ có <strong>bậc thấp hơn</strong> $g$.</span></li>
<li><span class="lang-en">does not exist: $f,g$ are <strong>incomparable</strong> (e.g. $x\sin\frac1x$ vs $x$).</span><span class="lang-vi">không tồn tại: $f,g$ <strong>không so sánh được</strong> (vd $x\sin\frac1x$ với $x$).</span></li>
</ul>
</div>

<div class="refs">
<span class="lang-en">For infinitely large quantities the picture flips: a larger limit ratio means higher order.</span>
<span class="lang-vi">Với các vô cùng lớn, bức tranh đảo lại: thương giới hạn lớn hơn nghĩa là bậc cao hơn.</span>
</div>

---

# <span class="lang-en">Equivalent Infinitesimals</span><span class="lang-vi">Vô cùng bé tương đương</span>

<div class="box gold">
<div class="label"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$f\sim g$ as $x\to a$ if $\displaystyle\lim_{x\to a}\frac{f}{g}=1$.</span>
<span class="lang-vi">$f\sim g$ khi $x\to a$ nếu $\displaystyle\lim_{x\to a}\frac{f}{g}=1$.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">As $x\to 0$ (memorize these)</span><span class="lang-vi">Khi $x\to 0$ (cần nhớ)</span></div>
<div class="cols-2">

$$\sin x\sim x,\quad \tan x\sim x$$

$$\arcsin x\sim x,\quad \arctan x\sim x$$

$$1-\cos x\sim \tfrac{x^2}{2}$$

$$e^x-1\sim x,\quad \ln(1+x)\sim x$$

$$a^x-1\sim x\ln a$$

$$(1+x)^\mu-1\sim \mu x,\quad \sqrt{1+x}-1\sim\tfrac{x}{2}$$

</div>
</div>

---

# <span class="lang-en">Using Equivalents To Find Limits</span><span class="lang-vi">Dùng tương đương để tính giới hạn</span>

<div class="box blue">
<div class="label"><span class="lang-en">Rule</span><span class="lang-vi">Quy tắc</span></div>
<span class="lang-en">In a <strong>product or quotient</strong>, you may replace a factor by an equivalent one without changing the limit.</span>
<span class="lang-vi">Trong một <strong>tích hoặc thương</strong>, có thể thay một thừa số bằng đại lượng tương đương mà không đổi giới hạn.</span>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\lim_{x\to 0}\frac{e^{x^2}-\cos x}{x^2}
=\lim_{x\to 0}\frac{(e^{x^2}-1)+(1-\cos x)}{x^2}
=\lim_{x\to 0}\frac{x^2+\frac{x^2}{2}}{x^2}=\frac{3}{2}.
$$

</div>

<div class="caution mt-2">
<span class="lang-en"><strong>Careful:</strong> do not replace a term inside a sum or difference if that cancellation is the whole point - split into recognizable pieces first.</span>
<span class="lang-vi"><strong>Cẩn thận:</strong> đừng thay một hạng tử bên trong tổng/hiệu nếu chính sự triệt tiêu đó mới là mấu chốt - hãy tách thành các mảnh nhận dạng được trước.</span>
</div>

---

# <span class="lang-en">Equivalent Infinities And Growth</span><span class="lang-vi">Vô cùng lớn tương đương và tốc độ tăng</span>

<div class="box gold">
<div class="label"><span class="lang-en">As $x\to+\infty$</span><span class="lang-vi">Khi $x\to+\infty$</span></div>

$$
\ln^\alpha x \ \ll\ x^\beta \ \ll\ a^x\qquad (\alpha,\beta>0,\ a>1)
$$

<span class="lang-en">Keep only the fastest-growing term in numerator and denominator.</span>
<span class="lang-vi">Chỉ giữ lại số hạng tăng nhanh nhất ở tử và mẫu.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\lim_{x\to+\infty}\frac{\sqrt{x^2+4}+2x+3\sqrt{x}}{\sqrt{x^2-4}+x}
=\lim_{x\to+\infty}\frac{3x}{2x}=\frac{3}{2},
$$

<span class="lang-en">since $\sqrt{x^2\pm 4}\sim x$ and $3\sqrt x$ is lower order than $x$.</span>
<span class="lang-vi">vì $\sqrt{x^2\pm 4}\sim x$ và $3\sqrt x$ có bậc thấp hơn $x$.</span>
</div>

---

# <span class="lang-en">The Big Picture</span><span class="lang-vi">Bức tranh tổng thể</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">One idea, four settings</span><span class="lang-vi">Một ý tưởng, bốn bối cảnh</span></div>
<span class="lang-en">"Approaching" runs through everything today: sequences, function limits, behavior at infinity, and the language of infinitesimals.</span>
<span class="lang-vi">"Sự tiến gần" xuyên suốt cả buổi hôm nay: dãy số, giới hạn hàm, hành vi tại vô cực, và ngôn ngữ vô cùng bé.</span>
</div>

<div class="grid-4 mt-4">
<div class="kpi"><span class="pill">1</span><strong><span class="lang-en">Sequences</span><span class="lang-vi">Dãy số</span></strong><br><span class="lang-en">$n\to\infty$</span><span class="lang-vi">$n\to\infty$</span></div>
<div class="kpi"><span class="pill">2</span><strong><span class="lang-en">Function limits</span><span class="lang-vi">Giới hạn hàm</span></strong><br><span class="lang-en">$x\to a$</span><span class="lang-vi">$x\to a$</span></div>
<div class="kpi"><span class="pill">3</span><strong><span class="lang-en">Infinity</span><span class="lang-vi">Vô cực</span></strong><br><span class="lang-en">asymptotes</span><span class="lang-vi">tiệm cận</span></div>
<div class="kpi"><span class="pill">4</span><strong><span class="lang-en">Infinitesimals</span><span class="lang-vi">VCB / VCL</span></strong><br><span class="lang-en">compare &amp; replace</span><span class="lang-vi">so sánh &amp; thay thế</span></div>
</div>

<div class="refs">
<span class="lang-en">Next class: <strong>continuity</strong> closes the loop - a function is continuous at $a$ when $\lim_{x\to a}f(x)=f(a)$.</span>
<span class="lang-vi">Buổi sau: <strong>tính liên tục</strong> khép vòng - hàm liên tục tại $a$ khi $\lim_{x\to a}f(x)=f(a)$.</span>
</div>

---

# <span class="lang-en">Practice And Reading</span><span class="lang-vi">Luyện tập và bài đọc</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">In the short notes</span><span class="lang-vi">Trong ghi chú ngắn</span></div>
<ul>
<li><span class="lang-en">all definitions, theorems, and worked examples</span><span class="lang-vi">mọi định nghĩa, định lý và ví dụ đã giải</span></li>
<li><span class="lang-en">full practice lists for sequences and limits</span><span class="lang-vi">danh sách bài tập đầy đủ cho dãy và giới hạn</span></li>
<li><span class="lang-en">solutions to today's discussion problems</span><span class="lang-vi">lời giải các bài thảo luận hôm nay</span></li>
</ul>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Read</span><span class="lang-vi">Đọc</span></div>
<ul>
<li><a href="https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"><span class="lang-en">OpenStax Vol 2, 5.1: Sequences</span><span class="lang-vi">OpenStax Vol 2, 5.1: Sequences</span></a></li>
<li><a href="https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function"><span class="lang-en">OpenStax Vol 1, 2.2-2.4: Limits</span><span class="lang-vi">OpenStax Vol 1, 2.2-2.4: Limits</span></a></li>
<li><a href="https://activecalculus.org/single/sec-1-2-limits.html"><span class="lang-en">Active Calculus 1.2: The notion of limit</span><span class="lang-vi">Active Calculus 1.2: Khái niệm giới hạn</span></a></li>
</ul>
</div>
</div>

<div class="refs">
<span class="lang-en">Full notes and practice: <a href="../../sessions/02-sequences/">Session 02 short notes</a>. Thank you!</span>
<span class="lang-vi">Ghi chú đầy đủ và bài tập: <a href="../../sessions/02-sequences/">ghi chú ngắn Buổi 02</a>. Cảm ơn các bạn!</span>
</div>
