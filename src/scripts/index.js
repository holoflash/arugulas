import frontPage from './home.js';
import { logo, tabTwo, tabThree } from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import '../styles/globalStyle.css';

(function headerAndFooter() {
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
})();

frontPage();

const cleanDOM = () => {
    const allContent = document.getElementById('content');
    allContent.removeChild(allContent.lastChild);
};

logo.addEventListener('click', () => {
    cleanDOM();
    frontPage();
});

tabTwo.addEventListener('click', () => {
    cleanDOM();
    showMenu();
});

tabThree.addEventListener('click', () => {
    cleanDOM();
    showContact();
});
