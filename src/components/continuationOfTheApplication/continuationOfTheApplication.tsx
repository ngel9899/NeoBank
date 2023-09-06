import '../../sass/continuationOfTheApplication.sass';
import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldErrors, useForm } from 'react-hook-form';
import {
  arrContinuationOfTheApplicationBot,
  arrContinuationOfTheApplicationTop,
} from './arrContinuationOfTheApplication';

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
          {
            InputCardApplicationItem.item.option?.map((item: string, index: number) =>
              <option value={item} key={index}>{item}</option>,
            )}
        </select>
      }
    </div>
  );
};


export function ContinuationOfTheApplication() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IContinuationOfTheApplication>({
    mode: 'onSubmit',
  });
  const onSubmit = () => {
    setLoading(true);
  };
  return (
    <section className='form__container container'>
      <form className='form-application' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__title'>
          <h1>Continuation of the application</h1>
          <p>Step 2 of 5</p>
        </div>
        <div>
          <div className='form-contact-information__inputCard'>
            {arrContinuationOfTheApplicationTop.map((item, index) =>
              <InputCardApplication item={item} key={index} register={register} errors={errors} />,
            )}
          </div>
        </div>
        <div className='form-application__contact-information'>
          <h2>Employment</h2>
          <div className='form-contact-information__inputCard'>
            {arrContinuationOfTheApplicationBot.map((item, index) =>
              <InputCardApplication item={item} key={index} register={register} errors={errors} />,
            )}
          </div>
        </div>
        <div className='form-application__submit'>
          <input type='submit' value='Continue' />
        </div>
      </form>
    </section>
  );
}