import React, { forwardRef, useEffect } from 'react';
import '../../sass/finalRegistrationCode.sass';
import { Control, FieldErrors, UseFormWatch, useWatch } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { IFinalRegistrationCode } from '../finalRegistrationCode/finalRegistrationCode';


interface IInputFinalRegistrationCodeInput {
  caption: string,
  type: string,
  name: keyof IFinalRegistrationCode,
  required: boolean,
  minLength: number,
  maxLength: number,
}

interface IFinalRegistrationCodeInput {
  item: IInputFinalRegistrationCodeInput,
  register: UseFormRegister<IFinalRegistrationCode>,
  errors: FieldErrors<IFinalRegistrationCode>,
  index: number,
  focusEvent: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  control: Control<IFinalRegistrationCode, any>,
}

const regex = /\d/;

const FinalRegistrationCodeInput = forwardRef<HTMLInputElement, IFinalRegistrationCodeInput>(function FinalRegistrationCodeInput(data, ref: any) {
  const dataRegister = data.register(data.item.name, {
    required: data.item.required,
    validate: (e: any) => {
      return regex.test(e);
    },
  });
  const name = data.item.name;
  const watchName = useWatch({ control: data.control, name });
  return (
    <input
      className={!watchName ? 'final-registration-code-form__input' : 'final-registration-code-form__input-none-back'}
      aria-label={data.item.caption} type={String(data.item.type)}
      onKeyDown={(event) => {
        if (!regex.test(event.key) && event.key != 'Backspace') {
          event.preventDefault();
          return;
        }
      }}
      defaultValue={''}
      onKeyUp={(event) => {data.focusEvent(event);}}
      maxLength={data.item.maxLength}
      {...dataRegister}
      ref={(element) => {dataRegister.ref(element); ref(element);}} />
  );
});

export default FinalRegistrationCodeInput;