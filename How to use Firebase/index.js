function updateProductOnCart(productId) {
    db.collection("products").doc(productId).update({
        onCart: true
    })
    .then(() => {
        alert("Sản phẩm đã được thêm vào giỏ hàng");
    })
    .catch((error) => {
        console.log("Lỗi không thêm được sản phẩm vào giỏ hàng", error);
    });
}

function loadProducts(){
    const products_container = document.querySelector("#products-container");

    db.collection("products").get().then((querySnapshot) => {
        const docs = querySnapshot.docs;

        for (let i = 0; i < docs.length; i++) {
            const doc = docs[i];
            const product = doc.data();

            const productElement = document.createElement("div");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <img src="${product.image}">
                <p>Name: ${product.name}</p>
                <p>Price: ${product.price} VND</p>
                <button class="add-to-cart-btn">Add to cart</button>
            `;

            const button = productElement.querySelector(".add-to-cart-btn");
            button.addEventListener('click', () => {
                updateProductOnCart(doc.id);
            });
            products_container.appendChild(productElement);
        }
    });
}


window.onload = loadProducts;

const user_infor = document.querySelector('#user-infor');
const username_display = document.querySelector('#username');
const auth_btn = document.querySelector('#auth-buttons');