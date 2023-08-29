import '../../sass/form.sass';
import React, { forwardRef, useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

const arrInput = [
  {
    label: 'Your last name',
    caption: 'lastName',
    type: 'text',
    placeholder: 'For Example Doe',
    name: 'lastName',
    select: false,
    required: true,
    pattern: /^[A-Za-z]+$/,
    errorText: 'Enter your last name',
  } as const,
  {
    label: 'Your first name',
    caption: 'firstName',
    type: 'text',
    placeholder: 'For Example Jhon',
    name: 'firstName',
    select: false,
    required: true,
    pattern: /^[A-Za-z]+$/,
    errorText: 'Enter your first name',
  } as const,
  {
    label: 'Your patronymic',
    caption: 'middleName',
    type: 'text',
    placeholder: 'For Example Victorovich',
    name: 'middleName',
    select: false,
    pattern: /^[A-Za-z]+$/,
    required: false,
  } as const,
  {
    label: 'Select term',
    caption: 'term',
    name: 'term',
    select: true,
    required: true,
  } as const,
  {
    label: 'Your email',
    caption: 'email',
    type: 'email',
    placeholder: 'test@gmail.com',
    name: 'email',
    select: false,
    required: true,
    pattern: /[a-z\d!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?/,
    errorText: 'Incorrect email address',
  } as const,
  {
    label: 'Your date of birth',
    caption: 'birthdate',
    type: 'date',
    placeholder: 'Select Date and Time',
    name: 'birthdate',
    select: false,
    required: true,
    min: '1900-01-01',
    max: '2005-08-01',
    maxLength: 10,
    errorText: 'Incorrect date of birth',
  } as const,
  {
    label: 'Your passport series',
    caption: 'passportSeries',
    type: 'number',
    placeholder: '0000',
    name: 'passportSeries',
    select: false,
    required: true,
    maxLength: 4,
    minLength: 4,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'The series must be 4 digits',
  } as const,
  {
    label: 'Your passport number',
    caption: 'Passport number',
    type: 'number',
    placeholder: '000000',
    name: 'passportNumber',
    select: false,
    required: true,
    maxLength: 6,
    minLength: 6,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'The series must be 6 digits',
  } as const,

];

/*const submitPost = (data: any) =>{
    const url = new URL('/application');
    return fetch(url.toString(), {
        method: 'POST',
        body: JSON.stringify(data),
    }).catch(function(error){
        console.log(error);
    });
}*/

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
      className={InputCardItem.item.caption === 'middleName' ? 'inputCard__container inputCard-Container__noneAfter' : 'inputCard__container'}>
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
        <select aria-label={InputCardItem.item.caption} name={InputCardItem.item.name}>
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
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInterface>({
    mode: 'onSubmit',
    defaultValues: { amount: 150000 },
  });
  /*const onSubmit = (data: any) => {submitPost(data);setLoading(true)} направление данных в /application*/
  const onSubmit = (data: object) => {
    console.log(data);
    setLoading(true);
  }; //для проверки
  // @ts-expect-error ignore interface error
  const { amount } = watch<IFormInterface>();

  useEffect(() => {
    const loading = (set: (value: (boolean)) => void) => {
      setTimeout(() => {
        set(false);
      }, 3500);
    };
    loading(setLoading);
  }, [isLoading]);

  return (
    <>{isLoading ? <div className='spinner'>
      <img src={'img/spinner.png'} alt='spinner' />
    </div> : ''}
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

