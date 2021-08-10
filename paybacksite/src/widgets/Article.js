import React from "react";

import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Main.css"
import "../styles/FAQlist.css"
import "../styles/Blog.css"
import "../styles/Article.css"
import "../styles/HowItWorks.css"

import {Trans, useTranslation} from "react-i18next";
import {Link, useHistory} from "react-router-dom";
import ArticleShortCode from "./ArticleShortCode";
import parse from 'html-react-parser';
import {getLastArticles} from "./ArticlesGeneration";
import ContactUsBanner from "./ContactUsBanner";
import useWindowDimensions from "../properities/windowProps";



const Article = () => {
    let history = useHistory();
    let article = history.location.state
    const {t, i18n} = useTranslation();
    let other_articles = getLastArticles(article);
    const { height, width } = useWindowDimensions();
    return(
        <>
            <Header/>
            <div className={"article-bg"} style={{backgroundImage: `url(/images/${article.short_code}.jpg)`}}>
                <ArticleShortCode path={article.header} state={1}/>
            </div>
            <div className={"article-body"}>
                <div className={"main__container"} style={width > 767 ? {} : {justifyContent: "center"}}>
                    <div className={"ab__right-side"}>
                        <div className={"ab__rs-wrap"}>
                            {parse(article.text)}
                        </div>
                    </div>
                    <div className={"ab__left-side"} style={width > 767 ? {} : {display: "none"}}>
                        <div className={"ab__ls-wrap"}>
                            <div className={"ab__banner"}>
                                <div className={"ab__banner-title"}>
                                    <div className={"ab-wrap"}>
                                        <div className={"ab__banner-title-text"}>
                                            Let's get your money back!
                                        </div>
                                    </div>
                                </div>
                                <div className={"ab__banner-subtitle"}
                                     style={width > 1216 ? {} : {display: "none"}}>
                                    <div className={"ab-wrap"}>
                                        <div className={"ab__banner-subtitle-text text-center"}>
                                            If you’ve lost money to scammers, contact us now and we’ll work with you to get your money back!
                                        </div>
                                    </div>
                                </div>
                                <div className="main__mb-btn">
                                    <Link className="yellow-btn" to="/contact_us">
                                        Get a free consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="blog-header">
                            Latest Resources and Information
                        </h1>
                    </div>
                </div>
                <div className={"latest-articles"}>
                    <div className={"main__container"}>
                        <div className={"la-wrap"}>
                            <div className={"la-post"}>
                                <div className={"la-post-image"} style={{backgroundImage: `url(/images/${other_articles[0].short_code}.jpg)`}}/>
                                <div className={"la-post-info"}>
                                    <div className={"la-post-info-title"}>
                                        {other_articles[0].header}
                                    </div>
                                </div>
                            </div>
                            <div className={"la-post"} style={width > 767 ? {} : {display: "none"}}>
                                <div className={"la-post-image"} style={{backgroundImage: `url(/images/${other_articles[1].short_code}.jpg)`}}/>
                                <div className={"la-post-info"}>
                                    <div className={"la-post-info-title"}>
                                        {other_articles[1].header}
                                    </div>
                                </div>
                            </div>
                            <div className={"la-post"} style={width > 1216 ? {} : {display: "none"}}>
                                <div className={"la-post-image"} style={{backgroundImage: `url(/images/${other_articles[2].short_code}.jpg)`}}/>
                                <div className={"la-post-info"}>
                                    <div className={"la-post-info-title"}>
                                        {other_articles[2].header}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUsBanner />
            <Footer />
        </>
    )
}
export default Article