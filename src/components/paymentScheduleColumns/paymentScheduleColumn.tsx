import '../../sass/paymentScheduleColumns.sass';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

export type Payment = {
  number: number
  date: string
  totalPayment: number
  interestPayment: number
  debtPayment: number
  remainingDebt: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'number',
    header: ({ column }) => {
      return (
        <p
          className='payment-schedule__header-sort'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NUMBER
          {{
            asc: <img src='../../img/payment-schedule-arrow-sort-top.png' alt='arrow' />,
            desc: <img src='../../img/payment-schedule-arrow-sort-bottom.png' alt='arrow' />,
          }[column.getIsSorted() as string] ?? null}
        </p>
      )
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <p
          className='payment-schedule__header-sort'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          DATE
          {{
            asc: <img src='../../img/payment-schedule-arrow-sort-top.png' alt='arrow' />,
            desc: <img src='../../img/payment-schedule-arrow-sort-bottom.png' alt='arrow' />,
          }[column.getIsSorted() as string] ?? null}
        </p>
      )
    },
  },
  {
    accessorKey: 'totalPayment',
    header: ({ column }) => {
      return (
        <p
          className='payment-schedule__header-sort'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TOTAL PAYMENT
          {{
            asc: <img src='../../img/payment-schedule-arrow-sort-top.png' alt='arrow' />,
            desc: <img src='../../img/payment-schedule-arrow-sort-bottom.png' alt='arrow' />,
          }[column.getIsSorted() as string] ?? null}
        </p>
      )
    },
  },
  {
    accessorKey: 'interestPayment',
    header: ({ column }) => {
      return (
        <p
          className='payment-schedule__header-sort'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          INTEREST PAYMENT
          {{
            asc: <img src='../../img/payment-schedule-arrow-sort-top.png' alt='arrow' />,
            desc: <img src='../../img/payment-schedule-arrow-sort-bottom.png' alt='arrow' />,
          }[column.getIsSorted() as string] ?? null}
        </p>
      )
    },
  },
  {
    accessorKey: 'debtPayment',
    header: ({ column }) => {
      return (
        <p
          className='payment-schedule__header-sort'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DEBT PAYMENT
          {{
            asc: <img src='../../img/payment-schedule-arrow-sort-top.png' alt='arrow' />,
            desc: <img src='../../img/payment-schedule-arrow-sort-bottom.png' alt='arrow' />,
          }[column.getIsSorted() as string] ?? null}
        </p>
      )
    },
  },
  {
    accessorKey: 'remainingDebt',
    header: ({ column }) => {
      return (
        <p
          className='payment-schedule__header-sort'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          REMAINING DEBT
          {{
            asc: <img src='../../img/payment-schedule-arrow-sort-top.png' alt='arrow' />,
            desc: <img src='../../img/payment-schedule-arrow-sort-bottom.png' alt='arrow' />,
          }[column.getIsSorted() as string] ?? null}
        </p>
      )
    },
  },
]
