// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Consultation Modal
const modal = document.getElementById('consultation-modal');
const closeModal = document.querySelector('.close-modal');

function startConsultation() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeConsultationModal() {
    modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(0.8)';
    modal.querySelector('.modal-content').style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

closeModal.addEventListener('click', closeConsultationModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeConsultationModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeConsultationModal();
    }
});

// Initialize modal styles
modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(0.8)';
modal.querySelector('.modal-content').style.opacity = '0';
modal.querySelector('.modal-content').style.transition = 'all 0.3s ease';

// Consultation Form Handling
const consultationForm = document.querySelector('.consultation-form');

consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(consultationForm);
    const hairType = formData.get('hair-type');
    const hairConcern = formData.get('hair-concern');
    const washFrequency = formData.get('wash-frequency');
    
    // Validate form
    if (!hairType) {
        alert('Please select your hair type');
        return;
    }
    
    if (!hairConcern) {
        alert('Please select your main hair concern');
        return;
    }
    
    if (!washFrequency) {
        alert('Please select how often you wash your hair');
        return;
    }
    
    // Simulate consultation processing
    const submitBtn = consultationForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Creating your formula...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you! Based on your ${hairType} hair with ${hairConcern} concerns, we're creating your custom formula. Check your email for next steps!`);
        closeConsultationModal();
        
        // Reset form
        consultationForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    // Simulate newsletter signup
    const submitBtn = newsletterForm.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for subscribing! You\'ll receive our latest updates and exclusive offers.');
        newsletterForm.querySelector('input[type="email"]').value = '';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.step, .product-card, .testimonial');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Product Card Hover Effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const bottle = card.querySelector('.product-bottle-card');
        if (bottle) {
            bottle.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const bottle = card.querySelector('.product-bottle-card');
        if (bottle) {
            bottle.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Cart functionality (placeholder)
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
    cartCountElement.style.transform = 'scale(1.3)';
    
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

// Testimonial rotation
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        if (index === currentTestimonial) {
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateY(0) scale(1.02)';
        } else {
            testimonial.style.opacity = '0.7';
            testimonial.style.transform = 'translateY(10px) scale(1)';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Start testimonial rotation after page load
setTimeout(() => {
    setInterval(rotateTestimonials, 4000);
}, 2000);

// Product showcase animation
const productBottles = document.querySelectorAll('.product-bottle');

function animateProductBottles() {
    productBottles.forEach((bottle, index) => {
        setTimeout(() => {
            bottle.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                bottle.style.transform = 'translateY(0)';
            }, 300);
        }, index * 200);
    });
}

// Start product animation
setTimeout(animateProductBottles, 1000);
setInterval(animateProductBottles, 8000);

// Eco graphic animation
const ecoGraphic = document.querySelector('.eco-graphic');

if (ecoGraphic) {
    ecoGraphic.addEventListener('mouseenter', () => {
        ecoGraphic.style.transform = 'scale(1.1)';
        ecoGraphic.style.boxShadow = '0 25px 50px rgba(39, 174, 96, 0.4)';
    });
    
    ecoGraphic.addEventListener('mouseleave', () => {
        ecoGraphic.style.transform = 'scale(1)';
        ecoGraphic.style.boxShadow = '0 20px 40px rgba(39, 174, 96, 0.3)';
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic stats counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number, .number');
            const text = number.textContent;
            const value = parseInt(text.replace(/\D/g, ''));
            
            if (value) {
                number.textContent = '0';
                animateCounter(number, value);
                statsObserver.unobserve(entry.target);
            }
        }
    });
});

document.querySelectorAll('.stat, .stat-large').forEach(stat => {
    statsObserver.observe(stat);
});

// Error handling for missing elements
const requiredElements = ['#hamburger', '#nav-menu', '#consultation-modal'];

requiredElements.forEach(selector => {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element ${selector} not found`);
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations here
}, 16);

window.addEventListener('scroll', debouncedScroll);