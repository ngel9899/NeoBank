import React from 'react';
import '../../sass/signingOfDocumentsText.sass';

export const SigningOfDocumentsText = () => {
  return (
    <section className='signing-of-documents-text container'>
      <div className='signing-of-documents-text__content'>
        <h1>Documents have been successfully signed and sent for approval</h1>
        <p>Within 10 minutes you will be sent a PIN code to your email for confirmation</p>
      </div>
    </section>
  );
};