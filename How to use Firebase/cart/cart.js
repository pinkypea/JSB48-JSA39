firebase.auth().onAuthStateChanged(function (user) {
    const cartContainer = document.querySelector("#cart-container");
    const totalPriceElement = document.querySelector("#total-price");

    if (user) {
        loadCartData(user);
    } else {
        cartContainer.innerHTML = "<p>Vui lòng đăng nhập để xem giỏ hàng</p>";
        totalPriceElement.innerHTML = "Total: 0 VND";
    }
});

function loadCartData(user) {
    const cartContainer = document.querySelector("#cart-container");
    const totalPriceElement = document.querySelector("#total-price");

    cartContainer.innerHTML = ""; 

    const userId = user.uid;
    const cartRef = db.collection("carts").doc(userId).collection("items");

    cartRef
        .get()
        .then((snapshot) => {
            let totalPrice = 0;
            if (snapshot.empty) {
                cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
                totalPriceElement.innerHTML = "Total: 0 VND";
            }

            snapshot.forEach((doc) => {
                const item = doc.data();
                totalPrice += item.price * item.quantity;

                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="${item.image}" width="50">
                    <p>Name: ${item.name}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity:
                        <button class="quantity-btn" data-id="${doc.id}" data-action="decrease">-</button>
                        ${item.quantity}
                        <button class="quantity-btn" data-id="${doc.id}" data-action="increase">+</button>
                    </p>
                    <button class="remove-btn" data-id="${doc.id}">Remove</button>
                `;

                // Gán sự kiện cho các nút
                const decreaseBtn = cartItem.querySelector(".quantity-btn[data-action='decrease']");
                const increaseBtn = cartItem.querySelector(".quantity-btn[data-action='increase']");
                const removeBtn = cartItem.querySelector(".remove-btn");

                decreaseBtn.addEventListener("click", () => {
                    updateQuantity(doc.id, "decrease");
                });

                increaseBtn.addEventListener("click", () => {
                    updateQuantity(doc.id, "increase");
                });

                removeBtn.addEventListener("click", () => {
                    removeCartItem(doc.id);
                });

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
}

// 3. Hàm cập nhật số lượng
function updateQuantity(productId, action) {
    const user = firebase.auth().currentUser;

    const cartItemRef = db
        .collection("carts")
        .doc(user.uid) 
        .collection("items")
        .doc(productId);

    cartItemRef.get().then((doc) => {
        if (!doc.exists) return;
        
        const item = doc.data();
        let newQuantity = item.quantity;

        // Cập nhật số lượng sản phẩm
        if (action === "increase") {
            newQuantity += 1;
        } else if (action === "decrease" && newQuantity > 1) {
            newQuantity -= 1;
        }

        cartItemRef
            .update({
                quantity: newQuantity,
            })
            .then(() => {
                loadCartData(user);
            })
            .catch((error) => {
                console.log(error);
            });
    });
}

// Hàm xóa sản phẩm phẩm khỏi giỏ hàng
function removeCartItem(productId) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const cartItemRef = db
        .collection("carts")
        .doc(user.uid) 
        .collection("items")
        .doc(productId);

    cartItemRef
        .delete()
        .then(() => {
            alert("Sản phẩm đã được xóa khỏi giỏ hàng");
            loadCartData(user);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Checkout
function checkout() {
    alert("Chức năng thanh toán sẽ được phát triển sau");
}

document.querySelector("#checkout-button").addEventListener("click", checkout);
