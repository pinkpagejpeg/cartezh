import React from 'react'
import classes from './Order.module.scss'
import OrderForm from './orderForm/OrderForm'
import order_car from './../../assets/images/order_car.png'

const Order = () => {
    return (
        <div id="order" className={classes.order__wrapper}>
            <h2 className={classes.section_title}>Заказать запчасти</h2>
            <p className={classes.main_text}>Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. </p>
            <div className={classes.order__steps}>
                <div className={classes.order__step_item}>
                    <div className={classes.order__step_icon}>1</div>
                    <p className={classes.main_text}>Заполните форму</p>
                </div>
                <div className={classes.order__step_item}>
                    <div className={classes.order__step_icon}>2</div>
                    <p className={classes.main_text}>Специалист свяжется с вами, поможет подобрать запчасти и оформить заказ</p>
                </div>
                <div className={classes.order__step_item}>
                    <div className={classes.order__step_icon}>3</div>
                    <p className={classes.main_text}>Заказ будет бесплатно доставлен в удобное для вас время</p>
                </div>
            </div>
            <img className={classes.order__image} src={order_car} alt="Order car" />
            <OrderForm />
        </div>
    );
}

export default Order;