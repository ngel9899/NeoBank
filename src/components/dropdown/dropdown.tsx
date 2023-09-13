import '../../sass/dropdown.sass';
import { NavLink } from 'react-router-dom';
import { setActive } from '../header/header';
import React from 'react';

export function DropDown() {
  return (
    <details className='hidden dropdown'>
      <summary>Menu</summary>
      <li><NavLink to='/loan' className={setActive}>Credit card</NavLink></li>
      <li><NavLink to='/product' className={setActive}>Product</NavLink></li>
      <li><NavLink to='/account' className={setActive}>Account</NavLink></li>
      <li><NavLink to='/resources' className={setActive}>Resources</NavLink></li>
      <li><NavLink to='/' className={setActive}>Online Bank</NavLink></li>
    </details>
  );
}