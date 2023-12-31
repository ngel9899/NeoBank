import { DropDown } from '../dropdown/dropdown';
import '../../sass/header.sass';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-header' : 'no-active-header');

export function Header() {
  return (
    <header className='header container'>
      <div className='header__logo'>
        <a href='/home'><img src={'/img/logo-header.png'} alt='Logo NeoBank' /></a>
      </div>
      <div className='header__nav'>
        <nav>
          <NavLink to='/loan' className={setActive}>Credit card</NavLink>
          <NavLink to='/product' className={setActive}>Product</NavLink>
          <NavLink to='/account' className={setActive}>Account</NavLink>
          <NavLink to='/resources' className={setActive}>Resources</NavLink>
        </nav>
      </div>
      <div className='header__button'>
        <button>Online Bank</button>
      </div>
      <DropDown />
    </header>
  );
}