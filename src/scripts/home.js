import '../styles/homeStyle.css';
export const logo = document.createElement('span');
export const tabTwo = document.createElement('span');
export const tabThree = document.createElement('span');

const frontPage = () => {
    const middleContent = document.createElement('div');
    middleContent.className = 'middleContent';
    const howdy = document.createElement('p');
    howdy.className = 'howdy';

    const howdyText = document.createElement('tabOne');
    howdyText.className = 'howdyText';
    howdyText.innerText = `Looking for a slice of the good life?

    Come on down to Arugula's! We've got all your classic pizzas like margherita, pepperoni, and veggie, but we've also got some unique options like our organic cherry tomato and goat cheese pie or our spicy sausage and mushroom slice.

    Trust us, we take our pizzas seriously. Our dough is made fresh daily and our sauce is made from ripe, organic tomatoes. Plus, we load each pie up with a generous amount of high-quality cheese and meats and fresh veggies. In other words, our pizzas are delicious.

    So don't miss out - come on in and try one today!
    `;

    howdy.appendChild(howdyText);
    middleContent.appendChild(howdy);
    content.appendChild(middleContent);
};

export default frontPage;
