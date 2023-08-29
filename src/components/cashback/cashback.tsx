import '../../sass/cashback.sass';
import React from 'react';

interface IArrCashback {
  text: string,
  percent: string,
  color?: string
}

const arrCashback: Array<IArrCashback> = [
  {
    text: 'For food delivery, cafes and restaurants',
    percent: '5%',
  },
  {
    text: 'In supermarkets with our subscription',
    percent: '5%',
    color: 'true',
  },
  {
    text: 'In clothing stores and children\'s goods',
    percent: '2%',
  },
  {
    text: 'Other purchases and payment of services and fines',
    percent: '1%',
    color: 'true',
  },
  {
    text: 'Shopping in online stores',
    percent: 'up to 3%',
  },
  {
    text: 'Purchases from our partners',
    percent: '30%',
    color: 'true',
  },
];

export const Cashback = () => {
  const cashbackCard = arrCashback.map((card) =>
    <div key={card.text} className={'cashback__card ' + (card.color ? 'cashback-card__urquoise' : '')}>
      <div className='cashback__container'>
        <p className='cashback__text'>{card.text}</p>
        <p className='cashback__percent'>{card.percent}</p>
      </div>
    </div>,
  );
  return (
    <div className='cashback'>
      {cashbackCard}
    </div>
  );
};