document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill .circle");
    skills.forEach((skill) => {
        const percentage = skill.getAttribute("data-percentage");
        const circle = skill.querySelector("circle:nth-child(2)");
        circle.style.setProperty("--percentage", percentage);
    });
});
