document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const sentMessage = document.querySelector('.sent-message');
    const loadingMessage = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');

    // Khi người dùng gửi form
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Ngừng hành động gửi form mặc định

        loadingMessage.style.display = 'block';  // Hiển thị thông báo "Loading"
        errorMessage.style.display = 'none';    // Ẩn thông báo lỗi (nếu có)
        sentMessage.style.display = 'none';     // Ẩn thông báo thành công trước khi gửi

        // Giả lập gửi form thành công (ở đây bạn sẽ thêm mã gửi dữ liệu thật sự, ví dụ qua AJAX)
        setTimeout(function() {
            loadingMessage.style.display = 'none';  // Ẩn thông báo "Loading"
            sentMessage.style.display = 'block';   // Hiển thị thông báo "Your message has been sent"
        }, 2000);  // Giả lập thời gian gửi form (2 giây)
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const sentMessage = document.querySelector('.sent-message');
    const loadingMessage = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const inputs = form.querySelectorAll('input, textarea');  // Chọn tất cả các input và textarea trong form

    // Khi người dùng gửi form
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Ngừng hành động gửi form mặc định

        // Hiển thị thông báo "Loading"
        loadingMessage.style.display = 'block'; 
        sentMessage.style.display = 'none';     // Ẩn thông báo thành công
        errorMessage.style.display = 'none';    // Ẩn thông báo lỗi (nếu có)

        // Sau 1 giây, ẩn "Loading" và hiển thị "Your message has been sent. Thank you!"
        setTimeout(function() {
            loadingMessage.style.display = 'none';  // Ẩn thông báo "Loading"
            sentMessage.style.display = 'block';   // Hiển thị thông báo "Your message has been sent"

            // Xóa nội dung trong các ô nhập liệu
            inputs.forEach(function(input) {
                input.value = '';  // Đặt giá trị của từng ô input, textarea thành rỗng
            });

        }, 1000);  // Thực hiện sau 1 giây
    });
});
