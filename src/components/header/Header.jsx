import React from 'react'
import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import OrderButton from './../UI/orderButton/OrderButton'
import NavMenu from './components/navMenu/NavMenu'

const Header = () => {
    return ( 
        <div className={classes.header__wrapper}>
            <img className={classes.header__logo} src={logo} alt="logo"></img>
            <NavMenu/>
            <OrderButton>Отправить заявку</OrderButton>
        </div>
     );
}
 
export default Header;