import "../../sass/form.sass";
import {useEffect, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"

export function Form(){
    interface IFormInterface{
        "amount": "number",
        "term": "number",
        "firstName": "string",
        "lastName": "string",
        "middleName": "string | null",
        "email": "string",
        "birthdate": "string | Date",
        "passportSeries": "string",
        "passportNumber": "string"
    }

    const { register, handleSubmit } = useForm<IFormInterface>()
    const onSubmit: SubmitHandler<IFormInterface> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    );
}