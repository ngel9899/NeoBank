import '../../sass/finalRegistrationCode.sass';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { getData, getId } from '../../app/slice';
import { getApplicationId, getDataApplicationId } from '../../app/getApplicationId';
import FinalRegistrationCodeInput from '../finalRegistrationCodeInput/finalRegistrationCodeInput';
import { arrFinalRegistrationCode } from './arrFinalRegistrationCode';

export interface IFinalRegistrationCode {
  pin1: number,
  pin2: number,
  pin3: number,
  pin4: number,
}

export const FinalRegistrationCode = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFinalRegistrationCode>({
    mode: 'onSubmit',
  });
  const data = useSelector(getDataApplicationId);
  const pin = data!.sesCode;
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const onSubmit = () => {
    console.log();
  };
  const changePinFocus = (pinIndex: number) =>{
    const ref = inputRefs.current[pinIndex]
    if (ref) {
      ref.focus()
    }
  }
  useEffect(() =>{
    dispatch(getApplicationId(id));
  }, [])
  return (
    <section className='final-registration-code'>
      <form className='final-registration-code__form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Please enter confirmation code</h1>
        <div className='final-registration-code-form__code'>
          {arrFinalRegistrationCode.map((item, index) =>
            <FinalRegistrationCodeInput item={item} key={index} register={register} errors={errors} index={index} />,
          )}
        </div>
        {errors['pin1'] &&
          <p className='final-registration-code-form__error'>Invalid confirmation code</p>
        }
      </form>
    </section>
  );
};