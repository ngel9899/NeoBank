import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { SigningOfDocuments } from '../components/signingOfDocuments/signingOfDocuments';
import { useSelector } from 'react-redux';
import { getApplicationId, getPinApplicationId } from '../app/getApplicationId';
import { SigningOfDocumentsText } from '../components/signingOfDocumentsText/signingOfDocumentsText';
import { getId } from '../app/slice';
import { useAppDispatch } from '../app/hooks';

export const DocumentSign = () => {
  const [send, setSend] = useState<JSX.Element>();
  const id = useSelector(getId);
  const dispatch = useAppDispatch();
  const pin = useSelector(getPinApplicationId);
  useEffect(() => {
    dispatch(getApplicationId(id));
    if (pin != null) {
      setSend(SigningOfDocumentsText);
    } else setSend(<SigningOfDocuments />);
  }, [pin, id]);
  return (
    <section>
      <Header />
      {send}
      <Footer />
    </section>
  );
};