import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import React, { useEffect, useState } from 'react';
import { FinalRegistrationCode } from '../components/finalRegistrationCode/finalRegistrationCode';
import {
  getApplicationId,
  getDataApplicationId,
  getPinApplicationId,
  getStatusApplicationId,
} from '../app/getApplicationId';
import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';
import { getId } from '../app/slice';
import { Page404 } from './404';
import { FinalRegistrationCodeTrue } from '../components/finalRegistrationCodeTrue/finalRegistrationCodeTrue';

export function LoanCode() {
  const [pinTrue, setPenTrue] = useState<JSX.Element>()
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const status = useSelector(getStatusApplicationId);
  const pin = useSelector(getPinApplicationId);
  console.log(pin)
  useEffect(() => {
    dispatch(getApplicationId(id));
    if(status === 'CREDIT_ISSUED'){
      setPenTrue(<FinalRegistrationCodeTrue />)
    }else{
      setPenTrue(<FinalRegistrationCode />)
    }
  }, [status]);
  return (
    <>
      {(pin != null) ?
        <div>
          <Header />
          {pinTrue}
          <Footer />
        </div> : <Page404 />
      }
    </>
  );
}