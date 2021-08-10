import React from "react";

import Header from "../widgets/Header"
import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Main.css"
import "../styles/FAQlist.css"

import ContactUsBanner from "../widgets/ContactUsBanner";
import PageShortCode from "../widgets/PageShortCode";

const AboutUs = () => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;800&display=swap" rel="stylesheet"/>
            <Header state={6}/>
            <PageShortCode path={"About Us"}/>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default AboutUs