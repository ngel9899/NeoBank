import '../../sass/footer.sass';
import React from 'react';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__about'>
          <div className='footer__img'>
            <a href=''><img src={'img/logo-footer.png'} alt='logo Neoflex' /></a>
          </div>
          <div>
            <address className='footer__adress'>
              <ul>
                <li><a href='tel: 84959842513'>+7 (495) 984 25 13</a></li>
                <li><a href='mailto: info@neoflex.ru'>info@neoflex.ru</a></li>
              </ul>
            </address>
          </div>
        </div>
        <div>
          <nav className='footer__links'>
            <a href=''>About bank</a>
            <a href=''>Ask a Question</a>
            <a href=''>Quality of service</a>
            <a href=''>Requisites</a>
            <a href=''>Press center</a>
            <a href=''>Bank career</a>
            <a href=''>Investors</a>
            <a href=''>Analytics</a>
            <a href=''>Business and processes</a>
            <a href=''>Compliance and business ethics</a>
          </nav>
        </div>
        <div className='footer__text'>
          <p>We use cookies to personalize our services and improve the user experience of our website.
            Cookies are small files containing information about previous visits to a website. If you do not
            want to use cookies, please change your browser settings</p>
        </div>
      </div>
    </footer>
  );
}