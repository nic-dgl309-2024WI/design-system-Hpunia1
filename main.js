let currentPage = 1;
const projectsPerPage = 3;
const totalProjects = document.querySelectorAll('.project').length;
const totalPages = Math.ceil(totalProjects / projectsPerPage);

function toggleHomeMenuClick() {
    let hamIcon = document.getElementById('hamburger');
    let closeIcon = document.getElementById('close');
    let sideNav = document.getElementById('nav');
    hamIcon.classList.toggle("is-show");
    closeIcon.classList.toggle("is-show");
    sideNav.classList.toggle("is-show");
}

function showProjects(page) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        const start = (page - 1) * projectsPerPage;
        const end = page * projectsPerPage;
        if (index >= start && index < end) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function previousPage() {
    let currentElement = document.getElementById('container_02');
    let pastElement = document.getElementById(`container_01`);

    pastElement.style.display = "none";
    currentElement.style.display = "flex";

}

function nextPage () {
    let currentElement = document.getElementById('container_01');
    let pastElement = document.getElementById(`container_02 `);

    pastElement.style.display = "none";
    currentElement.style.display = "flex";

  }

// Initialize the first page
showProjects(currentPage);

// Testimonial Section

document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
    }

    document.querySelector('.left-arrow').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex); // Initially show the first testimonial
});


