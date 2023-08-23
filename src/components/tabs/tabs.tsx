import "../../sass/tabs.sass";
import React, {forwardRef, useEffect, useRef, useState} from "react";
import DigitalCreditCard from "../digitalCreditCard/digitalCreditCard";
import Form from "../form/form";

const AboutCard = () => {
    const [cardSmall, setCardSmall] = useState();
    const [cardBig, setCardBig] = useState();

    useEffect( () =>{
        const arrCardSmall = [
            {
                img: "img/money-abountCard.png",
                title: "Up to 50 000 ₽",
                text: "Cash and transfers without commission and percent",
                size: "small",
            },
            {
                img: "img/сalendar-abountCard.png",
                title: "Up to 160 days",
                text: "Without percent on the loan",
                size: "small",
                black: "true",
            },
            {
                img: "img/time-abountCard.png",
                title: "Free delivery",
                text: "We will deliver your card by courier at a convenient place and time for you",
                size: "small",
            },
        ];
        const arrCardBig = [
            {
                img: "img/bag-abountCard.png",
                title: "Up to 12 months",
                text: "No percent. For equipment, clothes and other purchases in installments",
                black: "true",
            },
            {
                img: "img/creditCard-abountCard.png",
                title: "Convenient deposit and withdrawal",
                text: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
            },
        ];

        const card = (arr: any, set: any) => {
            set(arr.map((n: any) =>
                <div key={n.title} className={"aboutCard__card " + (n.black ? "aboutCard-smallCard__card-black" : "") + " " + (n.size === "small" ? "aboutCard-smallCard__card" : "aboutCard-bigCard__card")}>
                    <div className={(n.size === "small" ? "aboutCard-smallCard__content" : "aboutCard-bigCard__content")}>
                        <img src={n.img} alt="credit card"/>
                        <h2>{n.title}</h2>
                        <p>{n.text}</p>
                    </div>
                </div>
            ));
        };

        card(arrCardSmall,setCardSmall);
        card(arrCardBig, setCardBig);


    },[]);

    return(
        <div className="aboutCard">
            <div className="aboutCard__smallCard">
                {cardSmall}
            </div>
            <div className="aboutCard__bigCard">
                {cardBig}
            </div>
        </div>
    )
}
const arrRatesConditions = [
    {
        title: "Card currency",
        text: "Rubles, dollars, euro",
    },
    {
        title: "Interest free period",
        text: "0% up to 160 days",
    },
    {
        title: "Payment system",
        text: "Mastercard, Visa",
    },
    {
        title: "Maximum credit limit on the card",
        text: "600 000 ₽",
    },
    {
        title: "Replenishment and withdrawal",
        text: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    },
    {
        title: "Max cashback per month",
        text: "15 000 ₽",
    },
    {
        title: "Transaction Alert",
        text: "60 ₽ — SMS or push notifications",
        secondTextLine: "0 ₽ — card statement, information about transactions in the online bank",
    },
];

const RatesAndConditions = () => {
    const ratesAndConditionsContent = arrRatesConditions.map((n : any) =>
        <div key={n.title} className="ratesAndConditions__bloc">
            <div className="ratesAndConditions__title">
                <p>{n.title}</p>
            </div>
            <div className="ratesAndConditions__text">
                <p>{n.text}</p>
                {n.secondTextLine ? <p className="ratesAndConditions__secondTextLine">{n.secondTextLine}</p> : ""}
            </div>
        </div>
    );

    return(
        <div className="ratesAndConditions">
            {ratesAndConditionsContent}
        </div>
    )
}
const arrCashback = [
    {
        text: "For food delivery, cafes and restaurants",
        percent: "5%",
    },
    {
        text: "In supermarkets with our subscription",
        percent: "5%",
        color: "true",
    },
    {
        text: "In clothing stores and children's goods",
        percent: "2%",
    },
    {
        text: "Other purchases and payment of services and fines",
        percent: "1%",
        color: "true",
    },
    {
        text: "Shopping in online stores",
        percent: "up to 3%",
    },
    {
        text: "Purchases from our partners",
        percent: "30%",
        color: "true",
    },
]

const Cashback = () =>{

    const cashbackCard = arrCashback.map((n: any) =>
        <div key={n.text} className={"cashback__card " + (n.color ? "cashback__card-color" : "")}>
            <div className="cashback__container">
                <p className="cashback__text">{n.text}</p>
                <p className="cashback__percent">{n.percent}</p>
            </div>
        </div>
    )
    return(
        <div className="cashback">
            {cashbackCard}
        </div>
    )
}

const arrFAQFirst = [
    {
        title: "How to get a card?",
        text: "We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.",
    },
    {
        title: "What documents are needed and how old should one be to get a card?",
        text: "Need a passport. You must be between 20 and 70 years old.",
    },
    {
        title: "In what currency can I issue a card?",
        text: "In rubles, dollars or euro",
    },
    {
        title: "How much income do I need to get a credit card?",
        text: "To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.",
    },
    {
        title: "How do I find out about the bank's decision on my application?",
        text: "After registration, you will receive an e-mail with a decision on your application.",
    },
];
const arrFAQLast = [
    {
        title: "What is an interest free credit card?",
        text: "A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.",
    },
    {
        title: "How to activate a credit card",
        text: "You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.",
    },
    {
        title: "What is a settlement date?",
        text: "The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.",
    },
    {
        title: "What do I need to know about interest rates?",
        text: "For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.",
    },
];

const FAQ = () =>{
    const [activeIndex, setActiveIndex] = useState<any>();

    interface IAccordionItem {
        title: string;
        text: string;
    }

    interface IAccordionProps {
        open: boolean;
        onClick: (...args: any) => any;
        item: IAccordionItem;
    }


    const Accordion = (AccordionProps: IAccordionProps) =>{
        return(
            <details className="FAQ-details" open={AccordionProps.open} onClick={AccordionProps.onClick} >
                <summary>{AccordionProps.item.title}</summary>
                <p>{AccordionProps.item.text}</p>
            </details>
        )
    }

    return(
        <div className="FAQ">
            <div className="FAQ__first-accordion">
                <h1>Issuing and receiving a card</h1>
                <div>
                    {arrFAQFirst.map((item, index) =>
                        <Accordion open={index === activeIndex} onClick={() => setActiveIndex(index)} item={item} key={index} />
                    )}
                </div>
            </div>
            <div className="FAQ__last-accordion">
                <h1>Using a credit card</h1>
                <div>
                    {arrFAQLast.map((item, index) =>
                        <Accordion open={index+arrFAQFirst.length === activeIndex} onClick={() => setActiveIndex(index+arrFAQFirst.length)} item={item} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

const HowToGetCard = () =>{
    const arrHowToGetCard = [
        {
            number: "1",
            text: "Fill out an online application - you do not need to visit the bank",
        },
        {
            number: "2",
            text: "Find out the bank's decision immediately after filling out the application",
        },
        {
            number: "3",
            text: "The bank will deliver the card free of charge, wherever convenient, to your city",
        },
    ];
    const HowToGetCards = arrHowToGetCard.map((n: any) =>
        <div key={n.number} className="howToGetCard__bloc">
            <div className="howToGetCard__content">
                <div className="howToGetCard__number">
                    <p>{n.number}</p>
                </div>
                <div className="howToGetCard__dividing-line">
                    <hr />
                </div>
            </div>
            <div className="howToGetCard__text">
                <p>{n.text}</p>
            </div>
        </div>
    );
    return(
        <div className="howToGetCard">
            <h1>How to get a card</h1>
            <div className="howToGetCard__container">
                {HowToGetCards}
            </div>
        </div>
    )
}



export default function Tabs(){
    const [toggleState, setToggleState] = useState(1);
    const ref = useRef<HTMLFormElement | null>(null);

    return(
        <>
        <DigitalCreditCard ref={ref} />
        <section className="tabs container">
            <div className="tabs__bloc">
                <div className={toggleState === 1 ? "tab tab__active" : "tab"} onClick={() => setToggleState(1)}>about card</div>
                <div className={toggleState === 2 ? "tab tab__active" : "tab"} onClick={() => setToggleState(2)}>Rates and conditions</div>
                <div className={toggleState === 3 ? "tab tab__active" : "tab"} onClick={() => setToggleState(3)}>Cashback</div>
                <div className={toggleState === 4 ? "tab tab__active" : "tab"} onClick={() => setToggleState(4)}>FAQ</div>
            </div>
            <div className="tabs__content-bloc">
                <div className={toggleState === 1 ? "tab-content__active" : "tab-content__inactive"}>
                    <AboutCard />
                </div>
                <div className={toggleState === 2 ? "tab-content__active" : "tab-content__inactive"}>
                    <RatesAndConditions />
                </div>
                <div className={toggleState === 3 ? "tab-content__active" : "tab-content__inactive"}>
                    <Cashback />
                </div>
                <div className={toggleState === 4 ? "tab-content__active" : "tab-content__inactive"}>
                    <FAQ />
                </div>
            </div>
            <HowToGetCard />
            <Form ref={ref} />
        </section>
        </>
    )
}
