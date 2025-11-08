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
    Lấy dữ liệu người dùng nhập
        - Lấy giá trị từ các ô input có id tương ứng.
        - .trim() loại bỏ khoảng trắng thừa ở đầu/cuối.
     */
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    /**
    Kiểm tra độ mạnh mật khẩu
        - Các biểu thức chính quy (regex) để kiểm tra xem mật khẩu có:
            + chữ thường ([a-z])
            + chữ hoa ([A-Z])
            + số ([0-9])
     */
    let lower_case_letter = /[a-z]/g;
    let upper_case_letter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    /**
    Kiểm tra hợp lệ từng điều kiện
        - Nếu bất kỳ điều kiện nào không đạt, hiển thị thông báo lỗi qua alert() và dừng lại (không đăng ký).
        - Chỉ khi tất cả hợp lệ mới tiếp tục.
     */
    if (username.length < 6) {
        alert("Username must be at least 6 characters");
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters");
    }
    else if (!password.match(lower_case_letter)){
        alert("Password must contain a lowercase letter")
    }
    else if (!password.match(upper_case_letter)){
        alert("Password must contain an uppercase letter");
    }
    else if (!password.match(numbers)){
        alert("Password must contain a number");
    }
    else {
        /**
        Lưu thông tin người dùng mới
            - localStorage dùng để lưu dữ liệu cục bộ (trong trình duyệt).
            - Nếu đã có mảng users (danh sách người dùng):
                + Parse JSON thành mảng users.
                + Thêm người dùng mới bằng push().
                + Ghi lại (setItem) vào localStorage sau khi chuyển sang JSON.
            - Nếu chưa có ai đăng ký:
                + Tạo mảng mới chứa user đầu tiên.
         */
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));

            users.push({
                email,
                password,
                username
            });
            localStorage.setItem("users", JSON.stringify(users));
        }
        else {
            localStorage.setItem("users", JSON.stringify([
                {
                    email,
                    password,
                    username
                },
            ]));
        }
        /**
        Thông báo và chuyển hướng
            - Sau khi tạo tài khoản thành công → hiện thông báo.
            - Rồi chuyển sang trang login.html để người dùng đăng nhập.
         */
        alert("User created successfully, please login");
        location.href = "../login.html";

    }
})