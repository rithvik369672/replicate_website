// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
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
}

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

// Smooth scrolling for anchor links
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .info-card, .feature');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// CTA Button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        // Simulate action
        console.log('Get started clicked!');
        alert('Welcome to Hims! This would normally start the consultation process.');
    });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const placeholder = card.querySelector('.product-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1.1)';
            placeholder.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const placeholder = card.querySelector('.product-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1)';
        }
    });
    
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        console.log(`${productName} product clicked`);
        alert(`Learn more about ${productName} treatments - this would navigate to the product page.`);
    });
});

// Loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Feature icons animation on scroll
const features = document.querySelectorAll('.feature');
features.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.2}s`;
});

// Social links interaction
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').className.split('-')[1];
        console.log(`${platform} social link clicked`);
        alert(`This would open the Hims ${platform} page.`);
    });
});

// Newsletter/Contact form handling (if added)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your interest! We\'ll be in touch soon.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
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
    // Additional scroll-based animations can go here
}, 16);

window.addEventListener('scroll', debouncedScroll);

// Error handling for missing elements
const requiredElements = ['.navbar', '.hero', '.cta-button'];

requiredElements.forEach(selector => {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element ${selector} not found`);
    }
});

// Accessibility improvements
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #2c2c2c';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Add animation classes on page load
setTimeout(() => {
    document.querySelectorAll('.feature').forEach((feature, index) => {
        setTimeout(() => {
            feature.classList.add('animate');
        }, index * 100);
    });
}, 500);

console.log('Hims website loaded successfully!');