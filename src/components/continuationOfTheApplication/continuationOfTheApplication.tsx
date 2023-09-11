import '../../sass/continuationOfTheApplication.sass';
import React, { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldErrors, useForm } from 'react-hook-form';
import {
  arrContinuationOfTheApplicationBot,
  arrContinuationOfTheApplicationTop,
} from './arrContinuationOfTheApplication';
import { useAppDispatch } from '../../app/hooks';
import { sendFormDataApplication } from '../../app/sliceFormApplication';
import { useSelector } from 'react-redux';
import { getId } from '../../app/slice';
import { getApplicationId, getStatusApplicationId } from '../../app/getApplicationId';
import { DecisionOnTheApplication } from '../decisionOnTheApplication/decisionOnTheApplication';

interface IContinuationOfTheApplication {
  'gender': 'MALE' | 'FEMALE',
  'maritalStatus': 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER',
  'dependentAmount': 'number',
  'passportIssueDate': 'string | Date',
  'passportIssueBranch': 'string',
  'employmentStatus': 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER',
  'employerINN': 'number',
  'salary': 'number',
  'position': 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER',
  'workExperienceTotal': 'number',  //Исходя из логики сервера, рекомендую вводить 15 для теста
  'workExperienceCurrent': 'number', // 4 для теста
}

interface IInputCardApplicationItem {
  label?: string,
  caption: string,
  type?: string,
  placeholder?: string,
  name: keyof IContinuationOfTheApplication,
  select: boolean,
  required: boolean,
  maxLength?: number,
  minLength?: number,
  pattern?: RegExp,
  min?: string,
  max?: string,
  errorText?: string,
  option?: ReadonlyArray<string>,
  big?: boolean,
}

interface IInputCardApplication {
  item: IInputCardApplicationItem,
  register: UseFormRegister<IContinuationOfTheApplication>,
  errors: FieldErrors<IContinuationOfTheApplication>,
}


const InputCardApplication = (InputCardApplicationItem: IInputCardApplication) => {
  const name = InputCardApplicationItem.item.name;
  return (
    <div
      className={'application__inputCard ' + (InputCardApplicationItem.item.big === true ? 'application__inputCard-big' : '')}>
      <label>{InputCardApplicationItem.item.label}</label>
      {!InputCardApplicationItem.item.select &&
        <input
          className={'application-container__input ' + (!InputCardApplicationItem.errors[name] ? 'application-container__success' : 'application-container__error')}
          aria-label={InputCardApplicationItem.item.caption} type={String(InputCardApplicationItem.item.type)}
          placeholder={String(InputCardApplicationItem.item.placeholder)}
          {...InputCardApplicationItem.register(name, {
            required: InputCardApplicationItem.item.required,
            maxLength: InputCardApplicationItem.item.maxLength,
            minLength: InputCardApplicationItem.item.minLength,
            pattern: InputCardApplicationItem.item.pattern,
            min: InputCardApplicationItem.item.min,
            max: InputCardApplicationItem.item.max,
          })} />
      }
      {InputCardApplicationItem.errors[name] && !InputCardApplicationItem.item.select &&
        <p className='application__error'>{InputCardApplicationItem.item.errorText}</p>}
      {InputCardApplicationItem.item.select &&
        <select
          className={'application-container__select ' + (!InputCardApplicationItem.errors[name] ? 'application-select__success' : 'application-select__error')}
          aria-label={InputCardApplicationItem.item.caption}{...InputCardApplicationItem.register(name, {
          required: InputCardApplicationItem.item.required,
        })} >
          <option value=''></option>
          {
            InputCardApplicationItem.item.option?.map((item: string, index: number) =>
              <option value={item} key={index}>{item}</option>,
            )}
        </select>
      }
      {InputCardApplicationItem.errors[name] && InputCardApplicationItem.item.select &&
        <p className='application__error'>{InputCardApplicationItem.item.errorText}</p>}
    </div>
  );
};


export function ContinuationOfTheApplication() {
  const [none, setNone] = useState('');
  const [checkCreditText, setCheckCreditText] = useState<JSX.Element>();
  const { register, handleSubmit, formState: { errors } } = useForm<IContinuationOfTheApplication>({
    mode: 'onSubmit',
  });
  const status = useSelector(getStatusApplicationId);
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const onSubmit = (data: Record<string, any>) => {
    dispatch(sendFormDataApplication({ data, id }));
    setTimeout(() => dispatch(getApplicationId(id)), 500);
    setNone('displayNone');
    setCheckCreditText(<DecisionOnTheApplication />);
  };
  return (
    <>
      {checkCreditText}
      <section className={'application-form__container container' + ' ' + none}>
        <form className='application__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='application-form__title'>
            <h1>Continuation of the application</h1>
            <p>Step 2 of 5</p>
          </div>
          <div>
            <div className='application-form__inputCard-application'>
              {arrContinuationOfTheApplicationTop.map((item, index) =>
                <InputCardApplication item={item} key={index} register={register} errors={errors} />,
              )}
            </div>
          </div>
          <div className='application-form__contact-information'>
            <h2>Employment</h2>
            <div className='application-form__inputCard-application'>
              {arrContinuationOfTheApplicationBot.map((item, index) =>
                <InputCardApplication item={item} key={index} register={register} errors={errors} />,
              )}
            </div>
          </div>
          <div className='application-form__submit'>
            <input type='submit' value='Continue' />
          </div>
        </form>
      </section>
    </>
  );
}