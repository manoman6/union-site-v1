// JavaScript for the South Davis Metro Fire Union webpage

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});

let  slideIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
})


function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".event-slide")

    if (n >= slides.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = "none");

    slides[slideIndex].style.display = "block";
}

setInterval(() => {
    changeSlide(1);
}, 15000);

// function responseFunction() {
//     let x = document.getElementById("top-navbar");
//     if (x.classList.contains("responsive")) {
//         x.classList.remove("responsive");
//     } else {
//         x.classList.add("responsive");
//     }
// }

/*
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    var colorButton = document.getElementById('colorButton');

    // Add click event listener to the button
    colorButton.addEventListener('click', function () {
        // Change the background color of the main content area
        var mainContent = document.querySelector('.main-content');
        mainContent.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}); */