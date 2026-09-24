/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((item) => {

        item.classList.remove("active");

        const target =
            item.getAttribute("href");

        if (target === `#${currentSection}`) {

            item.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .info-card, .skill-card, .project-card, .timeline-item, .contact-box"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================================
   SMOOTH BUTTON FEEDBACK
========================================= */

const buttons =
    document.querySelectorAll(".btn, .contact-button");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-2px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "";

    });

});


/* =========================================
   PARALLAX PROFILE
========================================= */

const profileCard =
    document.querySelector(".profile-card");

window.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 4;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 4;

    profileCard.style.transform =
        `perspective(1000px)
         rotateY(${x}deg)
         rotateX(${-y}deg)`;

});


window.addEventListener("mouseleave", () => {

    profileCard.style.transform = "";

});