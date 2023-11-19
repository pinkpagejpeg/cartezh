import React from 'react'
import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import OrderButton from './../UI/orderButton/OrderButton'
import NavMenu from './components/navMenu/NavMenu'

const Header = () => {
    return (
        <header className={classes.header__wrapper}>
            <img className={classes.header__logo} src={logo} alt="logo" />
            <NavMenu />
            <OrderButton>Отправить заявку</OrderButton>
        </header>
    );
}

export default Header;