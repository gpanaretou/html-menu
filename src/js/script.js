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

                    <div class="flex flex-row gap-2 items-center content-center w-fit">
                        <div class="text-blue-900 font-bold p-2" 
                            onmouseover="toggleMenuOptions()" onmouseout="toggleMenuOptions()" onclick="toggleMenuOptions()">
                            <div class="relative w-full">
                                <h3 class="focus:bg-blue-900 focus:text-white hover:bg-blue-900 hover:text-white cursor-pointer rounded-md p-2">Menu</h3>
                                <div id="navbar-menu-dropdown" class="absolute hidden flex flex-col w-fit mt-2 p-2 bg-blue-900 text-white rounded-md gap-2">
                                    <a href="./cocktails.html">Cocktails</a>
                                    <a href="./eats.html">Eats</a>
                                    <a href="./spirits.html">Spirits</a>
                                    <a href="./beverages.html">Beverages</a>
                                </div>
                            </div>
                        </div>
                
                        <!-- This is used to open the menu -->
                        <span class="cursor-pointer w-fit text-2xl sm:hidden" onclick="openMenu()">
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z" fill="#1e3a8a" style="--darkreader-inline-fill: #182e6e;" data-darkreader-inline-fill=""></path> </g></svg>                    
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    `

    navbar.appendChild(template.content);
}