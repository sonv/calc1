+++
title = "Project"
description = "Major assignment structure and evaluation anchors."
weight = 30
+++

{% lang(code="en") %}
The syllabus assigns a major project component worth 30 percent of the course grade. The project should reinforce the course goal: using single-variable calculus and differential equations to model practical problems.

## Recommended Project Shape

Students work in groups and submit:

- a short problem statement
- a mathematical model
- calculations or simulations
- interpretation of results
- a brief presentation

## Class Project Pages

- [DTQ1 project groups](@/project/dtq1.md)
- [DT02 project groups](@/project/dt02.md)

## Possible Themes

Choose a theme that lets your group make decisions, test assumptions, and explain what the mathematics reveals. A good project should not only compute an answer; it should tell a short story about a real situation.

### Optimization in Engineering Design

Design something under constraints: a container, beam, package, tank, heat sink, simple structure, or route. Your group should define what is being optimized, explain the constraints, build a function or model, and use calculus to locate the best design. Julia can help you plot the objective function, compare designs, and test how the optimum changes when costs, dimensions, or material limits change.

References: [OpenStax Calculus 1: Applied Optimization Problems](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems), [Optim.jl documentation](https://julianlsolvers.github.io/Optim.jl/stable/), [Plots.jl documentation](https://docs.juliaplots.org/stable/).

### Accumulated Change and Numerical Integration

Study a quantity that accumulates from changing data: distance from velocity, water use from flow rate, energy from power, or total pollutant exposure from concentration. Your group should explain what integral represents the accumulated quantity, compare numerical methods, and discuss accuracy. Julia can help you work with data, visualize rates, compute approximations, and compare results under noisy or incomplete measurements.

References: [OpenStax Calculus 2: Numerical Integration](https://openstax.org/books/calculus-volume-2/pages/3-6-numerical-integration), [QuadGK.jl documentation](https://juliamath.github.io/QuadGK.jl/stable/), [Plots.jl documentation](https://docs.juliaplots.org/stable/).

### Physical Applications of Definite Integrals

Use integration to measure something physical: work, pressure force, center of mass, volume, arc length, or surface area. Your group should choose a realistic geometry or force law, derive the integral, compute it, and interpret the units and meaning of the answer. Julia can help you evaluate difficult integrals numerically, plot the geometry, and compare simplified and more realistic models.

References: [OpenStax Calculus 2: Physical Applications](https://openstax.org/books/calculus-volume-2/pages/2-5-physical-applications), [OpenStax Calculus 2: Arc Length and Surface Area](https://openstax.org/books/calculus-volume-2/pages/2-4-arc-length-of-a-curve-and-surface-area), [QuadGK.jl documentation](https://juliamath.github.io/QuadGK.jl/stable/).

### Population or Mixing Models with First-Order ODEs

Model a process that changes continuously over time: population growth with limited resources, salt concentration in a tank, cooling, medicine concentration, or spread of a simple signal/quantity. Your group should state assumptions, derive a first-order differential equation, solve or simulate it, and explain long-term behavior. Julia can help you run simulations, estimate parameters, and test how the model changes under different scenarios.

References: [OpenStax Calculus 2: Separable Equations](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations), [OpenStax Calculus 2: The Logistic Equation](https://openstax.org/books/calculus-volume-2/pages/4-4-the-logistic-equation), [DifferentialEquations.jl documentation](https://docs.sciml.ai/DiffEqDocs/stable/).

### Oscillations and Systems with Second-Order ODEs

Model motion or response in a system with inertia: a spring-mass system, vibration absorber, simple suspension, RLC circuit, or damped oscillator. Your group should explain the physical meaning of each term in the differential equation, compare undamped/damped/forced behavior, and interpret stability or resonance. Julia can help you simulate motion, plot phase diagrams, and explore how damping or forcing changes the system.

References: [Paul's Online Notes: Mechanical Vibrations](https://tutorial.math.lamar.edu/classes/de/Vibrations.aspx), [OpenStax University Physics 1: Simple Harmonic Motion](https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion), [DifferentialEquations.jl documentation](https://docs.sciml.ai/DiffEqDocs/stable/).

## Evaluation Ideas

| Category | Weight |
|---|---:|
| Mathematical model | 30 percent |
| Correct calculations | 25 percent |
| Interpretation and communication | 25 percent |
| Presentation and teamwork | 20 percent |

## Peer Evaluation and Individual Contribution

Every group must include a short peer-evaluation section in its report so that each person's contribution is visible and graded fairly. The process has five steps.

1. **Assign tasks (leader).** The group leader records and assigns a specific task to each member and documents this clearly in the report (see the task table below).
2. **Track completion (leader).** The leader notes whether each member finished their assigned task. If a task was not completed, the leader records who took it over and finished it.
3. **Self-evaluation (each member).** Each member lists the tasks they were responsible for and rates how well each was done from 1 to 5, briefly explaining what they actually did to justify the score.
4. **Peer evaluation (each member, confidential).** Each member privately rates every other member, including the leader, on the same 1–5 scale, and may add a comment or complaint. These individual ratings are submitted confidentially to the instructor and are **not** shown with rater names in the group report.
5. **Final individual score.** Each person's contribution score is the average of the confidential ratings their teammates give them. The instructor collects the ratings and computes the averages.

Scale: 1 = very weak contribution, 3 = adequate, 5 = excellent contribution.

**Task assignment and completion (filled in by the leader):**

| Member | Assigned task | Completed? | If not, who finished it |
|---|---|---|---|
|  |  | Yes / No |  |

**Self-evaluation (filled in by each member):**

| Member | Task(s) performed | Self-score (1–5) | What they did to complete it |
|---|---|---:|---|
|  |  |  |  |

**Peer ratings are collected separately.** The instructor sends out a short confidential survey in which each member rates every teammate (including the leader) from 1 to 5, with optional comments. These ratings are **not** placed in the group report, and no one in the group sees who gave which score.
{% end %}

{% lang(code="vi") %}
Đề cương quy định phần bài tập lớn chiếm 30 phần trăm điểm môn học. Bài tập lớn nên củng cố mục tiêu của môn học: dùng giải tích một biến và phương trình vi phân để mô hình hóa các bài toán thực tế.

## Cấu trúc đề nghị

Sinh viên làm việc theo nhóm và nộp:

- một phát biểu bài toán ngắn
- một mô hình toán học
- các phép tính hoặc mô phỏng
- phần diễn giải kết quả
- một bài trình bày ngắn

## Trang nhóm theo lớp

- [Nhóm bài tập lớn DTQ1](@/project/dtq1.md)
- [Nhóm bài tập lớn DT02](@/project/dt02.md)

## Chủ đề gợi ý

Hãy chọn một chủ đề cho phép nhóm đưa ra quyết định, kiểm tra giả thiết và giải thích điều mà toán học cho thấy. Một bài tập lớn tốt không chỉ tính ra một đáp số; nó kể một câu chuyện ngắn về một tình huống thực tế.

### Tối ưu trong thiết kế kỹ thuật

Thiết kế một đối tượng dưới các ràng buộc: hộp chứa, dầm, bao bì, bồn chứa, bộ tản nhiệt, kết cấu đơn giản hoặc tuyến đường. Nhóm cần xác định đại lượng cần tối ưu, giải thích các ràng buộc, xây dựng hàm hoặc mô hình, và dùng giải tích để tìm thiết kế tốt nhất. Julia có thể giúp vẽ hàm mục tiêu, so sánh các phương án, và kiểm tra nghiệm tối ưu thay đổi thế nào khi chi phí, kích thước hoặc giới hạn vật liệu thay đổi.

Tài liệu tham khảo: [OpenStax Calculus 1: Applied Optimization Problems](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems), [tài liệu Optim.jl](https://julianlsolvers.github.io/Optim.jl/stable/), [tài liệu Plots.jl](https://docs.juliaplots.org/stable/).

### Biến thiên tích lũy và tích phân số

Khảo sát một đại lượng được tích lũy từ dữ liệu thay đổi: quãng đường từ vận tốc, lượng nước từ lưu lượng, năng lượng từ công suất, hoặc tổng mức phơi nhiễm từ nồng độ. Nhóm cần giải thích tích phân biểu diễn đại lượng tích lũy nào, so sánh các phương pháp tính gần đúng, và thảo luận độ chính xác. Julia có thể giúp xử lý dữ liệu, vẽ đồ thị tốc độ thay đổi, tính xấp xỉ, và so sánh kết quả khi dữ liệu nhiễu hoặc thiếu.

Tài liệu tham khảo: [OpenStax Calculus 2: Numerical Integration](https://openstax.org/books/calculus-volume-2/pages/3-6-numerical-integration), [tài liệu QuadGK.jl](https://juliamath.github.io/QuadGK.jl/stable/), [tài liệu Plots.jl](https://docs.juliaplots.org/stable/).

### Ứng dụng vật lý của tích phân xác định

Dùng tích phân để đo một đại lượng vật lý: công, lực do áp suất, khối tâm, thể tích, độ dài cung hoặc diện tích mặt. Nhóm cần chọn một hình học hoặc quy luật lực hợp lý, thiết lập tích phân, tính toán, và diễn giải đơn vị cũng như ý nghĩa của kết quả. Julia có thể giúp tính các tích phân khó bằng phương pháp số, vẽ hình học, và so sánh mô hình đơn giản với mô hình thực tế hơn.

Tài liệu tham khảo: [OpenStax Calculus 2: Physical Applications](https://openstax.org/books/calculus-volume-2/pages/2-5-physical-applications), [OpenStax Calculus 2: Arc Length and Surface Area](https://openstax.org/books/calculus-volume-2/pages/2-4-arc-length-of-a-curve-and-surface-area), [tài liệu QuadGK.jl](https://juliamath.github.io/QuadGK.jl/stable/).

### Mô hình dân số hoặc mô hình trộn bằng ODE cấp một

Mô hình hóa một quá trình thay đổi liên tục theo thời gian: tăng trưởng dân số có giới hạn tài nguyên, nồng độ muối trong bồn trộn, quá trình làm nguội, nồng độ thuốc, hoặc sự lan truyền của một đại lượng đơn giản. Nhóm cần nêu giả thiết, thiết lập phương trình vi phân cấp một, giải hoặc mô phỏng, và giải thích hành vi dài hạn. Julia có thể giúp chạy mô phỏng, ước lượng tham số, và kiểm tra mô hình thay đổi thế nào trong các kịch bản khác nhau.

Tài liệu tham khảo: [OpenStax Calculus 2: Separable Equations](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations), [OpenStax Calculus 2: The Logistic Equation](https://openstax.org/books/calculus-volume-2/pages/4-4-the-logistic-equation), [tài liệu DifferentialEquations.jl](https://docs.sciml.ai/DiffEqDocs/stable/).

### Dao động và hệ thống với ODE cấp hai

Mô hình hóa chuyển động hoặc đáp ứng của một hệ có quán tính: hệ lò xo-khối lượng, bộ giảm rung, hệ treo đơn giản, mạch RLC, hoặc dao động tắt dần. Nhóm cần giải thích ý nghĩa vật lý của từng hạng tử trong phương trình vi phân, so sánh trường hợp không tắt dần/có tắt dần/có ngoại lực, và diễn giải tính ổn định hoặc cộng hưởng. Julia có thể giúp mô phỏng chuyển động, vẽ biểu đồ pha, và khảo sát hệ thay đổi thế nào khi hệ số cản hoặc ngoại lực thay đổi.

Tài liệu tham khảo: [Paul's Online Notes: Mechanical Vibrations](https://tutorial.math.lamar.edu/classes/de/Vibrations.aspx), [OpenStax University Physics 1: Simple Harmonic Motion](https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion), [tài liệu DifferentialEquations.jl](https://docs.sciml.ai/DiffEqDocs/stable/).

## Gợi ý đánh giá

| Hạng mục | Trọng số |
|---|---:|
| Mô hình toán học | 30 phần trăm |
| Phép tính đúng | 25 phần trăm |
| Diễn giải và trình bày | 25 phần trăm |
| Thuyết trình và làm việc nhóm | 20 phần trăm |

## Đánh giá đồng đẳng và đóng góp cá nhân

Mỗi nhóm phải kèm một phần đánh giá đồng đẳng ngắn trong bài báo cáo để đóng góp của từng người được thể hiện rõ và chấm điểm công bằng. Quy trình gồm năm bước.

1. **Phân công nhiệm vụ (nhóm trưởng).** Nhóm trưởng ghi lại và phân công nhiệm vụ cụ thể cho từng thành viên, và ghi rõ trong bài báo cáo (xem bảng phân công bên dưới).
2. **Theo dõi hoàn thành (nhóm trưởng).** Nhóm trưởng ghi nhận mỗi thành viên có hoàn thành nhiệm vụ được giao hay không. Nếu một nhiệm vụ chưa hoàn thành, nhóm trưởng ghi rõ ai đã đảm nhận và hoàn thành thay.
3. **Tự đánh giá (mỗi thành viên).** Mỗi thành viên liệt kê các nhiệm vụ mình phụ trách và tự chấm mức độ hoàn thành từ 1 đến 5, giải thích ngắn gọn mình đã làm gì để minh chứng cho điểm số.
4. **Đánh giá chéo (mỗi thành viên, bảo mật).** Mỗi thành viên chấm điểm riêng cho tất cả các thành viên khác, bao gồm cả nhóm trưởng, theo cùng thang điểm 1–5, và có thể kèm nhận xét hoặc phàn nàn. Các điểm chấm này được nộp bảo mật cho giảng viên và **không** ghi kèm tên người chấm trong bài báo cáo của nhóm.
5. **Điểm cá nhân cuối cùng.** Điểm đóng góp của mỗi người là trung bình cộng các điểm bảo mật mà các thành viên khác chấm cho người đó. Giảng viên thu thập các điểm này và tính trung bình.

Thang điểm: 1 = đóng góp rất yếu, 3 = đạt yêu cầu, 5 = đóng góp xuất sắc.

**Phân công và hoàn thành nhiệm vụ (nhóm trưởng điền):**

| Thành viên | Nhiệm vụ được giao | Hoàn thành? | Nếu không, ai hoàn thành thay |
|---|---|---|---|
|  |  | Có / Không |  |

**Tự đánh giá (mỗi thành viên điền):**

| Thành viên | Nhiệm vụ đã làm | Tự chấm (1–5) | Đã làm gì để hoàn thành |
|---|---|---:|---|
|  |  |  |  |

**Điểm đánh giá chéo được thu thập riêng.** Giảng viên gửi một khảo sát bảo mật ngắn, trong đó mỗi thành viên chấm điểm tất cả các thành viên khác (kể cả nhóm trưởng) từ 1 đến 5, kèm nhận xét tùy chọn. Các điểm này **không** đưa vào bài báo cáo của nhóm, và không ai trong nhóm biết ai đã chấm điểm nào.
{% end %}
