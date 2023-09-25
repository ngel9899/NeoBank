import '../../sass/servicesAnywhereInTheWorld.sass';
import React from 'react';

export function ServicesWorld() {
  return (
    <section className='world-map container'>
      <div className='world-map__text'>
        <h1>You can use our services anywhere in the world</h1>
        <p>Withdraw and transfer money online through our application</p>
      </div>
      <div className='world-map__img'>
        <img src={'img/world-map.png'} alt='world map' />
      </div>
    </section>
  );
}