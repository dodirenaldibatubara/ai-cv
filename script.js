// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Hover effect for links
const links = document.querySelectorAll('a, .bento-item, .project-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            mixBlendMode: "difference"
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#00E5FF",
            mixBlendMode: "difference"
        });
    });
});

// Hero Reveal Animation
const tl = gsap.timeline();
tl.from(".reveal-text", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
})
.from(".hero-sub", {
    opacity: 0,
    y: 20,
    duration: 0.8
}, "-=0.5")
.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 0.8
}, "-=1");

// Parallax Background Text
gsap.to(".hero-parallax-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    xPercent: -50,
    ease: "none"
});

// Bento Grid Animation
gsap.from(".bento-item", {
    scrollTrigger: {
        trigger: ".stats",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
});

// Project Items Reveal
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Visual Placeholder Parallax
projectItems.forEach((item) => {
    const visual = item.querySelector('.visual-placeholder');
    gsap.to(visual, {
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: -50,
        ease: "none"
    });
});

// Footer Animation
gsap.from(".footer-title", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

// Magnet effect for nav items (Simple version)
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        const { left, top, width, height } = item.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        
        gsap.to(item, {
            x: deltaX * 0.3,
            y: deltaY * 0.3,
            duration: 0.3
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.3
        });
    });
});
