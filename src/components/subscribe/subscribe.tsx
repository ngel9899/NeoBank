import '../../sass/subscribe.sass';
import React, { useEffect, useState } from 'react';

export function Subscribe() {
  const [subscribe, setSubscribe] = useState<JSX.Element>();
  const keySubscribe = localStorage.getItem('subscribe');

  const FormSubscribe = () => {
    return (
      <form method='post' className='subscribe__form' onSubmit={(e) => {
        localStorage.setItem('subscribe', 'true');
        e.preventDefault();
        setSubscribe(<AlreadySubscribed />);
      }}>
        <input type='email' name='email' placeholder='Your email' />
        <input type='submit' value='Subscribe' />
      </form>
    );
  };

  const AlreadySubscribed = () => {
    return (
      <div className='subscribe__form'>
        <p className='subscribe__text'>You are already subscribed to the bank&apos;s newsletter</p>
      </div>
    );
  };

  useEffect(() => {
    keySubscribe != null ? setSubscribe(<AlreadySubscribed />) : setSubscribe(<FormSubscribe />);
  }, []);


  return (
    <section className='subscribe container'>
      <div className='subscribe__text'>
        <a>Support</a>
        <h1>Subscribe Newsletter & get</h1>
        <h2>Bank News</h2>
      </div>
      <div>
        {subscribe}
      </div>
    </section>
  );
}