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

    logo.className = 'main active';
    logo.textContent = "ARUGULA'S";

    tabTwo.className = 'tabs';
    tabTwo.textContent = '- MENU';

    tabThree.className = 'tabs';
    tabThree.textContent = '- CONTACT';

    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerText = `Copyright © ${new Date().getFullYear()} holoflash`;

    const swipeInfo = document.createElement('swipeInfo');
    swipeInfo.className = 'swipeInfo';
    swipeInfo.innerText = `← SWIPE TO NAVIGATE →`;

    header.appendChild(logo);
    header.appendChild(subHeader);
    subHeader.appendChild(tabTwo);
    subHeader.appendChild(tabThree);

    content.appendChild(swipeInfo);
    content.appendChild(header);
    content.appendChild(footer);
})();

frontPage();
let currentPage = 'frontPage';

const cleanDOM = () => {
    const allContent = document.getElementById('content');
    allContent.removeChild(allContent.lastChild);
    document.querySelector('.swipeInfo').style.display = 'none';
};

logo.addEventListener('click', () => {
    currentPage = 'frontPage';
    cleanDOM();
    frontPage();
    logo.classList = 'main active';

    tabTwo.className = 'tabs';
    tabThree.className = 'tabs';
});

tabTwo.addEventListener('click', () => {
    currentPage = 'menuPage';
    cleanDOM();
    showMenu();
    tabTwo.classList = 'tabs active';

    logo.className = 'main';
    tabThree.className = 'tabs';
});

tabThree.addEventListener('click', () => {
    currentPage = 'contactPage';
    cleanDOM();
    showContact();
    tabThree.classList = 'tabs active';

    logo.className = 'main';
    tabTwo.className = 'tabs';
});

let touchstartX = 0;
let touchendX = 0;

const swipe = () => {
    if (touchendX < touchstartX) {
        // Swipe left
        if (currentPage === 'frontPage') {
            tabTwo.click();
        } else if (currentPage === 'menuPage') {
            tabThree.click();
        }
    } else if (touchendX > touchstartX) {
        // Swipe right
        if (currentPage === 'menuPage') {
            logo.click();
        } else if (currentPage === 'contactPage') {
            tabTwo.click();
        }
    }
};

document.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    swipe();
});
