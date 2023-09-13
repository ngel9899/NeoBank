import '../../sass/finalRegistrationCode.sass';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { getId } from '../../app/slice';
import { getApplicationId, getStatusApplicationId } from '../../app/getApplicationId';
import FinalRegistrationCodeInput from '../finalRegistrationCodeInput/finalRegistrationCodeInput';
import { arrFinalRegistrationCode } from './arrFinalRegistrationCode';
import {
  getDataCode,
  getErrorsCode,
  getFlagIsloading,
  sendCode,
  setClearStory,
} from '../../app/sliceFinalRegistrationCode';
import { persistor } from '../../app/store';
import { FinalRegistrationCodeTrue } from '../finalRegistrationCodeTrue/finalRegistrationCodeTrue';

export interface IFinalRegistrationCode {
  pin1: string,
  pin2: string,
  pin3: string,
  pin4: string,
}

export const FinalRegistrationCode = () => {
  const { register, handleSubmit, formState: { errors }, control, watch } = useForm<IFinalRegistrationCode>({
    mode: 'onSubmit',
    defaultValues: { pin1: '', pin2: '', pin3: '', pin4: '' },
  });
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const data = useSelector(getDataCode);
  const getErrors = useSelector(getErrorsCode);
  const getFlag = useSelector(getFlagIsloading);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const focusEvent = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /\d/;
    if (!regex.test(e.key)) {
      return;
    }
    inputRefs.current[index]?.focus();
  };

  const getWatch: Array<string> = watch(['pin1', 'pin2', 'pin3', 'pin4']);
  useEffect(() => {
    dispatch(getApplicationId(id));
    if (getErrors){
      dispatch(setClearStory());
    }
  }, []);

  useEffect(() => {
    const pinCod = getWatch.reduce((akkum, value) => {
      return akkum + value;
    }, '');
    if (!/^\d{4}$/.test(pinCod)) return;
    if (getErrors || getFlag) return;
    dispatch(sendCode({ id, pinCod }));
  }, [getWatch, getErrors, getFlag, dispatch]);
  return (
    <>
      {data === true ? <FinalRegistrationCodeTrue /> :
        <section className='final-registration-code'>
          <form className='final-registration-code__form'>
            <h1>Please enter confirmation code</h1>
            <div className='final-registration-code-form__code'>
              {arrFinalRegistrationCode.map((item, index) =>
                <FinalRegistrationCodeInput item={item} key={index} register={register} errors={errors} index={index}
                                            focusEvent={focusEvent(index + 1)}
                                            ref={(element) => {
                                              inputRefs.current[index] = element;
                                            }} control={control} />,
              )}
            </div>
            {getErrors?.status &&
              <p className='final-registration-code-form__error'>Invalid confirmation code</p>
            }
          </form>
        </section>
      }
    </>
  );
};