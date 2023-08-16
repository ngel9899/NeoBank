import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../sass/newsline.sass";
import {useEffect, useState} from "react";



export function Newsline(){
    const [news, setNews] = useState<Array<any>>();

    const filterArr = (item : any) =>{
        if((item['urlToImage'] && item['description']) != null || undefined){
            return item
        }
    }

    useEffect(() => {
        const url = new URL('v2/top-headlines?country=us', 'https://newsapi.org')
        url.searchParams.set('category', 'business');
        url.searchParams.set('apiKey', '47cb016e61734c628e8070d865794427');
        fetch(url.toString(), {method: 'GET'}).then(response => response.json())
            .then((responses : any) => {
                    setNews(responses.articles.filter(filterArr));
            })
        const swiper = new Swiper('.swiper', {
            modules: [Navigation],
            variableWidth: true,
            slidesPerView: "auto",
            direction: 'horizontal',
            loop: false,
            speed: 500,
            wrapperClass: 'newsline__slider-line',
            navigation: {
                nextEl: '.newsline-slider__button-next',
                prevEl: '.newsline-slider__button-prev',
                disabledClass: 'arrow-disabled',
            },
        });
    },[]);

    const NewsSliderCard = (articles : any) =>{
        return (
            <div className="newsline-slider__card swiper-slide">
                <div className="newsline-card__container">
                    <div className="newsline-card__img">
                        <img src={articles.articles['urlToImage']} alt="photo news"/>
                    </div>
                    <div className="newsline-card__text" >
                        <a href={articles.articles['url']} target="_blank">{articles.articles['title']}</a>
                        <p>{articles.articles['description']}</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <section className="newsline container">
            <div className="newsline__text">
                <h1>Current news from the world of finance</h1>
                <p>We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.</p>
            </div>
            <div className="newsline__slider swiper">
                <div className="newsline__slider-line">
                    {news?.map((n: any, i) => (
                        <NewsSliderCard articles={n} key={i} />
                    ))}
                </div>
                <div className="newsline-slider__button-prev newsline-slider__button"></div>
                <div className="newsline-slider__button-next newsline-slider__button"></div>
            </div>
        </section>
    )
}