---
theme: default
title: "Calculus 1 - First-Order Differential Equations"
info: "MT1003 Calculus 1, Lecture 09"
transition: slide-left
download: "../../pdfs/first-order-differential-equations.pdf"
browserExporter: true
fonts:
  sans: Inter
drawings:
  persist: false
---

# <span class="lang-en">First-Order Differential Equations</span><span class="lang-vi">Phương trình vi phân cấp một</span>

<div class="subtitle">
<span class="lang-en">MT1003 Calculus 1 - Lecture 09</span>
<span class="lang-vi">MT1003 Giải tích 1 - Bài giảng 09</span>
</div>

<div class="byline">
Truong-Son Van<br>
tsvan@hcmut.edu.vn
</div>

<div class="refs">
<span class="lang-en">Reading map: <a href="../../readings/">course readings</a>. Read: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>, <a href="https://activecalculus.org/single/sec-7-4-separable.html">7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1-4.3</a>, <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">4.5</a>; Stewart 9.1-9.3, 9.5.</span>
<span class="lang-vi">Bản đồ đọc: <a href="../../readings/">tài liệu đọc của môn</a>. Đọc: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>, <a href="https://activecalculus.org/single/sec-7-4-separable.html">7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1-4.3</a>, <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">4.5</a>; Stewart 9.1-9.3, 9.5.</span>
</div>

---

# <span class="lang-en">Why Differential Equations?</span><span class="lang-vi">Vì sao học phương trình vi phân?</span>

<div class="box gold spotlight">
<div class="label"><span class="lang-en">Calculus, put to work</span><span class="lang-vi">Giải tích khi được đưa vào thực tế</span></div>
<span class="lang-en">Perhaps the most important of all the applications of calculus is to differential equations. Many of the laws that govern the natural world are statements about the <strong>rates</strong> at which things change. When we write those laws in mathematical form, the rates become derivatives, and the resulting equations - equations that contain derivatives - are <strong>differential equations</strong>.</span>
<span class="lang-vi">Có lẽ ứng dụng quan trọng nhất của giải tích chính là phương trình vi phân. Nhiều định luật chi phối thế giới tự nhiên là những phát biểu về <strong>tốc độ</strong> thay đổi của các đại lượng. Khi viết các định luật ấy dưới dạng toán học, tốc độ trở thành đạo hàm, và các phương trình thu được - những phương trình chứa đạo hàm - là <strong>phương trình vi phân</strong>.</span>
</div>

<div class="grid-4 mt-4">
<div class="kpi"><span class="lang-en"><strong>Motion</strong> Newton's second law relates acceleration to force.</span><span class="lang-vi"><strong>Chuyển động</strong> Định luật II Newton liên hệ gia tốc với lực.</span></div>
<div class="kpi"><span class="lang-en"><strong>Cooling</strong> a hot object loses heat at a rate set by its surroundings.</span><span class="lang-vi"><strong>Làm nguội</strong> vật nóng tỏa nhiệt với tốc độ do môi trường quyết định.</span></div>
<div class="kpi"><span class="lang-en"><strong>Circuits</strong> current and charge evolve through a differential equation.</span><span class="lang-vi"><strong>Mạch điện</strong> dòng điện và điện tích biến thiên theo phương trình vi phân.</span></div>
<div class="kpi"><span class="lang-en"><strong>Populations</strong> growth and decay are governed by rates of change.</span><span class="lang-vi"><strong>Dân số</strong> tăng và giảm được điều khiển bởi tốc độ thay đổi.</span></div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>; Stewart 9.1.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>; Stewart 9.1.</span>
</div>

---

# <span class="lang-en">Today's Plan</span><span class="lang-vi">Kế hoạch hôm nay</span>

<div class="timeline">
<div class="tl-row"><span class="clock">0-15</span><span><span class="lang-en"><strong>Language</strong> - what a differential equation is, its order, and what a solution means</span><span class="lang-vi"><strong>Ngôn ngữ</strong> - phương trình vi phân là gì, cấp của nó, và nghiệm nghĩa là gì</span></span></div>
<div class="tl-row"><span class="clock">15-45</span><span><span class="lang-en"><strong>Direction fields</strong> - seeing solutions before solving</span><span class="lang-vi"><strong>Trường hướng</strong> - nhìn thấy nghiệm trước khi giải</span></span></div>
<div class="tl-row"><span class="clock">45-90</span><span><span class="lang-en"><strong>Separable equations</strong> - separate the variables, then integrate</span><span class="lang-vi"><strong>Phương trình tách biến</strong> - tách biến rồi lấy tích phân</span></span></div>
<div class="tl-row break"><span class="clock">90-100</span><span><span class="lang-en"><strong>Break</strong></span><span class="lang-vi"><strong>Nghỉ giải lao</strong></span></span></div>
<div class="tl-row"><span class="clock">100-130</span><span><span class="lang-en"><strong>Application</strong> - Newton's law of cooling</span><span class="lang-vi"><strong>Ứng dụng</strong> - định luật làm nguội Newton</span></span></div>
<div class="tl-row"><span class="clock">130-160</span><span><span class="lang-en"><strong>Linear equations</strong> - the integrating factor</span><span class="lang-vi"><strong>Phương trình tuyến tính</strong> - thừa số tích phân</span></span></div>
<div class="tl-row disc"><span class="clock">160-170</span><span><span class="lang-en"><strong>Exercise lab</strong> - mixed practice and a decision chart</span><span class="lang-vi"><strong>Luyện tập</strong> - bài tập tổng hợp và bảng quyết định</span></span></div>
</div>

<div class="refs">
<span class="lang-en">Session 11-12 reading map: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1-4.5</a>; Stewart 9.1-9.5.</span>
<span class="lang-vi">Bản đồ đọc Buổi 11-12: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1-4.5</a>; Stewart 9.1-9.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">What Is A Differential Equation?</span><span class="lang-vi">Phương trình vi phân là gì?</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - differential equation and order</span><span class="lang-vi">Định nghĩa - phương trình vi phân và cấp</span></div>
<span class="lang-en">A <strong>differential equation</strong> is an equation that contains an unknown function and one or more of its derivatives. The <strong>order</strong> of a differential equation is the order of the highest derivative that appears. An equation of the form $F\left(x, y, y', \ldots, y^{(n)}\right)=0$ is an <strong>ordinary differential equation of order $n$</strong>.</span>
<span class="lang-vi">Một <strong>phương trình vi phân</strong> là phương trình chứa một hàm chưa biết và một hay nhiều đạo hàm của nó. <strong>Cấp</strong> của phương trình vi phân là cấp của đạo hàm cao nhất xuất hiện trong đó. Phương trình dạng $F\left(x, y, y', \ldots, y^{(n)}\right)=0$ là <strong>phương trình vi phân thường cấp $n$</strong>.</span>
</div>

<div class="grid-2 mt-3">
<div class="box">
<div class="label"><span class="lang-en">First order - our whole lecture</span><span class="lang-vi">Cấp một - trọng tâm bài giảng</span></div>
<span class="lang-en">Only $y$ and $y'$ appear. We usually solve for the derivative and write</span>
<span class="lang-vi">Chỉ có $y$ và $y'$ xuất hiện. Ta thường giải theo đạo hàm và viết</span>

$$
y'=F(x, y).
$$
</div>
<div class="box blue">
<div class="label"><span class="lang-en">Reading the order</span><span class="lang-vi">Nhận biết cấp</span></div>
<span class="lang-en">$y'=x+y$ is first order; $\ y''+4y=0$ is second order; $\ (y')^3-x=0$ is still first order - order counts the <em>highest derivative</em>, not the power.</span>
<span class="lang-vi">$y'=x+y$ là cấp một; $\ y''+4y=0$ là cấp hai; $\ (y')^3-x=0$ vẫn là cấp một - cấp đếm theo <em>đạo hàm cao nhất</em>, không phải lũy thừa.</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>; Stewart 9.1.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>; Stewart 9.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">What Is A Solution?</span><span class="lang-vi">Nghiệm là gì?</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - solution, general and particular</span><span class="lang-vi">Định nghĩa - nghiệm, tổng quát và riêng</span></div>
<span class="lang-en">A function $y=f(x)$ is a <strong>solution</strong> of a differential equation on an interval $I$ if the equation holds for every $x$ in $I$ when $y$ and its derivatives are replaced by $f$ and its derivatives. A first-order equation usually has a <strong>general solution</strong>: a family of solutions containing one arbitrary constant $C$. Fixing $C$ gives a <strong>particular solution</strong>.</span>
<span class="lang-vi">Hàm $y=f(x)$ là một <strong>nghiệm</strong> của phương trình vi phân trên khoảng $I$ nếu phương trình đúng với mọi $x$ trong $I$ khi thay $y$ và các đạo hàm của nó bởi $f$ và các đạo hàm của $f$. Phương trình cấp một thường có <strong>nghiệm tổng quát</strong>: một họ nghiệm chứa một hằng số tùy ý $C$. Cố định $C$ cho một <strong>nghiệm riêng</strong>.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Check a solution by substituting</span><span class="lang-vi">Kiểm tra nghiệm bằng cách thế vào</span></div>
<span class="lang-en">Verify that $y=Ce^{x}-x-1$ solves $y'=x+y$. Differentiate: $y'=Ce^{x}-1$. The right side is $x+y=x+\left(Ce^{x}-x-1\right)=Ce^{x}-1$. Both sides agree, so the whole family is a solution.</span>
<span class="lang-vi">Kiểm tra rằng $y=Ce^{x}-x-1$ là nghiệm của $y'=x+y$. Lấy đạo hàm: $y'=Ce^{x}-1$. Vế phải là $x+y=x+\left(Ce^{x}-x-1\right)=Ce^{x}-1$. Hai vế bằng nhau, nên cả họ hàm là nghiệm.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>; Stewart 9.1.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>; Stewart 9.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Initial-Value Problems</span><span class="lang-vi">Bài toán giá trị ban đầu</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - initial-value problem</span><span class="lang-vi">Định nghĩa - bài toán giá trị ban đầu</span></div>
<span class="lang-en">An <strong>initial-value problem</strong> (IVP) is a differential equation together with an <strong>initial condition</strong> $y(x_0)=y_0$. The condition selects one particular solution from the general family by fixing the constant $C$.</span>
<span class="lang-vi">Một <strong>bài toán giá trị ban đầu</strong> (BTGTBĐ) gồm một phương trình vi phân kèm theo một <strong>điều kiện ban đầu</strong> $y(x_0)=y_0$. Điều kiện này chọn ra một nghiệm riêng từ họ nghiệm tổng quát bằng cách cố định hằng số $C$.</span>
</div>

<div class="box gold mt-3 formula-stack">
<div class="label"><span class="lang-en">Example - one curve through one point</span><span class="lang-vi">Ví dụ - một đường cong qua một điểm</span></div>
<span class="lang-en">The family $y=Ce^{x}-x-1$ solves $y'=x+y$. Impose $y(0)=1$:</span>
<span class="lang-vi">Họ $y=Ce^{x}-x-1$ là nghiệm của $y'=x+y$. Áp điều kiện $y(0)=1$:</span>

$$
1=Ce^{0}-0-1=C-1 \;\Rightarrow\; C=2,\qquad y=2e^{x}-x-1.
$$

<span class="lang-en">We will learn to <em>derive</em> this family later; for now, notice how the initial condition pins down a single curve.</span>
<span class="lang-vi">Ta sẽ học cách <em>tìm ra</em> họ nghiệm này ở phần sau; hiện tại, hãy chú ý điều kiện ban đầu ghim lại một đường cong duy nhất.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Vol 2, 4.1</a>; Stewart 9.1.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations">OpenStax Tập 2, 4.1</a>; Stewart 9.1.</span>
</div>

---
class: compact
---

# <span class="lang-en">Direction Fields: The Idea</span><span class="lang-vi">Trường hướng: ý tưởng</span>

<div class="grid-2 align-center">
<div class="box formula-stack">
<div class="label"><span class="lang-en">Slope is handed to us</span><span class="lang-vi">Hệ số góc được cho sẵn</span></div>
<span class="lang-en">A first-order equation $y'=F(x, y)$ tells us the slope of the solution curve at <em>every</em> point $(x, y)$ - without solving anything. For $y'=x+y$, the slope at $(0, 1)$ is</span>
<span class="lang-vi">Phương trình cấp một $y'=F(x, y)$ cho ta hệ số góc của đường cong nghiệm tại <em>mọi</em> điểm $(x, y)$ - mà không cần giải. Với $y'=x+y$, hệ số góc tại $(0, 1)$ là</span>

$$
y'=0+1=1.
$$

<span class="lang-en">Draw a short segment of that slope at many points and a picture of the solutions appears.</span>
<span class="lang-vi">Vẽ một đoạn thẳng ngắn có hệ số góc đó tại nhiều điểm, ta sẽ thấy hình ảnh của các nghiệm.</span>
</div>
<img src="./images/direction_1.jpg" class="graph-img small" alt="Slope of a solution of y prime equals x plus y at sample points">
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Vol 2, 4.2</a>; <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; Stewart 9.2.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Tập 2, 4.2</a>; <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; Stewart 9.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Direction Fields: Reading The Field</span><span class="lang-vi">Trường hướng: đọc trường</span>

<div class="grid-2 align-center">
<img src="./images/direction_2.jpg" class="graph-img small" alt="Direction field for y prime equals x plus y and the solution curve through (0,1)">
<div class="box blue">
<div class="label"><span class="lang-en">Follow the flow</span><span class="lang-vi">Đi theo dòng</span></div>
<span class="lang-en">The short segments form the <strong>direction field</strong>. A solution curve is one that stays tangent to the field everywhere. Starting at $(0, 1)$ and following the arrows traces the particular solution $y=2e^{x}-x-1$ - the same curve the initial condition selected.</span>
<span class="lang-vi">Các đoạn thẳng ngắn tạo thành <strong>trường hướng</strong>. Đường cong nghiệm là đường luôn tiếp xúc với trường tại mọi nơi. Bắt đầu tại $(0, 1)$ và đi theo các mũi tên vạch ra nghiệm riêng $y=2e^{x}-x-1$ - đúng đường cong mà điều kiện ban đầu đã chọn.</span>
</div>
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Qualitative first</span><span class="lang-vi">Định tính trước</span></div>
<span class="lang-en">A direction field shows the <strong>shape</strong> of solutions - where they rise, fall, or level off - even when a formula is hard to find. It is a picture, not a substitute for solving.</span>
<span class="lang-vi">Trường hướng cho thấy <strong>dáng điệu</strong> của nghiệm - nơi chúng tăng, giảm hay đi ngang - ngay cả khi khó tìm được công thức. Đó là một bức tranh, không thay thế cho việc giải.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Vol 2, 4.2</a>; <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; Stewart 9.2.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Tập 2, 4.2</a>; <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; Stewart 9.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">The Field Depends On $F(x, y)$</span><span class="lang-vi">Trường phụ thuộc vào $F(x, y)$</span>

<div class="box blue">
<div class="label"><span class="lang-en">One equation, one field</span><span class="lang-vi">Một phương trình, một trường</span></div>
<span class="lang-en">The slope at each point is $F(x, y)$, so the right-hand side alone decides the whole picture. Three equations, three unmistakable fields - look for where the segments lie flat (slope $0$).</span>
<span class="lang-vi">Hệ số góc tại mỗi điểm là $F(x, y)$, nên chỉ riêng vế phải quyết định toàn bộ bức tranh. Ba phương trình, ba trường khác biệt rõ rệt - hãy tìm nơi các đoạn nằm ngang (hệ số góc $0$).</span>
</div>

<div class="grid-3 mt-3">
<div>
<img src="./images/sf_x.png" class="graph-img sf-thumb" alt="slope field for y prime equals x">
<div class="sf-caption"><span class="lang-en">$y'=x$: slopes depend only on $x$; flat on the $y$-axis.</span><span class="lang-vi">$y'=x$: hệ số góc chỉ phụ thuộc $x$; nằm ngang trên trục $y$.</span></div>
</div>
<div>
<img src="./images/sf_y.png" class="graph-img sf-thumb" alt="slope field for y prime equals y">
<div class="sf-caption"><span class="lang-en">$y'=y$: autonomous; flat on the $x$-axis.</span><span class="lang-vi">$y'=y$: tự trị; nằm ngang trên trục $x$.</span></div>
</div>
<div>
<img src="./images/sf_xmy.png" class="graph-img sf-thumb" alt="slope field for y prime equals x minus y">
<div class="sf-caption"><span class="lang-en">$y'=x-y$: flat along the line $y=x$.</span><span class="lang-vi">$y'=x-y$: nằm ngang dọc đường $y=x$.</span></div>
</div>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Vol 2, 4.2</a>; <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; Stewart 9.2. Fields generated for this course.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Tập 2, 4.2</a>; <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; Stewart 9.2. Trường được tạo cho môn học.</span>
</div>

---
class: compact
---

# <span class="lang-en">Your Turn: Match The Slope Field</span><span class="lang-vi">Tự luyện: ghép trường hướng</span>

<div class="grid-3">
<img src="./images/sf_m1.png" class="graph-img sf-thumb tall" alt="slope field I">
<img src="./images/sf_m2.png" class="graph-img sf-thumb tall" alt="slope field II">
<img src="./images/sf_m3.png" class="graph-img sf-thumb tall" alt="slope field III">
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Match each field to its equation</span><span class="lang-vi">Ghép mỗi trường với phương trình</span></div>
<span class="lang-en">Pair I, II, III with $\ y'=xy,\quad y'=x+y,\quad y'=1-y.$ The trick: find where the segments are horizontal (slope $0$).</span>
<span class="lang-vi">Ghép I, II, III với $\ y'=xy,\quad y'=x+y,\quad y'=1-y.$ Mẹo: tìm nơi các đoạn nằm ngang (hệ số góc $0$).</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answer</span><span class="lang-vi">Đáp án</span></div>
<span class="blur-step" v-click><span class="lang-en">I $\to y'=1-y$ (flat along $y=1$); II $\to y'=xy$ (flat on both axes); III $\to y'=x+y$ (flat along $y=-x$).</span><span class="lang-vi">I $\to y'=1-y$ (ngang dọc $y=1$); II $\to y'=xy$ (ngang trên hai trục); III $\to y'=x+y$ (ngang dọc $y=-x$).</span></span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Vol 2, 4.2</a>; Stewart 9.2.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-7-2-qualitative.html">Active Calculus 7.2</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods">OpenStax Tập 2, 4.2</a>; Stewart 9.2.</span>
</div>

---
class: compact
---

# <span class="lang-en">Separable Equations: Definition</span><span class="lang-vi">Phương trình tách biến: định nghĩa</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - separable equation</span><span class="lang-vi">Định nghĩa - phương trình tách biến</span></div>
<span class="lang-en">A <strong>separable equation</strong> is a first-order differential equation in which the variables can be placed on opposite sides, one form being</span>
<span class="lang-vi">Một <strong>phương trình tách biến</strong> là phương trình vi phân cấp một trong đó các biến có thể được đưa về hai vế riêng biệt, một dạng là</span>

$$
P(x)\,dx+Q(y)\,dy=0.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Method - integrate both sides</span><span class="lang-vi">Phương pháp - lấy tích phân hai vế</span></div>
<span class="lang-en">Integrate each side in its own variable:</span>
<span class="lang-vi">Lấy tích phân mỗi vế theo biến của nó:</span>

$$
\int P(x)\,dx+\int Q(y)\,dy=C.
$$

<span class="lang-en">This equation defines $y$ <strong>implicitly</strong> as a function of $x$.</span>
<span class="lang-vi">Phương trình này xác định $y$ một cách <strong>ẩn</strong> theo $x$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Separable: Worked Example 1</span><span class="lang-vi">Tách biến: ví dụ mẫu 1</span>

<div class="box gold">
<div class="label"><span class="lang-en">Solve</span><span class="lang-vi">Giải</span></div>
<span class="lang-en">Solve the differential equation $x\,dx+(y+1)\,dy=0$.</span>
<span class="lang-vi">Giải phương trình vi phân $x\,dx+(y+1)\,dy=0$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Integrate each term</span><span class="lang-vi">Lấy tích phân từng số hạng</span></div>
<span class="lang-en">The variables are already separated, so integrate both sides:</span>
<span class="lang-vi">Các biến đã tách sẵn, nên lấy tích phân hai vế:</span>

$$
\int x\,dx+\int (y+1)\,dy=C \;\Rightarrow\; \frac{x^2}{2}+\frac{y^2}{2}+y=C.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Interpret</span><span class="lang-vi">Diễn giải</span></div>
<span class="lang-en">This is the general solution, given implicitly. Completing the square, $x^2+(y+1)^2=2C+1$, shows the solution curves are concentric circles centered at $(0, -1)$.</span>
<span class="lang-vi">Đây là nghiệm tổng quát, cho dưới dạng ẩn. Bằng cách hoàn thành bình phương, $x^2+(y+1)^2=2C+1$, ta thấy các đường cong nghiệm là những đường tròn đồng tâm tại $(0, -1)$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3. Example from instructor notes (Lê Xuân Đại).</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3. Ví dụ từ ghi chú giảng viên (Lê Xuân Đại).</span>
</div>

---
class: compact
---

# <span class="lang-en">Separable: A More General Form</span><span class="lang-vi">Tách biến: một dạng tổng quát hơn</span>

<div class="box formula-stack">
<div class="label"><span class="lang-en">Products of an $x$-part and a $y$-part</span><span class="lang-vi">Tích của phần theo $x$ và phần theo $y$</span></div>
<span class="lang-en">Any equation of the form</span>
<span class="lang-vi">Mọi phương trình dạng</span>

$$
f_1(x)\,g_1(y)\,dx+f_2(x)\,g_2(y)\,dy=0
$$

<span class="lang-en">reduces to a separable one. Where $f_2(x)\,g_1(y)\neq 0$, divide both sides by it:</span>
<span class="lang-vi">đều đưa được về dạng tách biến. Ở nơi $f_2(x)\,g_1(y)\neq 0$, chia hai vế cho nó:</span>

$$
\frac{f_1(x)}{f_2(x)}\,dx+\frac{g_2(y)}{g_1(y)}\,dy=0 \;\Rightarrow\; \int\frac{f_1(x)}{f_2(x)}\,dx+\int\frac{g_2(y)}{g_1(y)}\,dy=C.
$$
</div>

<div class="caution mt-3">
<div class="label"><span class="lang-en">Do not lose the constant solutions</span><span class="lang-vi">Đừng đánh mất các nghiệm hằng</span></div>
<span class="lang-en">Dividing by $g_1(y)$ is only valid where $g_1(y)\neq 0$. Each root $g_1(y)=0$ gives a constant solution $y=\text{const}$ that must be checked separately.</span>
<span class="lang-vi">Việc chia cho $g_1(y)$ chỉ hợp lệ ở nơi $g_1(y)\neq 0$. Mỗi nghiệm $g_1(y)=0$ cho một nghiệm hằng ($y$ không đổi) cần được kiểm tra riêng.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Separable: Worked Example 2 - Set Up</span><span class="lang-vi">Tách biến: ví dụ mẫu 2 - thiết lập</span>

<div class="box gold">
<div class="label"><span class="lang-en">Solve</span><span class="lang-vi">Giải</span></div>
<span class="lang-en">Solve $x\left(y^2-4\right)dx+y\,dy=0$.</span>
<span class="lang-vi">Giải $x\left(y^2-4\right)dx+y\,dy=0$.</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Separate, then integrate</span><span class="lang-vi">Tách biến rồi lấy tích phân</span></div>
<span class="lang-en">Divide by $y^2-4\neq 0$ (valid where $y\neq\pm 2$) to separate the variables, then integrate each side:</span>
<span class="lang-vi">Chia cho $y^2-4\neq 0$ (đúng khi $y\neq\pm 2$) để tách biến, rồi lấy tích phân từng vế:</span>

$$
x\,dx+\frac{y\,dy}{y^2-4}=0 \;\Rightarrow\; \frac{x^2}{2}+\frac{1}{2}\ln\left|y^2-4\right|=C_1.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3. Example from instructor notes (Lê Xuân Đại).</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3. Ví dụ từ ghi chú giảng viên (Lê Xuân Đại).</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Separable: Worked Example 2 - Solve</span><span class="lang-vi">Tách biến: ví dụ mẫu 2 - giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Combine and simplify</span><span class="lang-vi">Gộp lại và rút gọn</span></div>
<span class="lang-en">Multiply by $2$ and rename the constant: $\ x^2+\ln\left|y^2-4\right|=\ln|C|$, hence</span>
<span class="lang-vi">Nhân với $2$ và đổi tên hằng số: $\ x^2+\ln\left|y^2-4\right|=\ln|C|$, do đó</span>

$$
y^2-4=Ce^{-x^2}.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Check and note the constants</span><span class="lang-vi">Kiểm tra và lưu ý nghiệm hằng</span></div>
<span class="lang-en">Differentiating $y^2-4=Ce^{-x^2}$ gives $2y\,y'=-2x\,Ce^{-x^2}=-2x\left(y^2-4\right)$, i.e. $x\left(y^2-4\right)+y\,y'=0$. The constant solutions $y=\pm 2$ are recovered by $C=0$.</span>
<span class="lang-vi">Lấy đạo hàm $y^2-4=Ce^{-x^2}$ cho $2y\,y'=-2x\,Ce^{-x^2}=-2x\left(y^2-4\right)$, tức $x\left(y^2-4\right)+y\,y'=0$. Các nghiệm hằng $y=\pm 2$ ứng với $C=0$.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3. Example from instructor notes (Lê Xuân Đại).</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3. Ví dụ từ ghi chú giảng viên (Lê Xuân Đại).</span>
</div>

---
class: compact
---

# <span class="lang-en">Your Turn: Separable</span><span class="lang-vi">Tự luyện: tách biến</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">S1</div>
<span class="lang-en">Solve the initial-value problem</span>
<span class="lang-vi">Giải bài toán giá trị ban đầu</span>

$$
y'=xy,\qquad y(0)=1.
$$
</div>
<div class="exercise-card">
<div class="num">S2</div>
<span class="lang-en">Solve the initial-value problem</span>
<span class="lang-vi">Giải bài toán giá trị ban đầu</span>

$$
y'=y\cos x,\qquad y(0)=1.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">Both are separable: write $\frac{dy}{y}=\,\cdots\,dx$ and integrate. Then use $y(0)=1$ to fix the constant.</span>
<span class="lang-vi">Cả hai đều tách biến: viết $\frac{dy}{y}=\,\cdots\,dx$ rồi lấy tích phân. Sau đó dùng $y(0)=1$ để tìm hằng số.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>S1: $\displaystyle \frac{dy}{y}=x\,dx \Rightarrow \ln|y|=\frac{x^2}{2}+C \Rightarrow y=e^{x^2/2}.$</span><br>
<span class="blur-step" v-click>S2: $\displaystyle \frac{dy}{y}=\cos x\,dx \Rightarrow \ln|y|=\sin x+C \Rightarrow y=e^{\sin x}.$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; bài tập Stewart 9.3.</span>
</div>

---
class: compact
---

# <span class="lang-en">Application: A Loaf Of Bread</span><span class="lang-vi">Ứng dụng: một ổ bánh mì</span>

<div class="grid-2 align-center">
<div class="box gold">
<div class="label"><span class="lang-en">The question</span><span class="lang-vi">Bài toán</span></div>
<span class="lang-en">A loaf of bread is taken from a $100^\circ\text{C}$ oven into a room kept at $25^\circ\text{C}$. After $20$ minutes the bread has cooled to $60^\circ\text{C}$. How long until it reaches $30^\circ\text{C}$, when it is finally cool enough to enjoy?</span>
<span class="lang-vi">Một ổ bánh mì được lấy ra từ lò $100^\circ\text{C}$ đưa vào phòng giữ ở $25^\circ\text{C}$. Sau $20$ phút bánh nguội còn $60^\circ\text{C}$. Bao lâu nữa thì bánh đạt $30^\circ\text{C}$, đủ nguội để thưởng thức?</span>
</div>
<img src="./images/cooling.JPG" class="graph-img small" alt="A loaf of bread cooling from 100 to 60 to 30 degrees Celsius over time">
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a> (Newton's law of cooling); Stewart 9.3. Problem from instructor notes (Lê Xuân Đại).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a> (định luật làm nguội Newton); Stewart 9.3. Bài toán từ ghi chú giảng viên (Lê Xuân Đại).</span>
</div>

---
class: compact
---

# <span class="lang-en">Cooling: The Model</span><span class="lang-vi">Làm nguội: mô hình</span>

<div class="thm">
<div class="tag"><span class="lang-en">Newton's law of cooling</span><span class="lang-vi">Định luật làm nguội Newton</span></div>
<span class="lang-en">Let $T(t)$ be the temperature of the body at time $t$, and let $T_s$ be the constant temperature of the surroundings. The rate of cooling is <strong>proportional</strong> to the temperature difference:</span>
<span class="lang-vi">Gọi $T(t)$ là nhiệt độ của vật tại thời điểm $t$, và $T_s$ là nhiệt độ không đổi của môi trường. Tốc độ làm nguội <strong>tỉ lệ</strong> với hiệu nhiệt độ:</span>

$$
\frac{dT}{dt}=k\,(T-T_s),
$$

<span class="lang-en">where $k$ is a constant of proportionality (here $k<0$, since a hot body cools).</span>
<span class="lang-vi">trong đó $k$ là hằng số tỉ lệ (ở đây $k<0$, vì vật nóng thì nguội đi).</span>
</div>

<div class="box blue mt-3">
<div class="label"><span class="lang-en">For our bread</span><span class="lang-vi">Với ổ bánh của ta</span></div>
<span class="lang-en">The surroundings are the room, so $T_s=25$ and the model is $\dfrac{dT}{dt}=k\,(T-25)$ - a separable equation.</span>
<span class="lang-vi">Môi trường là căn phòng, nên $T_s=25$ và mô hình là $\dfrac{dT}{dt}=k\,(T-25)$ - một phương trình tách biến.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Cooling: Solve The Equation</span><span class="lang-vi">Làm nguội: giải phương trình</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Separate the variables and integrate</span><span class="lang-vi">Tách biến và lấy tích phân</span></div>
<span class="lang-en">With $T_s=25$,</span>
<span class="lang-vi">Với $T_s=25$,</span>

$$
\frac{dT}{T-25}=k\,dt \;\Rightarrow\; \int\frac{dT}{T-25}=k\int dt \;\Rightarrow\; \ln|T-25|=kt+\ln C.
$$

<span class="lang-en">Exponentiating, $\ T-25=Ce^{kt}$, so $\ T=25+Ce^{kt}$.</span>
<span class="lang-vi">Lấy lũy thừa, $\ T-25=Ce^{kt}$, nên $\ T=25+Ce^{kt}$.</span>
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Use the first condition</span><span class="lang-vi">Dùng điều kiện thứ nhất</span></div>
<span class="lang-en">At $t=0$ the bread is at $100^\circ\text{C}$: $\ 100=25+Ce^{0}\Rightarrow C=75$. Therefore</span>
<span class="lang-vi">Tại $t=0$ bánh ở $100^\circ\text{C}$: $\ 100=25+Ce^{0}\Rightarrow C=75$. Do đó</span>

$$
T=25+75\,e^{kt}.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Cooling: Find $k$ And The Time</span><span class="lang-vi">Làm nguội: tìm $k$ và thời gian</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Use the second condition</span><span class="lang-vi">Dùng điều kiện thứ hai</span></div>
<span class="lang-en">At $t=20$, $T=60$: $\ 60=25+75\,e^{20k}\Rightarrow e^{20k}=\frac{35}{75}=\frac{7}{15}$. Hence $e^{k}=\left(\frac{7}{15}\right)^{1/20}$ and</span>
<span class="lang-vi">Tại $t=20$, $T=60$: $\ 60=25+75\,e^{20k}\Rightarrow e^{20k}=\frac{35}{75}=\frac{7}{15}$. Suy ra $e^{k}=\left(\frac{7}{15}\right)^{1/20}$ và</span>

$$
T=25+75\left(\frac{7}{15}\right)^{t/20}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">Answer</span><span class="lang-vi">Đáp số</span></div>
<span class="lang-en">Set $T=30$: $\ 75\left(\frac{7}{15}\right)^{t/20}=5\Rightarrow\left(\frac{7}{15}\right)^{t/20}=\frac{1}{15}$, so</span>
<span class="lang-vi">Cho $T=30$: $\ 75\left(\frac{7}{15}\right)^{t/20}=5\Rightarrow\left(\frac{7}{15}\right)^{t/20}=\frac{1}{15}$, nên</span>

$$
t=\frac{20\ln 15}{\ln 15-\ln 7}\approx 71\ \text{min}.
$$

<span class="lang-en">The bread is ready to eat after about $71$ minutes - a sensible wait.</span>
<span class="lang-vi">Bánh sẵn sàng để ăn sau khoảng $71$ phút - một khoảng chờ hợp lý.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>; Stewart 9.3.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>; Stewart 9.3.</span>
</div>

---
class: compact
---

# <span class="lang-en">Linear Equations: Definition</span><span class="lang-vi">Phương trình tuyến tính: định nghĩa</span>

<div class="defn">
<div class="tag"><span class="lang-en">Definition - first-order linear equation</span><span class="lang-vi">Định nghĩa - phương trình tuyến tính cấp một</span></div>
<span class="lang-en">A first-order <strong>linear</strong> differential equation is one that can be written in the form</span>
<span class="lang-vi">Một phương trình vi phân <strong>tuyến tính</strong> cấp một là phương trình có thể viết dưới dạng</span>

$$
\frac{dy}{dx}+P(x)\,y=Q(x),
$$

<span class="lang-en">where $P$ and $Q$ are continuous on a given interval. The unknown $y$ and its derivative $y'$ appear only to the first power.</span>
<span class="lang-vi">trong đó $P$ và $Q$ liên tục trên một khoảng cho trước. Hàm chưa biết $y$ và đạo hàm $y'$ chỉ xuất hiện ở lũy thừa bậc một.</span>
</div>

<div class="box mt-3">
<div class="label"><span class="lang-en">Separable or linear?</span><span class="lang-vi">Tách biến hay tuyến tính?</span></div>
<span class="lang-en">Some equations are both, but many linear equations - like $y'+P(x)y=Q(x)$ with $Q\neq 0$ - cannot be separated. They need their own method.</span>
<span class="lang-vi">Một số phương trình là cả hai, nhưng nhiều phương trình tuyến tính - như $y'+P(x)y=Q(x)$ với $Q\neq 0$ - không tách biến được. Chúng cần một phương pháp riêng.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">Linear Equations: The Integrating Factor</span><span class="lang-vi">Phương trình tuyến tính: thừa số tích phân</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Multiply by a well-chosen factor</span><span class="lang-vi">Nhân với một thừa số khéo chọn</span></div>
<span class="lang-en">Multiply $y'+P(x)y=Q(x)$ by the <strong>integrating factor</strong> $\mu(x)=e^{\int P(x)\,dx}$. The left side collapses to a single derivative:</span>
<span class="lang-vi">Nhân $y'+P(x)y=Q(x)$ với <strong>thừa số tích phân</strong> $\mu(x)=e^{\int P(x)\,dx}$. Vế trái gộp lại thành một đạo hàm:</span>

$$
\left(y\,e^{\int P(x)\,dx}\right)'=Q(x)\,e^{\int P(x)\,dx}.
$$
</div>

<div class="thm mt-3 formula-stack">
<div class="tag"><span class="lang-en">General solution</span><span class="lang-vi">Nghiệm tổng quát</span></div>
<span class="lang-en">Integrate both sides and solve for $y$:</span>
<span class="lang-vi">Lấy tích phân hai vế và giải theo $y$:</span>

$$
y=e^{-\int P(x)\,dx}\left[\int Q(x)\,e^{\int P(x)\,dx}\,dx+C\right].
$$
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5.</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5.</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Linear: Worked Example - Set Up</span><span class="lang-vi">Tuyến tính: ví dụ mẫu - thiết lập</span>

<div class="box gold">
<div class="label"><span class="lang-en">Solve</span><span class="lang-vi">Giải</span></div>
<span class="lang-en">Solve the initial-value problem $\ y'+\dfrac{1}{x}\,y=3x,\quad y(1)=1.$</span>
<span class="lang-vi">Giải bài toán giá trị ban đầu $\ y'+\dfrac{1}{x}\,y=3x,\quad y(1)=1.$</span>
</div>

<div class="box blue mt-3 formula-stack">
<div class="label"><span class="lang-en">Build the integrating factor</span><span class="lang-vi">Lập thừa số tích phân</span></div>
<span class="lang-en">Here $P(x)=\frac{1}{x}$ and $Q(x)=3x$, so $\mu=e^{\int dx/x}=e^{\ln x}=x$. Multiplying both sides by $\mu=x$ collapses the left side to a single derivative:</span>
<span class="lang-vi">Ở đây $P(x)=\frac{1}{x}$ và $Q(x)=3x$, nên $\mu=e^{\int dx/x}=e^{\ln x}=x$. Nhân hai vế với $\mu=x$ làm vế trái gộp thành một đạo hàm:</span>

$$
(xy)'=3x^2.
$$
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5. Example from instructor notes (Lê Xuân Đại).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5. Ví dụ từ ghi chú giảng viên (Lê Xuân Đại).</span>
</div>

---
class: compact solution-slide
---

# <span class="lang-en">Linear: Worked Example - Solve</span><span class="lang-vi">Tuyến tính: ví dụ mẫu - giải</span>

<div class="box blue formula-stack">
<div class="label"><span class="lang-en">Integrate and solve for $y$</span><span class="lang-vi">Lấy tích phân và giải theo $y$</span></div>
<span class="lang-en">Integrate both sides, then divide by $x$:</span>
<span class="lang-vi">Lấy tích phân hai vế, rồi chia cho $x$:</span>

$$
xy=x^3+C \;\Rightarrow\; y=x^2+\frac{C}{x}.
$$
</div>

<div class="thm mt-3">
<div class="tag"><span class="lang-en">Apply the condition and check</span><span class="lang-vi">Áp điều kiện và kiểm tra</span></div>
<span class="lang-en">From $y(1)=1$: $\ 1=1+C\Rightarrow C=0$, so $y=x^2$. Check: $y'=2x$ and $2x+\frac{1}{x}\cdot x^2=2x+x=3x.$ &check;</span>
<span class="lang-vi">Từ $y(1)=1$: $\ 1=1+C\Rightarrow C=0$, nên $y=x^2$. Kiểm tra: $y'=2x$ và $2x+\frac{1}{x}\cdot x^2=2x+x=3x.$ &check;</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5. Example from instructor notes (Lê Xuân Đại).</span>
<span class="lang-vi">Đọc: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; Stewart 9.5. Ví dụ từ ghi chú giảng viên (Lê Xuân Đại).</span>
</div>

---
class: compact
---

# <span class="lang-en">Your Turn: Linear</span><span class="lang-vi">Tự luyện: tuyến tính</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">L1</div>
<span class="lang-en">Solve the initial-value problem</span>
<span class="lang-vi">Giải bài toán giá trị ban đầu</span>

$$
y'-y=x,\qquad y(0)=1.
$$
</div>
<div class="exercise-card">
<div class="num">L2</div>
<span class="lang-en">Find the general solution of</span>
<span class="lang-vi">Tìm nghiệm tổng quát của</span>

$$
y'-2y=e^{3x}.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">L1: $P=-1$, so $\mu=e^{-x}$. L2: $P=-2$, so $\mu=e^{-2x}$. Multiply, recognize $(\mu y)'$, integrate.</span>
<span class="lang-vi">L1: $P=-1$, nên $\mu=e^{-x}$. L2: $P=-2$, nên $\mu=e^{-2x}$. Nhân vào, nhận ra $(\mu y)'$, rồi lấy tích phân.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>L1: $y=2e^{x}-x-1$ <span class="lang-en">- the very curve from the direction field.</span><span class="lang-vi">- đúng đường cong từ trường hướng.</span></span><br>
<span class="blur-step" v-click>L2: $y=e^{3x}+Ce^{2x}.$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Vol 2, 4.5</a>; Stewart 9.5 exercises.</span>
<span class="lang-vi">Luyện tập: <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">OpenStax Tập 2, 4.5</a>; bài tập Stewart 9.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">Mixed Practice: Which Method?</span><span class="lang-vi">Luyện tập tổng hợp: phương pháp nào?</span>

<div class="exercise-grid">
<div class="exercise-card">
<div class="num">M1</div>
<span class="lang-en">Identify the type, then solve:</span>
<span class="lang-vi">Nhận dạng loại, rồi giải:</span>

$$
x\,y'+y=\cos x.
$$
</div>
<div class="exercise-card">
<div class="num">M2</div>
<span class="lang-en">Identify the type, then solve:</span>
<span class="lang-vi">Nhận dạng loại, rồi giải:</span>

$$
y'=\frac{x}{y}.
$$
</div>
</div>

<div class="grid-2 mt-3">
<div class="box blue">
<div class="label"><span class="lang-en">Hints</span><span class="lang-vi">Gợi ý</span></div>
<span class="lang-en">M1: the left side is already $(xy)'$ - linear. M2: cross-multiply to $y\,dy=x\,dx$ - separable.</span>
<span class="lang-vi">M1: vế trái đã là $(xy)'$ - tuyến tính. M2: nhân chéo thành $y\,dy=x\,dx$ - tách biến.</span>
</div>
<div class="box gold">
<div class="label"><span class="lang-en">Answers</span><span class="lang-vi">Đáp số</span></div>
<span class="blur-step" v-click>M1: <span class="lang-en">linear;</span><span class="lang-vi">tuyến tính;</span> $(xy)'=\cos x\Rightarrow y=\dfrac{\sin x+C}{x}.$</span><br>
<span class="blur-step" v-click>M2: <span class="lang-en">separable;</span><span class="lang-vi">tách biến;</span> $y\,dy=x\,dx\Rightarrow y^2-x^2=C.$</span>
</div>
</div>

<div class="refs">
<span class="lang-en">Practice: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>, <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">4.5</a>; Stewart 9.3, 9.5.</span>
<span class="lang-vi">Luyện tập: <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>, <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">4.5</a>; Stewart 9.3, 9.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">Decision Chart</span><span class="lang-vi">Bảng quyết định</span>

<div class="timeline">
<div class="tl-row"><span class="clock"><span class="lang-en">Look</span><span class="lang-vi">Nhìn</span></span><span><span class="lang-en">Write the equation as $y'=F(x, y)$ or in differential form $M\,dx+N\,dy=0$.</span><span class="lang-vi">Viết phương trình dạng $y'=F(x, y)$ hoặc dạng vi phân $M\,dx+N\,dy=0$.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">Separable?</span><span class="lang-vi">Tách biến?</span></span><span><span class="lang-en">If the $x$'s and $y$'s split apart, integrate both sides: $\int P(x)\,dx+\int Q(y)\,dy=C$.</span><span class="lang-vi">Nếu tách được $x$ và $y$, lấy tích phân hai vế: $\int P(x)\,dx+\int Q(y)\,dy=C$.</span></span></div>
<div class="tl-row"><span class="clock"><span class="lang-en">Linear?</span><span class="lang-vi">Tuyến tính?</span></span><span><span class="lang-en">If it fits $y'+P(x)y=Q(x)$, multiply by $\mu=e^{\int P\,dx}$ and integrate $(\mu y)'=\mu Q$.</span><span class="lang-vi">Nếu có dạng $y'+P(x)y=Q(x)$, nhân với $\mu=e^{\int P\,dx}$ rồi lấy tích phân $(\mu y)'=\mu Q$.</span></span></div>
<div class="tl-row disc"><span class="clock"><span class="lang-en">Then</span><span class="lang-vi">Rồi</span></span><span><span class="lang-en">Apply any initial condition to fix $C$, and check by substituting back.</span><span class="lang-vi">Áp điều kiện ban đầu để tìm $C$, và kiểm tra bằng cách thế lại.</span></span></div>
</div>

<div class="box gold mt-3">
<div class="label"><span class="lang-en">Coming next</span><span class="lang-vi">Buổi tới</span></div>
<span class="lang-en">Homogeneous and Bernoulli equations extend these same two moves with a clever substitution.</span>
<span class="lang-vi">Phương trình thuần nhất và Bernoulli mở rộng đúng hai bước này bằng một phép đổi biến khéo léo.</span>
</div>

<div class="refs">
<span class="lang-en">Read: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Vol 2, 4.3</a>, <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">4.5</a>; Stewart 9.3, 9.5.</span>
<span class="lang-vi">Đọc: <a href="https://activecalculus.org/single/sec-7-4-separable.html">Active Calculus 7.4</a>; <a href="https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations">OpenStax Tập 2, 4.3</a>, <a href="https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations">4.5</a>; Stewart 9.3, 9.5.</span>
</div>

---
class: compact
---

# <span class="lang-en">Reading And Practice Sources</span><span class="lang-vi">Nguồn đọc và luyện tập</span>

<div class="source-list compact-sources">
<div class="source-item">
<strong>Boelkins, M.</strong>&nbsp;
<span class="lang-en"><em>Active Calculus</em> (2nd ed.), Sections 7.2 (Qualitative behavior) and 7.4 (Separable equations).</span>
<span class="lang-vi"><em>Active Calculus</em> (ấn bản thứ 2), Mục 7.2 (Dáng điệu định tính) và 7.4 (Phương trình tách biến).</span>
</div>
<div class="source-item">
<strong>Strang, G., & Herman, E. "Jed".</strong>&nbsp;
<span class="lang-en"><em>Calculus Volume 2</em>, OpenStax, Sections 4.1-4.3 and 4.5.</span>
<span class="lang-vi"><em>Calculus Volume 2</em>, OpenStax, Mục 4.1-4.3 và 4.5.</span>
</div>
<div class="source-item">
<strong>Stewart, J.</strong>&nbsp;
<span class="lang-en"><em>Calculus: Early Transcendentals</em> (8th ed., metric version), Sections 9.1-9.3 and 9.5.</span>
<span class="lang-vi"><em>Calculus: Early Transcendentals</em> (ấn bản thứ 8, bản metric), Mục 9.1-9.3 và 9.5.</span>
</div>
<div class="source-item">
<strong>Lê Xuân Đại.</strong>&nbsp;
<span class="lang-en">HCMUT lecture slides: ordinary differential equations (source of the worked separable and linear examples and the Newton's-law-of-cooling problem).</span>
<span class="lang-vi">Slide bài giảng ĐHBK TP.HCM: phương trình vi phân thường (nguồn của các ví dụ tách biến, tuyến tính và bài toán làm nguội Newton).</span>
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
