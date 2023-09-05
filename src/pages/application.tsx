import React from 'react';
import { Header } from '../components/header/header';
import { ContinuationOfTheApplication } from '../components/continuationOfTheApplication/continuationOfTheApplication';
import { Footer } from '../components/footer/footer';


export function Application() {
  return (
    <section>
      <Header subpage={true} />
      <ContinuationOfTheApplication />
      <Footer subpage={true} />
    </section>
  );
}