// Lấy các phần tử tab buttons và nội dung tab
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Xử lý sự kiện khi click vào từng tab
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Xóa class "active" khỏi tất cả các nút và nội dung
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Thêm class "active" cho nút và nội dung được chọn
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab'); // Lấy ID của tab
    document.getElementById(tabId).classList.add('active'); // Hiển thị tab tương ứng
  });
});

