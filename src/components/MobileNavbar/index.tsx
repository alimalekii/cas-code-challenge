import './style.css';
import { createPortal } from 'react-dom';
import { Dispatch, SetStateAction } from 'react';

import { useNavigate } from 'react-router-dom';

interface IMobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  items: Array<{ id: string; title: string; link: string; isActive: boolean }>;
}

const MobileMenu = (props: IMobileMenuProps) => {
  const { isOpen, setIsOpen, items } = props;
  const navigate = useNavigate();

  const modal = (
    <div className="cas-mobile-menu">
      <nav className="cas-mobile-menu__nav">
        <ul className="cas-mobile-menu__list">
          {items.map((nav) => (
            <li
              className={`cas-mobile-header__item  ${
                nav.isActive ? 'active_tab' : ''
              }`.trim()}
              key={nav.id}
              onClick={() => {
                navigate(nav.link);
                setIsOpen(false);
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  const modalEl = document.getElementById('portal');
  return isOpen ? createPortal(modal, modalEl!) : null;
};

export default MobileMenu;
