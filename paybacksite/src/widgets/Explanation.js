import React from "react";

import "../styles/Main.css"
import {Trans} from "react-i18next";

const Explanation = ({header, firstParagraph, secondParagraph  }) => {
    return(
        <div className="main__explanation">
            <div className="main__container">
                <div className="main__exp-content ">
                    <div className="main__exp-header">
                        <div className="main__content-header text-center">
                            <Trans i18nKey={header}/>
                        </div>
                    </div>
                    <div className="main__exp-border">
                        <span className="main__exp-border-divider"/>
                    </div>
                    <div className="main__exp-description">
                        <div className="main__exp-description-1">
                            <p className="main__info-text"><Trans i18nKey={firstParagraph}/></p>
                        </div>
                        <div className="main__exp-description-2">
                            <p className="main__info-text"><Trans i18nKey={secondParagraph}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explanation