(()=>{"use strict";const e=document.querySelector(".hamburger"),t=document.querySelector(".header__nav-menu");function c(){e.classList.remove("active"),t.classList.remove("active")}e.addEventListener("click",(function(){e.classList.toggle("active"),document.body.classList.toggle("body__lock-scroll"),t.classList.toggle("active")})),document.querySelectorAll(".header__nav-link").forEach((e=>e.addEventListener("click",c)))})();