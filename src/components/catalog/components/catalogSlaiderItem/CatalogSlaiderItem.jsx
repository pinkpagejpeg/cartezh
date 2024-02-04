import React, { useState } from 'react'
import classes from './CatalogSlaiderItem.module.scss'
import OrderButton from '../../../UI/buttons/orderButton/OrderButton'
import OrderModal from '../../../UI/modals/orderModal/OrderModal'

const CatalogSlaiderItem = (props) => {
    const [orderModalVisible, setOrderModalVisible] = useState(false)
    return (
        <>
            <div className={classes.slaider_item__wrapper}>
                <img className={classes.slaider_item__image} src={props.item.image} alt={props.item.name} />
                <h4 className={classes.slaider_item__price}>{props.item.price} Р</h4>
                <p className={classes.main_text}>{props.item.name}</p>
                <OrderButton onClick={() => setOrderModalVisible(true)}>Отправить заявку</OrderButton>
            </div>
            <OrderModal visible={orderModalVisible} setVisible={setOrderModalVisible} />
        </>
    );
}

export default CatalogSlaiderItem;