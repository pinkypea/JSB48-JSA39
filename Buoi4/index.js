/**
 * 1. ARRAY
 */
// Khai báo array
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4];
let mixed_array = ["hello", 1, 2, 3, true];
let empty_array = []; // khai báo array rỗng

// Truy vấn/Duyệt mảng
let arr = [1, 2, "three", true, null];
console.log(arr[1]);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Thêm phần tử
arr.push(5, 10);
console.log(arr);

// Cập nhật phần tử
arr[0] = 0;
console.log(arr);
arr.splice(3, 2, false);
console.log(arr);

// Tìm kiếm phần tử
// [0, 2, "three", false, 5, 10]
console.log(arr.indexOf(false));
console.log(arr.indexOf("three"));
console.log(arr.indexOf(1000));

// Xóa phần tử
arr.splice(2, 2);
console.log(arr);

/**
 * 2. OBJECT
 */

// Khai báo object
let person = {
    first_name: "John",
    last_name: "Wick",
    weapon: "gun",
    age: 50
}

// Truy vấn object
console.log(person.first_name);
console.log(person["last_name"]);

// Duyệt object
for (let key in person){
    
}

// Thêm key
person.hometown = "USA";
person["pet"] = "dog";
person.age = 40;
console.log(person);

// Tìm kiếm key
if ("weapon" in person){
    console.log("John Wick có vũ khí");
}

// Xóa key
delete person.pet;
console.log(person);

// Thực hành
let hoc_sinh = [
    {ten: "An", tuoi: 15, lop: "10A1"},
    {ten: "Bình", tuoi: 16, lop: "11A2"},
    {ten: "Châu", tuoi: 15, lop: "10A1"}
]

// Yêu cầu 1
hoc_sinh.push({ten: "Dũng", tuoi: 17, lop: "11A3"});

// Yêu cầu 2
for (let i = 0; i < hoc_sinh.length; i++){
    console.log(`Tên: ${hoc_sinh[i].ten}; Tuổi: ${hoc_sinh[i].tuoi}; Lớp: ${hoc_sinh[i].lop}`);
}

// Yêu cầu 3
for (let i = 0; i < hoc_sinh.length; i++){
    if (hoc_sinh.ten == "Bình"){
        hoc_sinh.tuoi = 17;
    }
}

// Yêu cầu 4
hoc_sinh.splice(2, 1);

/**
 * 3. DOM
 */

// Lấy các phần tử html vào js để xử lý
let element_by_id = document.getElementById("my-element"); // lấy phần tử HTML bằng id
let element_by_class = document.getElementsByClassName("my-element"); // lấy phần tử HTML bằng class
let element_by_tag = document.getElementsByTagName("p"); // lấy phần tử HTML bằng tag name
// Lấy phần tử HTML bằng querySelector
let element = document.querySelector('.my-element');
let element1 = document.querySelector('#my-element');
// let container = document.querySelector(".container");

// // Tạo 1 phần tử HTML mới
// let new_element = document.createElement("div");

// // Thêm div mới vào trong container bằng appendChild
// container.appendChild(new_element);

// // Thêm nội dung vào div mới bằng innerHTML
// new_element.innerHTML = '<p>New content</p>';

// // Đặt style cho div mới
// new_element.style.border = "1px solid red";
// new_element.style.padding = "10px";

let container = document.querySelector(".container");
new_element = document.createElement("div");
new_element.classList.add("item");
container.appendChild(new_element);
new_element.innerHTML = '<p>Đây là tiêu đề</p>';
