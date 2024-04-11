// 'use strict';



// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // // testimonials variables 
// // const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// // const modalContainer = document.querySelector("[data-modal-container]");
// // const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// // const overlay = document.querySelector("[data-overlay]");

// // // modal variable
// // const modalImg = document.querySelector("[data-modal-img]");
// // const modalTitle = document.querySelector("[data-modal-title]");
// // const modalText = document.querySelector("[data-modal-text]");

// // // modal toggle function
// // const testimonialsModalFunc = function () {
// //   modalContainer.classList.toggle("active");
// //   overlay.classList.toggle("active");
// // }

// // // add click event to all modal items
// // for (let i = 0; i < testimonialsItem.length; i++) {

// //   testimonialsItem[i].addEventListener("click", function () {

// //     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
// //     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
// //     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
// //     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

// //     testimonialsModalFunc();

// //   });

// // }

// // // add click event to modal close button
// // modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// // overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }
"use strict";

// Element toggle function
const elementToggleFunc = function (elem) {
     elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
     sidebarBtn.addEventListener("click", function () {
          elementToggleFunc(sidebar);
     });
}

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
     select.addEventListener("click", function () {
          elementToggleFunc(this);
     });
}

// Add event to all select items
selectItems.forEach((item) => {
     item.addEventListener("click", function () {
          let selectedValue = this.innerText.toLowerCase();
          selectValue.innerText = this.innerText;
          elementToggleFunc(select);
          filterFunc(selectedValue);
     });
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
     filterItems.forEach((item) => {
          if (selectedValue === "all") {
               item.classList.add("active");
          } else if (selectedValue === item.dataset.category) {
               item.classList.add("active");
          } else {
               item.classList.remove("active");
          }
     });
};

// Add event to all filter button items for large screen
let lastClickedBtn = filterBtn[0]; // Assuming at least one filterBtn exists

filterBtn.forEach((btn) => {
     btn.addEventListener("click", function () {
          let selectedValue = this.innerText.toLowerCase();
          selectValue.innerText = this.innerText;
          filterFunc(selectedValue);

          lastClickedBtn.classList.remove("active");
          this.classList.add("active");
          lastClickedBtn = this;
     });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input field
if (form && formInputs.length > 0 && formBtn) {
     formInputs.forEach((input) => {
          input.addEventListener("input", function () {
               // Check form validation
               if (form.checkValidity()) {
                    formBtn.removeAttribute("disabled");
               } else {
                    formBtn.setAttribute("disabled", "");
               }
          });
     });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
navigationLinks.forEach((link) => {
     link.addEventListener("click", function (event) {
          // Make sure to include 'event' parameter if you plan to use event.preventDefault()
          const clickedPage = this.textContent.trim().toLowerCase();
          console.log("Clicked header:", clickedPage); // Log which header was clicked

          pages.forEach((page) => {
               if (clickedPage === page.dataset.page) {
                    console.log("Showing page:", page.dataset.page); // Log when a matching page is found and shown
                    page.classList.add("active");
               } else {
                    page.classList.remove("active");
               }
          });

          navigationLinks.forEach((navLink) => {
               if (navLink.textContent.trim().toLowerCase() === clickedPage) {
                    navLink.classList.add("active");
               } else {
                    navLink.classList.remove("active");
               }
          });

          event.preventDefault(); // Prevent the default action to ensure page doesn't jump or reload
     });
});


