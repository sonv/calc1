---
theme: default
title: "Calculus 1 - Midterm Review"
info: "MT1003 Calculus 1, Midterm Review"
transition: slide-left
download: "../../pdfs/midterm-review.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Midterm Review</span><span class="lang-vi">Ôn tập giữa kỳ</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Midterm Review</span>
<span class="lang-vi">MT1003 Giải tích 1 - Ôn tập giữa kỳ</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Nine worked problems spanning functions, limits, continuity, derivatives and their applications, and curve sketching. Problem set adapted from a midterm review by Dr. Lê Xuân Đại. Read alongside Stewart, Chapters 1-4; OpenStax Calculus Volume 1.</span>
<span class="lang-vi">Chín bài tập mẫu bao quát hàm số, giới hạn, tính liên tục, đạo hàm và ứng dụng, và khảo sát hàm số. Bộ bài phỏng theo tài liệu ôn tập giữa kỳ của TS. Lê Xuân Đại. Đọc kèm Stewart, Chương 1-4; OpenStax Calculus Tập 1.</span>
</div>

---

# <span class="lang-en">What This Review Covers</span><span class="lang-vi">Nội dung ôn tập</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Try first, then reveal</span><span class="lang-vi">Thử trước, rồi xem lời giải</span></div>
<span class="lang-en">Every solution in this deck is <strong>blurred</strong>. Work each problem yourself first, then click to reveal the solution one step at a time. The nine problems are grouped by topic, and each group opens with a short recap of the key facts.</span>
<span class="lang-vi">Mọi lời giải trong bộ slide này đều được <strong>làm mờ</strong>. Hãy tự làm từng bài trước, rồi bấm để hiện lời giải theo từng bước. Chín bài được nhóm theo chủ đề, và mỗi nhóm bắt đầu bằng phần ôn nhanh các ý chính.</span>
</div>

<div class="grid-2 mt-4">
<div class="method-card">
<strong><span class="lang-en">Functions, limits, continuity</span><span class="lang-vi">Hàm số, giới hạn, liên tục</span></strong>
<span class="lang-en">Composition and domain; an indeterminate limit via L'Hôpital; continuity of a piecewise function.</span>
<span class="lang-vi">Hợp hàm và miền xác định; giới hạn dạng vô định qua L'Hôpital; tính liên tục của hàm cho theo từng khúc.</span>
</div>
<div class="method-card">
<strong><span class="lang-en">Derivatives and their uses</span><span class="lang-vi">Đạo hàm và ứng dụng</span></strong>
<span class="lang-en">Horizontal tangents; non-differentiable points; linear approximation; velocity; related rates; curve sketching.</span>
<span class="lang-vi">Tiếp tuyến nằm ngang; điểm không khả vi; xấp xỉ tuyến tính; vận tốc; tốc độ liên hệ; khảo sát hàm số.</span>
</div>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Composition and Domain</span><span class="lang-vi">Ôn nhanh: Hợp hàm và miền xác định</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Composition</span><span class="lang-vi">Hợp hàm</span></div>
<span class="lang-en">The composition of $f$ and $g$ is</span>
<span class="lang-vi">Hợp của $f$ và $g$ là</span>

$$
(f\circ g)(x)=f\big(g(x)\big).
$$

<span class="lang-en">Apply $g$ first, then $f$. In general $f\circ g\ne g\circ f$.</span>
<span class="lang-vi">Áp dụng $g$ trước, rồi đến $f$. Nói chung $f\circ g\ne g\circ f$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Domain rule</span><span class="lang-vi">Quy tắc miền xác định</span></div>
<span class="lang-en">$x$ lies in the domain of $f\circ g$ when $x$ is in the domain of $g$ <em>and</em> $g(x)$ is in the domain of $f$. Recall $\sqrt{\,\cdot\,}$ needs its argument $\ge 0$, and a fraction needs a nonzero denominator.</span>
<span class="lang-vi">$x$ thuộc miền xác định của $f\circ g$ khi $x$ thuộc miền của $g$ <em>và</em> $g(x)$ thuộc miền của $f$. Nhớ rằng $\sqrt{\,\cdot\,}$ cần biểu thức $\ge 0$, và phân thức cần mẫu khác $0$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §1.3 (new functions from old); OpenStax Calculus Vol 1, §1.1.</span>
<span class="lang-vi">Đọc: Stewart §1.3 (hàm mới từ hàm cũ); OpenStax Calculus Tập 1, §1.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 1 - Composition and Domain</span><span class="lang-vi">Bài 1 - Hợp hàm và miền xác định</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">For $f(x)=x^2+1$ and $g(x)=\sqrt{x-2}$, find the compositions $f\circ g$ and $g\circ f$, and identify the domain of each.</span>
<span class="lang-vi">Cho $f(x)=x^2+1$ và $g(x)=\sqrt{x-2}$, tìm các hợp hàm $f\circ g$ và $g\circ f$, và xác định miền xác định của mỗi hàm.</span>
</div>

<div class="grid-2 mt-3">
<div class="box blue blur-step" v-click>
<div class="label">$f\circ g$</div>
<span class="lang-en">$(f\circ g)(x)=f\big(\sqrt{x-2}\big)=(\sqrt{x-2})^2+1=x-1.$ The inner $\sqrt{x-2}$ requires $x\ge 2$, so the domain is $[2,+\infty)$.</span>
<span class="lang-vi">$(f\circ g)(x)=f\big(\sqrt{x-2}\big)=(\sqrt{x-2})^2+1=x-1.$ Vì $\sqrt{x-2}$ cần $x\ge 2$ nên miền xác định là $[2,+\infty)$.</span>
</div>
<div class="box blue blur-step" v-click>
<div class="label">$g\circ f$</div>
<span class="lang-en">$(g\circ f)(x)=\sqrt{(x^2+1)-2}=\sqrt{x^2-1}.$ We need $x^2-1\ge 0$, so the domain is $(-\infty,-1]\cup[1,+\infty)$.</span>
<span class="lang-vi">$(g\circ f)(x)=\sqrt{(x^2+1)-2}=\sqrt{x^2-1}.$ Cần $x^2-1\ge 0$, nên miền xác định là $(-\infty,-1]\cup[1,+\infty)$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Note the domain of $f\circ g$ is <em>not</em> all of $\mathbb{R}$: although $x-1$ is defined everywhere, the composition inherits the restriction $x\ge2$ from $g$.</span>
<span class="lang-vi">Chú ý miền của $f\circ g$ <em>không</em> phải toàn $\mathbb{R}$: dù $x-1$ xác định khắp nơi, hợp hàm vẫn mang ràng buộc $x\ge2$ từ $g$.</span>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Indeterminate Limits and L'Hôpital</span><span class="lang-vi">Ôn nhanh: Giới hạn vô định và L'Hôpital</span>

<div class="grid-2">
<div class="thm">
<div class="tag"><span class="lang-en">L'Hôpital's Rule</span><span class="lang-vi">Quy tắc L'Hôpital</span></div>
<span class="lang-en">If $\lim \dfrac{f(x)}{g(x)}$ has the indeterminate form $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$, then</span>
<span class="lang-vi">Nếu $\lim \dfrac{f(x)}{g(x)}$ có dạng vô định $\dfrac{0}{0}$ hoặc $\dfrac{\infty}{\infty}$ thì</span>

$$
\lim \frac{f(x)}{g(x)}=\lim \frac{f'(x)}{g'(x)},
$$

<span class="lang-en">provided the right-hand limit exists.</span>
<span class="lang-vi">với điều kiện giới hạn ở vế phải tồn tại.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Two limits worth memorizing</span><span class="lang-vi">Hai giới hạn nên nhớ</span></div>

$$
\lim_{x\to0}\frac{\sin x}{x}=1,\qquad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12.
$$

<span class="lang-en">Combine algebra with these before reaching for L'Hôpital; they often finish faster.</span>
<span class="lang-vi">Kết hợp biến đổi đại số với chúng trước khi dùng L'Hôpital; thường sẽ nhanh hơn.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §4.4 (indeterminate forms and L'Hôpital); OpenStax Vol 1, §4.8.</span>
<span class="lang-vi">Đọc: Stewart §4.4 (dạng vô định và L'Hôpital); OpenStax Tập 1, §4.8.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 2 - An Indeterminate Limit</span><span class="lang-vi">Bài 2 - Một giới hạn vô định</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">Evaluate</span>
<span class="lang-vi">Tính</span>

$$
\lim_{x\to0}\left(\cot^2 x-\frac{1}{x^2}\right).
$$
</div>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Step 1 - combine into one fraction</span><span class="lang-vi">Bước 1 - gộp thành một phân thức</span></div>

$$
\cot^2 x-\frac{1}{x^2}=\frac{\cos^2 x}{\sin^2 x}-\frac{1}{x^2}=\frac{x^2\cos^2 x-\sin^2 x}{x^2\sin^2 x}.
$$

<span class="lang-en">As $x\to0$ both numerator and denominator tend to $0$: an indeterminate $\tfrac{0}{0}$.</span>
<span class="lang-vi">Khi $x\to0$, cả tử và mẫu đều tiến tới $0$: dạng vô định $\tfrac{0}{0}$.</span>
</div>

<div class="refs">
<span class="lang-en">Rewriting to a single fraction exposes the $\frac{0}{0}$ form; the denominator behaves like $x^4$ near $0$.</span>
<span class="lang-vi">Viết về một phân thức làm lộ dạng $\frac{0}{0}$; gần $0$ mẫu số có dáng điệu như $x^4$.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 2 - Finishing With L'Hôpital</span><span class="lang-vi">Bài 2 - Hoàn tất bằng L'Hôpital</span>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Step 2 - factor and split</span><span class="lang-vi">Bước 2 - phân tích và tách</span></div>
<span class="lang-en">Since $x^2\cos^2 x-\sin^2 x=(x\cos x-\sin x)(x\cos x+\sin x)$,</span>
<span class="lang-vi">Vì $x^2\cos^2 x-\sin^2 x=(x\cos x-\sin x)(x\cos x+\sin x)$,</span>

$$
\cot^2 x-\frac{1}{x^2}=\underbrace{\frac{x\cos x-\sin x}{x^3}}_{\to\,?}\cdot\underbrace{\frac{x\cos x+\sin x}{x}}_{\to\,2}\cdot\underbrace{\frac{x^2}{\sin^2 x}}_{\to\,1}.
$$
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Step 3 - the remaining factor</span><span class="lang-vi">Bước 3 - thừa số còn lại</span></div>
<span class="lang-en">The first factor is still $\tfrac{0}{0}$; apply L'Hôpital:</span>
<span class="lang-vi">Thừa số đầu vẫn là $\tfrac{0}{0}$; dùng L'Hôpital:</span>

$$
\lim_{x\to0}\frac{x\cos x-\sin x}{x^3}\overset{\text{L'H}}{=}\lim_{x\to0}\frac{-x\sin x}{3x^2}=\lim_{x\to0}\frac{-\sin x}{3x}=-\frac13.
$$

<span class="lang-en">Hence the limit is $\left(-\tfrac13\right)\cdot 2\cdot 1=-\dfrac{2}{3}.$</span>
<span class="lang-vi">Do đó giới hạn bằng $\left(-\tfrac13\right)\cdot 2\cdot 1=-\dfrac{2}{3}.$</span>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Continuity</span><span class="lang-vi">Ôn nhanh: Tính liên tục</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Continuity at a point</span><span class="lang-vi">Liên tục tại một điểm</span></div>
<span class="lang-en">$f$ is continuous at $a$ if</span>
<span class="lang-vi">$f$ liên tục tại $a$ nếu</span>

$$
\lim_{x\to a} f(x)=f(a),
$$

<span class="lang-en">that is, the limit exists and equals the value.</span>
<span class="lang-vi">nghĩa là giới hạn tồn tại và bằng giá trị của hàm.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Piecewise functions</span><span class="lang-vi">Hàm cho theo từng khúc</span></div>
<span class="lang-en">A piecewise function is continuous wherever each piece is. At a breakpoint $a$, continuity requires the one-sided limits and the value to agree: $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$.</span>
<span class="lang-vi">Hàm cho theo từng khúc liên tục ở mọi nơi mà từng khúc liên tục. Tại điểm nối $a$, tính liên tục đòi hỏi các giới hạn một phía và giá trị phải bằng nhau: $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §2.5 (continuity); OpenStax Vol 1, §2.4.</span>
<span class="lang-vi">Đọc: Stewart §2.5 (tính liên tục); OpenStax Tập 1, §2.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 3 - Continuity of a Piecewise Function</span><span class="lang-vi">Bài 3 - Tính liên tục của hàm từng khúc</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">A tax code charges $12\%$ on the first $20$ (million VND) of taxable income and $16\%$ on the remainder. Find constants $a$ and $b$ so that the tax liability</span>
<span class="lang-vi">Một biểu thuế tính $12\%$ trên $20$ (triệu VND) thu nhập chịu thuế đầu tiên và $16\%$ trên phần còn lại. Tìm hằng số $a$ và $b$ để số thuế phải nộp</span>

$$
T(x)=\begin{cases}0, & x\le 0\\ a+0.12x, & 0<x\le 20\\ b+0.16(x-20), & x>20\end{cases}
$$

<span class="lang-en">is continuous for all $x$.</span>
<span class="lang-vi">liên tục với mọi $x$.</span>
</div>

<div class="grid-2 mt-3">
<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">At $x=0$</span><span class="lang-vi">Tại $x=0$</span></div>
<span class="lang-en">Match the value $T(0)=0$: $\;a+0.12(0)=0$, so $a=0$.</span>
<span class="lang-vi">Khớp với giá trị $T(0)=0$: $\;a+0.12(0)=0$, nên $a=0$.</span>
</div>
<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">At $x=20$</span><span class="lang-vi">Tại $x=20$</span></div>
<span class="lang-en">Match the two formulas: $a+0.12(20)=b+0.16(0)$, giving $b=2.4$.</span>
<span class="lang-vi">Khớp hai công thức: $a+0.12(20)=b+0.16(0)$, suy ra $b=2.4$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Each piece is a polynomial, so it is continuous on its interval; only the breakpoints $x=0$ and $x=20$ can fail, which fixes $a$ and $b$.</span>
<span class="lang-vi">Mỗi khúc là đa thức nên liên tục trên khoảng của nó; chỉ các điểm nối $x=0$ và $x=20$ có thể hỏng, và điều đó xác định $a$ và $b$.</span>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Derivatives and Differentiability</span><span class="lang-vi">Ôn nhanh: Đạo hàm và tính khả vi</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Rules you will need</span><span class="lang-vi">Các quy tắc cần dùng</span></div>
<span class="lang-en">Product: $(uv)'=u'v+uv'$. Quotient: $\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$. Chain: $\big(f(g(x))\big)'=f'\big(g(x)\big)\,g'(x)$.</span>
<span class="lang-vi">Tích: $(uv)'=u'v+uv'$. Thương: $\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$. Hàm hợp: $\big(f(g(x))\big)'=f'\big(g(x)\big)\,g'(x)$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Two facts to reuse</span><span class="lang-vi">Hai điều nên nhớ</span></div>
<span class="lang-en">A tangent line is <strong>horizontal</strong> exactly where $f'(x)=0$. And $f$ fails to be <strong>differentiable</strong> where its graph has a corner, a cusp, a vertical tangent, or a break.</span>
<span class="lang-vi">Tiếp tuyến <strong>nằm ngang</strong> đúng tại nơi $f'(x)=0$. Và $f$ <strong>không khả vi</strong> ở nơi đồ thị có điểm gãy, điểm nhọn, tiếp tuyến thẳng đứng, hoặc điểm gián đoạn.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §2.8, §3.1-3.4; OpenStax Vol 1, §3.2-3.6.</span>
<span class="lang-vi">Đọc: Stewart §2.8, §3.1-3.4; OpenStax Tập 1, §3.2-3.6.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 4 - Where Is the Tangent Horizontal?</span><span class="lang-vi">Bài 4 - Tiếp tuyến nằm ngang ở đâu?</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">Find all points on the graph of $f(x)=2\sin x+\sin^2 x$ at which the tangent line is horizontal.</span>
<span class="lang-vi">Tìm tất cả các điểm trên đồ thị của $f(x)=2\sin x+\sin^2 x$ mà tại đó tiếp tuyến nằm ngang.</span>
</div>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Step 1 - set $f'(x)=0$</span><span class="lang-vi">Bước 1 - đặt $f'(x)=0$</span></div>

$$
f'(x)=2\cos x+2\sin x\cos x=2\cos x\,(1+\sin x)=0
\ \Rightarrow\ \cos x=0 \ \text{or}\ \sin x=-1.
$$
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Step 2 - solve and locate the points</span><span class="lang-vi">Bước 2 - giải và xác định các điểm</span></div>
<span class="lang-en">$\cos x=0\Rightarrow x=\tfrac{\pi}{2}+k\pi$; the case $\sin x=-1$ is already contained in this. The heights are $f=3$ at $x=\tfrac{\pi}{2}+2k\pi$ and $f=-1$ at $x=\tfrac{3\pi}{2}+2k\pi$ $(k\in\mathbb{Z})$.</span>
<span class="lang-vi">$\cos x=0\Rightarrow x=\tfrac{\pi}{2}+k\pi$; trường hợp $\sin x=-1$ đã nằm trong đó. Tung độ là $f=3$ tại $x=\tfrac{\pi}{2}+2k\pi$ và $f=-1$ tại $x=\tfrac{3\pi}{2}+2k\pi$ $(k\in\mathbb{Z})$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.1, §3.3; OpenStax Vol 1, §3.3, §3.5.</span>
<span class="lang-vi">Đọc: Stewart §3.1, §3.3; OpenStax Tập 1, §3.3, §3.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 5 - Points of Non-Differentiability</span><span class="lang-vi">Bài 5 - Các điểm không khả vi</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">Determine all values of $x$ at which $f(x)=\sqrt[3]{x^3-3x^2+2x}$ is not differentiable.</span>
<span class="lang-vi">Xác định tất cả giá trị $x$ mà tại đó $f(x)=\sqrt[3]{x^3-3x^2+2x}$ không khả vi.</span>
</div>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Differentiate with the chain rule</span><span class="lang-vi">Lấy đạo hàm bằng quy tắc hàm hợp</span></div>

$$
f(x)=(x^3-3x^2+2x)^{1/3}\ \Rightarrow\
f'(x)=\frac{1}{3}\cdot\frac{3x^2-6x+2}{\big(x(x-1)(x-2)\big)^{2/3}}.
$$
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Read off the bad points</span><span class="lang-vi">Đọc ra các điểm hỏng</span></div>
<span class="lang-en">The numerator is finite everywhere. The denominator vanishes at the roots of $x(x-1)(x-2)$, where $f'$ becomes infinite (vertical tangents). So $f$ is <strong>not differentiable</strong> at $x=0,\ 1,\ 2$.</span>
<span class="lang-vi">Tử số hữu hạn khắp nơi. Mẫu số triệt tiêu tại các nghiệm của $x(x-1)(x-2)$, nơi $f'$ trở nên vô hạn (tiếp tuyến thẳng đứng). Vậy $f$ <strong>không khả vi</strong> tại $x=0,\ 1,\ 2$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §2.8 (where a function is not differentiable); OpenStax Vol 1, §3.2.</span>
<span class="lang-vi">Đọc: Stewart §2.8 (khi nào hàm không khả vi); OpenStax Tập 1, §3.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Linear Approximation</span><span class="lang-vi">Ôn nhanh: Xấp xỉ tuyến tính</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Tangent-line approximation</span><span class="lang-vi">Xấp xỉ bằng tiếp tuyến</span></div>
<span class="lang-en">Near $x=a$, a differentiable $f$ is well approximated by its tangent line:</span>
<span class="lang-vi">Gần $x=a$, hàm khả vi $f$ được xấp xỉ tốt bởi tiếp tuyến của nó:</span>

$$
L(x)=f(a)+f'(a)(x-a),\qquad f(x)\approx L(x).
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Choosing the base point</span><span class="lang-vi">Chọn điểm gốc</span></div>
<span class="lang-en">Pick $a$ close to the target value and easy to evaluate (a point where $f$ and $f'$ are known exactly).</span>
<span class="lang-vi">Chọn $a$ gần giá trị cần tính và dễ tính (điểm mà $f$ và $f'$ đã biết chính xác).</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.10 (linear approximations); OpenStax Vol 1, §4.2.</span>
<span class="lang-vi">Đọc: Stewart §3.10 (xấp xỉ tuyến tính); OpenStax Tập 1, §4.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 6 - Linear Approximation</span><span class="lang-vi">Bài 6 - Xấp xỉ tuyến tính</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">Find the linear approximation to $f(x)=\cos x$ at $a=\tfrac{\pi}{3}$ and use it to estimate $\cos(1)$ (with $1$ in radians).</span>
<span class="lang-vi">Tìm xấp xỉ tuyến tính của $f(x)=\cos x$ tại $a=\tfrac{\pi}{3}$ và dùng nó để ước lượng $\cos(1)$ (với $1$ tính bằng radian).</span>
</div>

<div class="grid-2 mt-3">
<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Build $L$</span><span class="lang-vi">Lập $L$</span></div>
<span class="lang-en">With $f(a)=\cos\tfrac{\pi}{3}=\tfrac12$ and $f'(a)=-\sin\tfrac{\pi}{3}=-\tfrac{\sqrt3}{2}$,</span>
<span class="lang-vi">Với $f(a)=\cos\tfrac{\pi}{3}=\tfrac12$ và $f'(a)=-\sin\tfrac{\pi}{3}=-\tfrac{\sqrt3}{2}$,</span>

$$
L(x)=\frac12-\frac{\sqrt3}{2}\left(x-\frac{\pi}{3}\right).
$$
</div>
<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Estimate $\cos(1)$</span><span class="lang-vi">Ước lượng $\cos(1)$</span></div>
<span class="lang-en">Since $\tfrac{\pi}{3}\approx1.047$ is close to $1$,</span>
<span class="lang-vi">Vì $\tfrac{\pi}{3}\approx1.047$ gần $1$,</span>

$$
\cos(1)\approx L(1)=\frac12-\frac{\sqrt3}{2}\left(1-\frac{\pi}{3}\right)\approx 0.5409.
$$

<span class="lang-en">(True value $\cos 1\approx0.5403$.)</span>
<span class="lang-vi">(Giá trị đúng $\cos 1\approx0.5403$.)</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.10; OpenStax Vol 1, §4.2.</span>
<span class="lang-vi">Đọc: Stewart §3.10; OpenStax Tập 1, §4.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Rates of Change and Related Rates</span><span class="lang-vi">Ôn nhanh: Tốc độ biến thiên và tốc độ liên hệ</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">Derivative as a rate</span><span class="lang-vi">Đạo hàm là tốc độ</span></div>
<span class="lang-en">If $s(t)$ is position, then velocity is $s'(t)$ and speed is $|s'(t)|$.</span>
<span class="lang-vi">Nếu $s(t)$ là vị trí thì vận tốc là $s'(t)$ và tốc độ là $|s'(t)|$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Related-rates recipe</span><span class="lang-vi">Quy trình tốc độ liên hệ</span></div>
<span class="lang-en">(1) Name the quantities and their rates. (2) Find an equation relating them. (3) Differentiate both sides with respect to $t$. (4) Substitute the instant's values and solve for the unknown rate.</span>
<span class="lang-vi">(1) Đặt tên các đại lượng và tốc độ của chúng. (2) Tìm phương trình liên hệ. (3) Lấy đạo hàm hai vế theo $t$. (4) Thay giá trị tại thời điểm đó và giải ra tốc độ cần tìm.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.7, §3.9; OpenStax Vol 1, §3.4, §4.1.</span>
<span class="lang-vi">Đọc: Stewart §3.7, §3.9; OpenStax Tập 1, §3.4, §4.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 7 - Velocity of a Weight on a Spring</span><span class="lang-vi">Bài 7 - Vận tốc của vật treo trên lò xo</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">A weight hangs from a spring. Its displacement (in cm) at time $t$ (in s) after release is $u(t)=4\cos t$. Find the velocity at time $t$, and determine when the weight is moving fastest.</span>
<span class="lang-vi">Một vật treo trên lò xo. Độ dịch chuyển (cm) tại thời điểm $t$ (s) sau khi thả là $u(t)=4\cos t$. Tìm vận tốc tại thời điểm $t$, và xác định khi nào vật chuyển động nhanh nhất.</span>
</div>
<img src="./images/lo_xo_1.jpg" class="graph-img small" alt="Weight suspended from a spring">
</div>

<div class="box blue blur-step mt-2" v-click>
<div class="label"><span class="lang-en">Solution</span><span class="lang-vi">Lời giải</span></div>
<span class="lang-en">Velocity is the derivative of displacement: $u'(t)=-4\sin t$. Since $\sin t$ ranges over $[-1,1]$, the speed $|u'(t)|=4|\sin t|$ is largest, equal to $4$ cm/s, when $\sin t=\pm1$, i.e. $t=\tfrac{\pi}{2}+k\pi$. At those times $u(t)=0$: the weight moves fastest as it passes through its resting position.</span>
<span class="lang-vi">Vận tốc là đạo hàm của độ dịch chuyển: $u'(t)=-4\sin t$. Vì $\sin t$ nằm trong $[-1,1]$, tốc độ $|u'(t)|=4|\sin t|$ lớn nhất, bằng $4$ cm/s, khi $\sin t=\pm1$, tức $t=\tfrac{\pi}{2}+k\pi$. Tại các thời điểm đó $u(t)=0$: vật chuyển động nhanh nhất khi đi qua vị trí cân bằng.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.7 (rates of change in the natural sciences); OpenStax Vol 1, §3.4.</span>
<span class="lang-vi">Đọc: Stewart §3.7 (tốc độ biến thiên trong khoa học tự nhiên); OpenStax Tập 1, §3.4.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 8 - Related Rates: The Radar Gun</span><span class="lang-vi">Bài 8 - Tốc độ liên hệ: Súng radar</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">A car travels south at $50$ km/h, at a point $100$ km north of an intersection. A police car travels west at $40$ km/h, at a point $50$ km east of the same intersection. At that instant, what rate of change of the distance between the two cars does the police radar register?</span>
<span class="lang-vi">Một ô tô chạy về hướng nam với vận tốc $50$ km/h, tại điểm cách giao lộ $100$ km về phía bắc. Một xe cảnh sát chạy về hướng tây với vận tốc $40$ km/h, tại điểm cách giao lộ đó $50$ km về phía đông. Tại thời điểm ấy, radar của cảnh sát ghi nhận tốc độ biến thiên của khoảng cách giữa hai xe bằng bao nhiêu?</span>
</div>
<img src="./images/car_1.jpg" class="graph-img" alt="Two cars approaching an intersection">
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.9 (related rates); OpenStax Vol 1, §4.1.</span>
<span class="lang-vi">Đọc: Stewart §3.9 (tốc độ liên hệ); OpenStax Tập 1, §4.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 8 - Setting It Up</span><span class="lang-vi">Bài 8 - Thiết lập bài toán</span>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Name the quantities</span><span class="lang-vi">Đặt tên các đại lượng</span></div>
<span class="lang-en">Let $x$ be the police car's distance to the intersection, $y$ the other car's distance, and $z$ the distance between the two cars. Both cars approach the intersection, so their distances shrink:</span>
<span class="lang-vi">Gọi $x$ là khoảng cách từ xe cảnh sát đến giao lộ, $y$ khoảng cách của xe kia, và $z$ khoảng cách giữa hai xe. Cả hai xe đang tiến về giao lộ nên các khoảng cách giảm dần:</span>

$$
\frac{dx}{dt}=-40,\qquad \frac{dy}{dt}=-50\ \ (\text{km/h}).
$$

<span class="lang-en">We want $\dfrac{dz}{dt}$ at the instant $x=50,\ y=100$.</span>
<span class="lang-vi">Ta cần $\dfrac{dz}{dt}$ tại thời điểm $x=50,\ y=100$.</span>
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Relate them</span><span class="lang-vi">Liên hệ chúng</span></div>
<span class="lang-en">The two roads meet at a right angle, so by the Pythagorean theorem $\ z^2=x^2+y^2.$</span>
<span class="lang-vi">Hai con đường vuông góc, nên theo định lý Pythagoras $\ z^2=x^2+y^2.$</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.9; OpenStax Vol 1, §4.1.</span>
<span class="lang-vi">Đọc: Stewart §3.9; OpenStax Tập 1, §4.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 8 - Differentiate and Substitute</span><span class="lang-vi">Bài 8 - Lấy đạo hàm và thay số</span>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Differentiate with respect to $t$</span><span class="lang-vi">Lấy đạo hàm theo $t$</span></div>

$$
2z\frac{dz}{dt}=2x\frac{dx}{dt}+2y\frac{dy}{dt}
\ \Rightarrow\
\frac{dz}{dt}=\frac{1}{z}\left(x\frac{dx}{dt}+y\frac{dy}{dt}\right).
$$
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Plug in the instant</span><span class="lang-vi">Thay giá trị tại thời điểm đó</span></div>
<span class="lang-en">At $x=50,\ y=100$, $\ z=\sqrt{50^2+100^2}=50\sqrt5$, so</span>
<span class="lang-vi">Tại $x=50,\ y=100$, $\ z=\sqrt{50^2+100^2}=50\sqrt5$, nên</span>

$$
\frac{dz}{dt}=\frac{50(-40)+100(-50)}{50\sqrt5}=\frac{-7000}{50\sqrt5}=-\frac{140}{\sqrt5}\approx-62.6\ \text{km/h}.
$$

<span class="lang-en">The distance is decreasing; the radar registers about $62.6$ km/h.</span>
<span class="lang-vi">Khoảng cách đang giảm; radar ghi nhận khoảng $62.6$ km/h.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §3.9; OpenStax Vol 1, §4.1.</span>
<span class="lang-vi">Đọc: Stewart §3.9; OpenStax Tập 1, §4.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Recap: Analyzing a Curve</span><span class="lang-vi">Ôn nhanh: Khảo sát một đường cong</span>

<div class="grid-2">
<div class="defn">
<div class="tag"><span class="lang-en">The checklist</span><span class="lang-vi">Các bước</span></div>
<span class="lang-en">Domain; then $f'$ for increase/decrease and local extrema; then $f''$ for concavity and inflection points; then asymptotes (vertical, horizontal, slant); finally, sketch.</span>
<span class="lang-vi">Miền xác định; rồi $f'$ để xét tăng/giảm và cực trị; rồi $f''$ để xét lồi/lõm và điểm uốn; rồi tiệm cận (đứng, ngang, xiên); cuối cùng, vẽ đồ thị.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Asymptotes at a glance</span><span class="lang-vi">Tiệm cận nhìn nhanh</span></div>
<span class="lang-en">Vertical: where $f\to\pm\infty$ (often a zero of the denominator). Horizontal: $\lim_{x\to\pm\infty}f=L$. Slant: when the numerator's degree is one more than the denominator's.</span>
<span class="lang-vi">Đứng: nơi $f\to\pm\infty$ (thường là nghiệm của mẫu). Ngang: $\lim_{x\to\pm\infty}f=L$. Xiên: khi bậc tử lớn hơn bậc mẫu đúng một đơn vị.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §4.3, §4.5 (curve sketching); OpenStax Vol 1, §4.5-4.6.</span>
<span class="lang-vi">Đọc: Stewart §4.3, §4.5 (khảo sát hàm số); OpenStax Tập 1, §4.5-4.6.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 9 - Curve Sketching</span><span class="lang-vi">Bài 9 - Khảo sát hàm số</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Đề bài</span></div>
<span class="lang-en">Discuss $y=\dfrac{x^2-3}{x^3}$ with respect to increase/decrease, concavity, inflection points, local extrema, and asymptotes, and use this to sketch the curve.</span>
<span class="lang-vi">Khảo sát $y=\dfrac{x^2-3}{x^3}$ về tính tăng/giảm, lồi/lõm, điểm uốn, cực trị, và tiệm cận, rồi dùng kết quả để vẽ đồ thị.</span>
</div>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Domain and first derivative</span><span class="lang-vi">Miền xác định và đạo hàm cấp một</span></div>
<span class="lang-en">Domain: $x\ne0$. Writing $y=\dfrac1x-\dfrac{3}{x^3}$,</span>
<span class="lang-vi">Miền xác định: $x\ne0$. Viết $y=\dfrac1x-\dfrac{3}{x^3}$,</span>

$$
f'(x)=-\frac{1}{x^2}+\frac{9}{x^4}=\frac{9-x^2}{x^4}\ \Rightarrow\ f'(x)=0 \text{ at } x=\pm3.
$$
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §4.5; OpenStax Vol 1, §4.6.</span>
<span class="lang-vi">Đọc: Stewart §4.5; OpenStax Tập 1, §4.6.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 9 - Second Derivative and Signs</span><span class="lang-vi">Bài 9 - Đạo hàm cấp hai và dấu</span>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Second derivative</span><span class="lang-vi">Đạo hàm cấp hai</span></div>

$$
f''(x)=\frac{2}{x^3}-\frac{36}{x^5}=\frac{2(x^2-18)}{x^5}\ \Rightarrow\ f''(x)=0 \text{ at } x=\pm\sqrt{18}=\pm3\sqrt2.
$$
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Reading the sign of $f'$</span><span class="lang-vi">Đọc dấu của $f'$</span></div>
<span class="lang-en">Since $x^4>0$, $f'$ has the sign of $9-x^2$. So $f$ decreases on $(-\infty,-3)$, increases on $(-3,0)$ and $(0,3)$, and decreases on $(3,\infty)$: a local min at $x=-3$ and a local max at $x=3$.</span>
<span class="lang-vi">Vì $x^4>0$, dấu của $f'$ là dấu của $9-x^2$. Vậy $f$ giảm trên $(-\infty,-3)$, tăng trên $(-3,0)$ và $(0,3)$, và giảm trên $(3,\infty)$: cực tiểu tại $x=-3$ và cực đại tại $x=3$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §4.3 (what derivatives tell us); OpenStax Vol 1, §4.5.</span>
<span class="lang-vi">Đọc: Stewart §4.3 (đạo hàm cho ta biết gì); OpenStax Tập 1, §4.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 9 - Sign Chart</span><span class="lang-vi">Bài 9 - Bảng biến thiên</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">What the chart shows</span><span class="lang-vi">Bảng cho thấy điều gì</span></div>
<span class="lang-en">The signs of $f'$ (top) and $f''$ (bottom) organize the behavior: local min $\left(-3,-\tfrac29\right)$, local max $\left(3,\tfrac29\right)$, and inflection points at $x=\pm3\sqrt2$.</span>
<span class="lang-vi">Dấu của $f'$ (trên) và $f''$ (dưới) sắp xếp toàn bộ dáng điệu: cực tiểu $\left(-3,-\tfrac29\right)$, cực đại $\left(3,\tfrac29\right)$, và điểm uốn tại $x=\pm3\sqrt2$.</span>
</div>
<img src="./images/bbt.JPG" class="graph-img" alt="Sign chart of the first and second derivatives">
</div>

<div class="refs">
<span class="lang-en">CD = concave down, CU = concave up; the double bar marks the vertical asymptote $x=0$.</span>
<span class="lang-vi">CD = lõm xuống, CU = lồi lên; vạch đôi đánh dấu tiệm cận đứng $x=0$.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 9 - Asymptotes</span><span class="lang-vi">Bài 9 - Tiệm cận</span>

<div class="box blue blur-step" v-click>
<div class="label"><span class="lang-en">Vertical</span><span class="lang-vi">Tiệm cận đứng</span></div>
<span class="lang-en">As $x\to0^{+}$, $\ f=\dfrac{x^2-3}{x^3}\to\dfrac{-3}{0^{+}}=-\infty$; as $x\to0^{-}$, $\ f\to+\infty$. So $x=0$ is a vertical asymptote.</span>
<span class="lang-vi">Khi $x\to0^{+}$, $\ f=\dfrac{x^2-3}{x^3}\to\dfrac{-3}{0^{+}}=-\infty$; khi $x\to0^{-}$, $\ f\to+\infty$. Vậy $x=0$ là tiệm cận đứng.</span>
</div>

<div class="box gold blur-step" v-click>
<div class="label"><span class="lang-en">Horizontal (and slant)</span><span class="lang-vi">Tiệm cận ngang (và xiên)</span></div>
<span class="lang-en">$\displaystyle\lim_{x\to\pm\infty}\frac{x^2-3}{x^3}=\lim_{x\to\pm\infty}\left(\frac1x-\frac{3}{x^3}\right)=0$, so $y=0$ is a horizontal asymptote. There is no slant asymptote.</span>
<span class="lang-vi">$\displaystyle\lim_{x\to\pm\infty}\frac{x^2-3}{x^3}=\lim_{x\to\pm\infty}\left(\frac1x-\frac{3}{x^3}\right)=0$, nên $y=0$ là tiệm cận ngang. Không có tiệm cận xiên.</span>
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §4.5 (summary of curve sketching); OpenStax Vol 1, §4.6.</span>
<span class="lang-vi">Đọc: Stewart §4.5 (tóm tắt khảo sát hàm số); OpenStax Tập 1, §4.6.</span>
</div>

---
class: compact
---

# <span class="lang-en">Problem 9 - The Sketch</span><span class="lang-vi">Bài 9 - Đồ thị</span>

<div class="grid-2 align-center">
<div class="box blue">
<div class="label"><span class="lang-en">Putting it together</span><span class="lang-vi">Ghép lại</span></div>
<span class="lang-en">The curve falls to the local min $\left(-3,-\tfrac29\right)$, rises toward $+\infty$ at the asymptote $x=0$, re-emerges from $-\infty$, rises to the local max $\left(3,\tfrac29\right)$, then decays to $y=0$. Note $f$ is odd, so the graph is symmetric about the origin.</span>
<span class="lang-vi">Đường cong hạ xuống cực tiểu $\left(-3,-\tfrac29\right)$, đi lên $+\infty$ tại tiệm cận $x=0$, xuất hiện lại từ $-\infty$, lên cực đại $\left(3,\tfrac29\right)$, rồi giảm về $y=0$. Chú ý $f$ là hàm lẻ, nên đồ thị đối xứng qua gốc tọa độ.</span>
</div>
<img src="./images/do_thi_hs_1.jpg" class="graph-img" alt="Graph of y equals (x squared minus 3) over x cubed">
</div>

<div class="refs">
<span class="lang-en">Read: Stewart §4.5; OpenStax Vol 1, §4.6.</span>
<span class="lang-vi">Đọc: Stewart §4.5; OpenStax Tập 1, §4.6.</span>
</div>

---
class: compact
---

# <span class="lang-en">Before the Exam - Quick Checklist</span><span class="lang-vi">Trước kỳ thi - Danh mục kiểm tra nhanh</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Skills reviewed</span><span class="lang-vi">Các kỹ năng đã ôn</span></div>
<span class="lang-en">Composition and domains; indeterminate limits with L'Hôpital; continuity of piecewise functions; horizontal tangents and non-differentiable points; linear approximation; velocity and related rates; and a full curve analysis.</span>
<span class="lang-vi">Hợp hàm và miền xác định; giới hạn vô định với L'Hôpital; tính liên tục của hàm từng khúc; tiếp tuyến nằm ngang và điểm không khả vi; xấp xỉ tuyến tính; vận tốc và tốc độ liên hệ; và một bài khảo sát hàm số đầy đủ.</span>
</div>

<div class="grid-2 mt-3">
<div class="method-card">
<strong><span class="lang-en">Common slips</span><span class="lang-vi">Lỗi thường gặp</span></strong>
<span class="lang-en">Forgetting the domain a composition inherits; dropping the chain-rule factor; mixing up which distance is shrinking in related rates; ignoring one-sided limits at a breakpoint.</span>
<span class="lang-vi">Quên miền xác định mà hợp hàm thừa hưởng; bỏ sót thừa số của quy tắc hàm hợp; nhầm khoảng cách nào đang giảm trong tốc độ liên hệ; bỏ qua giới hạn một phía tại điểm nối.</span>
</div>
<div class="method-card">
<strong><span class="lang-en">Self-check</span><span class="lang-vi">Tự kiểm tra</span></strong>
<span class="lang-en">Can you state each answer with its units and reasoning, and redo every derivative from scratch? Before using L'Hôpital, confirm the form really is $\tfrac00$ or $\tfrac{\infty}{\infty}$.</span>
<span class="lang-vi">Bạn có thể nêu mỗi đáp án kèm đơn vị và lập luận, và làm lại mọi đạo hàm từ đầu không? Trước khi dùng L'Hôpital, hãy chắc chắn dạng thực sự là $\tfrac00$ hoặc $\tfrac{\infty}{\infty}$.</span>
</div>
</div>

---

# <span class="lang-en">Sources and Further Reading</span><span class="lang-vi">Nguồn và tài liệu đọc thêm</span>

<div class="box blue">
<div class="label"><span class="lang-en">Acknowledgment</span><span class="lang-vi">Lời cảm ơn</span></div>
<span class="lang-en">The nine problems in this review are adapted from a midterm review set by Dr. Lê Xuân Đại (HCMUT, Faculty of Applied Science, Department of Applied Mathematics). Explanations and section references follow Stewart, <em>Calculus</em>, and OpenStax, <em>Calculus Volume 1</em>.</span>
<span class="lang-vi">Chín bài tập trong phần ôn tập này được phỏng theo bộ ôn tập giữa kỳ của TS. Lê Xuân Đại (ĐHBK TP.HCM, Khoa Khoa học Ứng dụng, Bộ môn Toán Ứng dụng). Phần giải thích và tham chiếu mục theo Stewart, <em>Calculus</em>, và OpenStax, <em>Calculus Volume 1</em>.</span>
</div>

<div class="refs">
<span class="lang-en">Textbooks: Stewart, <em>Calculus</em>, Chapters 1-4; <a href="https://openstax.org/details/books/calculus-volume-1">OpenStax Calculus Volume 1</a>.</span>
<span class="lang-vi">Giáo trình: Stewart, <em>Calculus</em>, Chương 1-4; <a href="https://openstax.org/details/books/calculus-volume-1">OpenStax Calculus Tập 1</a>.</span>
</div>

