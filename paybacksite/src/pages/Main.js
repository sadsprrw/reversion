import React from "react";

import Header from "../widgets/Header"
import MainForm from '../widgets/MainForm'
import HowItWorks from "../widgets/HowItWorks";
import ContactUsBanner from "../widgets/ContactUsBanner";
import Explanation from "../widgets/Explanation";
import Footer from "../widgets/Footer";

import "../styles/Main.css"
import Slider from "react-slick";

import {settings} from "../properities/sliderSetings";
import {mfHeader1, mfHeader2, meHeader, meParagraph1, meParagraph2} from "../content/text";
import {mtocLinks, mtocParagraphs} from "../content/table";
import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";

import { Link, useHistory } from 'react-router-dom';
import useWindowDimensions from "../properities/windowProps";

const Main = () => {
    const { height, width } = useWindowDimensions();

    return(
        <>
            <Header state={0}/>
            <MainForm firstHeader={"main.title1"} secondHeader={"main.title2"} state={0}/>
            <HowItWorks/>
            <div className="main__money-info">
                <div className="main__container">
                    <div className="main__money-info-content">
                        <div className="main__money-info-descr">
                            <h3 className="main__money-info-header">
                                Money retrieved in June 2021
                            </h3>
                            <div className="main__money-info-amount" style={width > 1216 ? {display: "none"} : {}}>
                                $ 1,072,267
                            </div>
                            <div className="main__info-text">
                                Our team of experts secures refunds on a daily basis. We assist businesses as well as
                                individuals in their pursuit of funds lost to scammers. Our goal is to continually
                                improve in our endeavors and we are always here to help you in your fight for what is
                                rightfully yours.
                            </div>
                        </div>
                        <div className="main__money-info-number" style={width < 1216 ? {display: "none"} : {}}>
                            <div className="main__money-info-amount">
                                $ 1,072,267
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__about-us">
                <div className="main__about-us-container">
                    <div className="column" style={width <= 767 ? {display:"none"} : {}}>
                        <div className="main__about-us-img-container">
                            <img
                                src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/source/rev-00c0f66/wp-content/uploads/2021/03/handshake2.svg"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="main__about-us-info">
                            <div className="main__about-us-descr">
                                <h2 className="main__content-header">
                                    Why work with us?
                                </h2>
                            </div>
                            <div className="main__about-us-img-container" style={width > 767 ? {display:"none"} : {}}>
                                <img
                                    src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/source/rev-00c0f66/wp-content/uploads/2021/03/handshake2.svg"/>
                            </div>
                            <div className="main__about-us-descr">
                                <p className="main__info-text">The short answer: We will never take a case we think we
                                    can’t win. Your time is as valuable as ours, and that’s why we are completely
                                    transparent in our evaluation of every case. If it can’t be done, we will tell you
                                    so. But, if we will feel there is a case to answer, then we’ll get to work right
                                    away.</p>
                            </div>
                            <div className="main__about-us-descr">
                                <Link to="/about_us" className="btn-outline">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__money-back">
                <div className="main__container">
                    <div className="main__mb-content">
                        <div className="main__mb-header">
                            <h3 className="main__mb-header-text">Let's get your money back!</h3>
                        </div>
                        <div className="main__mb-description">
                            <div className="main__mb-description-text">If you’ve lost money to scammers, contact us now
                                and we’ll work with you to get your money back!
                            </div>
                        </div>
                        <div className="main__mb-btn">
                            <Link to="/contact_us" className="yellow-btn">Get a free consultation</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Explanation header={meHeader} firstParagraph={meParagraph1} secondParagraph={meParagraph2}/>
            <div className="main__slider">
                <div className="main__container">
                    <div className="main__slider-content">
                        <div className="main__slider-header">
                            <h2 className="main__content-header text-center">
                                Businesses we have successfully retrieved money from
                            </h2>
                        </div>
                        <div className="main__exp-border">
                            <span className="main__exp-border-divider"/>
                        </div>
                        <div className="main-form-ls__carousel">
                            <Slider {...settings}
                                    slidesToShow={width > 1216 ? 3 : width > 767 ? 2 : 1}
                                    slidesToScroll={width > 1216 ? 3 : width > 767 ? 2 : 1}>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                                <div>
                                    <img className="slider-item" src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__table-of-content">
                {width > 767 ?
                    <div className="main__container">
                        <div className="main__tof-left-side">
                            <div className="main__tof-ls-content">
                                {mtocParagraphs.map((p) => {
                                    return <ParagraphGeneration paragraph={p}/>
                                })}
                            </div>
                        </div>
                        <RightSideGeneration links={mtocLinks}/>
                    </div>
                    :
                    <div className="main__container" style={{flexDirection: "column", alignItems: "center"}}>
                        <RightSideGeneration links={mtocLinks}/>
                        <div className="main__tof-left-side">
                            <div className="main__tof-ls-content">
                                {mtocParagraphs.map((p) => {
                                    return <ParagraphGeneration paragraph={p}/>
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}
export default Main;