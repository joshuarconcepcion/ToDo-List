import todayLogo from './media/images/todayLogo.png';
import { format } from 'date-fns';

const sidebarLogoContainer = document.querySelector('.sidebar-logo-container');
const dateDisplay = document.getElementById('date-display');

export function renderUI() {
    const sidebarLogo = new Image();
    sidebarLogo.classList.add('sidebar-logo');
    sidebarLogo.src = todayLogo;
    sidebarLogoContainer.appendChild(sidebarLogo);

    const today = new Date();
    const formattedDate = format(today, 'PPPP');
    dateDisplay.textContent = formattedDate;
}

export function renderProjectList(projects, container) {
    projects.forEach(project => {
        const button = document.createElement('button');
        button.classList.add('project-btn');
        button.textContent = project.name;

        container.appendChild(button);
    })
}