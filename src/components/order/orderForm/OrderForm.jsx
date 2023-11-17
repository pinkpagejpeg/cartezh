import React from 'react'
import classes from './OrderForm.module.scss'

const OrderForm = () => {
    return ( 
        <div className={classes.order_form__wrapper}>
            <h3 className={classes.form_title}>Форма заказа</h3>
            <form className={classes.order_form__form}>
                <input type="text" className={classes.order_form__input} placeholder="Имя" required></input>
                <input type="tel" className={classes.order_form__input} placeholder="Телефон" required></input>
                <input type="text" className={classes.order_form__input} placeholder="VIN" required></input>
                <input type="text" className={classes.order_form__input} placeholder="Наименование запчасти" required></input>
                <input type="submit" className={classes.order_form__submit} value="Отправить заявку"></input>
            </form>
        </div>
     );
}
 
export default OrderForm;