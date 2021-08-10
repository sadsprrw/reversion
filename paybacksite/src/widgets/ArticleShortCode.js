import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Main.css"
import "../styles/PageShortCode.css"

import { Link } from 'react-router-dom';

const ArticleShortCode = ({path}) => {

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;800&display=swap" rel="stylesheet"/>

            <div className={"main__container"}>
                <div className={"article-short-code"}>
                    <div className={"psc-wrap"}>
                        <ol className={"asc-items"}>
                            <li>
                                <Link to="/"> Home </Link>
                            </li>
                            <li>
                                <div className={"separator-breadcrumb"}>/</div>
                            </li>
                            <li>
                                <Link to="/blog"> Blog </Link>
                            </li>
                            <li>
                                <div className={"separator-breadcrumb"}>/</div>
                            </li>
                            <li className={"active"}>
                                <span> {path} </span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleShortCode