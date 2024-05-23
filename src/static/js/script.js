document.addEventListener('DOMContentLoaded', function () {
    const album = document.querySelector('.album');
    const images = album.querySelectorAll('img');
    let currentIndex = 0;

    function nextImage() {
        // Hide the current image
        images[currentIndex].classList.remove('active');
        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;
        // Show the new image
        images[currentIndex].classList.add('active');
    }

    // Show the first image when the page loads
    images[currentIndex].classList.add('active');
    // Automatically switch images every 5 seconds
    setInterval(nextImage, 5000);
});
