// script.js

// === Front Page Enhancements ===
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".start-btn");
    
    if (startButton) {
        startButton.addEventListener("mouseover", function () {
            startButton.style.transform = "scale(1.1)";
        });
        startButton.addEventListener("mouseout", function () {
            startButton.style.transform = "scale(1)";
        });
    }
});

// === Lessons Page Enhancements ===
function showLesson(lessonId) {
    let lessons = document.querySelectorAll(".lesson-content");
    let links = document.querySelectorAll(".sidebar ul li a");

    lessons.forEach(lesson => lesson.classList.remove("active"));
    document.getElementById(lessonId).classList.add("active");

    links.forEach(link => link.classList.remove("selected"));
    event.target.classList.add("selected");

    localStorage.setItem("currentLesson", lessonId);
}

window.onload = function () {
    let savedLesson = localStorage.getItem("currentLesson");
    if (savedLesson) {
        showLesson(savedLesson);
    } else {
        showLesson("intro");
    }
};
