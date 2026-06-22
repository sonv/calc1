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

### Accumulated Change and Numerical Integration

Study a quantity that accumulates from changing data: distance from velocity, water use from flow rate, energy from power, or total pollutant exposure from concentration. Your group should explain what integral represents the accumulated quantity, compare numerical methods, and discuss accuracy. Julia can help you work with data, visualize rates, compute approximations, and compare results under noisy or incomplete measurements.

### Physical Applications of Definite Integrals

Use integration to measure something physical: work, pressure force, center of mass, volume, arc length, or surface area. Your group should choose a realistic geometry or force law, derive the integral, compute it, and interpret the units and meaning of the answer. Julia can help you evaluate difficult integrals numerically, plot the geometry, and compare simplified and more realistic models.

### Population or Mixing Models with First-Order ODEs

Model a process that changes continuously over time: population growth with limited resources, salt concentration in a tank, cooling, medicine concentration, or spread of a simple signal/quantity. Your group should state assumptions, derive a first-order differential equation, solve or simulate it, and explain long-term behavior. Julia can help you run simulations, estimate parameters, and test how the model changes under different scenarios.

### Oscillations and Systems with Second-Order ODEs

Model motion or response in a system with inertia: a spring-mass system, vibration absorber, simple suspension, RLC circuit, or damped oscillator. Your group should explain the physical meaning of each term in the differential equation, compare undamped/damped/forced behavior, and interpret stability or resonance. Julia can help you simulate motion, plot phase diagrams, and explore how damping or forcing changes the system.

## Evaluation Ideas

| Category | Weight |
|---|---:|
| Mathematical model | 30 percent |
| Correct calculations | 25 percent |
| Interpretation and communication | 25 percent |
| Presentation and teamwork | 20 percent |
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

### Biến thiên tích lũy và tích phân số

Khảo sát một đại lượng được tích lũy từ dữ liệu thay đổi: quãng đường từ vận tốc, lượng nước từ lưu lượng, năng lượng từ công suất, hoặc tổng mức phơi nhiễm từ nồng độ. Nhóm cần giải thích tích phân biểu diễn đại lượng tích lũy nào, so sánh các phương pháp tính gần đúng, và thảo luận độ chính xác. Julia có thể giúp xử lý dữ liệu, vẽ đồ thị tốc độ thay đổi, tính xấp xỉ, và so sánh kết quả khi dữ liệu nhiễu hoặc thiếu.

### Ứng dụng vật lý của tích phân xác định

Dùng tích phân để đo một đại lượng vật lý: công, lực do áp suất, khối tâm, thể tích, độ dài cung hoặc diện tích mặt. Nhóm cần chọn một hình học hoặc quy luật lực hợp lý, thiết lập tích phân, tính toán, và diễn giải đơn vị cũng như ý nghĩa của kết quả. Julia có thể giúp tính các tích phân khó bằng phương pháp số, vẽ hình học, và so sánh mô hình đơn giản với mô hình thực tế hơn.

### Mô hình dân số hoặc mô hình trộn bằng ODE cấp một

Mô hình hóa một quá trình thay đổi liên tục theo thời gian: tăng trưởng dân số có giới hạn tài nguyên, nồng độ muối trong bồn trộn, quá trình làm nguội, nồng độ thuốc, hoặc sự lan truyền của một đại lượng đơn giản. Nhóm cần nêu giả thiết, thiết lập phương trình vi phân cấp một, giải hoặc mô phỏng, và giải thích hành vi dài hạn. Julia có thể giúp chạy mô phỏng, ước lượng tham số, và kiểm tra mô hình thay đổi thế nào trong các kịch bản khác nhau.

### Dao động và hệ thống với ODE cấp hai

Mô hình hóa chuyển động hoặc đáp ứng của một hệ có quán tính: hệ lò xo-khối lượng, bộ giảm rung, hệ treo đơn giản, mạch RLC, hoặc dao động tắt dần. Nhóm cần giải thích ý nghĩa vật lý của từng hạng tử trong phương trình vi phân, so sánh trường hợp không tắt dần/có tắt dần/có ngoại lực, và diễn giải tính ổn định hoặc cộng hưởng. Julia có thể giúp mô phỏng chuyển động, vẽ biểu đồ pha, và khảo sát hệ thay đổi thế nào khi hệ số cản hoặc ngoại lực thay đổi.

## Gợi ý đánh giá

| Hạng mục | Trọng số |
|---|---:|
| Mô hình toán học | 30 phần trăm |
| Phép tính đúng | 25 phần trăm |
| Diễn giải và trình bày | 25 phần trăm |
| Thuyết trình và làm việc nhóm | 20 phần trăm |
{% end %}
