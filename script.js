document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in effect on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // PNG image resizing (excluding .project-card images)
    document.querySelectorAll("img[src$='.png']").forEach(img => {
        if (!img.closest(".project-card")) { 
            img.style.width = "150px";  // Thumbnail size
            img.style.height = "auto";
        }
    });

    // Open links in a new tab for navigation buttons (if they are <a> elements)
    document.querySelectorAll(".nav-btn").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            if (this.tagName === "A") {
                window.open(this.href, "_blank"); // Force open in a new tab
            }
        });
    });
});
