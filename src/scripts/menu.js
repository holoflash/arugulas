import '../styles/menuStyle.css';

const showMenu = () => {
    const menuItems = document.createElement('ul');
    menuItems.className = 'menuItems';
    
    let x = 1;
    for (x = 1; x < 9; x++) {
        const aPizza = document.createElement('li');
        aPizza.className = `aPizza ${x}`;
        menuItems.appendChild(aPizza);
        console.log(menuItems[0])
    }
    content.appendChild(menuItems);
    const pizza1 = document.querySelector(".aPizza1");
    pizza1.innerText = 'this is going great!'
};
export default showMenu;
