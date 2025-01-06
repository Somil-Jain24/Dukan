console.log("Script Loaded");

// Toggle menu visibility for burger menu
const burgerIcon = document.querySelector(".third img");
if (burgerIcon) {
    burgerIcon.addEventListener("click", () => {
        const menuList = document.querySelector(".list");
        if (menuList) {
            menuList.style.display = menuList.style.display === "flex" ? "none" : "flex";
        }
    });
}

// Handle Add to Cart buttons
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const addToCartButtons = document.querySelectorAll(".add button");
if (addToCartButtons) {
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productElement = button.closest(".particular");
            const productName = productElement?.querySelector("p")?.textContent;
            const productPrice = productElement?.querySelector("#Real")?.textContent;
            const productQuantity = 1; // Default quantity

            if (productName && productPrice) {
                const product = { name: productName, price: productPrice, quantity: productQuantity };
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`Added to Cart: ${productName}`);
            }
        });
    });
}

// Handle carousel indicators
const carouselIndicators = document.querySelectorAll(".clicker .kicker");
if (carouselIndicators) {
    carouselIndicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            carouselIndicators.forEach((ind, i) => {
                ind.style.background = i === index ? "#fe9126" : "green";
            });
            alert(`Carousel Indicator ${index + 1} clicked!`);
        });
    });
}

// Handle Search button
const searchButton = document.querySelector(".search img");
if (searchButton) {
    searchButton.addEventListener("click", () => {
        const searchInput = document.querySelector(".search input")?.value;
        alert(`Search query: ${searchInput}`);
    });
}

// Handle navigation links
const navLinks = document.querySelectorAll(".list li a");
if (navLinks) {
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link action for demo
            alert(`Navigating to: ${link.textContent}`);
        });
    });
}

// Handle footer links
const footerLinks = document.querySelectorAll(".points .lines p");
if (footerLinks) {
    footerLinks.forEach((footerLink) => {
        footerLink.addEventListener("click", () => {
            alert(`Footer link clicked: ${footerLink.textContent}`);
        });
    });
}

// Button Navigation
const buttons = document.querySelectorAll(".btn button");

if (buttons.length) {
    buttons[0].addEventListener("click", () => {
        window.location.href = "create-account.html"; // Navigate to Create Account page
    });

    buttons[1].addEventListener("click", () => {
        window.location.href = "login.html"; // Navigate to Login page
    });

    buttons[2].addEventListener("click", () => {
        window.location.href = "about-us.html"; // Navigate to About Us page
    });
}

// Handle Cart button
const cartButton = document.querySelector(".for div img");
if (cartButton) {
    cartButton.addEventListener("click", () => {
        window.location.href = "cart.html"; // Navigate to Cart page
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Button Navigation
    document.getElementById("createAccountBtn").addEventListener("click", () => {
        window.location.href = "create-account.html";
    });

    document.getElementById("loginBtn").addEventListener("click", () => {
        window.location.href = "login.html";
    });

    document.getElementById("aboutUsBtn").addEventListener("click", () => {
        window.location.href = "about-us.html";
    });

    // Burger Menu Toggle
    const burger = document.querySelector(".burger img");
    burger.addEventListener("click", () => {
        const menu = document.querySelector(".list");
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    // Add to Cart Alert
    // const cartButtons = document.querySelectorAll(".addToCartBtn");
    // cartButtons.forEach(button => {
    //     button.addEventListener("click", () => {
    //         const productElement = button.closest(".particular");
    //         const productName = productElement?.querySelector("p")?.textContent;
    //         const productPrice = productElement?.querySelector("#Real")?.textContent;
    //         const productQuantity = 1; // Default quantity

    //         if (productName && productPrice) {
    //             const product = { name: productName, price: productPrice, quantity: productQuantity };
    //             cart.push(product);
    //             localStorage.setItem('cart', JSON.stringify(cart));
    //             alert(`Added to Cart: ${productName}`);
    //         }
    //     });
    // });
});
