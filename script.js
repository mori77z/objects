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

// Pastel RGB colors for random selection
const pastelColors = [
    'rgb(255, 182, 193)', // Light pink
    'rgb(173, 216, 230)', // Light blue
    'rgb(255, 240, 245)', // Lavender
    'rgb(255, 239, 187)', // Light yellow
    'rgb(152, 251, 152)', // Pale green
    'rgb(255, 222, 173)', // Light orange
    'rgb(240, 230, 140)', // Olive
    'rgb(186, 85, 211)', // Orchid
    'rgb(255, 160, 122)', // Light salmon
    'rgb(144, 238, 144)', // Light green
];

// Web-safe fonts for random selection
const webSafeFonts = [
    'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Tahoma', 'Trebuchet MS', 'Impact', 'Comic Sans MS'
];

// Function to get a random pastel color
function getRandomPastelColor() {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

// Function to get a random web-safe font
function getRandomWebSafeFont() {
    return webSafeFonts[Math.floor(Math.random() * webSafeFonts.length)];
}

// Function to update the font and color for h1 inside .logo
function updateFontAndColorForLogo() {
    const logoHeader = document.querySelector(".logo h1");  // Select the h1 inside .logo
    if (logoHeader) {
        const randomFont = getRandomWebSafeFont();  // Get a random font
        const randomColor = getRandomPastelColor();  // Get a random pastel color

        logoHeader.style.fontFamily = randomFont;  // Apply the random font
        logoHeader.style.color = randomColor;  // Apply the random color
    }
}

// Function to update the font and color for h2 inside .info
function updateFontAndColorForInfo() {
    const infoHeader = document.querySelector(".info h2");  // Select the h2 inside .info
    if (infoHeader) {
        const randomFont = getRandomWebSafeFont();  // Get a random font
        const randomColor = getRandomPastelColor();  // Get a random pastel color

        infoHeader.style.fontFamily = randomFont;  // Apply the random font
        infoHeader.style.color = randomColor;  // Apply the random color
    }
}

// Intersection Observer to track when the section with .combined-container becomes visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When .combined-container is visible, update the font and color for both h1 and h2
            updateFontAndColorForLogo();
            updateFontAndColorForInfo();
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is visible
});

// Select all sections with the class .combined-container and start observing them
const sections = document.querySelectorAll(".combined-container");
sections.forEach(section => {
    observer.observe(section);  // Start observing each section
});

// Trigger the font and color update when desired (no interval, so call this manually)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Manually update both logo and info when dark mode is active
    updateFontAndColorForLogo();
    updateFontAndColorForInfo();
}
}
