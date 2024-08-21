document.addEventListener('DOMContentLoaded', () => {
    // console.log('Content script loaded'); // debugging
    disableOverlay();
    hideYouTubeSections();
});

// Function to disable the overlay
function disableOverlay() {
    const overlayClasses = ['.YtInlinePlayerControlsTopLeftControls', '.ytp-paid-content-overlay'];
    overlayClasses.forEach((overlayClass) => {
        const overlays = document.querySelectorAll(overlayClass);
        overlays.forEach((overlay, index) => {
            overlay.style.display = 'none'; // making sure
            overlay.style.pointerEvents = 'none'; // making doubly sure
            // console.log(`Overlay ${index} in class ${overlayClass} modified:`, overlay); // debugging
        });
    });
}

// Function to hide specific YouTube sections
function hideYouTubeSections() {
    const sectionSelectors = ['ytd-reel-shelf-renderer', 'ytd-rich-section-renderer'];
    sectionSelectors.forEach((selector) => {
        const sections = document.querySelectorAll(selector);
        sections.forEach((section, index) => {
            section.style.display = 'none';
            // console.log(`Section ${index} for ${selector} hidden`, section); // debugging
        });
    });
}

// Observe changes to dynamically loaded content
const observer = new MutationObserver(() => {
    // console.log('Mutation observed'); // debugging
    disableOverlay();
    hideYouTubeSections();
});

observer.observe(document.body, { childList: true, subtree: true });
