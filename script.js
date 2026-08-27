// ================================
// Print3D - כל המוצרים
// ================================

const products = [
    { id: 1, name: "מוצר תלת־ממד 1", price: 20, category: "פידג'טים", image: "images/1.jpg" },
    { id: 2, name: "מוצר תלת־ממד 2", price: 25, category: "פידג'טים", image: "images/2.jpg" },
    { id: 3, name: "מוצר תלת־ממד 3", price: 30, category: "פידג'טים", image: "images/3.jpg" },
    { id: 4, name: "מוצר תלת־ממד 4", price: 35, category: "פידג'טים", image: "images/4.jpg" },
    { id: 5, name: "מוצר תלת־ממד 5", price: 40, category: "פידג'טים", image: "images/5.jpg" },

    { id: 6, name: "מוצר תלת־ממד 6", price: 20, category: "פידג'טים", image: "images/6.jpg" },
    { id: 7, name: "מוצר תלת־ממד 7", price: 25, category: "פידג'טים", image: "images/7.jpg" },
    { id: 8, name: "מוצר תלת־ממד 8", price: 30, category: "פידג'טים", image: "images/8.jpg" },
    { id: 9, name: "מוצר תלת־ממד 9", price: 35, category: "פידג'טים", image: "images/9.jpg" },
    { id: 10, name: "מוצר תלת־ממד 10", price: 40, category: "פידג'טים", image: "images/10.jpg" },

    { id: 11, name: "מוצר תלת־ממד 11", price: 20, category: "מחזיקי מפתחות", image: "images/11.jpg" },
    { id: 12, name: "מוצר תלת־ממד 12", price: 25, category: "מחזיקי מפתחות", image: "images/12.jpg" },
    { id: 13, name: "מוצר תלת־ממד 13", price: 30, category: "מחזיקי מפתחות", image: "images/13.jpg" },
    { id: 14, name: "מוצר תלת־ממד 14", price: 35, category: "מחזיקי מפתחות", image: "images/14.jpg" },
    { id: 15, name: "מוצר תלת־ממד 15", price: 40, category: "מחזיקי מפתחות", image: "images/15.jpg" },

    { id: 16, name: "מוצר תלת־ממד 16", price: 20, category: "מחזיקי מפתחות", image: "images/16.jpg" },
    { id: 17, name: "מוצר תלת־ממד 17", price: 25, category: "מחזיקי מפתחות", image: "images/17.jpg" },
    { id: 18, name: "מוצר תלת־ממד 18", price: 30, category: "מחזיקי מפתחות", image: "images/18.jpg" },
    { id: 19, name: "מוצר תלת־ממד 19", price: 35, category: "מחזיקי מפתחות", image: "images/19.jpg" },
    { id: 20, name: "מוצר תלת־ממד 20", price: 40, category: "מחזיקי מפתחות", image: "images/20.jpg" },

    { id: 21, name: "מוצר תלת־ממד 21", price: 20, category: "אביזרים", image: "images/21.jpg" },
    { id: 22, name: "מוצר תלת־ממד 22", price: 25, category: "אביזרים", image: "images/22.jpg" },
    { id: 23, name: "מוצר תלת־ממד 23", price: 30, category: "אביזרים", image: "images/23.jpg" },
    { id: 24, name: "מוצר תלת־ממד 24", price: 35, category: "אביזרים", image: "images/24.jpg" },
    { id: 25, name: "מוצר תלת־ממד 25", price: 40, category: "אביזרים", image: "images/25.jpg" },

    { id: 26, name: "מוצר תלת־ממד 26", price: 20, category: "אביזרים", image: "images/26.jpg" },
    { id: 27, name: "מוצר תלת־ממד 27", price: 25, category: "אביזרים", image: "images/27.jpg" },
    { id: 28, name: "מוצר תלת־ממד 28", price: 30, category: "אביזרים", image: "images/28.jpg" },
    { id: 29, name: "מוצר תלת־ממד 29", price: 35, category: "אביזרים", image: "images/29.jpg" },
    { id: 30, name: "מוצר תלת־ממד 30", price: 40, category: "אביזרים", image: "images/30.jpg" },

    { id: 31, name: "מוצר תלת־ממד 31", price: 20, category: "שולחן", image: "images/31.jpg" },
    { id: 32, name: "מוצר תלת־ממד 32", price: 25, category: "שולחן", image: "images/32.jpg" },
    { id: 33, name: "מוצר תלת־ממד 33", price: 30, category: "שולחן", image: "images/33.jpg" },
    { id: 34, name: "מוצר תלת־ממד 34", price: 35, category: "שולחן", image: "images/34.jpg" },
    { id: 35, name: "מוצר תלת־ממד 35", price: 40, category: "שולחן", image: "images/35.jpg" },

    { id: 36, name: "מוצר תלת־ממד 36", price: 20, category: "שולחן", image: "images/36.jpg" },
    { id: 37, name: "מוצר תלת־ממד 37", price: 25, category: "שולחן", image: "images/37.jpg" },
    { id: 38, name: "מוצר תלת־ממד 38", price: 30, category: "שולחן", image: "images/38.jpg" },
    { id: 39, name: "מוצר תלת־ממד 39", price: 35, category: "שולחן", image: "images/39.jpg" },
    { id: 40, name: "מוצר תלת־ממד 40", price: 40, category: "שולחן", image: "images/40.jpg" },

    { id: 41, name: "מוצר תלת־ממד 41", price: 20, category: "אחר", image: "images/41.jpg" },
    { id: 42, name: "מוצר תלת־ממד 42", price: 25, category: "אחר", image: "images/42.jpg" },
    { id: 43, name: "מוצר תלת־ממד 43", price: 30, category: "אחר", image: "images/43.jpg" },
    { id: 44, name: "מוצר תלת־ממד 44", price: 35, category: "אחר", image: "images/44.jpg" },
    { id: 45, name: "מוצר תלת־ממד 45", price: 40, category: "אחר", image: "images/45.jpg" },

    { id: 46, name: "מוצר תלת־ממד 46", price: 20, category: "אחר", image: "images/46.jpg" },
    { id: 47, name: "מוצר תלת־ממד 47", price: 25, category: "אחר", image: "images/47.jpg" },
    { id: 48, name: "מוצר תלת־ממד 48", price: 30, category: "אחר", image: "images/48.jpg" },
    { id: 49, name: "מוצר תלת־ממד 49", price: 35, category: "אחר", image: "images/49.jpg" },
    { id: 50, name: "מוצר תלת־ממד 50", price: 40, category: "אחר", image: "images/50.jpg" }
];


// ================================
// עגלה
// ================================

let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("print3dCart")) || [];
} catch {
    cart = [];
}


// ================================
// הצגת מוצרים
// ================================

function showProducts(list = products) {

    const container = document.getElementById("products");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-img">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/500x500?text=3D+Product'"
                >
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div class="price">
                    ₪${product.price}
                </div>

                <button class="add">
                    🛒 הוסף לעגלה
                </button>

            </div>
        `;

        card.querySelector(".product-img").onclick = () => {
            window.location.href = `product.html?id=${product.id}`;
        };

        card.querySelector(".add").onclick = event => {
            event.stopPropagation();
            addToCart(product.id);
        };

        container.appendChild(card);
    });
}


// ================================
// קטגוריות
// ================================

function showCategories() {

    const container = document.getElementById("categories");

    if (!container) return;

    const categories = [
        "הכול",
        ...new Set(products.map(product => product.category))
    ];

    container.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "category";

        button.textContent = category;

        button.onclick = () => {

            if (category === "הכול") {
                showProducts(products);
            } else {
                showProducts(
                    products.filter(
                        product => product.category === category
                    )
                );
            }
        };

        container.appendChild(button);
    });
}


// ================================
// חיפוש
// ================================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("input", () => {

        const text = search.value.toLowerCase().trim();

        const results = products.filter(product =>
            product.name.toLowerCase().includes(text) ||
            product.category.toLowerCase().includes(text)
        );

        showProducts(results);
    });
}


// ================================
// הוספה לעגלה
// ================================

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );

    if (!product) return;

    cart.push(product);

    localStorage.setItem(
        "print3dCart",
        JSON.stringify(cart)
    );

    updateCart();

    openCart();
}


// ================================
// עדכון עגלה
// ================================

function updateCart() {

    const count = document.getElementById("cartCount");

    if (count) {
        count.textContent = cart.length;
    }

    const container = document.getElementById("cartItems");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty">
                🛒
                <br><br>
                העגלה ריקה
            </div>
        `;

        updatePrices();

        return;
    }

    container.innerHTML = "";

    cart.forEach((product, index) => {

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="cart-item-info">
                <strong>${product.name}</strong>
                <div>₪${product.price}</div>
            </div>

            <button class="remove">
                ✕
            </button>
        `;

        item.querySelector(".remove").onclick = () => {

            cart.splice(index, 1);

            localStorage.setItem(
                "print3dCart",
                JSON.stringify(cart)
            );

            updateCart();
        };

        container.appendChild(item);
    });

    updatePrices();
}


// ================================
// טיפ + קופון
// ================================

let couponApplied = false;

function updatePrices() {

    const subtotal =
        cart.reduce(
            (sum, product) => sum + product.price,
            0
        );

    const tipSelect = document.getElementById("tip");

    const tipPercent =
        tipSelect ? Number(tipSelect.value) : 0;

    const tip =
        Math.round(subtotal * tipPercent / 100);

    const discount =
        couponApplied ? subtotal : 0;

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


// ================================
// קופון
// ================================

const COUPON = "5839210476";

const applyCoupon =
    document.getElementById("applyCoupon");

if (applyCoupon) {

    applyCoupon.onclick = () => {

        const input =
            document.getElementById("coupon");

        const message =
            document.getElementById("couponMessage");

        if (!input || !message) return;

        if (input.value.trim() === COUPON) {

            couponApplied = true;

            message.textContent =
                "✅ הקופון הופעל! 100% הנחה";

        } else {

            couponApplied = false;

            message.textContent =
                "❌ קוד קופון לא נכון";
        }

        updatePrices();
    };
}


// ================================
// טיפ
// ================================

const tip =
    document.getElementById("tip");

if (tip) {
    tip.addEventListener(
        "change",
        updatePrices
    );
}


// ================================
// פתיחת עגלה
// ================================

function openCart() {

    document
        .getElementById("cart")
        ?.classList.add("open");

    document
        .getElementById("overlay")
        ?.classList.add("show");
}


// ================================
// סגירת עגלה
// ================================

function closeCart() {

    document
        .getElementById("cart")
        ?.classList.remove("open");

    document
        .getElementById("overlay")
        ?.classList.remove("show");
}


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


// ================================
// התחלת האתר
// ================================

showProducts(products);

showCategories();

updateCart();
