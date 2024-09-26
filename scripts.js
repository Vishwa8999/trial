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
