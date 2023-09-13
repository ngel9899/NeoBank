import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { PaymentScheduleTable } from '../components/paymentScheduleTable/paymentScheduleTables';
import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';
import { getId } from '../app/slice';
import { getApplicationId, getDataApplicationId, getStatusApplicationId } from '../app/getApplicationId';
import { columns } from '../components/paymentScheduleColumns/paymentScheduleColumn';
import { DocumentsFormed } from '../components/documentsFormed/documentsFormed';
import { getDataPayment } from '../app/slicePayment';
import { Page404 } from './404';


export const PaymentSchedule = () => {
  const [createDocument, setCreateDocument] = useState<JSX.Element>();
  const dispatch = useAppDispatch();
  const status = useSelector(getStatusApplicationId);
  const id = useSelector(getId);
  const data = useSelector(getDataApplicationId);
  const dataPayment = useSelector(getDataPayment);
  useEffect(() => {
    dispatch(getApplicationId(id));
    if (status === 'CC_APPROVED') {
      setCreateDocument(<PaymentScheduleTable columns={columns} data={data!.credit.paymentSchedule}/>);
    } else {
      setCreateDocument(<DocumentsFormed />);
    }
  }, [dataPayment, status]);
  return (
    <>
      {status === 'CC_APPROVED' || status === 'DOCUMENT_CREATED' ?
        <section>
          <Header />
          {createDocument}
          <Footer />
        </section> : <Page404 />
      }
    </>
  );
};