import '../../sass/cardsDesign.sass';
import React from 'react';

export function CardsDesign() {
  return (
    <section className='cards-design container'>
      <div>
        <div className='cards-design__text'>
          <p>Choose the design you like and apply for card right now</p>
        </div>
        <div className='cards-design__button'>
          <button>Choose the card</button>
        </div>
      </div>
      <div className='cards-design__right'>
        <div className='cards-design__img'>
          <img src={'img/cardImage1.png'} alt='cardImage' />
          <img src={'img/cardImage2.png'} alt='cardImage' />
          <img src={'img/cardImage3.png'} alt='cardImage' />
          <img src={'img/cardImage4.png'} alt='cardImage' />
        </div>
      </div>
    </section>
  );
}