import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import useWindowDimensions from "../properities/windowProps";

const Footer = () => {
    const { height, width } = useWindowDimensions();
    return(
        <>
            <div className="pre-footer">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    <div className="pre-footer__column">
                        <div className="pre-footer__col-header">
                            <div className="pf__header">Contact Us</div>
                        </div>
                            <div className="pf-links">
                                <div><a href="tel:+358942723485">Finland 358942723485</a></div>
                            </div>
                            <div className="pf-links">
                                <div><a href="mailto:wecanhelp@revision.eu.com">wecanhelp@revision.eu.com</a></div>
                            </div>
                    </div>
                    <div className="pre-footer__column">
                        <div className="pre-footer__col-header">
                            <div className="pf__header">Location</div>
                        </div>
                        <div className="pf__location">
                            Bulevardi 15 B, 00120 Helsinki, Finland
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer" >
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    <div className="footer__logo">
                        <div className="footer__logo-wrapper">
                            <img src="/images/header-logo.png" alt=""/>
                        </div>
                    </div>
                    <div className="footer__content">
                        <div className="footer__column">
                            <div className="footer__text"> © Reversion</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer