import React, {useContext, useEffect, useState} from "react";

import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Main.css"
import "../styles/FAQlist.css"
import "../styles/Blog.css"

import ContactUsBanner from "../widgets/ContactUsBanner";
import PageShortCode from "../widgets/PageShortCode";
import {MainArticles} from "../widgets/ArticlesGeneration";
import {Trans, useTranslation} from "react-i18next";
import {articles} from "../content/blog_articles";
import {Link, useHistory, useParams} from "react-router-dom";
import {AuthContext} from "../properities/AuthContext";


const ArticleGeneration = ({article, history, i18n}) => {
    return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="la-post"  onClick={() => history.push({
                pathname: `/article/${article.short_code}`,
                state: article
            })}>
                <div className={"la-post-image"} style={{backgroundImage: `url(/images/${article.short_code}.jpg)`}}/>
                <div className={"la-post-info"}>
                    <div className={"la-post-info-title"}>{i18n.language === "de" ? article.header2 : article.header}</div>
                </div>
            </div>
        </div>
    )
}

const ArticlesPageGeneration = ({articles, page, history, i18n}) =>{
    let _articles = []

    for(let i = articles.length - 12*(page - 1) - 1; i > articles.length- 1 - 12*page && i >= 0; i--)
        _articles[i] = articles[i];

    return  (_articles.map((a) => {
            return <ArticleGeneration article={a} history={history} i18n={i18n}/>
        }
    ).reverse())
}

const PagesBarGeneration = ({articles, page, setPage, history}) => {
    let j = 0;
    let i = articles.length/12;
    let result = [];

    for(; i > 0; i--, j++){
        result[j] = j+1;
    }

    return(

        <ul className={"blog-pagination-container"}>
            <a tabIndex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev"
               style={ page === 1 ? {cursor: "default"} : {}}>
                <li className={ page === 1 ? "bp-prev disabled" : "bp-prev"}
                    onClick={() => {
                        history.push({pathname: `/blog/?page=${page-1}`,
                            state: page-1})
                    }}
                />
            </a>
            {
                result.map((res)=> {
                    return <li className={res === page ? "bp-page active" : "bp-page"}
                                 onClick={() => {
                                     history.push({pathname: `/blog/?page=${res}`,
                                         state: res})
                                 }}>
                        {res}
                    </li>
                })
            }
            <a tabIndex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev"
                style={ page === result.length ? {cursor: "default"} : {}}>
                <li className={ page === result.length ? "bp-next disabled" : "bp-next"}
                    onClick={() => {
                        history.push({pathname: `/blog/?page=${page+1}`,
                            state: page+1})
                    }}
                />
            </a>
        </ul>
    )
}

const Blog = () => {
    let history = useHistory();
    let id = parseInt(history.location.search.slice(6))
    console.log(id)
    const {t, i18n} = useTranslation();
    const [page, setPage] = useState(id ? id : 1);
    let blog_article = articles
    const {auth, dispatch} = useContext(AuthContext)
    useEffect( () => {
        if(localStorage.Lang !== null || localStorage.Lang !== i18n.language) {
            i18n.changeLanguage(localStorage.Lang)
        }
    },[i18n]);
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;800&display=swap" rel="stylesheet"/>
            <Header state={7}/>
            <PageShortCode path={"Blog"}/>
            <MainArticles article1={blog_article[blog_article.length-1]}
                          article2={blog_article[blog_article.length-2]}
                          article3={blog_article[blog_article.length-3]} />
            <div className="row">
                <div className="col">
                    <h1 className="blog-header">
                        <Trans i18nKey="blog.header2"/>
                    </h1>
                </div>
            </div>
            <div className={"main__container"}>
                <div className={"row blog-posts"}>
                    <ArticlesPageGeneration articles={blog_article} page={page} history={history} i18n={i18n} />
                </div>
            </div>
            <div className={"main__container"}>
                <div className={"col bp-wrap"}>
                    <PagesBarGeneration articles={articles} page={page} setPage={setPage} history={history} />
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default Blog