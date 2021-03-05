// Videos Layout
const vidsContainer = document.querySelector('.vids-container');
const gridIcon = document.querySelector('.grid-icon');
const listIcon = document.querySelector('.list-icon');

const setIconStatus = (activeIcon, inactiveIcon) => {
    activeIcon.style.cursor = 'auto';
    inactiveIcon.style.cursor = 'pointer';

    for (let el of activeIcon.children)
        el.style.backgroundColor = 'dodgerblue';
    
    for (let el of inactiveIcon.children)
        el.style.backgroundColor = '#64676F';
}

const setLayoutToList = () => {
    vidsContainer.style.flexDirection = 'column';
    vidsContainer.style.alignItems = 'center';
    for (let vidContainer of vidsContainer.children)
        vidContainer.style.width = '60%';
    
    setIconStatus(listIcon, gridIcon);
}
    
const setLayoutToGrid = () => {
    vidsContainer.style.flexDirection = 'row';
    vidsContainer.style.alignItems = 'stretch';
    for (let vidContainer of vidsContainer.children)
        vidContainer.style.width = '40%';
    
    setIconStatus(gridIcon, listIcon);
}

listIcon.addEventListener('click', (e) => setLayoutToList());
gridIcon.addEventListener('click', (e) => setLayoutToGrid());

// Set default layout
setLayoutToGrid();
