// --- Global Hover Zoom Effect ---
(function addGlobalHoverZoom() {
  const style = document.createElement("style");
  style.innerHTML = `
    .btn-primary, .btn-outline, .btn-withdraw, .nav-sec, .ft-btn, .signup-btn, 
    .google-btn, .btn-action, .btn-action-filled, .btn-action-light, .btn-reject, 
    .btn-save-changes, .btn-add-new-block, .add-new-btn, .add-signee-btn, 
    .btn-create, .btn-delete, .btn-delete-card,
    .card, .payment-card, .role-card, .features-card, .helping-card, 
    .activity-card, .activity-item, .bank-card, .saved-card-dark, .summary-blue-card, 
    .document-card, .stat-box, .testimonial, .virtual-card, .payment-method {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      will-change: transform;
    }
    .btn-primary:hover, .btn-outline:hover, .btn-withdraw:hover, .nav-sec:hover, .ft-btn:hover, .signup-btn:hover, 
    .google-btn:hover, .btn-action:hover, .btn-action-filled:hover, .btn-action-light:hover, .btn-reject:hover, 
    .btn-save-changes:hover, .btn-add-new-block:hover, .add-new-btn:hover, .add-signee-btn:hover, 
    .btn-create:hover, .btn-delete:hover, .btn-delete-card:hover,
    .card:hover, .payment-card:hover, .role-card:hover, .features-card:hover, .helping-card:hover, 
    .activity-card:hover, .activity-item:hover, .bank-card:hover, .saved-card-dark:hover, .summary-blue-card:hover, 
    .document-card:hover, .stat-box:hover, .testimonial:hover, .virtual-card:hover, .payment-method:hover {
      transform: scale(1.03);
    }
  `;
  document.head.appendChild(style);
})();

// Menu Javascript
const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = document.querySelectorAll("#mobileMenu a, #mobileMenu button");
  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
      }
    });
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
let autoSlideInterval;

const slides = document.querySelectorAll(".testimonial");
const indicators = document.querySelectorAll(".line");
function updateSlider() {
  if (!slider) return;

  slider.style.transform = `translateX(-${index * 100}%)`;

  indicators.forEach((line, i) => {
    line.classList.remove("active");
    if (i === index) {
      line.classList.add("active");
    }
  });
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0; 
  }
  updateSlider();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1; 
  }
  updateSlider();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 4000); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  stopAutoSlide();
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (startX - endX > 50) {
    nextSlide(); 
  } else if (endX - startX > 50) {
    prevSlide(); 
  }
  startAutoSlide();
});

indicators.forEach((line, i) => {
  line.addEventListener("click", () => {
    index = i;
    updateSlider();
    stopAutoSlide();
    startAutoSlide();
  });
});

updateSlider();
startAutoSlide();

/* CLICK ON INDICATOR */
indicators.forEach((line,i)=>{
  line.addEventListener("click", ()=>{
    index = i;
    updateSlider();
  });
});

/* SWIPE SUPPORT */
if (slider) {
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
}

// Password Toggle Logic
document.addEventListener("DOMContentLoaded", function() {
  const togglePassword = document.getElementById("togglePassword");
  if (togglePassword) {
    togglePassword.onclick = function () {
      const password = document.getElementById("password");
      const eyeOpen = document.getElementById("eyeOpen");
      const eyeClosed = document.getElementById("eyeClosed");

      if (password.type === "password") {
        password.type = "text";
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
      } else {
        password.type = "password";
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
      }
    };
  }
});

// Auth Handlers
function handleSignIn(event) {
  event.preventDefault();
  const formBox = event.target;

  formBox.innerHTML = `
    <div style="text-align: center; padding: 40px 0;">
      <img src="assets/img/success.png" alt="Success" style="width: 80px; height: 80px; margin: 0 auto 20px; display: block;" />
      <h1 style="margin-bottom: 15px;">Sign In Successful</h1>
      <p style="color: #666;">Welcome back! Redirecting you to your dashboard...</p>
    </div>
  `;
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}

function handleSignUp(event) {
  event.preventDefault();
  const formBox = event.target;

  // Replace form content with success state
  formBox.innerHTML = `
    <div style="text-align: center; padding: 40px 0;">
      <img src="assets/img/success.png" alt="Success" style="width: 80px; height: 80px; margin: 0 auto 20px; display: block;" />
      <h1 style="margin-bottom: 15px;">Sign Up Successful</h1>
      <p style="color: #666;">Account created! Redirecting you to your dashboard...</p>
    </div>
  `;

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}

function handleResetPassword(event) {
  event.preventDefault();
  const formBox = event.target;

  formBox.innerHTML = `
    <div style="text-align: center; padding: 40px 0;">
      <img src="assets/img/success.png" alt="Success" style="width: 80px; height: 80px; margin: 0 auto 20px; display: block;" />
      <h1 style="margin-bottom: 15px;">Email Sent</h1>
      <p style="color: #666;">Redirecting you to the confirmation page...</p>
    </div>
  `;
  setTimeout(() => {
    window.location.href = "confirmation.html";
  }, 1000);
}
