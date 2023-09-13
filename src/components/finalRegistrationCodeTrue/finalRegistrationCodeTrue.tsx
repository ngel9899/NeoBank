import '../../sass/finalRegistrationCodeTrue.sass';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const FinalRegistrationCodeTrue = () => {
  const navigate = useNavigate();
  return (
    <section className='final-registration-code-true container'>
      <div className='final-registration-code-true__content'>
        <img src={'/img/loan-offers.png'} alt='loan offers' />
        <h1>Congratulations! You have completed your new credit card.</h1>
        <p>Your credit card will arrive soon. Thank you for choosing us!</p>
        <button onClick={() => navigate('/home')}>View other offers of our bank</button>
      </div>
    </section>
  );
};