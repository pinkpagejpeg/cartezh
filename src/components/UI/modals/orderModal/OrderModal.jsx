import React from 'react'
import classes from './OrderModal.module.scss'
import close from '../../../../assets/images/close.svg'

const OrderModal = ({ visible, setVisible }) => {
    const rootClasses = [classes.orderModal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    const handleCloseModal = () => {
        setVisible(false)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.order_form__modal_content}>
                <div className={classes.order_form__close_wrapper}>
                    <button className={classes.button_close} onClick={handleCloseModal}>
                        <img src={close} alt="Close" />
                    </button>
                </div>
                <h3 className={classes.form_title}>Форма заказа</h3>
                <form className={classes.order_form__form}>
                    <input type="text" className={classes.form_input} placeholder="Имя" required></input>
                    <input type="tel" className={classes.form_input} placeholder="Телефон" required></input>
                    <input type="text" className={classes.form_input} placeholder="VIN" required></input>
                    <input type="text" className={classes.form_input} placeholder="Наименование запчасти" required></input>
                    <input type="submit" className={classes.form_submit} value="Отправить заявку"></input>
                </form>
            </div>
        </div>
    );
}

export default OrderModal;