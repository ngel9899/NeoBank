import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Application } from './pages/application';
import { Home } from './pages/home';
import { LoanPage } from './pages/loanPage';
import { Page404 } from './pages/404';
import { useSelector } from 'react-redux';
import { getData, getId, sendFormData } from './app/slice';
import { getApplicationId, getDataApplicationId, getStatusApplicationId } from './app/getApplicationId';
import { PaymentSchedule } from './pages/paymentSchedule';
import { useAppDispatch } from './app/hooks';
import { persistor } from './app/store';
import { DocumentSign } from './pages/documentSign';
import { LoanCode } from './pages/loanCode';

export const AppRoutes = () => {
  const id = useSelector(getId);
  const status = useSelector(getStatusApplicationId);
  const dispatch = useAppDispatch();
  const data = useSelector(getDataApplicationId);
  useEffect(() => {
    console.log(id);
    if (id != 0) {
      console.log(status);
      dispatch(getApplicationId(id));
    }
    if (status === 'CLIENT_DENIED') {
      persistor.flush().then(() => {
        return persistor.purge();
      });
      console.log(id);
    }
  }, [status]);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/loan' element={<LoanPage />} />
      {status === 'APPROVED' || status === 'CC_DENIED' || status === 'CC_APPROVED' ?
        <Route path={'/loan/' + id} element={<Application />} /> : <Route path='/loan/404' element={<Page404 />} />
      }
      {status === 'CC_APPROVED' || status === 'DOCUMENT_CREATED' ?
        <Route path={'/loan/' + id + '/document'} element={<PaymentSchedule />} /> :
        <Route path='/loan/404/document' element={<Page404 />} />
      }
      {status === 'DOCUMENT_CREATED'?
        <Route path={'/loan/' + id + '/document/sign'} element={<DocumentSign />} /> :
        <Route path='/loan/404/document' element={<Page404 />} />
      }
      {data!.sesCode != null ?
        <Route path={'/loan/' + id + '/code'} element={<LoanCode />} /> :
        <Route path='/loan/404/document' element={<Page404 />} />
      }
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};