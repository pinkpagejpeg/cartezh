import React, { useState } from 'react'
import classes from './Pros.module.scss'
import OrderButton from '../UI/buttons/orderButton/OrderButton'
import CallButton from '../UI/buttons/callButton/CallButton'
import ProsItem from './components/prosItem/ProsItem'
import OrderModal from '../UI/modals/orderModal/OrderModal'
import CallModal from '../UI/modals/callModal/CallModal'
import delivery_icon from '../../assets/images/delivery_icon.png'
import low_price_icon from '../../assets/images/low_price_icon.png'
import quality_icon from '../../assets/images/quality_icon.png'

const Pros = () => {
    const [orderModalVisible, setOrderModalVisible] = useState(false)
    const [callModalVisible, setCallModalVisible] = useState(false)
    return (
        <>
            <div className={classes.pros__wrapper} id="pros">
                <h2 className={classes.section_title}>Преимущества</h2>
                <p className={classes.main_text}>Выбирая Cartezh, вы получаете максимум выгоды: бесплатная доставка, 
                низкие цены и гарантия качества. Мы стремимся обеспечить максимальные выгодные условия для наших клиентов, 
                предлагая широкий ассортимент товаров и бесплатную доставку. Наши низкие цены не идут в ущерб качеству, 
                которое подтверждается предоставлением гарантии на длительный срок.</p>
                <div className={classes.pros__cards}>
                    <ProsItem pros={{
                        image: delivery_icon,
                        alt: 'Иконка доставки',
                        title: "Бесплатная доставка",
                        text: "Магазин Cartezh осуществляет бесплатную доставку автозапчастей по России до ПВЗ (пунктов выдачи заказа), почтового отделения или дома."
                    }} />
                    <ProsItem pros={{
                        image: low_price_icon,
                        alt: 'Иконка цены',
                        title: "Низкие цены",
                        text: "Мы предлагаем широкий ассортимент запчастей по выгодным ценам, чтобы помочь вам поддерживать свой автомобиль в отличном состоянии без лишних затрат."
                    }} />
                    <ProsItem pros={{
                        image: quality_icon,
                        alt: 'Иконка качества',
                        title: "Гарантия качества",
                        text: "Cartezh контролирует качество и гарантирует возвраты в соответствии с законом: если купленный товар не подойдет — без разговоров вернем деньги."
                    }} />
                </div>
                <div className={classes.pros__buttons}>
                    <OrderButton onClick={() => setOrderModalVisible(true)}>Отправить заявку</OrderButton>
                    <CallButton onClick={() => setCallModalVisible(true)}>Заказать звонок</CallButton>
                </div>
            </div>
            <OrderModal visible={orderModalVisible} setVisible={setOrderModalVisible} />
            <CallModal visible={callModalVisible} setVisible={setCallModalVisible} />
        </>
    );
}

export default Pros;