import todayLogo from './media/images/todayLogo.png';

const sidebarLogoContainer = document.querySelector('#sidebar-logo-container');

export function renderUI() {
    const sidebarLogo = new Image();
    sidebarLogo.id = 'sidebar-logo'
    sidebarLogo.src = todayLogo;
    sidebarLogoContainer.appendChild(sidebarLogo);
}