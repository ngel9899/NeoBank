import "../../sass/cardsDesign.sass";

export function CardsDesign() {
    return(
        <section className="cardsDesign container">
            <div>
                <div className="cardsDesign__text">
                    <p>Choose the design you like and apply for card right now</p>
                </div>
                <div className="cardsDesign__button">
                    <button>Choose the card</button>
                </div>
            </div>
            <div className="cardsDesign__right">
                <div className="cardsDesign__img">
                    <img src="img/cardImage1.png" alt="cardImage"/>
                    <img src="img/cardImage2.png" alt="cardImage"/>
                    <img src="img/cardImage3.png" alt="cardImage"/>
                    <img src="img/cardImage4.png" alt="cardImage"/>
                </div>
            </div>
        </section>
    )
}