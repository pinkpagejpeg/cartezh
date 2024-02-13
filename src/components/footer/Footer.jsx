import React from 'react'
import classes from './Footer.module.scss'
import logo from '../../assets/images/footer_logo.svg'
import twitter_logo from '../../assets/images/twitter_logo.svg'
import telegram_logo from '../../assets/images/telegram_logo.svg'
import tiktok_logo from '../../assets/images/tiktok_logo.svg'

const Footer = () => {
    return (
        <footer className={classes.footer__wrapper}>
            <div className={classes.footer__container}>
                <img className={classes.footer__logo} src={logo} alt="Логотип Cartezh" />
                <p className={classes.main_text}>©2023-2024 компания ООО "Cartezh" все права защищены
                    Поддержка: cartezh_support@gmail.com</p>
                <div className={classes.footer__dockbox}>
                    <a className={classes.footer__dock} href="#">Условия</a>
                    <a className={classes.footer__dock} href="#">Конфиденциальность</a>
                    <a className={classes.footer__dock} href="#">Cookies</a>
                </div>
                <div className={classes.footer__socialbox}>
                    <a className={classes.footer__social_link} href="#">
                        <img className={classes.footer__social_logo} src={twitter_logo} alt="Иконка Twitter" />
                    </a>
                    <a className={classes.footer__social_link} href="#">
                        <img className={classes.footer__social_logo} src={telegram_logo} alt="Иконка Telegram" />
                    </a>
                    <a className={classes.footer__social_link} href="#">
                        <img className={classes.footer__social_logo} src={tiktok_logo} alt="Иконка TikTok" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;