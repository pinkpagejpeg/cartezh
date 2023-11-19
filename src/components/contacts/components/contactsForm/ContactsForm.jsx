import React from 'react'
import classes from './ContactsForm.module.scss'

const ContactsForm = () => {
    return (
        <div>
            <div className={classes.contacts_form__wrapper}>
                <h3 className={classes.form_title}>Остались вопросы?</h3>
                <form className={classes.contacts_form__form}>
                    <input type="text" className={classes.contacts_form__input} placeholder="Имя" required></input>
                    <input type="tel" className={classes.contacts_form__input} placeholder="Телефон" required></input>
                    <input type="submit" className={classes.contacts_form__submit} value="Заказать звонок"></input>
                </form>
            </div>
        </div>
    );
}

export default ContactsForm;