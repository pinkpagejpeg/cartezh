import React from 'react'
import classes from './Catalog.module.scss'
import CatalogMenu from './components/catalogMenu/CatalogMenu';
import CatalogSlaider from './components/catalogSlaider/CatalogSlaider';

const Catalog = () => {
    return (
        <div className={classes.catalog__wrapper}>
            <h2 className={classes.section_title}>Каталог</h2>
            <p className={classes.main_text}>Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. </p>
            <div className={classes.catalog__slaider}>
                <CatalogMenu />
                <CatalogSlaider />
            </div>
        </div>
    );
}

export default Catalog;