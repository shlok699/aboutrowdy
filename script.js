
  // Particles.js configuration
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffd700"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffd700",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  });

  // Typewriter effect
  const texts = ["Web Developer", "Game Developer", "Selling Making"];
  let count = 0, index = 0, currentText = '', letter = '';
  
  (function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.getElementById('typing').innerHTML = letter + '<span class="cursor"></span>';
    
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 120);
    }
  }());

  // Scroll animation for sections
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('active');
      }
    });
  });
const skillsSection = document.getElementById('skills');
  let skillAnimated = false;
  const skillBars = document.querySelectorAll('.skill-bar circle.progress');
  const percentages = [99, 95, 90, 85, 80, 70, 88, 75];
  
  function animateSkills() {
    skillBars.forEach((circle, i) => {
      const offset = 314 - (314 * percentages[i] / 100);
      circle.style.strokeDashoffset = offset;
    });
  }

  window.addEventListener('scroll', () => {
    const rect = skillsSection.getBoundingClientRect();
    if (!skillAnimated && rect.top < window.innerHeight && rect.bottom > 0) {
      skillAnimated = true;
      setTimeout(animateSkills, 300);
    }
  });

  // Contact form toast notification
  const sendBtn = document.getElementById('sendBtn');
  const toast = document.getElementById('toast');
  
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      toast.textContent = "Please fill all fields!";
      toast.style.background = "#ff4d4d";
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          toast.style.background = "#00ffcc";
          toast.textContent = "Message Sent Successfully!";
        }, 500);
      }, 2500);
      return;
    }
    
    // Show success message
    toast.textContent = "Message Sent Successfully!";
    toast.style.background = "#00ffcc";
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      document.querySelector('.contact-box').reset();
    }, 2500);
  });

  // Mobile navigation toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll down button
  document.getElementById('scrollDown').addEventListener('click', () => {
    window.scrollTo({
      top: document.getElementById('about').offsetTop - 80,
      behavior: 'smooth'
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initialize sections on page load
  window.addEventListener('load', () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('active');
      }
    });
    
    // Animate skills if they're already in view
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      skillAnimated = true;
      setTimeout(animateSkills, 300);
    }
  });
