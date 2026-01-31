// Hàm không có giá trị trả về
function say_hello(name) {
    console.log("Hello", name);
}
say_hello("JSI32");

// Hàm có giá trị trả về
function get_average(a, b, c){
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}
let result = get_average(10, 20, 50);
console.log(result);

// Viết lại 2 hàm bên trên theo cú pháp arrow function
// let say_hello = (name) => console.log("Hello", name);
// let get_average = (a, b, c) => {
//     let sum = a +b + c;
//     let average = sum / 3;
//     return average;
// }

// Template literals cho phép nhúng biến vào string
let first_name = "Kiên";
let middle_name = "Trung";
let last_name = "Đào";

let full_name = `${last_name} ${middle_name} ${first_name}`;
console.log(full_name);

let product = "Laptop";
let price = 16000000;
const VAT = 0.1;
// Hãy in ra màn hình các thông tin theo cú pháp sau:
// Sản phẩm: ...
// Gía tiền: ... VND
// Thuế VAT: ... %
// Tổng tiền: ... VND

let total_price = price + price * VAT;
let order = `
Sản phẩm: ${product}
Gía tiền: ${price}VND
Thuế VAT: ${VAT * 100}%
Tổng tiền: ${total_price}`;
console.log(order);

// Array method
let students = ["Lâm", "Phúc", "Khải", "Sơn", "Minh", "Qúy off", "Qúy onl"]
// Duyệt mảng
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

// Thêm phần tử vào mảng
students.push("Vân");
students.push(["Vân", "Bảo"]);

// Xóa phần tử
students.pop(); // xóa phần tử ở cuối mảng
students.shift(); // xóa phần từ ở đầu mảng

// Sắp xếp mảng
students.sort();

// Map method
let numbers = [1, 2, 3, 4, 5];
let map_method = numbers.map(num => num + 2);
console.log(map_method);

// Filter method
let filter_method = numbers.filter(num => num % 2 != 0);
console.log(filter_method);

// Find method
let find_method = numbers.find(num => num > 2);
console.log(find_method);

// Dữ liệu đầu vào là một mảng các số nguyên. Hãy sử dụng các phương thức filter(), map(), và find() để:
// - Lọc ra các số chẵn.
// - Tính bình phương của các số chẵn.
// - Tìm kiếm số đầu tiên có giá trị lớn hơn hoặc bằng 100 trong mảng đã được tính bình phương.
let numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_number = numbers_1.filter(num => num % 2 == 0);
let square_number = even_number.map(num => num ** 2);
let result1 = square_number.find(num => num >= 100);
console.log(result1);
