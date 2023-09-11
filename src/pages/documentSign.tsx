import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { SigningOfDocuments } from '../components/signingOfDocuments/signingOfDocuments';
import { useSelector } from 'react-redux';
import { getApplicationId, getDataApplicationId } from '../app/getApplicationId';
import { SigningOfDocumentsText } from '../components/signingOfDocumentsText/signingOfDocumentsText';
import { getId } from '../app/slice';
import { useAppDispatch } from '../app/hooks';

export const DocumentSign = () => {
  const [send, setSend] = useState<JSX.Element>();
  const data = useSelector(getDataApplicationId);
  const id = useSelector(getId);
  const dispatch = useAppDispatch();
  /*data.sesCode пинкод*/
  useEffect(() => {
    dispatch(getApplicationId(id));
    console.log(data!.sesCode)
    if (data!.sesCode != null) {
      setSend(SigningOfDocumentsText);
    } else setSend(<SigningOfDocuments />);
  }, [data!.sesCode]);
  return (
    <section>
      <Header />
      {send}
      <Footer />
    </section>
  );
};