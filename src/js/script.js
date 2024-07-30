function openMenu() {
    let sideMenu = document.getElementById('side-menu');


    sideMenu.classList.remove('left-[-250px]');
    sideMenu.classList.add('left-0');
}

function closeMenu() {
    let sideMenu = document.getElementById('side-menu');


    sideMenu.classList.remove('left-0');
    sideMenu.classList.add('left-[-250px]');
}

function toggleMenuOptions() {
    let homeButton = document.getElementById('navbar-menu-dropdown');

    homeButton.classList.toggle('hidden')
    console.log(homeButton)
}