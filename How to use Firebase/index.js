// function updateProductOnCart(productId) {
//   db.collection("products")
//     .doc(productId)
//     .update({
//       onCart: true,
//     })
//     .then(() => {
//       alert("Sản phẩm đã được thêm vào giỏ hàng");
//     })
//     .catch((error) => {
//       console.log("Lỗi không thêm được sản phẩm vào giỏ hàng", error);
//     });
// }

function updateProductOnCart(productId) {
    const user = firebase.auth().currentUser;

    if (!user) {
        alert("Vui lòng đăng nhập trước khi thêm vào giỏ hàng");
        return;
    }

    const productRef = db.collection("products").doc(productId);

    productRef.get()
        .then((productDoc) => {
            if (!productDoc.exists) {
                alert("Sản phẩm không tồn tại");
                return;
            }

            const productData = productDoc.data();

            const cartItemRef = db
                .collection("carts")
                .doc(user.uid)
                .collection("items")
                .doc(productId);

            cartItemRef.get()
                .then((cartItemDoc) => {
                    if (cartItemDoc.exists) {
                        const currentQuantity = cartItemDoc.data().quantity || 1;

                        cartItemRef.update({
                            quantity: currentQuantity + 1,
                            addedAt: firebase.firestore.FieldValue.serverTimestamp()
                        })
                        .then(() => {
                            alert("Sản phẩm đã được thêm vào giỏ hàng");
                        })
                        .catch((error) => {
                            console.log("Lỗi khi cập nhật giỏ hàng:", error);
                        });
                    } else {
                        cartItemRef.set({
                            productId: productId,
                            name: productData.name,
                            price: productData.price,
                            image: productData.image,
                            quantity: 1,
                            addedAt: firebase.firestore.FieldValue.serverTimestamp()
                        })
                        .then(() => {
                            alert("Sản phẩm đã được thêm vào giỏ hàng");
                        })
                        .catch((error) => {
                            console.log("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
                        });
                    }
                })
                .catch((error) => {
                    console.log("Lỗi khi kiểm tra sản phẩm trong giỏ hàng:", error);
                });
        })
        .catch((error) => {
            console.log("Lỗi khi lấy thông tin sản phẩm:", error);
        });
}

function addToCart(productId) {
  let user = firebase.auth().currentUser;

  // Lấy thông tin của sản phẩm
  let productRef = db.collection("products").doc(productId);
  productRef.get().then((productDoc) => {
    let productData = productDoc.data();
    let cartItemRef = db
      .collection("carts")
      .doc(user.id)
      .collection("items")
      .doc(productId);

    cartItemRef.get().then((cartItemDoc) => {
        if (cartItemDoc.exists) {
            //Nếu sản phẩm có trong giỏ hàng, cập nhật số lượng
            let currentQuantity = cartItemDoc.data().quantity || 1;

            cartItemRef.update({
                quantity: currentQuantity + 1,
                addedAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                alert("Sản phẩm đã được thêm vào giỏ hàng");
            })
            .catch((error) => console.error(error))
        }
        else {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
            cartItemRef.set({
                productId: productId,
                name: productData.name,
                price: productData.price,
                image: productData.image,
                quantity: 1,
                addedAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => alert("Sản phẩm đã được thêm vào giỏ hàng"))
            .catch((error) => console.error(error))
        }
    })
  });
}

function loadProducts() {
  const products_container = document.querySelector("#products-container");

  db.collection("products")
    .get()
    .then((querySnapshot) => {
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
        button.addEventListener("click", () => {
          updateProductOnCart(doc.id);
        });
        products_container.appendChild(productElement);
      }
    });
}

window.onload = loadProducts;

const user_infor = document.querySelector("#user-infor");
const username_display = document.querySelector("#username");
const auth_btn = document.querySelector("#auth-buttons");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
    db.collection("users")
      .doc(user.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let userData = doc.data();
          username_display.textContent = `Welcome ${userData.username}`;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    user_infor.style.display = "flex";
    auth_btn.style.display = "none";
  } else {
    // User is signed out
    // ...
  }
});

const logoutButton = document.querySelector("#logout-button");
logoutButton.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("User logged out");
      auth_btn.style.display = "flex";
      user_infor.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
    });
});
