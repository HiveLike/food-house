import './Catalog.css'
import { useEffect, useState } from 'react'
import { PRODUCTS } from '../../data/products'
import ProdItem from '../../item/Item'

import Filter from '../Filter/Filter'

const initialItemsState = PRODUCTS;

const Catalog = () => {
    const [items, setItems] = useState(initialItemsState);
    const [filteredItems, setFilteredItems] = useState(initialItemsState);

    useEffect(() => {
        setFilteredItems(items);
    }, [items])

    return (
        <div className="catalog">
            <div className="header">
                <span>Наше Меню</span>
                <div className="line"></div>
            </div>
            <Filter  items={items} setFilteredItems={setFilteredItems}/>
            <div className="products">
                {
                    filteredItems.length === 0 ?
                    <h3>Продуктов пока нет</h3>
                    :
                    filteredItems.map((item) => <ProdItem key={item.id} item={item} />)
                }
            </div>
            <button className="more">Показать ещё</button>
        </div>
    )
}   

export default Catalog;