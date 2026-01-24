// Khai báo biến

let age = 20; // Khai báo biến cục bộ
var name = "Alex"; // Khai báo biến toàn cục
const PI = 3.14; // Khai báo biến không đổi

// Sử dụng vòng lặp để tổng các số từ 1 đến 10
// Vòng lặp for
let for_sum = 0;
for (let i = 1; i <= 10; i++){
    for_sum += i;
}
console.log(for_sum);

// Vòng lặp while
let let_sum = 0;
let i = 1;
while (i <= 10){
    let_sum += i;
    i++;
}
console.log(let_sum);

// Vòng lặp do-while
let do_while_sum = 0;
let j = 1;
do {
    do_while_sum += j;
    j++;
} while(j <= 10)

for (let i = 0; i <= 5; i++){
    console.log(i);
}

let I = 0;
while (I <= 5) {
    console.log(I);
    I++;
}

// Câu điều kiện
// Kiểm tra số điểm nếu:
//     - Điểm >=80 -> HSG
//     - Điểm >=60 -> HSK
//     - Điểm >=40 -> HSTB
//     - Điểm < 40 -> HSY


let score = 50;
if (score >= 80 && score <= 100){
    console.log("Học sinh giỏi");
} 
else if (score >= 60 && score < 80){
    console.log("Học sinh khá");
}
else if (score >= 40 && score < 60){
    console.log("Học sinh trung bình");
}
else{
    console.log("Học sinh yếu")
}

// Tính tổng các số chia hết cho 3, và tích các số chia hết cho 10
// trong khoảng từ 1 đến 50.

let sum = 0;
let multiply = 1;
for (let i = 1; i <= 50; i++){
    if (i % 3 == 0){
        sum += i;
    }
    if (i % 10 == 0){
        multiply *= i;
    }
}
console.log(sum, multiply);

// DOM
const h1 = document.querySelector(".my_heading");
const h2 = document.querySelector("#my_heading");