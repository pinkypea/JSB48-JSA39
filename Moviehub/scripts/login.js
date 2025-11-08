/**
Lấy thẻ <form> và gắn sự kiện submit
    - document.querySelector("form"): lấy phần tử <form> trên trang.
    - addEventListener("submit", ...): lắng nghe sự kiện “gửi form”.
    - e.preventDefault(): chặn hành vi mặc định của form (không cho load lại trang).
 */
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    /** 
    Kiểm tra xem có dữ liệu người dùng không
        - localStorage.getItem("users") là danh sách người dùng đã đăng ký (được lưu khi tạo tài khoản).
        - Nếu không có (chưa ai đăng ký) → báo "No user found" và dừng luôn.
    */
    if (!localStorage.getItem("users")){
        alert("No user found");
    }
    else {
        /**
        Nếu có danh sách người dùng, lấy thông tin nhập vào
            - Parse chuỗi JSON trong localStorage thành mảng các đối tượng user.
            - Lấy giá trị mà người dùng nhập trong form login.
         */
        let users = JSON.parse(localStorage.getItem("users"));

        let email = document.getElementById("email");
        let password = document.getElementById("password");

        /**
        Tìm xem người dùng có tồn tại không
            - .find() sẽ tìm phần tử đầu tiên trong mảng users mà 
                + email trùng khớp
                + password trùng khớp.
         */
        let existing_user = users.find(
            (index) => 
                index.email === email.value.trim() &&
                index.password === password.value.trim()
        );

        /**
        Xử lý kết quả đăng nhập
        - Nếu đăng nhập đúng:
            + Lưu thông tin user đang đăng nhập vào localStorage với khóa "currentUser".
            + Chuyển hướng sang trang chủ (index.html).
        - Nếu sai email hoặc mật khẩu:
            + Hiện thông báo lỗi "Email or password is incorrect".
         */
        if (existing_user) {
            localStorage.setItem("current_user", JSON.stringify(existing_user));
            location.href = "../index.html";
        }
        else {
            alert("Email or password is incorrect");
        }
    }
});