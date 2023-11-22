import React from 'react'
import classes from './NavMenu.module.scss'

const NavMenu = () => {
    return (
        <nav className={classes.header__nav}>
            <ul className={classes.header__menu}>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#catalog">Каталог</a>
                </li>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#pros">Преимущества</a>
                </li>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#order">Заказ</a>
                </li>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#contacts">Контакты</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;