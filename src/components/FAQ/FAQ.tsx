import '../../sass/FAQ.sass';
import React, { useState } from 'react';

const arrFAQFirst = [
  {
    title: 'How to get a card?',
    text: 'We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.',
  },
  {
    title: 'What documents are needed and how old should one be to get a card?',
    text: 'Need a passport. You must be between 20 and 70 years old.',
  },
  {
    title: 'In what currency can I issue a card?',
    text: 'In rubles, dollars or euro',
  },
  {
    title: 'How much income do I need to get a credit card?',
    text: 'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.',
  },
  {
    title: 'How do I find out about the bank\'s decision on my application?',
    text: 'After registration, you will receive an e-mail with a decision on your application.',
  },
];
const arrFAQLast = [
  {
    title: 'What is an interest free credit card?',
    text: 'A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.',
  },
  {
    title: 'How to activate a credit card',
    text: 'You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.',
  },
  {
    title: 'What is a settlement date?',
    text: 'The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.',
  },
  {
    title: 'What do I need to know about interest rates?',
    text: 'For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.',
  },
];

export const FAQ = () => {
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


  const Accordion = (AccordionProps: IAccordionProps) => {
    return (
      <details className='FAQ__details' open={AccordionProps.open} onClick={AccordionProps.onClick}>
        <summary>{AccordionProps.item.title}</summary>
        <p>{AccordionProps.item.text}</p>
      </details>
    );
  };

  return (
    <section className='FAQ'>
      <div className='FAQ__first-accordion'>
        <h1>Issuing and receiving a card</h1>
        <div>
          {arrFAQFirst.map((item, index) =>
            <Accordion open={index === activeIndex} onClick={() => setActiveIndex(index)} item={item} key={index} />,
          )}
        </div>
      </div>
      <div className='FAQ__last-accordion'>
        <h1>Using a credit card</h1>
        <div>
          {arrFAQLast.map((item, index) =>
            <Accordion open={index + arrFAQFirst.length === activeIndex}
                       onClick={() => setActiveIndex(index + arrFAQFirst.length)} item={item} key={index} />,
          )}
        </div>
      </div>
    </section>
  );
};