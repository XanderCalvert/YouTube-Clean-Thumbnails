document.addEventListener('DOMContentLoaded', () => {
    // console.log('Content script loaded'); // debugging
    disableOverlay();
});

// Function to disable the overlay
function disableOverlay() {
    const overlays = document.querySelectorAll('.YtInlinePlayerControlsTopLeftControls');
    overlays.forEach((overlay, index) => {
        overlay.style.display = 'none'; // making sure
        overlay.style.pointerEvents = 'none'; // making doubly sure
        // console.log(`Overlay ${index} modified:`, overlay); // debugging
    });
}

// Observe changes to dynamically loaded content
const observer = new MutationObserver(() => {
    // console.log('Mutation observed'); // debugging
    disableOverlay();
});

observer.observe(document.body, { childList: true, subtree: true });
