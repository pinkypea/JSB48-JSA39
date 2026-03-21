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

function loadCartByUser() {
    const cartContainer = document.querySelector("#cart-container");
    const totalPrice = document.querySelector("#total-price");

    // Lấy thông tin user hiện tại
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    let cartRef = db.collection("carts").doc(userId).collection("items");

    cartRef.get().then((snapshot) => {
        let totalPrice = 0;

        if (snapshot.empty) {
            cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
            totalPrice.innerHTML = "Total: 0 VND";
        }
    })
}