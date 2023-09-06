import { Header } from '../components/header/header';
import { ContinuationOfTheApplication } from '../components/continuationOfTheApplication/continuationOfTheApplication';
import { Footer } from '../components/footer/footer';
import React from 'react';
import { Error404 } from '../components/error404/error404';


export function Page404() {
  return (
    <section>
      <Header subpage={true} />
      <Error404 />
      <Footer subpage={true} />
    </section>
  );
}