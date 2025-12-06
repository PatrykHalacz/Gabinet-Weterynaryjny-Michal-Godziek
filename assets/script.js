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
    const slideIntervalTime = 5000; // Czas zmiany slajdu (5 sekund)
    
    // Funkcja do zwracania AKTYWNEGO zestawu slajdów (desktop lub mobile)
    function getActiveSlideSet() {
        // Sprawdź, czy pasuje media query dla urządzeń mobilnych (<= 768px)
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        
        // Zwróć NodeList odpowiedniego zestawu slajdów
        return isMobile 
            ? document.querySelectorAll('.mobile-slide') 
            : document.querySelectorAll('.desktop-slide');
    }
    
    // Główna funkcja przełączania slajdów
    function nextSlide() {
        const slides = getActiveSlideSet();
        if (slides.length === 0) return;
        let currentActiveSlide = document.querySelector('.hero-slide.active');
        
        let currentIndex = -1;

        for (let i = 0; i < slides.length; i++) {
            if (slides[i] === currentActiveSlide) {
                currentIndex = i;
                break;
            }
        }
        
        // 1. Jeśli żaden slajd z AKTYWNEGO zestawu nie jest aktywny
        if (currentIndex === -1) {
            document.querySelectorAll('.hero-slide.active').forEach(slide => {
                slide.classList.remove('active');
            });

            slides[0].classList.add('active');
            return;
        }

        // 2. Kontynuuj normalne przełączanie
        slides[currentIndex].classList.remove('active');
        
        // Oblicz następny indeks
        let nextIndex = (currentIndex + 1) % slides.length;
        
        slides[nextIndex].classList.add('active');
    }
    
    // Uruchom slideshow
    const initialSlides = getActiveSlideSet();
    if (initialSlides.length > 0) {
        
        if (!document.querySelector('.hero-slide.active')) {
            initialSlides[0].classList.add('active');
        } else {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile && document.querySelector('.desktop-slide.active')) {
                 nextSlide();
            }
        }
        setInterval(nextSlide, slideIntervalTime);
    }
    
    // Obsługa zmiany rozmiaru okna/orientacji
    window.addEventListener('resize', nextSlide);
});