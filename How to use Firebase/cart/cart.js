// function loadCartProducts() {
//   const cartContainer = document.querySelector("#cartContainer");

//   cartContainer.innerHTML = `
//     <h1 class="cart-title>My cart</h1>
//     <div class = "cart-list" id = "cart-list></div>`;

//   db.collection("products")
//     .where("onCart", "==", true)
//     .get()
//     .then((querySnapshot) => {
//         const docs = querySnapshot.docs;
//         for (let i = 0; i < docs.length; i++) {
//             // Lấy ra các sản phẩm và lưu vào biến doc và product
//             const doc = docs[i];
//             const product = doc.data();

//             // Sử dụng DOM để hiển thị thông tin các sản phẩm
//             const productElement = document.createElement("div");
//             productElement.classList.add("product");

//             productElement.innerHTML = `
//                 <img src="${product.image}">
//                 <p>Name: ${product.name}</p>
//                 <p>Price: ${product.price}VND</p>
//                 `;
//             cartContainer.appendChild(productElement);
//         }
//     });
// }

// window.onload = loadCartProducts();

// function loadCartByUser() {
//     const cartContainer = document.querySelector("#cart-container");
//     const totalPrice = document.querySelector("#total-price");

//     // Lấy thông tin user hiện tại
//     let user = firebase.auth().currentUser;
//     let userId = user.uid;
//     let cartRef = db.collection("carts").doc(userId).collection("items");

//     cartRef.get().then((snapshot) => {
//         let totalPrice = 0;

//         if (snapshot.empty) {
//             cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
//             totalPrice.innerHTML = "Total: 0 VND";
//         }
//     })
// }

// Hàm tải giỏ hàng của người dùng
function loadCartByUser() {
    const cartContainer = document.querySelector("#cart-container");
    const totalPriceElement = document.querySelector("#total-price");

    // Kiểm tra trạng thái đăng nhập
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            cartContainer.innerHTML = "<p>Vui lòng đăng nhập để xem giỏ hàng</p>";
            totalPriceElement.innerHTML = "Total: 0 VND";
        }

        const userId = user.uid;
        const cartRef = db.collection("carts").doc(userId).collection("items");

        cartRef
            .get()
            .then((snapshot) => {
                let totalPrice = 0;
                if (snapshot.empty) {
                    cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
                    totalPriceElement.innerHTML = "Total: 0VND";
                }

                snapshot.forEach((doc) => {
                    const item = doc.data();
                    totalPrice += item.price * item.quantity;

                    // Tạo các phần tử trong giỏ hàng
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");
                    cartItem.innerHTML = `
                <img src="${item.image}">
                <p>Name: ${item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity:
                    <button class = "quantity-btn" data-id = "${doc.id}" data-action="decrease">-</button>
                    ${item.quantity}
                    <button class = "quantity-btn" data-id = "${doc.id}" data-action="increase">+</button>
                </p>
                <button class = "remove-btn" data-id = "${doc.id}">Remove</button>
                `;

                    //Gán sự kiện cho các nút
                    const decreaseBtn = cartItem.querySelector(
                        ".quantity-btn[data-action='decrease']",
                    );
                    const increaseBtn = cartItem.querySelector(
                        ".quantity-btn[data-action='increase']",
                    );
                    const removeBtn = cartItem.querySelector(".remove-btn");

                    // ...

                    // Thêm phần tử vào giỏ hàng
                    cartContainer.appendChild(cartItem);
                });
                // Cập nhật tổng giá trị giỏ hàng
                totalPriceElement.innerHTML = `Total: ${totalPrice} VND`;
            })
            .catch((error) => {
                console.error(error);
                cartContainer.innerHTML = "<p>Không thể tải giỏ hàng</p>";
                totalPriceElement.innerHTML = "Total: 0 VND";
            });
    });
}

// Hàm cập nhật số lượng
function updateQuantity(productId, action) {
    const cartItemRef = db
        .collection("carts")
        .doc(user.id)
        .collection("items")
        .doc(productId);
    
        cartItemRef.get().then((doc) => {
            const item = doc.data();
            let newQuantity = item.quantity;

            // Cập nhật số lượng sản phẩm
            if (action == "increase"){
                newQuantity += 1;
            }
            else if (action == "decrease" && newQuantity > 1){
                newQuantity -= 1;
            }

            cartItemRef.update({
                quantity: newQuantity
            })
            .then(() => {
                loadCartByUser();
            })
            .catch((error) => {
                console.log(error);
            })
        })
}
