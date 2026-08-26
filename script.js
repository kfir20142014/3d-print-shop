// ==========================================
// PRINT3D - SCRIPT
// ==========================================


// המספר שאליו נשלחות ההזמנות
const WHATSAPP_NUMBER = "972509996873";


// קוד הקופון - 10 ספרות - 100% הנחה
const COUPON_CODE = "5839210476";
const COUPON_DISCOUNT = 100;


// ==========================================
// 50 מוצרים
// ==========================================

const products = [];

for (let i = 1; i <= 50; i++) {

    products.push({
        id: i,

        name: "מוצר תלת־ממד " + i,

        price: 20 + ((i - 1) % 10) * 5,

        image: "images/" + i + ".jpg",

        category:
            i <= 10
                ? "פידג'טים"
                : i <= 20
                ? "מחזיקי מפתחות"
                : i <= 30
                ? "טלפונים"
                : "שולחן",

        description:
            "מוצר תלת־ממד מיוחד ומגניב בעיצוב ייחודי."
    });

}


// ==========================================
// משתנים
// ==========================================

let cart = [];

let currentCategory = "הכול";

let couponApplied = false;


// ==========================================
// שמירת עגלה
// ==========================================

function saveCart() {

    localStorage.setItem(
        "print3d-cart",
        JSON.stringify(cart)
    );

}


// ==========================================
// טעינת עגלה
// ==========================================

function loadCart() {

    try {

        const saved =
            localStorage.getItem("print3d-cart");

        if (saved) {
            cart = JSON.parse(saved);
        }

    } catch {

        cart = [];

    }

}


// ==========================================
// חיפוש
// ==========================================

function getFilteredProducts() {

    const input =
        document.getElementById("searchInput");

    const search =
        input
            ? input.value.trim().toLowerCase()
            : "";

    return products.filter(product => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search);

        const matchesCategory =
            currentCategory === "הכול" ||
            product.category === currentCategory;

        return matchesSearch && matchesCategory;

    });

}


// ==========================================
// הצגת קטגוריות
// ==========================================

function renderCategories() {

    const container =
        document.getElementById("categories");

    if (!container) return;

    const categories = [
        "הכול",
        ...new Set(
            products.map(product => product.category)
        )
    ];

    container.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-button";

        if (category === currentCategory) {
            button.classList.add("active");
        }

        button.textContent = category;

        button.addEventListener(
            "click",
            function () {

                currentCategory = category;

                renderCategories();
                renderProducts();

            }
        );

        container.appendChild(button);

    });

}


// ==========================================
// הצגת מוצרים
// ==========================================

function renderProducts() {

    const grid =
        document.getElementById("productsGrid");

    if (!grid) return;

    const filtered =
        getFilteredProducts();

    grid.innerHTML = "";

    if (filtered.length === 0) {

        grid.innerHTML = `
            <div class="empty-cart">
                😕 לא נמצאו מוצרים
            </div>
        `;

        return;
    }


    filtered.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product";


        card.innerHTML = `

            <div
                class="product-image"
                data-product="${product.id}"
            >
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >
            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-price">
                    ₪${product.price}
                </div>

                <button
                    class="add-button"
                    data-add="${product.id}"
                >
                    🛒 הוסף לעגלה
                </button>

            </div>
        `;


        // פתיחת עמוד מוצר
        const image =
            card.querySelector(".product-image");

        image.addEventListener(
            "click",
            function () {

                window.location.href =
                    "product.html?id=" +
                    product.id;

            }
        );


        // כפתור הוספה לעגלה
        const addButton =
            card.querySelector(".add-button");

        addButton.addEventListener(
            "click",
            function () {

                addToCart(product.id);

            }
        );


        grid.appendChild(card);

    });

}


// ==========================================
// הוספה לעגלה
// ==========================================

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    cart.push(product);

    saveCart();

    updateCart();

    openCart();

}


// ==========================================
// הסרת מוצר
// ==========================================

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


// ==========================================
// מחיר מוצרים
// ==========================================

function getSubtotal() {

    return cart.reduce(
        (sum, product) =>
            sum + Number(product.price),
        0
    );

}


// ==========================================
// טיפ
// ==========================================

function getTip() {

    const select =
        document.getElementById("tipSelect");

    if (!select) return 0;

    const percent =
        Number(select.value);

    return Math.round(
        getSubtotal() * percent / 100
    );

}


// ==========================================
// הנחה
// ==========================================

function getDiscount() {

    if (!couponApplied) {
        return 0;
    }

    return getSubtotal();

}


// ==========================================
// עדכון עגלה
// ==========================================

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
            <div class="empty-cart">
                🛒
                <br><br>
                העגלה ריקה
            </div>
        `;

    } else {

        items.innerHTML = "";

        cart.forEach(
            (product, index) => {

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

                    <button
                        class="remove-item"
                    >
                        ✕
                    </button>
                `;


                item
                    .querySelector(".remove-item")
                    .addEventListener(
                        "click",
                        function () {

                            removeFromCart(index);

                        }
                    );


                items.appendChild(item);

            }
        );

    }


    const subtotal =
        getSubtotal();

    const discount =
        getDiscount();

    const tip =
        getTip();

    const total =
        Math.max(
            0,
            subtotal - discount + tip
        );


    const subtotalElement =
        document.getElementById("subtotal");

    const discountElement =
        document.getElementById("discount");

    const tipElement =
        document.getElementById("tipAmount");

    const totalElement =
        document.getElementById("total");


    if (subtotalElement)
        subtotalElement.textContent = subtotal;

    if (discountElement)
        discountElement.textContent = discount;

    if (tipElement)
        tipElement.textContent = tip;

    if (totalElement)
        totalElement.textContent = total;

}


// ==========================================
// פתיחת עגלה
// ==========================================

function openCart() {

    const cartElement =
        document.getElementById("cart");

    const overlay =
        document.getElementById("overlay");

    if (cartElement)
        cartElement.classList.add("open");

    if (overlay)
        overlay.classList.add("show");

}


// ==========================================
// סגירת עגלה
// ==========================================

function closeCart() {

    const cartElement =
        document.getElementById("cart");

    const overlay =
        document.getElementById("overlay");

    if (cartElement)
        cartElement.classList.remove("open");

    if (overlay)
        overlay.classList.remove("show");

}


// ==========================================
// קופון
// ==========================================

function applyCoupon() {

    const input =
        document.getElementById("couponInput");

    const message =
        document.getElementById("couponMessage");

    if (!input || !message) return;


    const code =
        input.value.trim();


    if (code === COUPON_CODE) {

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


// ==========================================
// טקסט הזמנה
// ==========================================

function createOrderText() {

    let text =
        "שלום! אני רוצה להזמין מ-Print3D:%0A%0A";


    cart.forEach(product => {

        text +=
            "• " +
            product.name +
            " - ₪" +
            product.price +
            "%0A";

    });


    const subtotal =
        getSubtotal();

    const discount =
        getDiscount();

    const tip =
        getTip();

    const total =
        Math.max(
            0,
            subtotal - discount + tip
        );


    text +=
        "%0Aמחיר מוצרים: ₪" +
        subtotal;


    if (couponApplied) {

        text +=
            "%0Aקופון: " +
            COUPON_CODE +
            "%0Aהנחה: 100%";

    }


    text +=
        "%0Aטיפ: ₪" +
        tip;


    text +=
        "%0A%0Aסה״כ: ₪" +
        total;


    return text;

}


// ==========================================
// מעבר להזמנה
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert("העגלה ריקה 🛒");

        return;

    }


    closeCart();

    document
        .getElementById("order")
        ?.scrollIntoView({
            behavior: "smooth"
        });


    const message =
        document.getElementById(
            "customerMessage"
        );

    if (message) {

        message.value =
            decodeURIComponent(
                createOrderText()
            )
            .replace(/%0A/g, "\n");

    }

}


// ==========================================
// שליחת WhatsApp
// ==========================================

function sendWhatsApp() {

    if (cart.length === 0) {

        alert("העגלה ריקה 🛒");

        return;

    }


    const name =
        document.getElementById(
            "customerName"
        )?.value.trim() || "";


    const phone =
        document.getElementById(
            "customerPhone"
        )?.value.trim() || "";


    const note =
        document.getElementById(
            "customerMessage"
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


    const subtotal =
        getSubtotal();

    const discount =
        getDiscount();

    const tip =
        getTip();

    const total =
        Math.max(
            0,
            subtotal - discount + tip
        );


    message +=
        "\nמחיר מוצרים: ₪" +
        subtotal;


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
        message += "\n\nשם: " + name;
    }

    if (phone) {
        message += "\nטלפון: " + phone;
    }

    if (note) {
        message += "\nהערה: " + note;
    }


    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");

}


// ==========================================
// עמוד מוצר
// ==========================================

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
            item => item.id === id
        );


    if (!product) {

        container.innerHTML = `
            <div class="empty-cart">
                😕 המוצר לא נמצא
            </div>
        `;

        return;

    }


    document.title =
        product.name + " | Print3D";


    container.innerHTML = `

        <div class="product-detail">

            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="detail-info">

                <div class="small-title">
                    PRINT3D
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
                    id="detailAddButton"
                    class="add-button detail-add"
                >
                    🛒 הוסף לעגלה
                </button>

            </div>

        </div>
    `;


    document
        .getElementById(
            "detailAddButton"
        )
        .addEventListener(
            "click",
            function () {

                addToCart(product.id);

            }
        );

}


// ==========================================
// אירועים
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCart();

        renderCategories();

        renderProducts();

        renderProductPage();

        updateCart();


        document
            .getElementById("cartButton")
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
            .getElementById("searchInput")
            ?.addEventListener(
                "input",
                renderProducts
            );


        document
            .getElementById("tipSelect")
            ?.addEventListener(
                "change",
                updateCart
            );


        document
            .getElementById("couponButton")
            ?.addEventListener(
                "click",
                applyCoupon
            );


        document
            .getElementById("checkoutButton")
            ?.addEventListener(
                "click",
                checkout
            );


        document
            .getElementById("sendOrderButton")
            ?.addEventListener(
                "click",
                sendWhatsApp
            );

    }
);
