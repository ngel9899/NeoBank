import "../../sass/newsline.sass";
import {ConnectBusinessNews} from "../../function";


export function Newsline(){
    async function NewsSliderCard() {
        const connectBusinessNews = await ConnectBusinessNews();
        const container = document.querySelector('.newsline__slider');
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
            }else return
        }
    }
    setTimeout(NewsSliderCard, 5);
    return(
        <section className="newsline container">
            <div className="newsline__text">
                <h1>Current news from the world of finance</h1>
                <p>We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.</p>
            </div>
            <div className="newsline__slider">

            </div>
        </section>
    )
}