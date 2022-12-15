import './styles/homeStyle.css';

const headerAndFooter = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.className = 'header';

    const subHeader = document.createElement('div');
    subHeader.className = 'subHeader';

    const logo = document.createElement('span');
    logo.className = 'main';
    logo.textContent = "ARUGALA'S";

    const tabTwo = document.createElement('span');
    tabTwo.className = 'tabs';
    tabTwo.textContent = '- MENU';

    const tabThree = document.createElement('span');
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

const frontPage = () => {
    const howdy = document.createElement('p');
    howdy.className = 'howdy';

    const howdyText = document.createElement('tabOne');
    howdyText.className = 'howdyText';
    howdyText.innerText =
        "Welcome to ARUGALA'S! \n\nAt our restaurant, you can enjoy a wide range of pizzas, including classic margherita, pepperoni, and veggie. We also have unique options like our organic cherry tomato and goat cheese pizza, and our spicy sausage and mushroom pie.\n\n We take great care in crafting every pizza, using only the best ingredients and traditional techniques. Our dough is made fresh daily, and our sauce is made from ripe, organic tomatoes. We top each pizza with a generous amount of high-quality cheese and meats, as well as an array of fresh veggies.\n\n  So come on in and try one of our mouth-watering pizzas today! You won't be disappointed.\n\n 🍕🍕🍕";

    howdy.appendChild(howdyText);
    content.appendChild(howdy);
};

export { frontPage, headerAndFooter };
