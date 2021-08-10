import React from 'react'
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    return(
        <div className="how-it-works">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"/>
            <div className="how-it-works__container">
                <div className="how-it-works__content">
                    <div className="how-it-works__header">
                        <h2 className="how-it-works__major-text">How it works</h2>
                    </div>
                    <div className="how-it-works__cases">
                        <div className="how-it-works__cases-wrapper">
                            <div className="how-it-works__cases-card ryc">
                                <div className="how-it-works__cases-card-main-text">Review Your Case</div>
                                <div className="how-it-works__cases-card-body">Performing preliminary checks to assess
                                    whether the case at hand is plausibly winnable, based on our experience.
                                </div>
                            </div>
                            <div className="how-it-works__cases-card gte">
                                <div className="how-it-works__cases-card-main-text">Gather The Evidence</div>
                                <div className="how-it-works__cases-card-body">Collecting all the information and
                                    documentation required to successfully pursue your case.
                                </div>
                            </div>
                            <div className="how-it-works__cases-card cts">
                                <div className="how-it-works__cases-card-main-text">Confront The Entities</div>
                                <div className="how-it-works__cases-card-body">Systematically confronting all the
                                    entities that have facilitated the illicit transfer of your wealth.
                                </div>
                            </div>
                            <div className="how-it-works__cases-card gymb">
                                <div className="how-it-works__cases-card-main-text">Get Your Money Back</div>
                                <div className="how-it-works__cases-card-body">We take pride in our track record and
                                    assure you that we’ll go to great lengths to get your money back.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks