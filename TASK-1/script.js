// Selecting elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - navbar.offsetHeight, // Adjust for fixed navbar height
            behavior: 'smooth'
        });

        // Close the mobile menu after clicking
        navList.classList.remove('active');
    });
});

// Hover Effects for nav links
navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#ff6347'; // Change background color on hover
        this.style.color = 'white';
    });
    link.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'transparent'; // Revert back after hover
        this.style.color = '';
    });
});

// Mobile menu toggle (for smaller screens)
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});
