---
name: create_module_skill
description: Chuyển đổi các file .html trong folder stitch thành các component ReactJS. Phân tích cấu trúc HTML, chuyển đổi sang JSX, tách CSS và xử lý JavaScript. Tự động tìm đến các file html trong folder stitch để chuyển đổi khi nhận lệnh.
---

# Quy trình chuyển đổi HTML sang ReactJS

Khi nhận được yêu cầu chuyển đổi file `.html` (đặc biệt từ folder `stitch`) sang React component, hãy thực hiện theo quy trình sau:

## 1. Phân tích đầu vào
- **Cấu trúc (Containers):** Nhận diện các vùng chính như `header`, `nav`, `main`, `footer`, `section`, `aside`...
- **Phần tử lặp (Repeating Elements):** Phát hiện các thành phần lặp lại như danh sách `card`, `row`, `menu items`, `list items` để chuẩn bị tách thành component nhỏ hoặc dùng vòng lặp (`.map()`).
- **Form & Input:** Xác định các form, ô nhập liệu...
- **CSS / Style:** Xác định file đang dùng là Tailwind CSS, Bootstrap, hay Vanilla CSS (inline style, thẻ `<style>`).
- **JavaScript:** Chú ý các sự kiện (events) như `onclick`, `onchange`, `onsubmit` hoặc các thẻ `<script>`.

## 2. Tạo khung xương (Skeleton)
- **Vị trí file JSX:** Tạo các file component `.jsx` và lưu vào folder `src` (hoặc `src/components`).
- **Vị trí file CSS:** Nếu sử dụng Vanilla CSS, tạo file `.css` tương ứng và lưu vào folder `src/style` (tạo folder nếu chưa có).

## 3. Chuyển đổi cú pháp HTML sang JSX
Áp dụng các quy tắc chuyển đổi sau:
- `class="..."` -> `className="..."`
- `for="id"` -> `htmlFor="id"`
- Các thuộc tính sự kiện: `onclick="fn()"` -> `onClick={handleFn}`, `onchange="fn()"` -> `onChange={handleFn}`. (Cần định nghĩa handler trong component).
- Thẻ tự đóng (Self-closing tags):
  - `<img>` -> `<img />`
  - `<input>` -> `<input />`
  - `<br>` -> `<br />`
  - `<hr>` -> `<hr />`
- Inline Style: `style="color:red;font-size:14px"` -> `style={{ color: 'red', fontSize: '14px' }}` (chuyển thuộc tính CSS sang camelCase).
- Comment: `<!-- comment -->` -> `{/* comment */}`
- **Nhiều thẻ cấp cao nhất (Multiple top-level elements):** Phải bọc tất cả trong Fragment `<> ... </>` hoặc thẻ `<div>`.

## 4. Chuyển đổi CSS
- **Tailwind CSS:** Giữ nguyên các class tiện ích, chỉ đổi thuộc tính `class` thành `className`.
- **Vanilla CSS / Inline Style:** Nếu có quá nhiều inline style phức tạp hoặc CSS trong thẻ `<style>`, hãy chuyển chúng sang file `.css` riêng trong folder `style` (ví dụ `style/ComponentName.css`), sau đó import vào file JSX (`import './style/ComponentName.css';`).

## 5. Chuyển đổi JavaScript
- **State & Hooks:** Chuyển đổi các biến trạng thái ở JS cũ sang dùng hook `useState`.
- **Lifecycle / Effects:** Chuyển đổi logic khởi tạo hoặc thao tác DOM sang hook `useEffect`.
- **Event Handlers:** Viết các hàm xử lý sự kiện (như `handleClick`, `handleChange`, `handleSubmit`) bên trong component và truyền vào các thuộc tính sự kiện của JSX (như `onClick`, `onChange`, `onSubmit`). Cần chú ý dùng `e.preventDefault()` cho form submit nếu cần.
- **Loại bỏ Query Selector:** Xóa bỏ các đoạn mã thao tác DOM trực tiếp bằng `document.getElementById` hoặc `querySelector`. Thay vào đó, sử dụng State của React hoặc `useRef` nếu thực sự cần thiết.

## 6. Kiểm tra (Testing)
- **Kiểm tra CSS và Build:** Bắt buộc phải chạy lệnh `npm run build` sau mỗi lần chuyển đổi từ HTML sang ReactJS để đảm bảo quá trình chuyển đổi không gây ra lỗi CSS hoặc lỗi biên dịch nào.
