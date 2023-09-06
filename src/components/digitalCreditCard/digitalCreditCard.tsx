import '../../sass/digitalCreditCard.sass';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../../app/slice';
import { getLoanOfferSelected } from '../../app/sliceLoanOffers';
import { useNavigate } from 'react-router-dom';

const DigitalCreditCard = forwardRef/*<React.MutableRefObject<HTMLFormElement>>*/<any>(function DigitalCreditCard(props, ref: any) {
  const user = useSelector(getData);
  const select = useSelector(getLoanOfferSelected);
  const navigate = useNavigate();
  const loanOffersId = useSelector(getData)![0].applicationId;
  const executeScroll = () => {
    if (!select){
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }else{
      navigate('/loan/' + loanOffersId);
    }
  }

  return (
    <section className='digital-credit-card container'>
      <div className='digital-credit-card__container'>
        <div className='digital-credit-card__left-bloc'>
          <div className='digital-credit-card__text'>
            <h1>Platinum digital credit card</h1>
            <p>Our best credit card. Suitable for everyday spending and shopping.
              Cash withdrawals and transfers without commission and interest.</p>
          </div>
          <div className='digital-credit-card__conditions'>
            <div data-descr='When repaying the full debt up to 160 days.'>
              <h4>Up to 160 days</h4>
              <p>No percent</p>
            </div>
            <div data-descr='Over the limit willaccrue percent'>
              <h4>Up to 600 000 ₽</h4>
              <p>Credit limit</p>
            </div>
            <div data-descr='Promotion valid until December 31, 2022.'>
              <h4>0 ₽</h4>
              <p>Card service is free</p>
            </div>
          </div>
          <div className='digital-credit-card__button'>
            <button onClick={executeScroll}>
              {!user && "Apply for card"}
              {!select ? "Choose an offer" : "Continue registration"}
            </button>
          </div>
        </div>
        <div className='digital-credit-card__image'>
          <img src={'img/platinum-digital-credit-card.png'} alt='platinum digital credit card' />
        </div>
      </div>
    </section>
  );
});
export default DigitalCreditCard;