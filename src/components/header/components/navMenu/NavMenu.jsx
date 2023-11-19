import React from 'react'
import classes from './NavMenu.module.scss'

const NavMenu = () => {
    return (
        <nav className={classes.header__nav}>
            <ul className={classes.header__menu}>
                <li className={classes.header__menu_item}><a className={classes.header__link} href="#">Каталог</a></li>
                <li className={classes.header__menu_item}><a className={classes.header__link} href="#">Преимущества</a></li>
                <li className={classes.header__menu_item}><a className={classes.header__link} href="#">Заказ</a></li>
                <li className={classes.header__menu_item}><a className={classes.header__link} href="#">Контакты</a></li>
            </ul>
        </nav>
    );
}

export default NavMenu;