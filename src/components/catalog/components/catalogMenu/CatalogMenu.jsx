import React from 'react'
import classes from './CatalogMenu.module.scss'
import { categories } from '../../../../utils/dictionaries/CategorySelectDictionary'

const CatalogMenu = ({ handleChangeCategory }) => {
    const handleClick = (e, categoryValue) => {
        e.preventDefault();
        handleChangeCategory(categoryValue);
    }

    return (
        <div className={classes.catalog_menu__wrapper}>
            <ul className={classes.catalog_menu__categories}>
                {
                    categories.map(category => (
                        <li
                            className={classes.catalog_menu__category}
                            key={category.icon}
                            onClick={(e) => handleClick(e, category.value)}
                        >
                            <a className={classes.catalog_menu__link} href={category.link}>
                                <img className={classes.catalog_menu__icon} src={category.icon} />{category.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CatalogMenu;