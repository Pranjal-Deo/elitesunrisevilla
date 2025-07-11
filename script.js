// Image Carousel
const images = [
  'images/villa1.jpeg',
  'images/villa2.jpeg',
  'images/villa3.jpeg'
];
let currentIndex = 0;

function showImage(index) {
  document.getElementById("carousel-img").src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-In Animations on Scroll
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, options);
sections.forEach(section => observer.observe(section));

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('.form-status').innerText = 'Sending message...';
  setTimeout(() => {
    document.querySelector('.form-status').innerText = 'Thank you for contacting us! We will reach out shortly.';
    this.reset();
  }, 1500);
});
