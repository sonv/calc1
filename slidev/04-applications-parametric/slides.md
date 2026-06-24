---
theme: default
title: "Calculus 1 - Applications And Parametric Curves"
info: "MT1003 Calculus 1, Lecture 04"
transition: slide-left
download: "../../pdfs/applications-parametric.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Applications And Parametric Curves</span><span class="lang-vi">Ứng dụng đạo hàm và đường cong tham số</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 04</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 04</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Topics: L'Hospital's rule, Taylor and Maclaurin expansions, function analysis, optimization, and parametric curves.</span>
<span class="lang-vi">Chủ đề: quy tắc L'Hospital, Taylor và Maclaurin, khảo sát hàm số, tối ưu, và đường cong tham số.</span>
</div>

---

# <span class="lang-en">Where We Are</span><span class="lang-vi">Chúng ta đang ở đâu</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">From local slope to global behavior</span><span class="lang-vi">Từ độ dốc cục bộ đến hình dáng toàn cục</span></div>
<span class="lang-en">Last time the derivative measured an instantaneous rate. Today we use it to compute difficult limits, approximate functions, locate extrema, sketch curves, and analyze paths given by a parameter.</span>
<span class="lang-vi">Buổi trước đạo hàm đo tốc độ thay đổi tức thời. Hôm nay ta dùng nó để tính giới hạn khó, xấp xỉ hàm, tìm cực trị, phác họa đồ thị, và khảo sát quỹ đạo cho bởi tham số.</span>
</div>

<div class="arc-row mt-4">
<div class="arc-step"><span class="pill">1</span><strong><span class="lang-en">Limits</span><span class="lang-vi">Giới hạn</span></strong><span class="lang-en">L'Hospital</span><span class="lang-vi">L'Hospital</span></div>
<div class="arc-step"><span class="pill">2</span><strong><span class="lang-en">Approximation</span><span class="lang-vi">Xấp xỉ</span></strong><span class="lang-en">Taylor and Maclaurin</span><span class="lang-vi">Taylor và Maclaurin</span></div>
<div class="arc-step"><span class="pill">3</span><strong><span class="lang-en">Shape</span><span class="lang-vi">Hình dáng</span></strong><span class="lang-en">Monotonicity, concavity</span><span class="lang-vi">Đơn điệu, lồi lõm</span></div>
<div class="arc-step"><span class="pill">4</span><strong><span class="lang-en">Optimization</span><span class="lang-vi">Tối ưu</span></strong><span class="lang-en">Model, differentiate, test</span><span class="lang-vi">Mô hình, lấy đạo hàm, kiểm tra</span></div>
<div class="arc-step"><span class="pill">5</span><strong><span class="lang-en">Parametric</span><span class="lang-vi">Tham số</span></strong><span class="lang-en">$x=f(t), y=g(t)$</span><span class="lang-vi">$x=f(t), y=g(t)$</span></div>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-20</span><span><span class="lang-en"><strong>L'Hospital's rule</strong> - indeterminate forms and transformations</span><span class="lang-vi"><strong>Quy tắc L'Hospital</strong> - dạng vô định và cách biến đổi</span></span></div>
<div class="tl-row"><span class="clock">20-55</span><span><span class="lang-en"><strong>Taylor and Maclaurin</strong> - formula, standard expansions, limit estimates</span><span class="lang-vi"><strong>Taylor và Maclaurin</strong> - công thức, khai triển chuẩn, ước lượng giới hạn</span></span></div>
<div class="tl-row disc"><span class="clock">55-72</span><span><span class="lang-en"><strong>Your turn</strong> - limits by L'Hospital and Taylor</span><span class="lang-vi"><strong>Đến lượt bạn</strong> - giới hạn bằng L'Hospital và Taylor</span></span></div>
<div class="tl-row break"><span class="clock">72-82</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row"><span class="clock">82-122</span><span><span class="lang-en"><strong>Curve sketching and optimization</strong> - first and second derivative tests</span><span class="lang-vi"><strong>Khảo sát đồ thị và tối ưu</strong> - xét đạo hàm cấp một và hai</span></span></div>
<div class="tl-row"><span class="clock">122-150</span><span><span class="lang-en"><strong>Parametric curves</strong> - slope, tangent, concavity</span><span class="lang-vi"><strong>Đường cong tham số</strong> - hệ số góc, tiếp tuyến, lồi lõm</span></span></div>
<div class="tl-row disc"><span class="clock">150-170</span><span><span class="lang-en"><strong>Mixed practice</strong> - one problem from each block</span><span class="lang-vi"><strong>Luyện tập tổng hợp</strong> - mỗi khối một bài</span></span></div>
</div>

---

# <span class="lang-en">Lecture Roadmap</span><span class="lang-vi">Mạch bài giảng</span>

<div class="grid-2">
<div>
<div class="box">
<div class="label"><span class="lang-en">Approximation and shape</span><span class="lang-vi">Xấp xỉ và hình dáng</span></div>
<ul>
<li><span class="lang-en">Taylor and Maclaurin expansions</span><span class="lang-vi">Khai triển Taylor và Maclaurin</span></li>
<li><span class="lang-en">Analysis of the function $y=f(x)$</span><span class="lang-vi">Khảo sát hàm số $y=f(x)$</span></li>
<li><span class="lang-en">Optimization applications</span><span class="lang-vi">Ứng dụng tối ưu hóa</span></li>
</ul>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">Parametric view</span><span class="lang-vi">Góc nhìn tham số</span></div>
<ul>
<li><span class="lang-en">Curves given by $x=f(t), y=g(t)$</span><span class="lang-vi">Đường cong cho bởi $x=f(t), y=g(t)$</span></li>
<li><span class="lang-en">Tangents, horizontal/vertical points, concavity</span><span class="lang-vi">Tiếp tuyến, điểm ngang/dọc, lồi lõm</span></li>
</ul>
</div>
</div>

<div>
<div class="thm">
<div class="tag"><span class="lang-en">Lecture 04 arc</span><span class="lang-vi">Mạch Bài giảng 04</span></div>
<span class="lang-en">The through-line is local derivative information: use it to evaluate limits, approximate functions, locate extrema, sketch curves, and describe parametric motion.</span>
<span class="lang-vi">Mạch chính là thông tin cục bộ từ đạo hàm: dùng nó để tính giới hạn, xấp xỉ hàm, tìm cực trị, phác họa đồ thị, và mô tả chuyển động tham số.</span>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Limit bridge</span><span class="lang-vi">Cầu nối giới hạn</span></div>
<span class="lang-en">L'Hospital's rule is not a replacement for algebra or Taylor. It is a quick derivative-based tool for limits whose first substitution gives an indeterminate form.</span>
<span class="lang-vi">Quy tắc L'Hospital không thay thế đại số hay Taylor. Nó là công cụ dựa trên đạo hàm để xử lý giới hạn mà phép thế đầu tiên cho dạng vô định.</span>
</div>
</div>
</div>

---

# <span class="lang-en">Indeterminate Forms</span><span class="lang-vi">Các dạng vô định</span>

<div class="box gold">
<div class="label"><span class="lang-en">A warning sign, not an answer</span><span class="lang-vi">Dấu hiệu cảnh báo, không phải đáp án</span></div>
<span class="lang-en">An indeterminate form means the first substitution does not decide the limit. More structure is needed.</span>
<span class="lang-vi">Dạng vô định nghĩa là phép thế trực tiếp chưa quyết định được giới hạn. Ta cần thêm cấu trúc.</span>
</div>

<div class="form-grid mt-4">
<div class="formula-card">$\dfrac{0}{0}$</div>
<div class="formula-card">$\dfrac{\infty}{\infty}$</div>
<div class="formula-card">$\infty-\infty$</div>
<div class="formula-card">$0\cdot\infty$</div>
<div class="formula-card">$1^\infty$</div>
<div class="formula-card">$\infty^0$</div>
<div class="formula-card">$0^0$</div>
</div>

<div class="refs">
<span class="lang-en">Most forms are first transformed into $0/0$ or $\infty/\infty$, then L'Hospital can apply.</span>
<span class="lang-vi">Phần lớn dạng vô định được đổi về $0/0$ hoặc $\infty/\infty$, rồi mới dùng L'Hospital.</span>
</div>

---

# <span class="lang-en">L'Hospital's Rule</span><span class="lang-vi">Quy tắc L'Hospital</span>

<div class="thm">
<div class="tag"><span class="lang-en">Theorem</span><span class="lang-vi">Định lý</span></div>
<span class="lang-en">Suppose $f$ and $g$ are differentiable near $a$, $g'(x)\ne0$, and substitution gives $0/0$ or $\infty/\infty$. If</span>
<span class="lang-vi">Giả sử $f$ và $g$ khả vi gần $a$, $g'(x)\ne0$, và phép thế cho dạng $0/0$ hoặc $\infty/\infty$. Nếu</span>

$$
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L,
$$

<span class="lang-en">then</span><span class="lang-vi">thì</span>

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=L.
$$
</div>

<div class="grid-3 mt-3">
<div class="box"><div class="label"><span class="lang-en">Also works</span><span class="lang-vi">Cũng dùng được</span></div><span class="lang-en">One-sided limits and limits as $x\to\pm\infty$.</span><span class="lang-vi">Giới hạn một phía và giới hạn khi $x\to\pm\infty$.</span></div>
<div class="box blue"><div class="label"><span class="lang-en">Can repeat</span><span class="lang-vi">Có thể lặp</span></div><span class="lang-en">If the derivative ratio is still indeterminate, apply again.</span><span class="lang-vi">Nếu tỉ số đạo hàm vẫn vô định, áp dụng lần nữa.</span></div>
<div class="caution"><div class="label"><span class="lang-en">Check first</span><span class="lang-vi">Kiểm tra trước</span></div><span class="lang-en">Do not use it on a non-indeterminate quotient.</span><span class="lang-vi">Không dùng cho thương không vô định.</span></div>
</div>

---

# <span class="lang-en">L'Hospital Example</span><span class="lang-vi">Ví dụ L'Hospital</span>

<div class="box gold">
<div class="label"><span class="lang-en">Compute</span><span class="lang-vi">Tính</span></div>

$$
\lim_{x\to0}\frac{\tan x-x}{x-\sin x}.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">First substitution</span><span class="lang-vi">Thế trực tiếp</span></div>

$$
\frac{\tan0-0}{0-\sin0}=\frac00.
$$

<span class="lang-en">So L'Hospital is allowed.</span>
<span class="lang-vi">Vì vậy được phép dùng L'Hospital.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Differentiate numerator and denominator</span><span class="lang-vi">Lấy đạo hàm tử và mẫu</span></div>

$$
\lim_{x\to0}\frac{\sec^2x-1}{1-\cos x}
=\lim_{x\to0}\frac{\tan^2x}{1-\cos x}.
$$
</div>
</div>

<div class="thm mt-3">
$$
\frac{\tan^2x}{1-\cos x}
=\frac{\sin^2x}{\cos^2x(1-\cos x)}
=\frac{1+\cos x}{\cos^2x}\longrightarrow 2.
$$
</div>

---

# <span class="lang-en">Transform The Other Forms</span><span class="lang-vi">Đổi các dạng còn lại</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Product $0\cdot\infty$</span><span class="lang-vi">Tích $0\cdot\infty$</span></div>
<span class="lang-en">Move one factor into the denominator.</span>
<span class="lang-vi">Đưa một thừa số xuống mẫu.</span>

$$
f(x)g(x)=\frac{f(x)}{1/g(x)} \quad\text{or}\quad \frac{g(x)}{1/f(x)}.
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Difference $\infty-\infty$</span><span class="lang-vi">Hiệu $\infty-\infty$</span></div>
<span class="lang-en">Combine terms using algebra: common denominator, conjugate, or logs.</span>
<span class="lang-vi">Gộp hạng tử bằng đại số: quy đồng, liên hợp, hoặc log.</span>

$$
\sqrt{x^2+x}-x=\frac{x}{\sqrt{x^2+x}+x}.
$$
</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Powers $1^\infty,\infty^0,0^0$</span><span class="lang-vi">Lũy thừa $1^\infty,\infty^0,0^0$</span></div>
<span class="lang-en">Let $y=u(x)^{v(x)}$. Then $\ln y=v(x)\ln u(x)$. Find $\lim \ln y=M$, then $\lim y=e^M$.</span>
<span class="lang-vi">Đặt $y=u(x)^{v(x)}$. Khi đó $\ln y=v(x)\ln u(x)$. Tìm $\lim \ln y=M$, rồi $\lim y=e^M$.</span>
</div>

<div class="refs">
<span class="lang-en">Example: $\displaystyle\lim_{x\to0^+}(1+\sin4x)^{\cot x}=e^4$ because $\cot x\,\ln(1+\sin4x)\to4$.</span>
<span class="lang-vi">Ví dụ: $\displaystyle\lim_{x\to0^+}(1+\sin4x)^{\cot x}=e^4$ vì $\cot x\,\ln(1+\sin4x)\to4$.</span>
</div>

---

# <span class="lang-en">Taylor's Formula</span><span class="lang-vi">Công thức Taylor</span>

<div class="thm">
<div class="tag"><span class="lang-en">Taylor polynomial near $x_0$</span><span class="lang-vi">Đa thức Taylor quanh $x_0$</span></div>
<span class="lang-en">If $f$ has derivatives up to order $n$ near $x_0$, then</span>
<span class="lang-vi">Nếu $f$ có đạo hàm đến cấp $n$ gần $x_0$, thì</span>

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
+o\!\left((x-x_0)^n\right).
$$
</div>

<div class="grid-2 mt-4">
<div class="box">
<div class="label"><span class="lang-en">Maclaurin</span><span class="lang-vi">Maclaurin</span></div>
<span class="lang-en">Taylor at $x_0=0$:</span>
<span class="lang-vi">Taylor tại $x_0=0$:</span>

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k+o(x^n).
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Why it matters</span><span class="lang-vi">Vì sao quan trọng</span></div>
<span class="lang-en">Taylor turns a smooth function into a polynomial near the point. Polynomials are easier to estimate, compare, and integrate later.</span>
<span class="lang-vi">Taylor biến một hàm trơn thành đa thức gần điểm xét. Đa thức dễ ước lượng, so sánh, và sau này dễ tích phân hơn.</span>
</div>
</div>

---

# <span class="lang-en">Maclaurin Expansions To Know</span><span class="lang-vi">Các khai triển Maclaurin cần nhớ</span>

<div class="formula-list">

<div class="series-row">
<div class="series-function">$e^x =$</div>
<div v-click class="series-answer blur-step">
$1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n)$
</div>
</div>

<div class="series-row">
<div class="series-function">$\sin x =$</div>
<div v-click class="series-answer blur-step">
$x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^m\frac{x^{2m+1}}{(2m+1)!}+o(x^{2m+2})$
</div>
</div>

<div class="series-row">
<div class="series-function">$\cos x =$</div>
<div v-click class="series-answer blur-step">
$1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^m\frac{x^{2m}}{(2m)!}+o(x^{2m+1})$
</div>
</div>

<div class="series-row">
<div class="series-function">$\ln(1+x) =$</div>
<div v-click class="series-answer blur-step">
$x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n)$
</div>
</div>

<div class="series-row series-row-tall">
<div class="series-function">$(1+x)^\alpha =$</div>
<div v-click class="series-answer series-answer-stack blur-step">
<div>$1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots$</div>
<div>$+\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+o(x^n)$</div>
</div>
</div>

</div>

<div class="refs">
<span class="lang-en">Start from the function, recall the series, then reveal to check. Use only as many terms as the denominator order demands.</span>
<span class="lang-vi">Nhìn hàm trước, tự nhớ chuỗi, rồi mở để kiểm tra. Chỉ lấy đủ số hạng theo bậc của mẫu số.</span>
</div>

---

# <span class="lang-en">Example: A Taylor Limit</span><span class="lang-vi">Ví dụ: giới hạn bằng Taylor</span>

<div class="box gold">
<div class="label"><span class="lang-en">Compute</span><span class="lang-vi">Tính</span></div>

$$
\lim_{x\to0}\frac{\cos x-1+\frac{x^2}{2}}{x^4}.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Expansion</span><span class="lang-vi">Khai triển</span></div>

$$
\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4).
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Cancel the lower terms</span><span class="lang-vi">Triệt tiêu các hạng bậc thấp</span></div>

$$
\cos x-1+\frac{x^2}{2}
=\frac{x^4}{24}+o(x^4).
$$
</div>
</div>

<div class="thm mt-3 center">
$$
\lim_{x\to0}\frac{\frac{x^4}{24}+o(x^4)}{x^4}=\frac{1}{24}.
$$
</div>

---

# <span class="lang-en">Choosing A Limit Tool</span><span class="lang-vi">Chọn công cụ tính giới hạn</span>

<div class="grid-3">
<div class="box">
<div class="label"><span class="lang-en">Algebra first</span><span class="lang-vi">Đại số trước</span></div>
<span class="lang-en">Factor, cancel, rationalize, use identities, or divide by the dominant power.</span>
<span class="lang-vi">Phân tích nhân tử, rút gọn, nhân liên hợp, dùng đồng nhất thức, hoặc chia bậc cao nhất.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">L'Hospital</span><span class="lang-vi">L'Hospital</span></div>
<span class="lang-en">Fast when the limit is a quotient of type $0/0$ or $\infty/\infty$ after transformation.</span>
<span class="lang-vi">Nhanh khi giới hạn là thương dạng $0/0$ hoặc $\infty/\infty$ sau khi biến đổi.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Taylor</span><span class="lang-vi">Taylor</span></div>
<span class="lang-en">Best when cancellation order matters, or when several small functions interact.</span>
<span class="lang-vi">Tốt khi cần biết bậc triệt tiêu, hoặc khi nhiều hàm bé tương tác.</span>
</div>
</div>

<div class="your-turn mt-4">
<span class="timechip">4 min</span>
<div class="label"><span class="lang-en">Quick comparison</span><span class="lang-vi">So sánh nhanh</span></div>
<span class="lang-en">Which method would you try first for each limit?</span>
<span class="lang-vi">Bạn sẽ thử phương pháp nào trước cho mỗi giới hạn?</span>

$$
\lim_{x\to0}\frac{e^x-1-x}{x^2},
\qquad
\lim_{x\to\infty}\frac{\ln x}{x},
\qquad
\lim_{x\to0}\frac{\tan x-\sin x}{x^3}.
$$
</div>

---

# <span class="lang-en">Function Analysis Roadmap</span><span class="lang-vi">Lộ trình khảo sát hàm số</span>

<div class="box gold">
<div class="label"><span class="lang-en">Goal</span><span class="lang-vi">Mục tiêu</span></div>
<span class="lang-en">Use derivative information to sketch the graph and answer optimization questions.</span>
<span class="lang-vi">Dùng thông tin đạo hàm để phác họa đồ thị và trả lời bài toán tối ưu.</span>
</div>

<div class="grid-2 mt-4">
<div class="box">
<ol>
<li><span class="lang-en">Find the domain and symmetries.</span><span class="lang-vi">Tìm miền xác định và đối xứng.</span></li>
<li><span class="lang-en">Compute intercepts and important limits.</span><span class="lang-vi">Tìm giao điểm và các giới hạn quan trọng.</span></li>
<li><span class="lang-en">Find vertical, horizontal, or oblique asymptotes.</span><span class="lang-vi">Tìm tiệm cận đứng, ngang, xiên.</span></li>
</ol>
</div>
<div class="box blue">
<ol start="4">
<li><span class="lang-en">Use $f'$ for monotonicity and extrema.</span><span class="lang-vi">Dùng $f'$ để xét đơn điệu và cực trị.</span></li>
<li><span class="lang-en">Use $f''$ for concavity and inflection.</span><span class="lang-vi">Dùng $f''$ để xét lồi lõm và điểm uốn.</span></li>
<li><span class="lang-en">Assemble a clean sign chart and sketch.</span><span class="lang-vi">Lập bảng dấu/bảng biến thiên và vẽ đồ thị.</span></li>
</ol>
</div>
</div>

---

# <span class="lang-en">First Derivative Test</span><span class="lang-vi">Kiểm tra bằng đạo hàm cấp một</span>

<div class="thm">
<div class="tag"><span class="lang-en">Critical points</span><span class="lang-vi">Điểm tới hạn</span></div>
<span class="lang-en">A number $c$ in the domain is critical if $f'(c)=0$ or $f'(c)$ does not exist.</span>
<span class="lang-vi">Một điểm $c$ trong miền xác định là điểm tới hạn nếu $f'(c)=0$ hoặc $f'(c)$ không tồn tại.</span>
</div>

<div class="grid-3 mt-4">
<div class="box">
<div class="label"><span class="lang-en">Increasing</span><span class="lang-vi">Tăng</span></div>
<span class="lang-en">If $f'(x)>0$ on an interval, $f$ is increasing there.</span>
<span class="lang-vi">Nếu $f'(x)>0$ trên một khoảng, $f$ tăng trên khoảng đó.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Decreasing</span><span class="lang-vi">Giảm</span></div>
<span class="lang-en">If $f'(x)<0$ on an interval, $f$ is decreasing there.</span>
<span class="lang-vi">Nếu $f'(x)<0$ trên một khoảng, $f$ giảm trên khoảng đó.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Local extrema</span><span class="lang-vi">Cực trị địa phương</span></div>
<span class="lang-en">$+$ to $-$ gives a local maximum. $-$ to $+$ gives a local minimum.</span>
<span class="lang-vi">$+$ sang $-$ cho cực đại. $-$ sang $+$ cho cực tiểu.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Always test signs on intervals, not just at the critical point itself.</span>
<span class="lang-vi">Luôn xét dấu trên các khoảng, không chỉ tại chính điểm tới hạn.</span>
</div>

---

# <span class="lang-en">Second Derivative Test</span><span class="lang-vi">Kiểm tra bằng đạo hàm cấp hai</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Concavity</span><span class="lang-vi">Tính lồi lõm</span></div>
<ul>
<li><span class="lang-en">$f''(x)>0$: graph is concave up.</span><span class="lang-vi">$f''(x)>0$: đồ thị lõm lên.</span></li>
<li><span class="lang-en">$f''(x)<0$: graph is concave down.</span><span class="lang-vi">$f''(x)<0$: đồ thị lõm xuống.</span></li>
</ul>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Inflection point</span><span class="lang-vi">Điểm uốn</span></div>
<span class="lang-en">An inflection point is where concavity changes sign, provided the point is on the graph.</span>
<span class="lang-vi">Điểm uốn là nơi tính lồi lõm đổi dấu, với điều kiện điểm đó thuộc đồ thị.</span>
</div>
</div>

<div class="thm mt-4">
<div class="tag"><span class="lang-en">Second derivative test for extrema</span><span class="lang-vi">Tiêu chuẩn đạo hàm cấp hai cho cực trị</span></div>
<span class="lang-en">If $f'(c)=0$ and $f''(c)>0$, then $f$ has a local minimum at $c$. If $f''(c)<0$, then $f$ has a local maximum at $c$. If $f''(c)=0$, the test is inconclusive.</span>
<span class="lang-vi">Nếu $f'(c)=0$ và $f''(c)>0$, thì $f$ có cực tiểu tại $c$. Nếu $f''(c)<0$, thì $f$ có cực đại tại $c$. Nếu $f''(c)=0$, tiêu chuẩn chưa kết luận.</span>
</div>

---

# <span class="lang-en">Optimization Workflow</span><span class="lang-vi">Quy trình tối ưu hóa</span>

<div class="grid-4">
<div class="kpi"><span class="pill">1</span><strong><span class="lang-en">Model</span><span class="lang-vi">Mô hình</span></strong><span class="lang-en">Draw, name variables, write the objective.</span><span class="lang-vi">Vẽ hình, đặt biến, viết đại lượng cần tối ưu.</span></div>
<div class="kpi"><span class="pill">2</span><strong><span class="lang-en">Constraint</span><span class="lang-vi">Ràng buộc</span></strong><span class="lang-en">Use the given data to reduce to one variable.</span><span class="lang-vi">Dùng dữ kiện để đưa về một biến.</span></div>
<div class="kpi"><span class="pill">3</span><strong><span class="lang-en">Differentiate</span><span class="lang-vi">Lấy đạo hàm</span></strong><span class="lang-en">Find critical points inside the feasible interval.</span><span class="lang-vi">Tìm điểm tới hạn trong miền khả thi.</span></div>
<div class="kpi"><span class="pill">4</span><strong><span class="lang-en">Verify</span><span class="lang-vi">Kiểm tra</span></strong><span class="lang-en">Compare endpoints or use derivative signs.</span><span class="lang-vi">So sánh biên hoặc xét dấu đạo hàm.</span></div>
</div>

<div class="caution mt-4">
<div class="label"><span class="lang-en">Common pitfall</span><span class="lang-vi">Lỗi hay gặp</span></div>
<span class="lang-en">A critical point is only a candidate. The real maximum/minimum must also respect the domain and endpoints.</span>
<span class="lang-vi">Điểm tới hạn chỉ là ứng viên. Giá trị lớn nhất/nhỏ nhất thật sự còn phải thỏa miền xác định và xét cả biên.</span>
</div>

---

# <span class="lang-en">Example: Maximum Area</span><span class="lang-vi">Ví dụ: diện tích lớn nhất</span>

<div class="box gold">
<div class="label"><span class="lang-en">Problem</span><span class="lang-vi">Bài toán</span></div>
<span class="lang-en">A rectangular field has perimeter $100$ m. Which dimensions maximize the area?</span>
<span class="lang-vi">Một mảnh đất hình chữ nhật có chu vi $100$ m. Kích thước nào cho diện tích lớn nhất?</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Model</span><span class="lang-vi">Mô hình</span></div>
<span class="lang-en">Let the sides be $x$ and $y$.</span>
<span class="lang-vi">Gọi hai cạnh là $x$ và $y$.</span>

$$
2x+2y=100 \Rightarrow y=50-x.
$$

$$
A(x)=x(50-x),\qquad 0\le x\le50.
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Differentiate and test</span><span class="lang-vi">Lấy đạo hàm và kiểm tra</span></div>

$$
A'(x)=50-2x.
$$

<span class="lang-en">$A'(x)=0$ gives $x=25$, so $y=25$.</span>
<span class="lang-vi">$A'(x)=0$ cho $x=25$, nên $y=25$.</span>

$$
A''(x)=-2<0.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">The maximum area occurs for a square: $25\text{ m}\times25\text{ m}$.</span>
<span class="lang-vi">Diện tích lớn nhất đạt được khi là hình vuông: $25\text{ m}\times25\text{ m}$.</span>
</div>

---

# <span class="lang-en">Parametric Curves</span><span class="lang-vi">Đường cong tham số</span>

<div class="grid-2 align-center">
<div>
<div class="defn">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">A plane curve can be described by</span>
<span class="lang-vi">Một đường cong phẳng có thể được mô tả bởi</span>

$$
x=f(t),\qquad y=g(t),\qquad t\in I.
$$

<span class="lang-en">The parameter $t$ often represents time. Each value of $t$ gives a point $(x,y)$ on the curve.</span>
<span class="lang-vi">Tham số $t$ thường biểu diễn thời gian. Mỗi giá trị của $t$ cho một điểm $(x,y)$ trên đường cong.</span>
</div>
<div class="box gold mt-3">
<div class="label"><span class="lang-en">Key shift</span><span class="lang-vi">Điểm thay đổi chính</span></div>
<span class="lang-en">The curve may fail the vertical line test, but the motion $(f(t),g(t))$ is still perfectly meaningful.</span>
<span class="lang-vi">Đường cong có thể không qua kiểm tra đường thẳng đứng, nhưng chuyển động $(f(t),g(t))$ vẫn hoàn toàn có nghĩa.</span>
</div>
</div>
<div>
<img src="./images/parametric_curve.png" class="graph-img tall" alt="A parametric curve with arrows and point x equals f t, y equals g t">
</div>
</div>

---

# <span class="lang-en">Example: The Cycloid</span><span class="lang-vi">Ví dụ: đường cycloid</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Rolling circle</span><span class="lang-vi">Đường tròn lăn</span></div>
<span class="lang-en">A point on a circle of radius $r$ rolling along a line traces a cycloid:</span>
<span class="lang-vi">Một điểm trên đường tròn bán kính $r$ lăn trên đường thẳng vạch ra cycloid:</span>

$$
x=r(\theta-\sin\theta),\qquad
y=r(1-\cos\theta).
$$
</div>
<div class="box mt-3">
<span class="lang-en">The parameter $\theta$ is the angle of rotation. The arrows show the direction of increasing $\theta$.</span>
<span class="lang-vi">Tham số $\theta$ là góc quay. Mũi tên cho biết chiều tăng của $\theta$.</span>
</div>
</div>
<div>
<img src="./images/cycloid.jpg" class="graph-img wide-img" alt="Cycloid generated by a rolling circle">
</div>
</div>

---

# <span class="lang-en">Slope Of A Parametric Curve</span><span class="lang-vi">Hệ số góc của đường cong tham số</span>

<div class="thm">
<div class="tag"><span class="lang-en">Chain rule</span><span class="lang-vi">Quy tắc hàm hợp</span></div>
<span class="lang-en">If $x=f(t)$ and $y=g(t)$ are differentiable and $dx/dt\ne0$, then</span>
<span class="lang-vi">Nếu $x=f(t)$ và $y=g(t)$ khả vi và $dx/dt\ne0$, thì</span>

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{g'(t)}{f'(t)}.
$$
</div>

<div class="grid-2 mt-4">
<div class="box">
<div class="label"><span class="lang-en">Horizontal tangent</span><span class="lang-vi">Tiếp tuyến ngang</span></div>
<span class="lang-en">$dy/dt=0$ and $dx/dt\ne0$.</span>
<span class="lang-vi">$dy/dt=0$ và $dx/dt\ne0$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Vertical tangent</span><span class="lang-vi">Tiếp tuyến đứng</span></div>
<span class="lang-en">$dx/dt=0$ and $dy/dt\ne0$.</span>
<span class="lang-vi">$dx/dt=0$ và $dy/dt\ne0$.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">This formula is the parametric version of slope as "rise over run".</span>
<span class="lang-vi">Công thức này là phiên bản tham số của hệ số góc: "độ tăng $y$ chia độ tăng $x$".</span>
</div>

---

# <span class="lang-en">Second Derivative In Parametric Form</span><span class="lang-vi">Đạo hàm cấp hai dạng tham số</span>

<div class="thm">
<div class="tag"><span class="lang-en">Concavity</span><span class="lang-vi">Tính lồi lõm</span></div>
<span class="lang-en">After computing $dy/dx$ as a function of $t$, differentiate with respect to $x$:</span>
<span class="lang-vi">Sau khi tính $dy/dx$ theo $t$, lấy đạo hàm theo $x$:</span>

$$
\frac{d^2y}{dx^2}
=\frac{d}{dx}\left(\frac{dy}{dx}\right)
=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}.
$$
</div>

<div class="grid-2 mt-4">
<div class="box">
<div class="label"><span class="lang-en">Interpretation</span><span class="lang-vi">Ý nghĩa</span></div>
<span class="lang-en">The sign of $d^2y/dx^2$ describes concavity with respect to the $x$ direction.</span>
<span class="lang-vi">Dấu của $d^2y/dx^2$ mô tả lồi lõm theo hướng trục $x$.</span>
</div>
<div class="caution">
<div class="label"><span class="lang-en">Careful</span><span class="lang-vi">Cẩn thận</span></div>
<span class="lang-en">Do not compute $d^2y/dx^2$ by simply dividing $d^2y/dt^2$ by $d^2x/dt^2$.</span>
<span class="lang-vi">Không tính $d^2y/dx^2$ bằng cách chia $d^2y/dt^2$ cho $d^2x/dt^2$.</span>
</div>
</div>

---

# <span class="lang-en">Worked Parametric Example</span><span class="lang-vi">Ví dụ tham số đã giải</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Curve</span><span class="lang-vi">Đường cong</span></div>

$$
x=t^2,\qquad y=t^3-3t.
$$
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Slope</span><span class="lang-vi">Hệ số góc</span></div>

$$
\frac{dy}{dx}=\frac{3t^2-3}{2t}=\frac{3(t^2-1)}{2t}.
$$

<ul>
<li><span class="lang-en">Horizontal tangents: $t=\pm1$ at $(1,-2)$ and $(1,2)$.</span><span class="lang-vi">Tiếp tuyến ngang: $t=\pm1$ tại $(1,-2)$ và $(1,2)$.</span></li>
<li><span class="lang-en">Vertical tangent: $t=0$ at $(0,0)$.</span><span class="lang-vi">Tiếp tuyến đứng: $t=0$ tại $(0,0)$.</span></li>
</ul>
</div>
</div>
<div>
<img src="./images/tangents.png" class="graph-img tall" alt="Parametric curve with horizontal and vertical tangent information">
</div>
</div>

---

# <span class="lang-en">Parametric Concavity Example</span><span class="lang-vi">Ví dụ lồi lõm tham số</span>

<div class="box gold">
<div class="label"><span class="lang-en">Same curve</span><span class="lang-vi">Cùng đường cong</span></div>

$$
x=t^2,\qquad y=t^3-3t,\qquad
\frac{dy}{dx}=\frac{3(t^2-1)}{2t}.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Differentiate</span><span class="lang-vi">Lấy đạo hàm</span></div>
<span class="lang-en">Differentiate $\frac{dy}{dx}$ with respect to $t$.</span>
<span class="lang-vi">Lấy đạo hàm $\frac{dy}{dx}$ theo $t$.</span>

$$
\frac{d}{dt}\left(\frac{dy}{dx}\right)
=\frac{3}{2}\left(1+\frac{1}{t^2}\right).
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Divide</span><span class="lang-vi">Chia</span></div>
<span class="lang-en">Divide by $dx/dt=2t$.</span>
<span class="lang-vi">Chia cho $dx/dt=2t$.</span>

$$
\frac{d^2y}{dx^2}
=\frac{3(t^2+1)}{4t^3}.
$$
</div>
</div>

<div class="thm mt-3">
<span class="lang-en">The curve is concave down for $t<0$ and concave up for $t>0$.</span>
<span class="lang-vi">Đường cong lõm xuống khi $t<0$ và lõm lên khi $t>0$.</span>
</div>

---

# <span class="lang-en">Your Turn A: L'Hospital</span><span class="lang-vi">Đến lượt bạn A: L'Hospital</span>

<div class="your-turn">
<span class="timechip">10 min</span>
<div class="label"><span class="lang-en">Check the form first</span><span class="lang-vi">Kiểm tra dạng trước</span></div>
<ol>
<li>$\displaystyle \lim_{x\to2}\frac{x^2-4}{x^2-x-2}$</li>
<li>$\displaystyle \lim_{x\to1}\frac{x^5-1}{2x^3-x-1}$</li>
<li>$\displaystyle \lim_{x\to0}\frac{\sin x-x\cos x}{\sin^3x}$</li>
<li>$\displaystyle \lim_{x\to0^+}x^x$</li>
</ol>
</div>

<div class="refs">
<span class="lang-en">Check the indeterminate form before applying the rule.</span>
<span class="lang-vi">Kiểm tra dạng vô định trước khi dùng quy tắc.</span>
</div>

---

# <span class="lang-en">Your Turn B: Taylor And Maclaurin</span><span class="lang-vi">Đến lượt bạn B: Taylor và Maclaurin</span>

<div class="your-turn">
<span class="timechip">12 min</span>
<div class="label"><span class="lang-en">Use the shortest expansion that answers the question</span><span class="lang-vi">Dùng khai triển ngắn nhất đủ trả lời câu hỏi</span></div>
<ol>
<li><span class="lang-en">Find the Maclaurin expansion of $f(x)=\ln^2(1+x)$ up to degree $3$.</span><span class="lang-vi">Tìm khai triển Maclaurin của $f(x)=\ln^2(1+x)$ đến cấp $3$.</span></li>
<li><span class="lang-en">Find the Maclaurin expansion of $f(x)=x\sin x$ up to degree $4$.</span><span class="lang-vi">Tìm khai triển Maclaurin của $f(x)=x\sin x$ đến cấp $4$.</span></li>
<li><span class="lang-en">Find the Maclaurin expansion of $f(x)=e^{\sin x}$ up to degree $3$.</span><span class="lang-vi">Tìm khai triển Maclaurin của $f(x)=e^{\sin x}$ đến cấp $3$.</span></li>
<li>$\displaystyle \lim_{x\to0}\frac{1-\frac{x^2}{2}-\cos x}{x^4+4x^5}$</li>
</ol>
</div>

---

# <span class="lang-en">Your Turn C: Shape And Optimization</span><span class="lang-vi">Đến lượt bạn C: đồ thị và tối ưu</span>

<div class="grid-2">
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Extrema</span><span class="lang-vi">Cực trị</span></div>
<span class="lang-en">Find the local extrema of $y=\dfrac{1+3x}{\sqrt{4+x^2}}$.</span>
<span class="lang-vi">Tìm cực trị của $y=\dfrac{1+3x}{\sqrt{4+x^2}}$.</span>
</div>
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Monotonicity</span><span class="lang-vi">Tính đơn điệu</span></div>
<span class="lang-en">Determine where $y=\dfrac{e^x}{x}$ is increasing or decreasing.</span>
<span class="lang-vi">Khảo sát tính đơn điệu của $y=\dfrac{e^x}{x}$.</span>
</div>
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Absolute extrema</span><span class="lang-vi">GTLN, GTNN</span></div>
<span class="lang-en">Find the maximum and minimum of $y=(x-3)^2e^{-x}$ on $[-1,4]$.</span>
<span class="lang-vi">Tìm GTLN, GTNN của $y=(x-3)^2e^{-x}$ trên $[-1,4]$.</span>
</div>
<div class="your-turn">
<span class="timechip">10 min</span>
<div class="label"><span class="lang-en">Applied optimization</span><span class="lang-vi">Tối ưu ứng dụng</span></div>
<span class="lang-en">A farmer has $2400$ ft of fencing for a rectangular field beside a straight river. No fence is needed along the river. Maximize the area.</span>
<span class="lang-vi">Một nông dân có $2400$ ft hàng rào cho mảnh đất chữ nhật sát sông thẳng. Không cần rào phía sông. Hãy tối đa hóa diện tích.</span>
</div>
</div>

---

# <span class="lang-en">Your Turn D: Parametric Curves</span><span class="lang-vi">Đến lượt bạn D: đường cong tham số</span>

<div class="your-turn">
<span class="timechip">12 min</span>
<div class="label"><span class="lang-en">Parametric practice</span><span class="lang-vi">Luyện tập tham số</span></div>
<span class="lang-en">For the curve</span><span class="lang-vi">Với đường cong</span>

$$
x=t^2,\qquad y=t^3-3t,
$$

<ol>
<li><span class="lang-en">show that the curve has two tangents at $(3,0)$ and find them;</span><span class="lang-vi">chứng minh đường cong có hai tiếp tuyến tại $(3,0)$ và tìm chúng;</span></li>
<li><span class="lang-en">find horizontal and vertical tangents;</span><span class="lang-vi">tìm tiếp tuyến ngang và đứng;</span></li>
<li><span class="lang-en">determine where the curve is concave up or down.</span><span class="lang-vi">xác định nơi đường cong lõm lên hoặc lõm xuống.</span></li>
</ol>
</div>

---

# <span class="lang-en">Wrap-Up</span><span class="lang-vi">Tổng kết</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Tools added today</span><span class="lang-vi">Công cụ hôm nay</span></div>
<ul>
<li><span class="lang-en">L'Hospital for $0/0$ and $\infty/\infty$ forms</span><span class="lang-vi">L'Hospital cho dạng $0/0$ và $\infty/\infty$</span></li>
<li><span class="lang-en">Taylor/Maclaurin for local polynomial approximations</span><span class="lang-vi">Taylor/Maclaurin cho xấp xỉ đa thức cục bộ</span></li>
<li><span class="lang-en">Derivative tests for graph shape and optimization</span><span class="lang-vi">Các tiêu chuẩn đạo hàm cho đồ thị và tối ưu</span></li>
<li><span class="lang-en">Parametric slope and concavity formulas</span><span class="lang-vi">Công thức hệ số góc và lồi lõm dạng tham số</span></li>
</ul>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Next lecture</span><span class="lang-vi">Bài giảng tiếp theo</span></div>
<span class="lang-en">We begin integration: antiderivatives, substitution, and integration by parts.</span>
<span class="lang-vi">Ta bắt đầu tích phân: nguyên hàm, đổi biến, và tích phân từng phần.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Review: your notes for Lecture 04 plus the course reading map for applications of derivatives and parametric curves.</span>
<span class="lang-vi">Ôn tập: ghi chú Bài giảng 04 và bản đồ đọc của môn học về ứng dụng đạo hàm và đường cong tham số.</span>
</div>
