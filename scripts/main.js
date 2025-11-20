/**
 * Kenza Consulting - Website Main Script
 * Professional interactions and animations
 */

// ============================================
// NAVIGATION & HAMBURGER MENU
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        // Handle both click and touch for better mobile support
        const toggleMenu = () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        };

        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('touchend', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // ============================================
    // FORM SUBMISSION
    // ============================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                company: contactForm.company.value,
                message: contactForm.message.value
            };

            if (!formData.email || !formData.name || !formData.message) {
                showNotification('Veuillez remplir les champs requis', 'error');
                return;
            }

            if (!isValidEmail(formData.email)) {
                showNotification('Email invalide', 'error');
                return;
            }

            console.log('Form submitted:', formData);
            showNotification('Message envoyé ! Je vous recontacterai très bientôt.', 'success');

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Message envoyé !';
            submitButton.disabled = true;

            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // NAVBAR BACKGROUND ON SCROLL
    // ============================================

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // ============================================
    // ACTIVE NAV LINK
    // ============================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // INTERSECTION OBSERVER - ANIMATIONS
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-card, .value-card, .stat-item, .institution-card, .topic, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease forwards';
        observer.observe(el);
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#7a9b6b' : '#e74c3c'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    notification.textContent = message;

    const style = document.createElement('style');
    if (!document.querySelector('style[data-notify]')) {
        style.setAttribute('data-notify', 'true');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(400px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ============================================
// CAROUSELS (Testimonials & Portfolio)
// ============================================

function initCarousel(carouselSelector, cardSelector, containerSelector) {
    const carousel = document.querySelector(carouselSelector);
    const container = document.querySelector(containerSelector);
    const cards = document.querySelectorAll(cardSelector);

    if (!carousel || !container || cards.length === 0) {
        console.log('Carousel init failed:', { carousel, container, cards: cards.length });
        return;
    }

    console.log(`Carousel initialized: ${carouselSelector} with ${cards.length} cards`);
    cards.forEach((card, i) => {
        console.log(`  Card ${i}: ${card.textContent.substring(0, 30)}`);
    });

    let currentSlide = 0;
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');

    console.log(`Buttons found: prevBtn=${!!prevBtn}, nextBtn=${!!nextBtn}`);

    // Find indicators - they are outside the container in a sibling element
    const parentContainer = container.parentElement;
    const indicatorsDiv = parentContainer.querySelector('.carousel-indicators');
    const indicators = indicatorsDiv ? indicatorsDiv.querySelectorAll('.indicator') : [];

    console.log(`Indicators found: ${indicators.length}`);

    function showSlide(n) {
        if (n < 0) n = 0;
        if (n >= cards.length) n = cards.length - 1;

        currentSlide = n;

        // Update active classes
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index !== n) {
                // Reset inline styles for non-active cards (set by Intersection Observer)
                card.style.opacity = '';
                card.style.transform = '';
            }
        });
        indicators.forEach(ind => ind.classList.remove('active'));

        // Apply active state and remove inline styles
        cards[n].classList.add('active');
        cards[n].style.opacity = '';
        cards[n].style.transform = '';
        if (indicators[n]) indicators[n].classList.add('active');

        // Use transform to translate the carousel
        // Calculate position based on card width and gap
        const cardWidth = cards[0].offsetWidth;
        const styles = window.getComputedStyle(carousel);
        const gapPixels = parseInt(styles.gap) || 32; // Default to 32px if gap can't be computed
        const offset = n * (cardWidth + gapPixels);

        carousel.style.transform = `translateX(-${offset}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        console.log(`Next slide: ${currentSlide} of ${cards.length}`);
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        console.log(`Prev slide: ${currentSlide} of ${cards.length}`);
        showSlide(currentSlide);
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(index);
        });
    });

    // Initialize with a delay for proper layout calculation
    window.requestAnimationFrame(() => {
        setTimeout(() => showSlide(0), 0);
    });
}

let carouselsInitialized = false;

function initializeCarousels() {
    if (carouselsInitialized) return;
    carouselsInitialized = true;

    initCarousel('.testimonials-carousel', '.testimonial-card', '.testimonials-carousel-container');
    initCarousel('.portfolio-carousel', '.portfolio-card', '.portfolio-carousel-container');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousels after a small delay for layout calculation
    setTimeout(initializeCarousels, 50);
});

// If page is already loaded (for edge cases), initialize immediately
if (document.readyState === 'complete') {
    initializeCarousels();
}
