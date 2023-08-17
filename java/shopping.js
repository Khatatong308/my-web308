let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function addToCart(productName, price) {
    if (cart[productName]) {
        cart[productName] += price;
    } else {
        cart[productName] = price;
    }
    updateCart();
}
        let currentQuantity = 0;
        let productPrice = 100; 
        let discountThreshold = 1000; 
        let discountPercentage = 0.1;

        function updateQuantity() {
            const quantityElement = document.getElementById("quantity");
            quantityElement.textContent = currentQuantity;
        }

        function updateTotalPrice() {
            const totalPriceElement = document.getElementById("totalPrice");
            const total = currentQuantity * productPrice;
            totalPriceElement.textContent = total;
        }

        function decreaseQuantity() {
            if (currentQuantity > 0) {
                currentQuantity--;
                updateQuantity();
                updateTotalPrice();
            }
        }

        function increaseQuantity() {
            currentQuantity++;
            updateQuantity();
            updateTotalPrice();
        }

        
        updateQuantity();
        updateTotalPrice();
        function toggleMessage() {
          const messageElement = document.getElementById("message");
          messageElement.classList.toggle("hidden");
      }
      function toggleMessage() {
        const messageElement = document.getElementById("message");
        messageElement.classList.toggle("hidden");
    }
    function updateQuantity() {
      const quantityElement = document.getElementById("quantity");
      quantityElement.textContent = currentQuantity;
  }

  function updateTotalPrice() {
      const totalPriceElement = document.getElementById("totalPrice");
      let total = currentQuantity * productPrice;

      if (total >= discountThreshold) {
          total *= 0.9;  
      }

      totalPriceElement.textContent = total.toFixed(2); 
  }