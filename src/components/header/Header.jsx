import React, { useState } from 'react'
import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import OrderButton from './../UI/buttons/orderButton/OrderButton'
import NavMenu from './components/navMenu/NavMenu'
import OrderModal from '../UI/modals/orderModal/OrderModal'

const Header = () => {
    const [orderModalVisible, setOrderModalVisible] = useState(false)
    return (
        <>
            <header className={classes.header__wrapper}>
                <img className={classes.header__logo} src={logo} alt="Логотип Cartezh" />
                <NavMenu />
                <OrderButton onClick={() => setOrderModalVisible(true)}>Отправить заявку</OrderButton>
            </header>
            <OrderModal visible={orderModalVisible} setVisible={setOrderModalVisible} />
        </>
    );
}

export default Header;