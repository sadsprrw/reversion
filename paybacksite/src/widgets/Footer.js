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
                            <div className="pf__header">Sitelinks</div>
                        </div>
                            <div className="pf-links">
                                <div><a href="">Contact Us</a></div>
                                <div><a href="">About Us</a></div>
                                <div><a href="">FAQ</a></div>
                                <div><a href="">Sitemap</a></div>
                            </div>

                    </div>
                    <div className="pre-footer__column">
                        <div className="pre-footer__col-header">
                            <div className="pf__header">Contact Us</div>
                        </div>
                            <div className="pf-links">
                                <div><a href="">Toll Free 1-845-789-8055</a></div>
                                <div><a href="">AUS 61-863-654-977</a></div>
                                <div><a href="">UK 44-1880930001</a></div>
                                <div><a href="">US 1-845-789-8055</a></div>
                                <div><a href="">IL 972-3-309-4596</a></div>
                            </div>
                    </div>
                    <div className="pre-footer__column">
                        <div className="pre-footer__col-header">
                            <div className="pf__header">Location</div>
                        </div>
                        <div className="pf__location">
                            Ben Gurion Rd 38, Ramat Gan, Israel, 52573
                        </div>
                        <div className="pf__office-schedule">
                            <div className="pf__header">Our Office Hours</div>
                            <div className="pf-list">
                                <div>Mon-Fr: 8:00-19:00 GMT</div>
                                <div>Su: 8:00-14:00 GMT</div>
                                <div>Sat: Closed</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer" >
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    <div className="footer__logo">
                        <div className="footer__logo-wrapper">
                            <img
                                src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/optimized/rev-f8aecb3/wp-content/uploads/2021/04/payback_logo_footer.svg"
                                alt=""/>
                        </div>
                    </div>
                    <div className="footer__content">
                        <div className="footer__column">
                            <div className="footer__text"> © Pay Back Ltd</div>
                        </div>
                        <div className="footer__column">
                            <div className="footer__text">
                                <a href="">Terms & Conditions</a>
                            </div>
                        </div>
                        <div className="footer__column">
                            <div className="footer__text">
                                <a href="">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer