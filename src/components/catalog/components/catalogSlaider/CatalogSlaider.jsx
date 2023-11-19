import React from 'react'
import classes from './CatalogSlaider.module.scss'
import CatalogSlaiderItem from '../catalogSlaiderItem/CatalogSlaiderItem';
import maslo_g_energy from '../../../../assets/images/maslo_motornoe_g_energy.jpg'
import slaider_prev_button from '../../../../assets/images/slaider_prev_button.svg'
import slaider_next_button from '../../../../assets/images/slaider_next_button.svg'

const CatalogSlaider = () => {
    return (
        <div className={classes.catalog_slaider__wrapper}>
            <a className={classes.catalog_slaider__buttons}><img src={slaider_prev_button} /></a>
            <div className={classes.catalog_slaider__mainbox}>
                <div className={classes.catalog_slaider__line}>
                <CatalogSlaiderItem item={{
                    image: maslo_g_energy,
                    price: 1500,
                    name: "Масло моторное G-Energy 10W-40"
                }} />
                <CatalogSlaiderItem item={{
                    image: maslo_g_energy,
                    price: 1500,
                    name: "Масло моторное G-Energy 10W-40"
                }} />
                <CatalogSlaiderItem item={{
                    image: maslo_g_energy,
                    price: 1500,
                    name: "Масло моторное G-Energy 10W-40"
                }} />
                </div>
            </div>
            <a className={classes.catalog_slaider__buttons}><img src={slaider_next_button}/></a>
        </div>
    );
}

export default CatalogSlaider;