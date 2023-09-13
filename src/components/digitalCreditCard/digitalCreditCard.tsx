import '../../sass/digitalCreditCard.sass';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { getData, getId } from '../../app/slice';
import { getLoanOfferSelected } from '../../app/sliceLoanOffers';
import { useNavigate } from 'react-router-dom';
import {
  getApplicationId,
  getDataApplicationId,
  getPinApplicationId,
  getStatusApplicationId,
} from '../../app/getApplicationId';
import { useAppDispatch } from '../../app/hooks';

const DigitalCreditCard = forwardRef/*<React.MutableRefObject<HTMLFormElement>>*/<any>(function DigitalCreditCard(props, ref: any) {
  const user = useSelector(getData);
  const select = useSelector(getLoanOfferSelected);
  const id = useSelector(getId);
  const data = useSelector(getDataApplicationId);
  const status = useSelector(getStatusApplicationId);
  const dispatch = useAppDispatch();
  const pin = useSelector(getPinApplicationId)
  let button;
  if(!select){
    button = "Choose an offer";
  }else {
    button = "Continue registration";
  }
  const navigate = useNavigate();
  const executeScroll = () => {
    if (!select){
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }if (status === 'APPROVED'){
      navigate('/loan/' + id);
      dispatch(getApplicationId(id));
    }
    if(status === 'CC_APPROVED'){
      navigate('/loan/' + id + '/document');
      dispatch(getApplicationId(id));
    }
    if (status === 'DOCUMENT_CREATED'){
      navigate('/loan/' + id + '/document/sign');
      dispatch(getApplicationId(id));
    }
    if (pin != null){
      navigate('/loan/' + id + '/code');
      dispatch(getApplicationId(id));
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
              {!user ? 'Apply for card' : button}
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