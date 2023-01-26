import './Catalog.css'
import salad from '../../assets/catalog/filter/salad.svg'
import drink from '../../assets/catalog/filter/drink.svg'
import burger from '../../assets/catalog/filter/hamburger.svg'
import snacks from '../../assets/catalog/filter/snacks.svg'
import pizza from '../../assets/catalog/filter/pizza.svg'
import promotion from '../../assets/catalog/filter/discount.svg'

const Catalog = () => {
    return (
        <div className="catalog">
            <div className="header">
                <span>Наше Меню</span>
                <div className="line"></div>
            </div>
            <div className="filter">
                <div className="type_block active">
                    <img src={salad} alt="salad"/>
                    <div className="type_name active">Салаты</div>
                </div>
                <div className="type_block">
                    <img src={drink} alt="salad"/>
                    <div className="type_name">Напитки</div>
                </div>
                <div className="type_block">
                    <img src={burger} alt="salad"/>
                    <div className="type_name">Бургеры</div>
                </div>
                <div className="type_block">
                    <img src={snacks} alt="salad"/>
                    <div className="type_name">Закуски</div>
                </div>
                <div className="type_block">
                    <img src={pizza} alt="salad"/>
                    <div className="type_name">Пицца</div>
                </div>
                <div className="type_block">
                    <img src={promotion} alt="salad"/>
                    <div className="type_name">Акции</div>
                </div>
            </div>
            <div className="products">
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
                <div className="product">
                    <img src='products/salads/salad_1.png' alt="salad"></img>
                </div>
            </div>
        </div>
    )
}   

export default Catalog;