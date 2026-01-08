// JavaScript logic for navigation and dynamic functionality

// Highlight active navigation button
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
    button.addEventListener('click', function () {
        navButtons.forEach(btn => {
            btn.classList.remove('bg-orange-500');
            btn.classList.add('bg-blue-500');
        });
        this.classList.remove('bg-blue-500');
        this.classList.add('bg-orange-500');
    });
});

// Additional functionality can be added here