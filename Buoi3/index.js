/**
 * TOÁN TỬ
 */

// Các phép toán cơ bản
let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(y % x);

// Cộng trừ nhân chia 1 giá trị vào 1 biến có sẵn
let a = 10;
a += 5;
a -= 5;
a *= 5;
a /= 5;
console.log(a);

let b = 10;
let c = 5;
console.log(b == c); // kiểm tra 2 giá trị bằng nhau
console.log(b != c); // kiểm tra 2 giá trị khác nhau
console.log(b > c);
console.log(b < c);

// Toán tử and (&&) trả về true nếu như tất cả điều kiện đều true
let d = 10;
let e = 20;
console.log(d > 5 && e > 5);
console.log(d > 10 && e > 5);

// Toán tử hoặc (||) trả về false nếu như tất cả điều kiện đều false
console.log(d > 5 || e > 5);
console.log(d > 10 || e > 5);
console.log(d < 5 || e < 5);

// Toán tử NOT (!) trả về giá trị phủ định
let f = true;
let g = false;
console.log(!f);
console.log(!g);

/**
 * CÂU ĐIỀU KIỆN
 */
// Nếu điểm của bạn bằng 10. Hiển thị ra "Bạn là học sinh giỏi".
let score = 9;
if (score == 10) {
    console.log("Bạn là học sinh giỏi");
}

// Nếu tuổi của bạn lớn hơn hoặc bằng 18, thì hiển thị ra "Bạn là người trưởng thành",
// nếu không thì hiển thị ra "Bạn chưa phải là người trưởng thành".
let age = 20;
if (age >= 18) {
    console.log("Bạn là người trưởng thành");
}
else {
    console.log("Bạn chưa phải là người trưởng thành");
}

// Nếu giá tiền lớn hơn hoặc bằng 100, thì hiển thị ra là "Món đồ này đắt",
// nếu giá tiền bé hơn 100 và lớn hơn hoặc bằng 50, thì hiển thị ra là "Món đồ này vừa túi tiền",
// nếu giá tiền bé hơn 50, thì hiển thị ra "Món đồ này rẻ".
let price = 50;
if (price >= 100) {
    console.log("Món đồ này đắt");
}
else if (price < 100 && price >= 50) {
    console.log("Món đồ này vừa túi tiền");
}
else {
    console.log("Món đồ này rẻ");
}

// Thực hành Câu điều kiện
let scoop = 5;
if (scoop >= 5) {
    console.log("Ăn nhanh lên, kem sắp chảy");
}
else if (scoop == 3) {
    console.log("Kem sắp hết");
}
else if (scoop == 2) {
    console.log ("Lần một");
}
else if (scoop == 1) {
    console.log("Lần hai");
}
else if (scoop == 0) {
    console.log("Hết rồi");
}
else {
    console.log("Vẫn còn nhiều kem, hãy lấy thêm");
}

/**
 * VÒNG LẶP
 */

// In ra cửa sổ console các số từ 1 đến 50
// Vòng lặp for
console.log("Vòng lặp for");
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 50; i >= 1; i--) {
    console.log(i);
}

// Vòng lặp while
console.log("Vòng lặp while");
let i = 1;
while (i <= 50){
    console.log(i);
    i++;
}

// Vòng lặp do - while
console.log("Vòng lặp do - while")
let j = 1;
do {
    console.log(j);
    j++;
}
while (j <= 50);

// Thực hành Bài 1
let h = 3;
let k = -7;
let l = 2;
let product = h * k * l;
if (product < 0) {
    console.log("Dấu là -");
}
else if (product > 0) {
    console.log("Dấu là +");
}
else {
    console.log("Không có dấu");
}

// Thực hành Bài 2
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0){
        console.log(i, "là số chẵn")
    }
    else {
        console.log(`${i} là số lẻ`)
    }
}