import '../../sass/loanOffers.sass';
import React, { forwardRef } from 'react';

interface ILoanOffersCard {
  requestedAmount: number,
  totalAmount: number,
  term: string,
  monthlyPayment: number,
  rate: string,
  isInsuranceEnabled: boolean,
  isSalaryClient: boolean
}

const arrLoanOffersCard: Array<ILoanOffersCard> = [
  {
    requestedAmount: 200000,
    totalAmount: 200000,
    term: '24 months',
    monthlyPayment: 9697,
    rate: '15%',
    isInsuranceEnabled: false,
    isSalaryClient: false,
  },
  {
    requestedAmount: 200000,
    totalAmount: 200000,
    term: '24 months',
    monthlyPayment: 9788,
    rate: '11%',
    isInsuranceEnabled: true,
    isSalaryClient: false,
  },
];

const LoanOffers = forwardRef<HTMLFormElement>(function LoanOffers(props, ref) {
  localStorage.clear();
  const LoanOffersCard = arrLoanOffersCard.map((item, index) =>
    <div className='loan-offers-card' key={index}>
      <div className='loan-offers-card__img'>
        <img src={'img/loan-offers.png'} alt='gift box' />
      </div>
      <div className='loan-offers-card__content'>
        <p>Requested amount: {item.requestedAmount.toLocaleString('ru-RU')} ₽</p>
        <p>Total amount: {item.totalAmount.toLocaleString('ru-RU')} ₽</p>
        <p>For {item.term}</p>
        <p>Monthly payment: {item.monthlyPayment.toLocaleString('ru-RU')} ₽</p>
        <p>Your rate: {item.rate}</p>
        <p
          className={!item.isInsuranceEnabled ? 'loan-offers-card__close loan-offers-card__insurance' : 'loan-offers-card__green-check loan-offers-card__insurance'}>Insurance
          included</p>
        <p
          className={!item.isSalaryClient ? 'loan-offers-card__close loan-offers-card__salary' : 'loan-offers-card__green-check loan-offers-card__salary'}>Salary
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