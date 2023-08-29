import '../../sass/howToGetCard.sass';
import React from 'react';

export const HowToGetCard = () => {
  const arrHowToGetCard = [
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
  const HowToGetCards = arrHowToGetCard.map((item: any) =>
    <div key={item.number} className='howToGetCard__bloc'>
      <div className='howToGetCard__content'>
        <div className='howToGetCard__number'>
          <p>{item.number}</p>
        </div>
        <div className='howToGetCard__dividingLine'>
          <hr />
        </div>
      </div>
      <div className='howToGetCard__text'>
        <p>{item.text}</p>
      </div>
    </div>,
  );
  return (
    <section className='howToGetCard'>
      <h1>How to get a card</h1>
      <div className='howToGetCard__container'>
        {HowToGetCards}
      </div>
    </section>
  );
};