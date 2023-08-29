import React from 'react';
import '../../sass/ratesAndConditions.sass';

const arrRatesConditions = [
  {
    title: 'Card currency',
    text: 'Rubles, dollars, euro',
  },
  {
    title: 'Interest free period',
    text: '0% up to 160 days',
  },
  {
    title: 'Payment system',
    text: 'Mastercard, Visa',
  },
  {
    title: 'Maximum credit limit on the card',
    text: '600 000 ₽',
  },
  {
    title: 'Replenishment and withdrawal',
    text: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
  },
  {
    title: 'Max cashback per month',
    text: '15 000 ₽',
  },
  {
    title: 'Transaction Alert',
    text: '60 ₽ — SMS or push notifications',
    secondTextLine: '0 ₽ — card statement, information about transactions in the online bank',
  },
];

export const RatesAndConditions = () => {
  const ratesAndConditionsContent = arrRatesConditions.map((item: any) =>
    <div key={item.title} className='ratesAndConditions__bloc'>
      <div className='ratesAndConditions__title'>
        <p>{item.title}</p>
      </div>
      <div className='ratesAndConditions__text'>
        <p>{item.text}</p>
        {item.secondTextLine ? <p className='ratesAndConditions__secondTextLine'>{item.secondTextLine}</p> : ''}
      </div>
    </div>,
  );

  return (
    <section className='ratesAndConditions'>
      {ratesAndConditionsContent}
    </section>
  );
};