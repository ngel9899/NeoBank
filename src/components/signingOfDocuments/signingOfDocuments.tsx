import React, { useState } from 'react';
import '../../sass/signingOfDocuments.sass';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { getId } from '../../app/slice';
import { sendSigningOfDocuments } from '../../app/sliceSigningOfDocuments';
import { getApplicationId } from '../../app/getApplicationId';


export const SigningOfDocuments = () =>{
  const [check, setCheck] = useState(true);
  const id = useSelector(getId);
  const dispatch = useAppDispatch();
  const click = () => {
    dispatch(sendSigningOfDocuments(id))
    dispatch(getApplicationId(id));
  }
  return(
    <section className='signing-of-documents container'>
      <div>
        <div className='signing-of-documents__title'>
          <h1>Signing of documents</h1>
          <p>Step 4 of 5</p>
        </div>
        <div className='signing-of-documents__text'>
          <p>Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
            a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
            Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
            history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
            processing of personal data.</p>
          <div className='signing-of-documents__document'>
            <a href={'/document/credit-card-offer.pdf'} download><img src='/img/icon-file-dock.png' alt='file dock' /> Information on your card</a>
          </div>
        </div>
        <div className='signing-of-documents__button'>
          <input id={'checkboxSigningOfDocuments'} name={"checkbox"} type={'checkbox'} onChange={(event) => event.target.checked ? setCheck(false) : setCheck(true)} />
          <label htmlFor='checkboxSigningOfDocuments' >I agree</label>
          <button className={!check? 'signing-of-documents-button__on' : 'signing-of-documents-button__off'} disabled={check} onClick={() => click()}>Send</button>
        </div>
      </div>
    </section>
  )
}