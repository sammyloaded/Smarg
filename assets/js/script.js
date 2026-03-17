
// Menu Javascript
const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

//   Get Started Buttons Onclick 
const buttons = document.querySelectorAll(".nav-sec, .ft-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  });

//   Active Links 
const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
  

//   Testimonial Slider 
const slider = document.getElementById("testimonialSlider");

let index = 0;
let startX = 0;
let endX = 0;

const slides = document.querySelectorAll(".testimonial");
const indicators = document.querySelectorAll(".line");

function updateSlider(){
  slider.style.transform = `translateX(-${index * 100}%)`;

  indicators.forEach((line,i)=>{
    line.classList.remove("active");
    if(i === index){
      line.classList.add("active");
    }
  });
}

/* CLICK ON INDICATOR */
indicators.forEach((line,i)=>{
  line.addEventListener("click", ()=>{
    index = i;
    updateSlider();
  });
});

/* SWIPE SUPPORT */
slider.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", e=>{
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", ()=>{

  if(startX - endX > 50){
    index++;
  }

  if(endX - startX > 50){
    index--;
  }

  if(index < 0){
    index = 0;
  }

  if(index >= slides.length){
    index = slides.length - 1;
  }

  updateSlider();
});

