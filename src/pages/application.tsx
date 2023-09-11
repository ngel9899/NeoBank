import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/header';
import { ContinuationOfTheApplication } from '../components/continuationOfTheApplication/continuationOfTheApplication';
import { Footer } from '../components/footer/footer';
import { useSelector } from 'react-redux';
import { DecisionOnTheApplication } from '../components/decisionOnTheApplication/decisionOnTheApplication';
import { getApplicationId, getStatusApplicationId } from '../app/getApplicationId';
import { getDataApplication } from '../app/sliceFormApplication';
import { useAppDispatch } from '../app/hooks';
import { getId } from '../app/slice';


export function Application() {
  const [сontinuedСheck, setContinuedCheck] = useState<JSX.Element>()
  const status = useSelector(getStatusApplicationId);
  const dataSent = useSelector(getDataApplication);
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  useEffect(() =>{
    dispatch(getApplicationId(id));
    if (status === 'APPROVED' || status === 'CC_DENIED'){
      setContinuedCheck(<ContinuationOfTheApplication />)
    }else setContinuedCheck(<DecisionOnTheApplication />)
  }, [dataSent, status]);
  return (
    <section>
      <Header />
      {сontinuedСheck}
      <Footer />
    </section>
  );
}