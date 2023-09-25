import React from 'react';
import '../../sass/accordion.sass';

interface IAccordionProps {
  open: boolean;
  onClick: (...args: Array<any>) => void;
  item: IAccordionItem;
}

interface IAccordionItem {
  title: string;
  text: string;
}

export const Accordion = (AccordionProps: IAccordionProps) => {
  return (
    <details className='accordion__details' open={AccordionProps.open} onClick={AccordionProps.onClick}>
      <summary>{AccordionProps.item.title}</summary>
      <p>{AccordionProps.item.text}</p>
    </details>
  );
};