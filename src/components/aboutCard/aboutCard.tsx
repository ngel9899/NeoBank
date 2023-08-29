import React, { useEffect, useState } from 'react';
import '../../sass/aboutCard.sass';

export const AboutCard = () => {
  const [cardSmall, setCardSmall] = useState();
  const [cardBig, setCardBig] = useState();

  useEffect(() => {
    const arrCardSmall = [
      {
        img: 'img/money-abountCard.png',
        title: 'Up to 50 000 ₽',
        text: 'Cash and transfers without commission and percent',
        size: 'small',
      },
      {
        img: 'img/сalendar-abountCard.png',
        title: 'Up to 160 days',
        text: 'Without percent on the loan',
        size: 'small',
        black: 'true',
      },
      {
        img: 'img/time-abountCard.png',
        title: 'Free delivery',
        text: 'We will deliver your card by courier at a convenient place and time for you',
        size: 'small',
      },
    ];
    const arrCardBig = [
      {
        img: 'img/bag-abountCard.png',
        title: 'Up to 12 months',
        text: 'No percent. For equipment, clothes and other purchases in installments',
        black: 'true',
      },
      {
        img: 'img/creditCard-abountCard.png',
        title: 'Convenient deposit and withdrawal',
        text: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
      },
    ];

    const card = (arr: any, set: any) => {
      set(arr.map((n: any) =>
        <div key={n.title}
             className={'aboutCard__card ' + (n.black ? 'aboutCard-smallCard__cardBlack' : '') + ' ' + (n.size === 'small' ? 'aboutCard-smallCard__card' : 'aboutCard-bigCard__card')}>
          <div className={(n.size === 'small' ? 'aboutCard-smallCard__content' : 'aboutCard-bigCard__content')}>
            <img src={n.img} alt='credit card' />
            <h2>{n.title}</h2>
            <p>{n.text}</p>
          </div>
        </div>,
      ));
    };

    card(arrCardSmall, setCardSmall);
    card(arrCardBig, setCardBig);


  }, []);

  return (
    <section className='aboutCard'>
      <div className='aboutCard__smallCard'>
        {cardSmall}
      </div>
      <div className='aboutCard__bigCard'>
        {cardBig}
      </div>
    </section>
  );
};