import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import '../styles/ContactUsBanner.css';
import useWindowDimensions from "../properities/windowProps";

const ContactUsBanner = () => {
    const { height, width } = useWindowDimensions();
    return(
        <div className="contact-us-banner">
            <div className="main__container">
                <div className="cub__container">
                    <div className="cub__left-side">
                        <div className="cub__ls-content">
                            <h4>Contact us</h4>
                            <div className="cub__left-side-sub-header">
                                If you've been ripped off by scammers, get in touch and our team of experts will work to
                                get your money back
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