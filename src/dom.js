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
        renderSingleProject(project, container);
    })
}

export function renderSingleProject(project, container) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-project-btn');
    deleteBtn.textContent = 'Delete';

    container.appendChild(projectContainer);
    projectContainer.appendChild(projectBtn);
    projectContainer.appendChild(deleteBtn);
}