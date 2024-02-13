import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite';
import classes from './Catalog.module.scss'
import CatalogMenu from './components/catalogMenu/CatalogMenu';
import CatalogSlaider from './components/catalogSlaider/CatalogSlaider';
import CatalogStore from '../../store/CatalogStore';

const Catalog = observer(() => {
    const catalog = CatalogStore.catalog
    const [category, setCategory] = useState('oil')

    const handleChangeCategory = (category) => {
        setCategory(category)
    }

    useEffect(() => {
        CatalogStore.fetchCatalogByCategory(category)
    }, [category])

    return (
        <div id="catalog" className={classes.catalog__wrapper}>
            <h2 className={classes.section_title}>Каталог</h2>
            <p className={classes.main_text}>Широкий ассортимент автозапчастей для всех марок и моделей автомобилей.
            У нас найдется всё - от свечей зажигания и тормозных колодок до запчастей к двигателю и подвеске. 
            Мы предлагаем только качественные и сертифицированные автозапчасти от проверенных производителей, 
            чтобы ваш автомобиль всегда оставался в отличном состоянии.</p>
            <div className={classes.catalog__slaider}>
                <CatalogMenu handleChangeCategory={handleChangeCategory} />
                <CatalogSlaider items={catalog} />
            </div>
        </div>
    );
})

export default Catalog;