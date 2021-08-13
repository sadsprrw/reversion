import {Link, Element} from "react-scroll";
import React from "react";
import parse from 'html-react-parser';
import {Trans} from "react-i18next";

const LinkGeneration = ({direction, text}) => {
    return (
        <li><Link activeClass="active" className={direction}
                  to={direction} spy={true} offset={-100} smooth={true} duration={500}>
            {text}
        </Link></li>
    )
}

export const RightSideGeneration = ({links}) => {

    return(
        <div className="main__tof-right-side" >
            <div className="main__tof-rs-wrapper">
                <div className={"main__tof-rs-st"}>
                    <div className="main__tof-rs-content">
                        <div className="main__tof-rs-header">
                            <div className="main__tof3-header text-center">
                                <Trans i18nKey="toc"/>
                            </div>
                        </div>
                        <div>
                            <ul className="tof-links">
                                {
                                    links.map((l) => {
                                        return <LinkGeneration direction={l.to} text={l.text} />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const IndentGeneration = ({indent}) => {
    return(
        <p className="main__content-info-text">{parse(indent)}</p>
    )
}

const KeyPointsGeneration = ({points}) => {
    return(
        <div className={"key-points-wrapper"}>
            <div className={"main__content-container"}>
                <h2 className={"main__text-content-header"}>Key Points</h2>
            </div>

            <span className={"main__exp-border-divider"} style={{width: "100%", marginBottom: "14px"}}/>
            <ul className='main__marker-list'>
                {points.map((p) => {
                    return (<li>{p}</li>)
                })}
            </ul>
        </div>
    )
}

export const ParagraphGeneration = ({paragraph}) => {
    return(
        <Element  name={paragraph.name}>
            <div className="main__content-container">
                <h2 className="main__text-content-header">
                    {paragraph.header}
                </h2>
            </div>
            <div className="main__content-container">
                {paragraph.indents.map((i) => {
                    return (i.keypoint ? <KeyPointsGeneration points={i.points}/> : <IndentGeneration indent={i}/>)
                })}
            </div>
        </Element>
    )
}