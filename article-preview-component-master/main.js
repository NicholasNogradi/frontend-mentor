const shareButton = document.querySelector('.share-button');
const overlay = document.getElementById('overlay');

shareButton.addEventListener('click', function() {
    overlay.classList.toggle('show');

    shareButton.classList.toggle('active');

    positionTooltip();

});

function positionTooltip() {
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile && overlay.classList.contains('show')) {
        // Desktop: position above button
        const buttonRect = shareButton.getBoundingClientRect();
        const tooltipRect = overlay.getBoundingClientRect();
        
        overlay.style.position = 'absolute';
        overlay.style.top = (buttonRect.top - tooltipRect.height - 15) + 'px';
        overlay.style.left = (buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2) + 'px';
    }
}

// Reposition on window resize
window.addEventListener('resize', () => {
    if (overlay.classList.contains('show')) {
        positionTooltip();
    }
});