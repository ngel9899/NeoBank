import React, { useEffect, useState } from 'react';
import '../../sass/aboutCard.sass';

interface IAboutCard {
  img: string,
  title: string,
  text: string,
  size?: string,
  black?: string
}

type CardFunction = (arr: Array<IAboutCard>, set: React.Dispatch<React.SetStateAction<JSX.Element[] | undefined>>) => void

export const AboutCard = () => {
  const [cardSmall, setCardSmall] = useState<JSX.Element[]>();
  const [cardBig, setCardBig] = useState<JSX.Element[]>();

  useEffect(() => {
    const arrCardSmall: Array<IAboutCard> = [
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
    const arrCardBig: IAboutCard[] = [
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

    const card: CardFunction = (arr, set) => {
      set(arr.map((item) =>
        <div key={item.title}
             className={'about-card__card ' + (item.black ? 'about-card-small-card__cardBlack' : '') + ' ' + (item.size === 'small' ? 'about-card-small-card__card' : 'about-card-big-card__card')}>
          <div className={(item.size === 'small' ? 'about-card-small-card__content' : 'about-card-big-card__content')}>
            <img src={item.img} alt='credit card' />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>,
      ));
    };

    card(arrCardSmall, setCardSmall);
    card(arrCardBig, setCardBig);


  }, []);

  return (
    <section className='about-card'>
      <div className='about-card__small-card'>
        {cardSmall}
      </div>
      <div className='about-card__big-card'>
        {cardBig}
      </div>
    </section>
  );
};