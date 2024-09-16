document.getElementById('graphicDesignTab').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('graphicDesignGallery').classList.add('active');
    document.getElementById('artworksGallery').classList.remove('active');

    // Switch active/inactive classes for tabs
    document.getElementById('graphicDesignTab').classList.add('active');
    document.getElementById('graphicDesignTab').classList.remove('inactive');
    document.getElementById('artworksTab').classList.add('inactive');
    document.getElementById('artworksTab').classList.remove('active');
});

document.getElementById('artworksTab').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('graphicDesignGallery').classList.remove('active');
    document.getElementById('artworksGallery').classList.add('active');

    // Switch active/inactive classes for tabs
    document.getElementById('artworksTab').classList.add('active');
    document.getElementById('artworksTab').classList.remove('inactive');
    document.getElementById('graphicDesignTab').classList.add('inactive');
    document.getElementById('graphicDesignTab').classList.remove('active');
});
// Function to switch tabs
function switchGallery(activeTabId, activeGalleryId) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.sub-nav a').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.sub-nav a').forEach(tab => tab.classList.add('inactive'));

    // Remove 'active' class from all galleries
    document.querySelectorAll('.gallery').forEach(gallery => gallery.classList.remove('active'));

    // Add 'active' class to the clicked tab and corresponding gallery
    document.getElementById(activeTabId).classList.add('active');
    document.getElementById(activeTabId).classList.remove('inactive');
    document.getElementById(activeGalleryId).classList.add('active');
}

// Event listeners for each tab
document.getElementById('graphicDesignTab').addEventListener('click', function (event) {
    event.preventDefault();
    switchGallery('graphicDesignTab', 'graphicDesignGallery');
});

document.getElementById('artworksTab').addEventListener('click', function (event) {
    event.preventDefault();
    switchGallery('artworksTab', 'artworksGallery');
});

document.getElementById('muralsTab').addEventListener('click', function (event) {
    event.preventDefault();
    switchGallery('muralsTab', 'muralsGallery');
});

// Get the modal
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');
var closeBtn = document.querySelector('.close');

// Event listener to open lightbox on image click
document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default anchor behavior
        lightbox.style.display = "block";
        lightboxImg.src = this.href;  // Set the lightbox image to the clicked image's URL
    });
});

// Event listener to close lightbox
closeBtn.addEventListener('click', function() {
    lightbox.style.display = "none";
});

// Close the lightbox if the user clicks outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

