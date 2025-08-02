// Global Variables
let particleCanvas, particleCtx;
let particles = [];
let animationId;
let typingText = '';
let typingIndex = 0;
let typingSpeed = 100;
let isDarkMode = false;

// Typing animation texts
const typingTexts = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'Blockchain Developer',
    'Open Source Contributor',
    'Tech Blogger',
    'Web Designer',
    'UI/UX Designer',
    'Software Engineer',
    'Problem Solver',
    'Tech Innovator'  
];
let currentTextIndex = 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticleSystem();
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeNavigation();
    initializeThemeToggle();
    initializeSkillBars();
    initializeTiltCards();
    initializeContactForm();
    initializeLightbox();
    initializeScrollProgress();
});

// Particle System
function initializeParticleSystem() {
    particleCanvas = document.getElementById('particleCanvas');
    particleCtx = particleCanvas.getContext('2d');
    
    resizeCanvas();
    createParticles();
    animateParticles();
    
    window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

function createParticles() {
    particles = [];
    const numberOfParticles = Math.floor((particleCanvas.width * particleCanvas.height) / 15000);
    
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
}

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > particleCanvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > particleCanvas.height) particle.vy *= -1;
        
        // Draw particle
        particleCtx.beginPath();
        particleCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        particleCtx.fillStyle = isDarkMode 
            ? `rgba(59, 130, 246, ${particle.opacity})` 
            : `rgba(99, 102, 241, ${particle.opacity})`;
        particleCtx.fill();
    });
    
    // Draw connections
    particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particleCtx.beginPath();
                particleCtx.moveTo(particle.x, particle.y);
                particleCtx.lineTo(otherParticle.x, otherParticle.y);
                particleCtx.strokeStyle = isDarkMode
                    ? `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`
                    : `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
                particleCtx.lineWidth = 1;
                particleCtx.stroke();
            }
        });
    });
    
    animationId = requestAnimationFrame(animateParticles);
}

// Typing Effect
function initializeTypingEffect() {
    const typingElement = document.getElementById('typingText');
    
    function typeText() {
        if (typingIndex < typingTexts[currentTextIndex].length) {
            typingText += typingTexts[currentTextIndex].charAt(typingIndex);
            typingElement.textContent = typingText;
            typingIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, 2000);
        }
    }
    
    function deleteText() {
        if (typingText.length > 0) {
            typingText = typingText.slice(0, -1);
            typingElement.textContent = typingText;
            setTimeout(deleteText, 50);
        } else {
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            typingIndex = 0;
            setTimeout(typeText, 500);
        }
    }
    
    typeText();
}

// Scroll Animations using Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Trigger skill bar animations
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe individual elements
    document.querySelectorAll('.project-card, .contact__info-item').forEach(element => {
        observer.observe(element);
    });
}

// Navigation
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Add background to nav on scroll
        if (window.scrollY > 50) {
            nav.style.background = isDarkMode 
                ? 'rgba(31, 41, 55, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.background = isDarkMode 
                ? 'rgba(31, 41, 55, 0.8)' 
                : 'rgba(255, 255, 255, 0.8)';
        }
    });
}

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode = savedTheme === 'dark';
        updateTheme();
    }
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        updateTheme();
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    
    function updateTheme() {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
        
        // Update particles color
        createParticles();
    }
}

// Skill Bars Animation
function initializeSkillBars() {
    // This will be triggered by scroll animation
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach((bar, index) => {
        const percentage = bar.getAttribute('data-skill');
        const fill = bar.querySelector('.skill-bar__fill');
        
        setTimeout(() => {
            fill.style.width = percentage + '%';
        }, index * 200);
    });
}

// 3D Tilt Cards
function initializeTiltCards() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 4;
    const rotateY = (centerX - x) / 4;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.boxShadow = '';
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('.form-input');
    
    // Floating labels
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Form submission
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const button = e.target.querySelector('button[type="submit"]');
    const errors = validateForm(formData);
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('show');
    });
    
    if (Object.keys(errors).length > 0) {
        // Show errors
        Object.keys(errors).forEach(field => {
            const errorElement = document.getElementById(field + 'Error');
            if (errorElement) {
                errorElement.textContent = errors[field];
                errorElement.classList.add('show');
            }
        });
        return;
    }
    
    // Simulate form submission
    button.classList.add('loading');
    
    setTimeout(() => {
        button.classList.remove('loading');
        document.getElementById('formSuccess').classList.add('show');
        e.target.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            document.getElementById('formSuccess').classList.remove('show');
        }, 5000);
    }, 2000);
}

function validateForm(formData) {
    const errors = {};
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }
    
    if (!email || !isValidEmail(email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (!subject || subject.trim().length < 5) {
        errors.subject = 'Subject must be at least 5 characters long';
    }
    
    if (!message || message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long';
    }
    
    return errors;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBody = document.getElementById('lightboxBody');
    const lightboxTriggers = document.querySelectorAll('[data-lightbox]');
    
    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const project = trigger.getAttribute('data-lightbox');
            openLightbox(project);
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox__overlay').addEventListener('click', closeLightbox);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function openLightbox(project) {
        const content = getLightboxContent(project);
        lightboxBody.innerHTML = content;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function getLightboxContent(project) {
        const projectData = {
            ecommerce: {
                title: 'E-Commerce Platform',
                description: 'A comprehensive e-commerce solution built with modern technologies.',
                images: [
                    'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
                    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200'
                ],
                features: [
                    'User Authentication & Authorization',
                    'Product Catalog Management',
                    'Shopping Cart & Checkout',
                    'Payment Gateway Integration',
                    'Order Management System',
                    'Admin Dashboard',
                    'Responsive Design',
                    'Real-time Inventory Updates'
                ],
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT', 'Redux']
            },
            taskapp: {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time features.',
                images: [
                    'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
                    'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200'
                ],
                features: [
                    'Real-time Collaboration',
                    'Drag & Drop Interface',
                    'Time Tracking',
                    'Team Management',
                    'Project Templates',
                    'File Attachments',
                    'Notifications',
                    'Progress Analytics'
                ],
                technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Vuex', 'Chart.js']
            },
            weather: {
                title: 'Weather Dashboard',
                description: 'Beautiful weather visualization with interactive charts and forecasts.',
                images: [
                    'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200',
                    'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1200'
                ],
                features: [
                    'Interactive Weather Charts',
                    'Location-based Forecasts',
                    '7-day Weather Forecast',
                    'Weather Alerts & Notifications',
                    'Historical Weather Data',
                    'Multiple Location Support',
                    'Responsive Design',
                    'Dark/Light Theme'
                ],
                technologies: ['Vanilla JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3', 'HTML5']
            }
        };
        
        const data = projectData[project];
        if (!data) return '<p>Project not found</p>';
        
        return `
            <div class="lightbox-project">
                <h2 class="lightbox-project__title">${data.title}</h2>
                <div class="lightbox-project__images">
                    ${data.images.map(img => `<img src="${img}" alt="${data.title}" class="lightbox-project__image">`).join('')}
                </div>
                <p class="lightbox-project__description">${data.description}</p>
                
                <div class="lightbox-project__section">
                    <h3>Key Features</h3>
                    <ul class="lightbox-project__features">
                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="lightbox-project__section">
                    <h3>Technologies Used</h3>
                    <div class="lightbox-project__technologies">
                        ${data.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="lightbox-project__actions">
                    <a href="#" class="btn btn--primary">View Live Demo</a>
                    <a href="#" class="btn btn--secondary">View Source Code</a>
                </div>
            </div>
            
            <style>
                .lightbox-project {
                    max-width: 800px;
                    width: 100%;
                }
                
                .lightbox-project__title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: var(--text-primary);
                }
                
                .lightbox-project__images {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .lightbox-project__image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 0.75rem;
                }
                
                .lightbox-project__description {
                    font-size: 1.125rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                }
                
                .lightbox-project__section {
                    margin-bottom: 2rem;
                }
                
                .lightbox-project__section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                }
                
                .lightbox-project__features {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 0.5rem;
                    list-style: none;
                }
                
                .lightbox-project__features li {
                    position: relative;
                    padding-left: 1.5rem;
                    color: var(--text-secondary);
                }
                
                .lightbox-project__features li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: var(--color-success);
                    font-weight: bold;
                }
                
                .lightbox-project__technologies {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .lightbox-project__actions {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;
                }
                
                @media (max-width: 768px) {
                    .lightbox-project__actions {
                        flex-direction: column;
                    }
                }
            </style>
        `;
    }
}

// Scroll Progress Indicator
function initializeScrollProgress() {
    // Create scroll progress element
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero__content');
    
    if (hero) {
        // Parallax background
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Parallax content (slower)
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

// Smooth reveal animations for skill bubbles
function initializeSkillBubbles() {
    const bubbles = document.querySelectorAll('.skill-bubble');
    
    bubbles.forEach((bubble, index) => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotateY(180deg)';
            this.style.zIndex = '10';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.zIndex = '1';
        });
    });
}

// Initialize skill bubbles when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSkillBubbles);

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
    // Handle scroll-dependent animations here if needed
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);