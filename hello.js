// JavaScript for the South Davis Metro Fire Union webpage

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});

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