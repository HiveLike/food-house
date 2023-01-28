import { CATEGORIES } from "../../types/categories";

import salad from '../../assets/catalog/filter/salad.svg'
import drink from '../../assets/catalog/filter/drink.svg'
import burger from '../../assets/catalog/filter/hamburger.svg'
import snacks from '../../assets/catalog/filter/snacks.svg'
import pizza from '../../assets/catalog/filter/pizza.svg'
import promotion from '../../assets/catalog/filter/discount.svg'

const CATEGORIES_ICON = new Map([
    ['Салаты', salad],
    ['Напитки', drink],
    ['Бургеры', burger],
    ['Закуски', snacks],
    ['Пицца', pizza],
    ['Акции', promotion],
]);

const Filter = ({items, setFilteredItems }) => {

    const onClickFilterHandle = (type) => {
        switch (CATEGORIES[type]) {
            case "Салаты":
                console.log("salad");
                setFilteredItems(items.filter((item) => item.category === CATEGORIES.salad));
                break; 
            case "Напитки": 
                setFilteredItems(items.filter((item) => item.category === CATEGORIES.drink));
                break; 
            case "Бургеры": 
                setFilteredItems(items.filter((item) => item.category === CATEGORIES.burger));
                break; 
            case "Закуски": 
                setFilteredItems(items.filter((item) => item.category === CATEGORIES.snacks));
                break; 
            case "Пицца": 
                setFilteredItems(items.filter((item) => item.category === CATEGORIES.pizza));
                break; 
            case "Акции": 
                setFilteredItems(items.filter((item) => item.category === CATEGORIES.promotion));
                break;
            default:
                setFilteredItems(items);
                console.log(type);
        }
    }

    const Buttons = Object.keys(CATEGORIES).map((type) => {
        return (
            <button key={type} onClick={() => onClickFilterHandle(type)} className="type_block">
                <img src={CATEGORIES_ICON.get(CATEGORIES[type])} alt={CATEGORIES[type]}/>
                <div className="type_name">{CATEGORIES[type]}</div>
            </button>            
        )
    });

    return (
        <div className="filter">
            {Buttons}
        </div>
    )
}
export default Filter;