import '../styles/contactStyle.css';

const showContact = () => {
    const middleContent = document.createElement('div');

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contactInfo';

    const location = document.createElement('div');
    location.className = 'location';
    contactInfo.appendChild(location);
    const locationSymbol = document.createElement('i');
    locationSymbol.className = 'material-icons';
    locationSymbol.innerText = 'location_on';
    location.appendChild(locationSymbol);
    const locationText = document.createElement('p');
    location.className = 'description';
    locationText.innerText = `
    Arugula's Pizzeria
    12 St. Marks Street
    Portland Island
    Liberty City`;
    location.appendChild(locationText);

    const phone = document.createElement('div');
    phone.className = 'phone';
    const phoneSymbol = document.createElement('i');
    phoneSymbol.className = 'material-icons';
    phoneSymbol.innerText = 'phone';
    phone.appendChild(phoneSymbol);
    const phoneText = document.createElement('p');
    phone.className = 'description';
    phoneText.innerText = `
    555-PIZZA (555-74992)
    info@arugulas.com`;
    phone.appendChild(phoneText);
    contactInfo.appendChild(phone);

    const hours = document.createElement('div');
    hours.className = 'hours';
    const hoursSymbol = document.createElement('i');
    hoursSymbol.className = 'material-icons';
    hoursSymbol.innerText = 'schedule';
    hours.appendChild(hoursSymbol);
    const hoursText = document.createElement('p');
    hours.className = 'description';
    hoursText.innerText = `
    Monday-Thursday: 11:00 AM-10:00 PM
    Friday-Saturday: 11:00 AM-11:00 PM
    Sunday: 12:00 PM-9:00 PM`;
    hours.appendChild(hoursText);
    contactInfo.appendChild(hours);

    middleContent.appendChild(contactInfo);
    content.appendChild(middleContent);
};

export default showContact;
