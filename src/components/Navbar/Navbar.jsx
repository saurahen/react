import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
// Активная страница написана золотым цветом
const activeGold = ({ isActive }) => (isActive ? s.activeLink : s.item);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className={activeGold}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className={activeGold}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to='/news' className={activeGold}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to='/music' className={activeGold}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to='/settings' className={activeGold}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
