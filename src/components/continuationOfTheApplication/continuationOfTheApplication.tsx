import '../../sass/continuationOfTheApplication.sass';
import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldErrors, useForm } from 'react-hook-form';

const arrContinuationOfTheApplicationTop = [
  {
    label: 'What\'s your gender',
    caption: 'gender',
    name: 'gender',
    select: true,
    required: true,
    errorText: 'Select one of the options',
    option: ['MALE', 'FEMALE'],
  } as const,
  {
    label: 'Your marital status',
    caption: 'maritalStatus',
    name: 'maritalStatus',
    select: true,
    required: true,
    errorText: 'Select one of the options',
    option: ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'],
  } as const,
  {
    label: 'Your number of dependents',
    caption: 'dependentAmount',
    type: 'number',
    placeholder: '',
    name: 'dependentAmount',
    select: false,
    required: true,
    maxLength: 2,
    minLength: 1,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'Select one of the options',
  } as const,
  {
    label: 'Date of issue of the passport',
    caption: 'passportIssueDate',
    type: 'text',
    placeholder: 'Select Date and Time',
    name: 'passportIssueDate',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Incorrect date of passport issue date',
    big: true,
  } as const,
  {
    label: 'Division code',
    caption: 'passportIssueBranch',
    type: 'text',
    placeholder: '000000',
    name: 'passportIssueBranch',
    select: false,
    required: true,
    maxLength: 6,
    minLength: 6,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'Incorrect date of passport issue date',
    big: true,
  } as const,
];

const arrContinuationOfTheApplicationBot = [
  {
    label: 'Your employment status',
    caption: 'employmentStatus',
    name: 'employmentStatus',
    select: true,
    required: true,
    errorText: 'Select one of the options',
    option: ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
  } as const,
  {
    label: 'Your employer INN',
    caption: 'employerINN',
    type: 'number',
    placeholder: '000000000000',
    name: 'employerINN',
    select: false,
    required: true,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'Department code must be 12 digits',
  } as const,
  {
    label: 'Your salary',
    caption: 'salary',
    type: 'number',
    placeholder: 'For example 100 000',
    name: 'salary',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Enter your salary',
  } as const,
  {
    label: 'Your position',
    caption: 'position',
    name: 'position',
    select: true,
    required: true,
    errorText: 'Incorrect date of passport issue date',
    option: ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'],
  } as const,
  {
    label: 'Your work experience total',
    caption: 'workExperienceTotal',
    type: 'number',
    placeholder: 'For example 10',
    name: 'workExperienceTotal',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Enter your work experience total',
  } as const,
  {
    label: 'Your work experience current',
    caption: 'workExperienceCurrent',
    type: 'number',
    placeholder: 'For example 2',
    name: 'workExperienceCurrent',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Enter your work experience current',
  } as const,
];

interface IContinuationOfTheApplication {
  'gender': 'MALE' | 'FEMALE',
  'maritalStatus': 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER',
  'dependentAmount': 'number',
  'passportIssueDate': 'string',
  'passportIssueBranch': 'string',
  'employmentStatus': 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER',
  'employerINN': 'number',
  'salary': 'number',
  'position': 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER',
  'workExperienceTotal': 'number',
  'workExperienceCurrent': 'number',
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
  big?: boolean,
}

interface IInputCardApplication {
  item: IInputCardApplicationItem,
  register: UseFormRegister<IContinuationOfTheApplication>,
  errors: FieldErrors<IContinuationOfTheApplication>,
  arrOption?: Array<string>
}

const InputCardApplication = (InputCardApplicationItem: IInputCardApplication) => {
  const name = InputCardApplicationItem.item.name;
  return (
    <div
      className={InputCardApplicationItem.item.big === true ? 'inputCard-Container__Big' : ''}>
      <label>{InputCardApplicationItem.item.label}</label>
      {!InputCardApplicationItem.item.select &&
        <input
          className={'inputCard-container__input ' + (!InputCardApplicationItem.errors[name] ? 'inputCard-container__success' : 'inputCard-container__error')}
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
      {InputCardApplicationItem.errors[name] &&
        <p className='inputCard__error'>{InputCardApplicationItem.item.errorText}</p>}
      {InputCardApplicationItem.item.select &&
        <select aria-label={InputCardApplicationItem.item.caption}{...InputCardApplicationItem.register(name, {
          required: InputCardApplicationItem.item.required,
        })} >
          <option value=''></option>
          {/*{
            InputCardApplicationItem.arrOption.map(item: string, index) =>
              <option value={item} key={index}>item</option>
          }*/}
        </select>
      }
    </div>
  );
};


export function ContinuationOfTheApplication() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<IContinuationOfTheApplication>({
    mode: 'onSubmit',
  });
  const onSubmit = () => {
    setLoading(true);
  }; //для проверки
  return (
    <section className='form__container container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Continuation of the application</h1>
          <p>Step 2 of 5</p>
        </div>
        <div className='form__contact-information'>
          <div className='form-contact-information__inputCard'>
            {arrContinuationOfTheApplicationTop.map((item, index) =>
              <InputCardApplication item={item} key={index} register={register} errors={errors} />,
            )}
          </div>
        </div>
        <div className='form__contact-information'>
          <h2>Employment</h2>
          <div className='form-contact-information__inputCard'>
            {arrContinuationOfTheApplicationBot.map((item, index) =>
              <InputCardApplication item={item} key={index} register={register} errors={errors} />,
            )}
          </div>
        </div>
        <div className='form__submit'>
          <input type='submit' value='Continue' />
        </div>
      </form>
    </section>
  );
}