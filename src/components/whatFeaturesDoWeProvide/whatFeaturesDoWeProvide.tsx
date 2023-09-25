import '../../sass/whatFeaturesDoWeProvide.sass';
import React from 'react';

interface ListItemProps {
  text: string;
}

function ListItem(props: ListItemProps) {
  const text = props.text;
  return (
    <li><img src={'img/check-green.png'} alt='check' />{text}</li>
  );
}

export function WhatFeaturesDoWeProvide() {

  return (
    <section className='what-features-do-we-provide container'>
      <div className='what-features-do-we-provide__img'>
        <img src={'img/home-function-usage-illustration.png'} alt='function usage illustration' />
      </div>
      <div className='what-features-do-we-provide__text'>
        <h1>We Provide Many Features You Can Use</h1>
        <p>You can explore the features that we provide with fun and have their own functions each feature</p>
        <ul>
          <ListItem text='Powerfull online protection.' />
          <ListItem text='Cashback without borders.' />
          <ListItem text='Personal design' />
          <ListItem text='Work anywhere in the world' />
        </ul>
      </div>
    </section>
  );
}