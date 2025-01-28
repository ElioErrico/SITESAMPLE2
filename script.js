document.addEventListener('DOMContentLoaded', () => {
    // Hero Height Optimization
    const optimizeHero = () => {
        const hero = document.querySelector('.hero');
        const isMobile = window.innerWidth < 768;
        hero.style.height = isMobile ? `${window.innerHeight * 0.7}px` : '100vh';
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Event Listeners
    window.addEventListener('resize', optimizeHero);
    window.addEventListener('load', () => {
        optimizeHero();
        // Preload images
        const images = document.querySelectorAll('img');
        images.forEach(img => img.src = img.getAttribute('src'));
    });

    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
