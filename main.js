// Store scroll position before refresh
window.addEventListener("beforeunload", function () {
   sessionStorage.setItem("scrollPosition", window.scrollY);
});

// Restore scroll position after refresh
window.addEventListener("load", function () {
   var scrollPosition = sessionStorage.getItem("scrollPosition");
   if (scrollPosition !== null) {
       window.scrollTo(0, scrollPosition);
   }
});

function revealToSpan() {
   document.querySelectorAll(".reveal")
       .forEach(function (elem) {
           var parent = document.createElement("span");
           var child = document.createElement("span");

           parent.classList.add("parent");
           child.classList.add("child");

           child.innerHTML = elem.innerHTML;
           parent.appendChild(child);

           elem.innerHTML = "";
           elem.appendChild(parent);
       });
}

revealToSpan();

var t1 = gsap.timeline();
t1
.from(".child span", {
   x: 100,
   stagger: 0.2,
   duration: 1.5,
   ease: Power3.easeInOut
})

// Step 1: Show Green
.to("#green", {
   height: "100%",
   top: 0,
   duration: 1,
   delay: -0.5,
   ease: Circ.easeInOut
})

// Step 2: Move up parent to hide text
.to(".parent .child", {
   y: "-100%",
   duration: 1,
   delay: -0.2,
   ease: Circ.easeInOut
})

// Step 3: Hide Green to show Loader
.to("#green", {
   height: "0%",
   top: 0,
   duration: 1,
   delay: -0.8,
   ease: Circ.easeInOut
})

// Step 4: Shrink Loader
.to("#loader", {
   height: 0,
   duration: 1,
   delay: -0.5,
   ease: Circ.easeInOut
});

var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5, // Faster response for a smoother effect
        ease: "back.out"
    });
});

var typed = new Typed(".auto-type", {
   strings: ["UI/UX-Designer", "MERN-Developer", "App-Developer","AI-enthusiast"],
   typeSpeed: 150,
   backSpeed: 150,
   loop: true
});

///////

window.addEventListener("scroll",function(){
   const header=document.querySelector("header");
   header.classList.toggle("sticky",window.scrollY>0);
});
const serviceModals= document.querySelectorAll(".service-modal");
const learnmoreBtns= document.querySelectorAll(".learn-more-btn");
const modalCloseBtns= document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
   serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtn,i)=>{
learnmoreBtn.addEventListener("click",()=>{
   modal(i); 
});
});
modalCloseBtns.forEach((modalCloseBtn)=>{
  modalCloseBtn.addEventListener("click",()=>{
   serviceModals.forEach((modalView)=>{
      modalView.classList.remove("active");
   });
  });
});
const portfolioModals= document.querySelectorAll(".portfolio-model");
const imgCards= document.querySelectorAll(".img-card");
const portfolioCloseBtns= document.querySelectorAll("portfolio-close-btn");

var portfolioModal = function(modalClick){
   portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard,i)=>{
   imgCard.addEventListener("click",()=>{
      portfolioModal(i); 
});
});
portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
   portfolioCloseBtn.addEventListener("click",()=>{
      portfolioModals.forEach((portfolioModalView)=>{
         portfolioModalView.classList.remove("active");
   });
  });
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click",()=>{
   document.body.classList.toggle("dark-theme");
   themeBtn.classList.toggle("sun");

   localStorage.setItem("saved-theme",getCurrentTheme());
   localStorage.setItem("saved-icon",getCurrentIcon());
});
const getCurrentTheme=()=>document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon=()=>themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme=localStorage.getItem("saved-theme");
const savedIcon=localStorage.getItem("saved-icon");
if(savedTheme){
   document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
   themeBtn.classList[savedIcon ==="sun" ? "add":"remove"] ("sun");
}

const scrollTopBtn=document.querySelector(".scrollToTop-btn");
window,addEventListener("scroll",function(){
   scrollTopBtn.classList.toggle("active",window.scrollY >500);
});
scrollTopBtn.addEventListener("click",()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll",()=>{
   const sections = document.querySelectorAll("section");
   const scrollY =window.pageYOffset;

   sections.forEach(current=>{
       let sectionHeight=current.offsetHeight;
       let sectionTop=current.offsetTop-50;
       let id=current.getAttribute("id");
       if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
         document.querySelector(".nav-items a[href*="+ id +"]").classList.add("active");
       }
       else{
         document.querySelector(".nav-items a[href*="+ id +"]").classList.remove("active");
       }
   });
});