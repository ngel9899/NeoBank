import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import '../../sass/newsline.sass';
import React, { useEffect, useState } from 'react';


export function Newsline() {
  const [news, setNews] = useState<Array<Record<string, any>>>();


  const filterArr = (item: Record<string, any>) => {
    if ((item['urlToImage'] && item['description']) != null || undefined) {
      return item;
    }
  };

  useEffect(() => {
    const url = new URL('v2/top-headlines?country=us', 'https://newsapi.org');
    url.searchParams.set('category', 'business');
    url.searchParams.set('apiKey', '47cb016e61734c628e8070d865794427');
    fetch(url.toString(), { method: 'GET' }).then(response => response.json())
      .then((responses: Record<string, any>) => {
        setNews(responses.articles.filter(filterArr));
      }).catch(error => {
      console.log('Ошибка сервера');
      console.error(error);
    });
  }, []);

  const NewsSliderCard = (articles: Record<string, any>) => {
    return (
      <div className='newsline-slider__card swiper-slide'>
        <div className='newsline-card__container'>
          <div className='newsline-card__img'>
            <img src={articles.articles['urlToImage']} alt='photo news' />
          </div>
          <div className='newsline-card__text'>
            <a href={articles.articles['url']} target='_blank'
               rel='noreferrer'>{articles.articles['title']}</a>
            <p>{articles.articles['description']}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className='newsline container'>
      <div className='newsline__text'>
        <h1>Current news from the world of finance</h1>
        <p>We update the news feed every 15 minutes. You can learn more by clicking on the news you are
          interested
          in.</p>
      </div>
      <Swiper
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore written according to the documentation
        modules={[Navigation]}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.newsline-slider__button-next',
          prevEl: '.newsline-slider__button-prev',
          disabledClass: 'arrow-disabled',
        }}
        direction={'horizontal'}
        loop={false}
        speed={500}
        className='newsline__slider'
      >
        {news?.map((item: object, i) => (
          <SwiperSlide key={i}>
            <NewsSliderCard articles={item} />
          </SwiperSlide>
        ))}
        <div className='newsline-slider__button-prev newsline-slider__button'></div>
        <div className='newsline-slider__button-next newsline-slider__button'></div>
      </Swiper>
    </section>
  );
}

