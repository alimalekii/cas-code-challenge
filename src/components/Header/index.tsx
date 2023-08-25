import './style.css';
import { useState, useEffect } from 'react';
import MobileMenu from '../MobileNavbar';

import { useNavigate, useLocation } from 'react-router-dom';
import HamburgerIcon from '../../assets/hamburger.svg';
import HamburgerCloseIcon from '../../assets/hamburger-close.svg';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const NAV_ITEMS = [
    {
      id: '1',
      title: 'Home',
      link: '/',
      isActive: location.pathname === '/',
    },
    {
      id: '2',
      title: 'Task One',
      link: 'task_one',
      isActive: location.pathname === '/task_one',
    },
    {
      id: '3',
      title: 'Task Two',
      link: 'task_two',
      isActive: location.pathname === '/task_two',
    },
  ];

  useEffect(() => {
    const modalCloseHandler = (e: MouseEvent) => {
      const clickedEl = (e.target as HTMLElement).classList.contains(
        'cas-mobile-menu'
      );
      if (clickedEl) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', modalCloseHandler);
    return () => {
      document.removeEventListener('click', modalCloseHandler);
    };
  }, []);

  return (
    <>
      <header className="cas-header">
        <nav className="cas-header__nav">
          <ul className="cas-header__list">
            {NAV_ITEMS.map((nav) => (
              <li
                className={`cas-header__item  ${
                  nav.isActive ? 'active_tab' : ''
                }`.trim()}
                key={nav.id}
                onClick={() => navigate(nav.link)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
          <span className="cas-header__hamburger" onClick={handleMobileNavBar}>
            {isOpen ? (
              <img src={HamburgerCloseIcon} width={40} height={40} />
            ) : (
              <img src={HamburgerIcon} width={40} height={40} />
            )}
          </span>
        </nav>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} items={NAV_ITEMS} />
    </>
  );
};

export default Header;
