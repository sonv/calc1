---
theme: default
title: "Calculus 1 - Continuity And Derivatives"
info: "MT1003 Calculus 1, Session 03"
transition: slide-left
download: "../../pdfs/continuity-derivatives.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Continuity And Derivatives</span><span class="lang-vi">Tính liên tục và Đạo hàm</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Session 03</span>
<span class="lang-vi">MT1003 Giải tích 1 - Buổi 03</span>
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

# <span class="lang-en">Where We Are</span><span class="lang-vi">Chúng ta đang ở đâu</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">From limits to continuity</span><span class="lang-vi">Từ giới hạn đến tính liên tục</span></div>
<span class="lang-en">Last session we learned to compute $\displaystyle\lim_{x\to a}f(x)$. Today we ask the next question: when does the limit simply equal $f(a)$? That is <strong>continuity</strong> - and it unlocks the <strong>derivative</strong>.</span>
<span class="lang-vi">Buổi trước ta học cách tính $\displaystyle\lim_{x\to a}f(x)$. Hôm nay ta hỏi câu tiếp theo: khi nào giới hạn bằng đúng $f(a)$? Đó là <strong>tính liên tục</strong> - và nó mở ra <strong>đạo hàm</strong>.</span>
</div>

<div class="grid-2 mt-4">
<div class="box"><div class="label"><span class="lang-en">Continuity</span><span class="lang-vi">Liên tục</span></div><span class="lang-en">A curve you can draw without lifting the pen: $\lim_{x\to a}f(x)=f(a)$.</span><span class="lang-vi">Một đường cong vẽ được mà không nhấc bút: $\lim_{x\to a}f(x)=f(a)$.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Derivative</span><span class="lang-vi">Đạo hàm</span></div><span class="lang-en">The limit of a slope: it measures the instantaneous rate of change - speed, growth, marginal cost.</span><span class="lang-vi">Giới hạn của một độ dốc: đo tốc độ thay đổi tức thời - vận tốc, tăng trưởng, chi phí biên.</span></div>
</div>

<div class="refs">
<span class="lang-en">Both ideas are built on one tool you already have: the limit.</span>
<span class="lang-vi">Cả hai ý tưởng đều dựng trên một công cụ bạn đã có: giới hạn.</span>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-8</span><span><span class="lang-en"><strong>Bridge &amp; roadmap</strong> - from limits to continuity</span><span class="lang-vi"><strong>Cầu nối &amp; lộ trình</strong> - từ giới hạn đến liên tục</span></span></div>
<div class="tl-row"><span class="clock">8-30</span><span><span class="lang-en"><strong>Continuity</strong> - definition, one-sided, composites, IVT &amp; EVT</span><span class="lang-vi"><strong>Tính liên tục</strong> - định nghĩa, một phía, hàm hợp, IVT &amp; EVT</span></span></div>
<div class="tl-row"><span class="clock">30-45</span><span><span class="lang-en"><strong>Discontinuity</strong> - removable, jump, infinite</span><span class="lang-vi"><strong>Gián đoạn</strong> - khử được, nhảy, vô cực</span></span></div>
<div class="tl-row disc"><span class="clock">45-72</span><span><span class="lang-en"><strong>Your turn: continuity</strong> - all continuity &amp; discontinuity problems</span><span class="lang-vi"><strong>Đến lượt bạn: liên tục</strong> - mọi bài liên tục &amp; gián đoạn</span></span></div>
<div class="tl-row break"><span class="clock">72-82</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row"><span class="clock">82-115</span><span><span class="lang-en"><strong>Derivatives</strong> - tangent, velocity, definition, rules, chain rule</span><span class="lang-vi"><strong>Đạo hàm</strong> - tiếp tuyến, vận tốc, định nghĩa, quy tắc, hàm hợp</span></span></div>
<div class="tl-row"><span class="clock">115-135</span><span><span class="lang-en"><strong>Higher-order derivatives &amp; differentials</strong></span><span class="lang-vi"><strong>Đạo hàm cấp cao &amp; vi phân</strong></span></span></div>
<div class="tl-row disc"><span class="clock">135-170</span><span><span class="lang-en"><strong>Your turn: derivatives</strong> - definition, rules, higher-order, differentials</span><span class="lang-vi"><strong>Đến lượt bạn: đạo hàm</strong> - định nghĩa, quy tắc, cấp cao, vi phân</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Structure: <strong>all definitions first</strong>, then a long block where you work problems in pairs.</span>
<span class="lang-vi">Cấu trúc: <strong>giới thiệu hết định nghĩa trước</strong>, rồi một khối dài để bạn giải bài theo cặp.</span>
</div>

---

# <span class="lang-en">Continuity At A Number</span><span class="lang-vi">Liên tục tại một điểm</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">A function $f$ is <strong>continuous at a number $a$</strong> if</span>
<span class="lang-vi">Hàm $f$ <strong>liên tục tại điểm $a$</strong> nếu</span>

$$
\lim_{x\to a}f(x)=f(a).
$$

</div>

<div class="box blue mt-4">
<div class="label"><span class="lang-en">This packs three requirements</span><span class="lang-vi">Điều này gói gọn ba yêu cầu</span></div>
<ol>
<li><span class="lang-en">$f(a)$ is defined (so $a$ is in the domain);</span><span class="lang-vi">$f(a)$ xác định (tức $a$ thuộc miền xác định);</span></li>
<li><span class="lang-en">$\displaystyle\lim_{x\to a}f(x)$ exists;</span><span class="lang-vi">$\displaystyle\lim_{x\to a}f(x)$ tồn tại;</span></li>
<li><span class="lang-en">the two are equal.</span><span class="lang-vi">và hai giá trị đó bằng nhau.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/2-4-continuity">OpenStax Vol 1, 2.4</a>.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7</a>; <a href="https://openstax.org/books/calculus-volume-1/pages/2-4-continuity">OpenStax Vol 1, 2.4</a>.</span>
</div>

---

# <span class="lang-en">Which Functions Are Continuous?</span><span class="lang-vi">Những hàm nào liên tục?</span>

<div class="box gold">
<div class="label"><span class="lang-en">Elementary functions are continuous on their domains</span><span class="lang-vi">Các hàm sơ cấp liên tục trên miền xác định</span></div>
<span class="lang-en">Polynomials, $x^{\alpha}$, $\sin x$, $\cos x$, $a^{x}$, $\log_a x$ $(x\gt 0)$ are continuous at every number of their domain. Sums, products, quotients (nonzero denominator) and compositions of continuous functions are continuous.</span>
<span class="lang-vi">Đa thức, $x^{\alpha}$, $\sin x$, $\cos x$, $a^{x}$, $\log_a x$ $(x\gt 0)$ liên tục tại mọi điểm thuộc miền của chúng. Tổng, tích, thương (mẫu khác 0) và hợp của các hàm liên tục đều liên tục.</span>
</div>

<div class="grid-2 mt-3">
<div class="box"><div class="label"><span class="lang-en">Example - just substitute</span><span class="lang-vi">Ví dụ - chỉ cần thế</span></div><span class="lang-en">$f(x)=x^3-5x^2+7x-10$ is a polynomial, so</span><span class="lang-vi">$f(x)=x^3-5x^2+7x-10$ là đa thức, nên</span>

$$
\lim_{x\to 3}f(x)=f(3)=-7.
$$
</div>
<div class="box blue"><div class="label"><span class="lang-en">Example - simplify first</span><span class="lang-vi">Ví dụ - rút gọn trước</span></div>

$$
\lim_{x\to 4}\frac{x^2-2x-8}{x^2-4x}=\lim_{x\to 4}\frac{x+2}{x}=\frac{3}{2}.
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Continuity is what makes "plug in the value" a valid way to find many limits.</span>
<span class="lang-vi">Chính tính liên tục khiến việc "thế giá trị vào" trở thành cách hợp lệ để tính nhiều giới hạn.</span>
</div>

---

# <span class="lang-en">One-Sided Continuity And Intervals</span><span class="lang-vi">Liên tục một phía và trên khoảng</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">One-sided</span><span class="lang-vi">Một phía</span></div>
<span class="lang-en">$f$ is <strong>continuous from the right</strong> at $a$ if $\lim_{x\to a^+}f(x)=f(a)$, and <strong>from the left</strong> if $\lim_{x\to a^-}f(x)=f(a)$.</span>
<span class="lang-vi">$f$ <strong>liên tục phải</strong> tại $a$ nếu $\lim_{x\to a^+}f(x)=f(a)$, và <strong>liên tục trái</strong> nếu $\lim_{x\to a^-}f(x)=f(a)$.</span>
</div>
<div class="thm">
<div class="tag"><span class="lang-en">Two sides agree</span><span class="lang-vi">Hai phía bằng nhau</span></div>
<span class="lang-en">$f$ is continuous at $a$ if and only if</span>
<span class="lang-vi">$f$ liên tục tại $a$ khi và chỉ khi</span>

$$
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=f(a).
$$
</div>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">On an interval</span><span class="lang-vi">Trên một khoảng</span></div>
<span class="lang-en">$f$ is continuous on $(a,b)$ if it is continuous at every point of $(a,b)$. It is continuous on $[a,b]$ if also continuous from the right at $a$ and from the left at $b$.</span>
<span class="lang-vi">$f$ liên tục trên $(a,b)$ nếu liên tục tại mọi điểm của $(a,b)$. Nó liên tục trên $[a,b]$ nếu thêm điều kiện liên tục phải tại $a$ và liên tục trái tại $b$.</span>
</div>

---

# <span class="lang-en">Limits Of Composite Functions</span><span class="lang-vi">Giới hạn của hàm hợp</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">If $f$ is continuous at $b$ and $\lim_{x\to a}g(x)=b$, then</span>
<span class="lang-vi">Nếu $f$ liên tục tại $b$ và $\lim_{x\to a}g(x)=b$, thì</span>

$$
\lim_{x\to a}f\big(g(x)\big)=f\Big(\lim_{x\to a}g(x)\Big)=f(b).
$$

</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Consequence</span><span class="lang-vi">Hệ quả</span></div>
<span class="lang-en">If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f\circ g$ is continuous at $a$.</span>
<span class="lang-vi">Nếu $g$ liên tục tại $a$ và $f$ liên tục tại $g(a)$, thì $f\circ g$ liên tục tại $a$.</span>
</div>

<div class="grid-2 mt-3">
<div class="box"><span class="lang-en">$\displaystyle\lim_{x\to 0}\sin(x^2+2x+3)=\sin 3$, since the inside $\to 3$ and $\sin$ is continuous.</span><span class="lang-vi">$\displaystyle\lim_{x\to 0}\sin(x^2+2x+3)=\sin 3$, vì biểu thức trong $\to 3$ và $\sin$ liên tục.</span></div>
<div class="box blue"><span class="lang-en">$h(x)=\cos(x^2-5x+2)$ is continuous for all $x$ (a composite of continuous pieces).</span><span class="lang-vi">$h(x)=\cos(x^2-5x+2)$ liên tục với mọi $x$ (hợp của các hàm liên tục).</span></div>
</div>

---

# <span class="lang-en">Intermediate Value Theorem</span><span class="lang-vi">Định lý giá trị trung gian (IVT)</span>

<div class="grid-2 align-center">
<div class="thm">
<div class="tag"><span class="lang-en">Theorem (IVT)</span><span class="lang-vi">Định lý (IVT)</span></div>
<span class="lang-en">If $f$ is continuous on $[a,b]$ and $N$ lies between $f(a)$ and $f(b)$, then there is a $c\in(a,b)$ with</span>
<span class="lang-vi">Nếu $f$ liên tục trên $[a,b]$ và $N$ nằm giữa $f(a)$ và $f(b)$, thì tồn tại $c\in(a,b)$ sao cho</span>

$$
f(c)=N.
$$
</div>
<div class="seq-figure">
<FnViz kind="ivt" />
<div class="cap"><span class="lang-en">$f(a)\lt 0\lt f(b)$ forces a root $c$</span><span class="lang-vi">$f(a)\lt 0\lt f(b)$ buộc phải có nghiệm $c$</span></div>
</div>
</div>

<div class="box gold mt-2">
<div class="label"><span class="lang-en">Why engineers care: root-finding</span><span class="lang-vi">Vì sao kỹ sư quan tâm: tìm nghiệm</span></div>
<span class="lang-en">If $f(a)$ and $f(b)$ have opposite signs, a root lives in $[a,b]$. Halving the interval (bisection) traps it as tightly as you like.</span>
<span class="lang-vi">Nếu $f(a)$ và $f(b)$ trái dấu, có một nghiệm nằm trong $[a,b]$. Chia đôi khoảng (phương pháp chia đôi) kẹp nó chặt tùy ý.</span>
</div>

---

# <span class="lang-en">Extreme Value Theorem</span><span class="lang-vi">Định lý giá trị cực trị (EVT)</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem (EVT)</span><span class="lang-vi">Định lý (EVT)</span></div>
<span class="lang-en">If $f$ is continuous on a <strong>closed, bounded</strong> interval $[a,b]$, then $f$ attains an absolute maximum value $f(c)$ and an absolute minimum value $f(d)$ at some numbers $c,d\in[a,b]$.</span>
<span class="lang-vi">Nếu $f$ liên tục trên đoạn <strong>đóng, bị chặn</strong> $[a,b]$, thì $f$ đạt giá trị lớn nhất $f(c)$ và giá trị nhỏ nhất $f(d)$ tại các điểm $c,d\in[a,b]$.</span>
</div>

<div class="caution mt-4">
<div class="label"><span class="lang-en">Both hypotheses are needed</span><span class="lang-vi">Cần cả hai giả thiết</span></div>
<span class="lang-en">On the open interval $(0,1)$, $f(x)=x$ has no maximum. On $[0,\infty)$, $f(x)=x$ has no maximum. "Closed" and "bounded" cannot be dropped.</span>
<span class="lang-vi">Trên khoảng mở $(0,1)$, $f(x)=x$ không có giá trị lớn nhất. Trên $[0,\infty)$, $f(x)=x$ cũng vậy. Không thể bỏ "đóng" và "bị chặn".</span>
</div>

<div class="refs">
<span class="lang-en">EVT is the foundation for finding maxima/minima later in the course.</span>
<span class="lang-vi">EVT là nền tảng để tìm cực trị ở phần sau của môn học.</span>
</div>

---

# <span class="lang-en">When Continuity Fails: Discontinuity</span><span class="lang-vi">Khi tính liên tục mất: Sự gián đoạn</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$f$ is <strong>discontinuous at $a$</strong> if it is not continuous there - at least one of the equalities $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$ fails.</span>
<span class="lang-vi">$f$ <strong>gián đoạn tại $a$</strong> nếu nó không liên tục tại đó - ít nhất một trong các đẳng thức $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$ không đúng.</span>
</div>

<div class="grid-2 mt-4">
<div class="box"><div class="label"><span class="lang-en">Case 1</span><span class="lang-vi">Trường hợp 1</span></div><span class="lang-en">A one-sided limit <strong>does not exist</strong> or is $\infty$.</span><span class="lang-vi">Một giới hạn một phía <strong>không tồn tại</strong> hoặc bằng $\infty$.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Case 2</span><span class="lang-vi">Trường hợp 2</span></div><span class="lang-en">Both one-sided limits exist, but an equality above still fails.</span><span class="lang-vi">Cả hai giới hạn một phía tồn tại, nhưng một đẳng thức trên vẫn sai.</span></div>
</div>

<div class="refs">
<span class="lang-en">These cases give exactly three named types: removable, jump, infinite.</span>
<span class="lang-vi">Các trường hợp này cho đúng ba loại có tên: khử được, nhảy, vô cực.</span>
</div>

---

# <span class="lang-en">Removable Discontinuity</span><span class="lang-vi">Gián đoạn khử được</span>

<div class="grid-2 align-center">
<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$f$ has a <strong>removable discontinuity</strong> at $a$ if both one-sided limits exist and are equal, but $f(a)$ is undefined or different:</span>
<span class="lang-vi">$f$ có <strong>gián đoạn khử được</strong> tại $a$ nếu hai giới hạn một phía tồn tại và bằng nhau, nhưng $f(a)$ không xác định hoặc khác giá trị đó:</span>

$$
\lim_{x\to a^-}f=\lim_{x\to a^+}f\neq f(a).
$$
</div>
<div class="seq-figure">
<FnViz kind="removable" />
<div class="cap"><span class="lang-en">limit exists, but the point sits elsewhere</span><span class="lang-vi">giới hạn tồn tại, nhưng điểm nằm chỗ khác</span></div>
</div>
</div>

<div class="box gold mt-2">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">$f(x)=|x|$ for $x\neq 0$ and $f(0)=1$: both sides $\to 0\neq 1=f(0)$. Redefining $f(0)=0$ "removes" it.</span>
<span class="lang-vi">$f(x)=|x|$ với $x\neq 0$ và $f(0)=1$: cả hai phía $\to 0\neq 1=f(0)$. Định nghĩa lại $f(0)=0$ thì "khử" được.</span>
</div>

---

# <span class="lang-en">Jump Discontinuity</span><span class="lang-vi">Gián đoạn nhảy</span>

<div class="grid-2 align-center">
<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$f$ has a <strong>jump discontinuity</strong> at $a$ if both one-sided limits exist but are not equal:</span>
<span class="lang-vi">$f$ có <strong>gián đoạn nhảy</strong> tại $a$ nếu hai giới hạn một phía tồn tại nhưng không bằng nhau:</span>

$$
\lim_{x\to a^-}f\neq\lim_{x\to a^+}f.
$$
</div>
<div class="seq-figure">
<FnViz kind="jump" />
<div class="cap"><span class="lang-en">$\operatorname{sign}x$: left $\to -1$, right $\to +1$</span><span class="lang-vi">$\operatorname{sign}x$: trái $\to -1$, phải $\to +1$</span></div>
</div>
</div>

<div class="box mt-2">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">$\operatorname{sign}(x)$ has $\lim_{x\to0^+}=1$ and $\lim_{x\to0^-}=-1$. The gap of size $2$ is the "jump".</span>
<span class="lang-vi">$\operatorname{sign}(x)$ có $\lim_{x\to0^+}=1$ và $\lim_{x\to0^-}=-1$. Khoảng cách bằng $2$ chính là "bước nhảy".</span>
</div>

---

# <span class="lang-en">Infinite Discontinuity</span><span class="lang-vi">Gián đoạn vô cực</span>

<div class="grid-2 align-center">
<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">$f$ has an <strong>infinite discontinuity</strong> at $a$ if at least one one-sided limit is $\pm\infty$.</span>
<span class="lang-vi">$f$ có <strong>gián đoạn vô cực</strong> tại $a$ nếu ít nhất một giới hạn một phía bằng $\pm\infty$.</span>
</div>
<div class="seq-figure">
<FnViz kind="infinite" />
<div class="cap"><span class="lang-en">$1/x$ at $0$: a vertical asymptote</span><span class="lang-vi">$1/x$ tại $0$: một tiệm cận đứng</span></div>
</div>
</div>

<div class="box blue mt-2">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">$f(x)=1/x$ (with $f(0)$ set to anything) has $\lim_{x\to 0^+}=+\infty$, $\lim_{x\to 0^-}=-\infty$: infinite discontinuity at $0$, vertical asymptote $x=0$.</span>
<span class="lang-vi">$f(x)=1/x$ (đặt $f(0)$ bất kỳ) có $\lim_{x\to 0^+}=+\infty$, $\lim_{x\to 0^-}=-\infty$: gián đoạn vô cực tại $0$, tiệm cận đứng $x=0$.</span>
</div>

---

# <span class="lang-en">Discontinuity Types At A Glance</span><span class="lang-vi">Các loại gián đoạn trong một trang</span>

<div class="grid-3">
<div class="box"><div class="label"><span class="lang-en">Removable</span><span class="lang-vi">Khử được</span></div><span class="lang-en">$L^-=L^+\neq f(a)$ (or $f(a)$ undefined). Patch one point.</span><span class="lang-vi">$L^-=L^+\neq f(a)$ (hoặc $f(a)$ không xác định). Vá một điểm.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Jump</span><span class="lang-vi">Nhảy</span></div><span class="lang-en">$L^-\neq L^+$, both finite. The graph steps.</span><span class="lang-vi">$L^-\neq L^+$, đều hữu hạn. Đồ thị có bước nhảy.</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Infinite</span><span class="lang-vi">Vô cực</span></div><span class="lang-en">A one-sided limit is $\pm\infty$. Vertical asymptote.</span><span class="lang-vi">Một giới hạn một phía bằng $\pm\infty$. Tiệm cận đứng.</span></div>
</div>

<div class="box mt-4">
<div class="label"><span class="lang-en">Diagnosis recipe</span><span class="lang-vi">Quy trình chẩn đoán</span></div>
<span class="lang-en">At a suspect point $a$: compute $\lim_{x\to a^-}f$ and $\lim_{x\to a^+}f$. Compare them to each other and to $f(a)$ - that single comparison names the type.</span>
<span class="lang-vi">Tại điểm nghi ngờ $a$: tính $\lim_{x\to a^-}f$ và $\lim_{x\to a^+}f$. So sánh chúng với nhau và với $f(a)$ - một so sánh đó gọi tên được loại gián đoạn.</span>
</div>

<div class="refs">
<span class="lang-en">Now let's practice everything on continuity - before the break.</span>
<span class="lang-vi">Bây giờ ta luyện toàn bộ phần liên tục - trước giờ giải lao.</span>
</div>

---

# <span class="lang-en">Your Turn: Continuity Block</span><span class="lang-vi">Đến lượt bạn: Khối Liên tục</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">How practice works</span><span class="lang-vi">Cách luyện tập</span></div>
<span class="lang-en">Work the three sets below in pairs - all of continuity and discontinuity - <strong>before</strong> the break. Each set names a primary source on <strong>Active Calculus</strong>; where it has no matching set, the problems live on the slide. Full answers are in the Session 03 notes.</span>
<span class="lang-vi">Làm ba nhóm bài dưới đây theo cặp - toàn bộ phần liên tục và gián đoạn - <strong>trước</strong> giờ giải lao. Mỗi nhóm nêu nguồn chính trên <strong>Active Calculus</strong>; chỗ nào không có sẵn, bài nằm ngay trên slide. Lời giải đầy đủ trong ghi chú Buổi 03.</span>
</div>

<div class="grid-3 mt-4">
<div class="kpi"><span class="pill">1</span><strong><span class="lang-en">Continuity</span><span class="lang-vi">Liên tục</span></strong><br><span class="lang-en">evaluate, test, repair</span><span class="lang-vi">tính, kiểm tra, sửa</span></div>
<div class="kpi"><span class="pill">2</span><strong><span class="lang-en">Discontinuity</span><span class="lang-vi">Gián đoạn</span></strong><br><span class="lang-en">classify the type</span><span class="lang-vi">phân loại</span></div>
<div class="kpi"><span class="pill">3</span><strong><span class="lang-en">IVT</span><span class="lang-vi">IVT</span></strong><br><span class="lang-en">locate roots</span><span class="lang-vi">định vị nghiệm</span></div>
</div>

---

# <span class="lang-en">Your Turn: Continuity</span><span class="lang-vi">Đến lượt bạn: Liên tục</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~8 min, in pairs</span><span class="lang-vi">~8 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Evaluate, test, and repair continuity</span><span class="lang-vi">Tính, kiểm tra và sửa tính liên tục</span></div>
<ol>
<li><span class="lang-en">Use continuity to find $\displaystyle\lim_{x\to 2}\frac{x^2+3x}{x+1}$.</span><span class="lang-vi">Dùng tính liên tục để tìm $\displaystyle\lim_{x\to 2}\frac{x^2+3x}{x+1}$.</span></li>
<li><span class="lang-en">Show $f(x)=1-\sqrt{1-x^2}$ is continuous on $[-1,1]$.</span><span class="lang-vi">Chứng minh $f(x)=1-\sqrt{1-x^2}$ liên tục trên $[-1,1]$.</span></li>
<li><span class="lang-en">Find $c$ so that $f$, equal to $x^2$ for $x\le 1$ and to $2x+c$ for $x\gt 1$, is continuous everywhere.</span><span class="lang-vi">Tìm $c$ để hàm $f$, bằng $x^2$ khi $x\le 1$ và bằng $2x+c$ khi $x\gt 1$, liên tục khắp nơi.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7</a>. Answers: $\tfrac{10}{3}$; continuous; $c=-1$.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7</a>. Đáp án: $\tfrac{10}{3}$; liên tục; $c=-1$.</span>
</div>

---

# <span class="lang-en">Your Turn: Classify The Discontinuity</span><span class="lang-vi">Đến lượt bạn: Phân loại gián đoạn</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~8 min, in pairs</span><span class="lang-vi">~8 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">For each, find the one-sided limits and name the type</span><span class="lang-vi">Với mỗi hàm, tìm giới hạn một phía và gọi tên loại</span></div>
<ol class="cols-2">
<li>$\displaystyle f(x)=\frac{x^2-9}{x-3}$ <span class="muted"><span class="lang-en">at $x=3$</span><span class="lang-vi">tại $x=3$</span></span></li>
<li>$\displaystyle f(x)=\frac{|x-2|}{x-2}$ <span class="muted"><span class="lang-en">at $x=2$</span><span class="lang-vi">tại $x=2$</span></span></li>
<li>$\displaystyle f(x)=\frac{1}{(x-1)^2}$ <span class="muted"><span class="lang-en">at $x=1$</span><span class="lang-vi">tại $x=1$</span></span></li>
<li>$\displaystyle f(x)=\frac{\sin x}{x}$ <span class="muted"><span class="lang-en">at $x=0$</span><span class="lang-vi">tại $x=0$</span></span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">On-slide set (Active Calculus does not classify these by type). Answers: removable; jump; infinite; removable.</span>
<span class="lang-vi">Bài trên slide (Active Calculus không phân loại theo kiểu này). Đáp án: khử được; nhảy; vô cực; khử được.</span>
</div>

---

# <span class="lang-en">Your Turn: Intermediate Value Theorem</span><span class="lang-vi">Đến lượt bạn: Định lý giá trị trung gian</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~6 min, in pairs</span><span class="lang-vi">~6 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Locate roots with sign changes</span><span class="lang-vi">Định vị nghiệm bằng đổi dấu</span></div>
<ol>
<li><span class="lang-en">Show $x^3-x-1=0$ has a root in $(1,2)$.</span><span class="lang-vi">Chứng minh $x^3-x-1=0$ có nghiệm trong $(1,2)$.</span></li>
<li><span class="lang-en">Do one bisection step: which half, $(1,1.5)$ or $(1.5,2)$, must contain the root?</span><span class="lang-vi">Thực hiện một bước chia đôi: nửa nào, $(1,1.5)$ hay $(1.5,2)$, chắc chắn chứa nghiệm?</span></li>
<li><span class="lang-en">Show $\cos x=x$ has a solution in $(0,1)$.</span><span class="lang-vi">Chứng minh $\cos x=x$ có nghiệm trong $(0,1)$.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7</a>. Hints: $f(1)=-1\lt 0\lt 5=f(2)$; $f(1.5)=0.875\gt 0\Rightarrow$ root in $(1,1.5)$; $g(x)=\cos x-x$, $g(0)=1\gt 0$, $g(1)\lt 0$.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7</a>. Gợi ý: $f(1)=-1\lt 0\lt 5=f(2)$; $f(1.5)=0.875\gt 0\Rightarrow$ nghiệm trong $(1,1.5)$; $g(x)=\cos x-x$, $g(0)=1\gt 0$, $g(1)\lt 0$.</span>
</div>

---
layout: center
---

# <span class="lang-en">Break - 10 minutes</span><span class="lang-vi">Nghỉ giải lao - 10 phút</span>

<div class="box gold spotlight center">
<span class="lang-en">Continuity is done. After the break we turn the limit of a slope into the single most useful object in calculus: the <strong>derivative</strong>.</span>
<span class="lang-vi">Phần liên tục đã xong. Sau giờ giải lao, ta biến giới hạn của một độ dốc thành đối tượng hữu ích nhất của giải tích: <strong>đạo hàm</strong>.</span>
</div>

---

# <span class="lang-en">Motivation 1: The Tangent Line</span><span class="lang-vi">Động lực 1: Tiếp tuyến</span>

<div class="grid-2 align-center">
<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">The <strong>tangent line</strong> to $y=f(x)$ at $P(a,f(a))$ is the line through $P$ with slope</span>
<span class="lang-vi"><strong>Tiếp tuyến</strong> của $y=f(x)$ tại $P(a,f(a))$ là đường thẳng qua $P$ với hệ số góc</span>

$$
m=\lim_{x\to a}\frac{f(x)-f(a)}{x-a},
$$

<span class="lang-en">when this limit exists.</span>
<span class="lang-vi">khi giới hạn này tồn tại.</span>
</div>
<div class="seq-figure">
<FnViz kind="secant" />
<div class="cap"><span class="lang-en">secants (blue) tip into the tangent (gold)</span><span class="lang-vi">các cát tuyến (xanh) tiến tới tiếp tuyến (vàng)</span></div>
</div>
</div>

<div class="box gold mt-2">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">For $y=x^2$ at $P(1,1)$: $\ m=\lim_{x\to1}\dfrac{x^2-1}{x-1}=\lim_{x\to1}(x+1)=2$, so the tangent is $y=2x-1$.</span>
<span class="lang-vi">Với $y=x^2$ tại $P(1,1)$: $\ m=\lim_{x\to1}\dfrac{x^2-1}{x-1}=\lim_{x\to1}(x+1)=2$, nên tiếp tuyến là $y=2x-1$.</span>
</div>

---

# <span class="lang-en">Motivation 2: Velocity</span><span class="lang-vi">Động lực 2: Vận tốc</span>

<div class="box">
<div class="label"><span class="lang-en">Average velocity over $[a,a+h]$</span><span class="lang-vi">Vận tốc trung bình trên $[a,a+h]$</span></div>
<span class="lang-en">For motion $s=f(t)$, the average velocity is the change in position over the elapsed time:</span>
<span class="lang-vi">Với chuyển động $s=f(t)$, vận tốc trung bình là độ dời chia cho thời gian:</span>

$$
\bar v=\frac{f(a+h)-f(a)}{h}.
$$
</div>

<div class="defn mt-3">
<div class="tag"><span class="lang-en">Instantaneous velocity</span><span class="lang-vi">Vận tốc tức thời</span></div>
<span class="lang-en">Let the interval shrink, $h\to 0$:</span>
<span class="lang-vi">Cho khoảng thời gian co lại, $h\to 0$:</span>

$$
v(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}.
$$
</div>

<div class="refs">
<span class="lang-en">Same limit, two stories: slope of a tangent, and instantaneous speed. That shared limit is the derivative.</span>
<span class="lang-vi">Cùng một giới hạn, hai câu chuyện: hệ số góc tiếp tuyến và tốc độ tức thời. Giới hạn chung đó là đạo hàm.</span>
</div>

---

# <span class="lang-en">The Derivative At A Number</span><span class="lang-vi">Đạo hàm tại một điểm</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">The <strong>derivative of $f$ at $a$</strong>, written $f'(a)$, is</span>
<span class="lang-vi"><strong>Đạo hàm của $f$ tại $a$</strong>, ký hiệu $f'(a)$, là</span>

$$
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a},
$$

<span class="lang-en">when the limit exists.</span>
<span class="lang-vi">khi giới hạn tồn tại.</span>
</div>

<div class="grid-2 mt-3">
<div class="box blue"><div class="label"><span class="lang-en">Notation</span><span class="lang-vi">Ký hiệu</span></div>

$$
f'(a)=y'(a)=\left.\frac{dy}{dx}\right|_{x=a}=\frac{d}{dx}f(a).
$$
</div>
<div class="box gold"><div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div><span class="lang-en">$f(x)=x^2-8x+9$: $\ f'(a)=\lim_{h\to0}\frac{2ah+h^2-8h}{h}=2a-8.$</span><span class="lang-vi">$f(x)=x^2-8x+9$: $\ f'(a)=\lim_{h\to0}\frac{2ah+h^2-8h}{h}=2a-8.$</span></div>
</div>

---

# <span class="lang-en">Differentiability And Continuity</span><span class="lang-vi">Khả vi và liên tục</span>

<div class="grid-2 align-center">
<div>
<div class="defn">
<div class="tag"><span class="lang-en">One-sided derivatives</span><span class="lang-vi">Đạo hàm một phía</span></div>
<span class="lang-en">$f'_-(a)=\lim_{x\to a^-}\frac{f(x)-f(a)}{x-a}$ and $f'_+(a)$ similarly. $f$ is <strong>differentiable at $a$</strong> iff both exist and $f'_-(a)=f'_+(a)$.</span>
<span class="lang-vi">$f'_-(a)=\lim_{x\to a^-}\frac{f(x)-f(a)}{x-a}$ và $f'_+(a)$ tương tự. $f$ <strong>khả vi tại $a$</strong> khi và chỉ khi cả hai tồn tại và $f'_-(a)=f'_+(a)$.</span>
</div>
<div class="thm mt-3">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">Differentiable at $a$ $\Rightarrow$ continuous at $a$. The converse is false.</span>
<span class="lang-vi">Khả vi tại $a$ $\Rightarrow$ liên tục tại $a$. Chiều ngược lại sai.</span>
</div>
</div>
<div class="seq-figure">
<FnViz kind="corner" />
<div class="cap"><span class="lang-en">$|x|$: continuous at $0$, but a corner - not differentiable</span><span class="lang-vi">$|x|$: liên tục tại $0$, nhưng có góc nhọn - không khả vi</span></div>
</div>
</div>

<div class="caution mt-2">
<span class="lang-en">$f(x)=|x|$: $f'_+(0)=1$, $f'_-(0)=-1$, so $f'(0)$ does not exist even though $f$ is continuous there.</span>
<span class="lang-vi">$f(x)=|x|$: $f'_+(0)=1$, $f'_-(0)=-1$, nên $f'(0)$ không tồn tại dù $f$ liên tục tại đó.</span>
</div>

---

# <span class="lang-en">Derivatives Of Elementary Functions</span><span class="lang-vi">Đạo hàm các hàm sơ cấp</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Power, exp, log</span><span class="lang-vi">Lũy thừa, mũ, log</span></div>

$$
(x^\alpha)'=\alpha x^{\alpha-1},\quad (a^x)'=a^x\ln a,\quad (e^x)'=e^x
$$

$$
(\log_a|x|)'=\frac{1}{x\ln a},\quad (\ln|x|)'=\frac1x
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Trigonometric</span><span class="lang-vi">Lượng giác</span></div>

$$
(\sin x)'=\cos x,\quad (\cos x)'=-\sin x
$$

$$
(\tan x)'=\frac{1}{\cos^2 x},\quad (\cot x)'=-\frac{1}{\sin^2 x}
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box gold">
<div class="label"><span class="lang-en">Inverse trigonometric</span><span class="lang-vi">Lượng giác ngược</span></div>

$$
(\arcsin x)'=\frac{1}{\sqrt{1-x^2}},\quad (\arctan x)'=\frac{1}{1+x^2}
$$
</div>
<div class="box">
<div class="label"><span class="lang-en">Hyperbolic</span><span class="lang-vi">Hyperbolic</span></div>

$$
(\sinh x)'=\cosh x,\quad (\cosh x)'=\sinh x,\quad (\tanh x)'=\frac{1}{\cosh^2 x}
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Full table (with $\operatorname{arccos}$, $\operatorname{arccot}$, $\coth$) in the <a href="../../sessions/03-continuity-derivatives/">Session 03 notes</a>.</span>
<span class="lang-vi">Bảng đầy đủ (gồm $\operatorname{arccos}$, $\operatorname{arccot}$, $\coth$) trong <a href="../../sessions/03-continuity-derivatives/">ghi chú Buổi 03</a>.</span>
</div>

---

# <span class="lang-en">Differentiation Rules And The Chain Rule</span><span class="lang-vi">Quy tắc đạo hàm và quy tắc hàm hợp</span>

<div class="thm">
<div class="tag"><span class="lang-en">Algebra of derivatives</span><span class="lang-vi">Đại số của đạo hàm</span></div>

$$
(cu)'=cu',\quad (u\pm v)'=u'\pm v',\quad (uv)'=u'v+uv',\quad \Big(\frac{u}{v}\Big)'=\frac{u'v-uv'}{v^2}.
$$

</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Chain rule</span><span class="lang-vi">Quy tắc hàm hợp</span></div>
<span class="lang-en">If $u$ is differentiable at $x$ and $f$ at $u(x)$, then $y=f(u(x))$ is differentiable and</span>
<span class="lang-vi">Nếu $u$ khả vi tại $x$ và $f$ khả vi tại $u(x)$, thì $y=f(u(x))$ khả vi và</span>

$$
y'(x)=f'(u(x))\cdot u'(x).
$$
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">$y=\sin^5(4x+3)\Rightarrow y'=5\sin^4(4x+3)\cdot\cos(4x+3)\cdot 4=20\sin^4(4x+3)\cos(4x+3).$</span>
<span class="lang-vi">$y=\sin^5(4x+3)\Rightarrow y'=5\sin^4(4x+3)\cdot\cos(4x+3)\cdot 4=20\sin^4(4x+3)\cos(4x+3).$</span>
</div>

---

# <span class="lang-en">Higher-Order Derivatives</span><span class="lang-vi">Đạo hàm cấp cao</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Second and $n$th derivative</span><span class="lang-vi">Đạo hàm cấp hai và cấp $n$</span></div>
<span class="lang-en">$f''=(f')'$, and in general $f^{(n)}=\big(f^{(n-1)}\big)'$. Linearity holds:</span>
<span class="lang-vi">$f''=(f')'$, và tổng quát $f^{(n)}=\big(f^{(n-1)}\big)'$. Tính tuyến tính đúng:</span>

$$
(c_1f+c_2g)^{(n)}=c_1f^{(n)}+c_2g^{(n)}.
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Meaning</span><span class="lang-vi">Ý nghĩa</span></div>
<span class="lang-en">If $s(t)$ is position, $s'(t)=v(t)$ is velocity and $s''(t)=a(t)$ is acceleration.</span>
<span class="lang-vi">Nếu $s(t)$ là vị trí, $s'(t)=v(t)$ là vận tốc và $s''(t)=a(t)$ là gia tốc.</span>
</div>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Leibniz's formula</span><span class="lang-vi">Công thức Leibniz</span></div>

$$
(f\cdot g)^{(n)}=\sum_{k=0}^{n}\binom{n}{k}f^{(n-k)}g^{(k)}.
$$
</div>

<div class="refs">
<span class="lang-en">Standard $n$th derivatives: $(e^x)^{(n)}=e^x$, $(\sin ax)^{(n)}=a^n\sin\!\big(ax+\tfrac{n\pi}{2}\big)$, $(\ln|x|)^{(n)}=\tfrac{(-1)^{n-1}(n-1)!}{x^n}$.</span>
<span class="lang-vi">Đạo hàm cấp $n$ chuẩn: $(e^x)^{(n)}=e^x$, $(\sin ax)^{(n)}=a^n\sin\!\big(ax+\tfrac{n\pi}{2}\big)$, $(\ln|x|)^{(n)}=\tfrac{(-1)^{n-1}(n-1)!}{x^n}$.</span>
</div>

---

# <span class="lang-en">Linear Approximation</span><span class="lang-vi">Xấp xỉ tuyến tính</span>

<div class="grid-2 align-center">
<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">Near $a$, the curve is close to its tangent line. The <strong>linearization</strong> of $f$ at $a$ is</span>
<span class="lang-vi">Gần $a$, đường cong sát với tiếp tuyến của nó. <strong>Tuyến tính hóa</strong> của $f$ tại $a$ là</span>

$$
L(x)=f(a)+f'(a)(x-a),\quad f(x)\approx L(x).
$$
</div>
<div class="seq-figure">
<FnViz kind="lin" />
<div class="cap"><span class="lang-en">$\sqrt{x+3}$ and its tangent at $a=1$</span><span class="lang-vi">$\sqrt{x+3}$ và tiếp tuyến tại $a=1$</span></div>
</div>
</div>

<div class="box gold mt-2">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">$f(x)=\sqrt{x+3}$ at $a=1$: $L(x)=2+\tfrac14(x-1)$, so $\sqrt{3.98}\approx 1.995$ and $\sqrt{4.05}\approx 2.0125$.</span>
<span class="lang-vi">$f(x)=\sqrt{x+3}$ tại $a=1$: $L(x)=2+\tfrac14(x-1)$, nên $\sqrt{3.98}\approx 1.995$ và $\sqrt{4.05}\approx 2.0125$.</span>
</div>

---

# <span class="lang-en">Differentials</span><span class="lang-vi">Vi phân</span>

<div class="defn">
<div class="tag"><span class="lang-en">First-order differential</span><span class="lang-vi">Vi phân cấp một</span></div>
<span class="lang-en">For $y=f(x)$, the differential is defined in terms of $dx$ by</span>
<span class="lang-vi">Với $y=f(x)$, vi phân được định nghĩa theo $dx$ bởi</span>

$$
dy=df(a)=f'(a)\,dx.
$$
</div>

<div class="grid-2 mt-3">
<div class="box blue"><div class="label"><span class="lang-en">$dy$ vs $\Delta y$</span><span class="lang-vi">$dy$ so với $\Delta y$</span></div><span class="lang-en">$dy$ is the rise of the <strong>tangent</strong>; $\Delta y=f(x+\Delta x)-f(x)$ is the rise of the <strong>curve</strong>. $\Delta y\approx dy$, and better as $\Delta x\to0$.</span><span class="lang-vi">$dy$ là độ tăng của <strong>tiếp tuyến</strong>; $\Delta y=f(x+\Delta x)-f(x)$ là độ tăng của <strong>đường cong</strong>. $\Delta y\approx dy$, càng tốt khi $\Delta x\to0$.</span></div>
<div class="box gold"><div class="label"><span class="lang-en">Higher-order</span><span class="lang-vi">Cấp cao</span></div>

$$
d^2f(a)=f''(a)\,dx^2,\quad d^nf(a)=f^{(n)}(a)\,dx^n.
$$
</div>
</div>

<div class="refs">
<span class="lang-en">Example: $f(x)=e^x/x^2\Rightarrow f'(1)=-e$, so $df(1)=-e\,dx$. Read: <a href="https://activecalculus.org/single/sec-1-8-tan-line-approx.html">Active Calculus 1.8</a>.</span>
<span class="lang-vi">Ví dụ: $f(x)=e^x/x^2\Rightarrow f'(1)=-e$, nên $df(1)=-e\,dx$. Đọc: <a href="https://activecalculus.org/single/sec-1-8-tan-line-approx.html">Active Calculus 1.8</a>.</span>
</div>

---

# <span class="lang-en">After The Break: Derivatives Practice</span><span class="lang-vi">Sau giờ giải lao: Luyện tập Đạo hàm</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Same routine, second half</span><span class="lang-vi">Cùng cách làm, nửa sau</span></div>
<span class="lang-en">Continuity practice is behind us. Now work the four derivative sets in pairs. As before, each set points to its <strong>Active Calculus</strong> section, and full worked answers are in the Session 03 notes.</span>
<span class="lang-vi">Phần luyện liên tục đã xong. Bây giờ giải bốn nhóm bài đạo hàm theo cặp. Như trước, mỗi nhóm chỉ tới mục <strong>Active Calculus</strong> tương ứng, và lời giải đầy đủ có trong ghi chú Buổi 03.</span>
</div>

<div class="grid-4 mt-4">
<div class="kpi"><span class="pill">1</span><strong><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></strong><br><span class="lang-en">the limit</span><span class="lang-vi">giới hạn</span></div>
<div class="kpi"><span class="pill">2</span><strong><span class="lang-en">Rules &amp; chain</span><span class="lang-vi">Quy tắc &amp; hàm hợp</span></strong><br><span class="lang-en">differentiate</span><span class="lang-vi">tính đạo hàm</span></div>
<div class="kpi"><span class="pill">3</span><strong><span class="lang-en">Higher-order</span><span class="lang-vi">Cấp cao</span></strong><br><span class="lang-en">Leibniz</span><span class="lang-vi">Leibniz</span></div>
<div class="kpi"><span class="pill">4</span><strong><span class="lang-en">Differentials</span><span class="lang-vi">Vi phân</span></strong><br><span class="lang-en">approximate</span><span class="lang-vi">xấp xỉ</span></div>
</div>

---

# <span class="lang-en">Your Turn: Derivative From The Definition</span><span class="lang-vi">Đến lượt bạn: Đạo hàm theo định nghĩa</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~7 min, in pairs</span><span class="lang-vi">~7 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Use the limit, not the rules</span><span class="lang-vi">Dùng giới hạn, chưa dùng quy tắc</span></div>
<ol>
<li><span class="lang-en">$f(x)=x^2-8x+9$: compute $f'(a)$ from the definition.</span><span class="lang-vi">$f(x)=x^2-8x+9$: tính $f'(a)$ từ định nghĩa.</span></li>
<li><span class="lang-en">$f(x)=\sqrt{x}$: show $f'(a)=\dfrac{1}{2\sqrt a}$ for $a\gt 0$ (use a conjugate).</span><span class="lang-vi">$f(x)=\sqrt{x}$: chứng minh $f'(a)=\dfrac{1}{2\sqrt a}$ với $a\gt 0$ (nhân liên hợp).</span></li>
<li><span class="lang-en">Is $f(x)=|x-3|$ differentiable at $x=3$? Use one-sided derivatives.</span><span class="lang-vi">$f(x)=|x-3|$ có khả vi tại $x=3$ không? Dùng đạo hàm một phía.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-1-3-derivative-pt.html">Active Calculus 1.3</a>, <a href="https://activecalculus.org/single/sec-1-4-derivative-fxn.html">1.4</a>. Answers: $2a-8$; $\tfrac{1}{2\sqrt a}$; no (corner).</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-1-3-derivative-pt.html">Active Calculus 1.3</a>, <a href="https://activecalculus.org/single/sec-1-4-derivative-fxn.html">1.4</a>. Đáp án: $2a-8$; $\tfrac{1}{2\sqrt a}$; không (góc nhọn).</span>
</div>

---

# <span class="lang-en">Your Turn: Rules And The Chain Rule</span><span class="lang-vi">Đến lượt bạn: Quy tắc và hàm hợp</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~8 min, in pairs</span><span class="lang-vi">~8 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Differentiate</span><span class="lang-vi">Tính đạo hàm</span></div>
<ol class="cols-2">
<li>$y=(3x^2+1)e^{x}$</li>
<li>$\displaystyle y=\frac{x-1}{x^2+1}$</li>
<li>$y=\cos(\sqrt{x^2+1})$</li>
<li>$y=\ln(\tan x)$</li>
<li>$y=\arctan(3x)$</li>
<li>$y=\sin^5(4x+3)$</li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-2-1-elem-rules.html">AC 2.1</a>, <a href="https://activecalculus.org/single/sec-2-3-prod-quot.html">2.3</a>, <a href="https://activecalculus.org/single/sec-2-5-chain.html">2.5</a>. Answers in the notes.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-2-1-elem-rules.html">AC 2.1</a>, <a href="https://activecalculus.org/single/sec-2-3-prod-quot.html">2.3</a>, <a href="https://activecalculus.org/single/sec-2-5-chain.html">2.5</a>. Đáp án trong ghi chú.</span>
</div>

---

# <span class="lang-en">Your Turn: Higher-Order Derivatives</span><span class="lang-vi">Đến lượt bạn: Đạo hàm cấp cao</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~7 min, in pairs</span><span class="lang-vi">~7 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Second, $n$th, and Leibniz</span><span class="lang-vi">Cấp hai, cấp $n$, và Leibniz</span></div>
<ol>
<li><span class="lang-en">$f(x)=\dfrac{2x+3}{x-2}$: find $f''(0)$.</span><span class="lang-vi">$f(x)=\dfrac{2x+3}{x-2}$: tìm $f''(0)$.</span></li>
<li><span class="lang-en">Find the $n$th derivative of $f(x)=\dfrac{1}{x^2-4}$ (partial fractions).</span><span class="lang-vi">Tìm đạo hàm cấp $n$ của $f(x)=\dfrac{1}{x^2-4}$ (phân tích thành phân thức).</span></li>
<li><span class="lang-en">Use Leibniz to find $(x^2 e^x)^{(n)}$.</span><span class="lang-vi">Dùng Leibniz để tìm $(x^2 e^x)^{(n)}$.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">On-slide set (beyond Active Calculus 1.6). Answers: $-\tfrac74$; $\tfrac{(-1)^n n!}{4}\big[(x-2)^{-n-1}-(x+2)^{-n-1}\big]$; $e^x\big(x^2+2nx+n(n-1)\big)$.</span>
<span class="lang-vi">Bài trên slide (vượt Active Calculus 1.6). Đáp án: $-\tfrac74$; $\tfrac{(-1)^n n!}{4}\big[(x-2)^{-n-1}-(x+2)^{-n-1}\big]$; $e^x\big(x^2+2nx+n(n-1)\big)$.</span>
</div>

---

# <span class="lang-en">Your Turn: Approximation And Differentials</span><span class="lang-vi">Đến lượt bạn: Xấp xỉ và vi phân</span>

<div class="your-turn">
<span class="timechip"><span class="lang-en">~7 min, in pairs</span><span class="lang-vi">~7 phút, theo cặp</span></span>
<div class="label"><span class="lang-en">Linearize and compare $dy$ with $\Delta y$</span><span class="lang-vi">Tuyến tính hóa và so sánh $dy$ với $\Delta y$</span></div>
<ol>
<li><span class="lang-en">Use a linearization to estimate $\sqrt[3]{8.1}$.</span><span class="lang-vi">Dùng tuyến tính hóa để ước lượng $\sqrt[3]{8.1}$.</span></li>
<li><span class="lang-en">For $y=x^3+x^2-2x+1$, compare $\Delta y$ and $dy$ as $x:2\to 2.01$.</span><span class="lang-vi">Với $y=x^3+x^2-2x+1$, so sánh $\Delta y$ và $dy$ khi $x:2\to 2.01$.</span></li>
<li><span class="lang-en">If $f(x)=\sqrt{x^2-4x+3}$, find $d^2f(0)$.</span><span class="lang-vi">Nếu $f(x)=\sqrt{x^2-4x+3}$, tìm $d^2f(0)$.</span></li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-1-8-tan-line-approx.html">Active Calculus 1.8</a>. Answers: $\approx 2.00833$; $\Delta y=0.140701$, $dy=0.14$; $-\tfrac{1}{3\sqrt3}\,dx^2$.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-1-8-tan-line-approx.html">Active Calculus 1.8</a>. Đáp án: $\approx 2.00833$; $\Delta y=0.140701$, $dy=0.14$; $-\tfrac{1}{3\sqrt3}\,dx^2$.</span>
</div>

---

# <span class="lang-en">Wrap-Up And What's Next</span><span class="lang-vi">Tổng kết và phần tiếp theo</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Today in one line</span><span class="lang-vi">Hôm nay trong một dòng</span></div>
<span class="lang-en">Continuity is "$\lim=f(a)$"; the derivative is the limit of a slope; differentials package $f'$ for approximation.</span>
<span class="lang-vi">Liên tục là "$\lim=f(a)$"; đạo hàm là giới hạn của một độ dốc; vi phân đóng gói $f'$ để xấp xỉ.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Next session</span><span class="lang-vi">Buổi sau</span></div>
<span class="lang-en">Taylor expansion and curve sketching: derivatives build polynomial approximations and reveal a graph's shape.</span>
<span class="lang-vi">Khai triển Taylor và khảo sát hàm số: đạo hàm dựng các xấp xỉ đa thức và cho biết hình dạng đồ thị.</span>
</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Read</span><span class="lang-vi">Đọc</span></div>
<span class="lang-en"><a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7-1.8</a>, <a href="https://activecalculus.org/single/sec-2-1-elem-rules.html">2.1-2.5</a>; full notes and solutions in the <a href="../../sessions/03-continuity-derivatives/">Session 03 short notes</a>.</span>
<span class="lang-vi"><a href="https://activecalculus.org/single/sec-1-7-lim-cont-diff.html">Active Calculus 1.7-1.8</a>, <a href="https://activecalculus.org/single/sec-2-1-elem-rules.html">2.1-2.5</a>; ghi chú và lời giải đầy đủ trong <a href="../../sessions/03-continuity-derivatives/">ghi chú ngắn Buổi 03</a>.</span>
</div>

<div class="refs">
<span class="lang-en">Thank you!</span>
<span class="lang-vi">Cảm ơn các bạn!</span>
</div>
