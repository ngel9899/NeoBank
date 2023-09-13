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

export function LoanCode() {
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const pin = useSelector(getPinApplicationId);
  useEffect(() => {
    dispatch(getApplicationId(id));
  }, []);
  return (
    <>
      {(pin != null) ?
        <div>
          <Header />
          <FinalRegistrationCode />
          <Footer />
        </div> : <Page404 />
      }
    </>
  );
}