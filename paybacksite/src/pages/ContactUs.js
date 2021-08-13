import React, {useContext, useEffect} from "react";
import Header from "../widgets/Header"
import MainForm from '../widgets/MainForm'

import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Main.css"
import "../styles/FAQlist.css"
import useWindowDimensions from "../properities/windowProps";
import {Trans, useTranslation} from "react-i18next";
import {AuthContext} from "../properities/AuthContext";


const ContactUs = () => {
    const { height, width } = useWindowDimensions();
    const {t, i18n} = useTranslation();
    const {auth, dispatch} = useContext(AuthContext)
    useEffect( () => {
        if(localStorage.Lang!=null || localStorage.Lang !== i18n.language) i18n.changeLanguage(localStorage.Lang)
    },[i18n]);
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;800&display=swap" rel="stylesheet"/>
            <Header state={5}/>
            <MainForm firstHeader={"cu.title1"} secondHeader={"cu.title2"} subHeader={"rc.sub-title"} state={5}/>
            <div className={"cu__info"}>
                <div className={"main__container"} style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    <div className={"cu__info-left-side"}>
                        <div className={"cu__info-ls-content"}>
                            <div className={"cu__info-ls-text-content"}>
                                <div className={"main__text-content-header"}>
                                    <p><Trans i18nKey="cu.info"/></p>
                                </div>
                            </div>
                            <table className="pb-table contact-us-info">
                                <tbody>
                                <tr className="nitro-offscreen">
                                    <td style={{verticalAlign: "top", width: "35px"}}>
                                        <img src="/images/location.png"/>
                                    </td>
                                    <td style={{textDecoration: "underline"}}>Bulevardi 15 B, 00120 Helsinki, Finland</td>
                                </tr>
                                <tr className="nitro-offscreen">
                                    <td style={{verticalAlign: "top", width: "35px"}}>
                                        <img src="/images/post.png"/>
                                    </td>
                                    <td><a href="mailto:wecanhelp@revision.eu.com">wecanhelp@revision.eu.com</a></td>
                                </tr>
                                <tr className="nitro-offscreen">
                                    <td style={{verticalAlign: "top", width: "35px"}}>
                                        <img src="/images/phone.png"/>
                                    </td>
                                    <td><a href="tel:+358942723485">Finland 358942723485</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ContactUs