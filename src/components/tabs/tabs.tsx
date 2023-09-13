import '../../sass/tabs.sass';
import React, { useEffect, useRef, useState } from 'react';
import DigitalCreditCard from '../digitalCreditCard/digitalCreditCard';
import Form from '../form/form';
import { AboutCard } from '../aboutCard/aboutCard';
import { RatesAndConditions } from '../ratesAndConditions/ratesAndConditions';
import { Cashback } from '../cashback/cashback';
import { FAQ } from '../FAQ/FAQ';
import { HowToGetCard } from '../howToGetCard/howToGetCard';
import LoanOffers from '../loanOffers/loanOffers';
import { useSelector, useStore } from 'react-redux';
import { getData } from '../../app/slice';

export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const ref = useRef<HTMLFormElement>(null);
  const [offers, setOffers] = useState<JSX.Element>();
  const loanOffers = useSelector(getData);

  useEffect(() => {
    !loanOffers ? setOffers(<Form ref={ref} />) : setOffers(<LoanOffers ref={ref} />);
  }, [loanOffers]);

  return (
    <>
      <DigitalCreditCard ref={ref} />
      <section className='tabs container'>
        <div className='tabs__bloc'>
          <div className={toggleState === 1 ? 'tab tab__active' : 'tab'} onClick={() => setToggleState(1)}>about card
          </div>
          <div className={toggleState === 2 ? 'tab tab__active' : 'tab'} onClick={() => setToggleState(2)}>Rates and
            conditions
          </div>
          <div className={toggleState === 3 ? 'tab tab__active' : 'tab'} onClick={() => setToggleState(3)}>Cashback
          </div>
          <div className={toggleState === 4 ? 'tab tab__active' : 'tab'} onClick={() => setToggleState(4)}>FAQ</div>
        </div>
        <div className='tabs__content-bloc'>
          <div className={toggleState === 1 ? 'tab-content__active' : 'tab-content__inactive'}>
            <AboutCard />
          </div>
          <div className={toggleState === 2 ? 'tab-content__active' : 'tab-content__inactive'}>
            <RatesAndConditions />
          </div>
          <div className={toggleState === 3 ? 'tab-content__active' : 'tab-content__inactive'}>
            <Cashback />
          </div>
          <div className={toggleState === 4 ? 'tab-content__active' : 'tab-content__inactive'}>
            <FAQ />
          </div>
        </div>
        <HowToGetCard />
        {offers}
      </section>
    </>
  );
}
