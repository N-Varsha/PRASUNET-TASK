// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Change the background of the navbar when scrolled
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Highlight active navigation link on scroll
        let currentIndex = sections.length;

        while (--currentIndex && window.scrollY + 50 < sections[currentIndex].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[currentIndex].classList.add('active');
    });

    // Smooth scrolling when clicking a navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight, // Offset for fixed navbar
                behavior: 'smooth'
            });
        });
    });
});
// JavaScript to create hover effect on mouse movement
document.addEventListener('mousemove', function (e) {
    const hero = document.querySelector('#home');
    const about = document.querySelector('#about');
    const projects = document.querySelector('#projects');
    
    // Calculate mouse position as a percentage of the viewport width and height
    let xPos = (e.clientX / window.innerWidth) - 0.5;
    let yPos = (e.clientY / window.innerHeight) - 0.5;

    // Apply transformation to move the background or content based on mouse position
    hero.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
    about.style.transform = `translate(${xPos * 15}px, ${yPos * 15}px)`;
    projects.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
});
