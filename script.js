document.querySelectorAll('.language-switcher button').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.language-switcher button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.faq-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const answerElement = card.querySelector('.faq-hover-answer');
    const answerText = answerElement.getAttribute('data-answer');
    let index = 0;

    answerElement.textContent = ''; // Clear existing content
    const typingInterval = setInterval(() => {
      answerElement.textContent += answerText[index];
      index++;

      if (index === answerText.length) {
        clearInterval(typingInterval);
      }
    }, 30); // Adjust typing speed
  });

  card.addEventListener('mouseleave', () => {
    const answerElement = card.querySelector('.faq-hover-answer');
    answerElement.textContent = ''; // Clear the content on hover out
  });
});

// Swiper Initialization
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default: 1 slide for small screens
    spaceBetween: 30, // Space between slides
    autoplay: {
      delay: 3000, // Slide duration (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, // Enable looping
    breakpoints: {
      768: {
        slidesPerView: 2, // Show 2 cards on tablets
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, // Show 3 cards on desktops
        spaceBetween: 30,
      },
    },
  });
});
document.getElementById("scrollButton").addEventListener("click", function () {
  document.getElementById("target-div").scrollIntoView({ behavior: "smooth" });
});