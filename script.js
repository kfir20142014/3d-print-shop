// ================================
// PRINT3D - PRODUCT PAGE SYSTEM
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // רק אם אנחנו בעמוד החנות
    const productCards = document.querySelectorAll(".product");

    if (productCards.length === 0) {
        return;
    }

    productCards.forEach(function (card) {

        const image = card.querySelector("img");

        if (!image) {
            return;
        }

        const imagePath = image.getAttribute("src");

        if (!imagePath) {
            return;
        }

        // מוצא מספר מתוך images/1.jpg, images/2.jpg וכו'
        const result = imagePath.match(/(\d+)\.jpg/i);

        if (!result) {
            return;
        }

        const productNumber = result[1];

        // הופך רק את התמונה והשם ללחיצים
        const clickableElements = card.querySelectorAll(
            "img, h3"
        );

        clickableElements.forEach(function (element) {

            element.style.cursor = "pointer";

            element.addEventListener("click", function (event) {

                event.stopPropagation();

                window.location.href =
                    "product.html?id=" + productNumber;

            });

        });

    });

});
