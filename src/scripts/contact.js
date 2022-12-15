import '../styles/contactStyle.css';

const showContact = () => {
    const contact = document.createElement('ul');
    contact.className = 'contact';

    const aContact1 = document.createElement('li');
    aContact1.className = "aContact 1";
    contact.appendChild(aContact1);

    const aContact2 = document.createElement('li');
    aContact2.className = "aContact 2";
    contact.appendChild(aContact2);

    const aContact3 = document.createElement('li');
    aContact3.className = "aContact 3";
    contact.appendChild(aContact3);

    const aContact4 = document.createElement('li');
    aContact4.className = "aContact 4";
    contact.appendChild(aContact4);

    content.appendChild(contact);

   aContact4.innerText = "well?"
    
};


export default showContact;