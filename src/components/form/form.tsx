import "../../sass/form.sass";
import {useEffect, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"

const arrInput = [
    {
        label: "Your last name",
        caption: "lastName",
        type: "text",
        placeholder: "For Example Doe",
        name: "lastName",
        select: false,
        required: true
    },
    {
        label: "Your first name",
        caption: "firstName",
        type: "text",
        placeholder: "For Example Jhon",
        name: "firstName",
        select: false,
        required: true
    },
    {
        label: "Your patronymic",
        caption: "middleName",
        type: "text",
        placeholder: "For Example Victorovich",
        name: "middleName",
        select: false,
        required: true
    },
    {
        label: "Select term",
        caption: "term",
        name: "term",
        select: true,
        required: true
    },
    {
        label: "Your email",
        caption: "email",
        type: "email",
        placeholder: "test@gmail.com",
        name: "email",
        select: false,
        required: true
    },
    {
        label: "Your date of birth",
        caption: "birthdate",
        type: "date",
        placeholder: "Select Date and Time",
        name: "birthdate",
        select: false,
        required: true
    },
    {
        label: "Your passport series",
        caption: "passportSeries",
        type: "number",
        placeholder: "0000",
        name: "passportSeries",
        select: false,
        required: true
    },
    {
        label: "Your passport number",
        caption: "Passport number",
        type: "number",
        placeholder: "000000",
        name: "passportNumber",
        select: false,
        required: true
    },

]

export function Form(){
    const { register, handleSubmit } = useForm<IFormInterface>()
    const onSubmit: SubmitHandler<IFormInterface> = (data) => console.log(data)

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
    interface IInputCardItem{
        label?: string,
        caption: string,
        type?: string
        placeholder?: string,
        name: any,
        select: boolean
        required: boolean
        option?: any
    }
    interface IInputCard{
        item: IInputCardItem
    }


    const InputCard = (InputCardItem: IInputCard  ) =>{
        return(
            <div className={InputCardItem.item.caption === "middleName"?"inputCard__Container inputCard-Container__noneAfter" : "inputCard__Container"}>
                <label>{InputCardItem.item.label}</label>
                {!InputCardItem.item.select &&
                    <input aria-label={InputCardItem.item.caption} type={InputCardItem.item.type} placeholder={InputCardItem.item.placeholder} {...register(InputCardItem.item.name, {/*InputCardItem.item.option*/})} />
                }
                {InputCardItem.item.select &&
                    <select aria-label={InputCardItem.item.caption} name={InputCardItem.item.name}>
                        <option value="6">6 month</option>
                        <option value="12">12 month</option>
                        <option value="18">18 month</option>
                        <option value="24">24 month</option>
                    </select>
                }
            </div>
        )
    }

    return (
        <section className="form__container">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__customizeCard">
                    <div className="form-customizeCard__container">
                        <div className="form-customizeCard__content">
                            <div>
                                <h1>Customize your card</h1>
                            </div>
                            <div>
                                <p>Step 1 of 5</p>
                            </div>
                        </div>
                        <div className="form__selectAmount">
                            <div className="form-selectAmount__content">
                                <h3>Select amount</h3>
                                <p className="form-selectAmount-content__value">value</p>
                                <input type="range" placeholder="amount" {...register("amount", {required: true, max: 600000, min: 15000})} />
                                <div className="form-selectAmount-content__minMax">
                                    <p>минимальное</p>
                                    <p>максимальное</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form__haveChosenAmount">
                        <h2>You have chosen the amount</h2>
                        <p>value</p>
                    </div>
                </div>
                <div className="form__contactInformation">
                    <h2>Contact Information</h2>
                    <div className="form-contactInformation__inputCard">
                        {arrInput.map((item, index) =>
                            <InputCard item={item} key={index}/>
                        )}
                    </div>
                </div>
                <div className="form__submit">
                    <input type="submit" />
                </div>
            </form>
        </section>
    );
}

export function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="range" placeholder="amount" {...register("amount", {required: true, max: 600000, min: 15000, pattern: /150000/i})} />
            <input type="text" placeholder="lastName" {...register("lastName", {required: true})} />
            <input type="text" placeholder="firstName" {...register("firstName", {required: true})} />
            <input type="text" placeholder="middleName" {...register} />
            <select {...register("term", { required: true })}>
                <option value="6 month">6 month</option>
                <option value="12 month">12 month</option>
                <option value="18 month">18 month</option>
                <option value="24 month">24 month</option>
            </select>
            <input type="text" placeholder="email" {...register("email", {required: true})} />
            <input type="datetime" placeholder="birthdate" {...register("birthdate", {required: true})} />
            <input type="number" placeholder="passportSeries" {...register} />
            <input type="number" placeholder="passportNumber" {...register("passportNumber", {})} />

            <input type="submit" />
        </form>
    );
}