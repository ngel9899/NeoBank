import '../../sass/paymentScheduleTable.sass';
import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel, getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { DenyApplication } from '../denyApplication/denyApplication';
import { useDispatch, useSelector } from 'react-redux';
import { sendPayment } from '../../app/slicePayment';
import { getId } from '../../app/slice';
import { useAppDispatch } from '../../app/hooks';
import { getApplicationId } from '../../app/getApplicationId';

interface IPaymentScheduleTable<TData, TValue> {
  columns: ColumnDef<TData, TValue>[],
  data: TData[],
}

export function PaymentScheduleTable<TData, TValue>({
    columns,
    data,
  }: IPaymentScheduleTable<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [check, setCheck] = useState(true);
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const click = () => {
      dispatch(sendPayment(id));
      dispatch(getApplicationId(id));
  };
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <section className='payment-schedule container'>
      <div className='payment-schedule__text'>
        <h1>Payment Schedule</h1>
        <p>Step 3 of 5</p>
      </div>
      <table className='payment-schedule__table'>
        <thead className='payment-schedule__head'>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => <th key={header.id}>
              {flexRender(header.column.columnDef.header,
                header.getContext()
              )}
            </th>)}
          </tr>
        ))}
        </thead>
        <tbody className='payment-schedule__body'>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map( cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      <div className='payment-schedule__button-container'>
        <div className='payment-schedule__button-deny'>
          <button onClick={() => setModal(true)}>Deny</button>
        </div>
        <div className='payment-schedule__button-send'>
          <input name={"checkbox"} type={'checkbox'} onChange={(event) => event.target.checked ? setCheck(false) : setCheck(true)} />
          <label>I agree with the payment schedule</label>
          <button className={!check? 'payment-schedule-button__on' : 'payment-schedule-button__off'} disabled={check} onClick={() => click()}>Send</button>
        </div>
      </div>
      <DenyApplication active={modal} setActive={setModal} />
    </section>
  );
}