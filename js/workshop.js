// MENU MOBILE
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

const toggleMenu = () => {
    menu.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Fechar menu ao clicar em links
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// NAVBAR STICKY
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
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
    distance: "40px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: false
});

sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: 300 });
sr.reveal(".hero-headlines-buttons", { delay: 500 });
sr.reveal(".hero-main-img", { origin: "right", delay: 600 });
sr.reveal(".img-sobre", { origin: "left" });
sr.reveal(".sobre-headlines", { origin: "right" });
sr.reveal(".pet-item", { interval: 200 }); // Cascata nos cards
sr.reveal(".rifa-card", { interval: 200 });
sr.reveal(".testimunhas-item", { interval: 200 });

// GSAP TEXT REVEAL (Opcional, se quiser manter o efeito de texto)
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char) => {
    const text = new SplitType(char, { type: "chars" });
    gsap.fromTo(
        text.chars,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, scrollTrigger: char }
    );
});
// INTERAÇÃO DO MODO AUTOMÁTICO
document.addEventListener("DOMContentLoaded", () => {
    const switchEl = document.getElementById("automaticModeSwitch");
    const sectionEl = document.getElementById("mindfulness");
    const messageEl = document.getElementById("mindfulness-message");
    const statusText = document.getElementById("switch-status-text");

    if(switchEl) {
        let isOff = false; // Começa ligado (Modo Automático ON)

        switchEl.addEventListener("click", () => {
            isOff = !isOff; // Inverte o estado

            if (isOff) {
                // ESTADO: MODO AUTOMÁTICO DESLIGADO (Calma)
                switchEl.classList.add("switched-off");
                sectionEl.classList.add("calm-mode");
                
                statusText.innerText = "MODO AUTOMÁTICO: DESLIGADO";
                statusText.style.color = "#fff"; // Verde
                
                // Mostra a mensagem com um pequeno delay
                setTimeout(() => {
                    messageEl.classList.add("visible");
                }, 300);

            } else {
                // ESTADO: MODO AUTOMÁTICO LIGADO (Padrão)
                switchEl.classList.remove("switched-off");
                sectionEl.classList.remove("calm-mode");
                
                statusText.innerText = "MODO AUTOMÁTICO: LIGADO";
                statusText.style.color = "#2C3E50"; // Preto/Azul
                
                messageEl.classList.remove("visible");
            }
        });
    }
});