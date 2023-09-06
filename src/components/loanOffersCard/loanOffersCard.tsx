import React from 'react';
import '../../sass/loanOffers.sass';
import { sendLoanOffers } from '../../app/sliceLoanOffers';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { getData } from '../../app/slice';

const LoanOffersCard = (data: Record<string, any>, index: number) => {
  const dispatch = useAppDispatch();
  const loanOffers = useSelector(getData);
  const onClick = (id: number) => {
    if (loanOffers != null) {
      dispatch(sendLoanOffers(loanOffers[data.index]));
    }
  };
  return (
    <div className='loan-offers-card'>
      <div className='loan-offers-card__img'>
        <img src={'img/loan-offers.png'} alt='gift box' />
      </div>
      <div className='loan-offers-card__content'>
        <p>Requested amount: {data.item.requestedAmount.toLocaleString('ru-RU')} ₽</p>
        <p>Total amount: {data.item.totalAmount.toLocaleString('ru-RU')} ₽</p>
        <p>For {data.item.term}</p>
        <p>Monthly payment: {data.item.monthlyPayment.toLocaleString('ru-RU')} ₽</p>
        <p>Your rate: {data.item.rate}</p>
        <p
          className={!data.item.isInsuranceEnabled ? 'loan-offers-card__close loan-offers-card__insurance' : 'loan-offers-card__green-check loan-offers-card__insurance'}>Insurance
          included</p>
        <p
          className={!data.item.isSalaryClient ? 'loan-offers-card__close loan-offers-card__salary' : 'loan-offers-card__green-check loan-offers-card__salary'}>Salary
          client</p>
      </div>
      <div className='loan-offers-card__button'>
        <button onClick={() => {
          onClick(index);
        }}>Select
        </button>
      </div>
    </div>);
};

export const LoanOffersCards = () => {
  const loanOffers = useSelector(getData);
  return (
    <section className='loan-offers'>
      {loanOffers?.map((item, index) =>
        <LoanOffersCard item={item} index={index} key={index} />,
      )}
    </section>
  );
};