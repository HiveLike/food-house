import { CATEGORIES } from "../types/categories";

const ProdItem = ({item}) => {

    const {id, category, name, weight, protein, fats, carbohydrate, url} = item;

    return (
        <div className="product">
            <img src={url} alt={CATEGORIES[category]}>
            </img>
            <div className="prod_description">
                <h1>{name}</h1>
                <h2>{weight} грамм - 1 порция</h2>
                <h3>{protein} - белков, {fats} - жиров, {carbohydrate} - углеводов</h3>

                <button className="prod_buy_button">Добавить в корзину</button>
            </div>
        </div>
    );
}

export default ProdItem;