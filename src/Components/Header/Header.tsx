import React from 'react';
import s from "./Header.module.scss"
import { ReactComponent as Point } from "../../images/Point.svg"
import { ReactComponent as Heart } from "../../images/Heart.svg"
import logo from "../../images/logo1.png"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className={s.header_first}>
                <nav className={s.header_first_navigation}>
                    <li>
                        <Link to={"/"}>Главная</Link>
                    </li>
                    <li>
                        <Link to={"/news"}>Новости</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Размещение и тарифы</Link>
                    </li>
                    <li>
                        <Point className={s.header_point1}/>
                        <a>Объявления на карте</a>
                    </li>
                    <li>
                        <Link to={"/contacts"}>Контакты</Link>
                    </li>
                </nav>
                <div className={s.header_first_button}>
                    <div className={s.link_with_icon}>
                        <Link to={"/"}>Закладки</Link>
                        <Heart className={s.header_heart}/>
                    </div>
                    <a className={s.text_violet}>Вход и регистрация</a>
                </div>
            </div>
            <div className={s.header_second}>
                <div className={s.header_second_container}>
                    <img src={logo} alt="logo"/>
                    <nav className={s.header_second_navigation}>
                        <li>
                            <a>Квартиры на сутки</a>
                            <Point className={s.header_point2}/>
                        </li>
                        <li>
                            <a>Коттеджи и усадьбы</a>
                        </li>
                        <li>
                            <a>Бани и Сауны</a>
                        </li>
                        <li>
                            <a>Авто напрокат</a>
                        </li>
                    </nav>
                    <a className={s.header_second_button}>+ Разместить объявление</a>
                </div>
            </div>
        </header>
    )
}