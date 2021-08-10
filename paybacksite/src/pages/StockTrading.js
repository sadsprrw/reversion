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

import "../styles/FAQlist.css"
import "../styles/Main.css"

import {rcHeader, stHeader, steHeader, steParagraph} from "../content/text";
import { sttocLinks, sttocParagraphs} from "../content/table";
import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import {Element} from "react-scroll";
import useWindowDimensions from "../properities/windowProps";

const StockTrading = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={4}/>
            <MainForm firstHeader={"st.title"} secondHeader={"rc.title"} state={4}/>
            <HowItWorks/>
            <Explanation header={steHeader} firstParagraph={steParagraph}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={sttocLinks}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {sttocParagraphs.map((p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                            <Element name={"p5"} style={{width: "100%"}}>
                                <div className="main__content-container">
                                    <h2 className="main__text-content-header">
                                        Stock scam and fraud FAQ
                                    </h2>
                                </div>
                                <div className="main__content-container">
                                    <Accordion defaultActiveKey="0">
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"}
                                                              variant="link" eventKey="0">

                                                <div className="faq__accordion-title">
                                                    What is SEC Rule 10b-5?
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="0">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    SEC Rule 10b-5 simply states that it is unlawful to commit
                                                    fraud or deceit on anyone. This involves practices listed
                                                    above, but it also includes untrue information
                                                    and even information that is omitted.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="1">

                                                <div className={"faq__accordion-title"}>
                                                    Is it illegal to manipulate stocks?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="1">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    When it comes to the stock market’s regulatory and legal side,
                                                    few words are as broad in their definition and meaning as
                                                    manipulation. Stocks are always manipulated by large and
                                                    small entities in (mostly) legal and ethical ways – that
                                                    is the stock market’s nature. But some forms of stock
                                                    manipulation are illegal, like front running and naked
                                                    short selling. Naked short selling is the shorting of a
                                                    stock without borrowing the underlying stock to short. A
                                                    recent example of this is the percentage of short interest
                                                    in GameStop by hedge funds in early 2021 – hedge funds were
                                                    short 130% of GameStop’s float. In other words, hedge funds
                                                    had 30% more shares short than are available.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="2">

                                                <div className={"faq__accordion-title"}>
                                                    Is the stock market a pyramid scheme?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="2">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    No, the stock market is not a pyramid scheme. Like those who
                                                    run Ponzi schemes, some fraudsters run pyramid schemes
                                                    – but the stock market itself is not a pyramid scheme.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="3">

                                                <div className={"faq__accordion-title"}>
                                                    How can we help you get your money back?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="3">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Check out our website and complete the{"\t"}
                                                    <a href={''}>contact request form.</a>{"\t"}
                                                    An agent will reach out and work with you throughout the entire process.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Element>
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={sttocLinks}/> : <></>}
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default StockTrading