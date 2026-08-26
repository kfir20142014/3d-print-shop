const products = [
    // FIDGETS
    { id: 1, name: "MINI Twist & Turn Fidget", category: "fidget", price: 8, image: "images/1.jpg" },
    { id: 2, name: "Tiny 4 Function Fidget", category: "fidget", price: 4, image: "images/2.jpg" },
    { id: 3, name: "MIO Fidget Ring", category: "fidget", price: 13, image: "images/3.jpg" },
    { id: 4, name: "Twist & Turn Fidget", category: "fidget", price: 10, image: "images/4.jpg" },
    { id: 5, name: "Musical Fidget Lava Chicken song", category: "fidget", price: 30, image: "images/5.jpg" },
    { id: 6, name: "Vortex Spiral small", category: "fidget", price: 10, image: "images/6.jpg" },
    { id: 7, name: "Sturdy Infinity Cube", category: "fidget", price: 11, image: "images/7.jpg" },
    { id: 8, name: "Triple Helix Puzzle", category: "fidget", price: 15, image: "images/8.jpg" },
    { id: 9, name: "Ice Cream Fidget", category: "fidget", price: 13, image: "images/9.jpg" },
    { id: 10, name: "Vortex Spheres", category: "fidget", price: 5, image: "images/10.jpg" },
    { id: 11, name: "Helix Space Rocket", category: "fidget", price: 15, image: "images/11.jpg" },
    { id: 12, name: "Impossible Vortex Sphere", category: "fidget", price: 15, image: "images/12.jpg" },
    { id: 13, name: "Full Hourglass", category: "fidget", price: 13, image: "images/13.jpg" },
    { id: 14, name: "Slinky Fidget", category: "fidget", price: 25, image: "images/14.jpg" },
    { id: 15, name: "Infinity Flip Fidget", category: "fidget", price: 10, image: "images/15.jpg" },

    // KEYCHAINS
    { id: 16, name: "Little Heart Keychain", category: "keychain", price: 5, image: "images/16.jpg" },
    { id: 17, name: "Crystal Keychain", category: "keychain", price: 5, image: "images/17.jpg" },
    { id: 18, name: "Retro Console Keychain", category: "keychain", price: 5, image: "images/18.jpg" },
    { id: 19, name: "TicTacToe Keychain", category: "keychain", price: 10, image: "images/19.jpg" },
    { id: 20, name: "Flexi Gingerbread Man", category: "keychain", price: 10, image: "images/20.jpg" },
    { id: 21, name: "Balloon Dog Keychain", category: "keychain", price: 10, image: "images/21.jpg" },
    { id: 22, name: "Cute Dragon Keychain", category: "keychain", price: 6, image: "images/22.jpg" },
    { id: 23, name: "Octopus Keychain", category: "keychain", price: 15, image: "images/23.jpg" },
    { id: 24, name: "Flexi P-Rex", category: "keychain", price: 5, image: "images/24.jpg" },
    { id: 25, name: "Flexi T-Rex", category: "keychain", price: 10, image: "images/25.jpg" },
    { id: 26, name: "Iguana Keychain", category: "keychain", price: 5, image: "images/26.jpg" },
    { id: 27, name: "Flexi Caterpillar", category: "keychain", price: 10, image: "images/27.jpg" },
    { id: 28, name: "Ice Cream Keychain", category: "keychain", price: 5, image: "images/28.jpg" },
    { id: 29, name: "Bumblebee Keychain", category: "keychain", price: 20, image: "images/29.jpg" },
    { id: 30, name: "Toothless Dragon Keychain", category: "keychain", price: 16, image: "images/30.jpg" },

    // PHONE STANDS
    { id: 31, name: "iPad / Tablet Stand", category: "phone", price: 30, image: "images/31.jpg" },
    { id: 32, name: "Tablet & Phone Stand", category: "phone", price: 10, image: "images/32.jpg" },
    { id: 33, name: "Flat Fold Phone Stand", category: "phone", price: 12, image: "images/33.jpg" },
    { id: 34, name: "Shapeshifter Phone Stand", category: "phone", price: 45, image: "images/34.jpg" },
    { id: 35, name: "HX8 Phone Stand", category: "phone", price: 35, image: "images/35.jpg" },
    { id: 36, name: "Foldable Phone Stand", category: "phone", price: 12, image: "images/36.jpg" },
    { id: 37, name: "Phone Stand Riser", category: "phone", price: 32, image: "images/37.jpg" },
    { id: 38, name: "No AMS Phone Stand", category: "phone", price: 12, image: "images/38.jpg" },
    { id: 39, name: "Popsicle Phone Stand", category: "phone", price: 10, image: "images/39.jpg" },
    { id: 40, name: "Vertical & Horizontal Stand", category: "phone", price: 22, image: "images/40.jpg" },

    // ROOM / DESK
    { id: 41, name: "Phone Stand With Name we will ask you the name later", category: "room", price: 22, image: "images/41.jpg" },
    { id: 42, name: "Modular Desk Organizer", category: "room", price: 150, image: "images/42.jpg" },
    { id: 43, name: "Cable Management Clip", category: "room", price: 15, image: "images/43.jpg" },
    { id: 44, name: "Multi-Purpose Cable Organizer 7 holes", category: "room", price: 5, image: "images/44.jpg" },
    { id: 45, name: "Heavy Duty Monitor Stand smaller version", category: "room", price: 30, image: "images/45.jpg" },
    { id: 46, name: "Catch-All Desk Organizer", category: "room", price: 110, image: "images/46.jpg" },
    { id: 47, name: "Under-Desk Drawer", category: "room", price: 85, image: "images/47.jpg" },
    { id: 48, name: "Pencil Desk Organizer", category: "room", price: 35, image: "images/48.jpg" },
    { id: 49, name: "Hex Desk Organizer", category: "room", price: 10, image: "images/49.jpg" },
    { id: 50, name: "Spinning Desk Organizer", category: "room", price: 100, image: "images/50.jpg" },
    ];

// ==========================================
// SETTINGS
// ==========================================

const whatsappNumber = "972509996873";

const coupons = {

    // 10-digit coupon = 100% discount
    "5839210476": 100

};


// ==========================================
// VARIABLES
// ==========================================

let cart = [];

let currentCategory = "all";

let appliedCoupon = null;


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(list = products) {

    const grid =
        document.getElementById("productsGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-products">
                😕 לא נמצאו מוצרים
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="
                        this.src =
                        'https://placehold.co/600x600?text=Print3D'
                    "
                >

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    מוצר איכותי בהדפסת תלת־ממד
                </p>

                <div class="product-price">
                    ₪${product.price}
                </div>

                <button
                    class="add-button"
                    onclick="addToCart(${product.id})"
                >
                    🛒 הוסף לעגלה
                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


// ==========================================
// SEARCH
// ==========================================

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const search =
        input.value
            .toLowerCase()
            .trim();


    let filtered =
        products;


    if (currentCategory !== "all") {

        filtered =
            filtered.filter(product =>
                product.category ===
                currentCategory
            );

    }


    if (search !== "") {

        filtered =
            filtered.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(search)
            );

    }


    displayProducts(filtered);

}


// ==========================================
// CATEGORIES
// ==========================================

function filterProducts(category, button) {

    currentCategory =
        category;


    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    searchProducts();

}


// ==========================================
// CART
// ==========================================

function addToCart(id) {

    const product =
        products.find(
            product =>
                product.id === id
        );


    if (!product) return;


    cart.push(product);


    updateCart();

    openCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function getProductsTotal() {

    return cart.reduce(
        (total, product) =>
            total +
            Number(product.price),

        0
    );

}


// ==========================================
// TIP
// ==========================================

function getTipPercent() {

    const select =
        document.getElementById(
            "cartTip"
        );

    if (!select) return 0;

    return Number(
        select.value
    );

}


function getTipAmount() {

    return Math.round(

        getProductsTotal() *
        getTipPercent() /
        100

    );

}


// ==========================================
// COUPON
// ==========================================

function applyCoupon() {

    const input =
        document.getElementById(
            "couponInput"
        );

    const message =
        document.getElementById(
            "couponMessage"
        );


    if (!input) return;


    const code =
        input.value.trim();


    if (
        coupons[code] !==
        undefined
    ) {

        appliedCoupon = {

            code: code,

            discount:
                coupons[code]

        };


        if (message) {

            message.textContent =
                "✅ הקופון הופעל! " +
                coupons[code] +
                "% הנחה";

        }

    } else {

        appliedCoupon = null;


        if (message) {

            message.textContent =
                "❌ קוד קופון לא תקין";

        }

    }


    updateCart();

}


// ==========================================
// COUPON DISCOUNT
// ==========================================

function getCouponDiscount() {

    if (!appliedCoupon) {

        return 0;

    }


    return Math.round(

        getProductsTotal() *
        appliedCoupon.discount /
        100

    );

}


// ==========================================
// UPDATE CART
// ==========================================

function updateCart() {

    const count =
        document.getElementById(
            "cartCount"
        );

    const items =
        document.getElementById(
            "cartItems"
        );


    if (count) {

        count.textContent =
            cart.length;

    }


    if (!items) return;


    if (cart.length === 0) {

        items.innerHTML = `

            <div class="empty-cart">

                🛒

                <br><br>

                העגלה שלך ריקה

            </div>

        `;

    } else {

        items.innerHTML = "";


        cart.forEach(
            (product, index) => {

                items.innerHTML += `

                    <div class="cart-item">

                        <img
                            src="${product.image}"
                            class="cart-item-image"
                            alt="${product.name}"
                            onerror="
                                this.src =
                                'https://placehold.co/100x100?text=3D'
                            "
                        >

                        <div class="cart-item-info">

                            <h4>
                                ${product.name}
                            </h4>

                            <div>
                                ₪${product.price}
                            </div>

                        </div>

                        <button
                            class="remove-button"
                            onclick="
                                removeFromCart(${index})
                            "
                        >
                            ✕
                        </button>

                    </div>

                `;

            }
        );

    }


    const subtotal =
        getProductsTotal();


    const discount =
        getCouponDiscount();


    const tip =
        getTipAmount();


    const total =
        Math.max(
            0,
            subtotal -
            discount +
            tip
        );


    const productsTotal =
        document.getElementById(
            "productsTotal"
        );

    const couponDiscount =
        document.getElementById(
            "couponDiscount"
        );

    const tipTotal =
        document.getElementById(
            "tipTotal"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (productsTotal) {

        productsTotal.textContent =
            subtotal;

    }


    if (couponDiscount) {

        couponDiscount.textContent =
            discount;

    }


    if (tipTotal) {

        tipTotal.textContent =
            tip;

    }


    if (cartTotal) {

        cartTotal.textContent =
            total;

    }

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

    const cartElement =
        document.getElementById(
            "cart"
        );

    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (cartElement) {

        cartElement.classList.add(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

    const cartElement =
        document.getElementById(
            "cart"
        );

    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (cartElement) {

        cartElement.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


// ==========================================
// GO TO PRODUCTS
// ==========================================

function goToProducts() {

    const section =
        document.getElementById(
            "products"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "העגלה שלך ריקה 🛒"
        );

        return;

    }


    let message =
        "שלום! אני רוצה להזמין:\n\n";


    cart.forEach(product => {

        message +=

            "• " +
            product.name +
            " - ₪" +
            product.price +
            "\n";

    });


    const subtotal =
        getProductsTotal();


    const discount =
        getCouponDiscount();


    const tip =
        getTipAmount();


    const total =
        Math.max(
            0,
            subtotal -
            discount +
            tip
        );


    message +=
        "\n💵 מחיר מוצרים: ₪" +
        subtotal;


    if (appliedCoupon) {

        message +=

            "\n🎟️ קופון: " +
            appliedCoupon.code +

            "\n💸 הנחה: -₪" +
            discount;

    }


    if (tip > 0) {

        message +=
            "\n💝 טיפ: ₪" +
            tip;

    }


    message +=
        "\n\n💰 סה״כ: ₪" +
        total;


    const messageBox =
        document.getElementById(
            "customerMessage"
        );


    if (messageBox) {

        messageBox.value =
            message;

    }


    closeCart();


    const contact =
        document.getElementById(
            "contact"
        );


    if (contact) {

        contact.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// WHATSAPP FORM
// ==========================================

const orderForm =
    document.getElementById(
        "orderForm"
    );


if (orderForm) {

    orderForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "customerName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "customerPhone"
                ).value.trim();


            const message =
                document.getElementById(
                    "customerMessage"
                ).value.trim();


            const whatsappMessage =

                "🛍️ *הזמנה חדשה מ-Print3D*" +

                "\n\n" +

                "👤 שם: " +
                name +

                "\n📱 טלפון: " +
                phone +

                "\n\n📦 הזמנה:\n" +
                message;


            const url =

                "https://wa.me/" +

                whatsappNumber +

                "?text=" +

                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                url,
                "_blank"
            );

        }
    );

}


// ==========================================
// START
// ==========================================

displayProducts();

updateCart();
