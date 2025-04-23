import { useState } from 'react';
import { IonIcon } from '@ionic/react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const items = [
    { name: 'home', icon: 'home-outline', text: 'Home' },
    { name: 'about', icon: 'people-circle-outline', text: 'About Us' },
    { name: 'services', icon: 'settings-outline', text: 'Services' },
    { name: 'pages', icon: 'clipboard-outline', text: 'Pages' },
    { name: 'blog', icon: 'receipt-outline', text: 'Blog' }
  ];

  return (
    <div className="navigation">
      <ul>
        {items.map((item) => (
          <li 
            key={item.name}
            className={`list font-semibold  ${activeItem === item.name ? 'active ' : ''}`}
            onClick={() => setActiveItem(item.name)}
          >
            <a href= {`/	${item.name}`}>
              <span className="icon">
              <IonIcon name={item.icon} />
              </span>
              <span className="text">{item.text}</span> 
            </a>
          </li>
        ))}
      </ul>
      <div className="indicator"></div>
    </div>
  );
};

export default Navbar;