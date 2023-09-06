import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sass/error404.sass';


export const Error404 = () => {
  const navigate = useNavigate();
  return(
    <section className='error404 container'>
      <div>
        <div className='error404__text'>
          <h1>Oops....</h1>
          <h1>Page not found</h1>
          <p>This Page doesn`t exist or was removed! We suggest you go back.</p>
          <button onClick={() => {navigate('/home');}}>Go back</button>
        </div>
      </div>
      <div className='error404__img'>
        <img src='../img/404.png' alt='error 404' />
      </div>
    </section>
  )
}