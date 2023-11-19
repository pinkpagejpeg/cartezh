import React from 'react'
import classes from './CatalogMenu.module.scss'
import engine_oil_icon from '../../../../assets/images/engine_oil_icon.png'
import engine_icon from '../../../../assets/images/engine_icon.png'
import truck_icon from '../../../../assets/images/truck_icon.png'
import disc_icon from '../../../../assets/images/disc_icon.png'
import spark_plug_icon from '../../../../assets/images/spark_plug_icon.png'
import gear_icon from '../../../../assets/images/gear_icon.png'

const CatalogMenu = () => {
    return (
        <div className={classes.catalog_menu__wrapper}>
            <ul className={classes.catalog_menu__categories}>
                <li className={classes.catalog_menu__category}><img className={classes.catalog_menu__icon} src={engine_oil_icon} /><a className={classes.catalog_menu__link} href="#">Автомасла</a></li>
                <li className={classes.catalog_menu__category}><img className={classes.catalog_menu__icon} src={engine_icon} /><a className={classes.catalog_menu__link} href="#">Двигатели и КПП</a></li>
                <li className={classes.catalog_menu__category}><img className={classes.catalog_menu__icon} src={truck_icon} /><a className={classes.catalog_menu__link} href="#">Элементы кузова</a></li>
                <li className={classes.catalog_menu__category}><img className={classes.catalog_menu__icon} src={disc_icon} /><a className={classes.catalog_menu__link} href="#">Колодки и диски</a></li>
                <li className={classes.catalog_menu__category}><img className={classes.catalog_menu__icon} src={spark_plug_icon} /><a className={classes.catalog_menu__link} href="#">Свечи зажигания</a></li>
                <li className={classes.catalog_menu__category}><img className={classes.catalog_menu__icon} src={gear_icon} /><a className={classes.catalog_menu__link} href="#">Прочие запчасти</a></li>
            </ul>
        </div>
    );
}

export default CatalogMenu;