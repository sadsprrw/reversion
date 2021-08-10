import React, {useState} from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Header.css"
import "../styles/Burger.css"
import { slide as Menu} from "react-burger-menu"

import { Link, useHistory } from 'react-router-dom';
import {Trans, useTranslation} from "react-i18next";
import {Dropdown} from "react-bootstrap";

const handleBmMenu = (bmMenuOpened, setBmMenuOpened) => {
    if (bmMenuOpened) setBmMenuOpened(false);
    else setBmMenuOpened(true);

}

const Header = ({state}) => {
    const [bmMenuOpened, setBmMenuOpened] = useState(state > 0 && state < 5);
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return(
        <>

            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/css/flag-icon.min.css" rel="stylesheet"/>
            <meta name={"viewport"} content={"width=device-width"}/>
            <header className="header unstyled">
                <div className='container' style={{padding: "0"}}>
                    <div className="header__body">
                        <Link to="/" className="header__logo">
                            <img src="https://cdn-amadc.nitrocdn.com/uSrlKJDDawwYmhhBEJuIlskEJGsKAzSK/assets/static/source/rev-0251d12/wp-content/uploads/2021/03/logo_pb.svg" alt=""/>
                        </Link>
                        <div className="header__white-space">
                        </div>
                        <nav className="header__menu">
                            <ul className="header__list list-unstyled">
                                <li className="header__list-item-contains-child">
                                    <a href="" className="header__link"><Trans i18nKey="header.rc"/></a>
                                    <span className="arrow header__arrow"/>
                                    <ul className="header__sub-menu">
                                        <li><Link to="/binary_options"
                                                  className={ state === 1 ? "header__sub-menu-link active" : "header__sub-menu-link"}>
                                            <Trans i18nKey="header.rc.bo"/></Link>
                                        </li>
                                        <li><Link to="/cryptocurrency"
                                                  className={ state === 2 ? "header__sub-menu-link active" : "header__sub-menu-link"}>
                                            <Trans i18nKey="header.rc.c"/></Link>
                                        </li>
                                        <li><Link to="/forex"
                                                  className={ state === 3 ? "header__sub-menu-link active" : "header__sub-menu-link"}>
                                            <Trans i18nKey="header.rc.f"/></Link>
                                        </li>
                                        <li><Link to="/stock_trading"
                                                  className={ state === 4 ? "header__sub-menu-link active" : "header__sub-menu-link"}>
                                            <Trans i18nKey="header.rc.st"/></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/contact_us"
                                          className={ state === 5 ? "header__link active" : "header__link"}>
                                    <Trans i18nKey="header.cu"/></Link>
                                </li>
                                <li><Link to="/about_us"
                                          className={ state === 6 ? "header__link active" : "header__link"}>
                                    <Trans i18nKey="header.au"/></Link>
                                </li>
                                <li style={{margin: '0'}}><Link to="/blog"
                                                                className={ state === 7 ? "header__link active" : "header__link"}>
                                    <Trans i18nKey="header.b"/></Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__widget">

                                <a href={"tel:+0501678119"} className={"header__widget-icon-call"}/>

                            <div>
                                <Link href={"/contact_us"} className={"header__widget-btn-back"}>
                                    <Trans i18nKey="header.btn"/>
                                </Link>
                            </div>
                            <Dropdown >
                                <Dropdown.Toggle variant="success" className={"header__dd-language"}>
                                    {i18n.language === 'de' ? <span className="flag-icon flag-icon-de"> </span> :
                                       <span className="flag-icon flag-icon-us"> </span>
                                    }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item >
                                        <div onClick={() => changeLanguage("en")}>
                                            <span className="flag-icon flag-icon-us"> </span>English
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <div onClick={() => changeLanguage("de")}>
                                            <span className="flag-icon flag-icon-de"> </span>Deutsche
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="header__burger">
                            <Menu width={"500px"} crossButtonClassName={ "bm-cross-buton-icon" } right>
                                <Link href="/" className="bm-logo"/>
                                <ul className={"bm-list"}>
                                    <li style={bmMenuOpened ? {background: "#f5f5f5"} : {}}>
                                        <Accordion defaultActiveKey={state > 0 && state < 5 ? '1' : ''}>
                                            <Card style={bmMenuOpened ? {background: "#f5f5f5", border: 'none', padding: '0'} : { border: 'none', padding: '0'}}>
                                                <Accordion.Toggle as={Card.Header} className="re-card-header" variant="link" eventKey="1"
                                                onClick={ () => handleBmMenu(bmMenuOpened, setBmMenuOpened)}>
                                                    <span className="arrow bm-arrow" style={bmMenuOpened ? {transform: "rotate(180deg)"} : {}}/>
                                                    <p className="menu-item bm-item-accordion"><Trans i18nKey="header.rc"/></p>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">

                                                    <Card.Body style={{ padding: '0'}}>
                                                        <ul className="bm-sub-menu">
                                                            <li><Link to="/binary_options"
                                                                      className={ state === 1 ? "bm-sub-menu-link active" : "bm-sub-menu-link"}>
                                                                <Trans i18nKey="header.rc.bo"/></Link>
                                                            </li>
                                                            <li><Link to="/cryptocurrency"
                                                                      className={ state === 2 ? "bm-sub-menu-link active" : "bm-sub-menu-link"}>
                                                                <Trans i18nKey="header.rc.c"/></Link>
                                                            </li>
                                                            <li><Link to="/forex"
                                                                      className={ state === 3 ? "bm-sub-menu-link active" : "bm-sub-menu-link"}>
                                                                <Trans i18nKey="header.rc.f"/></Link>
                                                            </li>
                                                            <li><Link to="/stock_trading"
                                                                      className={ state === 4 ? "bm-sub-menu-link active" : "bm-sub-menu-link"}>
                                                                <Trans i18nKey="header.rc.st"/></Link>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>

                                    </li>
                                    <li><Link to="/contact_us"
                                              className={ state === 5 ? "menu-item active" : "menu-item"}>
                                        <Trans i18nKey="header.cu"/></Link>
                                    </li>
                                    <li><Link to="/about_us"
                                              className={ state === 6 ? "menu-item active" : "menu-item"}>
                                        <Trans i18nKey="header.au"/></Link>
                                    </li>
                                    <li><Link to="/blog"
                                              className={ state === 7 ? "menu-item active" : "menu-item"}>
                                        <Trans i18nKey="header.b"/></Link>
                                    </li>
                                    <li><Link to="/contact_us" className="menu-item"><Trans i18nKey="header.btn"/></Link></li>
                                </ul>
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;