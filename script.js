
    document.addEventListener('DOMContentLoaded', () => {
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
    
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log('clicked');
        hamburger.classList.toggle('open');
      });
      document.addEventListener('click', (event) => {
        const isClickInside = header.contains(event.target);
    
        if (!isClickInside) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('open');
        }
      });
    
    });
    