import React from 'react'
import classes from './CatalogSlaiderItem.module.scss'
import OrderButton from '../../../UI/orderButton/OrderButton';

const CatalogSlaiderItem = (props) => {
    return (
        <div className={classes.slaider_item__wrapper}>
            <img className={classes.slaider_item__image} src={props.item.image} />
            <h4 className={classes.slaider_item__price}>{props.item.price} Р</h4>
            <p className={classes.main_text}>{props.item.name}</p>
            <OrderButton>Отправить заявку</OrderButton>
        </div>
    );
}

export default CatalogSlaiderItem;