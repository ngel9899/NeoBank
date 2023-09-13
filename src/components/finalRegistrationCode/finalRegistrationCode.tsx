import '../../sass/finalRegistrationCode.sass';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { getId } from '../../app/slice';
import { getApplicationId, getStatusApplicationId } from '../../app/getApplicationId';
import FinalRegistrationCodeInput from '../finalRegistrationCodeInput/finalRegistrationCodeInput';
import { arrFinalRegistrationCode } from './arrFinalRegistrationCode';
import { getErrorsCode, sendCode, setClearStory } from '../../app/sliceFinalRegistrationCode';
import { persistor } from '../../app/store';

export interface IFinalRegistrationCode {
  pin1: string,
  pin2: string,
  pin3: string,
  pin4: string,
}

export const FinalRegistrationCode = () => {
  const { register, handleSubmit, formState: { errors }, control, watch } = useForm<IFinalRegistrationCode>({
    mode: 'onSubmit',
  });
  const [errore, setErrore] = useState(false);
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const errorStatus = useSelector(getErrorsCode);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const onSubmit = () => {
    dispatch(sendCode({ id, pinCod }));
    setTimeout(() => dispatch(getApplicationId(id)), 500)
  };
  const focusEvent = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /\d/;
    if (!regex.test(e.key)) {
      return;
    }
    inputRefs.current[index]?.focus();
  };
  const getWatch: Record<string, any> = watch();
  useEffect(() => {
    dispatch(getApplicationId(id));
    dispatch(setClearStory());
  }, []);

  let pinCod = '';

  useEffect(() => {
    for (const key in getWatch) {
      pinCod += getWatch[key];
    }
    if (pinCod.length === 4) {
      onSubmit();
      if (errorStatus) {
        setErrore(true);
      }
    }
    //8290 пин
  }, [getWatch]);
  return (
    <section className='final-registration-code'>
      <form className='final-registration-code__form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Please enter confirmation code</h1>
        <div className='final-registration-code-form__code'>
          {arrFinalRegistrationCode.map((item, index) =>
            <FinalRegistrationCodeInput item={item} key={index} register={register} errors={errors} index={index}
                                        focusEvent={focusEvent(index + 1)}
                                        ref={(element) => {
                                          inputRefs.current[index] = element;
                                        }} control={control} getWatch={watch} />,
          )}
        </div>
        {errore === true &&
          <p className='final-registration-code-form__error'>Invalid confirmation code</p>
        }
      </form>
    </section>
  );
};