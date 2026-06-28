---
theme: default
title: "Calculus 1 - Integration Foundations"
info: "MT1003 Calculus 1, Lecture 05"
transition: slide-left
download: "../../pdfs/integration-foundations.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">Integration Foundations</span><span class="lang-vi">Cơ sở tích phân</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 05</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 05</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Topics: antiderivatives, indefinite integrals, substitution, integration by parts, Riemann sums, definite integrals, and the Fundamental Theorem of Calculus.</span>
<span class="lang-vi">Chủ đề: nguyên hàm, tích phân bất định, đổi biến, tích phân từng phần, tổng Riemann, tích phân xác định, và định lý cơ bản của giải tích.</span>
</div>

---

# <span class="lang-en">Where We Are</span><span class="lang-vi">Chúng ta đang ở đâu</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">From rate to total</span><span class="lang-vi">Từ tốc độ đến tổng lượng</span></div>
<span class="lang-en">Derivatives turn a function into a rate of change. Integration starts with the reverse question: if we know the rate, how do we recover the total?</span>
<span class="lang-vi">Đạo hàm biến một hàm thành tốc độ thay đổi. Tích phân bắt đầu với câu hỏi ngược: nếu biết tốc độ, làm sao khôi phục tổng lượng?</span>
</div>

<div class="arc-row mt-4">
<div class="arc-step"><span class="pill">1</span><strong><span class="lang-en">Reverse</span><span class="lang-vi">Ngược lại</span></strong><span class="lang-en">Antiderivatives</span><span class="lang-vi">Nguyên hàm</span></div>
<div class="arc-step"><span class="pill">2</span><strong><span class="lang-en">Compute</span><span class="lang-vi">Tính toán</span></strong><span class="lang-en">Formulas and substitution</span><span class="lang-vi">Công thức và đổi biến</span></div>
<div class="arc-step"><span class="pill">3</span><strong><span class="lang-en">Undo product</span><span class="lang-vi">Gỡ tích</span></strong><span class="lang-en">Integration by parts</span><span class="lang-vi">Tích phân từng phần</span></div>
<div class="arc-step"><span class="pill">4</span><strong><span class="lang-en">Accumulate</span><span class="lang-vi">Tích lũy</span></strong><span class="lang-en">Riemann sums</span><span class="lang-vi">Tổng Riemann</span></div>
<div class="arc-step"><span class="pill">5</span><strong><span class="lang-en">Connect</span><span class="lang-vi">Liên hệ</span></strong><span class="lang-en">FTC</span><span class="lang-vi">Định lý cơ bản</span></div>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-20</span><span><span class="lang-en"><strong>Antiderivatives</strong> - notation, constants, basic formulas</span><span class="lang-vi"><strong>Nguyên hàm</strong> - ký hiệu, hằng số, công thức cơ bản</span></span></div>
<div class="tl-row"><span class="clock">20-50</span><span><span class="lang-en"><strong>Substitution</strong> - change variables in indefinite integrals</span><span class="lang-vi"><strong>Đổi biến</strong> - đổi biến trong tích phân bất định</span></span></div>
<div class="tl-row"><span class="clock">50-75</span><span><span class="lang-en"><strong>Integration by parts</strong> - reverse the product rule</span><span class="lang-vi"><strong>Tích phân từng phần</strong> - đảo quy tắc tích</span></span></div>
<div class="tl-row break"><span class="clock">75-85</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row"><span class="clock">85-120</span><span><span class="lang-en"><strong>Definite integrals</strong> - area, Riemann sums, properties</span><span class="lang-vi"><strong>Tích phân xác định</strong> - diện tích, tổng Riemann, tính chất</span></span></div>
<div class="tl-row"><span class="clock">120-150</span><span><span class="lang-en"><strong>Fundamental Theorem</strong> - accumulated area and antiderivatives</span><span class="lang-vi"><strong>Định lý cơ bản</strong> - diện tích tích lũy và nguyên hàm</span></span></div>
<div class="tl-row disc"><span class="clock">150-170</span><span><span class="lang-en"><strong>Mixed practice</strong> - one indefinite and one definite integral</span><span class="lang-vi"><strong>Luyện tập tổng hợp</strong> - một tích phân bất định và một tích phân xác định</span></span></div>
</div>

---

# <span class="lang-en">A Rate-To-Total Model</span><span class="lang-vi">Mô hình từ tốc độ đến tổng lượng</span>

<div class="box gold">
<div class="label"><span class="lang-en">Population rate</span><span class="lang-vi">Tốc độ dân số</span></div>
<span class="lang-en">Suppose the rate of world population growth is modeled by</span>
<span class="lang-vi">Giả sử tốc độ tăng dân số thế giới được mô hình bởi</span>

$$
p(t)=-0.012t^2+48t-47925
$$

<span class="lang-en">in millions of people per year, where $t$ is the calendar year.</span>
<span class="lang-vi">triệu người mỗi năm, trong đó $t$ là năm dương lịch.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Question</span><span class="lang-vi">Câu hỏi</span></div>
<span class="lang-en">If $P(2000)=6000$, find a model for $P(t)$.</span>
<span class="lang-vi">Nếu $P(2000)=6000$, hãy tìm mô hình cho $P(t)$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Key idea</span><span class="lang-vi">Ý tưởng chính</span></div>
<span class="lang-en">$P$ is an antiderivative of $p$: $P'(t)=p(t)$.</span>
<span class="lang-vi">$P$ là nguyên hàm của $p$: $P'(t)=p(t)$.</span>
</div>
</div>

---

# <span class="lang-en">Antiderivatives</span><span class="lang-vi">Nguyên hàm</span>

<div class="thm">
<div class="tag"><span class="lang-en">Definition</span><span class="lang-vi">Định nghĩa</span></div>
<span class="lang-en">A function $F$ is an antiderivative of $f$ on an interval $I$ if</span>
<span class="lang-vi">Hàm $F$ là một nguyên hàm của $f$ trên khoảng $I$ nếu</span>

$$
F'(x)=f(x)\qquad (x\in I).
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Many answers</span><span class="lang-vi">Nhiều đáp án</span></div>
<span class="lang-en">If $F'(x)=f(x)$, then $(F(x)+C)'=f(x)$ for every constant $C$.</span>
<span class="lang-vi">Nếu $F'(x)=f(x)$, thì $(F(x)+C)'=f(x)$ với mọi hằng số $C$.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>
<span class="lang-en">For $f(x)=x^2$, one antiderivative is $\frac{x^3}{3}$, so the general antiderivative is $\frac{x^3}{3}+C$.</span>
<span class="lang-vi">Với $f(x)=x^2$, một nguyên hàm là $\frac{x^3}{3}$, nên nguyên hàm tổng quát là $\frac{x^3}{3}+C$.</span>
</div>
</div>

---

# <span class="lang-en">Indefinite Integrals</span><span class="lang-vi">Tích phân bất định</span>

<div class="grid-2">
<div class="box gold">
<div class="label"><span class="lang-en">Notation</span><span class="lang-vi">Ký hiệu</span></div>

$$
\int f(x)\,dx=F(x)+C
$$

<span class="lang-en">means $F'(x)=f(x)$.</span>
<span class="lang-vi">nghĩa là $F'(x)=f(x)$.</span>
</div>

<div class="box blue">
<div class="label"><span class="lang-en">Vocabulary</span><span class="lang-vi">Từ vựng</span></div>
<ul>
<li><span class="lang-en">$f(x)$: integrand</span><span class="lang-vi">$f(x)$: hàm dưới dấu tích phân</span></li>
<li><span class="lang-en">$dx$: variable of integration</span><span class="lang-vi">$dx$: biến lấy tích phân</span></li>
<li><span class="lang-en">$C$: constant of integration</span><span class="lang-vi">$C$: hằng số tích phân</span></li>
</ul>
</div>
</div>

<div class="caution mt-4">
<div class="label"><span class="lang-en">Always check</span><span class="lang-vi">Luôn kiểm tra</span></div>
<span class="lang-en">Differentiate your answer. If the derivative returns the integrand, the antiderivative is correct.</span>
<span class="lang-vi">Hãy đạo hàm đáp án. Nếu đạo hàm trả về hàm dưới dấu tích phân, nguyên hàm là đúng.</span>
</div>

---

# <span class="lang-en">Basic Formulas</span><span class="lang-vi">Công thức cơ bản</span>

<div class="formula-list">
<div class="grid-2">
<div>

$$
\int x^\alpha\,dx=\frac{x^{\alpha+1}}{\alpha+1}+C,\quad \alpha\ne-1
$$

$$
\int \frac{dx}{x}=\ln|x|+C
$$

$$
\int e^x\,dx=e^x+C
$$

$$
\int a^x\,dx=\frac{a^x}{\ln a}+C
$$
</div>
<div>

$$
\int \sin x\,dx=-\cos x+C
$$

$$
\int \cos x\,dx=\sin x+C
$$

$$
\int \frac{dx}{1+x^2}=\arctan x+C
$$

$$
\int \frac{dx}{\sqrt{1-x^2}}=\arcsin x+C
$$
</div>
</div>
</div>

<div class="refs">
<span class="lang-en">The goal is recognition: choose the formula whose derivative would recreate the integrand.</span>
<span class="lang-vi">Mục tiêu là nhận dạng: chọn công thức mà khi đạo hàm sẽ tạo lại hàm dưới dấu tích phân.</span>
</div>

---

# <span class="lang-en">Linearity And Scaling</span><span class="lang-vi">Tuyến tính và đổi tỉ lệ</span>

<div class="grid-3">
<div class="box">
<div class="label"><span class="lang-en">Constant multiple</span><span class="lang-vi">Nhân hằng số</span></div>

$$
\int a f(x)\,dx=a\int f(x)\,dx
$$
</div>
<div class="box">
<div class="label"><span class="lang-en">Sum and difference</span><span class="lang-vi">Tổng và hiệu</span></div>

$$
\int(f\pm g)\,dx=\int f\,dx\pm\int g\,dx
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Linear inside</span><span class="lang-vi">Biểu thức tuyến tính bên trong</span></div>

<span class="lang-en">If $F'=f$, then</span>
<span class="lang-vi">Nếu $F'=f$, thì</span>

<div class="center">
$\displaystyle \int f(ax+b)\,dx$<br>
$\displaystyle =\frac1aF(ax+b)+C$
</div>
</div>
</div>

<div class="box gold mt-4">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\int \frac{dx}{x^2+a^2}
=\frac1a\arctan\frac{x}{a}+C,\qquad a>0.
$$

<span class="lang-en">Think $t=x/a$, so $dx=a\,dt$.</span>
<span class="lang-vi">Đặt $t=x/a$, khi đó $dx=a\,dt$.</span>
</div>

---

# <span class="lang-en">Substitution</span><span class="lang-vi">Đổi biến</span>

<div class="thm">
<div class="tag"><span class="lang-en">Chain rule in reverse</span><span class="lang-vi">Đảo quy tắc dây chuyền</span></div>
<span class="lang-en">If $u=u(x)$ and $du=u'(x)\,dx$, then</span>
<span class="lang-vi">Nếu $u=u(x)$ và $du=u'(x)\,dx$, thì</span>

$$
\int f(u(x))u'(x)\,dx=\int f(u)\,du=F(u)+C.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">When it works</span><span class="lang-vi">Khi nào dùng được</span></div>
<span class="lang-en">Look for a composite function and a nearby derivative.</span>
<span class="lang-vi">Tìm hàm hợp và đạo hàm của phần trong nằm gần đó.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Mental pattern</span><span class="lang-vi">Mẫu tư duy</span></div>
<span class="lang-en">Inside expression becomes $u$; its differential becomes the leftover factor.</span>
<span class="lang-vi">Biểu thức bên trong trở thành $u$; vi phân của nó trở thành phần còn lại.</span>
</div>
</div>

---

# <span class="lang-en">Substitution Example</span><span class="lang-vi">Ví dụ đổi biến</span>

<div class="box gold">
<div class="label"><span class="lang-en">Compute</span><span class="lang-vi">Tính</span></div>

$$
\int \sin^3x\cos x\,dx
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Choose</span><span class="lang-vi">Chọn</span></div>

$$
u=\sin x,\qquad du=\cos x\,dx
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Integrate</span><span class="lang-vi">Tính tích phân</span></div>

$$
\begin{aligned}
\int \sin^3x\cos x\,dx
&=\int u^3\,du\\
&=\frac{u^4}{4}+C.
\end{aligned}
$$

<span class="lang-en">Substitute back: $\displaystyle \frac{\sin^4x}{4}+C$.</span>
<span class="lang-vi">Thay lại: $\displaystyle \frac{\sin^4x}{4}+C$.</span>
</div>
</div>

---

# <span class="lang-en">Inverse Substitution</span><span class="lang-vi">Đổi biến ngược</span>

<div class="box gold">
<div class="label"><span class="lang-en">When the integrand has geometry</span><span class="lang-vi">Khi hàm dưới dấu tích phân có hình học</span></div>
<span class="lang-en">Expressions like $\sqrt{a^2-x^2}$ often simplify when $x=a\sin t$.</span>
<span class="lang-vi">Biểu thức như $\sqrt{a^2-x^2}$ thường đơn giản hơn khi đặt $x=a\sin t$.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Substitute</span><span class="lang-vi">Đổi biến</span></div>

$$
x=a\sin t,\qquad dx=a\cos t\,dt
$$

$$
\sqrt{a^2-x^2}=a\cos t
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Simplify</span><span class="lang-vi">Rút gọn</span></div>
<span class="lang-en">After substitution, use $\cos^2t=\frac{1+\cos2t}{2}$ and then return to $x$.</span>
<span class="lang-vi">Sau khi đổi biến, dùng $\cos^2t=\frac{1+\cos2t}{2}$ rồi đổi lại về $x$.</span>
</div>
</div>

<div class="thm mt-3">

$$
\begin{aligned}
\int\sqrt{a^2-x^2}\,dx
&=\frac{x\sqrt{a^2-x^2}}2\\
&\quad+\frac{a^2}{2}\arcsin\frac{x}{a}+C
\end{aligned}
$$
</div>

---

# <span class="lang-en">Integration By Parts</span><span class="lang-vi">Tích phân từng phần</span>

<div class="thm">
<div class="tag"><span class="lang-en">Product rule in reverse</span><span class="lang-vi">Đảo quy tắc tích</span></div>

$$
\frac{d}{dx}(uv)=u\,v'+u'\,v
$$

<span class="lang-en">Integrating both sides gives</span>
<span class="lang-vi">Lấy tích phân hai vế cho ta</span>

$$
\boxed{\int u\,dv=uv-\int v\,du.}
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Choose $u$</span><span class="lang-vi">Chọn $u$</span></div>
<span class="lang-en">Usually the factor that becomes simpler after differentiation.</span>
<span class="lang-vi">Thường là nhân tử đơn giản hơn sau khi lấy đạo hàm.</span>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Choose $dv$</span><span class="lang-vi">Chọn $dv$</span></div>
<span class="lang-en">The factor you can integrate cleanly.</span>
<span class="lang-vi">Nhân tử mà ta lấy nguyên hàm được gọn.</span>
</div>
</div>

---

# <span class="lang-en">Parts Example</span><span class="lang-vi">Ví dụ từng phần</span>

<div class="box gold">
<div class="label"><span class="lang-en">Compute</span><span class="lang-vi">Tính</span></div>

$$
I=\int x\sin x\,dx
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Set up</span><span class="lang-vi">Thiết lập</span></div>

$$
u=x,\quad dv=\sin x\,dx
$$

$$
du=dx,\quad v=-\cos x
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Apply formula</span><span class="lang-vi">Áp dụng công thức</span></div>

$$
I=x(-\cos x)-\int(-\cos x)\,dx
$$

$$
=-x\cos x+\sin x+C.
$$
</div>
</div>

---

# <span class="lang-en">Choosing Parts</span><span class="lang-vi">Cách chọn từng phần</span>

<div class="box gold">
<div class="label"><span class="lang-en">Good candidates</span><span class="lang-vi">Các dạng nên nghĩ tới</span></div>
<span class="lang-en">Integration by parts is especially useful when the integrand is a product and one factor simplifies under differentiation.</span>
<span class="lang-vi">Tích phân từng phần đặc biệt hữu ích khi hàm dưới dấu tích phân là tích và một nhân tử đơn giản hơn sau khi lấy đạo hàm.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<ul>
<li>$\displaystyle\int x^k\ln^m x\,dx$</li>
<li>$\displaystyle\int x^k e^{ax}\,dx$</li>
<li>$\displaystyle\int x^k\sin(ax)\,dx$</li>
<li>$\displaystyle\int x^k\cos(ax)\,dx$</li>
</ul>
</div>
<div class="box blue">
<ul>
<li>$\displaystyle\int e^{ax}\sin(bx)\,dx$</li>
<li>$\displaystyle\int e^{ax}\cos(bx)\,dx$</li>
<li>$\displaystyle\int \ln x\,dx$ by taking $dv=dx$</li>
</ul>
</div>
</div>

<div class="refs">
<span class="lang-en">Rule of thumb: differentiate logs and powers; integrate exponentials and trig when possible.</span>
<span class="lang-vi">Kinh nghiệm: đạo hàm log và lũy thừa; lấy nguyên hàm mũ và lượng giác khi có thể.</span>
</div>

---

# <span class="lang-en">Definite Integrals: Area</span><span class="lang-vi">Tích phân xác định: diện tích</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Area by rectangles</span><span class="lang-vi">Diện tích bằng hình chữ nhật</span></div>
<span class="lang-en">Approximate the region under $y=f(x)$ on $[a,b]$ by rectangles, then let the widths shrink to $0$.</span>
<span class="lang-vi">Xấp xỉ miền dưới đồ thị $y=f(x)$ trên $[a,b]$ bằng các hình chữ nhật, rồi cho bề rộng tiến về $0$.</span>
</div>

<div class="thm mt-3">

$$
\int_a^b f(x)\,dx
=\lim_{n\to\infty}\sum_{i=1}^n f(x_i^*)\,\Delta x
$$
</div>
</div>
<div>
<img src="./images/riemann_rectangles.jpg" class="graph-img" alt="Approximating area under a curve with rectangles">
</div>
</div>

---

# <span class="lang-en">Riemann Sum Setup</span><span class="lang-vi">Thiết lập tổng Riemann</span>

<div class="grid-2 align-center">
<div>
<div class="box">
<div class="label"><span class="lang-en">Partition</span><span class="lang-vi">Chia khoảng</span></div>

$$
\Delta x=\frac{b-a}{n},\qquad x_i=a+i\Delta x.
$$

<span class="lang-en">Choose sample points $x_i^*\in[x_{i-1},x_i]$.</span>
<span class="lang-vi">Chọn điểm mẫu $x_i^*\in[x_{i-1},x_i]$.</span>
</div>
<div class="box blue mt-3">
<div class="label"><span class="lang-en">Approximation</span><span class="lang-vi">Xấp xỉ</span></div>

$$
A_n=\sum_{i=1}^{n}f(x_i^*)\Delta x
$$
</div>
</div>
<div>
<img src="./images/partition_sample_points.jpg" class="graph-img" alt="Partition and sample points for a Riemann sum">
</div>
</div>

---

# <span class="lang-en">Riemann Sum Example</span><span class="lang-vi">Ví dụ tổng Riemann</span>

<div class="box gold">
<div class="label"><span class="lang-en">Compute by the definition</span><span class="lang-vi">Tính bằng định nghĩa</span></div>

$$
\int_0^1 x^2\,dx
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Right endpoints</span><span class="lang-vi">Đầu mút phải</span></div>

$$
\Delta x=\frac1n,\qquad x_i^*=\frac{i}{n}
$$

$$
\sum_{i=1}^n\left(\frac{i}{n}\right)^2\frac1n
=\frac{1^2+2^2+\cdots+n^2}{n^3}
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Limit</span><span class="lang-vi">Giới hạn</span></div>
<span class="lang-en">Use $S_n=1^2+\cdots+n^2$ with</span>
<span class="lang-vi">Dùng $S_n=1^2+\cdots+n^2$ với</span>

$$
S_n=\frac{n(n+1)(2n+1)}6.
$$

$$
\int_0^1x^2\,dx=\frac13.
$$
</div>
</div>

---

# <span class="lang-en">Meaning And Properties</span><span class="lang-vi">Ý nghĩa và tính chất</span>

<div class="grid-2 align-center">
<div>
<div class="box gold">
<div class="label"><span class="lang-en">Geometric meaning</span><span class="lang-vi">Ý nghĩa hình học</span></div>
<span class="lang-en">If $f(x)\ge0$ on $[a,b]$, then $\int_a^b f(x)\,dx$ is the area under the curve.</span>
<span class="lang-vi">Nếu $f(x)\ge0$ trên $[a,b]$, thì $\int_a^b f(x)\,dx$ là diện tích dưới đồ thị.</span>
</div>
<div class="box mt-3">
<ul>
<li>$\displaystyle \int_a^a f(x)\,dx=0$</li>
<li>$\displaystyle \int_b^a f(x)\,dx=-\int_a^b f(x)\,dx$</li>
<li>$\displaystyle \int_a^b f=\int_a^c f+\int_c^b f$</li>
</ul>
</div>
</div>
<div>
<img src="./images/area_meaning.jpg" class="graph-img" alt="Geometric area represented by a definite integral">
</div>
</div>

---

# <span class="lang-en">Fundamental Theorem I</span><span class="lang-vi">Định lý cơ bản I</span>

<div class="grid-2 align-center">
<div>
<div class="thm">
<div class="tag"><span class="lang-en">Accumulation function</span><span class="lang-vi">Hàm tích lũy</span></div>
<span class="lang-en">If $f$ is continuous on $[a,b]$ and</span>
<span class="lang-vi">Nếu $f$ liên tục trên $[a,b]$ và</span>

$$
g(x)=\int_a^x f(t)\,dt,
$$

<span class="lang-en">then $g'(x)=f(x)$ on $(a,b)$.</span>
<span class="lang-vi">thì $g'(x)=f(x)$ trên $(a,b)$.</span>
</div>
</div>
<div>
<img src="./images/accumulation_function.jpg" class="graph-img" alt="Accumulation function and the Fundamental Theorem of Calculus">
</div>
</div>

<div class="refs">
<span class="lang-en">The derivative of accumulated area is the height of the curve at the moving boundary.</span>
<span class="lang-vi">Đạo hàm của diện tích tích lũy là chiều cao của đồ thị tại biên đang di chuyển.</span>
</div>

---

# <span class="lang-en">Fundamental Theorem II</span><span class="lang-vi">Định lý cơ bản II</span>

<div class="thm">
<div class="tag"><span class="lang-en">Newton-Leibniz formula</span><span class="lang-vi">Công thức Newton-Leibniz</span></div>
<span class="lang-en">If $F'(x)=f(x)$ and $f$ is continuous on $[a,b]$, then</span>
<span class="lang-vi">Nếu $F'(x)=f(x)$ và $f$ liên tục trên $[a,b]$, thì</span>

$$
\boxed{\int_a^b f(x)\,dx=F(b)-F(a).}
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\int_{\pi/6}^{\pi/4}\frac{dx}{\cos^2x}
=\tan x\Big|_{\pi/6}^{\pi/4}
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Value</span><span class="lang-vi">Giá trị</span></div>

$$
=\tan\frac{\pi}{4}-\tan\frac{\pi}{6}
=1-\frac{\sqrt3}{3}.
$$
</div>
</div>

---

# <span class="lang-en">Definite Substitution</span><span class="lang-vi">Đổi biến trong tích phân xác định</span>

<div class="thm">
<div class="tag"><span class="lang-en">Change limits too</span><span class="lang-vi">Đổi cả cận</span></div>

$$
\int_a^b f(u(x))u'(x)\,dx=\int_{u(a)}^{u(b)} f(u)\,du.
$$
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Example</span><span class="lang-vi">Ví dụ</span></div>

$$
\int_1^e\frac{\ln^2x}{x}\,dx
$$

<span class="lang-en">Let $u=\ln x$, so $du=\frac{dx}{x}$; the limits change from $x=1,e$ to $u=0,1$.</span>
<span class="lang-vi">Đặt $u=\ln x$, nên $du=\frac{dx}{x}$; cận đổi từ $x=1,e$ thành $u=0,1$.</span>

$$
\int_0^1u^2\,du=\frac13.
$$
</div>

---

# <span class="lang-en">Definite Integration By Parts</span><span class="lang-vi">Từng phần cho tích phân xác định</span>

<div class="thm">
<div class="tag"><span class="lang-en">Formula</span><span class="lang-vi">Công thức</span></div>

$$
\int_a^b u\,dv=uv\Big|_a^b-\int_a^b v\,du.
$$
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">Example setup</span><span class="lang-vi">Thiết lập ví dụ</span></div>

$$
I=\int_0^1 xe^{-x}\,dx
$$

$$
u=x,\quad dv=e^{-x}\,dx
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Compute</span><span class="lang-vi">Tính</span></div>

$$
du=dx,\quad v=-e^{-x}
$$

$$
\begin{aligned}
I&=-xe^{-x}\Big|_0^1+\int_0^1e^{-x}\,dx\\
&=1-\frac2e.
\end{aligned}
$$
</div>
</div>

---

# <span class="lang-en">Symmetry Shortcut</span><span class="lang-vi">Mẹo đối xứng</span>

<div class="thm">
<div class="tag"><span class="lang-en">On $[-a,a]$</span><span class="lang-vi">Trên $[-a,a]$</span></div>
<div class="grid-2">
<div>
<span class="lang-en">If $f$ is odd,</span><span class="lang-vi">Nếu $f$ là hàm lẻ,</span>

$$
\int_{-a}^{a}f(x)\,dx=0.
$$
</div>
<div>
<span class="lang-en">If $f$ is even,</span><span class="lang-vi">Nếu $f$ là hàm chẵn,</span>

$$
\int_{-a}^{a}f(x)\,dx=2\int_0^a f(x)\,dx.
$$
</div>
</div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Fast read</span><span class="lang-vi">Nhìn nhanh</span></div>
<span class="lang-en">Before computing on a symmetric interval, test $f(-x)$.</span>
<span class="lang-vi">Trước khi tính trên khoảng đối xứng, hãy kiểm tra $f(-x)$.</span>
</div>

---

# <span class="lang-en">Your Turn A: Antiderivatives</span><span class="lang-vi">Đến lượt bạn A: nguyên hàm</span>

<div class="grid-2">
<div class="your-turn">
<span class="timechip">6 min</span>
<div class="label"><span class="lang-en">Basic formulas</span><span class="lang-vi">Công thức cơ bản</span></div>
<ol>
<li>$\displaystyle \int\left(3x^2-\frac{4}{x}+2e^x\right)\,dx$</li>
<li>$\displaystyle \int\left(\cos x+\frac{1}{1+x^2}\right)\,dx$</li>
</ol>
</div>
<div class="your-turn">
<span class="timechip">6 min</span>
<div class="label"><span class="lang-en">Substitution</span><span class="lang-vi">Đổi biến</span></div>
<ol>
<li>$\displaystyle \int x(1+x^2)^5\,dx$</li>
<li>$\displaystyle \int \frac{\ln^2x}{x}\,dx$</li>
</ol>
</div>
</div>

<div class="refs">
<span class="lang-en">Check every answer by differentiating.</span>
<span class="lang-vi">Kiểm tra từng đáp án bằng cách đạo hàm.</span>
</div>

---

# <span class="lang-en">Your Turn B: Parts</span><span class="lang-vi">Đến lượt bạn B: từng phần</span>

<div class="grid-2">
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Choose $u$ and $dv$</span><span class="lang-vi">Chọn $u$ và $dv$</span></div>

$$
\int x\cos x\,dx
$$

<span class="lang-en">Which factor should become simpler?</span>
<span class="lang-vi">Nhân tử nào nên trở nên đơn giản hơn?</span>
</div>
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Logarithm</span><span class="lang-vi">Logarit</span></div>

$$
\int \ln x\,dx
$$

<span class="lang-en">Hint: take $dv=dx$.</span>
<span class="lang-vi">Gợi ý: chọn $dv=dx$.</span>
</div>
</div>

---

# <span class="lang-en">Your Turn C: Definite Integrals</span><span class="lang-vi">Đến lượt bạn C: tích phân xác định</span>

<div class="grid-2">
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">FTC</span><span class="lang-vi">Định lý cơ bản</span></div>

$$
\int_0^2(3x^2-4x+1)\,dx
$$
</div>
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Substitution</span><span class="lang-vi">Đổi biến</span></div>

$$
\int_0^2 x\sqrt{4+x^2}\,dx
$$
</div>
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Symmetry</span><span class="lang-vi">Đối xứng</span></div>

$$
\int_{-1}^{1}\frac{x^3}{1+x^2}\,dx
$$
</div>
<div class="your-turn">
<span class="timechip">8 min</span>
<div class="label"><span class="lang-en">Parts</span><span class="lang-vi">Từng phần</span></div>

$$
\int_0^1 xe^{-x}\,dx
$$
</div>
</div>

---

# <span class="lang-en">Wrap-Up</span><span class="lang-vi">Tổng kết</span>

<div class="grid-2">
<div class="box">
<div class="label"><span class="lang-en">Today’s tools</span><span class="lang-vi">Công cụ hôm nay</span></div>
<ul>
<li><span class="lang-en">Antiderivatives and the constant $C$</span><span class="lang-vi">Nguyên hàm và hằng số $C$</span></li>
<li><span class="lang-en">Substitution for composite functions</span><span class="lang-vi">Đổi biến cho hàm hợp</span></li>
<li><span class="lang-en">Integration by parts for products</span><span class="lang-vi">Tích phân từng phần cho tích</span></li>
<li><span class="lang-en">Riemann sums as accumulated area</span><span class="lang-vi">Tổng Riemann như diện tích tích lũy</span></li>
<li><span class="lang-en">FTC: definite integrals from antiderivatives</span><span class="lang-vi">Định lý cơ bản: tính tích phân xác định bằng nguyên hàm</span></li>
</ul>
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Next lecture</span><span class="lang-vi">Bài giảng tiếp theo</span></div>
<span class="lang-en">We move into more integration techniques: rational functions, radicals, and trigonometric integrals.</span>
<span class="lang-vi">Ta chuyển sang các kỹ thuật tích phân nâng cao hơn: hàm hữu tỷ, căn thức, và tích phân lượng giác.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Review by differentiating indefinite answers and by matching definite-integral problems to the most efficient method.</span>
<span class="lang-vi">Ôn tập bằng cách đạo hàm đáp án bất định và ghép bài tích phân xác định với phương pháp hiệu quả nhất.</span>
</div>
