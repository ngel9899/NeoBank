import React, { forwardRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getDataLoanOffers,
  getErrorsLoanOffers,
  getLoanOfferSelected,
  sendLoanOffers,
} from '../../app/sliceLoanOffers';
import { PreliminaryDecision } from '../preliminaryDecision/preliminaryDecision';
import {LoanOffersCards } from '../loanOffersCard/loanOffersCard';


const LoanOffers = forwardRef<HTMLFormElement>(function LoanOffers(props, ref) {
  const [offers, setOffers] = useState<JSX.Element>();
  const select = useSelector(getLoanOfferSelected);
  useEffect(() =>{
    !select ? setOffers(<LoanOffersCards />) : setOffers(<PreliminaryDecision />)
  }, [select])
  return (
    <section ref={ref}>
      {offers}
    </section>
  );
});

export default LoanOffers;