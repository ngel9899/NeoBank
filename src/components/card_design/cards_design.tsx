import '../../sass/cards_design.sass';

export function CardsDesign() {
    return(
        <section className="cardsDesign container">
            <div>
                <div className="cardsDesign-text">
                    <p>Choose the design you like and apply for card right now</p>
                </div>
                <div className="cardsDesign-button">
                    <button>Choose the card</button>
                </div>
            </div>
            <div className="cardsDesign-right">
                <div className="cardsDesign-img">
                    <img src="img/cardImage1.png" alt="cardImage"/>
                    <img src="img/cardImage2.png" alt="cardImage"/>
                    <img src="img/cardImage3.png" alt="cardImage"/>
                    <img src="img/cardImage4.png" alt="cardImage"/>
                </div>
            </div>
        </section>
    )
}