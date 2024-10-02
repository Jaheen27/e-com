




// Smooth scroll for the 'Explore Store' button
document.getElementById("exploreBtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  });
  
  
  
  // Countdown timer
  let countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now
  let countdownElement = document.getElementById("countdown");
  
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "Offer Expired";
    }
  }, 1000);
  
  // Hover scale effect for product items
  const productItems = document.querySelectorAll(".product-item");
  
  productItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s";
    });
  
    item.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });
  
  // Change link color on hover
  const footerLinks = document.querySelectorAll(".footer-link");
  
  footerLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.color = "#ff5733";
    });
  
    link.addEventListener("mouseout", function () {
      this.style.color = "white";
    });
  
    link.addEventListener("click", function () {
      alert("Navigating to " + this.innerHTML);
    });
  });
  
  
  