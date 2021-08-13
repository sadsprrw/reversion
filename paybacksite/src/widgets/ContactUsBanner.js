import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import '../styles/ContactUsBanner.css';
import useWindowDimensions from "../properities/windowProps";
import {Trans, useTranslation} from "react-i18next";

const ContactUsBanner = () => {
    const { height, width } = useWindowDimensions();
    const {t, i18n} = useTranslation();
    return(
        <div className="contact-us-banner">
            <div className="main__container">
                <div className="cub__container">
                    <div className="cub__left-side">
                        <div className="cub__ls-content">
                            <h4><Trans i18nKey="cu-banner.header"/></h4>
                            <div className="cub__left-side-sub-header">
                                <Trans i18nKey="cu-banner.title"/>
                            </div>
                            {width <= 767 ? <Form/> : <></>}
                        </div>
                    </div>
                    <div className="cub__right-side" style={width <= 767 ? {display: "none"} : {}}>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsBanner