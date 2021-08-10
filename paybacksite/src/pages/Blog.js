import React, {useState} from "react";

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
import ReactPaginate from 'react-paginate';
import {useHistory} from "react-router-dom";

const handlePageClick = ({event, setPage}) => {
    setPage(event.selected)
}

const ArticleGeneration = ({article}) => {
    return(
        <div className="col-12 col-md-6 col-lg-4 pb-blog-link">
            <div className="la-post">
                <div className={"la-post-image"} style={{backgroundImage: `url(/images/${article.short_code}.jpg)`}}/>
                <div className={"la-post-info"}>
                    <div className={"la-post-info-title"}>{article.header}</div>
                </div>
            </div>
        </div>
    )
}

const ArticlesPageGeneration = ({articles, page}) =>{
    let _articles = []

    for(let i = articles.length - 12*(page - 1) - 1; i > articles.length- 1 - 12*page && i >= 0; i--)
        _articles[i] = articles[i];

    return  (_articles.map((a) => {
            return <ArticleGeneration article={a}/>
        }
    ).reverse())
}

const Blog = () => {
    let history = useHistory();
    let lang = history.location.state
    const {t, i18n} = useTranslation();
    const [page, setPage] = useState(1);
    let blog_article = articles
    // i18n.language === 'de' ? (blog_article = de) :
    //     i18n.language === 'ru' ? (blog_article = ru): (blog_article = pol)
    console.log(blog_article)
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
                        All Articles
                    </h1>
                </div>
            </div>
            <div className={"main__container"}>
                <div className={"row blog-posts"}>
                    <ArticlesPageGeneration articles={blog_article} page={page} />
                </div>
            </div>
            <div className={"main__container"}>
                <div className={"col bp-wrap"}>
                    <ReactPaginate

                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={5}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'blog-pagination-container'}
                        activeClassName={'active'}
                        pageClassName={'bp-page'}
                        previousClassName={'bp-prev'}
                        nextClassName={'bp-next'}
                    />
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default Blog