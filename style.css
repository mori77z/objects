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
// Pastellfarben und Schriftarten zur Auswahl
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
    'rgb(144, 238, 144)'  // Light green
];

const webSafeFonts = [
    'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Tahoma', 'Trebuchet MS', 'Impact', 'Comic Sans MS'
];

// Funktion für eine zufällige Pastellfarbe
function getRandomPastelColor() {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

// Funktion für eine zufällige web-sichere Schriftart
function getRandomWebSafeFont() {
    return webSafeFonts[Math.floor(Math.random() * webSafeFonts.length)];
}

// Funktion zur Aktualisierung der Schriftart und Farbe für .logo h1
function updateFontAndColorForLogo() {
    const logoHeader = document.querySelector(".logo h1");
    if (logoHeader) {
        logoHeader.style.fontFamily = getRandomWebSafeFont();
        logoHeader.style.color = getRandomPastelColor();
    }
}

// Funktion zur Aktualisierung der Schriftart und Farbe für .info h2
function updateFontAndColorForInfo() {
    const infoHeader = document.querySelector(".info h2");
    if (infoHeader) {
        infoHeader.style.fontFamily = getRandomWebSafeFont();
        infoHeader.style.color = getRandomPastelColor();
    }
}

// Initialisiere beim Laden der Seite
document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        updateFontAndColorForLogo();
        updateFontAndColorForInfo();

        // Intersection Observer für .combined-container
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateFontAndColorForLogo();
                    updateFontAndColorForInfo();
                }
            });
        }, { threshold: 0.5 });

        // Überwache alle .combined-container Elemente
        document.querySelectorAll(".combined-container").forEach(section => {
            observer.observe(section);
        });
    }
});
