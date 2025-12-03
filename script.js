/**
 * Hlavní JavaScript soubor pro portfolio Jakuba Růžičky
 * Obsahuje animace, interaktivitu a responzivní chování
 */

// Registrace GSAP pluginů
gsap.registerPlugin(ScrollTrigger);


/**
 * MOBILNÍ MENU
 * Ovládání zobrazení/skrytí mobilního menu
 */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const body = document.body;

// Přepínání mobilního menu při kliknutí na hamburger ikonu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Zavření menu při kliknutí na odkaz
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    });
});


/**
 * ANIMACE HERO SEKCE
 * Postupné zobrazování elementů hero sekce s časovým odstupem
 */
// Animace hlavního nadpisu
gsap.to('.hero h1', {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.3
});

// Animace čísla 2025
gsap.to('.hero-number', {
    opacity: 0.1,
    x: 4,
    duration: 10,
    delay: 0.4
});

// Animace popisného textu
gsap.to('.hero p', {
    opacity: 1,
    y: 0,
    duration: 1.8,
    delay: 0.5
});

// Animace tlačítek
gsap.to('.cta-buttons', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 2
});


/**
 * ANIMACE SEKCE O MNĚ
 * Postupné zobrazování položek při scrollování
 */
gsap.utils.toArray('.about-item').forEach((item, i) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1
    });
});


/**
 * ANIMACE SEKCE SLUŽEB
 * Postupné zobrazování služeb při scrollování
 */
gsap.utils.toArray('.service-item').forEach((item, i) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: i * 0.1
    });
});


/**
 * ANIMACE SEKCE PORTFOLIO
 * Postupné zobrazování portfolio položek při scrollování
 */
gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: i * 0.1
    });
});


/**
 * ANIMACE KONTAKTNÍHO EMAILU
 * Zobrazování emailové adresy při scrollování
 */
gsap.to('.contact-email', {
    scrollTrigger: {
        trigger: '.contact-email',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 0.8
});


/**
 * HLADKÝ SCROLL PRO ANKOROVÉ ODKAZY
 * Zajišťuje plynulé přechody mezi sekcemi při kliknutí na navigační odkazy
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});