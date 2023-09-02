import '../../sass/loanOffers.sass';
import React, { forwardRef } from 'react';

interface ILoanOffersCard {
  requestedAmount: number,
  totalAmount: number,
  for: string,
  monthlyPayment: number,
  yourRate: string,
  insuranceIncluded: boolean,
  salaryClient: boolean
}

const arrLoanOffersCard: Array<ILoanOffersCard> = [
  {
    requestedAmount: 200000,
    totalAmount: 200000,
    for: '24 months',
    monthlyPayment: 9697,
    yourRate: '15%',
    insuranceIncluded: false,
    salaryClient: false,
  },
  {
    requestedAmount: 200000,
    totalAmount: 200000,
    for: '24 months',
    monthlyPayment: 9788,
    yourRate: '11%',
    insuranceIncluded: true,
    salaryClient: false,
  },
  {
    requestedAmount: 200000,
    totalAmount: 200000,
    for: '24 months',
    monthlyPayment: 9603,
    yourRate: '14%',
    insuranceIncluded: false,
    salaryClient: true,
  },
  {
    requestedAmount: 200000,
    totalAmount: 200000,
    for: '24 months',
    monthlyPayment: 9690,
    yourRate: '10%',
    insuranceIncluded: true,
    salaryClient: true,
  },
];

const LoanOffers = forwardRef<HTMLFormElement>(function LoanOffers(props, ref) {
  const LoanOffersCard = arrLoanOffersCard.map((item, index) =>
    <div className='loan-offers-card' key={index}>
      <div className='loan-offers-card__img'>
        <img src={'img/loan-offers.png'} alt='gift box' />
      </div>
      <div className='loan-offers-card__content'>
        <p>Requested amount: {item.requestedAmount.toLocaleString('ru-RU')} ₽</p>
        <p>Total amount: {item.totalAmount.toLocaleString('ru-RU')} ₽</p>
        <p>For {item.for}</p>
        <p>Monthly payment: {item.monthlyPayment.toLocaleString('ru-RU')} ₽</p>
        <p>Your rate: {item.yourRate}</p>
        <p
          className={!item.insuranceIncluded ? 'loan-offers-card__close loan-offers-card__insurance' : 'loan-offers-card__green-check loan-offers-card__insurance'}>Insurance
          included</p>
        <p
          className={!item.salaryClient ? 'loan-offers-card__close loan-offers-card__salary' : 'loan-offers-card__green-check loan-offers-card__salary'}>Salary
          client</p>
      </div>
      <div className='loan-offers-card__button'>
        <button>Select</button>
      </div>
    </div>,
  );
  return (
    <section className='loan-offers' ref={ref}>
      {LoanOffersCard}
    </section>
  );
});

export default LoanOffers;