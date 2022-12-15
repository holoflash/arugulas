import frontPage from './home.js';
import { logo, tabTwo, tabThree } from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import '../styles/globalStyle.css';

const headerAndFooter = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.className = 'header';

    const subHeader = document.createElement('div');
    subHeader.className = 'subHeader';

    logo.className = 'main';
    logo.textContent = "ARUGULA'S";

    tabTwo.className = 'tabs';
    tabTwo.textContent = '- MENU';

    tabThree.className = 'tabs';
    tabThree.textContent = '- CONTACT';

    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerText = `Copyright © ${new Date().getFullYear()} holoflash`;

    header.appendChild(logo);
    header.appendChild(subHeader);
    subHeader.appendChild(tabTwo);
    subHeader.appendChild(tabThree);

    content.appendChild(header);
    content.appendChild(footer);
};

headerAndFooter();
frontPage();

const cleanDOM = () => {
    const allContent = document.getElementById('content');
    while (allContent.firstChild) {
        allContent.removeChild(allContent.lastChild);
    }
};

logo.addEventListener('click', () => {
    cleanDOM();
    document.title = 'ARGULA\'S | WELCOME';
    headerAndFooter();
    frontPage();
});

tabTwo.addEventListener('click', () => {
    cleanDOM();
    document.title = 'ARGULA\'S | MENU';
    headerAndFooter();
    showMenu();
});

tabThree.addEventListener('click', () => {
    cleanDOM();
    document.title = 'ARGULA\'S | CONTACT';
    headerAndFooter();
    showContact();
});
