function loadProducts(){
    const products_container = document.querySelector("#products-container");
    db.collection("products").get().then((querySnapshot) => {
        const docs = querySnapshot.docs;
        for (let i = 0; i < docs.length; i++) {
            // Lấy ra các sản phẩm và lưu vào biến doc và product
            const doc = docs[i];
            const product = doc.data();

            // Sử dụng DOM để hiển thị thông tin các sản phẩm
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <img src="${product.image}">
                <p>Name: ${product.name}</p>
                <p>Price: ${product.price}VND</p>
                <button class="add-to-cart-btn" data-id = "${doc.id}">Add to cart</button>
                `;

            // Gán sự kiện cho các nút "Add to cart"
            const buttons = document.querySelectorAll(".add-to-cart-btn");
            for (let i = 0; i < buttons.length; i++){
                buttons[i].addEventListener('click', () => {
                    const productId = buttons[i].getAttribute('data-id');
                    updateProductOnCart(productId);
                })
            }
            
            products_container.appendChild(productElement);
        }
});
}

window.onload = loadProducts;