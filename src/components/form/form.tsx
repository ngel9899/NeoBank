import '../../sass/form.sass';
import React, { forwardRef, useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { useAppDispatch } from '../../app/hooks';
import { arrInput } from './arrForm';
import {
  sendFormData,
  isLoading, getData,
} from '../../app/slice';
import { Loader } from '../loader/loader';
import { useSelector } from 'react-redux';


interface IFormInterface {
  amount: number,
  term: number,
  firstName: string,
  lastName: string,
  middleName: string | null,
  email: string,
  birthdate: string | Date,
  passportSeries: string,
  passportNumber: string
}

interface IInputCardItem {
  label?: string,
  caption: string,
  type?: string,
  placeholder?: string,
  name: keyof IFormInterface,
  select: boolean,
  required: boolean,
  maxLength?: number,
  minLength?: number,
  pattern?: RegExp,
  min?: string,
  max?: string,
  errorText?: string
}

interface IInputCard {
  item: IInputCardItem
  register: UseFormRegister<IFormInterface>,
  errors: FieldErrors<IFormInterface>
}

interface IAmountWatched {
  register: UseFormRegister<IFormInterface>,
  errors: FieldErrors<IFormInterface>
}

function AmountWatched(amount: IAmountWatched) {
  return <input type='number' {...amount.register('amount' as keyof IFormInterface, {
    required: true, minLength: 5, min: 15000, max: 600000, pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
  })} />;
}

const InputCard = (InputCardItem: IInputCard) => {
  const name = InputCardItem.item.name;
  return (
    <div
      className={(InputCardItem.item.caption === 'middleName' ? 'inputCard-Container__noneAfter' : '') + ' inputCard__container'}>
      <label>{InputCardItem.item.label}</label>
      {!InputCardItem.item.select &&
        <input
          className={'inputCard-container__input ' + (!InputCardItem.errors[name] ? 'inputCard-container__success' : 'inputCard-container__error')}
          aria-label={InputCardItem.item.caption} type={String(InputCardItem.item.type)}
          placeholder={String(InputCardItem.item.placeholder)}
          {...InputCardItem.register(name, {
            required: InputCardItem.item.required,
            maxLength: InputCardItem.item.maxLength,
            minLength: InputCardItem.item.minLength,
            pattern: InputCardItem.item.pattern,
            min: InputCardItem.item.min,
            max: InputCardItem.item.max,
          })} />
      }
      {InputCardItem.errors[name] && <p className='inputCard__error'>{InputCardItem.item.errorText}</p>}
      {InputCardItem.item.select &&
        <select aria-label={InputCardItem.item.caption} {...InputCardItem.register(name, {
          required: InputCardItem.item.required,
        })}>
          <option value='6'>6 month</option>
          <option value='12'>12 month</option>
          <option value='18'>18 month</option>
          <option value='24'>24 month</option>
        </select>
      }
    </div>
  );
};

const Form = forwardRef<HTMLFormElement>(function Form(props, ref: any /*React.MutableRefObject<HTMLFormElement>*/) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInterface>({
    mode: 'onSubmit',
    defaultValues: { amount: 150000 },
  });
  const load = useSelector(isLoading);
  const dispatch = useAppDispatch();
  const onSubmit = (data: Record<string, any>) => {
    dispatch(sendFormData(data));
  };
  // @ts-expect-error ignore interface error
  const { amount } = watch<IFormInterface>();

  return (
    <>
      {load ? <Loader /> : null}
      <section className='form__container'>
        <form className='form' onSubmit={handleSubmit(onSubmit)} ref={ref}>
          <div className='form__customize-card'>
            <div className='form-customize-card__container'>
              <div className='form-customize-card__content'>
                <div>
                  <h1>Customize your card</h1>
                </div>
                <div>
                  <p>Step 1 of 5</p>
                </div>
              </div>
              <div className='form__select-amount'>
                <div className='form-select-amount__content'>
                  <h3>Select amount</h3>
                  <p className='form-select-amount-content__value'>{amount}</p>
                  <AmountWatched register={register} errors={errors} />
                  <div className='form-select-amount-content__minMax'>
                    <p>15 000</p>
                    <p>600 000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='form__have-chosen-amount'>
              <h2>You have chosen the amount</h2>
              <p className='form-select-amount-content__value'>{amount}</p>
            </div>
          </div>
          <div className='form__contact-information'>
            <h2>Contact Information</h2>
            <div className='form-contact-information__inputCard'>
              {arrInput.map((item, index) =>
                <InputCard item={item} key={index} register={register} errors={errors} />,
              )}
            </div>
          </div>
          <div className='form__submit'>
            <input type='submit' value='Continue' />
          </div>
        </form>
      </section>
    </>
  );
});

export default Form;

