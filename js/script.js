// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

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

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards, project cards, and timeline items
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .education-card, .hobby-item').forEach(el => {
    observer.observe(el);
});

// ==========================================
// ACTIVE NAV LINK HIGHLIGHT
// ==========================================

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scrollToTop';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#2980b9';
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#3498db';
        button.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ==========================================
// FADE IN ANIMATION STYLES
// ==========================================

const style = document.createElement('style');
style.textContent = `
    .skill-category,
    .project-card,
    .timeline-item,
    .education-card,
    .hobby-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .skill-category.fade-in,
    .project-card.fade-in,
    .timeline-item.fade-in,
    .education-card.fade-in,
    .hobby-item.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-menu a.active {
        color: #3498db;
        border-bottom-color: #3498db;
    }
`;
document.head.appendChild(style);

// ==========================================
// FORM HANDLING (For future contact form)
// ==========================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Form submission logic here
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
}

// ==========================================
// COPY EMAIL TO CLIPBOARD
// ==========================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const email = this.getAttribute('href').replace('mailto:', '');
        // Email link will work normally; just add visual feedback
        this.style.color = '#27ae60';
        setTimeout(() => {
            this.style.color = '#3498db';
        }, 500);
    });
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy load images (when images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c👋 Welcome to Manikandan Kunjaiyan\'s Portfolio!', 'font-size: 16px; font-weight: bold; color: #3498db;');
console.log('%cSoftware Engineer (SDET) | Test Automation Specialist', 'font-size: 14px; color: #666;');
console.log('%cLet\'s connect! 📧 manikandan.kunjaiyan@wissen.com', 'font-size: 12px; color: #999;');
