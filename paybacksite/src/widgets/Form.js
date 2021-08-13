import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainForm.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import useWindowDimensions from "../properities/windowProps";
import {Trans, useTranslation} from "react-i18next";

const Form = () => {
    const { height, width } = useWindowDimensions();

    let defaultError = {
        fName: '0',
        lName: '0',
        phone: '0',
        email: '0',
    };
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '49',
        email: '',
        text: '',
    });
    const [errorsData, setErrorsData] = useState({
        fName: '0',
        lName: '0',
        phone: '0',
        email: '0'
    });
    const [loading, setLoading] = useState(false);
    function validation() {

        let result = true
        let newErrorData = defaultError
        if(formData.firstName.length === 0) {
            newErrorData.fName = '1'
            result = false
        }
        if(formData.lastName === "") {
            newErrorData.lName = '1'
            result = false
        }
        if(formData.phone === "") {
            newErrorData.phone = '1'
            result = false
        }
        else if(!isValidPhoneNumber('+' + formData.phone)){
            newErrorData.phone = '2'
            result = false
        }
        if(formData.email === '') {
            newErrorData.email = '1'
            result = false
        }
        else if(!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            newErrorData.email = '2'
            result = false
        }
        setErrorsData(newErrorData);
        return result;
    }
    async function sendForm() {
        let result = validation()
        if(result){
            setLoading(true);
            let response = await (await fetch('http://localhost:5000/send', {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(formData)
            })).json();
            if(response.msg === 'success'){
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '49',
                    email: '',
                    text: '',
                })
            }
            else{
                alert("error");
            }
            setLoading(false);
        }
        else {}
    }
    const {t, i18n} = useTranslation();
    return (
        <div className="main-form-rs__form">
            <div className="main-form-rs__form-header">
                <h4 style={{color: "#112152"}}><Trans i18nKey="form.title"/></h4>
                <div className="main-form-rs__form-sub-header">
                    <Trans i18nKey="form.subtitle"/>
                </div>
            </div>
            <div className="main-form-rs__form-inner">
                <form action="" className={"recover-form"}>
                    <div className="recover-form__input-row">
                        <div className="recover-form__input-wrapper">
                            <input type="text" name="first-name" value={formData.firstName}
                                   onChange={(event) => {
                                       setFormData(
                                           {...formData, firstName: event.target.value}
                                       )}
                                   }
                                   placeholder={i18n.t("form.fname")}
                                   className="recover-form__form-control"/>
                            {errorsData.fName === '1' ?
                                <span className={'form-control__wrong-input'}><Trans i18nKey="form.err1"/></span> : <></>}
                        </div>
                        <div className="recover-form__input-wrapper" style={ width > 1216 ? {marginLeft: "16px"} : {}}>
                            <input type="text" name="last-name" value={formData.lastName}
                                   onChange={(event) => {
                                       setFormData(
                                           {...formData, lastName: event.target.value}
                                       )}
                                   }
                                   placeholder={i18n.t("form.sname")} className="recover-form__form-control"/>
                            {errorsData.lName === '1' ?
                                <span className={'form-control__wrong-input'}><Trans i18nKey="form.err1"/></span> : <></>}
                        </div>
                    </div>
                    <div className="recover-form__input-row">
                        <div className="recover-form__input-wrapper">
                            <PhoneInput
                                specialLabel=""
                                placeholder="50 123 4567"
                                value={formData.phone}
                                onChange={(event) => {
                                    setFormData(
                                        {...formData, phone: event.valueOf()}
                                    )}
                                }
                            />
                            {errorsData.phone === '1' ?
                                <span className={'form-control__wrong-input'}><Trans i18nKey="form.err1"/></span> : <></>}
                            {errorsData.phone === '2' ?
                                <span className={'form-control__wrong-input'}><Trans i18nKey="form.err2"/></span> : <></>}
                        </div>
                    </div>

                    <div className="recover-form__input-row">
                        <div className="recover-form__input-wrapper">
                            <input type="email" name="form-email" placeholder="E-mail"
                                   value={formData.email}
                                   onChange={(event) => {
                                       setFormData(
                                           {...formData, email: event.target.value}
                                       )}
                                   }
                                   className="recover-form__form-control"/>
                            {errorsData.email === '1' ?
                                <span className={'form-control__wrong-input'}><Trans i18nKey="form.err1"/></span> : <></>}
                            {errorsData.email === '2' ?
                                <span className={'form-control__wrong-input'}><Trans i18nKey="form.err3"/></span> : <></>}
                        </div>
                    </div>
                    <div className="recover-form__input-row">
                        <div className="recover-form__input-wrapper">
                    <textarea type="text" name="message" placeholder={i18n.t("form.case")}
                              value={formData.text}
                              onChange={(event) => {
                                  setFormData(
                                      {...formData, text: event.target.value}
                                  )}
                              }
                              className="recover-form__form-control"/>
                        </div>
                    </div>
                    <div className="recover-form__submit-holder">
                        <div onClick={() => sendForm()} className="yellow-btn"><Trans i18nKey="form.btn"/></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form