// datosm ios
const projects = [
    {
        title: "Automatización de Documentos con JavaScript",
        description: `En este proyecto se realizaron los primeros pasos 
        para adentrarnos al mundo de la programación con JavaScript, con ayuda de las herramientas de Google
        se logro un resultado muy óptimo.`,
        image: "Imagenes/autoliq.png",
        link: "https://docs.google.com/presentation/d/1PnWJIBBZQq23hyNaYAUk1H7HFkFmI8M73DXoJIkcLP4/edit?usp=sharing"
    },
    {
        title: "Página web de las ODS",
        description: `En este punto de la travesía se realiza una pagina web con la temática de las 17 ODS que 
        hay en el mundo, con el fin de promover estas metas a nivel mundial. Fue realizada con ayuda de HTML, CSS
        y la infaltable JavaScript.`,
        image: "Imagenes/web.png",
        link: "https://github.com/vallegrande/AS241S2_T11_ODS_06.git"
    },
    {
        title: "Emprendimiento sostenible",
        description: `El proyecto consiste en la creación de un emprendimiento sostenible con el motivo de promover
        el Objetivo numero 6 de las ODS que es cuidar el agua, con un prototipo de riego único y semiautomatico al 99%`,
        image: "Imagenes/riego.jpg",
        link: "https://docs.google.com/document/d/1ogWcAlFqhR3Vx9R0vM2cFcZod59S_lZMif6ibgougSk/edit?usp=sharing"
    }
];

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL"
];

// los proeyctos cargados de nuestra const projects las inicialimzamos junto al hrtml
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Ver más</a>
            </div>
        </div>
    `).join('');
}

// habilidades
function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <span>${skill}</span>
        </div>
    `).join('');
}

// oscuro y claro
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        themeToggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
    });
}

// scroll suave
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// simular formulario
function setupContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       
        alert('Mensaje enviado al correo del desarrollador');
        form.reset();
    });
}

// inizializamos todas las funciones cuando se carga el html
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    setupThemeToggle();
    setupSmoothScroll();
    setupContactForm();
});

// Animación del navbar al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});