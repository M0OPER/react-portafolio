import React, {useState, useRef} from "react";
import  * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [contactDates, setContactDates] = useState({
        name:"",
        email:"",
        message:"",
        checkedTerms:false,
    });
    const [emptyInputs, setEmptyInputs] = useState(false);
    const [successSendForm, setsuccessSendForm] = useState(false);
    const [errorSendForm, setErrorSendForm] = useState(false);

    const form= useRef();

    const onSubmit = (e) => {
        //evitar el recargo de la página
        e.preventDefault();

        //validar formulario
        if(contactDates.name==="" || 
           contactDates.email==="" || 
           contactDates.message==="" || 
           contactDates.checkedTerms===false){
            setEmptyInputs(true);
        }
        else{
            emailjs.sendForm(
                'service_elvqfli',//AQUí va su ID DE SERVICIO EMAILJS
                'template_trp01ea',//AQUÍ VA EL TEMPLATE ID
                form.current,
                'tXJghZt10Fjvd06MC'//AQUÍ VA LA PUBLIC KEY
            ).then(
                (result) =>{
                    setsuccessSendForm(true);
                },
                (error) =>{
                    setErrorSendForm(true);
                }
            );
        }

    };
    return(
        <S.ContainerContact id="contact">
            <S.Title>Contáctame</S.Title>
            <S.ContainerForm>
                {successSendForm ? (
                    <S.SuccessMessage>Mensaje enviado correctamente</S.SuccessMessage>
                ) : (
                    <S.Form onSubmit = {onSubmit} ref={form}>
                        <S.InputForm
                            placeholder="Nombres"
                            type="text"
                            name="name"
                            onChange={(e) =>
                                setContactDates({...contactDates, name: e.target.value})
                            }
                            value={contactDates.name}
                        />
                        <S.InputForm
                            placeholder="Correo"
                            type="email"
                            name="email"
                            onChange={(e) =>
                                setContactDates({...contactDates, email: e.target.value})
                            }
                            value={contactDates.email}
                        />
                        <S.TextArea
                            placeholder="Escribe el mensaje"
                            name="message"
                            onChange={(e) =>
                                setContactDates({...contactDates, message:e.target.value})
                            }
                            value={contactDates.message}
                        />
                        <S.ContainerConditions>
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    setContactDates({
                                        ...contactDates,
                                        checkedTerms: e.target.checked,
                                    })
                                }
                            />
                            <span>Aceptar terminos y condiciones</span>
                        </S.ContainerConditions>
                        <S.Button type="submit">Send</S.Button>
                    </S.Form>
                )}
                {emptyInputs && (
                    <p>You should fill all the inputs and accept the terms</p>
                )}
                {errorSendForm && (
                    <S.TextError>There was an error, try it later</S.TextError>
                )}
                        
            </S.ContainerForm>
        </S.ContainerContact>
    );

};


export default Contact;