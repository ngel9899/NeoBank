import React from 'react';
import '../../sass/ratesAndConditions.sass';

interface IArrRatesConditions {
  title: string,
  text: string,
  secondTextLine?: string
}

const arrRatesConditions: Array<IArrRatesConditions> = [
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
  const ratesAndConditionsContent = arrRatesConditions.map((item) =>
    <div key={item.title} className='rates-and-conditions__bloc'>
      <div className='rates-and-conditions__title'>
        <p>{item.title}</p>
      </div>
      <div className='rates-and-conditions__text'>
        <p>{item.text}</p>
        {item.secondTextLine ? <p className='rates-and-conditions__secondTextLine'>{item.secondTextLine}</p> : ''}
      </div>
    </div>,
  );

  return (
    <section className='rates-and-conditions'>
      {ratesAndConditionsContent}
    </section>
  );
};