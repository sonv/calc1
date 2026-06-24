+++
title = "04. Applications And Parametric Curves"
description = "Lecture on L'Hospital's rule, Taylor and Maclaurin expansions, function analysis, optimization, and parametric curves."
weight = 40
+++

{% lang(code="en") %}
## Goals

By the end of this lecture, students should be able to:

- recognize indeterminate forms and apply L'Hospital's rule when its hypotheses are met
- transform products, differences, and power-type indeterminate forms into a useful quotient or logarithmic limit
- state Taylor's formula and write standard Maclaurin expansions
- use Taylor expansions to evaluate limits and estimate functions near a point
- use first and second derivatives to determine monotonicity, local extrema, concavity, and inflection points
- formulate and solve one-variable optimization problems from applied descriptions
- analyze a parametric curve $x=f(t), y=g(t)$ using $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$

This lecture uses derivatives to evaluate difficult limits, approximate functions, understand curve shape, solve optimization problems, and analyze parametric motion.

## L'Hospital's Rule

The common indeterminate forms are

$$
\frac00,\quad \frac{\infty}{\infty},\quad \infty-\infty,\quad 0\cdot\infty,\quad
1^\infty,\quad \infty^0,\quad 0^0.
$$

Only the quotient forms $\frac00$ and $\frac{\infty}{\infty}$ are direct inputs for L'Hospital's rule. Other forms should first be transformed.

**L'Hospital's rule.** Suppose $f$ and $g$ are differentiable near $a$, $g'(x)\ne0$, and $\frac{f(x)}{g(x)}$ has the form $\frac00$ or $\frac{\infty}{\infty}$ as $x\to a$. If

$$
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L,
$$

then

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=L.
$$

The same idea applies to one-sided limits and limits as $x\to\pm\infty$, when the hypotheses are satisfied. If the derivative quotient is still indeterminate, the rule may be applied again.

**Example.**

$$
\lim_{x\to0}\frac{\tan x-x}{x-\sin x}
=\lim_{x\to0}\frac{\sec^2x-1}{1-\cos x}
=\lim_{x\to0}\frac{\tan^2x}{1-\cos x}.
$$

Then

$$
\frac{\tan^2x}{1-\cos x}
=\frac{\sin^2x}{\cos^2x(1-\cos x)}
=\frac{1+\cos x}{\cos^2x}\to2.
$$

For powers, set $y=u(x)^{v(x)}$, take logarithms, and compute

$$
\ln y=v(x)\ln u(x).
$$

If $\lim \ln y=M$, then $\lim y=e^M$. For example,

$$
\lim_{x\to0^+}(1+\sin4x)^{\cot x}=e^4.
$$

## Taylor And Maclaurin Expansions

Taylor's formula near $x_0$ is

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o\!\left((x-x_0)^n\right).
$$

When $x_0=0$, this is the **Maclaurin expansion**:

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k+o(x^n).
$$

Standard expansions near $0$:

$$
e^x=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n).
$$

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^m\frac{x^{2m+1}}{(2m+1)!}+o(x^{2m+2}).
$$

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^m\frac{x^{2m}}{(2m)!}+o(x^{2m+1}).
$$

$$
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n).
$$

$$
(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+
\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+o(x^n).
$$

**Example.**

$$
\lim_{x\to0}\frac{\cos x-1+\frac{x^2}{2}}{x^4}
=\lim_{x\to0}\frac{\frac{x^4}{24}+o(x^4)}{x^4}
=\frac1{24}.
$$

## Function Analysis

A practical graphing workflow:

1. Find the domain and any symmetry.
2. Compute intercepts and important limits.
3. Find vertical, horizontal, or oblique asymptotes.
4. Use $f'$ to find critical points, increasing/decreasing intervals, and local extrema.
5. Use $f''$ to determine concavity and inflection points.
6. Assemble the sign chart and sketch the graph.

A point $c$ in the domain is **critical** if $f'(c)=0$ or $f'(c)$ does not exist. If $f'$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$; if it changes from negative to positive, then $f$ has a local minimum.

If $f''(x)>0$, the graph is concave up; if $f''(x)<0$, the graph is concave down. An inflection point is a point on the graph where concavity changes.

## Optimization

The standard optimization workflow is:

1. Draw and define variables.
2. Write the objective quantity.
3. Use constraints to reduce the objective to one variable.
4. Differentiate and find critical points in the feasible interval.
5. Compare endpoints or use derivative signs to verify the maximum or minimum.

**Example.** A rectangle with perimeter $100$ m has area

$$
A(x)=x(50-x),\qquad 0\le x\le50.
$$

Since $A'(x)=50-2x$, the only interior critical point is $x=25$. Then $y=25$, and $A''(x)=-2<0$, so the maximum area occurs for a $25\text{ m}\times25\text{ m}$ square.

## Parametric Curves

A parametric curve is given by

$$
x=f(t),\qquad y=g(t),\qquad t\in I.
$$

Each value of $t$ gives the point $(f(t),g(t))$. The parameter often represents time, but it can be any quantity that traces the curve.

If $dx/dt\ne0$, then

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{g'(t)}{f'(t)}.
$$

Horizontal tangents occur when $dy/dt=0$ and $dx/dt\ne0$. Vertical tangents occur when $dx/dt=0$ and $dy/dt\ne0$.

For concavity,

$$
\frac{d^2y}{dx^2}
=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}.
$$

Do not compute this by dividing $d^2y/dt^2$ by $d^2x/dt^2$.

**Example.** For

$$
x=t^2,\qquad y=t^3-3t,
$$

we have

$$
\frac{dy}{dx}=\frac{3t^2-3}{2t}=\frac{3(t^2-1)}{2t}.
$$

Horizontal tangents occur at $t=\pm1$, giving $(1,-2)$ and $(1,2)$. A vertical tangent occurs at $t=0$, giving $(0,0)$. Also

$$
\frac{d^2y}{dx^2}=\frac{3(t^2+1)}{4t^3},
$$

so the curve is concave down for $t<0$ and concave up for $t>0$.

## Solutions To The In-Class Exercises

The practice problems below reinforce the four main blocks of the lecture.

**A. L'Hospital.**
1. $\displaystyle \lim_{x\to2}\frac{x^2-4}{x^2-x-2}=\frac{4}{3}$.
2. $\displaystyle \lim_{x\to1}\frac{x^5-1}{2x^3-x-1}=1$.
3. $\sin x-x\cos x=\frac{x^3}{3}+o(x^3)$ and $\sin^3x=x^3+o(x^3)$, so the limit is $\frac13$.
4. Let $y=x^x$. Then $\ln y=x\ln x\to0$ as $x\to0^+$, so the limit is $1$.

**B. Taylor and Maclaurin.**
1. $\ln^2(1+x)=x^2-x^3+o(x^3)$.
2. $x\sin x=x^2-\frac{x^4}{6}+o(x^4)$.
3. $e^{\sin x}=1+x+\frac{x^2}{2}+o(x^3)$; the $x^3$ coefficient is $0$.
4. $\displaystyle \lim_{x\to0}\frac{1-\frac{x^2}{2}-\cos x}{x^4+4x^5}=-\frac1{24}$.

**C. Shape and optimization.**
For $y=\frac{1+3x}{\sqrt{4+x^2}}$,

$$
y'=\frac{12-x}{(4+x^2)^{3/2}}.
$$

The function increases on $(-\infty,12)$, decreases on $(12,\infty)$, and has a local maximum $y(12)=\frac{\sqrt{37}}{2}$.

For $y=\frac{e^x}{x}$, $y'=\frac{e^x(x-1)}{x^2}$. The function decreases on $(-\infty,0)$ and $(0,1)$, and increases on $(1,\infty)$.

For $y=(x-3)^2e^{-x}$ on $[-1,4]$, $y'=e^{-x}(x-3)(5-x)$. The absolute maximum is $16e$ at $x=-1$, and the absolute minimum is $0$ at $x=3$.

For the river-fence problem, if $x$ is the depth and $y$ is the side parallel to the river, then $2x+y=2400$ and

$$
A(x)=x(2400-2x),\qquad 0\le x\le1200.
$$

Thus $A'(x)=2400-4x$, so $x=600$ and $y=1200$. The largest area is $720000\text{ ft}^2$.

**D. Parametric curves.**
For $x=t^2$ and $y=t^3-3t$,

$$
\frac{dy}{dx}=\frac{3t^2-3}{2t}.
$$

At $(3,0)$, $t=\pm\sqrt3$, so the two tangent slopes are $\pm\sqrt3$ and the tangent lines are

$$
y=\sqrt3(x-3),\qquad y=-\sqrt3(x-3).
$$

Horizontal tangents occur at $t=\pm1$, giving $(1,-2)$ and $(1,2)$. A vertical tangent occurs at $t=0$, giving $(0,0)$. Also

$$
\frac{d^2y}{dx^2}=\frac{3(t^2+1)}{4t^3},
$$

so the curve is concave down for $t<0$ and concave up for $t>0$.

## Extra Practice

1. L'Hospital: $\displaystyle \lim_{x\to2}\frac{2^x-x^2}{x-2}$ and $\displaystyle \lim_{x\to\pi/2}(\sin x)^{\tan x}$.
2. Taylor/Maclaurin: expand $\frac{6}{1+\sin x}$ to degree $3$, and find the coefficient of $x^{10}$ in $x^2\cos x$.
3. Graph analysis: find extrema of $y=\ln x-x$, concavity/inflection for $y=e^{2x-x^2}$, and all asymptotes of $y=e^{1/x}-x$.
4. Optimization: find the dimensions of a closed cylindrical can with fixed volume that minimize surface area.
5. Parametric curves: redo the problem $x=t^2,\ y=t^3-3t$ without looking at the worked solution; then repeat after shifting to $x=t^2-1$.

## Reading And References

- Course topics: L'Hospital's rule, Taylor and Maclaurin expansions, function analysis, optimization, and parametric curves
- [OpenStax Calculus Volume 1, Chapter 4: Applications of Derivatives](https://openstax.org/books/calculus-volume-1/pages/4-introduction)
- [OpenStax Calculus Volume 2, 7.1: Parametric Equations](https://openstax.org/books/calculus-volume-2/pages/7-1-parametric-equations)
{% end %}

{% lang(code="vi") %}
## Mục tiêu

Kết thúc bài giảng này, sinh viên có thể:

- nhận ra các dạng vô định và áp dụng quy tắc L'Hospital khi giả thiết được thỏa
- biến đổi tích, hiệu, và các dạng lũy thừa vô định thành thương hoặc giới hạn logarit phù hợp
- phát biểu công thức Taylor và viết các khai triển Maclaurin chuẩn
- dùng khai triển Taylor để tính giới hạn và xấp xỉ hàm gần một điểm
- dùng đạo hàm cấp một và cấp hai để xét đơn điệu, cực trị địa phương, lồi lõm, và điểm uốn
- lập mô hình và giải bài toán tối ưu một biến từ mô tả ứng dụng
- khảo sát đường cong tham số $x=f(t), y=g(t)$ bằng $\frac{dy}{dx}$ và $\frac{d^2y}{dx^2}$

Bài giảng này dùng đạo hàm để tính các giới hạn khó, xấp xỉ hàm, hiểu hình dáng đồ thị, giải bài toán tối ưu, và khảo sát chuyển động tham số.

## Quy tắc L'Hospital

Các dạng vô định thường gặp là

$$
\frac00,\quad \frac{\infty}{\infty},\quad \infty-\infty,\quad 0\cdot\infty,\quad
1^\infty,\quad \infty^0,\quad 0^0.
$$

Chỉ hai dạng thương $\frac00$ và $\frac{\infty}{\infty}$ là đầu vào trực tiếp cho quy tắc L'Hospital. Các dạng khác cần được biến đổi trước.

**Quy tắc L'Hospital.** Giả sử $f$ và $g$ khả vi gần $a$, $g'(x)\ne0$, và $\frac{f(x)}{g(x)}$ có dạng $\frac00$ hoặc $\frac{\infty}{\infty}$ khi $x\to a$. Nếu

$$
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L,
$$

thì

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=L.
$$

Quy tắc cũng dùng được cho giới hạn một phía và giới hạn khi $x\to\pm\infty$, nếu các giả thiết được thỏa. Nếu thương đạo hàm vẫn vô định, có thể áp dụng tiếp.

**Ví dụ.**

$$
\lim_{x\to0}\frac{\tan x-x}{x-\sin x}
=\lim_{x\to0}\frac{\sec^2x-1}{1-\cos x}
=\lim_{x\to0}\frac{\tan^2x}{1-\cos x}.
$$

Khi đó

$$
\frac{\tan^2x}{1-\cos x}
=\frac{\sin^2x}{\cos^2x(1-\cos x)}
=\frac{1+\cos x}{\cos^2x}\to2.
$$

Với dạng lũy thừa, đặt $y=u(x)^{v(x)}$, lấy logarit, rồi tính

$$
\ln y=v(x)\ln u(x).
$$

Nếu $\lim \ln y=M$, thì $\lim y=e^M$. Ví dụ,

$$
\lim_{x\to0^+}(1+\sin4x)^{\cot x}=e^4.
$$

## Khai triển Taylor và Maclaurin

Công thức Taylor quanh $x_0$ là

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o\!\left((x-x_0)^n\right).
$$

Khi $x_0=0$, ta có **khai triển Maclaurin**:

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k+o(x^n).
$$

Các khai triển chuẩn gần $0$:

$$
e^x=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n).
$$

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^m\frac{x^{2m+1}}{(2m+1)!}+o(x^{2m+2}).
$$

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^m\frac{x^{2m}}{(2m)!}+o(x^{2m+1}).
$$

$$
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n).
$$

$$
(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+
\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+o(x^n).
$$

**Ví dụ.**

$$
\lim_{x\to0}\frac{\cos x-1+\frac{x^2}{2}}{x^4}
=\lim_{x\to0}\frac{\frac{x^4}{24}+o(x^4)}{x^4}
=\frac1{24}.
$$

## Khảo sát hàm số

Một quy trình khảo sát đồ thị thực tế:

1. Tìm miền xác định và đối xứng nếu có.
2. Tính giao điểm và các giới hạn quan trọng.
3. Tìm tiệm cận đứng, ngang, hoặc xiên.
4. Dùng $f'$ để tìm điểm tới hạn, khoảng tăng/giảm, và cực trị địa phương.
5. Dùng $f''$ để xét lồi lõm và điểm uốn.
6. Ghép bảng dấu/bảng biến thiên và phác họa đồ thị.

Một điểm $c$ trong miền xác định là **điểm tới hạn** nếu $f'(c)=0$ hoặc $f'(c)$ không tồn tại. Nếu $f'$ đổi dấu từ dương sang âm tại $c$, thì $f$ có cực đại địa phương tại $c$; nếu đổi từ âm sang dương, thì $f$ có cực tiểu địa phương.

Nếu $f''(x)>0$, đồ thị lõm lên; nếu $f''(x)<0$, đồ thị lõm xuống. Điểm uốn là điểm trên đồ thị nơi tính lồi lõm đổi dấu.

## Tối ưu hóa

Quy trình tối ưu hóa chuẩn:

1. Vẽ hình và đặt biến.
2. Viết đại lượng cần tối ưu.
3. Dùng ràng buộc để đưa đại lượng đó về một biến.
4. Lấy đạo hàm và tìm điểm tới hạn trong miền khả thi.
5. So sánh biên hoặc xét dấu đạo hàm để xác nhận giá trị lớn nhất hoặc nhỏ nhất.

**Ví dụ.** Một hình chữ nhật có chu vi $100$ m và diện tích

$$
A(x)=x(50-x),\qquad 0\le x\le50.
$$

Vì $A'(x)=50-2x$, điểm tới hạn trong miền là $x=25$. Khi đó $y=25$, và $A''(x)=-2<0$, nên diện tích lớn nhất đạt được với hình vuông $25\text{ m}\times25\text{ m}$.

## Đường cong tham số

Một đường cong tham số được cho bởi

$$
x=f(t),\qquad y=g(t),\qquad t\in I.
$$

Mỗi giá trị của $t$ cho điểm $(f(t),g(t))$. Tham số thường biểu diễn thời gian, nhưng cũng có thể là bất kỳ đại lượng nào vạch ra đường cong.

Nếu $dx/dt\ne0$, thì

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{g'(t)}{f'(t)}.
$$

Tiếp tuyến ngang xảy ra khi $dy/dt=0$ và $dx/dt\ne0$. Tiếp tuyến đứng xảy ra khi $dx/dt=0$ và $dy/dt\ne0$.

Để xét lồi lõm,

$$
\frac{d^2y}{dx^2}
=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}.
$$

Không tính công thức này bằng cách chia $d^2y/dt^2$ cho $d^2x/dt^2$.

**Ví dụ.** Với

$$
x=t^2,\qquad y=t^3-3t,
$$

ta có

$$
\frac{dy}{dx}=\frac{3t^2-3}{2t}=\frac{3(t^2-1)}{2t}.
$$

Tiếp tuyến ngang xảy ra tại $t=\pm1$, cho $(1,-2)$ và $(1,2)$. Tiếp tuyến đứng xảy ra tại $t=0$, cho $(0,0)$. Ngoài ra

$$
\frac{d^2y}{dx^2}=\frac{3(t^2+1)}{4t^3},
$$

nên đường cong lõm xuống khi $t<0$ và lõm lên khi $t>0$.

## Lời giải bài tập trên lớp

Các bài tập dưới đây củng cố bốn khối nội dung chính của bài giảng.

**A. L'Hospital.**
1. $\displaystyle \lim_{x\to2}\frac{x^2-4}{x^2-x-2}=\frac{4}{3}$.
2. $\displaystyle \lim_{x\to1}\frac{x^5-1}{2x^3-x-1}=1$.
3. $\sin x-x\cos x=\frac{x^3}{3}+o(x^3)$ và $\sin^3x=x^3+o(x^3)$, nên giới hạn bằng $\frac13$.
4. Đặt $y=x^x$. Khi đó $\ln y=x\ln x\to0$ khi $x\to0^+$, nên giới hạn bằng $1$.

**B. Taylor và Maclaurin.**
1. $\ln^2(1+x)=x^2-x^3+o(x^3)$.
2. $x\sin x=x^2-\frac{x^4}{6}+o(x^4)$.
3. $e^{\sin x}=1+x+\frac{x^2}{2}+o(x^3)$; hệ số của $x^3$ bằng $0$.
4. $\displaystyle \lim_{x\to0}\frac{1-\frac{x^2}{2}-\cos x}{x^4+4x^5}=-\frac1{24}$.

**C. Đồ thị và tối ưu.**
Với $y=\frac{1+3x}{\sqrt{4+x^2}}$,

$$
y'=\frac{12-x}{(4+x^2)^{3/2}}.
$$

Hàm tăng trên $(-\infty,12)$, giảm trên $(12,\infty)$, và có cực đại địa phương $y(12)=\frac{\sqrt{37}}{2}$.

Với $y=\frac{e^x}{x}$, $y'=\frac{e^x(x-1)}{x^2}$. Hàm giảm trên $(-\infty,0)$ và $(0,1)$, tăng trên $(1,\infty)$.

Với $y=(x-3)^2e^{-x}$ trên $[-1,4]$, $y'=e^{-x}(x-3)(5-x)$. GTLN là $16e$ tại $x=-1$, và GTNN là $0$ tại $x=3$.

Với bài hàng rào sát sông, nếu $x$ là chiều sâu và $y$ là cạnh song song với sông, thì $2x+y=2400$ và

$$
A(x)=x(2400-2x),\qquad 0\le x\le1200.
$$

Do đó $A'(x)=2400-4x$, nên $x=600$ và $y=1200$. Diện tích lớn nhất là $720000\text{ ft}^2$.

**D. Đường cong tham số.**
Với $x=t^2$ và $y=t^3-3t$,

$$
\frac{dy}{dx}=\frac{3t^2-3}{2t}.
$$

Tại $(3,0)$, $t=\pm\sqrt3$, nên hai hệ số góc là $\pm\sqrt3$ và hai tiếp tuyến là

$$
y=\sqrt3(x-3),\qquad y=-\sqrt3(x-3).
$$

Tiếp tuyến ngang xảy ra tại $t=\pm1$, cho $(1,-2)$ và $(1,2)$. Tiếp tuyến đứng xảy ra tại $t=0$, cho $(0,0)$. Ngoài ra

$$
\frac{d^2y}{dx^2}=\frac{3(t^2+1)}{4t^3},
$$

nên đường cong lõm xuống khi $t<0$ và lõm lên khi $t>0$.

## Bài luyện tập thêm

1. L'Hospital: $\displaystyle \lim_{x\to2}\frac{2^x-x^2}{x-2}$ và $\displaystyle \lim_{x\to\pi/2}(\sin x)^{\tan x}$.
2. Taylor/Maclaurin: khai triển $\frac{6}{1+\sin x}$ đến cấp $3$, và tìm hệ số của $x^{10}$ trong $x^2\cos x$.
3. Khảo sát đồ thị: tìm cực trị của $y=\ln x-x$, lồi lõm/điểm uốn của $y=e^{2x-x^2}$, và tất cả tiệm cận của $y=e^{1/x}-x$.
4. Tối ưu: tìm kích thước của một lon hình trụ kín có thể tích cố định sao cho diện tích bề mặt nhỏ nhất.
5. Đường cong tham số: làm lại bài $x=t^2,\ y=t^3-3t$ mà không nhìn lời giải; sau đó lặp lại với biến thể $x=t^2-1$.

## Bài đọc và tài liệu tham khảo

- Chủ đề: quy tắc L'Hospital, Taylor và Maclaurin, khảo sát hàm số, tối ưu, và đường cong tham số
- [OpenStax Calculus Volume 1, Chapter 4: Applications of Derivatives](https://openstax.org/books/calculus-volume-1/pages/4-introduction)
- [OpenStax Calculus Volume 2, 7.1: Parametric Equations](https://openstax.org/books/calculus-volume-2/pages/7-1-parametric-equations)
{% end %}
