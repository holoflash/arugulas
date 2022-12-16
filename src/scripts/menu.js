import '../styles/menuStyle.css';

const showMenu = () => {
    const middleContent = document.createElement('div');
    const menuItems = document.createElement('ol');
    menuItems.className = 'menuItems';

    const pizzaOven = (pizzaNumber, title, description) => {
        const pizza = document.createElement('li');
        pizza.className = `pizza${pizzaNumber}`;

        const pizzaTitle = document.createElement('div');
        pizzaTitle.className = 'pizzaTitle';
        pizzaTitle.textContent = `${title}`;

        const pizzaDescription = document.createElement('div');
        pizzaDescription.className = 'pizzaDescription';
        pizzaDescription.textContent = `${description}`;

        pizza.appendChild(pizzaTitle);
        pizza.appendChild(pizzaDescription);
        menuItems.appendChild(pizza);
    };

    pizzaOven(
        `1`,
        `Margherita Magic:`,
        `Mozzarella, tomatoes, and fresh basil on a traditional pizza crust.`
    );

    pizzaOven(
        `2`,
        `Pepperoni Party:`,
        `Mozzarella and spicy pepperoni on a crispy crust.`
    );

    pizzaOven(
        `3`,
        `Veggie Delight:`,
        `A medley of vegetables, including bell peppers, onions, and mushrooms, on a delicious crust.`
    );

    pizzaOven(
        `4`,
        `Tomato Goat-o:`,
        `Sweet cherry tomatoes, creamy goat cheese, and fresh basil on a crispy crust.`
    );

    pizzaOven(
        `5`,
        `Sizzlin' Sausage:`,
        `Spicy sausage, savory mushrooms, and melty mozzarella on a classic pizza crust.`
    );

    middleContent.appendChild(menuItems);
    content.appendChild(middleContent);
};

export default showMenu;
