import React, { forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { IFinalRegistrationCode } from '../finalRegistrationCode/finalRegistrationCode';


interface IInputFinalRegistrationCodeInput {
  caption: string,
  type: string,
  name: keyof IFinalRegistrationCode,
  required: boolean,
  maxLength: number,
  minLength: number,
  pattern: RegExp,
}

interface IFinalRegistrationCodeInput {
  item: IInputFinalRegistrationCodeInput,
  register: UseFormRegister<IFinalRegistrationCode>,
  errors: FieldErrors<IFinalRegistrationCode>,
  index: number,
}

const FinalRegistrationCodeInput = forwardRef<HTMLFormElement, IFinalRegistrationCodeInput>(function FinalRegistrationCodeInput(data, ref) {
  console.log(data);
  return (
    <input aria-label={data.item.caption} type={String(data.item.type)} ref={el =>{ if(el){ref.current[data.index] }}} {...data.register(data.item.name, {
      required: data.item.required,
      maxLength: data.item.maxLength,
      minLength: data.item.minLength,
      pattern: data.item.pattern,
    })}  />
  );
});

export default FinalRegistrationCodeInput;