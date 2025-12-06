document.addEventListener('DOMContentLoaded', () => {
    
    // --- Obsługa menu mobilnego ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Zamykanie menu po kliknięciu w link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- AUTOMATYCZNY SLIDESHOW TŁA ---
    const slides = document.querySelectorAll('.hero-slide');
    const slideIntervalTime = 5000; // Czas zmiany slajdu (5 sekund)
    let currentSlideIndex = 0;

    function nextSlide() {
        if (slides.length > 0) {
            // Zabierz klasę active z obecnego
            slides[currentSlideIndex].classList.remove('active');
            
            // Oblicz następny indeks
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            
            // Dodaj klasę active do następnego
            slides[currentSlideIndex].classList.add('active');
        }
    }

    // Uruchom slideshow tylko jeśli są slajdy
    if (slides.length > 0) {
        setInterval(nextSlide, slideIntervalTime);
    }
});