import React from 'react'
import classes from './MoreButton.module.scss'

const MoreButton = ({ children, ...props }) => {
    return (
        props.isLink ?
            <a {...props} className={classes.more_button} href={props.to}>{children}</a> :
            <button {...props} className={classes.more_button} >{children}</button>
    );
}

export default MoreButton;