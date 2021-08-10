import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Header from "../widgets/Header"
import MainForm from '../widgets/MainForm'
import HowItWorks from "../widgets/HowItWorks";

import Explanation from "../widgets/Explanation";
import ContactUsBanner from "../widgets/ContactUsBanner";
import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Main.css"
import "../styles/FAQlist.css"
import useWindowDimensions from "../properities/windowProps";


const ContactUs = () => {
    const { height, width } = useWindowDimensions();
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
                                    <p>You can also contact us in the following ways:</p>
                                </div>
                            </div>
                            <table className="pb-table contact-us-info">
                                <tbody>
                                <tr>
                                    <td style={{verticalAlign: "top", width: "35px"}}>
                                        <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/06/location_ico.svg"/>
                                    </td>
                                    <td style={{textDecoration: "underline"}}>Ben Gurion Rd 38, Ramat Gan, Israel</td>
                                </tr>
                                <tr className="nitro-offscreen">
                                    <td style={{verticalAlign: "top", width: "35px"}}>
                                        <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/03/email.svg"/>
                                    </td>
                                    <td><a href="mailto:support@payback-ltd.com">support@payback-ltd.com</a></td>
                                </tr>
                                <tr className="nitro-offscreen">
                                    <td style={{verticalAlign: "top", width: "35px"}}>
                                        <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/03/Call33.svg"/>
                                    </td>
                                    <td><a href="tel:+18457898055">Toll Free 1-845-789-8055</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={"cu__info-right-side"}>
                        <div className={"cu__info-rs-content"}>
                            <div className="cu__info-phones-wrapper">
                                <div className="cu__info-phone-item">
                                    <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/06/au_flag.svg"/>
                                    <a href="tel:+61863654977">61-863-654-977</a>
                                </div>
                                <div className="cu__info-phone-item">
                                    <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/06/il_flag.svg"/>
                                    <a href="tel:+97233094596">972-3-309-4596</a>
                                </div>
                                <div className="cu__info-phone-item nitro-offscreen">
                                    <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/06/gb_flag.svg"/>
                                    <a href="tel:+441880930001">44-1880930001</a>
                                </div>
                                <div className="cu__info-phone-item nitro-offscreen">
                                    <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-eeb068e/wp-content/uploads/2021/06/us_flag.svg"/>
                                    <a href="tel:+18457898055">1-845-789-8055</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ContactUs