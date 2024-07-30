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
}

function renderNavbarTemplate() {
    const template = document.createElement('template')
    const navbar = document.getElementById('navbar')

    template.innerHTML = `
        <nav class="w-full content-center">
            <div class="relative top-0 w-full h-32">
                <div class="absolute w-full flex flex-row p-8 justify-between items-center">
                <div id="side-menu" class="block sm:hidden fixed top-0 left-[-250px] w-[240px] h-screen z-50 bg-gray-700 p-5
                flex flex-col space-y-5 text-white duration-300">
                    <a href="javascript:void(0)" class="text-right text-4xl" onclick="closeMenu()">&times;</a>
                    <a class="hover:text-amber-500" href="#">Home</a>
                </div>
            
                <div id="logo">
                    <a href="./index.html">
                    <div class="w-16 h-16 rounded-full bg-blue-900">&nbsp;</div>
                    </a>
                </div>
                <div class="flex flex-row gap-4 items-center w-fit">
                    <div class="text-blue-900 font-bold" 
                        onmouseover="toggleMenuOptions()" onmouseout="toggleMenuOptions()">
                    <div class="relative w-full p-2">
                        <h3 class="hover:bg-blue-900 hover:text-white cursor-pointer rounded-md p-2">Menu</h3>
                        <div id="navbar-menu-dropdown" class="absolute hidden flex flex-col w-fit mt-2 p-2 bg-blue-900 text-white rounded-md gap-2">
                            <a href="./cocktails.html">Cocktails</a>
                            <a href="./eats.html">Eats</a>
                            <a href="./spirits.html">Spirits</a>
                            <a href="./beverages.html">Beverages</a>
                        </div>
                    </div>

                    </div>
            
                    <!-- This is used to open the menu -->
                    <span class="cursor-pointer text-4xl block sm:hidden" onclick="openMenu()">&#9776;</span>
                </div>
                </div>
            </div>
        </nav>
    `

    navbar.appendChild(template.content);
}