import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import React from 'react';
import { Error404 } from '../components/error404/error404';


export function Page404() {
  return (
    <section>
      <Header />
      <Error404 />
      <Footer />
    </section>
  );
}