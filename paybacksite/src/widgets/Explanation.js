import React from "react";

import "../styles/Main.css"

const Explanation = ({header, firstParagraph, secondParagraph  }) => {
    return(
        <div className="main__explanation">
            <div className="main__container">
                <div className="main__exp-content ">
                    <div className="main__exp-header">
                        <div className="main__content-header text-center">
                            {header}
                        </div>
                    </div>
                    <div className="main__exp-border">
                        <span className="main__exp-border-divider"/>
                    </div>
                    <div className="main__exp-description">
                        <div className="main__exp-description-1">
                            <p className="main__info-text">{firstParagraph}</p>
                        </div>
                        <div className="main__exp-description-2">
                            <p className="main__info-text">{secondParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explanation