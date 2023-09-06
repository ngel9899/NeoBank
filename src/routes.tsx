import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Application } from './pages/application';
import { Home } from './pages/home';
import { LoanPage } from './pages/loanPage';
import { Page404 } from './pages/404';
import { useSelector } from 'react-redux';
import { getData } from './app/slice';

export const AppRoutes = () => {
  const loanOffersId = useSelector(getData)![0].applicationId;
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/loan' element={<LoanPage />} />
      <Route path={'/loan/' + loanOffersId} element={<Application />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};