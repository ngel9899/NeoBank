import "../../sass/exchangeRate.sass";
import {CurrencyWithdrawal} from "../../function";

export function ExchangeRate(){
    async function Currency(){
        let currency = ['USD', 'EUR', 'CNY', 'CHF', 'TRY', 'JPY'];
        const connectArray = await CurrencyWithdrawal(currency);
        const container = document.getElementById("exchangeRate__currency_list");
        for(let i = 0; i < currency.length; i++){
            let key: any = currency[i];
            container!.innerHTML +=`
                <div>
                    <p>${key}:<span>${connectArray[key]}</span></p>
                </div>
            `
        }
    }
    setTimeout(Currency, 5); //Для проверки задания
    setInterval(Currency, 900000);
    return(
        <section className="exchangeRate container">
            <div className="exchangeRate__container">
                <div>
                    <div className="exchangeRate__text">
                        <h1>Exchange rate in internet bank</h1>
                        <p>Currency</p>
                    </div>
                    <div className="exchangeRate__currency">
                        <div className="exchangeRate__currency_list" id="exchangeRate__currency_list">

                        </div>
                    </div>
                    <div className="exchangeRate__link">
                        <a href="">All courses</a>
                    </div>
                </div>
                <div className="exchangeRate__right_block">
                    <div className="exchangeRate__time">
                        <p>Update every 15 minutes, MSC 09.08.2022</p>
                    </div>
                    <div className="exchangeRate__img">
                        <img src="img/exchange-rate-logo.png" alt="exchange logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}