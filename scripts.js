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
