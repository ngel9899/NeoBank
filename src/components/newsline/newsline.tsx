import "../../sass/newsline.sass";
import {useEffect, useState} from "react";


export function Newsline(){
    const [news, setNews] = useState<Array<any>>();

    const filterArr = (item : any) =>{
        if((item['urlToImage'] && item['description']) != null || undefined){
            return item
        }
    }

/*    useEffect(() => {
        const url = new URL('v2/top-headlines?country=us', 'https://newsapi.org')
        url.searchParams.set('category', 'business');
        /!*url.searchParams.set('apiKey', '47cb016e61734c628e8070d865794427');*!/
        fetch(url.toString(), {method: 'GET'}).then(response => response.json())
            .then((responses : any) => {
                    setNews(responses.articles.filter(filterArr));
            })
    },[]);*/

    /*async function NewsSliderCard() {
        const connectBusinessNews = await ConnectBusinessNews();
        const container = document.querySelector('.newsline__slider-line');
        for (let i = 0; i < connectBusinessNews.articles.length; i++){
            let articles = connectBusinessNews.articles[i];
            if ((articles['urlToImage'] && articles['description']) != null || undefined){
                container!.innerHTML +=`
                <div class="newsline-slider__card">
                    <div class="newsline-card__container">
                        <div class="newsline-card__img">
                            <img src=${articles['urlToImage']} alt="photo news"/>
                        </div>
                        <div class="newsline-card__text">
                            <a href=${articles['url']} target="_blank">${articles['title']}</a>
                            <p>${articles['description']}</p>
                        </div>
                    </div>
                </div>
            `
            }
        }
    }*/
    return(
        <section className="newsline container">
            <div className="newsline__text">
                <h1>Current news from the world of finance</h1>
                <p>We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.</p>
            </div>
            <div className="newsline__slider">
                <div className="newsline__slider-line">
                    <div className="newsline-slider__card">
                        <div className="newsline-card__container">
                            <div className="newsline-card__img">
                                <img src='https://image.cnbcfm.com/api/v1/image/107230159-1682368003597-gettyimages-1484916701-img_0525_ibjrobnv.jpeg?v=1690367364&w=1920&h=1080' alt="photo news"/>
                            </div>
                            <div className="newsline-card__text">
                                <a href='"https://www.cnbc.com/2023/07/26/coca-cola-ko-q2-2023-earnings.html'>Coca-Cola is about to report earnings. Here's what to expect - CNBC</a>
                                <p>Coke has been raising prices across its portfolio, including another round of hikes during the first quarter</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsline-slider__card">
                        <div className="newsline-card__container">
                            <div className="newsline-card__img">
                                <img src='https://image.cnbcfm.com/api/v1/image/107230159-1682368003597-gettyimages-1484916701-img_0525_ibjrobnv.jpeg?v=1690367364&w=1920&h=1080' alt="photo news"/>
                            </div>
                            <div className="newsline-card__text">
                                <a href='"https://www.cnbc.com/2023/07/26/coca-cola-ko-q2-2023-earnings.html'>Coca-Cola is about to report earnings. Here's what to expect - CNBC</a>
                                <p>Coke has been raising prices across its portfolio, including another round of hikes during the first quarter</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsline-slider__card">
                        <div className="newsline-card__container">
                            <div className="newsline-card__img">
                                <img src='https://image.cnbcfm.com/api/v1/image/107230159-1682368003597-gettyimages-1484916701-img_0525_ibjrobnv.jpeg?v=1690367364&w=1920&h=1080' alt="photo news"/>
                            </div>
                            <div className="newsline-card__text">
                                <a href='"https://www.cnbc.com/2023/07/26/coca-cola-ko-q2-2023-earnings.html'>Coca-Cola is about to report earnings. Here's what to expect - CNBC</a>
                                <p>Coke has been raising prices across its portfolio, including another round of hikes during the first quarter</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsline-slider__card">
                        <div className="newsline-card__container">
                            <div className="newsline-card__img">
                                <img src='https://image.cnbcfm.com/api/v1/image/107230159-1682368003597-gettyimages-1484916701-img_0525_ibjrobnv.jpeg?v=1690367364&w=1920&h=1080' alt="photo news"/>
                            </div>
                            <div className="newsline-card__text">
                                <a href='"https://www.cnbc.com/2023/07/26/coca-cola-ko-q2-2023-earnings.html'>Coca-Cola is about to report earnings. Here's what to expect - CNBC</a>
                                <p>Coke has been raising prices across its portfolio, including another round of hikes during the first quarter</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsline-slider__card">
                        <div className="newsline-card__container">
                            <div className="newsline-card__img">
                                <img src='https://image.cnbcfm.com/api/v1/image/107230159-1682368003597-gettyimages-1484916701-img_0525_ibjrobnv.jpeg?v=1690367364&w=1920&h=1080' alt="photo news"/>
                            </div>
                            <div className="newsline-card__text">
                                <a href='"https://www.cnbc.com/2023/07/26/coca-cola-ko-q2-2023-earnings.html'>Coca-Cola is about to report earnings. Here's what to expect - CNBC</a>
                                <p>Coke has been raising prices across its portfolio, including another round of hikes during the first quarter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}