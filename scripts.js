// Select the video element using its ID
const backgroundVideo = document.getElementById('backgroundVideo');

// Path to the video file
const videoSource = 'C:\Users\svish\OneDrive\Desktop\trial\images\college.mp4'; // Replace with the actual video file path

// Create a new <source> element for the video
const sourceElement = document.createElement('source');

// Set the source and type for the video
sourceElement.setAttribute('src', videoSource);
sourceElement.setAttribute('type', 'video/mp4');

// Append the <source> element to the <video> element
backgroundVideo.appendChild(sourceElement);

// Optionally, you can add an event listener to check if the video loads successfully
backgroundVideo.addEventListener('canplay', () => {
    console.log('Video is ready to play');
});

// Event listener to handle errors in loading the video
backgroundVideo.addEventListener('error', (e) => {
    console.error('Error loading video: ', e);
    alert('Failed to load the video. Please check the file path or format.');
});
// summaaaaa
// Function to toggle the navbar
function toggleNavbar() {
    const navIcon = document.querySelector('.nav-icon');
    const nav = document.querySelector('nav');

    // Toggle the 'expanded' class on the nav
    if (nav.classList.contains('expanded')) {
        nav.classList.remove('expanded');
        navIcon.classList.remove('clicked');
    } else {
        nav.classList.add('expanded');
        navIcon.classList.add('clicked');
    }
}

// Close the nav when clicking outside
window.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navIcon = document.querySelector('.nav-icon');
    if (!nav.contains(event.target) && !navIcon.contains(event.target)) {
        nav.classList.remove('expanded');
        navIcon.classList.remove('clicked');
    }
});

// Close the menu if clicking outside of it
window.onclick = function(event) {
    const navMenu = document.querySelector("nav");
    const navIcon = document.querySelector(".nav-icon");

    if (navMenu.classList.contains("expanded") && !navMenu.contains(event.target) && !navIcon.contains(event.target)) {
        toggleNavbar();
    }
};

// Update navigation link behavior
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');  // Correctly get the href attribute
        if (href) {
            window.location.href = href;  // Manually change the location to navigate
        }
    });
});
// flex
function toggleCard(card) {
    card.classList.toggle('active');
  }
  
// summa
document.addEventListener("DOMContentLoaded", function() {
    // You can add any JavaScript animations or interactions here if needed
    // Example: Adding a smooth scroll effect to the navigation links

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// rotatinjs
function showInfo(college) {
    let infoText = document.getElementById('info-text');
    let modal = document.getElementById('info-modal');

    switch(college) {
        case 'engineering':
            infoText.innerHTML = "<h2>Engineering College</h2><p>This is the Sri Sairam Engineering College in Chennai...</p>";
            break;
        case 'medical':
            infoText.innerHTML = "<h2>Medical College</h2><p>Sri Sairam Medical College provides state-of-the-art facilities...</p>";
            break;
        case 'schools':
            infoText.innerHTML = "<h2>Group of Schools</h2><p>Sri Sairam Group of Schools focuses on...</p>";
            break;
        case 'polytechnic':
            infoText.innerHTML = "<h2>Polytechnic College</h2><p>Sri Sairam Polytechnic College offers...</p>";
            break;
    }

    modal.style.display = "flex";
}

function closeInfo() {
    let modal = document.getElementById('info-modal');
    modal.style.display = "none";
}
// hostel
// JavaScript for Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide by default
showSlide(currentSlide);
// 
