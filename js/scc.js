const hamButton = document.getElementById('hamburger-menu');
const sidebarMenu = document.getElementById('sidebar-menu');
if (hamButton && sidebarMenu) {
    hamButton.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
    });
}
