import {Trans} from "react-i18next";
import React from "react";
import {useHistory} from "react-router-dom";
import {articles} from "../content/blog_articles"

export function getLastArticles(article) {
    let lastArticles = []
    console.log(article)
    for(let i = articles.length - 1; i > articles.length - 4; i--){
        if(articles[i].short_code !== article.short_code) lastArticles.push(articles[i]);
    }
    if (lastArticles.length === 2) lastArticles.push(articles[articles.length - 4]);
    return lastArticles;
}

export const MainArticles = ({article1, article2, article3}) => {
    let history = useHistory();
    return(
        <div className="main__container">
        <div className="blog-latest-artcl">
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col">
                            <h1 className="blog-header">
                                <Trans i18nKey="blog.title"/>
                            </h1>
                        </div>
                    </div>
                    <div className="row blog-la-posts">
                        <div className="col-md-7" onClick={() => history.push({
                            pathname: `/article/${article1.short_code}`,
                            state: article1
                        })}>
                            <div className="blog-la-first">
                                <div className="blog-la-post-image"
                                     style={{backgroundImage: `url(/images/${article1.short_code}.jpg)`, backgroundPosition: "center"}}/>
                                <div className="blog-post-info">
                                    <h4 className="blog-post-info-title">{article1.header}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-6 col-md-12 pb-md-4"
                                     onClick={() => history.push({
                                         pathname: "/blog",
                                         state: article2
                                     })}>
                                    <div className={"blog-la-post"}>
                                        <div className="blog-la-post-image"
                                             style={{backgroundImage: `url(/images/${article2.short_code}.jpg)`, backgroundPosition: "center"}}>
                                        </div>
                                        <div className="blog-post-info">
                                            <h4 className="blog-post-info-title">{article2.header}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12 pb-md-4" onClick={() => history.push({
                                    pathname: "/blog/article",
                                    state: article3
                                })}>
                                    <div className={"blog-la-post"}>
                                        <div className="blog-la-post-image"
                                             style={{backgroundImage: `url(/images/${article3.short_code}.jpg)`, backgroundPosition: "center"}}/>
                                        <div className="blog-post-info">
                                            <h4 className="blog-post-info-title">{article3.header}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

