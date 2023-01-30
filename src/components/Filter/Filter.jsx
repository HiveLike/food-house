import { CATEGORIES } from "../../types/categories";

import { discount_icon, drink_icon, hamburger_icon, pizza_icon, salad_icon, snacks_icon } from "../../icons/Catalog_svg";

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

    const iconThis = (type) => {
        switch (type) {
            case "Салаты":
                return (
                    salad_icon()
                )
                break; 
            case "Напитки": 
                return (
                    drink_icon()
                )
                break; 
            case "Бургеры": 
                return (
                    hamburger_icon()
                )
                break; 
            case "Закуски": 
                return (
                    snacks_icon()
                )
                break; 
            case "Пицца": 
                return (
                    pizza_icon()
                )
                break; 
            case "Акции": 
                return (
                    discount_icon()
                )
                break;
            default:
                return (
                    salad_icon()
                )
        }
    }

    const Buttons = Object.keys(CATEGORIES).map((type) => {
        return (
            //<button key={type} onClick={() => onClickFilterHandle(type)} className="type_block">
            //    <img src={CATEGORIES_ICON.get(CATEGORIES[type])} alt={CATEGORIES[type]}/>
            //    <div className="type_name">{CATEGORIES[type]}</div>
            //</button>             
            <button key={type} onClick={() => onClickFilterHandle(type)} className="type_block">
                {iconThis(CATEGORIES[type])}
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