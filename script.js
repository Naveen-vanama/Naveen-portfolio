/* ===============================
   Mobile Menu Toggle
   =============================== */
const menuBtn = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

/* ===============================
   Active Link Highlighting on Scroll
   =============================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Sticky Header Logic if needed beyond CSS */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close menu on scroll */
    menuBtn.classList.remove('bx-x');
    navBar.classList.remove('active');
};

/* ===============================
   Typed.js Initialization
   =============================== */
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Python Developer', 'Full Stack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/* ===============================
   Smooth Fade-in Animation (Optional)
   =============================== */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // observer.observe(section); // If you add .fade-in styles later
    });
});