// MENU MOBILE
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".menu a");

const toggleMenu = () => {
    menu.classList.toggle("active");
};

if(menuBtn) menuBtn.addEventListener("click", toggleMenu);
if(closeBtn) closeBtn.addEventListener("click", toggleMenu);

// Fechar menu ao clicar em links
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// NAVBAR STICKY
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if(navbar) navbar.classList.toggle("sticky", window.scrollY > 0);
});

// SMOOTH SCROLL (Lenis)
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// SCROLL REVEAL ANIMATIONS
const sr = ScrollReveal({
    origin: "bottom",
    distance: "30px",
    duration: 800,
    delay: 150,
    easing: "ease-in-out",
    reset: false
});

sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: 200 });
sr.reveal(".hero-headlines-buttons", { delay: 300 });
sr.reveal(".hero-main-img", { origin: "right", delay: 400 });
sr.reveal(".img-sobre", { origin: "left" });
sr.reveal(".sobre-headlines", { origin: "right" });
sr.reveal(".flip-card", { interval: 150 }); 
sr.reveal(".rifa-card", { interval: 150 });
sr.reveal(".testimunhas-item", { interval: 150 });

// GSAP TEXT REVEAL
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char) => {
    const text = new SplitType(char, { type: "chars" });
    gsap.fromTo(
        text.chars,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, scrollTrigger: char }
    );
});

// --- NOVO: HIGHLIGHT MENU ATIVO (SCROLLSPY) ---
// Destaca o link do menu correspondente à seção visível
const sections = document.querySelectorAll("section[id]"); // Seleciona seções com ID

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150; // Ajuste para o header fixo
        const sectionId = current.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href*=${sectionId}]`);

        if(menuLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                menuLink.classList.add("active-link");
            } else {
                menuLink.classList.remove("active-link");
            }
        }
    });
});

// --- NOVO: FLIP CARD NO MOBILE (CLIQUE) ---
// Em celulares, clicar vira o card (melhor que hover)
const cards = document.querySelectorAll('.flip-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove a classe de outros cards (para fechar um ao abrir outro)
        cards.forEach(c => {
            if(c !== card) c.querySelector('.flip-card-inner').classList.remove('flipped-mobile');
        });
        // Alterna no card atual
        card.querySelector('.flip-card-inner').classList.toggle('flipped-mobile');
    });
});

// INTERAÇÃO DO MODO AUTOMÁTICO (Mindfulness)
document.addEventListener("DOMContentLoaded", () => {
    const switchEl = document.getElementById("automaticModeSwitch");
    const sectionEl = document.getElementById("mindfulness");
    const messageEl = document.getElementById("mindfulness-message");
    const statusText = document.getElementById("switch-status-text");

    if(switchEl) {
        let isOff = false; 

        switchEl.addEventListener("click", () => {
            isOff = !isOff; 

            if (isOff) {
                switchEl.classList.add("switched-off");
                sectionEl.classList.add("calm-mode");
                statusText.innerText = "MODO AUTOMÁTICO: DESLIGADO";
                statusText.style.color = "#fff"; 
                setTimeout(() => {
                    messageEl.classList.add("visible");
                }, 300);
            } else {
                switchEl.classList.remove("switched-off");
                sectionEl.classList.remove("calm-mode");
                statusText.innerText = "MODO AUTOMÁTICO: LIGADO";
                statusText.style.color = "#2C3E50"; 
                messageEl.classList.remove("visible");
            }
        });
    }
});