import '../styles/homeStyle.css'
export const logo = document.createElement('span');
export const tabTwo = document.createElement('span');
export const tabThree = document.createElement('span');

const frontPage = () => {
    const howdy = document.createElement('p');
    howdy.className = 'howdy';
    
    const howdyText = document.createElement('tabOne');
    howdyText.className = 'howdyText';
    howdyText.innerText =
    `Welcome to ARUGULA'S!
    
    At our restaurant, you can enjoy a wide range of pizzas, including classic margherita, pepperoni, and veggie.
    We also have unique options like our organic cherry tomato and goat cheese pizza, and our spicy sausage and mushroom pie.
    
    We take great care in crafting every pizza, using only the best ingredients and traditional techniques.
    Our dough is made fresh daily, and our sauce is made from ripe, organic tomatoes.
    We top each pizza with a generous amount of high-quality cheese and meats, as well as an array of fresh veggies.
    
    So come on in and try one of our mouth-watering pizzas today! You won't be disappointed.
    
    🍕🍕🍕`;
    
    howdy.appendChild(howdyText);
    content.appendChild(howdy);
};

export default frontPage;
