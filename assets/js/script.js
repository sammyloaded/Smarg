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