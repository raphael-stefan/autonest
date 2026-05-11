// ====================================
// MOBILE MENU TOGGLE
// ====================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// ====================================
// MOBILE CAROUSEL - Services
// ====================================

function initMobileCarousel() {
  const serviceGrid = document.querySelector('.service-grid');
  
  if (!serviceGrid) return;
  
  // Only enable carousel on mobile
  if (window.innerWidth <= 768) {
    let isDown = false;
    let startX;
    let scrollLeft;

    serviceGrid.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - serviceGrid.offsetLeft;
      scrollLeft = serviceGrid.scrollLeft;
      serviceGrid.style.cursor = 'grabbing';
    });

    serviceGrid.addEventListener('mouseleave', () => {
      isDown = false;
      serviceGrid.style.cursor = 'grab';
    });

    serviceGrid.addEventListener('mouseup', () => {
      isDown = false;
      serviceGrid.style.cursor = 'grab';
    });

    serviceGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - serviceGrid.offsetLeft;
      const walk = (x - startX) * 2;
      serviceGrid.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile
    serviceGrid.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      scrollLeft = serviceGrid.scrollLeft;
    });

    serviceGrid.addEventListener('touchmove', (e) => {
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2;
      serviceGrid.scrollLeft = scrollLeft + walk;
    });
  }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', initMobileCarousel);
window.addEventListener('load', initMobileCarousel);

// Reinitialize on window resize
window.addEventListener('resize', () => {
  initMobileCarousel();
});

// ====================================
// SMOOTH SCROLL & NAVBAR ANIMATION
// ====================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;

  // Add shadow to navbar on scroll
  if (scrollTop > 10) {
    navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.7)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ====================================
// SCROLL REVEAL ANIMATION
// ====================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// ====================================
// COUNTER ANIMATION
// ====================================

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current) + (counter.textContent.includes('★') ? '★' : counter.textContent.includes('+') ? '+' : counter.textContent.includes('/7') ? '/7' : '');
      }
    };

    // Start animation when element comes into view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(updateCounter, 50);
        setTimeout(() => clearInterval(interval), 2500);
        observer.unobserve(counter);
      }
    });

    observer.observe(counter);
  });
}

// ====================================
// HOVER EFFECTS ON CARDS
// ====================================

document.querySelectorAll('.service-card-inner').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) rotateX(5deg)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) rotateX(0)';
  });
});

// ====================================
// SCROLL TO TOP BUTTON
// ====================================

const createScrollToTopButton = () => {
  const button = document.createElement('button');
  button.id = 'scrollToTop';
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
    color: #000;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(255, 193, 7, 0.4);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      button.style.display = 'flex';
    } else {
      button.style.display = 'none';
    }
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  button.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) translateY(-5px)';
  });

  button.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
};

createScrollToTopButton();

// ====================================
// PARALLAX EFFECT
// ====================================

const heroSection = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-bg-img');

window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    const scrolled = window.scrollY;
    heroImage.style.transform = `scale(${1 + scrolled / 10000}) translateZ(0)`;
  }
});

// ====================================
// PARTICLE EFFECT (Optional - adds visual interest)
// ====================================

function createParticles() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = Math.random() * 1 + 1;
      this.opacity = 0.5;
      this.color = '#ffc107';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity -= 0.01;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      
      if (particles[i].opacity <= 0) {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    }
  }

  // Create particles on mouse move (only on desktop)
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.95) {
        particles.push(new Particle(e.clientX, e.clientY));
        if (particles.length > 0) {
          animate();
        }
      }
    });
  }

  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// createParticles(); // Uncomment to enable particle effects

// ====================================
// GSAP-LIKE ANIMATIONS (without library)
// ====================================

function staggerAnimation(elements, delayBetween = 0.1) {
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.8s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * delayBetween * 1000);
  });
}

// Apply stagger animation to feature items when they come into view
const featureItems = document.querySelectorAll('.feature-item');
const featureObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    staggerAnimation(featureItems, 0.15);
    featureObserver.unobserve(entries[0].target);
  }
});

if (featureItems.length > 0) {
  featureObserver.observe(featureItems[0].parentElement);
}

// ====================================
// FORM VALIDATION (if you add forms)
// ====================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ====================================
// LAZY LOADING FOR IMAGES
// ====================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
  });
}

// ====================================
// ACCESSIBILITY IMPROVEMENTS
// ====================================

// Add keyboard navigation support
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      btn.click();
    }
  });
});

// ====================================
// PAGE LOAD ANIMATION
// ====================================

window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s ease-in-out';
    document.body.style.opacity = '1';
  }, 100);
});

// ====================================
// SCROLL SPY FOR ACTIVE NAV LINKS
// ====================================

function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = '#ffc107';
    } else {
      link.style.color = '#fff';
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ====================================
// TOOLTIPS
// ====================================

function createTooltip(element, text) {
  element.title = text;
  element.addEventListener('mouseenter', function() {
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
      position: absolute;
      background: #ffc107;
      color: #000;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      z-index: 1000;
      white-space: nowrap;
      font-weight: 600;
    `;
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';

    element.addEventListener('mouseleave', () => {
      tooltip.remove();
    });
  });
}

// ====================================
// LOAD MORE ANIMATION
// ====================================

function addLoadMoreEffect() {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
  });
}

// Call on page load
window.addEventListener('DOMContentLoaded', () => {
  addLoadMoreEffect();
});

// ====================================
// SMOOTH SCROLL ANCHOR LINKS
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ====================================
// THEME TOGGLE (Optional - for dark/light mode)
// ====================================

function addThemeToggle() {
  const isDarkMode = localStorage.getItem('darkMode') !== 'false';
  
  if (!isDarkMode) {
    document.body.classList.add('light-mode');
  }
}

// addThemeToggle(); // Uncomment to enable

// ====================================
// BOOKING BUTTON SCROLL - SIMPLE & EFFECTIVE
// ====================================

// IMMEDIATE: Attach click handlers to all booking buttons
function attachBookingHandlers() {
  const bookingButtons = document.querySelectorAll('a[href="#booking"]');
  
  console.log('Found booking buttons:', bookingButtons.length);
  
  bookingButtons.forEach((button, index) => {
    console.log('Attaching handler to button', index);
    
    button.addEventListener('click', function(e) {
      console.log('🎯 Button clicked!');
      e.preventDefault();
      e.stopPropagation();
      
      // Get the booking section
      const bookingSection = document.getElementById('booking');
      console.log('Booking section found:', !!bookingSection);
      
      if (bookingSection) {
        // Scroll to booking section
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('✅ Scrolled to booking section');
        
        // Reload Calendly widget
        setTimeout(() => {
          if (window.Calendly) {
            console.log('📅 Initializing Calendly');
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/raphael-autonestmobile',
              parentElement: document.querySelector('.calendly-inline-widget')
            });
          }
        }, 800);
      }
    }, false);
  });
}

// Run immediately on DOM loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachBookingHandlers);
} else {
  attachBookingHandlers();
}

// Also run on window load
window.addEventListener('load', attachBookingHandlers);

// IMPORTANT: Also attach to body for event delegation
document.body.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#booking') {
    console.log('🎯 Delegated click handler fired');
    e.preventDefault();
    e.stopPropagation();
    
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}, true);

console.log('🚗 AutoNest Mobile Oil Change - Website initialized!');
console.log('✨ All animations and interactions are ready!');
console.log('📅 Calendly integration active!');
