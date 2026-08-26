const products = [
    {id:1,name:"Twist Fidget",category:"fidget",price:25,image:"images/1.jpg"},
    {id:2,name:"Infinity Cube",category:"fidget",price:30,image:"images/2.jpg"},
    {id:3,name:"Fidget Ring",category:"fidget",price:20,image:"images/3.jpg"},
    {id:4,name:"Fidget Ball",category:"fidget",price:30,image:"images/4.jpg"},
    {id:5,name:"Helix Fidget",category:"fidget",price:35,image:"images/5.jpg"},
    {id:6,name:"Vortex Fidget",category:"fidget",price:35,image:"images/6.jpg"},
    {id:7,name:"Triple Helix",category:"fidget",price:40,image:"images/7.jpg"},
    {id:8,name:"Spinning Fidget",category:"fidget",price:30,image:"images/8.jpg"},
    {id:9,name:"Impossible Sphere",category:"fidget",price:40,image:"images/9.jpg"},
    {id:10,name:"Fidget Cube",category:"fidget",price:30,image:"images/10.jpg"},

    {id:11,name:"Dragon Keychain",category:"keychain",price:25,image:"images/11.jpg"},
    {id:12,name:"Octopus Keychain",category:"keychain",price:20,image:"images/12.jpg"},
    {id:13,name:"Heart Keychain",category:"keychain",price:15,image:"images/13.jpg"},
    {id:14,name:"Crystal Keychain",category:"keychain",price:20,image:"images/14.jpg"},
    {id:15,name:"T-Rex Keychain",category:"keychain",price:25,image:"images/15.jpg"},
    {id:16,name:"Dinosaur Keychain",category:"keychain",price:25,image:"images/16.jpg"},
    {id:17,name:"Cat Keychain",category:"keychain",price:20,image:"images/17.jpg"},
    {id:18,name:"Dog Keychain",category:"keychain",price:20,image:"images/18.jpg"},
    {id:19,name:"Game Controller Keychain",category:"keychain",price:25,image:"images/19.jpg"},
    {id:20,name:"Rocket Keychain",category:"keychain",price:20,image:"images/20.jpg"},

    {id:21,name:"Phone Stand",category:"phone",price:35,image:"images/21.jpg"},
    {id:22,name:"Foldable Phone Stand",category:"phone",price:35,image:"images/22.jpg"},
    {id:23,name:"Desk Phone Stand",category:"phone",price:30,image:"images/23.jpg"},
    {id:24,name:"Tablet Stand",category:"phone",price:50,image:"images/24.jpg"},
    {id:25,name:"Phone Riser",category:"phone",price:35,image:"images/25.jpg"},
    {id:26,name:"Vertical Phone Stand",category:"phone",price:40,image:"images/26.jpg"},
    {id:27,name:"Gaming Phone Stand",category:"phone",price:45,image:"images/27.jpg"},
    {id:28,name:"Minimal Phone Stand",category:"phone",price:30,image:"images/28.jpg"},
    {id:29,name:"Phone Dock",category:"phone",price:40,image:"images/29.jpg"},
    {id:30,name:"Phone Charging Stand",category:"phone",price:45,image:"images/30.jpg"},

    {id:31,name:"Desk Organizer",category:"room",price:45,image:"images/31.jpg"},
    {id:32,name:"Cable Organizer",category:"room",price:20,image:"images/32.jpg"},
    {id:33,name:"Cable Clips",category:"room",price:15,image:"images/33.jpg"},
    {id:34,name:"Pencil Organizer",category:"room",price:30,image:"images/34.jpg"},
    {id:35,name:"Desk Tray",category:"room",price:40,image:"images/35.jpg"},
    {id:36,name:"Monitor Stand",category:"room",price:65,image:"images/36.jpg"},
    {id:37,name:"Headphone Stand",category:"room",price:50,image:"images/37.jpg"},
    {id:38,name:"Under Desk Drawer",category:"room",price:55,image:"images/38.jpg"},
    {id:39,name:"Wall Organizer",category:"room",price:45,image:"images/39.jpg"},
    {id:40,name:"Hexagon Organizer",category:"room",price:35,image:"images/40.jpg"},
    {id:41,name:"Mini Trash Can",category:"room",price:30,image:"images/41.jpg"},
    {id:42,name:"Mini Plant Pot",category:"room",price:25,image:"images/42.jpg"},
    {id:43,name:"Desk Lamp Stand",category:"room",price:40,image:"images/43.jpg"},
    {id:44,name:"Controller Stand",category:"room",price:45,image:"images/44.jpg"},
    {id:45,name:"Game Controller Holder",category:"room",price:50,image:"images/45.jpg"},
    {id:46,name:"Wall Hook",category:"room",price:20,image:"images/46.jpg"},
    {id:47,name:"Mini Storage Box",category:"room",price:35,image:"images/47.jpg"},
    {id:48,name:"Coin Tray",category:"room",price:25,image:"images/48.jpg"},
    {id:49,name:"Desk Pen Holder",category:"room",price:30,image:"images/49.jpg"},
    {id:50,name:"Spinning Organizer",category:"room",price:45,image:"images/50.jpg"}
];

const coupons = {
    "5839210476": 100
};

const whatsappNumber = "972509996873";

let cart = [];
let appliedCoupon = null;
let currentCategory = "all";


function getProduct(id) {
    return products.find(product => product.id === id);
}


function getProductsTotal() {
    return cart.reduce(
        (total, product) => total + product.price,
        0
    );
}


function getTipPercent() {
    const select = document.getElementById("cartTip");
    return select ? Number(select.value) : 0;
}


function getTipAmount() {
    return Math.round(
        getProductsTotal() * getTipPercent() / 100
    );
}


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


function updateCart() {

    const items = document.getElementById("cartItems");
    const count = document.getElementById("cartCount");

    if (count) {
        count.textContent = cart.length;
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

        cart.forEach((product, index) => {

            const item = document.createElement("div");

            item.className = "cart-item";

            item.innerHTML = `
                <img
                    class="cart-item-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item-info">
                    <strong>${product.name}</strong>
                    <div>₪${product.price}</div>
                </div>

                <button class="remove-button">
                    ✕
                </button>
            `;

            item
                .querySelector(".remove-button")
                .addEventListener("click", () => {
                    cart.splice(index, 1);
                    updateCart();
                });

            items.appendChild(item);
        });
    }


    const subtotal = getProductsTotal();
    const discount = getCouponDiscount();
    const tip = getTipAmount();

    const total = Math.max(
        0,
        subtotal - discount + tip
    );


    document.getElementById("productsTotal").textContent = subtotal;
    document.getElementById("couponDiscount").textContent = discount;
    document.getElementById("tipTotal").textContent = tip;
    document.getElementById("cartTotal").textContent = total;
}


function openCart() {

    document
        .getElementById("cart")
        .classList.add("open");

    document
        .getElementById("cartOverlay")
        .classList.add("show");
}


function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("open");

    document
        .getElementById("cartOverlay")
        .classList.remove("show");
}


function addProduct(id) {

    const product = getProduct(id);

    if (!product) return;

    cart.push(product);

    updateCart();

    openCart();
}


function filterAndSearch() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    document
        .querySelectorAll(".product")
        .forEach(product => {

            const matchesCategory =
                currentCategory === "all" ||
                product.dataset.category === currentCategory;

            const matchesSearch =
                product.dataset.name
                    .toLowerCase()
                    .includes(search);


            product.style.display =
                matchesCategory && matchesSearch
                    ? ""
                    : "none";
        });
}


function applyCoupon() {

    const input =
        document.getElementById("couponInput");

    const message =
        document.getElementById("couponMessage");

    const code =
        input.value.trim();


    if (coupons[code] !== undefined) {

        appliedCoupon = {
            code: code,
            discount: coupons[code]
        };

        message.textContent =
            `✅ הקופון הופעל! ${coupons[code]}% הנחה`;

    } else {

        appliedCoupon = null;

        message.textContent =
            "❌ קוד קופון לא תקין";
    }

    updateCart();
}


function createOrderText() {

    let text =
        "שלום! אני רוצה להזמין:\n\n";


    cart.forEach(product => {

        text +=
            `• ${product.name} - ₪${product.price}\n`;
    });


    const subtotal = getProductsTotal();
    const discount = getCouponDiscount();
    const tip = getTipAmount();

    const total =
        Math.max(
            0,
            subtotal - discount + tip
        );


    text +=
        `\n💵 מחיר מוצרים: ₪${subtotal}`;


    if (appliedCoupon) {

        text +=
            `\n🎟️ קופון: ${appliedCoupon.code}` +
            `\n💸 הנחה: -₪${discount}`;
    }


    if (tip > 0) {

        text +=
            `\n💝 טיפ: ₪${tip}`;
    }


    text +=
        `\n\n💰 סה״כ: ₪${total}`;


    return text;
}


function checkout() {

    if (cart.length === 0) {

        alert("העגלה שלך ריקה 🛒");

        return;
    }


    document.getElementById(
        "customerMessage"
    ).value = createOrderText();


    closeCart();


    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


document
    .querySelectorAll(".add-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            addProduct(
                Number(button.dataset.id)
            );

        });

    });


document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            filterAndSearch();
        });

    });


document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        filterAndSearch
    );


document
    .getElementById("cartTip")
    .addEventListener(
        "change",
        updateCart
    );


document
    .getElementById("couponButton")
    .addEventListener(
        "click",
        applyCoupon
    );


document
    .getElementById("openCartButton")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCartButton")
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById("cartOverlay")
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        checkout
    );


document
    .getElementById("shopButton")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


document
    .getElementById("orderForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("customerName")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("customerPhone")
                    .value
                    .trim();

            const message =
                document
                    .getElementById("customerMessage")
                    .value
                    .trim();


            if (!name || !phone || !message) {

                alert("נא למלא את כל הפרטים.");

                return;
            }


            const whatsappMessage =
                "🛍️ *הזמנה חדשה מ-Print3D*\n\n" +
                "👤 שם: " + name + "\n" +
                "📱 טלפון: " + phone + "\n\n" +
                "📦 הזמנה:\n" +
                message;


            const url =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(url, "_blank");
        }
    );


updateCart();

// ===============================
// פתיחת עמוד מוצר בלחיצה
// ===============================

document.addEventListener("click", function (event) {

    const card = event.target.closest(".product");

    if (!card) return;

    // אם לחצו על כפתור הוספה לעגלה — לא עוברים לעמוד המוצר
    if (event.target.closest(".add-button")) {
        return;
    }

    const image = card.querySelector("img");

    if (!image) return;

    // מוצא את מספר המוצר מתוך images/1.jpg
    const match = image.src.match(/\/(\d+)\.jpg/i);

    if (!match) return;

    const productId = match[1];

    window.location.href =
        "product.html?id=" + productId;
});
