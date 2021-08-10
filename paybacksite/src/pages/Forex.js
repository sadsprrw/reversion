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

import {rcHeader, fHeader, feHeader, feParagraph} from "../content/text";
import { ftocLinks, ftocParagraphs} from "../content/table";
import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import {Element} from "react-scroll";
import useWindowDimensions from "../properities/windowProps";

const Forex = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={3}/>
            <MainForm firstHeader={"f.title"} secondHeader={"rc.title"} state={3}/>
            <HowItWorks/>
            <Explanation header={feHeader} firstParagraph={feParagraph}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={ftocLinks}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {ftocParagraphs.map((p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                            <Element name={"p5"} style={{width: "100%"}}>
                                <div className="main__content-container">
                                    <h2 className="main__text-content-header">
                                        Forex Scam FAQ
                                    </h2>
                                </div>
                                <div className="main__content-container">
                                    <Accordion defaultActiveKey="0">
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"}
                                                              variant="link" eventKey="0">

                                                <div className="faq__accordion-title">
                                                    Is Forex a pyramid scheme?
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="0">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    No – but there are scams and fraudsters that create pyramid
                                                    schemes. This kind of behavior exists everywhere and is endemic
                                                    to all traded financial markets. If you are looking for a broker
                                                    and they’re offering to put you into a ‘team’ to build a network,
                                                    odds are it’s a pyramid scheme. Read our related article: What is
                                                    a pyramid scheme and how to avoid them
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="1">

                                                <div className={"faq__accordion-title"}>
                                                    Who regulates the forex markets?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="1">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Several major regulatory bodies/agencies around the globe regulate
                                                    forex markets. In the US, brokers are regulated by the NFA
                                                    (National Futures Association) and the CFTC (Commodities Futures
                                                    Trade Commission) – but not FINRA (Financial Industry Regulatory
                                                    Authority). In the UK, the main regulatory body is the FCA
                                                    (Financial Conduct Authority). In the EU, all nations that make
                                                    up the EU have their respective regulatory agency– but the
                                                    standards that each member State must maintain are established
                                                    in the MiFID (Markets in Financial Instruments Directive).
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="2">

                                                <div className={"faq__accordion-title"}>
                                                    How do I know if a broker is legit?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="2">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Great question! One of the first signs that the broker you
                                                    are looking at is legitimate is if they disclose that they
                                                    are registered with a specific regulatory authority such as
                                                    the FCA (UK) or CFTC (US). Another great way to determine
                                                    legitimacy is to read reviews by current and former customers.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Element>
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={ftocLinks}/> : <></>}
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default Forex