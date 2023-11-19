import React from 'react'
import classes from './Pros.module.scss'
import OrderButton from '../UI/orderButton/OrderButton'
import CallButton from '../UI/callButton/CallButton'
import ProsItem from './components/prosItem/ProsItem'
import delivery_icon from '../../assets/images/delivery_icon.png'
import low_price_icon from '../../assets/images/low_price_icon.png'
import quality_icon from '../../assets/images/quality_icon.png'

const Pros = () => {
    return (
        <div className={classes.pros__wrapper}>
            <h2 className={classes.section_title}>Преимущества</h2>
            <p className={classes.main_text}>Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. </p>
            <div className={classes.pros__cards}>
                <ProsItem pros={{
                    image: delivery_icon,
                    title: "Бесплатная доставка",
                    text: "Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач."
                }} />
                <ProsItem pros={{
                    image: low_price_icon,
                    title: "Низкие цены",
                    text: "Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач."
                }} />
                <ProsItem pros={{
                    image: quality_icon,
                    title: "Гарантия качества",
                    text: "Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач."
                }} />
            </div>
            <div className={classes.pros__buttons}>
                <OrderButton>Отправить заявку</OrderButton>
                <CallButton>Заказать звонок</CallButton>
            </div>
        </div>
    );
}

export default Pros;