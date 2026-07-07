---
theme: default
title: "Calculus 1 - Improper Integrals"
info: "MT1003 Calculus 1, Lecture 07"
transition: slide-left
download: "../../pdfs/improper-integrals.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Improper Integrals</span><span class="lang-vi">Tích phân suy rộng</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 07</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 07</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---

# <span class="lang-en">From Finite To Infinite</span><span class="lang-vi">Từ hữu hạn đến vô hạn</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">One definition, pushed to its limits</span><span class="lang-vi">Một định nghĩa, đẩy tới giới hạn</span></div>
<span class="lang-en">In defining the definite integral $\int_a^b f(x)\,dx$ we worked with a function $f$ defined on a finite interval $[a,b]$, and we assumed $f$ has no infinite discontinuity. In this lecture we extend the definite integral to the case where the interval is infinite and to the case where $f$ has an infinite discontinuity on $[a,b]$. In either case the integral is called an <strong>improper integral</strong>.</span>
<span class="lang-vi">Khi định nghĩa tích phân xác định $\int_a^b f(x)\,dx$, ta làm việc với hàm $f$ xác định trên đoạn hữu hạn $[a,b]$ và giả thiết $f$ không có gián đoạn vô cực. Trong bài này ta mở rộng tích phân xác định cho trường hợp khoảng lấy tích phân vô hạn và trường hợp $f$ có gián đoạn vô cực trên $[a,b]$. Trong cả hai trường hợp, tích phân được gọi là <strong>tích phân suy rộng</strong>.</span>
</div>

<div class="grid-2 mt-4">
<div class="method-card">
<strong><span class="lang-en">Type 1: infinite intervals</span><span class="lang-vi">Loại 1: khoảng vô hạn</span></strong>

$$
\int_a^{+\infty} f(x)\,dx,\qquad \int_{-\infty}^b f(x)\,dx,\qquad \int_{-\infty}^{+\infty} f(x)\,dx
$$
</div>
<div class="method-card">
<strong><span class="lang-en">Type 2: unbounded integrands</span><span class="lang-vi">Loại 2: hàm dưới dấu tích phân không bị chặn</span></strong>
<span class="lang-en">$\int_a^b f(x)\,dx$ where $f$ has a vertical asymptote at $a$, at $b$, or between them.</span>
<span class="lang-vi">$\int_a^b f(x)\,dx$ trong đó $f$ có tiệm cận đứng tại $a$, tại $b$, hoặc ở giữa.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-15</span><span><span class="lang-en"><strong>Two types</strong> - what makes an integral improper; an infinite region with finite area</span><span class="lang-vi"><strong>Hai loại</strong> - khi nào tích phân là suy rộng; miền vô hạn có diện tích hữu hạn</span></span></div>
<div class="tl-row"><span class="clock">15-60</span><span><span class="lang-en"><strong>Type 1</strong> - definition, Newton-Leibniz formula, worked evaluations, the $p$-integral</span><span class="lang-vi"><strong>Loại 1</strong> - định nghĩa, công thức Newton-Leibniz, ví dụ tính toán, tích phân $p$</span></span></div>
<div class="tl-row"><span class="clock">60-90</span><span><span class="lang-en"><strong>Convergence tests</strong> - comparison, limit comparison, growth scales</span><span class="lang-vi"><strong>Tiêu chuẩn hội tụ</strong> - so sánh, so sánh qua giới hạn, thang bậc tăng trưởng</span></span></div>
<div class="tl-row break"><span class="clock">90-100</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row"><span class="clock">100-140</span><span><span class="lang-en"><strong>Type 2</strong> - definition, hidden asymptotes, worked evaluations, the reference integral</span><span class="lang-vi"><strong>Loại 2</strong> - định nghĩa, tiệm cận ẩn, ví dụ tính toán, tích phân mẫu</span></span></div>
<div class="tl-row"><span class="clock">140-160</span><span><span class="lang-en"><strong>Tests for Type 2</strong> - equivalent functions and limit comparison</span><span class="lang-vi"><strong>Tiêu chuẩn cho loại 2</strong> - hàm tương đương và so sánh qua giới hạn</span></span></div>
<div class="tl-row disc"><span class="clock">160-170</span><span><span class="lang-en"><strong>Exercise lab</strong> - mixed practice and the decision chart</span><span class="lang-vi"><strong>Luyện tập</strong> - bài tập tổng hợp và bảng quyết định</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Session 10 reading map: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Bản đồ đọc Buổi 10: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">An Infinite Region With Finite Area</span><span class="lang-vi">Miền vô hạn có diện tích hữu hạn</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">A strange question</span><span class="lang-vi">Một câu hỏi lạ</span></div>
<span class="lang-en">Let $S$ be the region that lies under the curve $y=1/x^2$, above the $x$-axis, and to the right of the line $x=1$. The region stretches infinitely far. Can it still have a finite area?</span>
<span class="lang-vi">Gọi $S$ là miền nằm dưới đường cong $y=1/x^2$, trên trục $x$, và bên phải đường thẳng $x=1$. Miền này trải dài vô hạn. Liệu nó vẫn có thể có diện tích hữu hạn?</span>
</div>
<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Measure up to $x=t$, then let $t\to\infty$</span><span class="lang-vi">Đo đến $x=t$, rồi cho $t\to\infty$</span></div>
<span class="lang-en">The part of $S$ to the left of the line $x=t$ (with $t>1$) has area</span>
<span class="lang-vi">Phần của $S$ nằm bên trái đường thẳng $x=t$ (với $t>1$) có diện tích</span>

$$
A(t)=\int_1^t \frac{dx}{x^2}=\left[-\frac{1}{x}\right]_1^t=1-\frac{1}{t}.
$$

<span class="lang-en">As $t\to\infty$, $A(t)\to 1$. So we say the infinite region $S$ has area $1$, and we write</span>
<span class="lang-vi">Khi $t\to\infty$, $A(t)\to 1$. Vì vậy ta nói miền vô hạn $S$ có diện tích bằng $1$, và ta viết</span>

$$
\int_1^{+\infty}\frac{dx}{x^2}=\lim_{t\to\infty}\int_1^t\frac{dx}{x^2}=1.
$$
</div>
</div>

<div class="refs">
<span class="lang-en">This is the opening example of Stewart 7.8; see also <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>.</span>
<span class="lang-vi">Đây là ví dụ mở đầu của Stewart 7.8; xem thêm <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Type 1: Definition</span><span class="lang-vi">Loại 1: định nghĩa</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - improper integral of Type 1</span><span class="lang-vi">Định nghĩa - tích phân suy rộng loại 1</span></div>
<span class="lang-en">If $\int_a^t f(x)\,dx$ exists for every number $t\ge a$, then</span>
<span class="lang-vi">Nếu $\int_a^t f(x)\,dx$ tồn tại với mọi số $t\ge a$ thì</span>

$$
\int_a^{+\infty} f(x)\,dx=\lim_{t\to\infty}\int_a^t f(x)\,dx,
$$

<span class="lang-en">provided this limit exists (as a finite number). Similarly, if $\int_t^b f(x)\,dx$ exists for every number $t\le b$, then</span>
<span class="lang-vi">miễn là giới hạn này tồn tại (là một số hữu hạn). Tương tự, nếu $\int_t^b f(x)\,dx$ tồn tại với mọi số $t\le b$ thì</span>

$$
\int_{-\infty}^{b} f(x)\,dx=\lim_{t\to-\infty}\int_t^b f(x)\,dx.
$$
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Convergent and divergent</span><span class="lang-vi">Hội tụ và phân kỳ</span></div>
<span class="lang-en">The improper integral is called <strong>convergent</strong> if the corresponding limit exists as a finite number, and <strong>divergent</strong> if the limit does not exist or is infinite.</span>
<span class="lang-vi">Tích phân suy rộng được gọi là <strong>hội tụ</strong> nếu giới hạn tương ứng tồn tại và là một số hữu hạn, và <strong>phân kỳ</strong> nếu giới hạn không tồn tại hoặc bằng vô cực.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Both Endpoints Infinite</span><span class="lang-vi">Cả hai cận vô hạn</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - the doubly infinite integral</span><span class="lang-vi">Định nghĩa - tích phân với hai cận vô hạn</span></div>
<span class="lang-en">If both $\int_c^{+\infty} f(x)\,dx$ and $\int_{-\infty}^{c} f(x)\,dx$ are convergent, then we define</span>
<span class="lang-vi">Nếu cả $\int_c^{+\infty} f(x)\,dx$ và $\int_{-\infty}^{c} f(x)\,dx$ đều hội tụ thì ta định nghĩa</span>

$$
\int_{-\infty}^{+\infty} f(x)\,dx=\int_{-\infty}^{c} f(x)\,dx+\int_c^{+\infty} f(x)\,dx,
$$

<span class="lang-en">where $c$ is any real number (the value does not depend on the choice of $c$).</span>
<span class="lang-vi">trong đó $c$ là một số thực bất kỳ (giá trị không phụ thuộc vào cách chọn $c$).</span>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Both halves must converge on their own</span><span class="lang-vi">Mỗi nửa phải tự hội tụ</span></div>
<span class="lang-en">It is not enough that the two halves cancel each other for symmetric cutoffs. If either half diverges, the whole integral diverges - even for an odd function like $\frac{x}{1+x^2}$.</span>
<span class="lang-vi">Hai nửa triệt tiêu nhau theo cận đối xứng là chưa đủ. Nếu một nửa phân kỳ thì cả tích phân phân kỳ - kể cả với hàm lẻ như $\frac{x}{1+x^2}$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Geometric Meaning</span><span class="lang-vi">Ý nghĩa hình học</span>

<div class="grid-2 align-center">
<div class="thm">
<div class="tag"><span class="lang-en">Area of an unbounded region</span><span class="lang-vi">Diện tích của miền không bị chặn</span></div>
<span class="lang-en">If $f(x)\ge 0$ for all $x\ge a$ and $\int_a^{+\infty} f(x)\,dx$ is convergent, then the improper integral is the area of the region</span>
<span class="lang-vi">Nếu $f(x)\ge 0$ với mọi $x\ge a$ và $\int_a^{+\infty} f(x)\,dx$ hội tụ thì tích phân suy rộng là diện tích của miền</span>

$$
S=\{(x, y)\ :\ x \ge a,\ 0 \le y \le f(x) \}.
$$
</div>
<img src="./images/1.JPG" class="graph-img small" alt="Area under a curve on an infinite interval">
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">A quick divergence check</span><span class="lang-vi">Kiểm tra phân kỳ nhanh</span></div>
<span class="lang-en">If $f(x)\to A\neq 0$ as $x\to\infty$, the accumulated areas $\int_a^t f(x)\,dx$ grow without bound, so $\int_a^{+\infty} f(x)\,dx$ diverges. To converge, the integrand must tend to $0$ - but tending to $0$ is not enough, as $\frac{1}{x}$ will show.</span>
<span class="lang-vi">Nếu $f(x)\to A\neq 0$ khi $x\to\infty$ thì diện tích tích lũy $\int_a^t f(x)\,dx$ tăng vô hạn, nên $\int_a^{+\infty} f(x)\,dx$ phân kỳ. Muốn hội tụ, hàm dưới dấu tích phân phải dần về $0$ - nhưng dần về $0$ vẫn chưa đủ, như $\frac{1}{x}$ sẽ cho thấy.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Newton-Leibniz For Improper Integrals</span><span class="lang-vi">Newton-Leibniz cho tích phân suy rộng</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem - Newton-Leibniz formula on $[a,+\infty)$</span><span class="lang-vi">Định lý - công thức Newton-Leibniz trên $[a,+\infty)$</span></div>
<span class="lang-en">Suppose $f$ has an antiderivative $F$ on $[a,+\infty)$ and is integrable on every interval $[a,t]$. Write $F(+\infty)=\lim_{t\to\infty}F(t)$. Then $\int_a^{+\infty} f(x)\,dx$ converges if and only if $F(+\infty)$ exists as a finite number, and in that case</span>
<span class="lang-vi">Giả sử $f$ có nguyên hàm $F$ trên $[a,+\infty)$ và khả tích trên mọi đoạn $[a,t]$. Ký hiệu $F(+\infty)=\lim_{t\to\infty}F(t)$. Khi đó $\int_a^{+\infty} f(x)\,dx$ hội tụ khi và chỉ khi $F(+\infty)$ tồn tại hữu hạn, và khi đó</span>

$$
\int_a^{+\infty} f(x)\,dx=F(+\infty)-F(a)=F(x)\Big|_a^{+\infty}.
$$
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">The other forms</span><span class="lang-vi">Các dạng còn lại</span></div>
<span class="lang-en">With $F(-\infty)=\lim_{t\to-\infty}F(t)$: $\ \int_{-\infty}^b f(x)\,dx=F(b)-F(-\infty)$ and $\int_{-\infty}^{+\infty} f(x)\,dx=F(+\infty)-F(-\infty)$, where each one-sided limit must be finite on its own.</span>
<span class="lang-vi">Với $F(-\infty)=\lim_{t\to-\infty}F(t)$: $\ \int_{-\infty}^b f(x)\,dx=F(b)-F(-\infty)$ và $\int_{-\infty}^{+\infty} f(x)\,dx=F(+\infty)-F(-\infty)$, trong đó mỗi giới hạn một phía phải tự tồn tại hữu hạn.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: An Oscillating Integrand</span><span class="lang-vi">Ví dụ: hàm dao động</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_0^{+\infty} \cos x \,dx$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_0^{+\infty} \cos x \,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">An antiderivative of $\cos x$ is $\sin x$, so</span>
<span class="lang-vi">Một nguyên hàm của $\cos x$ là $\sin x$, nên</span>

$$
I=\sin x \Big|_0^{+\infty}=\lim_{t \to \infty} \sin t-\sin 0=\lim_{t \to \infty} \sin t.
$$

<span class="lang-en">As $t\to\infty$ the values of $\sin t$ oscillate between $-1$ and $1$ forever, so $\lim_{t \to \infty} \sin t$ does not exist. The improper integral $I$ is <strong>divergent</strong>.</span>
<span class="lang-vi">Khi $t\to\infty$, giá trị của $\sin t$ dao động mãi giữa $-1$ và $1$, nên $\lim_{t \to \infty} \sin t$ không tồn tại. Tích phân suy rộng $I$ <strong>phân kỳ</strong>.</span>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Divergent does not always mean infinite</span><span class="lang-vi">Phân kỳ không phải lúc nào cũng là vô cực</span></div>
<span class="lang-en">Here the integral diverges because the limit fails to exist, not because it is infinite.</span>
<span class="lang-vi">Ở đây tích phân phân kỳ vì giới hạn không tồn tại, chứ không phải vì nó bằng vô cực.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Two Convergent Integrals</span><span class="lang-vi">Ví dụ: hai tích phân hội tụ</span>

<div class="grid-2">
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Over $(-\infty,-1]$</span><span class="lang-vi">Trên $(-\infty,-1]$</span></div>
<span class="lang-en">Evaluate $\displaystyle\int_{-\infty}^{-1} \frac{dx}{x^2}$.</span>
<span class="lang-vi">Tính $\displaystyle\int_{-\infty}^{-1} \frac{dx}{x^2}$.</span>

$$
\int_{-\infty}^{-1} \frac{dx}{x^2}=-\frac{1}{x} \Big|_{-\infty}^{-1}=1+\lim_{t \to -\infty} \frac{1}{t}=1.
$$

<span class="lang-en">The limit is finite, so the integral <strong>converges</strong> to $1$.</span>
<span class="lang-vi">Giới hạn hữu hạn, nên tích phân <strong>hội tụ</strong> về $1$.</span>
</div>
<div class="box gold formula-stack">
<div class="label"><span class="lang-en">Over the whole line</span><span class="lang-vi">Trên toàn trục số</span></div>
<span class="lang-en">Evaluate $\displaystyle\int_{-\infty}^{+\infty} \frac{dx}{1+x^2}$.</span>
<span class="lang-vi">Tính $\displaystyle\int_{-\infty}^{+\infty} \frac{dx}{1+x^2}$.</span>

$$
\arctan x \Big|_{-\infty}^{+\infty}=\frac{\pi}{2}-\left(-\frac{\pi}{2}\right)=\pi.
$$

<span class="lang-en">Both one-sided limits of $\arctan x$ are finite, so the integral <strong>converges</strong> to $\pi$.</span>
<span class="lang-vi">Cả hai giới hạn một phía của $\arctan x$ đều hữu hạn, nên tích phân <strong>hội tụ</strong> về $\pi$.</span>
</div>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Reading the picture</span><span class="lang-vi">Đọc hình ảnh</span></div>
<span class="lang-en">Both integrands are positive, so each answer is the area of an unbounded region - and both regions happen to have finite area.</span>
<span class="lang-vi">Cả hai hàm dưới dấu tích phân đều dương, nên mỗi đáp số là diện tích của một miền không bị chặn - và cả hai miền đều có diện tích hữu hạn.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 (Example 3).</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8 (Ví dụ 3).</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: A Substitution Inside</span><span class="lang-vi">Ví dụ: đổi biến bên trong</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_0^{+\infty} xe^{-x^2}\,dx$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_0^{+\infty} xe^{-x^2}\,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution: recognize the derivative of $-x^2$</span><span class="lang-vi">Lời giải: nhận ra đạo hàm của $-x^2$</span></div>
<span class="lang-en">Since $d(-x^2)=-2x\,dx$, the factor $x\,dx$ is $-\frac{1}{2}\,d(-x^2)$:</span>
<span class="lang-vi">Vì $d(-x^2)=-2x\,dx$, thừa số $x\,dx$ chính là $-\frac{1}{2}\,d(-x^2)$:</span>

$$
I=-\frac{1}{2}\int_0^{+\infty} e^{-x^2}\,d(-x^2)=-\frac{1}{2}e^{-x^2} \Big|_0^{+\infty}
=\lim_{t \to \infty}\left(-\frac{1}{2}e^{-t^2}\right)+\frac{1}{2}=\frac{1}{2}.
$$

<span class="lang-en">The limit is finite, so the given integral is <strong>convergent</strong>, with value $\frac{1}{2}$.</span>
<span class="lang-vi">Giới hạn hữu hạn, nên tích phân đã cho <strong>hội tụ</strong>, với giá trị $\frac{1}{2}$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">The $p$-Integral At Infinity</span><span class="lang-vi">Tích phân $p$ tại vô cực</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question (Stewart 7.8, Example 4)</span><span class="lang-vi">Câu hỏi (Stewart 7.8, Ví dụ 4)</span></div>
<span class="lang-en">For what values of $p$ is the integral $\displaystyle\int_1^{+\infty} \frac{dx}{x^p}$ convergent?</span>
<span class="lang-vi">Với những giá trị nào của $p$ thì tích phân $\displaystyle\int_1^{+\infty} \frac{dx}{x^p}$ hội tụ?</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Case $p\neq1$</span><span class="lang-vi">Trường hợp $p\neq1$</span></div>

$$
\int_1^t x^{-p}\,dx=\frac{x^{-p+1}}{-p+1}\Bigg|_1^t=\frac{1}{1-p}\left(\frac{1}{t^{p-1}}-1\right).
$$

<span class="lang-en">If $p>1$, then $p-1>0$, so $\frac{1}{t^{p-1}}\to0$ as $t\to\infty$: the integral converges, with value $\frac{1}{p-1}$.</span>
<span class="lang-vi">Nếu $p>1$ thì $p-1>0$, nên $\frac{1}{t^{p-1}}\to0$ khi $t\to\infty$: tích phân hội tụ, với giá trị $\frac{1}{p-1}$.</span>

<span class="lang-en">If $p<1$, then $\frac{1}{t^{p-1}}=t^{1-p}\to\infty$: the integral diverges.</span>
<span class="lang-vi">Nếu $p<1$ thì $\frac{1}{t^{p-1}}=t^{1-p}\to\infty$: tích phân phân kỳ.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 7.8 (Example 4); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>.</span>
<span class="lang-vi">Đọc: Stewart 7.8 (Ví dụ 4); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">The $p$-Integral: Summary</span><span class="lang-vi">Tích phân $p$: tổng kết</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Case $p=1$</span><span class="lang-vi">Trường hợp $p=1$</span></div>

$$
\int_1^t \frac{dx}{x}=\ln t-\ln 1=\ln t\ \longrightarrow\ +\infty
\quad\text{as } t\to\infty,
$$

<span class="lang-en">so the integral diverges - even though $\frac{1}{x}\to0$. Tending to $0$ is not enough; the integrand must tend to $0$ fast enough.</span>
<span class="lang-vi">nên tích phân phân kỳ - dù $\frac{1}{x}\to0$. Dần về $0$ là chưa đủ; hàm dưới dấu tích phân phải dần về $0$ đủ nhanh.</span>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">The reference integral at infinity</span><span class="lang-vi">Tích phân mẫu tại vô cực</span></div>
<span class="lang-en">$\displaystyle\int_1^{+\infty} \frac{dx}{x^p}$ is <strong>convergent if $p>1$</strong> and <strong>divergent if $p\le1$</strong>.</span>
<span class="lang-vi">$\displaystyle\int_1^{+\infty} \frac{dx}{x^p}$ <strong>hội tụ nếu $p>1$</strong> và <strong>phân kỳ nếu $p\le1$</strong>.</span>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Why it matters</span><span class="lang-vi">Vì sao quan trọng</span></div>
<span class="lang-en">This family is the measuring stick: the comparison tests below decide convergence by comparing a complicated integrand with a power $\frac{1}{x^p}$.</span>
<span class="lang-vi">Họ tích phân này là thước đo: các tiêu chuẩn so sánh phía sau xét sự hội tụ bằng cách so hàm phức tạp với một lũy thừa $\frac{1}{x^p}$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 7.8 (Example 4); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>.</span>
<span class="lang-vi">Đọc: Stewart 7.8 (Ví dụ 4); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Worked Problem 1 - Set Up</span><span class="lang-vi">Bài giải mẫu 1 - thiết lập</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Evaluate the improper integral $I=\displaystyle\int_1^{+\infty} \frac{dx}{x \sqrt{x^2+x+1}}$.</span>
<span class="lang-vi">Tính tích phân suy rộng $I=\displaystyle\int_1^{+\infty} \frac{dx}{x \sqrt{x^2+x+1}}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">1. Substitute $t=1/x$</span><span class="lang-vi">1. Đổi biến $t=1/x$</span></div>
<span class="lang-en">Let $t=\frac{1}{x}$. Then $x=\frac{1}{t}$ and $dx=-\frac{dt}{t^2}$; as $x$ runs from $1$ to $+\infty$, $t$ runs from $1$ down to $0$. So</span>
<span class="lang-vi">Đặt $t=\frac{1}{x}$. Khi đó $x=\frac{1}{t}$ và $dx=-\frac{dt}{t^2}$; khi $x$ chạy từ $1$ đến $+\infty$, $t$ chạy từ $1$ về $0$. Vậy</span>

$$
I=\int_1^0 \frac{-\,dt/t^2}{\frac{1}{t}\sqrt{\frac{1}{t^2}+\frac{1}{t}+1}}
=\int_0^1 \frac{dt}{\sqrt{1+t+t^2}}.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Notice</span><span class="lang-vi">Nhận xét</span></div>
<span class="lang-en">The substitution turned an improper integral into an ordinary (proper) one: the new integrand is continuous on all of $[0,1]$.</span>
<span class="lang-vi">Phép đổi biến đã biến tích phân suy rộng thành tích phân thường: hàm mới liên tục trên cả đoạn $[0,1]$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Problem 1 - Compute</span><span class="lang-vi">Bài giải mẫu 1 - tính toán</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">2. Complete the square and integrate</span><span class="lang-vi">2. Đưa về bình phương đủ rồi tích phân</span></div>
<span class="lang-en">Write $t^2+t+1=\left(t+\frac{1}{2}\right)^2+\frac{3}{4}$ and use $\int \frac{du}{\sqrt{u^2+k}}=\ln\left|u+\sqrt{u^2+k}\right|+C$:</span>
<span class="lang-vi">Viết $t^2+t+1=\left(t+\frac{1}{2}\right)^2+\frac{3}{4}$ và dùng $\int \frac{du}{\sqrt{u^2+k}}=\ln\left|u+\sqrt{u^2+k}\right|+C$:</span>

$$
I=\int_0^1 \frac{d\left(t+\frac{1}{2}\right)}{\sqrt{\left(t+\frac{1}{2}\right)^2+\frac{3}{4}}}
=\ln\left|\,t+\frac{1}{2}+\sqrt{t^2+t+1}\,\right|\ \Bigg|_0^1
$$

$$
=\ln\left(\frac{3}{2}+\sqrt{3}\right)-\ln\frac{3}{2}
=\ln\left(1+\frac{2}{\sqrt{3}}\right).
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">3. Interpret and check</span><span class="lang-vi">3. Diễn giải và kiểm tra</span></div>
<span class="lang-en">The integral converges, with value $\ln\left(1+\frac{2}{\sqrt{3}}\right)\approx 0.77$. Check: for large $x$ the integrand behaves like $\frac{1}{x^2}$, whose integral over $[1,\infty)$ converges - consistent.</span>
<span class="lang-vi">Tích phân hội tụ, với giá trị $\ln\left(1+\frac{2}{\sqrt{3}}\right)\approx 0{,}77$. Kiểm tra: với $x$ lớn, hàm dưới dấu tích phân cỡ $\frac{1}{x^2}$, mà tích phân của nó trên $[1,\infty)$ hội tụ - nhất quán.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Worked Problem 2 - Set Up</span><span class="lang-vi">Bài giải mẫu 2 - thiết lập</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Evaluate the improper integral $I=\displaystyle\int_1^{+\infty} \frac{\arctan x}{x^2}\,dx$.</span>
<span class="lang-vi">Tính tích phân suy rộng $I=\displaystyle\int_1^{+\infty} \frac{\arctan x}{x^2}\,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">1. Integrate by parts</span><span class="lang-vi">1. Tích phân từng phần</span></div>
<span class="lang-en">Take $u=\arctan x$ and $dv=\frac{dx}{x^2}$, so that $du=\frac{dx}{1+x^2}$ and $v=-\frac{1}{x}$:</span>
<span class="lang-vi">Chọn $u=\arctan x$ và $dv=\frac{dx}{x^2}$, khi đó $du=\frac{dx}{1+x^2}$ và $v=-\frac{1}{x}$:</span>

$$
I=\left[-\frac{\arctan x}{x}\right]_1^{+\infty}+\int_1^{+\infty} \frac{dx}{x(1+x^2)}.
$$

<span class="lang-en">The bracket: as $x\to\infty$, $\arctan x\to\frac{\pi}{2}$ while $\frac{1}{x}\to0$, so the product tends to $0$; at $x=1$ it equals $-\frac{\pi}{4}$. The bracket contributes $0-\left(-\frac{\pi}{4}\right)=\frac{\pi}{4}$.</span>
<span class="lang-vi">Số hạng trong ngoặc: khi $x\to\infty$, $\arctan x\to\frac{\pi}{2}$ còn $\frac{1}{x}\to0$, nên tích dần về $0$; tại $x=1$ nó bằng $-\frac{\pi}{4}$. Ngoặc đóng góp $0-\left(-\frac{\pi}{4}\right)=\frac{\pi}{4}$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Problem 2 - Compute</span><span class="lang-vi">Bài giải mẫu 2 - tính toán</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">2. Split by partial fractions</span><span class="lang-vi">2. Tách phân thức</span></div>

$$
\frac{1}{x(1+x^2)}=\frac{1}{x}-\frac{x}{1+x^2},
$$

$$
\int_1^{+\infty}\left(\frac{1}{x}-\frac{x}{1+x^2}\right)dx
=\left[\ln\frac{x}{\sqrt{1+x^2}}\right]_1^{+\infty}
=\ln 1-\ln\frac{1}{\sqrt{2}}=\frac{\ln 2}{2}.
$$
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Combine before taking the limit</span><span class="lang-vi">Gộp lại trước khi lấy giới hạn</span></div>
<span class="lang-en">Neither $\ln x$ nor $\frac{1}{2}\ln(1+x^2)$ has a finite limit on its own. Combine them into one logarithm $\ln\frac{x}{\sqrt{1+x^2}}$ first, then let $x\to\infty$.</span>
<span class="lang-vi">Riêng $\ln x$ hay $\frac{1}{2}\ln(1+x^2)$ đều không có giới hạn hữu hạn. Phải gộp thành một logarit $\ln\frac{x}{\sqrt{1+x^2}}$ trước, rồi mới cho $x\to\infty$.</span>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">3. Combine</span><span class="lang-vi">3. Kết luận</span></div>
<span class="lang-en">The integral converges, with value $I=\dfrac{\pi}{4}+\dfrac{\ln 2}{2}$.</span>
<span class="lang-vi">Tích phân hội tụ, với giá trị $I=\dfrac{\pi}{4}+\dfrac{\ln 2}{2}$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Evaluate (Type 1)</span><span class="lang-vi">Tự luyện: tính (loại 1)</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">T1</div>
<span class="lang-en">Determine whether the integral converges, and evaluate it if it does:</span>
<span class="lang-vi">Xét sự hội tụ và tính (nếu hội tụ):</span>

$$
\int_0^{+\infty} xe^{-x}\,dx.
$$
</div>
<div class="exercise-card">
<div class="num">T2</div>
<span class="lang-en">Determine whether the integral converges, and evaluate it if it does:</span>
<span class="lang-vi">Xét sự hội tụ và tính (nếu hội tụ):</span>

$$
\int_e^{+\infty} \frac{dx}{x \ln^2 x}.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">T1: integrate by parts with $u=x$, $dv=e^{-x}dx$; note $\frac{t}{e^{t}}\to0$. T2: substitute $u=\ln x$, so $du=\frac{dx}{x}$.</span>
<span class="lang-vi">T1: từng phần với $u=x$, $dv=e^{-x}dx$; chú ý $\frac{t}{e^{t}}\to0$. T2: đổi biến $u=\ln x$, khi đó $du=\frac{dx}{x}$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>T1: <span class="lang-en">converges,</span><span class="lang-vi">hội tụ,</span> $\displaystyle\int_0^{+\infty} xe^{-x}\,dx=1$</span><br>
<span class="blur-step" v-click>T2: <span class="lang-en">converges,</span><span class="lang-vi">hội tụ,</span> $\displaystyle\int_e^{+\infty} \frac{dx}{x\ln^2 x}=1$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; bài tập Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">The Comparison Theorem</span><span class="lang-vi">Định lý so sánh</span>

<div class="grid-2 align-center">
<div class="thm">
<div class="tag"><span class="lang-en">Theorem - comparison (Type 1)</span><span class="lang-vi">Định lý - so sánh (loại 1)</span></div>
<span class="lang-en">Suppose $f$ and $g$ are continuous functions with $f(x)\ge g(x)\ge0$ for $x\ge a$.</span>
<span class="lang-vi">Giả sử $f$ và $g$ là các hàm liên tục với $f(x)\ge g(x)\ge0$ khi $x\ge a$.</span>

<span class="lang-en">1. If $\int_a^{+\infty} f(x)\,dx$ is convergent, then $\int_a^{+\infty} g(x)\,dx$ is convergent.</span>
<span class="lang-vi">1. Nếu $\int_a^{+\infty} f(x)\,dx$ hội tụ thì $\int_a^{+\infty} g(x)\,dx$ hội tụ.</span><br>
<span class="lang-en">2. If $\int_a^{+\infty} g(x)\,dx$ is divergent, then $\int_a^{+\infty} f(x)\,dx$ is divergent.</span>
<span class="lang-vi">2. Nếu $\int_a^{+\infty} g(x)\,dx$ phân kỳ thì $\int_a^{+\infty} f(x)\,dx$ phân kỳ.</span>
</div>
<img src="./images/tpsrl1_1.jpg" class="graph-img" alt="Two positive curves, one above the other">
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Why it is true, in one look</span><span class="lang-vi">Vì sao đúng, nhìn một lần</span></div>
<span class="lang-en">If the area under the top curve $y=f(x)$ is finite, then so is the area under the bottom curve $y=g(x)$; if the area under $y=g(x)$ is infinite, then so is the area under $y=f(x)$.</span>
<span class="lang-vi">Nếu diện tích dưới đường trên $y=f(x)$ hữu hạn thì diện tích dưới đường dưới $y=g(x)$ cũng hữu hạn; nếu diện tích dưới $y=g(x)$ vô hạn thì diện tích dưới $y=f(x)$ cũng vô hạn.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 7.8 (Comparison Theorem); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>.</span>
<span class="lang-vi">Đọc: Stewart 7.8 (Định lý so sánh); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Compare, Don't Compute</span><span class="lang-vi">Ví dụ: so sánh, không cần tính</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question (Stewart 7.8, Example 10)</span><span class="lang-vi">Câu hỏi (Stewart 7.8, Ví dụ 10)</span></div>
<span class="lang-en">Determine whether $\displaystyle\int_1^{+\infty} \frac{1+e^{-x}}{x}\,dx$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $\displaystyle\int_1^{+\infty} \frac{1+e^{-x}}{x}\,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">For $x\ge1$ we have $e^{-x}>0$, so</span>
<span class="lang-vi">Với $x\ge1$ ta có $e^{-x}>0$, nên</span>

$$
\frac{1+e^{-x}}{x} > \frac{1}{x} > 0.
$$

<span class="lang-en">Since $\int_1^{+\infty} \frac{dx}{x}$ is divergent (the $p$-integral with $p=1$), the given integral is <strong>divergent</strong> by the Comparison Theorem.</span>
<span class="lang-vi">Vì $\int_1^{+\infty} \frac{dx}{x}$ phân kỳ (tích phân $p$ với $p=1$), tích phân đã cho <strong>phân kỳ</strong> theo Định lý so sánh.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">What the tests are for</span><span class="lang-vi">Tiêu chuẩn dùng để làm gì</span></div>
<span class="lang-en">Comparison answers only "convergent or divergent" - not the value. Use it when the antiderivative is out of reach, or when you only need convergence.</span>
<span class="lang-vi">So sánh chỉ trả lời "hội tụ hay phân kỳ" - không cho giá trị. Dùng khi nguyên hàm ngoài tầm với, hoặc khi chỉ cần biết sự hội tụ.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 7.8 (Example 10); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>.</span>
<span class="lang-vi">Đọc: Stewart 7.8 (Ví dụ 10); <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Limit Comparison</span><span class="lang-vi">So sánh qua giới hạn</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem - limit comparison (Type 1)</span><span class="lang-vi">Định lý - so sánh qua giới hạn (loại 1)</span></div>
<span class="lang-en">Suppose $f(x)\ge0$ and $g(x)\ge0$ are integrable on every interval $[a,t]$, and let $\lambda$ denote the limit of their ratio, $\lambda=\lim_{x \to \infty} \frac{f(x)}{g(x)}$.</span>
<span class="lang-vi">Giả sử $f(x)\ge0$ và $g(x)\ge0$ khả tích trên mọi đoạn $[a,t]$, và gọi $\lambda$ là giới hạn của tỉ số, $\lambda=\lim_{x \to \infty} \frac{f(x)}{g(x)}$.</span>

<span class="lang-en">1. If $0<\lambda<+\infty$: the two integrals either both converge or both diverge.</span>
<span class="lang-vi">1. Nếu $0<\lambda<+\infty$: hai tích phân cùng hội tụ hoặc cùng phân kỳ.</span><br>
<span class="lang-en">2. If $\lambda=0$ and $\int_a^{+\infty} g(x)\,dx$ converges, then $\int_a^{+\infty} f(x)\,dx$ converges.</span>
<span class="lang-vi">2. Nếu $\lambda=0$ và $\int_a^{+\infty} g(x)\,dx$ hội tụ thì $\int_a^{+\infty} f(x)\,dx$ hội tụ.</span><br>
<span class="lang-en">3. If $\lambda=+\infty$ and $\int_a^{+\infty} g(x)\,dx$ diverges, then $\int_a^{+\infty} f(x)\,dx$ diverges.</span>
<span class="lang-vi">3. Nếu $\lambda=+\infty$ và $\int_a^{+\infty} g(x)\,dx$ phân kỳ thì $\int_a^{+\infty} f(x)\,dx$ phân kỳ.</span>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">How to use it</span><span class="lang-vi">Cách dùng</span></div>
<span class="lang-en">Pick $g$ to be the <strong>scale</strong> of $f$ for large $x$ - usually a power $\frac{1}{x^p}$ - and compute one limit. Then read the answer off the $p$-integral.</span>
<span class="lang-vi">Chọn $g$ là <strong>bậc</strong> của $f$ khi $x$ lớn - thường là một lũy thừa $\frac{1}{x^p}$ - rồi tính một giới hạn. Sau đó đọc kết luận từ tích phân $p$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Equivalent Functions And Growth Scales</span><span class="lang-vi">Hàm tương đương và thang bậc tăng trưởng</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - equivalent functions</span><span class="lang-vi">Định nghĩa - hàm tương đương</span></div>
<span class="lang-en">Functions $f$ and $g$ are called <strong>equivalent</strong> as $x\to a$, written $f(x) \sim g(x)$, if $\lim_{x \to a} \frac{f(x)}{g(x)}=1$. This is the case $\lambda=1$ of limit comparison: equivalent integrands converge or diverge together.</span>
<span class="lang-vi">Hai hàm $f$ và $g$ gọi là <strong>tương đương</strong> khi $x\to a$, ký hiệu $f(x) \sim g(x)$, nếu $\lim_{x \to a} \frac{f(x)}{g(x)}=1$. Đây chính là trường hợp $\lambda=1$ của so sánh qua giới hạn: hai hàm tương đương cùng hội tụ hoặc cùng phân kỳ.</span>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Growth scale as $x\to+\infty$</span><span class="lang-vi">Thang bậc tăng trưởng khi $x\to+\infty$</span></div>
<span class="lang-en">For any $\alpha>0$, $\beta>0$ and $a>1$ (here $u \ll v$ means $\frac{u}{v}\to0$):</span>
<span class="lang-vi">Với mọi $\alpha>0$, $\beta>0$ và $a>1$ (ký hiệu $u \ll v$ nghĩa là $\frac{u}{v}\to0$):</span>

$$
\ln^{\alpha} x \ \ll\ x^{\beta} \ \ll\ a^x,
\qquad\text{i.e.}\quad
\lim_{x \to +\infty} \frac{\ln^{\alpha} x}{x^{\beta}}=0,
\quad
\lim_{x \to +\infty} \frac{x^{\beta}}{a^x}=0.
$$

<span class="lang-en">Logarithms lose to powers; powers lose to exponentials.</span>
<span class="lang-vi">Logarit thua lũy thừa; lũy thừa thua hàm mũ.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Find The Scale (I)</span><span class="lang-vi">Ví dụ: tìm bậc (I)</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_1^{+\infty} \frac{dx}{\sqrt{x^2-2x+3}}$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_1^{+\infty} \frac{dx}{\sqrt{x^2-2x+3}}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">The integrand is positive for $x\ge1$. For large $x$ the term $x^2$ dominates inside the square root, so we compare with $\frac{1}{x}$:</span>
<span class="lang-vi">Hàm dưới dấu tích phân dương với $x\ge1$. Khi $x$ lớn, số hạng $x^2$ trội trong căn, nên ta so với $\frac{1}{x}$:</span>

$$
\lim_{x\to\infty}\frac{1/\sqrt{x^2-2x+3}}{1/x}
=\lim_{x\to\infty}\frac{x}{\sqrt{x^2-2x+3}}=1,
\qquad\text{i.e.}\quad
\frac{1}{\sqrt{x^2-2x+3}} \sim \frac{1}{x}.
$$

<span class="lang-en">Since $\int_1^{+\infty} \frac{dx}{x}$ diverges ($p=1$), the integral $I$ is <strong>divergent</strong> by limit comparison.</span>
<span class="lang-vi">Vì $\int_1^{+\infty} \frac{dx}{x}$ phân kỳ ($p=1$), tích phân $I$ <strong>phân kỳ</strong> theo so sánh qua giới hạn.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Find The Scale (II)</span><span class="lang-vi">Ví dụ: tìm bậc (II)</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_2^{+\infty} \frac{(x+1)\,dx}{\sqrt[3]{x^7-3x-2}}$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_2^{+\infty} \frac{(x+1)\,dx}{\sqrt[3]{x^7-3x-2}}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">The integrand is positive for $x\ge2$. For large $x$, the numerator behaves like $x$ and the denominator like $\sqrt[3]{x^7}=x^{7/3}$, so</span>
<span class="lang-vi">Hàm dưới dấu tích phân dương với $x\ge2$. Khi $x$ lớn, tử số cỡ $x$ và mẫu số cỡ $\sqrt[3]{x^7}=x^{7/3}$, nên</span>

$$
\frac{x+1}{\sqrt[3]{x^7-3x-2}} \sim \frac{x}{x^{7/3}}=\frac{1}{x^{4/3}}
\qquad (x\to+\infty).
$$

<span class="lang-en">Since $p=\frac{4}{3}>1$, the comparison integral converges, so $I$ is <strong>convergent</strong>.</span>
<span class="lang-vi">Vì $p=\frac{4}{3}>1$, tích phân so sánh hội tụ, nên $I$ <strong>hội tụ</strong>.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">The recipe</span><span class="lang-vi">Công thức chung</span></div>
<span class="lang-en">Keep the dominant term on top and bottom, cancel, and read off the power $p$.</span>
<span class="lang-vi">Giữ số hạng trội ở tử và mẫu, rút gọn, rồi đọc ra lũy thừa $p$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Convergence (Type 1)</span><span class="lang-vi">Tự luyện: sự hội tụ (loại 1)</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">Y1</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_1^{+\infty} \frac{2+\sin x}{\sqrt{x}}\,dx.
$$
</div>
<div class="exercise-card">
<div class="num">Y2</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_1^{+\infty} \frac{\ln x}{x^3}\,dx.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">Y1: $2+\sin x\ge1$, so compare with $\frac{1}{\sqrt{x}}$. Y2: $\ln x \le \sqrt{x}$ for large $x$, so compare with $\frac{1}{x^{5/2}}$.</span>
<span class="lang-vi">Y1: $2+\sin x\ge1$, nên so với $\frac{1}{\sqrt{x}}$. Y2: $\ln x \le \sqrt{x}$ khi $x$ lớn, nên so với $\frac{1}{x^{5/2}}$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>Y1: <span class="lang-en">diverges (comparison with $x^{-1/2}$, $p=\frac{1}{2}\le1$)</span><span class="lang-vi">phân kỳ (so sánh với $x^{-1/2}$, $p=\frac{1}{2}\le1$)</span></span><br>
<span class="blur-step" v-click>Y2: <span class="lang-en">converges (its value is $\frac{1}{4}$, by parts)</span><span class="lang-vi">hội tụ (giá trị là $\frac{1}{4}$, tính bằng từng phần)</span></span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; bài tập Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Type 2: Definition</span><span class="lang-vi">Loại 2: định nghĩa</span>

<div class="grid-2 align-center">
<div class="defn">
<div class="tag"><span class="lang-en">Definition - improper integral of Type 2</span><span class="lang-vi">Định nghĩa - tích phân suy rộng loại 2</span></div>
<span class="lang-en">Suppose $f$ is continuous on $[a,b)$ and has a <strong>vertical asymptote</strong> at $b$ (that is, $f(x)\to\infty$ as $x\to b^-$). Then</span>
<span class="lang-vi">Giả sử $f$ liên tục trên $[a,b)$ và có <strong>tiệm cận đứng</strong> tại $b$ (nghĩa là $f(x)\to\infty$ khi $x\to b^-$). Khi đó</span>

$$
\int_a^b f(x)\,dx=\lim_{t \to b^-} \int_a^{t} f(x)\,dx,
$$

<span class="lang-en">if this limit exists (as a finite number). The interval is finite, but the integrand is unbounded.</span>
<span class="lang-vi">nếu giới hạn này tồn tại (là một số hữu hạn). Khoảng lấy tích phân hữu hạn, nhưng hàm dưới dấu tích phân không bị chặn.</span>
</div>
<img src="./images/3.JPG" class="graph-img small" alt="Region under a curve with a vertical asymptote">
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Geometric meaning</span><span class="lang-vi">Ý nghĩa hình học</span></div>
<span class="lang-en">If $f(x)\ge0$ and the integral converges, it is again the area of an unbounded region - unbounded upward this time, along the asymptote $x=b$.</span>
<span class="lang-vi">Nếu $f(x)\ge0$ và tích phân hội tụ thì nó vẫn là diện tích của một miền không bị chặn - lần này không bị chặn theo phương thẳng đứng, dọc theo tiệm cận $x=b$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Type 2: The Other Cases</span><span class="lang-vi">Loại 2: các trường hợp còn lại</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - asymptote at the left end or inside</span><span class="lang-vi">Định nghĩa - tiệm cận ở đầu trái hoặc bên trong</span></div>
<span class="lang-en">If $f$ is continuous on $(a,b]$ and has a vertical asymptote at $a$, then $\displaystyle\int_a^b f(x)\,dx=\lim_{t \to a^+} \int_t^{b} f(x)\,dx$.</span>
<span class="lang-vi">Nếu $f$ liên tục trên $(a,b]$ và có tiệm cận đứng tại $a$ thì $\displaystyle\int_a^b f(x)\,dx=\lim_{t \to a^+} \int_t^{b} f(x)\,dx$.</span>

<span class="lang-en">If $f$ has a vertical asymptote at an interior point $c$ with $a < c < b$, and both $\int_a^c f(x)\,dx$ and $\int_c^b f(x)\,dx$ converge, then we define</span>
<span class="lang-vi">Nếu $f$ có tiệm cận đứng tại điểm trong $c$ với $a < c < b$, và cả $\int_a^c f(x)\,dx$ lẫn $\int_c^b f(x)\,dx$ đều hội tụ, thì ta định nghĩa</span>

$$
\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx.
$$
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Newton-Leibniz for Type 2</span><span class="lang-vi">Newton-Leibniz cho loại 2</span></div>
<span class="lang-en">If $F$ is an antiderivative of $f$ on $[a,b)$, write $F(b^-)=\lim_{t\to b^-}F(t)$; then $\int_a^b f(x)\,dx=F(b^-)-F(a)$: <strong>convergent</strong> exactly when $F(b^-)$ is finite, <strong>divergent</strong> otherwise.</span>
<span class="lang-vi">Nếu $F$ là nguyên hàm của $f$ trên $[a,b)$, ký hiệu $F(b^-)=\lim_{t\to b^-}F(t)$; khi đó $\int_a^b f(x)\,dx=F(b^-)-F(a)$: <strong>hội tụ</strong> đúng khi $F(b^-)$ hữu hạn, ngược lại <strong>phân kỳ</strong>.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Warning: Hidden Asymptotes</span><span class="lang-vi">Cảnh báo: tiệm cận ẩn</span>

<div class="caution">
<div class="label"><span class="lang-en">An erroneous calculation</span><span class="lang-vi">Một phép tính sai</span></div>
<span class="lang-en">If we had not noticed the asymptote and had treated the integral as an ordinary one, we might have written</span>
<span class="lang-vi">Nếu không để ý tiệm cận và xem đây là tích phân thường, ta có thể đã viết</span>

$$
\int_{-1}^{1}\frac{dx}{x^2}\ \overset{?}{=}\ -\frac{1}{x}\Big|_{-1}^{1}=-1-1=-2.
$$

<span class="lang-en">This is wrong twice over: the integrand is positive, so the answer cannot be negative - and in fact $\frac{1}{x^2}$ has a vertical asymptote at $x=0$, and each half $\int_0^1$, $\int_{-1}^0$ diverges. The integral is <strong>divergent</strong>.</span>
<span class="lang-vi">Sai hai lần: hàm dưới dấu tích phân dương nên đáp số không thể âm - và thật ra $\frac{1}{x^2}$ có tiệm cận đứng tại $x=0$, mỗi nửa $\int_0^1$, $\int_{-1}^0$ đều phân kỳ. Tích phân <strong>phân kỳ</strong>.</span>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Habit to build</span><span class="lang-vi">Thói quen cần có</span></div>
<span class="lang-en">From now on, whenever you meet $\int_a^b f(x)\,dx$, look at $f$ on all of $[a,b]$ first and decide whether the integral is proper or improper - check the endpoints and every zero of a denominator.</span>
<span class="lang-vi">Từ nay, mỗi khi gặp $\int_a^b f(x)\,dx$, hãy nhìn $f$ trên cả $[a,b]$ trước và xác định tích phân là thường hay suy rộng - kiểm tra hai cận và mọi nghiệm của mẫu số.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart 7.8 (warning after Example 7); <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>.</span>
<span class="lang-vi">Đọc: Stewart 7.8 (cảnh báo sau Ví dụ 7); <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: The Borderline Case</span><span class="lang-vi">Ví dụ: trường hợp ranh giới</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_0^1 \frac{dx}{x}$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_0^1 \frac{dx}{x}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">Since $\lim_{x \to 0^+} \frac{1}{x}=+\infty$, the line $x=0$ is a vertical asymptote: the integral is improper of Type 2 at the left endpoint. Then</span>
<span class="lang-vi">Vì $\lim_{x \to 0^+} \frac{1}{x}=+\infty$, đường $x=0$ là tiệm cận đứng: tích phân suy rộng loại 2 tại cận trái. Khi đó</span>

$$
I=\ln x \Big|_{0^+}^1=\ln 1-\lim_{t \to 0^+} \ln t=+\infty,
$$

<span class="lang-en">so the improper integral $I$ is <strong>divergent</strong>.</span>
<span class="lang-vi">nên tích phân suy rộng $I$ <strong>phân kỳ</strong>.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Same function, two roles</span><span class="lang-vi">Cùng một hàm, hai vai trò</span></div>
<span class="lang-en">$\frac{1}{x}$ diverges on $[1,\infty)$ and on $(0,1]$: the borderline of both reference families.</span>
<span class="lang-vi">$\frac{1}{x}$ phân kỳ trên $[1,\infty)$ lẫn $(0,1]$: ranh giới của cả hai họ tích phân mẫu.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Which Endpoint Is Bad? - Set Up</span><span class="lang-vi">Ví dụ: cận nào có vấn đề? - thiết lập</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Evaluate $I=\displaystyle\int_{-1}^1 \frac{\arccos x}{\sqrt{1-x^2}}\,dx$.</span>
<span class="lang-vi">Tính $I=\displaystyle\int_{-1}^1 \frac{\arccos x}{\sqrt{1-x^2}}\,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">1. Locate the singularities</span><span class="lang-vi">1. Xác định điểm kỳ dị</span></div>
<span class="lang-en">The denominator vanishes at both $x=-1$ and $x=1$ - but check the limits, not just the denominator. At $x=-1$: the numerator tends to $\arccos(-1)=\pi\neq0$, so</span>
<span class="lang-vi">Mẫu số triệt tiêu tại cả $x=-1$ và $x=1$ - nhưng phải kiểm tra giới hạn, chứ không chỉ mẫu số. Tại $x=-1$: tử số dần về $\arccos(-1)=\pi\neq0$, nên</span>

$$
\lim_{x \to -1^+} \frac{\arccos x}{\sqrt{1-x^2}}=+\infty
\quad\Rightarrow\quad x=-1 \text{ is a vertical asymptote.}
$$

<span class="lang-en">At $x=1$: numerator and denominator both tend to $0$, and one can check $\lim_{x \to 1^-} \frac{\arccos x}{\sqrt{1-x^2}}=1$, a finite number - so $x=1$ is <strong>not</strong> an asymptote. The only trouble is at $x=-1$.</span>
<span class="lang-vi">Tại $x=1$: tử và mẫu cùng dần về $0$, và có thể kiểm tra $\lim_{x \to 1^-} \frac{\arccos x}{\sqrt{1-x^2}}=1$, hữu hạn - nên $x=1$ <strong>không</strong> phải tiệm cận. Vấn đề chỉ nằm tại $x=-1$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Example: Which Endpoint Is Bad? - Compute</span><span class="lang-vi">Ví dụ: cận nào có vấn đề? - tính toán</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">2. Integrate: recognize $d(\arccos x)$</span><span class="lang-vi">2. Tích phân: nhận ra $d(\arccos x)$</span></div>
<span class="lang-en">Since $\frac{d}{dx}\arccos x=-\frac{1}{\sqrt{1-x^2}}$, the integrand is $-\arccos x \, d(\arccos x)$:</span>
<span class="lang-vi">Vì $\frac{d}{dx}\arccos x=-\frac{1}{\sqrt{1-x^2}}$, biểu thức dưới dấu tích phân là $-\arccos x \, d(\arccos x)$:</span>

$$
I=-\int_{-1}^1 \arccos x \; d(\arccos x)=-\frac{1}{2} \arccos^2 x \Big|_{-1^+}^{1}
$$

$$
=\frac{1}{2}\lim_{t \to -1^+} \arccos^2 t-\frac{1}{2}\arccos^2 1
=\frac{\pi^2}{2}-0=\frac{\pi^2}{2}.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">3. Interpret</span><span class="lang-vi">3. Kết luận</span></div>
<span class="lang-en">The limit exists as a finite number, so the improper integral <strong>converges</strong>, with value $\frac{\pi^2}{2}$ (about $4.93$). Here $\arccos(-1)=\pi$ and $\arccos 1=0$.</span>
<span class="lang-vi">Giới hạn tồn tại hữu hạn, nên tích phân suy rộng <strong>hội tụ</strong>, với giá trị $\frac{\pi^2}{2}$ (khoảng $4{,}93$). Ở đây $\arccos(-1)=\pi$ và $\arccos 1=0$.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">The Reference Integral At An Endpoint</span><span class="lang-vi">Tích phân mẫu tại một cận</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">For what values of $\alpha$ does $I=\displaystyle\int_a^b \frac{dx}{(b-x)^{\alpha}}$ (with $a < b$) converge? For $\alpha>0$ the integrand blows up at $x=b$.</span>
<span class="lang-vi">Với giá trị nào của $\alpha$ thì $I=\displaystyle\int_a^b \frac{dx}{(b-x)^{\alpha}}$ (với $a < b$) hội tụ? Khi $\alpha>0$, hàm dưới dấu tích phân bùng nổ tại $x=b$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Case $\alpha\neq1$</span><span class="lang-vi">Trường hợp $\alpha\neq1$</span></div>

$$
\int_a^{t} \frac{dx}{(b-x)^{\alpha}}
=\frac{(b-x)^{1-\alpha}}{\alpha-1}\Bigg|_a^{t}
=\frac{(b-t)^{1-\alpha}-(b-a)^{1-\alpha}}{\alpha-1}.
$$

<span class="lang-en">If $\alpha<1$: $(b-t)^{1-\alpha}\to0$ as $t\to b^-$, so $I$ converges, with value $\frac{(b-a)^{1-\alpha}}{1-\alpha}$.</span>
<span class="lang-vi">Nếu $\alpha<1$: $(b-t)^{1-\alpha}\to0$ khi $t\to b^-$, nên $I$ hội tụ, với giá trị $\frac{(b-a)^{1-\alpha}}{1-\alpha}$.</span>

<span class="lang-en">If $\alpha>1$: $(b-t)^{1-\alpha}\to+\infty$ as $t\to b^-$, so $I$ diverges.</span>
<span class="lang-vi">Nếu $\alpha>1$: $(b-t)^{1-\alpha}\to+\infty$ khi $t\to b^-$, nên $I$ phân kỳ.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">The Reference Integral: Summary</span><span class="lang-vi">Tích phân mẫu: tổng kết</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Case $\alpha=1$</span><span class="lang-vi">Trường hợp $\alpha=1$</span></div>

$$
\int_a^{t} \frac{dx}{b-x}=-\ln (b-x) \Big|_a^{t}
=-\ln (b-t)+\ln (b-a)\ \longrightarrow\ +\infty
\quad\text{as } t\to b^-,
$$

<span class="lang-en">so the integral diverges.</span>
<span class="lang-vi">nên tích phân phân kỳ.</span>
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">The reference integral at a finite endpoint</span><span class="lang-vi">Tích phân mẫu tại cận hữu hạn</span></div>
<span class="lang-en">$\displaystyle\int_a^b \frac{dx}{(b-x)^{\alpha}}$ and likewise $\displaystyle\int_a^b \frac{dx}{(x-a)^{\alpha}}$ are <strong>convergent if $\alpha<1$</strong> and <strong>divergent if $\alpha\ge1$</strong>.</span>
<span class="lang-vi">$\displaystyle\int_a^b \frac{dx}{(b-x)^{\alpha}}$ và tương tự $\displaystyle\int_a^b \frac{dx}{(x-a)^{\alpha}}$ <strong>hội tụ nếu $\alpha<1$</strong> và <strong>phân kỳ nếu $\alpha\ge1$</strong>.</span>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Mind the flip</span><span class="lang-vi">Chú ý quy tắc ngược</span></div>
<span class="lang-en">At infinity, powers need $p>1$ to converge; at a finite endpoint, they need $\alpha<1$. The two rules point in opposite directions - this is the most common exam error.</span>
<span class="lang-vi">Tại vô cực, lũy thừa cần $p>1$ để hội tụ; tại cận hữu hạn lại cần $\alpha<1$. Hai quy tắc ngược chiều nhau - đây là lỗi thi phổ biến nhất.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Worked Problem 3 - Set Up</span><span class="lang-vi">Bài giải mẫu 3 - thiết lập</span>

<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Evaluate the improper integral $I=\displaystyle\int_1^3 \frac{dx}{\sqrt{4x-x^2-3}}$.</span>
<span class="lang-vi">Tính tích phân suy rộng $I=\displaystyle\int_1^3 \frac{dx}{\sqrt{4x-x^2-3}}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">1. Find the singularities</span><span class="lang-vi">1. Tìm điểm kỳ dị</span></div>
<span class="lang-en">Complete the square under the root:</span>
<span class="lang-vi">Đưa biểu thức dưới căn về bình phương đủ:</span>

$$
4x-x^2-3=1-(x-2)^2=(x-1)(3-x).
$$

<span class="lang-en">The expression vanishes at $x=1$ and $x=3$, so the integrand has vertical asymptotes at <strong>both endpoints</strong>: the integral is improper of Type 2 at $x=1$ and at $x=3$ (split at an interior point, say $x=2$, and require both halves to converge).</span>
<span class="lang-vi">Biểu thức triệt tiêu tại $x=1$ và $x=3$, nên hàm dưới dấu tích phân có tiệm cận đứng tại <strong>cả hai cận</strong>: tích phân suy rộng loại 2 tại $x=1$ và tại $x=3$ (tách tại một điểm trong, chẳng hạn $x=2$, và cả hai nửa phải hội tụ).</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Worked Problem 3 - Compute</span><span class="lang-vi">Bài giải mẫu 3 - tính toán</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">2. Integrate: an arcsine appears</span><span class="lang-vi">2. Tích phân: xuất hiện arcsin</span></div>
<span class="lang-en">Since $\frac{d}{du}\arcsin u=\frac{1}{\sqrt{1-u^2}}$, with $u=x-2$ we get</span>
<span class="lang-vi">Vì $\frac{d}{du}\arcsin u=\frac{1}{\sqrt{1-u^2}}$, với $u=x-2$ ta được</span>

$$
I=\int_1^3 \frac{d(x-2)}{\sqrt{1-(x-2)^2}}=\arcsin (x-2) \Big|_{1^+}^{3^-}
$$

$$
=\lim_{t \to 3^-} \arcsin (t-2)-\lim_{s \to 1^+} \arcsin (s-2)
=\arcsin 1-\arcsin (-1)=\frac{\pi}{2}+\frac{\pi}{2}=\pi.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">3. Interpret and check</span><span class="lang-vi">3. Kết luận và kiểm tra</span></div>
<span class="lang-en">Both one-sided limits are finite, so $I$ <strong>converges</strong>, with value $\pi$. Check: near $x=3$ the integrand behaves like $\frac{1}{\sqrt{2(3-x)}}$ - the reference integral with $\alpha=\frac{1}{2}<1$, convergent; same at $x=1$. Consistent.</span>
<span class="lang-vi">Cả hai giới hạn một phía đều hữu hạn, nên $I$ <strong>hội tụ</strong>, với giá trị $\pi$. Kiểm tra: gần $x=3$, hàm dưới dấu tích phân cỡ $\frac{1}{\sqrt{2(3-x)}}$ - tích phân mẫu với $\alpha=\frac{1}{2}<1$, hội tụ; tại $x=1$ cũng vậy. Nhất quán.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Worked Problem 4 - A One-Liner</span><span class="lang-vi">Bài giải mẫu 4 - một dòng</span>

<div class="grid-2">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Evaluate</span><span class="lang-vi">Tính</span></div>
<span class="lang-en">Evaluate $I=\displaystyle\int_0^1 \frac{dx}{\sqrt{1-x}}$.</span>
<span class="lang-vi">Tính $I=\displaystyle\int_0^1 \frac{dx}{\sqrt{1-x}}$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">The integrand blows up at $x=1$:</span>
<span class="lang-vi">Hàm dưới dấu tích phân bùng nổ tại $x=1$:</span>

$$
I=-\int_0^1 \frac{d(1-x)}{\sqrt{1-x}}=-2 \sqrt{1-x} \Big|_0^{1^-}
$$

$$
=\lim_{t \to 1^-} \left(-2 \sqrt{1-t} \right)+2=0+2=2.
$$
</div>
</div>
<div class="box">
<div class="label"><span class="lang-en">Read it as a reference integral</span><span class="lang-vi">Đọc như một tích phân mẫu</span></div>
<span class="lang-en">This is exactly $\int_0^1 \frac{dx}{(1-x)^{\alpha}}$ with $\alpha=\frac{1}{2}<1$: convergence was guaranteed before we computed anything. The computation adds the value: $I=2$.</span>
<span class="lang-vi">Đây chính là $\int_0^1 \frac{dx}{(1-x)^{\alpha}}$ với $\alpha=\frac{1}{2}<1$: sự hội tụ được bảo đảm trước khi ta tính bất cứ điều gì. Phép tính bổ sung giá trị: $I=2$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Evaluate (Type 2)</span><span class="lang-vi">Tự luyện: tính (loại 2)</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">Z1</div>
<span class="lang-en">Determine whether the integral converges, and evaluate it if it does:</span>
<span class="lang-vi">Xét sự hội tụ và tính (nếu hội tụ):</span>

$$
\int_0^1 \ln x \,dx.
$$
</div>
<div class="exercise-card">
<div class="num">Z2</div>
<span class="lang-en">Determine whether the integral converges, and evaluate it if it does:</span>
<span class="lang-vi">Xét sự hội tụ và tính (nếu hội tụ):</span>

$$
\int_0^2 \frac{dx}{\sqrt{4-x^2}}.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">Z1: the trouble is at $x=0$; integrate by parts with $u=\ln x$, $dv=dx$, and use $t\ln t\to0$ as $t\to0^+$. Z2: the trouble is at $x=2$; an antiderivative is $\arcsin\frac{x}{2}$.</span>
<span class="lang-vi">Z1: vấn đề tại $x=0$; từng phần với $u=\ln x$, $dv=dx$, và dùng $t\ln t\to0$ khi $t\to0^+$. Z2: vấn đề tại $x=2$; một nguyên hàm là $\arcsin\frac{x}{2}$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>Z1: <span class="lang-en">converges,</span><span class="lang-vi">hội tụ,</span> $\displaystyle\int_0^1 \ln x\,dx=-1$</span><br>
<span class="blur-step" v-click>Z2: <span class="lang-en">converges,</span><span class="lang-vi">hội tụ,</span> $\displaystyle\int_0^2 \frac{dx}{\sqrt{4-x^2}}=\frac{\pi}{2}$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; bài tập Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Limit Comparison For Type 2</span><span class="lang-vi">So sánh qua giới hạn cho loại 2</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem - limit comparison at $x=b$</span><span class="lang-vi">Định lý - so sánh qua giới hạn tại $x=b$</span></div>
<span class="lang-en">Suppose $f(x)\ge0$ and $g(x)\ge0$ are integrable on every $[a,t]\subset[a,b)$, unbounded as $x\to b^-$, with $\lambda=\lim_{x \to b^-} \frac{f(x)}{g(x)}$.</span>
<span class="lang-vi">Giả sử $f(x)\ge0$ và $g(x)\ge0$ khả tích trên mọi $[a,t]\subset[a,b)$, không bị chặn khi $x\to b^-$, với $\lambda=\lim_{x \to b^-} \frac{f(x)}{g(x)}$.</span>

<span class="lang-en">1. If $0<\lambda<+\infty$: the two integrals either both converge or both diverge.</span>
<span class="lang-vi">1. Nếu $0<\lambda<+\infty$: hai tích phân cùng hội tụ hoặc cùng phân kỳ.</span><br>
<span class="lang-en">2. If $\lambda=0$ and $\int_a^{b} g(x)\,dx$ converges, then $\int_a^{b} f(x)\,dx$ converges.</span>
<span class="lang-vi">2. Nếu $\lambda=0$ và $\int_a^{b} g(x)\,dx$ hội tụ thì $\int_a^{b} f(x)\,dx$ hội tụ.</span><br>
<span class="lang-en">3. If $\lambda=+\infty$ and $\int_a^{b} g(x)\,dx$ diverges, then $\int_a^{b} f(x)\,dx$ diverges.</span>
<span class="lang-vi">3. Nếu $\lambda=+\infty$ và $\int_a^{b} g(x)\,dx$ phân kỳ thì $\int_a^{b} f(x)\,dx$ phân kỳ.</span>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">How to use it</span><span class="lang-vi">Cách dùng</span></div>
<span class="lang-en">Compare with the reference power of the <strong>distance to the bad endpoint</strong>: take $g(x)=\frac{1}{(b-x)^{\alpha}}$, then convergence holds exactly when $\alpha<1$.</span>
<span class="lang-vi">So sánh với lũy thừa mẫu của <strong>khoảng cách đến cận xấu</strong>: lấy $g(x)=\frac{1}{(b-x)^{\alpha}}$, khi đó hội tụ đúng khi $\alpha<1$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Basic Equivalences As $x\to0$</span><span class="lang-vi">Các tương đương cơ bản khi $x\to0$</span>

<div class="box blue">
<div class="label"><span class="lang-en">The standard list (all as $x\to0$)</span><span class="lang-vi">Danh sách chuẩn (đều khi $x\to0$)</span></div>
<div class="formula-sheet cols-2">

$$
\sin x \sim x, \qquad \tan x \sim x
$$

$$
\arcsin x \sim x, \qquad \arctan x \sim x
$$

$$
1-\cos x \sim \frac{x^2}{2}, \qquad \cosh x-1 \sim \frac{x^2}{2}
$$

$$
e^x-1 \sim x, \qquad \ln(1+x) \sim x
$$

$$
a^x-1 \sim x\ln a, \qquad \sinh x \sim x
$$

$$
(1+x)^{\mu}-1 \sim \mu x, \qquad \sqrt[n]{1+x}-1 \sim \frac{x}{n}
$$

</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Why they matter here</span><span class="lang-vi">Vì sao quan trọng ở đây</span></div>
<span class="lang-en">Near the bad point, replace each factor by its equivalent and read off the power. Chains are allowed: $e^{\sin x}-1 \sim \sin x \sim x$.</span>
<span class="lang-vi">Gần điểm xấu, thay từng thừa số bởi hàm tương đương rồi đọc ra lũy thừa. Được phép nối chuỗi: $e^{\sin x}-1 \sim \sin x \sim x$.</span>
</div>

<div class="refs">
<span class="lang-en">These are the Maclaurin approximations of Lecture 04, reused as convergence tools.</span>
<span class="lang-vi">Đây là các xấp xỉ Maclaurin của Bài giảng 04, dùng lại làm công cụ xét hội tụ.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Equivalents At Work (I)</span><span class="lang-vi">Ví dụ: dùng tương đương (I)</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_0^1 \frac{\cos^2 x}{\sqrt[3]{1-x^2}}\,dx$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_0^1 \frac{\cos^2 x}{\sqrt[3]{1-x^2}}\,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">The integrand tends to $+\infty$ as $x\to1^-$ (the numerator tends to $\cos^2 1\neq0$). Factor out the distance to the bad point:</span>
<span class="lang-vi">Hàm dưới dấu tích phân dần về $+\infty$ khi $x\to1^-$ (tử số dần về $\cos^2 1\neq0$). Tách thừa số khoảng cách đến điểm xấu:</span>

$$
\frac{\cos^2 x}{\sqrt[3]{1-x^2}}
=\frac{\cos^2 x}{\sqrt[3]{1+x}}\cdot\frac{1}{(1-x)^{1/3}}
\ \sim\ \frac{\cos^2 1}{\sqrt[3]{2}}\cdot\frac{1}{(1-x)^{1/3}}
\qquad (x\to1^-).
$$

<span class="lang-en">This is a constant times the reference integrand with $\alpha=\frac{1}{3}<1$, so $I$ is <strong>convergent</strong>.</span>
<span class="lang-vi">Đây là hằng số nhân với hàm mẫu có $\alpha=\frac{1}{3}<1$, nên $I$ <strong>hội tụ</strong>.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Example: Equivalents At Work (II)</span><span class="lang-vi">Ví dụ: dùng tương đương (II)</span>

<div class="box gold">
<div class="label"><span class="lang-en">Question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">Determine whether $I=\displaystyle\int_0^1 \frac{\ln (1+\sqrt[3]{x})}{e^{\sin x}-1}\,dx$ is convergent or divergent.</span>
<span class="lang-vi">Xét sự hội tụ của $I=\displaystyle\int_0^1 \frac{\ln (1+\sqrt[3]{x})}{e^{\sin x}-1}\,dx$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">The integrand is undefined at $x=0$; both numerator and denominator tend to $0$, so find the scale of each. As $x\to0^+$: $\ \ln(1+\sqrt[3]{x}) \sim \sqrt[3]{x}=x^{1/3}$ and $e^{\sin x}-1 \sim \sin x \sim x$. Hence</span>
<span class="lang-vi">Hàm dưới dấu tích phân không xác định tại $x=0$; tử và mẫu cùng dần về $0$, nên tìm bậc của từng phần. Khi $x\to0^+$: $\ \ln(1+\sqrt[3]{x}) \sim \sqrt[3]{x}=x^{1/3}$ và $e^{\sin x}-1 \sim \sin x \sim x$. Do đó</span>

$$
\frac{\ln (1+\sqrt[3]{x})}{e^{\sin x}-1}
\ \sim\ \frac{x^{1/3}}{x}
=\frac{1}{x^{2/3}}
\qquad (x\to0^+).
$$

<span class="lang-en">The reference integral at $x=0$ has $\alpha=\frac{2}{3}<1$, so $I$ is <strong>convergent</strong>.</span>
<span class="lang-vi">Tích phân mẫu tại $x=0$ có $\alpha=\frac{2}{3}<1$, nên $I$ <strong>hội tụ</strong>.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Notice</span><span class="lang-vi">Nhận xét</span></div>
<span class="lang-en">The integrand tends to $+\infty$ like $x^{-2/3}$ - it blows up, yet slowly enough for the area to stay finite.</span>
<span class="lang-vi">Hàm dưới dấu tích phân tiến ra $+\infty$ cỡ $x^{-2/3}$ - bùng nổ, nhưng đủ chậm để diện tích vẫn hữu hạn.</span>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Your Turn: Convergence (Type 2)</span><span class="lang-vi">Tự luyện: sự hội tụ (loại 2)</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">V1</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_0^1 \frac{dx}{e^x-1}.
$$
</div>
<div class="exercise-card">
<div class="num">V2</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_0^1 \frac{1-\cos x}{x^{5/2}}\,dx.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">Both integrals are improper at $x=0$. V1: $e^x-1 \sim x$. V2: $1-\cos x \sim \frac{x^2}{2}$, so the integrand behaves like $\frac{1}{2x^{1/2}}$.</span>
<span class="lang-vi">Cả hai tích phân đều suy rộng tại $x=0$. V1: $e^x-1 \sim x$. V2: $1-\cos x \sim \frac{x^2}{2}$, nên hàm dưới dấu tích phân cỡ $\frac{1}{2x^{1/2}}$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>V1: <span class="lang-en">diverges (behaves like $\frac{1}{x}$, $\alpha=1$)</span><span class="lang-vi">phân kỳ (cỡ $\frac{1}{x}$, $\alpha=1$)</span></span><br>
<span class="blur-step" v-click>V2: <span class="lang-en">converges ($\alpha=\frac{1}{2}<1$)</span><span class="lang-vi">hội tụ ($\alpha=\frac{1}{2}<1$)</span></span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; bài tập Stewart 7.8.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Mixed Practice I</span><span class="lang-vi">Luyện tập tổng hợp I</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">M1</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_0^{+\infty} \frac{dx}{\sqrt{x^3+1}}
$$
</div>
<div class="exercise-card">
<div class="num">M2</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_{-\infty}^{+\infty} \frac{x}{1+x^2}\,dx
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">M1: the scale at $\infty$ is $x^{-3/2}$; nothing bad happens at $0$. M2: check one half first.</span>
<span class="lang-vi">M1: bậc tại $\infty$ là $x^{-3/2}$; tại $0$ không có gì xấu. M2: xét một nửa trước.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>M1: <span class="lang-en">converges ($p=\frac{3}{2}>1$)</span><span class="lang-vi">hội tụ ($p=\frac{3}{2}>1$)</span></span><br>
<span class="blur-step" v-click>M2: <span class="lang-en">diverges - each half diverges like $\int\frac{dx}{x}$; symmetric cancellation is not allowed</span><span class="lang-vi">phân kỳ - mỗi nửa phân kỳ cỡ $\int\frac{dx}{x}$; không được phép triệt tiêu đối xứng</span></span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; bài tập Stewart 7.8.</span>
</div>

---
class: compact exercise-heavy
---

# <span class="lang-en">Mixed Practice II</span><span class="lang-vi">Luyện tập tổng hợp II</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">M3</div>
<span class="lang-en">Convergent or divergent?</span>
<span class="lang-vi">Hội tụ hay phân kỳ?</span>

$$
\int_2^{+\infty} \frac{dx}{x \ln x}
$$
</div>
<div class="exercise-card">
<div class="num">M4</div>
<span class="lang-en">Improper at both ends - convergent?</span>
<span class="lang-vi">Suy rộng ở cả hai phía - hội tụ?</span>

$$
\int_0^{+\infty} \frac{dx}{\sqrt{x}\,(1+x)}
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">M3: substitute $u=\ln x$. M4: split at $1$; check $\alpha=\frac{1}{2}$ at $0$ and $p=\frac{3}{2}$ at $\infty$.</span>
<span class="lang-vi">M3: đổi biến $u=\ln x$. M4: tách tại $1$; kiểm tra $\alpha=\frac{1}{2}$ tại $0$ và $p=\frac{3}{2}$ tại $\infty$.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>M3: <span class="lang-en">diverges ($\ln\ln x\to\infty$)</span><span class="lang-vi">phân kỳ ($\ln\ln x\to\infty$)</span></span><br>
<span class="blur-step" v-click>M4: <span class="lang-en">converges; its value is $\pi$ (try $u=\sqrt{x}$)</span><span class="lang-vi">hội tụ; giá trị là $\pi$ (thử $u=\sqrt{x}$)</span></span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; bài tập Stewart 7.8.</span>
</div>

---

# <span class="lang-en">Decision Chart</span><span class="lang-vi">Bảng quyết định</span>

<div class="method-grid">
<div class="method-card">
<strong><span class="lang-en">1. Inspect</span><span class="lang-vi">1. Quan sát</span></strong>
<span class="lang-en">Find every trouble spot: infinite endpoints, zeros of denominators, logs at $0$. Split so each piece has exactly one.</span>
<span class="lang-vi">Tìm mọi điểm có vấn đề: cận vô hạn, nghiệm của mẫu số, logarit tại $0$. Tách sao cho mỗi phần chỉ chứa đúng một điểm.</span>
</div>
<div class="method-card">
<strong><span class="lang-en">2. Evaluate if you can</span><span class="lang-vi">2. Tính nếu được</span></strong>
<span class="lang-en">Newton-Leibniz, with a limit at each bad endpoint:</span>
<span class="lang-vi">Newton-Leibniz, lấy giới hạn tại mỗi cận xấu:</span>

$$
F(x)\Big|_a^{b^-}
$$
</div>
<div class="method-card">
<strong><span class="lang-en">3. Find the scale</span><span class="lang-vi">3. Tìm bậc</span></strong>
<span class="lang-en">Near each trouble spot, use equivalents to reduce to a power: $\frac{1}{x^p}$ at $\infty$, $\frac{1}{(b-x)^{\alpha}}$ at $b$.</span>
<span class="lang-vi">Gần mỗi điểm xấu, dùng tương đương để đưa về lũy thừa: $\frac{1}{x^p}$ tại $\infty$, $\frac{1}{(b-x)^{\alpha}}$ tại $b$.</span>
</div>
<div class="method-card">
<strong><span class="lang-en">4. Compare</span><span class="lang-vi">4. So sánh</span></strong>
<span class="lang-en">Convergent iff $p>1$ at infinity, $\alpha<1$ at a finite endpoint.</span>
<span class="lang-vi">Hội tụ khi và chỉ khi $p>1$ tại vô cực, $\alpha<1$ tại cận hữu hạn.</span>
</div>
</div>

<div class="caution mt-4">
<div class="label"><span class="lang-en">The most common error</span><span class="lang-vi">Lỗi thường gặp nhất</span></div>
<span class="lang-en">Applying the $p>1$ rule at a finite endpoint (or $\alpha<1$ at infinity). The two rules point in opposite directions.</span>
<span class="lang-vi">Áp dụng quy tắc $p>1$ tại cận hữu hạn (hoặc $\alpha<1$ tại vô cực). Hai quy tắc ngược chiều nhau.</span>
</div>

<div class="refs">
<span class="lang-en">Review: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Vol 2, 3.7</a>; Stewart 7.8.</span>
<span class="lang-vi">Ôn tập: <a href="https://activecalculus.org/single/sec-6-5-improper.html">Active Calculus 6.5</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals">OpenStax Tập 2, 3.7</a>; Stewart 7.8.</span>
</div>

---

# <span class="lang-en">Reading And Practice Sources</span><span class="lang-vi">Nguồn đọc và luyện tập</span>

<div class="source-list compact-sources">
<div class="source-item">
<strong>Boelkins, M.</strong>&nbsp;
<span class="lang-en"><em>Active Calculus</em> (2nd ed.), Section 6.5 (Improper Integrals).</span>
<span class="lang-vi"><em>Active Calculus</em> (ấn bản thứ 2), Mục 6.5 (Tích phân suy rộng).</span>
</div>
<div class="source-item">
<strong>Strang, G., & Herman, E. "Jed".</strong>&nbsp;
<span class="lang-en"><em>Calculus Volume 2</em>, OpenStax, Section 3.7 (Improper Integrals).</span>
<span class="lang-vi"><em>Calculus Volume 2</em>, OpenStax, Mục 3.7 (Tích phân suy rộng).</span>
</div>
<div class="source-item">
<strong>Stewart, J.</strong>&nbsp;
<span class="lang-en"><em>Calculus: Early Transcendentals</em> (8th ed., metric version), Section 7.8.</span>
<span class="lang-vi"><em>Calculus: Early Transcendentals</em> (ấn bản thứ 8, bản metric), Mục 7.8.</span>
</div>
<div class="source-item">
<strong>Lê Xuân Đại.</strong>&nbsp;
<span class="lang-en">HCMUT lecture slides: improper integrals (source of the worked examples, the limit-comparison machinery, and several practice problems).</span>
<span class="lang-vi">Slide bài giảng ĐHBK TP.HCM: tích phân suy rộng (nguồn của các bài giải mẫu, bộ công cụ so sánh qua giới hạn, và một số bài luyện tập).</span>
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
