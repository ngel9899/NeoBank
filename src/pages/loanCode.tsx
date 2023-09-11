import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import React from 'react';
import { FinalRegistrationCode } from '../components/finalRegistrationCode/finalRegistrationCode';

export function LoanCode() {
  return (
    <div>
      <Header />
      <FinalRegistrationCode />
      <Footer />
    </div>
  );
}