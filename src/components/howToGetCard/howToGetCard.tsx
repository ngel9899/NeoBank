import '../../sass/howToGetCard.sass';
import React from 'react';

interface IHowToGetCard {
  number: string,
  text: string
}

export const HowToGetCard = () => {
  const arrHowToGetCard: Array<IHowToGetCard> = [
    {
      number: '1',
      text: 'Fill out an online application - you do not need to visit the bank',
    },
    {
      number: '2',
      text: 'Find out the bank\'s decision immediately after filling out the application',
    },
    {
      number: '3',
      text: 'The bank will deliver the card free of charge, wherever convenient, to your city',
    },
  ];
  const HowToGetCards = arrHowToGetCard.map((item) =>
    <div key={item.number} className='how-to-get-card__bloc'>
      <div className='how-to-get-card__content'>
        <div className='how-to-get-card__number'>
          <p>{item.number}</p>
        </div>
        <div className='how-to-get-card__dividing-line'>
          <hr />
        </div>
      </div>
      <div className='how-to-get-card__text'>
        <p>{item.text}</p>
      </div>
    </div>,
  );
  return (
    <section className='how-to-get-card'>
      <h1>How to get a card</h1>
      <div className='how-to-get-card__container'>
        {HowToGetCards}
      </div>
    </section>
  );
};