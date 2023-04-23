const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

let msgStatus = document.getElementById("message-status");

const contact_form = document.getElementById("contact-form");

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("fya5KvHcOPHdl2N78");
})();

contact_form.addEventListener("submit", function (event) {
  event.preventDefault();
  // generate a five digit number for the contact_number variable
  this.contact_number.value = (Math.random() * 100000) | 0;
  // these IDs from the previous steps
  emailjs.sendForm("service_p4t1m6m", "template_5gstmlm", this).then(
    function () {
      contact_form.reset();
      msgStatus.innerText = "Successfully sent!";
      setTimeout(() => {
        fadeOut(msgStatus);
      }, 1000);

      console.log("SUCCESS!");
    },
    function (error) {
      msgStatus.innerText = "Something went wrong!";
      setTimeout(() => {
        fadeOut(msgStatus);
      }, 1000);
      console.log("FAILED...", error);
    }
  );
});

function fadeOut(el) {
  var opacity = 1; // Initial opacity
  var interval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      el.style.opacity = opacity;
    } else {
      clearInterval(interval); // Stop the interval when opacity reaches 0
      el.style.visibility = "none"; // Hide the element
    }
  }, 300);
}

