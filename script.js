// ======================================
// PRINT3D
// ======================================

const WHATSAPP = "972509996873";

// שנה כאן את הקוד אם תרצה קופון אחר
const COUPON_CODE = "5839210476";

// 100% הנחה
const COUPON_PERCENT = 100;


// ======================================
// מוצרים
// ======================================

const products = [];

for (let i = 1; i <= 50; i++) {

    let category;

    if (i <= 10) {
        category = "פידג'טים";
    } else if (i <= 20) {
        category = "מחזיקי מפתחות";
    } else if (i <= 30) {
        category = "אביזרים";
    } else if (i <= 40) {
        category = "שולחן";
    } else {
        category = "אחר";
    }

    products.push({

        id: i,

        name: "מוצר תלת־ממד " + i,

        price: 20 + ((i - 1) % 10) * 5,

        category: category,

        image: "images/" + i + ".jpg",

        description:
            "מוצר תלת־ממד מגניב ואיכותי בעיצוב מיוחד."

    });

}


// ======================================
// משתנים
// ======================================

let cart = [];

let selectedCategory = "הכול";

let couponApplied = false;


// ======================================
// שמירה
// ======================================

function saveCart() {

    localStorage.setItem(
        "print3dCart",
        JSON.stringify(cart)
    );

}


// ======================================
// טעינה
// ======================================

function loadCart() {

    try {

        const saved =
            localStorage.getItem("print3dCart");

        if (saved) {
            cart = JSON.parse(saved);
        }

    } catch {

        cart = [];

    }

}


// ======================================
// קטגוריות
// ======================================

function renderCategories() {

    const box =
        document.getElementById("categories");

    if (!box) return;

    const categories = [
        "הכול",
        ...new Set(
            products.map(p => p.category)
        )
    ];

    box.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className = "category";

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        button.textContent = category;

        button.onclick = () => {

            selectedCategory = category;

            renderCategories();
            renderProducts();

        };

        box.appendChild(button);

    });

}


// ======================================
// מוצרים
// ======================================

function renderProducts() {

    const grid =
        document.getElementById("products");

    if (!grid) return;

    const search =
        document
            .getElementById("search")
            ?.value
            .trim()
            .toLowerCase() || "";


    const filtered =
        products.filter(product => {

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search);

            const categoryMatch =
                selectedCategory === "הכול" ||
                product.category === selectedCategory;

            return searchMatch && categoryMatch;

        });


    grid.innerHTML = "";


    if (filtered.length === 0) {

        grid.innerHTML =
            `<div class="empty">
                😕 לא נמצאו מוצרים
            </div>`;

        return;

    }


    filtered.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div
                class="product-img"
                data-id="${product.id}"
            >
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>
                    ${product.description}
                </p>

                <div class="price">
                    ₪${product.price}
                </div>

                <button class="add">
                    🛒 הוסף לעגלה
                </button>

            </div>

        `;


        card
            .querySelector(".product-img")
            .onclick = () => {

                window.location.href =
                    "product.html?id=" +
                    product.id;

            };


        card
            .querySelector(".add")
            .onclick = event => {

                event.stopPropagation();

                addToCart(product.id);

            };


        grid.appendChild(card);

    });

}


// ======================================
// הוספה
// ======================================

function addToCart(id) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;

    cart.push(product);

    saveCart();

    updateCart();

    openCart();

}


// ======================================
// הסרה
// ======================================

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


// ======================================
// סכום
// ======================================

function subtotal() {

    return cart.reduce(
        (sum, product) =>
            sum + product.price,
        0
    );

}


// ======================================
// טיפ
// ======================================

function getTip() {

    const select =
        document.getElementById("tip");

    if (!select) return 0;

    const percent =
        Number(select.value);

    return Math.round(
        subtotal() * percent / 100
    );

}


// ======================================
// הנחה
// ======================================

function getDiscount() {

    if (!couponApplied) {
        return 0;
    }

    return subtotal() *
        COUPON_PERCENT / 100;

}


// ======================================
// עדכון עגלה
// ======================================

function updateCart() {

    const items =
        document.getElementById("cartItems");

    if (!items) return;


    const count =
        document.getElementById("cartCount");

    if (count) {
        count.textContent = cart.length;
    }


    if (cart.length === 0) {

        items.innerHTML = `
            <div class="empty">
                🛒
                <br><br>
                העגלה ריקה
            </div>
        `;

    } else {

        items.innerHTML = "";

        cart.forEach((product, index) => {

            const item =
                document.createElement("div");

            item.className = "cart-item";


            item.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item-info">

                    <strong>
                        ${product.name}
                    </strong>

                    <div>
                        ₪${product.price}
                    </div>

                </div>

                <button class="remove">
                    ✕
                </button>

            `;


            item
                .querySelector(".remove")
                .onclick = () => {

                    removeFromCart(index);

                };


            items.appendChild(item);

        });

    }


    const sub = subtotal();

    const discount = getDiscount();

    const tip = getTip();

    const total =
        Math.max(
            0,
            sub - discount + tip
        );


    document.getElementById(
        "subtotal"
    ).textContent = sub;


    document.getElementById(
        "discount"
    ).textContent = discount;


    document.getElementById(
        "tipAmount"
    ).textContent = tip;


    document.getElementById(
        "total"
    ).textContent = total;

}


// ======================================
// עגלה
// ======================================

function openCart() {

    document
        .getElementById("cart")
        ?.classList
        .add("open");

    document
        .getElementById("overlay")
        ?.classList
        .add("show");

}


function closeCart() {

    document
        .getElementById("cart")
        ?.classList
        .remove("open");

    document
        .getElementById("overlay")
        ?.classList
        .remove("show");

}


// ======================================
// קופון
// ======================================

function applyCoupon() {

    const input =
        document.getElementById("coupon");

    const message =
        document.getElementById(
            "couponMessage"
        );


    if (!input || !message) return;


    if (
        input.value.trim() ===
        COUPON_CODE
    ) {

        couponApplied = true;

        message.textContent =
            "✅ הקופון הופעל! 100% הנחה";

    } else {

        couponApplied = false;

        message.textContent =
            "❌ קוד קופון לא תקין";

    }


    updateCart();

}


// ======================================
// המשך להזמנה
// ======================================

function checkout() {

    if (cart.length === 0) {

        alert("העגלה ריקה 🛒");

        return;

    }


    closeCart();


    const order =
        document.getElementById("order");

    if (order) {

        order.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ======================================
// WhatsApp
// ======================================

function sendWhatsApp() {

    if (cart.length === 0) {

        alert("העגלה ריקה 🛒");

        return;

    }


    const name =
        document.getElementById(
            "name"
        )?.value.trim() || "";


    const phone =
        document.getElementById(
            "phone"
        )?.value.trim() || "";


    const note =
        document.getElementById(
            "note"
        )?.value.trim() || "";


    let message =
        "שלום! אני רוצה להזמין מ-Print3D:\n\n";


    cart.forEach(product => {

        message +=
            "• " +
            product.name +
            " - ₪" +
            product.price +
            "\n";

    });


    const sub = subtotal();

    const discount = getDiscount();

    const tip = getTip();

    const total =
        Math.max(
            0,
            sub - discount + tip
        );


    message +=
        "\nמחיר מוצרים: ₪" +
        sub;


    message +=
        "\nהנחה: ₪" +
        discount;


    message +=
        "\nטיפ: ₪" +
        tip;


    message +=
        "\nסה״כ: ₪" +
        total;


    if (name) {
        message +=
            "\n\nשם: " + name;
    }


    if (phone) {
        message +=
            "\nטלפון: " + phone;
    }


    if (note) {
        message +=
            "\nהערה: " + note;
    }


    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");

}


// ======================================
// עמוד מוצר
// ======================================

function renderProductPage() {

    const container =
        document.getElementById(
            "productDetails"
        );

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const product =
        products.find(
            p => p.id === id
        );


    if (!product) {

        container.innerHTML =
            `<div class="empty">
                😕 המוצר לא נמצא
            </div>`;

        return;

    }


    document.title =
        product.name +
        " | Print3D";


    container.innerHTML = `

        <div class="product-detail">

            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="detail-info">

                <div class="badge">
                    ${product.category}
                </div>

                <h1>
                    ${product.name}
                </h1>

                <div class="detail-price">
                    ₪${product.price}
                </div>

                <p class="detail-description">
                    ${product.description}
                </p>

                <button
                    id="detailAdd"
                    class="add"
                >
                    🛒 הוסף לעגלה
                </button>

            </div>

        </div>

    `;


    document
        .getElementById("detailAdd")
        .onclick = () => {

            addToCart(product.id);

        };

}


// ======================================
// הפעלה
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCart();

        renderCategories();

        renderProducts();

        renderProductPage();

        updateCart();


        document
            .getElementById("openCart")
            ?.addEventListener(
                "click",
                openCart
            );


        document
            .getElementById("closeCart")
            ?.addEventListener(
                "click",
                closeCart
            );


        document
            .getElementById("overlay")
            ?.addEventListener(
                "click",
                closeCart
            );


        document
            .getElementById("search")
            ?.addEventListener(
                "input",
                renderProducts
            );


        document
            .getElementById("tip")
            ?.addEventListener(
                "change",
                updateCart
            );


        document
            .getElementById("applyCoupon")
            ?.addEventListener(
                "click",
                applyCoupon
            );


        document
            .getElementById("checkout")
            ?.addEventListener(
                "click",
                checkout
            );


        document
            .getElementById("sendWhatsApp")
            ?.addEventListener(
                "click",
                sendWhatsApp
            );

    }
);
