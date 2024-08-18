// handle Search button
var searchButton = document.querySelector("#search-btn");
searchButton.addEventListener("click", function() {
    // Get the button element
   // closeAllSections();
    let searchForm = document.querySelector(".search-form");
    // Add a click event listener to the button
    searchForm.classList.toggle('active');
});


// handle cart buttom


var cartButton = document.querySelector("#cart-btn");
cartButton.addEventListener("click", function() {
    // Get the button element
  
  // closeAllSections();
   let shoppingCart =  document.querySelector(".shopping-cart");
   shoppingCart.classList.toggle('active')
    
});

// loginForm
var loginButton = document.querySelector("#login-btn");
loginButton.addEventListener("click", function() {
    // Get the button element
    //closeAllSections();   
      let loginForm =  document.querySelector(".login-form");
   loginForm.classList.toggle('active');
    
});

// Navbar

var Navbar = document.querySelector("#menu-btn");
Navbar.addEventListener("click", function() {
    // Get the button element
   // closeAllSections();
      let navbar=  document.querySelector(".navbar");
      navbar.classList.toggle('active');
    
});


// close all icon in navbar\

function closeAllSections() {
    document.querySelectorAll('.search-form, .shopping-cart, .login-form, .navbar').forEach(function(section) {
        section.classList.remove('active');
    });
}

// Function to handle button clicks
function setupButtonClick(buttonId, sectionClass) {
    var button = document.querySelector(buttonId);
    button.addEventListener('click', function() {
        closeAllSections(); // Close all sections before toggling the clicked one
        var section = document.querySelector(sectionClass);
        section.classList.toggle('active'); // Toggle the 'active' class on the target section
    });
}

// Set up event listeners for each button
setupButtonClick("#search-btn", ".search-form");
setupButtonClick("#cart-btn", ".shopping-cart");
setupButtonClick("#login-btn", ".login-form");
setupButtonClick("#menu-btn", ".navbar");

// Close all sections when scrolling
window.addEventListener('scroll', function() {
    closeAllSections();
});

// Close all sections when clicking outside of any section
document.addEventListener('click', function(event) {
    // Check if the clicked element is not inside any of the sections
    if (!event.target.closest('.search-form') &&
        !event.target.closest('.shopping-cart') &&
        !event.target.closest('.login-form') &&
        !event.target.closest('.navbar') &&
        !event.target.closest('.icons')) {
        closeAllSections();
    }
});


// for slider


   // Add to your script.js

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.product-slider', {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});
document.addEventListener('DOMContentLoaded', function() {
var swiper = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
});
