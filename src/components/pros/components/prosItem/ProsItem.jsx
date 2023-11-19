import React from 'react'
import classes from './ProsItem.module.scss'

const ProsItem = (props) => {
    return (
        <div className={classes.pros_item__wrapper}>
            <div className={classes.pros_item__image_wrapper}>
                <img className={classes.pros_item__image} src={props.pros.image} />
            </div>
            <h4 className={classes.pros_item__title}>{props.pros.title}</h4>
            <p className={classes.main_text}>{props.pros.text}</p>
        </div>
    );
}

export default ProsItem;