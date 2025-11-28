document.addEventListener('DOMContentLoaded', function() {
    
    // -------------------------------------------------------------------
    // 1. SCROLL-REVEAL EFFECT (Fades content in as it enters the viewport)
    // -------------------------------------------------------------------

    const cinematicElements = document.querySelectorAll('.cinematic-element');
    
    // Function to check if an element is in the viewport
    const checkVisibility = () => {
        cinematicElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Check if the top of the element is within 85% of the viewport height
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add('is-visible');
            }
        });
    };

    // Initial check and event listener setup
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
    // -------------------------------------------------------------------
    // 2. PARALLAX EFFECT (Makes the hero background move slower than foreground)
    // -------------------------------------------------------------------

    const heroSection = document.getElementById('hero');
    const parallaxSpeed = 0.5; // Controls the movement rate (0.5 = 50% slower)

    function updateParallax() {
        const scrollPosition = window.pageYOffset;
        
        // Apply the transformation to the background image position
        const translationValue = scrollPosition * parallaxSpeed; 
        
        heroSection.style.backgroundPositionY = `${translationValue}px`;
    }

    // Attach the function to the scroll event
    window.addEventListener('scroll', updateParallax);

    // Run once on load to set the initial position
    updateParallax();
});