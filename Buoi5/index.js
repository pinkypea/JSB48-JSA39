/**
 * HÀM
 */

// Khởi tạo hàm
// Viết hàm để tính diện tích HCN
function dien_tich_hcn(width, length){
    let area = width * length;
    console.log(area);
}

dien_tich_hcn(10, 20);
dien_tich_hcn(5, 10);
dien_tich_hcn(3, 7);

let width = 5;
let length = 8;
dien_tich_hcn(width, length);

let a = 1;
let b = 2;
dien_tich_hcn(a, b);

// Hàm có giá trị trả về
function dien_tich_hcn1(width, length) {
    let area = width * length;
    return area;
}

let result = dien_tich_hcn1(10, 20);
console.log(result);

// Hàm không có giá trị trả về
function dien_tich_hcn2(width, length){
    let area = width * length;
    console.log(area);
}

// Tính tổng 2 số
function get_sum(x, y){
    let sum = x + y;
    console.log(sum);
}
let d = 10; // khai báo biến cục bộ (local variable)
const e = 10; // khai báo biến cố định
var f = 10; // khai báo biến toàn cục (global variable)

// Thực hành bài 3
function tinh_giai_thua(n) {
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

let result1 = tinh_giai_thua(5);
console.log(result1);

// Thực hành bài 4
function convert_C_to_F(celsius){
    let Faraheit = celsius * 9/5 + 32;
    return Faraheit;
}

/**
 * LOCAL STORAGE
 */
// Lưu trữ các giá trị
localStorage.setItem("name", "Kiên");

// Truy vấn giá trị
let test = localStorage.getItem("name");
console.log(test);

// Xóa 1 giá trị
localStorage.removeItem("name");

// Xóa tất cả giá trị
localStorage.clear();

let user = {
    username: "daotrungkien",
    password: "daotrungkien123",
    email: "daotrungkien@gmail.com",
    age: 10
}
// Lưu dữ liệu thông qua JSON vào localStorage
localStorage.setItem("user", JSON.stringify(user));

// Lấy dữ liệu từ localStorage thông qua JSON
let test_data = JSON.parse(localStorage.getItem("user"));
console.log(test_data);