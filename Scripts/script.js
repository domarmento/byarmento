document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function() {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!event.target.matches('.menu-icon') && !event.target.matches('.menu') && menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    });
});
