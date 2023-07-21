import React, {useState} from 'react';




/*export function FunctionIndex(props){
    function ActivePage(props){
        $(function () {
            let location = window.location.href;
            let cur_url = '/' + location.split('/').pop();
            if (cur_url == '/'){
                $("#active-home").attr('id', 'active');
                SliderGallery();
            }
            $('.footer-links a').each(function () {
                let link = $(this).attr('href');
                if (cur_url == link){
                    $(this).attr('id', 'active');
                    if (cur_url == '/contacts') {
                        $('#Functionindex').append('<script type="text/javascript" charSet="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9582fbdc68507bd200e4460318a3388ef797bb727a911c3d80e68c9cbde5c05c&amp;id=ya-map&amp;lang=ru_RU&amp;scroll=true"></script>');
                    }
                    if (cur_url == '/home'){
                        SliderGallery();
                    }
                }

            });
        });
    }
    ActivePage();
}*/



/*export async function Connect(request){
    try {
        const response = await fetch(url + '?request='+ request);
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log('Ошибка сервера');
        console.error(error);
    }
}*/

/*export function ValidPhone(event){
    $(document).ready(function(){
        const inputElement = document.querySelector('#phone')
        const maskOptions = {
            mask: '+{7}(000)000-00-00'
        }
        IMask(inputElement, maskOptions)

        const applicantForm = document.getElementById('tours-form')
        const myPhone = document.getElementById('phone').value;
        let rePhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        let validPhone = rePhone.test(myPhone);
        if (validPhone){
            let reName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
            let myName = document.getElementById('name').value;
            let validName = reName.test(myName);
            if (validName){
                const formNode = event.target.form
                const isValid = formNode.checkValidity()
                formNode.querySelector('button').disabled = false
            }
            else{
                applicantForm.querySelector('button').disabled = true
            }
        }
        else{
            applicantForm.querySelector('button').disabled = true
        }

    });
}*/


/*
function SerializeForm(formNode) {
    const data = new FormData(formNode)
    let location = window.location.href;
    let cur_url = location.split('/').pop();
    data.append('tour', cur_url);
    return data
}


async function SendData(data, request) {
    return await fetch(url +'?request='+request  , {
        method: 'POST',
        body: data,
    }).catch(function(error){
        console.log(error);
    });
}

async function HandleFormSubmit(event) {
    event.preventDefault()
    const data = SerializeForm(event.target)
    await SendData(data, 'tours-page')

}

export function ToursPageFormEvent(){
    $(document).ready(function(){
        const applicantForm = document.getElementById('tours-form')
        applicantForm.addEventListener('submit', HandleFormSubmit)
        applicantForm.addEventListener('input', ValidPhone)
        applicantForm.querySelector('button').disabled = true
    });
}*/
