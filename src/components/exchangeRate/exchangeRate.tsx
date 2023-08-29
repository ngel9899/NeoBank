import '../../sass/exchangeRate.sass';
import React, { useEffect, useState } from 'react';

const currency: string[] = ['USD', 'EUR', 'CNY', 'CHF', 'TRY', 'JPY'];

export function ExchangeRate() {
  const [data, setData] = useState<Array<string>>();


  useEffect(() => {
    const url = new URL('exchange?to=RUB', 'https://currency-exchange.p.rapidapi.com');
    const connect = () => {
      const promises = [];
      for (let i = 0; i < currency.length; i++) {
        url.searchParams.set('from', currency[i]);
        url.searchParams.set('q', '1.0');
        const response = fetch(url.toString(),
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '2bd3c6dc0dmshd7272ab9852f00ap165910jsncc17b5435d7d',
              'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
            },
          }).then(response => {
          if (response.ok) {
            return response.json();
          } else return null;
        }).catch(error => {
          console.log('Ошибка сервера');
          console.error(error);
        });
        promises.push(response);
      }
      Promise.all(promises).then((responses: object[]) => {
        setData(responses.map((n: object) => Number(n).toFixed(2)));
      });
    };
    connect(); //для проверки
    const interval = window.setInterval(connect, 900000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <section className='exchangeRate container'>
      <div className='exchangeRate__container'>
        <div>
          <div className='exchangeRate__text'>
            <h1>Exchange rate in internet bank</h1>
            <p>Currency</p>
          </div>
          <div className='exchangeRate__currency'>
            <div className='exchangeRate__currency_list' id='exchangeRate__currency_list'>
              {data?.map((n: string, index) => <div key={n}><p>{currency[index]}:<span>{n}</span></p></div>)}
            </div>
          </div>
          <div className='exchangeRate__link'>
            <a href=''>All courses</a>
          </div>
        </div>
        <div className='exchangeRate__right_block'>
          <div className='exchangeRate__time'>
            <p>Update every 15 minutes, MSC 09.08.2022</p>
          </div>
          <div className='exchangeRate__img'>
            <img src={'img/exchange-rate-logo.png'} alt='exchange logo' />
          </div>
        </div>
      </div>
    </section>
  );
}