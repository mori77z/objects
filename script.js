// Select images and create a zoom container
const images = document.querySelectorAll(".img-container img");
const zoomedContainer = document.createElement("div");
const zoomedImage = document.createElement("img");

zoomedContainer.classList.add("zoomed-container");
zoomedImage.classList.add("zoomed-image");
zoomedContainer.appendChild(zoomedImage);
document.body.appendChild(zoomedContainer);

// Function to open zoomed image
function openZoomedImage(src) {
    zoomedImage.src = src;
    zoomedImage.classList.add("active");
    zoomedContainer.classList.add("active");
}

// Function to close zoomed image
function closeZoomedImage() {
    zoomedImage.classList.remove("active");
    zoomedContainer.classList.remove("active");
}

// Add event listeners to images to open in zoom
images.forEach((img) => {
    img.addEventListener("click", () => {
        openZoomedImage(img.src);
    });
});

// Close zoomed image when clicking outside the image
zoomedContainer.addEventListener("click", (e) => {
    if (e.target === zoomedContainer || e.target === zoomedImage) {
        closeZoomedImage();
    }
});

// Arrow scroll functionality for left/right arrows outside the carousel
const arrowLeft = document.querySelectorAll("#arrow_left"); // Updated to target the specific ID
const arrowRight = document.querySelectorAll("#arrow_right"); // Updated to target the specific ID

arrowLeft.forEach(arrow => {
    arrow.addEventListener("click", function () {
        const scrollAmount = 300;
        const parentContent = arrow.closest('.arrows-wrapper').previousElementSibling;

        if (parentContent && parentContent.classList.contains('content')) {
            parentContent.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });
});

arrowRight.forEach(arrow => {
    arrow.addEventListener("click", function () {
        const scrollAmount = 300;
        const parentContent = arrow.closest('.arrows-wrapper').previousElementSibling;

        if (parentContent && parentContent.classList.contains('content')) {
            parentContent.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

// Dark Mode Font and Color Cycle (no interval, manual update)
const fonts = ["Helvetica", "Arial", "Courier", "Times", "Verdana"];
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];  // RGB Farben
let currentFontIndex = 0;
let currentColorIndex = 0;

// Function to update font and color
function updateFontAndColor() {
    const headers = document.querySelectorAll("h1, .header-container h1, .info h2");  // H1, Header, and H2 in info class
    headers.forEach(header => {
        header.style.fontFamily = fonts[currentFontIndex];
        header.style.color = colors[currentColorIndex];
        header.style.fontWeight = "bold";
    });
    
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Trigger the font and color update when desired (no interval, so call this manually)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateFontAndColor();  // Manually call on dark mode
}
